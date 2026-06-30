import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { glossaryTerms, glossaryCategories } from '../data/glossaryData'

export default function GlossaryPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return glossaryTerms.filter(t => {
      const matchCat = activeCategory === 'All' || t.category === activeCategory
      const matchSearch = !q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
      return matchCat && matchSearch
    }).sort((a, b) => a.term.localeCompare(b.term))
  }, [search, activeCategory])

  // Group filtered terms alphabetically
  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {}
    for (const t of filtered) {
      const letter = t.term[0].toUpperCase()
      if (!map[letter]) map[letter] = []
      map[letter].push(t)
    }
    return map
  }, [filtered])

  const letters = Object.keys(grouped).sort()

  return (
    <>
      <Helmet>
        <title>Pest Control Glossary | 100 Industry Terms Explained | Pathfinder Pest Control</title>
        <meta name="description" content="A comprehensive glossary of 100 pest control terms used by professionals in the industry. Learn the language of pest management." />
      </Helmet>

      {/* Hero */}
      <section className="bg-[#112a44] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-2">PEST CONTROL EDUCATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pest Control Glossary</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            {glossaryTerms.length} industry terms defined — from IPM strategies to pest biology and pesticide science.
          </p>
          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search terms or definitions…"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-[#112a44] text-sm focus:outline-none focus:ring-2 focus:ring-[#fdd20a] shadow-lg"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-gray-200 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {['All', ...glossaryCategories].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-[#112a44] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg font-semibold mb-2">No terms found</p>
              <button onClick={() => { setSearch(''); setActiveCategory('All') }} className="text-[#568d22] hover:underline text-sm">Clear filters</button>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {letters.map(letter => (
                <div key={letter} id={`letter-${letter}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-[#568d22] font-display">{letter}</span>
                    <div className="flex-grow h-px bg-gray-200" />
                  </div>
                  <div className="grid sm:grid-cols-1 gap-3">
                    {grouped[letter].map(t => (
                      <div key={t.term} className="bg-[#faf8ee] rounded-xl p-5 flex flex-col sm:flex-row gap-3">
                        <div className="sm:w-48 flex-shrink-0">
                          <h2 className="font-bold text-[#112a44] text-base leading-snug">{t.term}</h2>
                          <span className="text-xs text-[#568d22] font-semibold bg-[#568d22]/10 px-2 py-0.5 rounded-full mt-1 inline-block">{t.category}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-center text-xs text-gray-400 mt-12">
            Showing {filtered.length} of {glossaryTerms.length} terms
          </p>
        </div>
      </section>
    </>
  )
}
