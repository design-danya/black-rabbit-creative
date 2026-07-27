'use client'

import { useEffect, useRef } from 'react'

/**
 * Embeds from Merchynt / localmarketingmanager.com (Recent Posts, FAQ, Reviews).
 * Third-party iframes, lazy-loaded so they don't affect first paint. Colors are
 * tuned for the site's dark sections.
 */

export function RecentPostsWidget() {
  return (
    <iframe
      src="https://www.localmarketingmanager.com/api/local-posts/black-rabbit-creative-local-posts-widget"
      title="Recent posts"
      loading="lazy"
      style={{ width: '100%', minHeight: 480, border: 'none' }}
    />
  )
}

export function FaqWidget() {
  // textColor set to white (Merchynt's default was black, invisible on our dark bg).
  const src =
    'https://www.localmarketingmanager.com/api/questions/black-rabbit-creative-frequently-asked-questions' +
    '?textColor=%23ffffff&backgroundColor=%23000000&showTitle=false&borderRadius=10px' +
    '&visibility=showAllCollapsed&isTransparentBackgroundApplied=true'
  return (
    <div style={{ height: 550 }}>
      <iframe
        src={src}
        title="Frequently asked questions"
        loading="lazy"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  )
}

export function ReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    function pageSizeForWidth(w: number) {
      if (w < 450) return 1
      if (w < 675) return 2
      if (w < 918) return 3
      if (w < 1144) return 4
      return 5
    }
    let raf = 0
    function setSrc() {
      const iframe = iframeRef.current
      const container = containerRef.current
      if (!iframe || !container) return
      const w = container.offsetWidth
      if (w === 0) {
        raf = window.setTimeout(setSrc, 50)
        return
      }
      const expected = `https://www.localmarketingmanager.com/api/reviews/black-rabbit-creative-review-widget?pageSize=${pageSizeForWidth(w)}`
      if (iframe.src !== expected) iframe.src = expected
    }
    setSrc()
    raf = window.setTimeout(setSrc, 50)
    window.addEventListener('resize', setSrc)
    return () => {
      clearTimeout(raf)
      window.removeEventListener('resize', setSrc)
    }
  }, [])

  return (
    <div ref={containerRef} id="reviewsWidgetContainer">
      <iframe
        ref={iframeRef}
        title="Client reviews"
        loading="lazy"
        style={{ width: '100%', border: 'none', minHeight: 300 }}
      />
    </div>
  )
}
