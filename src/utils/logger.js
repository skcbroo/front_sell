// src/utils/logger.js
const LOG_ENDPOINT = `${import.meta.env.VITE_API_URL}/api/logs`;
const STORAGE_KEY = "__event_queue_v1";
const SESSION_KEY = "__session_id_v1";

function getSessionId() {
  let s = sessionStorage.getItem(SESSION_KEY);
  if (!s) {
    s = crypto.randomUUID?.() || String(Date.now()) + Math.random();
    sessionStorage.setItem(SESSION_KEY, s);
  }
  return s;
}

let queue = [];
let sending = false;
let flushTimer = null;
const FLUSH_INTERVAL_MS = 5000;
const MAX_BATCH_SIZE = 50;
const MAX_RETRIES = 5;

function loadQueueFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) queue = JSON.parse(raw).concat(queue);
  } catch {}
}
function saveQueueToStorage() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(queue)); } catch {}
}
function scheduleFlush() {
  if (!flushTimer) flushTimer = setTimeout(flush, FLUSH_INTERVAL_MS);
}

async function sendBatch(events, attempt = 1) {
  try {
    const payload = JSON.stringify({ events });
    if (navigator.sendBeacon) {
      const ok = navigator.sendBeacon(LOG_ENDPOINT, new Blob([payload], { type: "application/json" }));
      if (ok) return true;
    }
    const res = await fetch(LOG_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: payload,
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return true;
  } catch {
    if (attempt >= MAX_RETRIES) return false;
    const delay = Math.min(30000, 500 * 2 ** (attempt - 1));
    await new Promise(r => setTimeout(r, delay));
    return sendBatch(events, attempt + 1);
  }
}

async function flush() {
  clearTimeout(flushTimer); flushTimer = null;
  if (sending || queue.length === 0) return;
  sending = true; saveQueueToStorage();

  while (queue.length > 0) {
    const batch = queue.splice(0, MAX_BATCH_SIZE);
    const ok = await sendBatch(batch);
    if (!ok) { queue = batch.concat(queue); break; }
    saveQueueToStorage();
  }
  sending = false;
  if (queue.length > 0) scheduleFlush();
}

export function logEvent(type, props = {}, { userId = null } = {}) {
  const evt = {
    type,
    props: props && typeof props === "object" ? props : {},
    ts: new Date().toISOString(),
    sessionId: getSessionId(),
    userId,
    url: window.location.href,
    referrer: document.referrer || null,
    ua: navigator.userAgent,
    lang: navigator.language,
  };
  queue.push(evt);
  queue.length >= MAX_BATCH_SIZE ? flush() : scheduleFlush();
}

window.addEventListener("beforeunload", () => {
  if (queue.length > 0 && navigator.sendBeacon) {
    const blob = new Blob([JSON.stringify({ events: queue })], { type: "application/json" });
    navigator.sendBeacon(LOG_ENDPOINT, blob);
    queue = []; saveQueueToStorage();
  }
});

loadQueueFromStorage();
setInterval(() => flush(), 15000);
