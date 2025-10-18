function updatePulseClass(pulse) {
  let className = 'pulse-low'
  if (pulse > 100) className = 'pulse-high'
  else if (pulse > 50) className = 'pulse-mid'

  const svg = fs.readFileSync(constellationPath, 'utf8')
  const updated = svg.replace(/class="companion.*?"/g, `class="companion ${className}"`)
  fs.writeFileSync(constellationPath, updated)
}
