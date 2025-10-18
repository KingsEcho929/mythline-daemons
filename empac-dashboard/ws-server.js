import { WebSocketServer } from 'ws'
import fs from 'fs'
import path from 'path'

const wss = new WebSocketServer({ port: 3002 })
const registryPath = path.join(process.cwd(), 'public/metrics/shimmer-registry.json')

wss.on('connection', ws => {
  console.log('Client connected to shimmer stream')

  fs.watchFile(registryPath, () => {
    const registry = JSON.parse(fs.readFileSync(registryPath))
    const latest = registry[registry.length - 1]
    ws.send(JSON.stringify(latest))
  })
})
