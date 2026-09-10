import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * The social share card that unfurls when the site is linked in iMessage,
 * LinkedIn, Slack, Facebook, etc. Applies site-wide via Next's file
 * convention; a page can still override it per route.
 *
 * Uses the real wordmark and real typeface rather than approximating them:
 * Satori has no access to the browser's fonts or to next/font, so Poppins is
 * read from src/assets/og and handed in explicitly, and the wordmark is
 * inlined as a data URI. Both are kept out of public/assets so they aren't
 * stored in Git LFS — this route reads them off disk at build time.
 */
export const alt = 'Black Rabbit Creative — Branding & Packaging Design Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const asset = (name: string) => join(process.cwd(), 'src/assets/og', name)

export default async function OpengraphImage() {
  const [wordmark, extraBold, regular] = await Promise.all([
    readFile(asset('wordmark.png')),
    readFile(asset('Poppins-ExtraBold.ttf')),
    readFile(asset('Poppins-Regular.ttf')),
  ])
  const wordmarkSrc = `data:image/png;base64,${wordmark.toString('base64')}`

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
          padding: '76px 80px',
          fontFamily: 'Poppins',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={wordmarkSrc} alt="" width={330} height={84} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Satori collapses &nbsp; between inline spans, so the words are
              laid out as explicit flex children with a real gap. Two lines,
              matching the hero on the site. */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 112,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', gap: '30px' }}>
              <span>Distinct</span>
              <span style={{ color: '#7c5fe6' }}>by</span>
            </div>
            <div style={{ display: 'flex' }}>
              <span>Design</span>
            </div>
          </div>
          <div
            style={{
              marginTop: 34,
              fontSize: 28,
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 880,
            }}
          >
            Brand identity, logo &amp; packaging design for product-based
            businesses across New England — Portsmouth, NH.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Poppins', data: extraBold, weight: 800, style: 'normal' },
        { name: 'Poppins', data: regular, weight: 400, style: 'normal' },
      ],
    },
  )
}
