export const dynamic = "force-static"

import { MetadataRoute } from 'next'

/**
 * Crawler policy.
 *
 * The AI crawlers are named explicitly rather than left to the wildcard, so
 * the studio's position is a deliberate choice and easy to reverse: being
 * quotable by assistants is how a small studio gets found now, and being
 * excluded from Google-Extended would also drop the site from AI Overviews
 * sourcing. To opt out of any of them, move it to its own rule with
 * `disallow: '/'`.
 */
const AI_CRAWLERS = [
  'GPTBot',            // OpenAI — ChatGPT browsing and training
  'OAI-SearchBot',     // OpenAI — ChatGPT search index
  'ChatGPT-User',      // OpenAI — user-initiated fetches
  'ClaudeBot',         // Anthropic
  'Claude-User',       // Anthropic — user-initiated fetches
  'PerplexityBot',     // Perplexity
  'Perplexity-User',   // Perplexity — user-initiated fetches
  'Google-Extended',   // Google — Gemini grounding and AI Overviews sourcing
  'Applebot-Extended', // Apple Intelligence
  'meta-externalagent',
  'Bingbot',
  'DuckDuckBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private'],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
        disallow: ['/admin', '/private'],
      },
    ],
    sitemap: 'https://www.blackrabbit-creative.com/sitemap.xml',
  }
}
