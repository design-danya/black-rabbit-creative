/**
 * Merchynt / localmarketingmanager.com FAQ embed.
 *
 * The Reviews and Recent Posts embeds from this service stopped rendering and
 * were removed — reviews are now self-hosted in components/ReviewsMarquee.tsx.
 * This FAQ embed is the last remaining third-party widget on the site.
 */

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
