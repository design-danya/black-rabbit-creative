'use client'

import { ArrowUpRight } from 'lucide-react'
import { reviews, reviewCount, averageRating, GOOGLE_REVIEWS_URL, type Review } from '../data/reviews'

/**
 * Self-hosted client-review marquee. Replaces the Merchynt reviews iframe,
 * which stopped rendering and couldn't be styled to match the site.
 *
 * A single row scrolls on a seamless loop (the track holds two copies of the
 * list and translates -50%). Hovering pauses. Under prefers-reduced-motion the
 * animation is off and the row becomes a normal horizontal scroller with snap
 * points.
 */

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-[3px]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#7c5fe6" aria-hidden="true">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.2l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure
      className="group relative flex w-[300px] shrink-0 snap-start flex-col justify-between border border-white/10 bg-[#0c0c0c] p-7 transition-colors duration-300 hover:border-[#5b3fd6]/60 sm:w-[380px]"
    >
      <div>
        <Stars count={review.rating} />
        <blockquote className="mt-5 text-[13.5px] leading-[1.65] text-white/75 transition-colors duration-300 group-hover:text-white/90">
          {review.quote}
        </blockquote>
      </div>

      <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 text-[11px] font-black uppercase tracking-[0.1em] text-white/70"
        >
          {review.initial}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[11px] font-black uppercase tracking-[0.18em] text-white">
            {review.name}
          </span>
          {review.meta && (
            <span className="block truncate text-[9.5px] uppercase tracking-[0.22em] text-white/35">
              {review.meta}
            </span>
          )}
        </span>
      </figcaption>
    </figure>
  )
}

function Row({
  items,
  direction,
  duration,
}: {
  items: Review[]
  direction: 'left' | 'right'
  duration: number
}) {
  return (
    <div className="brc-marquee">
      <div
        className="brc-marquee__track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {[...items, ...items].map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  )
}

export function ReviewsMarquee() {
  return (
    <div>
      <style>{`
        .brc-marquee {
          position: relative;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
        }
        .brc-marquee__track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation-name: brc-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .brc-marquee:hover .brc-marquee__track,
        .brc-marquee:focus-within .brc-marquee__track {
          animation-play-state: paused;
        }
        @keyframes brc-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(calc(-50% - 10px), 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brc-marquee {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-mask-image: none;
            mask-image: none;
          }
          .brc-marquee__track { animation: none; }
        }
      `}</style>

      {/* Rating summary */}
      <div className="mb-10 flex flex-wrap items-end gap-x-8 gap-y-4">
        <div className="flex items-center gap-4">
          <span className="text-5xl font-black leading-none tracking-[0.02em] text-white md:text-6xl">
            {averageRating.toFixed(1)}
          </span>
          <div className="pb-1">
            <Stars />
            <span className="mt-2 block text-[10px] uppercase tracking-[0.24em] text-white/40">
              {reviewCount} Google reviews
            </span>
          </div>
        </div>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-1 inline-flex items-center gap-1.5 border-b border-white/25 pb-1 text-[10px] uppercase tracking-[0.24em] text-white/60 transition-colors hover:border-white hover:text-white"
        >
          Read them on Google
          <ArrowUpRight size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <Row items={reviews} direction="left" duration={110} />
    </div>
  )
}
