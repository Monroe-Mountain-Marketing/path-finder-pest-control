import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import DirectServicePage from './pages/DirectServicePage'
import SAPPage from './pages/SAPPage'
import GopherRemovalPage from './pages/GopherRemovalPage'
import MolesVolesPage from './pages/MolesVolesPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import BlogListingPage from './pages/BlogListingPage'
import BlogPostPage from './pages/BlogPostPage'

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

          {/* Core pages */}
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/request-a-qoute" element={<RequestQuotePage />} />

          {/* Blog */}
          <Route path="/new-articles" element={<BlogListingPage />} />
          <Route path="/blog" element={<BlogListingPage />} />
          <Route path="/category/pest-control" element={<BlogListingPage />} />
          <Route path="/category/blog" element={<BlogListingPage />} />
          <Route path="/category/uncategorized" element={<BlogListingPage />} />

          {/* Dynamic catch-all for all blog post slugs — must be last before * */}
          <Route path="/:slug" element={<BlogPostPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
