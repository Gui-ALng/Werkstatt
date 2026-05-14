import fs from 'fs'
import path from 'path'

const src = path.resolve('c:/Users/Guilherme/Downloads/tailwind-plus-spotlight/spotlight-ts/src/images')
const dest = path.resolve(new URL(import.meta.url).pathname, '../public/images/spotlight')

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function copyRecursive(srcPath, destPath) {
  if (!fs.existsSync(srcPath)) {
    console.error('Source not found:', srcPath)
    process.exit(1)
  }
  const stat = fs.statSync(srcPath)
  if (stat.isDirectory()) {
    ensureDir(destPath)
    for (const entry of fs.readdirSync(srcPath)) {
      copyRecursive(path.join(srcPath, entry), path.join(destPath, entry))
    }
  } else {
    ensureDir(path.dirname(destPath))
    fs.copyFileSync(srcPath, destPath)
    console.log('Copied', srcPath, '->', destPath)
  }
}

try {
  copyRecursive(src, path.resolve(process.cwd(), 'public/images/spotlight'))
  console.log('All assets copied to', path.resolve(process.cwd(), 'public/images/spotlight'))
} catch (err) {
  console.error('Error copying assets:', err)
  process.exit(2)
}
