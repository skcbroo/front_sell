// src/utils/logger.js
const VITE_API_URL = `${import.meta.env.VITE_API_URL}/api/logs`;
const STORAGE_KEY = "__event_queue_v1";
const SESSION_KEY = "__session_id_v1";

let CURRENT_USER_ID = null;

function getSessionId() {
  if (typeof window === "undefined") return "ssr";
  try {
    let s = sessionStorage.getItem(SESSION_KEY);
    if (!s) {
      s = (crypto?.randomUUID?.() || (String(Date.now()) + Math.random()));
      sessionStorage.setItem(SESSION_KEY, s);
    }
    return s;
  } catch {
    return "nosession";
  }
}

let queue = [];
let sending = false;
let flushTimer = null;
const FLUSH_INTERVAL_MS = 5000;
const MAX_BATCH_SIZE = 50;
const MAX_RETRIES = 5;

function loadQueueFromStorage() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) queue = JSON.parse(raw).concat(queue);
  } catch {}
}
function saveQueueToStorage() {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(queue)); } catch {}
}
function scheduleFlush() {
  if (!flushTimer) flushTimer = setTimeout(flush, FLUSH_INTERVAL_MS);
}

async function sendBatch(events, attempt = 1) {
  try {
    const payload = JSON.stringify({ events });
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
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

export async function flush() {
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

export function setUserId(userId) {
  CURRENT_USER_ID = userId || null;
}

/** Baixo nível: enfileira um evento cru */
export function logEvent(type, props = {}, { userId = CURRENT_USER_ID } = {}) {
  if (typeof window === "undefined") return;

  const evt = {
    type: String(type || "unknown").slice(0, 64),
    props: props && typeof props === "object" ? props : {},
    ts: new Date().toISOString(),
    sessionId: getSessionId(),
    userId: userId ?? null,
    url: window.location?.href || null,
    referrer: document?.referrer || null,
    ua: navigator?.userAgent || null,
    lang: navigator?.language || null,
  };
  queue.push(evt);
  queue.length >= MAX_BATCH_SIZE ? flush() : scheduleFlush();
}

/** Conveniências de alto nível (use no app) */
export function logPageview(extra = {}) {
  logEvent("pageview", { path: window.location.pathname, title: document.title, ...extra });
}

export function logCalcClick({ bruto, desagio, liquido }) {
  logEvent("click_calcular", { bruto, desagio, liquido });
}

export function logWhatsappClick(labelOrProps = "Quero receber em 24hrs (zap)") {
  if (typeof labelOrProps === "string") {
    logEvent("cta_whatsapp", { origem: labelOrProps });
  } else {
    logEvent("cta_whatsapp", { origem: "cta", ...(labelOrProps || {}) });
  }
}

/** Opcional: log de erros JS */
export function logError(error, ctx = {}) {
  logEvent("js_error", {
    name: error?.name,
    message: error?.message,
    stack: String(error?.stack || "").slice(0, 2000),
    ...ctx,
  });
}

/** Ganchos de ciclo de vida do browser */
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    if (queue.length > 0 && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify({ events: queue })], { type: "application/json" });
      navigator.sendBeacon(LOG_ENDPOINT, blob);
      queue = []; saveQueueToStorage();
    }
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flush();
  });
}

loadQueueFromStorage();
setInterval(() => flush(), 15000);
