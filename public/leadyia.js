/**
 * Leadyia Bot – Universal Embed Script
 * -----------------------------------
 * Compatível com:
 * HTML, WordPress, React, Vue, Shopify, Wix
 */

/**
 * Leadyia Bot – Universal Embed Script
 * -----------------------------------
 * Compatível com HTML, WordPress, React, Vue, Shopify, Wix
 */

(function () {
  if (window.LeadyiaBotLoaded) return;
  window.LeadyiaBotLoaded = true;

  const script = document.currentScript;

  // API KEY (obrigatória)
  const apiKey =
    script.getAttribute("data-api-key") ||
    window.LEADYIA_API_KEY;

  if (!apiKey) {
    console.error("❌ Leadyia Bot: API Key não informada");
    return;
  }

  /**
   * 🔥 IMPORTANTE
   * Widget SEMPRE vem do Vercel
   * Backend (Render) é só API
   */
  const WIDGET_URL =
    "https://leadyia-frontend-embed.vercel.app/widget.html";

  const iframe = document.createElement("iframe");

  iframe.src =
    `${WIDGET_URL}` +
    `?apiKey=${encodeURIComponent(apiKey)}` +
    `&origin=${encodeURIComponent(window.location.origin)}`;

  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "360px";
  iframe.style.height = "520px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "16px";
  iframe.style.zIndex = "999999";
  iframe.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";
  iframe.style.background = "#fff";

  iframe.setAttribute("title", "Leadyia Bot");
  iframe.setAttribute("loading", "lazy");

  document.body.appendChild(iframe);

  console.log("🤖 Leadyia Bot carregado com sucesso");
})();

