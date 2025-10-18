import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { setupOverlay, logToOverlay } from './overlay.js'

setupOverlay()

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// 🧿 Companion Hover Shimmer + Log + Backend
document.querySelectorAll('.companion').forEach(glyph => {
  glyph.addEventListener('mouseenter', () => {
    logToOverlay(glyph.id)

    fetch('http://localhost:3001/log-shimmer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        companion: glyph.id,
        timestamp: new Date().toISOString()
      })
    })
  })
})

// 🔁 WebSocket Pulse Stream
const shimmerSocket = new WebSocket('ws://localhost:3002')

shimmerSocket.onmessage = event => {
  const { companion, timestamp } = JSON.parse(event.data)
  logToOverlay(companion)

  const glyph = document.getElementById(companion)
  if (glyph) {
    glyph.classList.add('pulse-high')
    setTimeout(() => glyph.classList.remove('pulse-high'), 1000)
  }
}
