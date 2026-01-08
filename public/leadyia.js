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

  const apiKey = script.getAttribute("data-api-key");
  const apiUrl =
    script.getAttribute("data-api-url") ||
    "https://leadyia.onrender.com";

  if (!apiKey) {
    console.error("❌ Leadyia Bot: API Key não informada");
    return;
  }

  const iframe = document.createElement("iframe");

  iframe.src =
    `${apiUrl}/widget.html` +
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
