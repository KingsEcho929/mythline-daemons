export function setupOverlay() {
  const overlay = document.createElement('div')
  overlay.id = 'shimmer-overlay'
  overlay.style.position = 'fixed'
  overlay.style.top = '10px'
  overlay.style.right = '10px'
  overlay.style.background = '#111'
  overlay.style.color = '#fff'
  overlay.style.padding = '10px'
  overlay.style.borderRadius = '8px'
  overlay.style.zIndex = '9999'
  overlay.innerHTML = '<strong>Shimmer Log</strong><br><ul id="shimmer-log"></ul>'
  document.body.appendChild(overlay)
}

export function logToOverlay(companion) {
  const log = document.getElementById('shimmer-log')
  const item = document.createElement('li')
  item.textContent = `${companion} shimmered at ${new Date().toLocaleTimeString()}`
  log.appendChild(item)
}
