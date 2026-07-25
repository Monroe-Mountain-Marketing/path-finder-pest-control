import { useParams, Link, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { getBlogPostBySlug, blogPosts } from '../data/blogData'
import GlossaryContent from '../components/GlossaryContent'
import { injectGlossaryTerms } from '../utils/injectGlossaryTerms'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()

  // Support both /:slug (dynamic) and explicit path routes
  const resolvedSlug = slug || location.pathname.replace(/^\//, '').replace(/\/$/, '')
  const post = getBlogPostBySlug(resolvedSlug)

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-[#112a44] mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-6">This article could not be found.</p>
        <Link to="/new-articles" className="bg-[#fdd20a] text-[#112a44] font-bold px-6 py-3 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors">
          View All Articles
        </Link>
      </div>
    )
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4)
  const enrichedContent = useMemo(() => injectGlossaryTerms(post.content), [post.content])

  return (
    <>
      <Helmet>
        <title>{post.title} | Pathfinder Pest Control</title>
        <meta name="description" content={post.excerpt.slice(0, 160)} />
      </Helmet>

      {/* Hero */}
      <section className="bg-[#112a44] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/new-articles" className="hover:text-[#fdd20a]">Blog</Link>
            <span>/</span>
            <span className="text-[#fdd20a] line-clamp-1">{post.title}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
          <p className="text-gray-300 text-sm">Posted on {post.date}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">

          {/* Main article */}
          <article className="lg:col-span-2">
            {/* Glossary-enhanced WordPress HTML */}
            <GlossaryContent html={enrichedContent} containerClassName="wp-content" />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-[#faf8ee] text-[#f76a0c] text-xs font-semibold px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 bg-[#112a44] text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-3">Need Professional Pest Control?</h3>
              <p className="text-gray-300 mb-6">
                Contact Pathfinder Pest Control for expert pest management services in Tulsa and surrounding areas.
              </p>
              <a
                href="tel:9189259658"
                className="inline-flex items-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-6 py-3 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors"
              >
                Call +1 918-925-9658
              </a>
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            {/* Contact card */}
            <div className="bg-[#faf8ee] rounded-xl p-6 mb-8 sticky top-24">
              <h3 className="font-bold text-[#112a44] text-lg mb-4">Get a Free Quote</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
                <p>3240 S 82nd E Ave Suite A,<br />Tulsa, OK 74145</p>
                <p>Mon–Thur: 8AM–6PM</p>
                <p>Fri: 8AM–5PM | Sat: 9AM–12PM</p>
              </div>
              <a
                href="tel:9189259658"
                className="block text-center bg-[#fdd20a] text-[#112a44] font-bold px-4 py-3 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors mb-3"
              >
                +1 918-925-9658
              </a>
              <Link
                to="/contact-us"
                className="block text-center border-2 border-[#112a44] text-[#112a44] font-bold px-4 py-2.5 rounded-lg hover:bg-[#112a44] hover:text-white transition-colors text-sm"
              >
                Request a Quote
              </Link>
            </div>

            {/* Related posts */}
            <div>
              <h3 className="font-bold text-[#112a44] text-lg mb-4">Related Articles</h3>
              <div className="flex flex-col gap-4">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} to={`/${rp.slug}`} className="group border-b border-gray-100 pb-4 last:border-0">
                    <p className="text-xs text-gray-400 mb-1">{rp.date}</p>
                    <h4 className="font-semibold text-[#112a44] text-sm group-hover:text-[#f76a0c] transition-colors leading-snug">
                      {rp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
