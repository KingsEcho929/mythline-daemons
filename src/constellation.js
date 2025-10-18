export function setupConstellationMonitor() {
  const panel = document.createElement('div')
  panel.id = 'constellation-monitor'
  panel.style.position = 'fixed'
  panel.style.bottom = '10px'
  panel.style.right = '10px'
  panel.style.background = '#111'
  panel.style.color = '#fff'
  panel.style.padding = '10px'
  panel.style.borderRadius = '8px'
  panel.style.zIndex = '9999'
  panel.style.fontFamily = 'monospace'
  panel.innerHTML = `
    <strong>Constellation Monitor</strong><br>
    <div id="pulse">Pulse: --</div>
    <div id="load">Load: --</div>
    <ul id="glyph-log" style="list-style:none;padding-left:0;"></ul>
  `
  document.body.appendChild(panel)
}

export function updateConstellation(pulse, load, companion) {
  document.getElementById('pulse').textContent = `Pulse: ${pulse}`
  document.getElementById('load').textContent = `Load: ${load}`

  const log = document.getElementById('glyph-log')
  const item = document.createElement('li')
  item.textContent = `${companion} shimmered at ${new Date().toLocaleTimeString()}`
  log.appendChild(item)
  log.scrollTop = log.scrollHeight
}
