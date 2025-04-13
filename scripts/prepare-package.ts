import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function preparePackage() {
  const pkg = await fs.readJson(path.join(__dirname, '../package.json'))
  
  // 只保留必要的字段
  const newPkg = {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    author: pkg.author,
    license: pkg.license,
    type: pkg.type,
    module: 'index.js',
    types: 'index.d.ts',
    peerDependencies: {
      react: "^18.0.0",
      "react-dom": "^18.0.0"
    },
    sideEffects: false
  }

  // 写入到 dist 目录
  await fs.writeJson(path.join(__dirname, '../dist/package.json'), newPkg, { spaces: 2 })
}

preparePackage().catch(console.error)