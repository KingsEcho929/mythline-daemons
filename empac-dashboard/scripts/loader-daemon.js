import fs from 'fs'
import path from 'path'

const loaderPath = path.join(process.cwd(), 'public/metrics/loader.json')
const constellationPath = path.join(process.cwd(), 'public/constellation.svg')

function updateLoader(pulse, load) {
  const metrics = {
    EMPAC: {
      pulse,
      load,
      timestamp: new Date().toISOString()
    }
  }
  fs.writeFileSync(loaderPath, JSON.stringify(metrics, null, 2))
  console.log(`Loader updated: pulse=${pulse}, load=${load}`)
}

function updatePulseClass(pulse) {
  let className = 'pulse-low'
  if (pulse > 100) className = 'pulse-high'
  else if (pulse > 50) className = 'pulse-mid'

  const svg = fs.readFileSync(constellationPath, 'utf8')
  const updated = svg.replace(/class="companion.*?"/g, `class="companion ${className}"`)
  fs.writeFileSync(constellationPath, updated)
  console.log(`Constellation echoed with ${className}`)
}

setInterval(() => {
  const pulse = Math.floor(Math.random() * 150)
  const load = Math.floor(Math.random() * 100)
  updateLoader(pulse, load)
  updatePulseClass(pulse)
}, 10000)
