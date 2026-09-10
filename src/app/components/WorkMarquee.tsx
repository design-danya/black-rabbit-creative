'use client'

import Image from 'next/image'
import { designInPractice } from '../data/designInPractice'

/**
 * Design in Practice — every client piece in one continuously scrolling row.
 *
 * The track holds two copies of the list and translates -50%, so the loop is
 * seamless. Hover (or keyboard focus) pauses it. Under prefers-reduced-motion
 * the animation stops and the row becomes an ordinary horizontal scroller with
 * snap points, so the work is still reachable.
 *
 * Tiles share a fixed height and take their width from the image's own aspect
 * ratio — panoramas stay panoramic instead of being square-cropped — with a
 * cap so a very wide shot can't dominate the row.
 */

const HEIGHT = 300 // px, matches --brc-work-h below

export function WorkMarquee() {
  const items = [...designInPractice, ...designInPractice]

  return (
    <div>
      <style>{`
        .brc-work {
          position: relative;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 3%, #000 97%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 3%, #000 97%, transparent 100%);
        }
        .brc-work__track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: brc-work-scroll 190s linear infinite;
          will-change: transform;
        }
        .brc-work:hover .brc-work__track,
        .brc-work:focus-within .brc-work__track { animation-play-state: paused; }
        @keyframes brc-work-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(calc(-50% - 8px), 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brc-work {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-mask-image: none;
            mask-image: none;
          }
          .brc-work__track { animation: none; }
        }
      `}</style>

      <div className="brc-work">
        <div className="brc-work__track">
          {items.map((shot, i) => {
            const width = Math.min(Math.round((shot.w / shot.h) * HEIGHT), 460)
            return (
              <figure
                key={`${shot.slug}-${i}`}
                className="group relative shrink-0 snap-start overflow-hidden border border-white/10 bg-[#111] transition-colors duration-300 hover:border-[#5b3fd6]/70"
                style={{ width, height: HEIGHT }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.w}
                  height={shot.h}
                  sizes="460px"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute left-3 top-3 border border-white/10 bg-[#060606]/80 px-2.5 py-1 text-[8px] uppercase tracking-[0.25em] text-[#7c5fe6] backdrop-blur-sm">
                  {shot.tag}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#060606] via-[#060606]/85 to-transparent px-3 pb-2.5 pt-8">
                  <span className="truncate text-[9px] uppercase tracking-[0.2em] text-white/70">
                    {shot.client}
                  </span>
                  <span className="ml-2 h-1 w-1 shrink-0 bg-[#5b3fd6]" />
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </div>
  )
}
