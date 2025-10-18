ws.send(JSON.stringify({
  companion: latest.companion,
  timestamp: latest.timestamp,
  pulse: metrics.EMPAC.pulse,
  load: metrics.EMPAC.load
}))
