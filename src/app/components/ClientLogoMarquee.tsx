'use client'

import Image from 'next/image'
import { clientLogos } from '../data/clientLogos'

/**
 * "Worked with" logo row for the homepage, directly under the hero.
 *
 * Same mechanics as WorkMarquee: the track holds two copies of the list and
 * translates -50% for a seamless loop, hover or keyboard focus pauses it, and
 * under prefers-reduced-motion the animation stops and the row becomes an
 * ordinary horizontal scroller so every logo stays reachable.
 *
 * The band is near-white on purpose. Most of these marks are the clients' own
 * and were drawn for light backgrounds; the handful that only existed as
 * reversed artwork were flipped dark when the files were prepared (see
 * data/clientLogos.ts). Each logo is sized from its own aspect ratio against a
 * fixed height, and the files are optically normalised, so a wide wordmark and
 * a small badge read at the same weight.
 *
 * These are companies worked with, not a portfolio of logo design, so nothing
 * here links out — the case studies live on /work. The list is duplicated for
 * the loop, so the second copy is hidden from assistive tech to avoid reading
 * every client twice.
 */

const HEIGHT = 50 // px — rendered logo height

export function ClientLogoMarquee() {
  if (clientLogos.length === 0) return null
  const items = [...clientLogos, ...clientLogos]

  return (
    <section
      aria-label="Companies Black Rabbit Creative has worked with"
      className="relative border-y border-black/[0.06] bg-[#fbfbf9] py-10 md:py-12"
    >
      <style>{`
        .brc-clients {
          position: relative;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
        }
        .brc-clients__track {
          display: flex;
          align-items: center;
          gap: 56px;
          width: max-content;
          animation: brc-clients-scroll 70s linear infinite;
        }
        .brc-clients:hover .brc-clients__track,
        .brc-clients:focus-within .brc-clients__track {
          animation-play-state: paused;
        }
        .brc-clients__item {
          flex: none;
          opacity: 0.78;
          transition: opacity 300ms ease;
        }
        .brc-clients__item:hover {
          opacity: 1;
        }
        @keyframes brc-clients-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(calc(-50% - 28px), 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brc-clients {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }
          .brc-clients__track { animation: none; }
          .brc-clients__item { opacity: 1; }
        }
      `}</style>

      <p className="mb-7 px-6 text-center text-[10px] font-semibold uppercase tracking-[0.34em] text-black/35 md:px-14">
        Worked with
      </p>

      <div className="brc-clients">
        <div className="brc-clients__track">
          {items.map((logo, i) => {
            const second = i >= clientLogos.length
            return (
              <div
                key={`${logo.slug}-${i}`}
                className="brc-clients__item"
                aria-hidden={second || undefined}
              >
                <Image
                  src={`/assets/clients/${logo.slug}.webp`}
                  alt={second ? '' : logo.name}
                  width={logo.w}
                  height={logo.h}
                  style={{ height: HEIGHT, width: (logo.w / logo.h) * HEIGHT }}
                  sizes="240px"
                  priority={i < 6}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
