const fs = require('fs')
const path = require('path')

const xml = fs.readFileSync(
  path.join(__dirname, '../migration-input-2026-06-29/pathfinderpestcontrol.WordPress.2026-06-30.xml'),
  'utf-8'
)

function extractCDATA(str) {
  const m = str.match(/<!\[CDATA\[([\s\S]*?)\]\]>/)
  return m ? m[1].trim() : str.trim()
}

function getTag(itemXml, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i')
  const m = itemXml.match(re)
  return m ? extractCDATA(m[1]) : ''
}

function getWpTag(itemXml, tag) {
  const re = new RegExp(`<wp:${tag}[^>]*>([\\s\\S]*?)</wp:${tag}>`, 'i')
  const m = itemXml.match(re)
  return m ? extractCDATA(m[1]) : ''
}

// Split into items
const itemRegex = /<item>([\s\S]*?)<\/item>/g
let match
const posts = []

while ((match = itemRegex.exec(xml)) !== null) {
  const itemXml = match[1]
  const postType = getWpTag(itemXml, 'post_type')
  const status = getWpTag(itemXml, 'status')

  if (postType !== 'post' || status !== 'publish') continue

  const title = getTag(itemXml, 'title')
  const slug = getWpTag(itemXml, 'post_name')
  const pubDate = getTag(itemXml, 'pubDate')
  const contentRaw = itemXml.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/)
  const content = contentRaw ? extractCDATA(contentRaw[1]) : ''
  const excerpt = itemXml.match(/<excerpt:encoded>([\s\S]*?)<\/excerpt:encoded>/)
  const excerptText = excerpt ? extractCDATA(excerpt[1]) : ''

  // Get categories/tags
  const catMatches = [...itemXml.matchAll(/<category domain="([^"]*)"[^>]*><!\[CDATA\[(.*?)\]\]><\/category>/g)]
  const categories = catMatches.filter(m => m[1] === 'category').map(m => m[2])
  const tags = catMatches.filter(m => m[1] === 'post_tag').map(m => m[2])

  // Format date
  let dateFormatted = ''
  if (pubDate) {
    try {
      const d = new Date(pubDate)
      dateFormatted = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    } catch {
      dateFormatted = pubDate
    }
  }

  posts.push({ title, slug, date: dateFormatted, categories, tags, content, excerpt: excerptText })
}

console.log(`Found ${posts.length} published posts`)

// Write JSON
fs.writeFileSync(
  path.join(__dirname, '../scripts/posts-raw.json'),
  JSON.stringify(posts, null, 2)
)

console.log('Written to posts-raw.json')
