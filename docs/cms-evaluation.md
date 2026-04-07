# CMS Evaluation — mishal.one + qrius.global

**Purpose**: Evaluate headless CMS platforms against the WordPress feature baseline for a content-heavy marketing site with lead generation, scheduling, newsletters, and optional paywalled content.

**Companion docs**:
- `docs/cms-feature-matrix.md` — Vendor-agnostic 127-feature checklist (MUST/NICE/FUTURE)
- `docs/wordpress-feature-inventory.md` — Full WordPress plugin ecosystem inventory

---

## 1. What WordPress Does (the baseline)

WordPress dominates because it provides a single admin panel for everything. The key feature groups:

| Category | WordPress Plugin | Feature Count |
|---|---|---|
| Content editing | Gutenberg + ACF | Rich text, blocks, custom fields, revisions, drafts |
| Scheduling | Core | Future date → auto-publish, expiry, content calendar |
| Media library | Core + SmushPro | Upload, crop, focal point, galleries, WebP conversion, CDN |
| SEO | Yoast / RankMath | Meta, schema, sitemaps, readability, keyword, internal links |
| Forms | Gravity Forms / WPForms | Multi-step, conditional logic, file upload, payments, CRM |
| Email | Mailchimp / ConvertKit | Subscriber capture, drip sequences, RSS-to-email |
| Analytics | MonsterInsights / GA4 | Traffic, funnels, conversion tracking, UTM |
| Social | Social Warfare / Jetpack | Auto-post, OG cards, share buttons |
| Paywalls | MemberPress / Restrict Content Pro | User auth, content tiers, Stripe subscriptions |
| Comments | Core + Akismet | Threaded comments, moderation, spam protection |
| Multilingual | WPML / Polylang | Translation workflows, hreflang, locale URLs |
| E-commerce | WooCommerce | Products, payments, subscriptions, digital downloads |

**Total cost**: ~$50-150/mo (hosting + premium plugins)

---

## 2. Payload CMS — Deep Technical Analysis

### What it is
TypeScript-first, open-source (MIT), self-hosted headless CMS built on Next.js. Config-as-code — schema defined in TypeScript, auto-generates REST + GraphQL APIs, admin UI, and database schema.

### CLI

```bash
# Create project
npx create-payload-app@latest -t website -n my-cms

# Core commands
pnpm dev                    # Dev server (localhost:3000)
pnpm build                  # Production build
pnpm generate:types         # Auto-generate TypeScript from schema
pnpm payload migrate:create # Database migration
pnpm payload migrate        # Run migrations
```

### Configuration (payload.config.ts)

```typescript
import { buildConfig } from 'payload/config'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'

export default buildConfig({
  admin: { user: 'users' },
  db: postgresAdapter({ url: process.env.DATABASE_URL }),
  collections: [
    {
      slug: 'posts',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'richText' },
        { name: 'publishDate', type: 'date' },
        { name: 'status', type: 'select', options: ['draft', 'review', 'published'] },
      ],
      access: {
        read: () => true,
        create: ({ req }) => req.user?.role === 'admin',
      },
      hooks: {
        afterChange: [triggerAstroRebuild],
      },
    },
  ],
  plugins: [
    seoPlugin({ collections: ['posts', 'pages'] }),
    formBuilderPlugin({ fields: { text: true, email: true, select: true, message: true } }),
  ],
})
```

### Plugin Ecosystem

| Plugin | What it does | WordPress equivalent |
|---|---|---|
| `@payloadcms/plugin-seo` | Meta title, description, OG image per document | Yoast SEO |
| `@payloadcms/plugin-form-builder` | Visual form builder + email notifications + webhooks | Gravity Forms |
| `@payloadcms/plugin-redirects` | 301/302 redirect management | Redirection plugin |
| `@payloadcms/plugin-search` | Indexed search collection | SearchWP |
| `@payloadcms/plugin-nested-docs` | Hierarchical page tree | Page hierarchy (core) |
| `@payloadcms/plugin-stripe` | Subscriptions, payments, billing sync | WooCommerce Subscriptions |
| `@payloadcms/plugin-cloud-storage` | S3/R2/GCS media uploads | WP Offload Media |

### Production Users
Microsoft (Designer), ASICS, Blue Origin, Sonos, Bizee (2,500-page migration in 3 months)

### Cloudflare Deployment

```bash
# Official template
npx create-payload-app@latest -t with-cloudflare-d1

# Requires:
# - Cloudflare Workers Paid ($5/mo) — free plan bundle too small
# - D1 database (SQLite on edge)
# - R2 bucket for media uploads
```

```toml
# wrangler.toml
[[d1_databases]]
binding = "DB"
database_name = "payload-db"

[[r2_buckets]]
binding = "R2_BUCKET"
bucket_name = "payload-assets"
```

