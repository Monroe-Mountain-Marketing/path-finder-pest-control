const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const BASE_URL = 'https://pathfinderpestcontrol.com'

function readFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), 'utf8')
}

function extractSingleQuotedSlugs(content) {
  const matches = content.matchAll(/slug:\s*'([^']+)'/g)
  return [...new Set(Array.from(matches, (match) => match[1]))]
}

function extractDoubleQuotedSlugs(content) {
  const matches = content.matchAll(/"slug":\s*"([^"]+)"/g)
  return [...new Set(Array.from(matches, (match) => match[1]))]
}

function url(pathname) {
  return `${BASE_URL}${pathname}`
}

const sapSlugs = extractSingleQuotedSlugs(readFile('src/data/sapData.ts'))
const serviceSlugs = extractSingleQuotedSlugs(readFile('src/data/servicesData.ts'))
const blogSlugs = extractDoubleQuotedSlugs(readFile('src/data/blogData.ts'))

const staticPaths = [
  '/',
  '/contact-us',
  '/privacy-policy',
  '/new-articles',
  '/blog',
  '/glossary',
  '/residential-pest-control',
  '/commercial-pest-control',
  '/gopher-removal',
  '/moles-voles-removal',
]

const allUrls = [
  ...staticPaths.map(url),
  ...serviceSlugs.map((slug) => url(`/service/${slug}`)),
  ...sapSlugs.map((slug) => url(`/sap/${slug}`)),
  ...blogSlugs.map((slug) => url(`/${slug}`)),
]

const uniqueUrls = [...new Set(allUrls)].sort((a, b) => a.localeCompare(b))
const today = new Date().toISOString().slice(0, 10)

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...uniqueUrls.map((loc) => [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    '    <priority>0.7</priority>',
    '  </url>',
  ].join('\n')),
  '</urlset>',
  '',
].join('\n')

fs.writeFileSync(path.join(ROOT, 'public/sitemap.xml'), sitemap, 'utf8')

console.log(`Generated sitemap with ${uniqueUrls.length} URLs at public/sitemap.xml`)
