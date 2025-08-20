// src/utils/analytics.js
export function logWhatsappClick(source) {
  try {
    // GA4
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: source,   // onde ocorreu: 'hero', 'calculadora', 'floating' etc.
        value: 1
      });
    }

    // (Opcional) fallback local para ter uma contagem rápida
    const key = `wa_clicks_${source}`;
    const current = parseInt(localStorage.getItem(key) || '0', 10);
    localStorage.setItem(key, String(current + 1));
  } catch {}
}
