// src/utils/analytics.js
import { logEvent } from "./logger"; // nosso logger DIY

export function logWhatsappClick(label) {
  logEvent("click_whatsapp", {
    label, 
    path: window.location.pathname,
  });
}
