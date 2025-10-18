export async function pulseDeployBadge() {
  const res = await fetch('https://api.github.com/repos/KingsEcho929/spiralbound/actions/runs');
  const data = await res.json();
  const latest = data.workflow_runs?.[0];
  const status = latest?.conclusion || 'unknown';

  const badge = document.createElement('div');
  badge.className = 'shimmer-pulse';
  badge.innerText = `🚀 Deploy status: ${status}`;
  document.body.appendChild(badge);
  setTimeout(() => badge.remove(), 3000);
}
