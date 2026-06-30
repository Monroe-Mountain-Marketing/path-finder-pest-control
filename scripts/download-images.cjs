const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')
const { execSync } = require('child_process')

const SRC_DIR = path.join(__dirname, '../src')
const PUBLIC_DIR = path.join(__dirname, '../public/images')

// Ensure output dir exists
fs.mkdirSync(PUBLIC_DIR, { recursive: true })

// Collect all source files (ts/tsx) AND the raw XML for good measure
function walk(dir) {
  const files = []
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f)
    if (fs.statSync(full).isDirectory()) files.push(...walk(full))
    else if (/\.(tsx?|ts|xml|json)$/.test(f)) files.push(full)
  }
  return files
}

const allFiles = [
  ...walk(SRC_DIR),
  path.join(__dirname, '../migration-input-2026-06-29/pathfinderpestcontrol.WordPress.2026-06-30.xml'),
]
const urlSet = new Set()
const urlRegex = /https:\/\/pathfinderpestcontrol\.com\/wp-content\/uploads\/[^\s"')\]>]+/g

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8')
  for (const m of content.matchAll(urlRegex)) {
    // Clean trailing punctuation
    const url = m[0].replace(/[.,;:]+$/, '')
    urlSet.add(url)
  }
}

const urls = [...urlSet]
console.log(`Found ${urls.length} unique image URLs`)

// Build mapping: original URL -> local path
const mapping = {}
for (const url of urls) {
  const parsed = new URL(url)
  // e.g. /wp-content/uploads/2025/10/foo.jpg -> 2025-10-foo.jpg
  const parts = parsed.pathname.replace('/wp-content/uploads/', '').split('/')
  const localName = parts.join('-').replace(/[^a-zA-Z0-9._-]/g, '-')
  mapping[url] = localName
}

// Write mapping file for the rewrite script
fs.writeFileSync(
  path.join(__dirname, 'image-mapping.json'),
  JSON.stringify(mapping, null, 2)
)
console.log('Wrote image-mapping.json')

// Download function
function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) { resolve('skipped'); return }
    const proto = url.startsWith('https') ? https : http
    const file = fs.createWriteStream(dest)
    const req = proto.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        fs.unlinkSync(dest)
        download(res.headers.location, dest).then(resolve).catch(reject)
        return
      }
      if (res.statusCode !== 200) {
        file.close()
        fs.unlinkSync(dest)
        reject(new Error(`HTTP ${res.statusCode} for ${url}`))
        return
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve('downloaded') })
    })
    req.on('error', err => {
      fs.existsSync(dest) && fs.unlinkSync(dest)
      reject(err)
    })
  })
}

// Download all images sequentially to avoid rate limiting
;(async () => {
  let ok = 0, failed = 0, skipped = 0
  for (const [url, localName] of Object.entries(mapping)) {
    const dest = path.join(PUBLIC_DIR, localName)
    try {
      const result = await download(url, dest)
      if (result === 'skipped') { skipped++; console.log(`  skip  ${localName}`) }
      else { ok++; console.log(`  ok    ${localName}`) }
    } catch (e) {
      failed++
      console.log(`  FAIL  ${url} — ${e.message}`)
    }
  }
  console.log(`\nDone: ${ok} downloaded, ${skipped} skipped, ${failed} failed`)
})()