### Astro Integration

Payload runs as a separate service. Astro fetches via REST API:

```astro
---
const res = await fetch('https://cms.mishal.one/api/posts?where[status][equals]=published&sort=-publishDate')
const { docs: posts } = await res.json()
---
{posts.map(post => <article><h2>{post.title}</h2></article>)}
```

Webhook on `afterChange` → triggers `bun run build` via GitHub Actions or Cloudflare deploy hook.

### RSS / Newsletter / Paywalls

| Feature | How |
|---|---|
| RSS | Custom API route generating XML from posts collection |
| Newsletter | Expose RSS → Buttondown RSS-to-email pulls automatically |
| Paywalls | Built-in auth + field-level access control per role |
| Subscriptions | `@payloadcms/plugin-stripe` — full billing sync |
| Member content | Access control returns filtered queries based on `req.user` |

### Verdict
**Production-grade.** Most complete WordPress replacement. Form builder, SEO, Stripe paywalls, field-level RBAC all built-in. The Cloudflare D1 template means it runs on your existing infrastructure. Trade-off: requires Node.js runtime (Workers Paid or separate hosting).

---

## 3. Sanity — Deep Technical Analysis

### What it is
Cloud-native structured content platform. Content stored in Sanity's "Content Lake" (hosted). Studio is a React app you customise and deploy. Query via GROQ (proprietary query language).

### CLI

```bash
# Create project
npm create sanity@latest

# Core commands
sanity dev               # Dev server (localhost:3333)
sanity build             # Build Studio
sanity deploy            # Deploy Studio to Sanity hosting
sanity dataset create    # Create new dataset
sanity dataset export    # Export all data
sanity documents get     # Fetch specific document
sanity graphql deploy    # Deploy GraphQL API
sanity hooks set         # Configure webhooks
```

### Configuration (sanity.config.ts)

```typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'mishal-one',
  title: 'mishal.one',
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),     // GROQ query explorer
  ],
  schema: {
    types: [
      {
        name: 'post',
        title: 'Post',
        type: 'document',
        fields: [
          { name: 'title', type: 'string' },
          { name: 'slug', type: 'slug', options: { source: 'title' } },
          { name: 'body', type: 'array', of: [{ type: 'block' }] },
          { name: 'publishedAt', type: 'datetime' },
          {
            name: 'featuredImage', type: 'image',
            options: { hotspot: true },
            fields: [{ name: 'alt', type: 'string' }],
          },
          {
            name: 'accessLevel', type: 'string',
            options: { list: ['public', 'members', 'premium'] },
          },
        ],
      },
    ],
  },
})
```

### GROQ Query Examples

```groq
// All published posts
*[_type == "post" && publishedAt <= now()] | order(publishedAt desc) {
  title, slug, excerpt, publishedAt,
  author->{ name },
  categories[]->{ title, slug }
}

// Single post with related
*[_type == "post" && slug.current == $slug][0] {
  title, body, publishedAt,
  author->{ name, bio },
  "related": *[_type == "post" && slug.current != $slug && count(categories[] & ^.categories[]) > 0][0..3]
}

// Scheduled (future) posts
*[_type == "post" && publishedAt > now()] | order(publishedAt)
```

### Image Pipeline

```typescript
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({ projectId: 'abc', dataset: 'production' })
const urlFor = (source) => builder.image(source)

// Responsive srcset
const widths = [400, 800, 1200]
const srcset = widths.map(w => `${urlFor(image).width(w).url()} ${w}w`).join(', ')
```

Features: focal point editor, auto WebP/AVIF, CDN delivery, blur hash placeholders, colour palette extraction.

### Astro Integration

```bash
npx astro add @sanity/astro @astrojs/react
```

```javascript
// astro.config.mjs
import sanity from '@sanity/astro'

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'abc123',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2026-01-01',
    }),
  ],
})
```

