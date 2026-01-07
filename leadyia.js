/**
 * Leadyia Bot Embed Script
 * Responsável por injetar o chat no site
 */
/**
 * Leadyia Bot – Universal Embed Script
 * -----------------------------------
 * Compatível com:
 * HTML, React, Vue, WordPress, Shopify, Wix
 */

(function () {
  // Evita múltiplas cargas
  if (window.LeadyiaBotLoaded) return;
  window.LeadyiaBotLoaded = true;

  // Captura o script atual
  const script = document.currentScript;

  // API Key pública do cliente
  const apiKey = script.getAttribute("data-api-key");

  // URL base (permite white-label)
  const apiUrl =
    script.getAttribute("data-api-url") ||
    "https://api.leadyia.com";

  if (!apiKey) {
    console.error("Leadyia Bot: API Key não informada");
    return;
  }

  // Cria iframe isolado
  const iframe = document.createElement("iframe");

  iframe.src =
    `${apiUrl}/widget.html` +
    `?apiKey=${encodeURIComponent(apiKey)}` +
    `&origin=${encodeURIComponent(window.location.origin)}`;

  // Estilo do widget
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "360px";
  iframe.style.height = "520px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "16px";
  iframe.style.zIndex = "999999";
  iframe.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

  iframe.setAttribute("title", "Leadyia Bot");
  iframe.setAttribute("loading", "lazy");

  document.body.appendChild(iframe);

  console.log("🤖 Leadyia Bot carregado com sucesso");
})();

