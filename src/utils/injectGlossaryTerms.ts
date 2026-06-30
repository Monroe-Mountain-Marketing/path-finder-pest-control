import { glossaryTerms } from '../data/glossaryData'

const sortedTerms = [...glossaryTerms].sort((a, b) => b.term.length - a.term.length)

export function injectGlossaryTerms(html: string): string {
  const usedTerms = new Set<string>()

  for (const { term, definition } of sortedTerms) {
    if (usedTerms.has(term.toLowerCase())) continue

    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`(?<![\\w>])${escaped}(?![\\w<])`, 'i')

    let found = false
    const replaced = html.replace(
      /(<[^>]+>)|([^<]+)/g,
      (match, tag, text) => {
        if (tag) return tag
        if (found) return text
        const m = text.match(regex)
        if (!m) return text
        found = true
        usedTerms.add(term.toLowerCase())
        // Encode definition for safe use in data attribute
        const safedef = definition.replace(/"/g, '&quot;').replace(/'/g, '&#39;')
        return text.replace(
          regex,
          `<span class="g-term" data-term="${term}" data-def="${safedef}" tabindex="0">${m[0]}</span>`
        )
      }
    )

    if (found) html = replaced
  }

  return html
}