```astro
---
import { sanityClient } from 'sanity:client'

const posts = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc)`)
---
```

Studio embeds at `/studio` route automatically.

### Pricing

| Plan | Price | Seats | Scheduling | Datasets |
|---|---|---|---|---|
| Free | $0 | 20 | No | 1 |
| Growth | $99/mo + $15/seat | 50+ | Yes (Content Releases) | 2 |
| Enterprise | Custom | Unlimited | Yes | Unlimited |

**Critical**: Content scheduling requires Growth ($99/mo). Free tier has no scheduling.

### RSS / Newsletter / Paywalls

| Feature | How |
|---|---|
| RSS | Custom endpoint with GROQ query → XML generation |
| Newsletter | Webhook on publish → Buttondown API, or RSS-to-email |
| Paywalls | Frontend implementation — Sanity is content-only, no auth |
| Subscriptions | Need external auth (Auth0, Clerk) + Stripe separately |
| Member content | `accessLevel` field in schema + frontend gating |

### Production Users
Nike, National Geographic, Eurostar (200M+ passengers), Morning Brew (13 brands, 5 engineers), DataStax

### Verdict
**Best media pipeline and query language.** GROQ is genuinely powerful. Image CDN with focal points is best-in-class. Trade-offs: cloud-only (no self-hosting), scheduling costs $99/mo, paywalls/auth require external services.

---

## 4. Head-to-Head Comparison

### Feature Matrix (WordPress vs Payload vs Sanity)

| Feature | WordPress | Payload CMS | Sanity |
|---|---|---|---|
| **Rich text editor** | Gutenberg (blocks) | Lexical (blocks) | Portable Text (blocks) |
| **Custom fields** | ACF plugin ($49/yr) | Native (TypeScript schema) | Native (schema types) |
| **Content revisions** | Core | Native | Native |
| **Draft/publish** | Core | Native | Native |
| **Scheduled publish** | Core (free) | Custom hook (free) | Content Releases ($99/mo) |
| **Editorial workflow** | EditFlow plugin | Custom access control | Growth plan tasks/comments |
| **Content calendar** | CoSchedule plugin | Build yourself | Plugin available |
| **Media upload** | Core | Native | Native |
| **Image optimization** | SmushPro ($7/mo) | Sharp (self, free) | CDN pipeline (included) |
| **Focal point crop** | Plugin | Not native | Native hotspot editor |
| **CDN delivery** | Plugin + external | R2/S3 (self-managed) | Built-in global CDN |
| **SEO meta fields** | Yoast ($99/yr) | `@payloadcms/plugin-seo` (free) | Custom fields (manual) |
| **Schema.org JSON-LD** | Yoast | Manual or plugin | Manual |
| **XML sitemap** | Yoast | Astro handles this | Astro handles this |
| **Redirect management** | Redirection (free) | `@payloadcms/plugin-redirects` (free) | Manual or plugin |
| **Form builder** | Gravity Forms ($59/yr) | `@payloadcms/plugin-form-builder` (free) | No native — need external |
| **Lead capture** | OptinMonster ($9/mo) | Form builder + webhooks | External service |
| **CRM integration** | HubSpot plugin | Webhook → any CRM | Webhook → any CRM |
| **Email capture** | Mailchimp plugin | Form → webhook → Buttondown | Webhook → Buttondown |
| **Newsletter** | Mailchimp/ConvertKit | RSS → Buttondown | RSS → Buttondown |
| **Drip sequences** | ConvertKit ($29/mo) | External service | External service |
| **RSS feed** | Core (free) | Custom endpoint | Custom endpoint |
| **User auth** | Core (free) | Built-in (JWT) | External (Auth0/Clerk) |
| **Paywalled content** | MemberPress ($179/yr) | Field-level access control | Frontend gating only |
| **Stripe subscriptions** | WooCommerce Subs | `@payloadcms/plugin-stripe` (free) | External integration |
| **Comments** | Core + Akismet | Build yourself | No |
| **Auto social posting** | Jetpack/Buffer | Webhook → Buffer API | Webhook → Buffer API |
| **OG image generation** | Yoast | Astro build-time | Astro build-time |
| **Analytics** | GA4/MonsterInsights | PostHog (external) | PostHog (external) |
| **RBAC** | User Roles (core) | Field-level (best in class) | Role-based (Growth plan) |
| **SSO** | Plugin | Build yourself | Enterprise only |
| **Audit logs** | WP Activity Log | Custom hooks | Growth plan |
| **CLI** | WP-CLI | `payload` CLI | `sanity` CLI |
| **TypeScript** | No | Full (schema → types) | Full (schema → types) |
| **Astro integration** | REST API (headless) | REST API + official docs | Official `@sanity/astro` |
| **Self-hosted** | Yes (PHP/MySQL) | Yes (Node.js/Postgres/D1) | No (cloud only) |
| **Cloudflare deploy** | No | Yes (Workers + D1) | Studio only (content in cloud) |
| **Cost (solo)** | $50-150/mo | $5-35/mo infrastructure | $0-99/mo SaaS |

### Decision Matrix

| Priority | Winner | Why |
|---|---|---|
| **Lead generation** | Payload | Native form builder + Stripe plugin |
| **Media pipeline** | Sanity | CDN, focal points, auto-format, blur hash |
| **Scheduling (free)** | Payload | Custom hooks, no paywall on the feature |
| **Scheduling (polished UI)** | Sanity Growth | Content Releases with calendar view |
| **Paywalled content** | Payload | Built-in auth + field-level access + Stripe |
| **Self-hosting** | Payload | Full control, Cloudflare D1 template |
| **Zero-ops** | Sanity | Cloud-managed, no infrastructure to maintain |
| **TypeScript DX** | Tie | Both excellent |
| **Astro integration** | Sanity | First-party `@sanity/astro` with Studio embed |
| **Total cost (solo)** | Payload | $5-10/mo (Workers + D1) vs $99/mo (Sanity Growth) |
| **Enterprise scaling** | Sanity | Real-time collab, multiplayer editing |

---

## 5. Content Operations Stack

Beyond the CMS, you need these layers for full WordPress parity:

| Layer | Tool | Cost | Replaces |
|---|---|---|---|
| **CMS** | Payload or Sanity | $5-99/mo | WordPress core |
| **Forms** | Payload form builder or Basin ($5/mo) | $0-5/mo | Gravity Forms |
| **Email** | Buttondown | $0-15/mo | Mailchimp |
| **Analytics** | PostHog | $0 | GA4 + MonsterInsights |
| **Social scheduling** | Buffer or Typefully | $5-15/mo | Jetpack Social |
| **Build automation** | GitHub Actions (cron) | $0 | WordPress cron |
| **CDN/Hosting** | Cloudflare Pages | $0 | WP Engine |
| **SEO** | Built into Astro (done) | $0 | Yoast |
| **Paywalls** | Payload auth + Stripe or Stripe Checkout | $0 + Stripe fees | MemberPress |
| **RSS** | `@astrojs/rss` or custom | $0 | WordPress core |
| **Newsletter auto** | Buttondown RSS-to-email | $0 | Mailchimp RSS |
| **OG images** | Astro build-time generation | $0 | Yoast OG |
| **Total** | | **$10-134/mo** | **$50-150/mo** |

---

## 6. Automated Content Pipeline

```
┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
│  CMS Admin   │───→│  Webhook     │───→│  GitHub Actions  │
│  (Payload/   │    │  on publish  │    │  cron rebuild    │
│   Sanity)    │    └──────────────┘    └────────┬────────┘
└──────┬───────┘                                 │
       │                                         ▼
       │ Schedule                         ┌──────────────┐
       │ future date                      │  Astro build  │
       ▼                                  │  → Cloudflare │
