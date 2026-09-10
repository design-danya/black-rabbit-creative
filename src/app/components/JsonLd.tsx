/**
 * Emits JSON-LD. Server component on purpose — the markup has to be in the
 * initial HTML for crawlers and answer engines, not injected after hydration.
 */
export function JsonLd({ schema }: { schema: object | object[] }) {
  const payload = Array.isArray(schema) ? schema : [schema]
  return (
    <>
      {payload.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  )
}
