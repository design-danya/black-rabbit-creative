import { ImageResponse } from 'next/og'

/**
 * The social share card that unfurls when the site is linked in iMessage,
 * LinkedIn, Slack, Facebook, etc. Metadata previously pointed at
 * /og-image.png, which never existed and 404'd — so shares rendered blank.
 *
 * Generated in code rather than shipped as a static image, so it stays in
 * brand without touching any of the studio's own artwork. Applies site-wide
 * via Next's file convention; a page can still override it per route.
 */
export const alt = 'Black Rabbit Creative — Branding & Packaging Design Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#060606',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            black
          </span>
          <span
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: '#5b3fd6',
              letterSpacing: '-0.02em',
            }}
          >
            rabbit
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: 116,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            Distinct&nbsp;<span style={{ color: '#7c5fe6' }}>by</span>&nbsp;design
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 30,
              color: '#94a3b8',
              maxWidth: 900,
            }}
          >
            Brand identity, logo &amp; packaging design for product-based
            businesses across New England — Portsmouth, NH.
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