┌──────────────┐                          │    Pages      │
│  Auto-publish │                         └──────┬───────┘
│  at scheduled │                                │
│  time        │                                 ▼
└──────────────┘                          ┌──────────────┐
                                          │  RSS feed    │
                                          │  generated   │
                                          └──────┬───────┘
                                                 │
                                                 ▼
                                          ┌──────────────┐
                                          │  Buttondown   │
                                          │  RSS-to-email │
                                          │  auto-send    │
                                          └──────┬───────┘
                                                 │
                                                 ▼
                                          ┌──────────────┐
                                          │  Social post  │
                                          │  (Buffer/     │
                                          │   webhook)    │
                                          └──────────────┘
```

**Batch workflow**: Create 4 posts in CMS → set future publish dates (Mon/Wed/Fri/Mon) → system auto-publishes → RSS updates → Buttondown sends newsletter → Buffer posts to social. Zero manual intervention after initial creation.

---

## 7. Recommendation

### If you want full control + lead gen + paywalls:
**Payload CMS** on Cloudflare Workers + D1

- $5-10/mo infrastructure
- Form builder, SEO, Stripe, auth all included
- Cloudflare D1 template exists (one-click deploy)
- Schema-as-code matches your engineering approach
- Paywalled content via field-level access — no external auth needed

### If you want zero ops + best media pipeline:
**Sanity** Growth plan

- $99/mo (or free if you skip scheduling)
- Best image CDN with focal points
- GROQ is genuinely powerful for complex queries
- Real-time collaboration if you add team members
- Studio embeds directly into your Astro site
- Trade-off: no native forms, no native auth, no self-hosting

### If you want to start free and upgrade later:
**Sanity Free** → **Payload** when you need forms/paywalls

- Start with Sanity Free (20 seats, unlimited docs, no scheduling)
- Build content, get traffic, validate the approach
- When you need scheduling + forms + paywalls, add Payload alongside or migrate

---

## 8. Next Steps

1. Read `docs/cms-feature-matrix.md` — score both vendors against the 127-feature checklist
2. Decide: Payload (self-host, full control) vs Sanity (managed, zero-ops)
3. Prototype: spin up the chosen CMS with 3 test posts
4. Wire: CMS → Astro content fetch → build → Cloudflare Pages
5. Automate: webhook → rebuild → RSS → newsletter → social
