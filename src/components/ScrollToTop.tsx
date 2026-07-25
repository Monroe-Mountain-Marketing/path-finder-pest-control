import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })

    // Send GA4 page_view on every client-side navigation
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
      })
    }
  }, [pathname])

  return null
}
