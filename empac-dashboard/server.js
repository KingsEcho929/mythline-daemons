import express from 'express'
import fs from 'fs'
import path from 'path'
import cors from 'cors'

const app = express()
const PORT = 3001
const registryPath = path.join(process.cwd(), 'public/metrics/shimmer-registry.json')

app.use(cors())
app.use(express.json())

app.post('/log-shimmer', (req, res) => {
  const { companion, timestamp } = req.body
  const entry = { companion, timestamp }

  let registry = []
  if (fs.existsSync(registryPath)) {
    registry = JSON.parse(fs.readFileSync(registryPath))
  }

  registry.push(entry)
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2))
  res.status(200).send('Shimmer logged')
})

app.listen(PORT, () => {
  console.log(`Shimmer backend running on port ${PORT}`)
})
