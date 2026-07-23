import React, { useState } from 'react'
import Image from 'next/image'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Skip lazy-loading for above-the-fold images. */
  priority?: boolean
  /** Responsive hint passed through to next/image. */
  sizes?: string
}

/**
 * Renders through next/image so Vercel serves resized AVIF/WebP derivatives.
 * Source files in public/assets are never modified — the optimizer generates
 * variants at request time and caches them at the edge.
 */
export function ImageWithFallback({
  src,
  alt,
  style,
  className,
  width,
  height,
  loading,
  priority,
  sizes,
}: Props) {
  const [didError, setDidError] = useState(false)

  if (didError || typeof src !== 'string' || src === '') {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ERROR_IMG_SRC} alt="Error loading image" data-original-url={src} />
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt ?? ''}
      className={className}
      style={style}
      width={Number(width) || 800}
      height={Number(height) || 800}
      sizes={sizes ?? '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px'}
      priority={priority}
      loading={priority ? undefined : ((loading as 'lazy' | 'eager') ?? 'lazy')}
      onError={() => setDidError(true)}
    />
  )
}
