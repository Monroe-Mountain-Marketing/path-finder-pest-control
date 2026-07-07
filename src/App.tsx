import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const DirectServicePage = lazy(() => import('./pages/DirectServicePage'))
const SAPPage = lazy(() => import('./pages/SAPPage'))
const GopherRemovalPage = lazy(() => import('./pages/GopherRemovalPage'))
const MolesVolesPage = lazy(() => import('./pages/MolesVolesPage'))
const ResidentialPage = lazy(() => import('./pages/ResidentialPage'))
const CommercialPage = lazy(() => import('./pages/CommercialPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const BlogListingPage = lazy(() => import('./pages/BlogListingPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'))

// 404 page
function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-[#112a44] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <a href="/" className="bg-[#fdd20a] text-[#112a44] font-bold px-6 py-3 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors">
        Go Home
      </a>
    </div>
  )
}

// Request a Quote redirect page
function RequestQuotePage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold text-[#112a44] mb-4">Request a Quote</h1>
        <p className="text-gray-600 mb-6">Contact us for a free pest control quote in Tulsa, Oklahoma.</p>
        <a href="/contact-us" className="bg-[#fdd20a] text-[#112a44] font-bold px-6 py-3 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-[40vh]" />}>
        <Routes>
          <Route element={<Layout />}>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Service pages */}
            <Route path="/service/:slug" element={<ServicePage />} />

            {/* Legacy/alternate service paths */}
            <Route path="/services/bed-bug-exterminator" element={<DirectServicePage slug="bed-bug-removal" />} />
            <Route path="/rodent-control-tulsa" element={<DirectServicePage slug="rodent-control" />} />

            {/* SAP (Service Area Pages) */}
            <Route path="/sap/:city" element={<SAPPage />} />

            {/* Standalone service pages */}
            <Route path="/gopher-removal" element={<GopherRemovalPage />} />
            <Route path="/moles-voles-removal" element={<MolesVolesPage />} />
            <Route path="/residential-pest-control" element={<ResidentialPage />} />
            <Route path="/commercial-pest-control" element={<CommercialPage />} />

            {/* Core pages */}
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/request-a-qoute" element={<RequestQuotePage />} />

            {/* Blog */}
            <Route path="/new-articles" element={<BlogListingPage />} />
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/category/pest-control" element={<BlogListingPage />} />
            <Route path="/category/blog" element={<BlogListingPage />} />
            <Route path="/category/uncategorized" element={<BlogListingPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />

            {/* Tag pages — redirect to blog listing (preserves SEO inbound links) */}
            <Route path="/tag/:tag" element={<BlogListingPage />} />

            {/* WordPress template pages — redirect to home */}
            <Route path="/template/*" element={<Navigate to="/" replace />} />
            <Route path="/template_tag/*" element={<Navigate to="/" replace />} />

            {/* Dynamic catch-all for all blog post slugs — must be last before * */}
            <Route path="/:slug" element={<BlogPostPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
