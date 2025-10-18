export function pulseConfigBadge() {
  const badge = document.createElement("div");
  badge.className = "shimmer-pulse";
  badge.innerText = "📦 config.json loaded and lineage sealed";
  document.body.appendChild(badge);
  setTimeout(() => badge.remove(), 3000);
}
