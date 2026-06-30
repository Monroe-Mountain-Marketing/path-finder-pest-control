import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import { useState, useMemo } from 'react'

const PER_PAGE = 12

// Ordered category list with icons
const PEST_CATEGORIES = [
  { label: 'All' },
  { label: 'Bed Bugs' },
  { label: 'Mosquitoes' },
  { label: 'Ants' },
  { label: 'Termites' },
  { label: 'Roaches' },
  { label: 'Rodents' },
  { label: 'Gophers & Moles' },
  { label: 'Fleas & Ticks' },
  { label: 'Wasps & Hornets' },
  { label: 'Spiders' },
  { label: 'Wildlife' },
  { label: 'General Pest Control' },
]

export default function BlogListingPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return blogPosts.filter(p => {
      const matchCat = activeCategory === 'All' || p.pestCategory === activeCategory
      const matchSearch = !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [search, activeCategory])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  function handleCategory(cat: string) {
    setActiveCategory(cat)
    setPage(1)
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    setPage(1)
  }

  return (
    <>
      <Helmet>
        <title>Pest Control Articles & Tips | Pathfinder Pest Control Tulsa</title>
        <meta name="description" content="Expert pest control tips, guides, and news from Pathfinder Pest Control in Tulsa, Oklahoma." />
      </Helmet>

      {/* Hero */}
      <section className="bg-[#112a44] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-2">PEST CONTROL RESOURCES</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Latest Articles</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Expert pest control tips, guides, and insights from the Pathfinder Pest Control team in Tulsa, Oklahoma.
          </p>

          {/* Search + Category row */}
          <div className="max-w-3xl mx-auto flex gap-3">
            {/* Search */}
            <div className="relative flex-grow">
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search articles…"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-[#112a44] text-sm focus:outline-none focus:ring-2 focus:ring-[#fdd20a] shadow-lg"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Category dropdown */}
            <div className="relative flex-shrink-0">
              <select
                value={activeCategory}
                onChange={e => handleCategory(e.target.value)}
                className="h-full pl-4 pr-10 py-4 rounded-xl bg-white text-[#112a44] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#fdd20a] shadow-lg appearance-none cursor-pointer"
              >
                {PEST_CATEGORIES.map(cat => (
                  <option key={cat.label} value={cat.label}>{cat.label}</option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4">

          {/* Result count */}
          <p className="text-sm text-gray-500 mb-6">
            {filtered.length === blogPosts.length
              ? `${blogPosts.length} articles`
              : `${filtered.length} of ${blogPosts.length} articles${activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}${search ? ` matching "${search}"` : ''}`
            }
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-xl font-bold text-[#112a44] mb-2">No articles found</h2>
              <p className="text-gray-500 mb-6">Try a different search term or category.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); setPage(1) }}
                className="text-[#568d22] font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visible.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/${post.slug}`}
                    className="bg-[#faf8ee] rounded-xl overflow-hidden group hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <div className="bg-[#112a44] px-6 pt-4 pb-8 -mb-4 relative z-10 flex items-center justify-between">
                      <p className="text-[#fdd20a] text-xs font-semibold uppercase">{post.date}</p>
                      <span className="text-xs text-gray-400 bg-[#1e3a5c] px-2 py-0.5 rounded-full">{post.pestCategory}</span>
                    </div>
                    <div className="bg-white rounded-t-xl mx-3 px-5 pt-6 pb-6 relative z-20 shadow-md flex flex-col flex-grow">
                      <h2 className="text-lg font-bold text-[#112a44] mb-3 group-hover:text-[#568d22] transition-colors leading-snug flex-grow">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-[#568d22] font-semibold text-sm group-hover:text-[#f76a0c] transition-colors mt-auto">
                        Read More →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    disabled={page === 1}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium disabled:opacity-40 hover:bg-[#faf8ee] transition-colors"
                  >
                    ← Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors ${
                        n === page
                          ? 'bg-[#112a44] text-white'
                          : 'border border-gray-300 hover:bg-[#faf8ee]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    disabled={page === totalPages}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium disabled:opacity-40 hover:bg-[#faf8ee] transition-colors"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
