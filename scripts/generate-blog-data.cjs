const fs = require('fs')
const path = require('path')

const posts = require('./posts-raw.json')

// Strip WordPress block comments and clean up HTML
function cleanContent(html) {
  return html
    .replace(/<!-- \/?wp:[^\n]*?-->/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/&amp;/g, '&')
    // Rewrite internal links to relative paths (with or without a path component)
    .replace(/href="https?:\/\/pathfinderpestcontrol\.com(\/[^"]*)"/g, 'href="$1"')
    .replace(/href="https?:\/\/pathfinderpestcontrol\.com"/g, 'href="/"')
    // Remove trailing slashes from internal hrefs to match React Router paths
    .replace(/href="(\/[^"]+)\/"/g, 'href="$1"')
    .trim()
}

function cleanText(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\u2019/g, "'")
    .replace(/\u2018/g, "'")
    .replace(/\u201c/g, '"')
    .replace(/\u201d/g, '"')
    .trim()
}

function buildExcerpt(content) {
  const plain = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
  const target = plain.slice(0, 280)
  const lastPeriod = Math.max(
    target.lastIndexOf('. '),
    target.lastIndexOf('! '),
    target.lastIndexOf('? ')
  )
  if (lastPeriod > 80) return plain.slice(0, lastPeriod + 1)
  const cut = plain.slice(0, 200)
  return cut.slice(0, cut.lastIndexOf(' ')) + '...'
}

// Derive a pest category from slug + title + tags
function getPestCategory(slug, title, tags) {
  const hay = (slug + ' ' + title + ' ' + tags.join(' ')).toLowerCase()
  if (/bed.?bug/.test(hay))                          return 'Bed Bugs'
  if (/mosquito/.test(hay))                          return 'Mosquitoes'
  if (/termite/.test(hay))                           return 'Termites'
  if (/roach|cockroach/.test(hay))                   return 'Roaches'
  if (/gopher|mole|vole/.test(hay))                  return 'Gophers & Moles'
  if (/rodent|mouse|mice|rat|skunk/.test(hay))       return 'Rodents'
  if (/flea|tick/.test(hay))                         return 'Fleas & Ticks'
  if (/wasp|hornet|bee|sting/.test(hay))             return 'Wasps & Hornets'
  if (/spider|cricket/.test(hay))                    return 'Spiders'
  if (/ant\b|ants/.test(hay))                        return 'Ants'
  if (/wildlife|raccoon|squirrel|opossum/.test(hay)) return 'Wildlife'
  return 'General Pest Control'
}

// Parse date string to ISO for sorting
function toISO(dateStr) {
  try { return new Date(dateStr).toISOString().slice(0, 10) }
  catch { return '2026-01-01' }
}

const output = posts.map(p => {
  const content = cleanContent(p.content)
  const excerpt = p.excerpt
    ? cleanText(p.excerpt).slice(0, 280)
    : buildExcerpt(content)

  return {
    slug: p.slug,
    title: cleanText(p.title),
    date: p.date,
    dateISO: toISO(p.date),
    category: p.categories[0] || 'Blog',
    pestCategory: getPestCategory(p.slug, p.title, p.tags),
    tags: p.tags,
    excerpt,
    content,
  }
})

// Sort latest → oldest
output.sort((a, b) => b.dateISO.localeCompare(a.dateISO))

const tsLines = [
  `export interface BlogPost {`,
  `  slug: string`,
  `  title: string`,
  `  date: string`,
  `  dateISO: string`,
  `  category: string`,
  `  pestCategory: string`,
  `  tags: string[]`,
  `  excerpt: string`,
  `  content: string`,
  `}`,
  ``,
  `export const blogPosts: BlogPost[] = ${JSON.stringify(output, null, 2)}`,
  ``,
  `export function getBlogPostBySlug(slug: string): BlogPost | undefined {`,
  `  return blogPosts.find((p) => p.slug === slug)`,
  `}`,
]

fs.writeFileSync(path.join(__dirname, '../src/data/blogData.ts'), tsLines.join('\n'))
console.log(`Generated blogData.ts with ${output.length} posts (latest first)`)
output.forEach((p, i) => console.log(`  ${i + 1}. [${p.dateISO}] [${p.pestCategory}] ${p.slug}`))
