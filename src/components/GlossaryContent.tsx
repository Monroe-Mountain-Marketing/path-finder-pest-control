import { useEffect, useRef, useState } from 'react'
import { getTermByName } from '../data/glossaryData'
import type { GlossaryTerm } from '../data/glossaryData'

interface GlossaryContentProps {
  html: string
  containerClassName?: string
}

/**
 * Desktop: pure CSS tooltip via ::after pseudo-element on .g-term (no JS).
 * Mobile: click on a term opens a bottom drawer.
 */
export default function GlossaryContent({ html, containerClassName = '' }: GlossaryContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [drawer, setDrawer] = useState<GlossaryTerm | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleClick = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) return
      const target = (e.target as HTMLElement).closest('.g-term') as HTMLElement | null
      if (!target) return
      const termName = target.dataset.term
      if (!termName) return
      const found = getTermByName(termName)
      if (found) setDrawer(found)
    }

    el.addEventListener('click', handleClick)
    return () => el.removeEventListener('click', handleClick)
  }, [html])

  return (
    <>
      <div
        ref={containerRef}
        className={containerClassName}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Mobile bottom drawer */}
      {drawer && (
        <>
          <div className="lg:hidden fixed inset-0 bg-black/40 z-[9998]" onClick={() => setDrawer(null)} />
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white rounded-t-2xl shadow-2xl p-6 pb-10">
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-5" />
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-[#112a44] text-xl leading-snug pr-4">{drawer.term}</h3>
              <button onClick={() => setDrawer(null)} className="text-gray-400 hover:text-gray-600 flex-shrink-0 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <span className="inline-block text-xs bg-[#f76a0c]/10 text-[#f76a0c] font-semibold px-3 py-1 rounded-full mb-3">
              {drawer.category}
            </span>
            <p className="text-gray-600 leading-relaxed">{drawer.definition}</p>
          </div>
        </>
      )}
    </>
  )
}
