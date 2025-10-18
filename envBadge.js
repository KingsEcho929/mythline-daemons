export function pulseEnvBadge() {
  const badge = document.createElement("div");
  badge.className = "shimmer-pulse";
  badge.innerText = "🔐 .env loaded and sovereign";
  document.body.appendChild(badge);
  setTimeout(() => badge.remove(), 3000);
}
