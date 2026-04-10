# ADR-001: CMS Selection — Sanity Free

**Status**: Accepted
**Date**: 2026-04-10
**Decision maker**: Mishal
**Backlog item**: BL-002

## Context

mishal.one requires a headless CMS for B2B thought leadership content — blog posts, pages, media, and eventually testimonials. The site is an Astro v5 static site deployed to Cloudflare Pages. The operator is a solo developer with 4 hrs/week available. The business goal is brand positioning targeting senior decision-makers at top firms, with a traffic milestone of 10K weekly visitors before monetization.

Previous attempt with Payload CMS failed due to configuration complexity (database setup, Wrangler bindings, Workers bundle size constraints).

## Decision

**Use Sanity Free as the content management system.**

## Options Evaluated

| CMS | Hosting | Cost/yr | Setup time | Ops burden | Media | Rich text | Astro support |
|---|---|---|---|---|---|---|---|
| **Sanity Free** | Managed (cloud) | $0 | 2-3 hrs | ~0 hrs/mo | CDN + focal points | Portable Text | Official `@sanity/astro` |
| Payload (CF Workers) | Self-hosted | $60-180 | 6-10 hrs | 1-2 hrs/mo | R2 (manual config) | Lexical | Official docs, REST fetch |
| Strapi v5 | Self-hosted | $72-1680 | 4-6 hrs | 2-4 hrs/mo | S3/local | Blocks | Community loader |
| Storyblok | Managed (SaaS) | $0-1068 | 2-3 hrs | ~0 hrs/mo | CDN | Bloks | Official integration |
| WordPress (headless) | Self-hosted | $120-360 | 2-4 hrs | 2-4 hrs/mo | Built-in | Gutenberg | REST API |

## Rationale

### Why Sanity

1. **Zero operations burden** — Content Lake is managed. No database migrations, no server monitoring, no security patches. 4 hrs/week goes entirely to writing.

2. **Best media pipeline for B2B** — Global CDN with on-the-fly transforms (resize, crop, format conversion). Focal point editor preserves composition at any aspect ratio. Auto WebP/AVIF. Senior B2B buyers judge visual quality in seconds.

3. **GROQ query language** — Purpose-built for content relationships. Topic clusters, content series, related posts — the building blocks of a knowledge base that senior buyers bookmark. No N+1 query problems.

4. **Portable Text** — Rich content beyond Markdown. Custom blocks (callouts, CTAs, data tables, embeds) that B2B thought leadership requires. Renders to any frontend — not locked to HTML.

5. **Official Astro integration** — `@sanity/astro` with first-party support. Studio embeds at `/studio`. Content collections compatibility.

6. **$0/yr at current scale** — Free tier: 20 seats, unlimited documents, unlimited API requests, 1 dataset. At 4 cron builds/day = ~12K API calls/month. Free tier handles this trivially.

7. **Low lock-in** — `sanity dataset export` dumps all content as JSON. Schema is code (sanity.config.ts). Switching cost estimated at 1-2 days.

### Why not Payload

1. **Previous attempt failed** — Configuration complexity (D1 bindings, R2 plugin, Workers bundle size) consumed time without producing a working system.
2. **Operational burden** — Database migrations, Workers monitoring, security updates. Estimated 18 hrs/year in ops vs ~0 for Sanity.
3. **Features not needed yet** — Payload's advantages (native forms, auth, paywalls, Stripe plugin) are irrelevant until 10K weekly visitors. GHL is parked.
4. **Higher cost** — $60/yr minimum (Workers Paid) vs $0.

### Why not Strapi

1. **v4 end-of-life October 2025** — Must use v5, which is newer with smaller ecosystem.
2. **Self-hosted ops** — Same burden as Payload but without Cloudflare-native deployment.
3. **Hidden cost** — Strapi hosting at $49/mo requires 312-1300 dev hours/year for security patching alone.

### Why not Storyblok

1. **Component-based CMS** — Optimised for marketing landing pages with visual editing. Overkill for a blog-first site.
2. **Free tier limited** — 1 user on free plan (vs Sanity's 20 seats).

## Consequences

### Positive
- All CMS time goes to content creation, not infrastructure
- Media quality matches B2B buyer expectations out of the box
- Content relationships enable topic clustering from day 1
- $0 cost until traffic milestone reached

### Negative
- No native content scheduling on Free tier — mitigated by GitHub Actions cron (rebuild every 6h)
- No native forms — mitigated by Buttondown for email capture (GHL added later)
- No native auth/paywalls — mitigated by adding Clerk + Stripe when monetisation starts
- Cloud dependency — Sanity controls the Content Lake (mitigated by export capability)

### Risks
- **Sanity pricing increase** — Low probability. Export available anytime. Switching cost: 1-2 days.
- **Free tier limits hit** — Near-zero probability at current scale. Would need 100K+ API calls/month.
- **Portable Text learning curve** — Medium. Different from Markdown but well-documented.

## Upgrade Path

| Milestone | Action | Cost delta |
|---|---|---|
| 10K weekly visitors | Add GHL for CRM + lead capture | +$97/mo |
| Team collaboration needed | Upgrade Sanity to Growth | +$99/mo |
| Monetisation decision | Add Clerk auth + Stripe | +$0-25/mo |
| Content velocity > 20 posts/mo | Evaluate native scheduling vs cron | Sanity Growth covers this |

## Review Trigger

Revisit this decision when:
- Weekly traffic consistently exceeds 10K visitors
- More than 1 person needs CMS access
- Content scheduling friction exceeds 30 min/week
- Sanity changes Free tier limits

## References

- `docs/cms-evaluation.md` — Full technical comparison
- `docs/cms-feature-matrix.md` — 127-feature vendor-agnostic checklist
- `docs/website-signals.md` — Baker's 13 signals mapped to CMS requirements
- https://docs.astro.build/en/guides/cms/sanity/ — Official Astro + Sanity guide
- https://www.sanity.io/pricing — Sanity pricing tiers
