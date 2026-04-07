# Vendor-Agnostic CMS Feature Matrix

**Purpose**: Master evaluation checklist for any content management system serving a content-heavy marketing site (thought leadership, lead capture, multi-channel distribution).

**Target Use Case**: Mishal.one + Qrius.global content pipeline — high-volume thought leadership publishing with SEO focus, lead capture, and multi-platform distribution.

**Priority Tiers**:
- **MUST HAVE**: Core content marketing baseline — non-negotiable for launch
- **NICE TO HAVE**: Competitive advantage; improves efficiency or reach but workaround exists
- **FUTURE**: Planning horizon — build later or via integration if foundational features solid

---

## 1. Content Authoring

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **Rich Text Editor** | Block-based editing (Gutenberg, Notion-style) | MUST HAVE | Separates content structure from presentation; enables reusable layouts |
| | WYSIWYG inline formatting (bold, italic, link, code) | MUST HAVE | Baseline content editing |
| | Heading hierarchy (H1–H6) with semantic structure | MUST HAVE | Critical for SEO and accessibility |
| | Table support (create, edit, merge cells) | NICE TO HAVE | Some content requires tabular data; workaround = embed external tool |
| | Embed support (iframe, video, Twitter, CodePen, etc.) | NICE TO HAVE | Enriches content; workaround = external embeds + markdown |
| | Image placement (inline, float, hero) | MUST HAVE | Core content composition |
| | Callout/blockquote blocks | NICE TO HAVE | Visual emphasis; workaround = markdown syntax |
| **Markdown/MDX Support** | Native Markdown input | NICE TO HAVE | Faster for technical writers; optional if WYSIWYG is strong |
| | MDX (Markdown + JSX components) | FUTURE | Enables interactive components inline; plan for later |
| | Markdown export / conversion | NICE TO HAVE | Content portability |
| **Draft/Publish Workflow** | Draft state (unsaved, in-progress) | MUST HAVE | Core editing safety |
| | Scheduled publishing (future date + time) | MUST HAVE | Enables editorial calendar; async distribution |
| | One-click publish to live | MUST HAVE | Quick content activation |
| | Unpublishing (soft delete, archive) | MUST HAVE | Content lifecycle management |
| **Content Versioning & Revisions** | Auto-save revisions (snapshots on each edit) | MUST HAVE | Undo/rollback safety; audit trail |
| | Revision history (view, compare, restore) | MUST HAVE | Mistake recovery; fact-check audits |
| | Named versions / snapshots (e.g., "pre-review", "final") | NICE TO HAVE | Workflow control; workaround = file naming convention |
| | Diff viewer (shows changes between versions) | NICE TO HAVE | Review clarity; helpful for approval chains |
| **Content Locking** | Prevent simultaneous edits (lock on open) | NICE TO HAVE | Team collaboration safety; workaround = async files |
| | Edit conflict resolution (merge or last-write-wins) | NICE TO HAVE | Team safety; relevant only if multiple editors |
| | Lock notifications (who's editing now) | NICE TO HAVE | Awareness; lower priority |
| **Bulk Operations** | Batch publish multiple items | NICE TO HAVE | Efficiency gain; workaround = manual publish |
| | Batch delete with confirmation | NICE TO HAVE | Housekeeping efficiency |
| | Batch update metadata (add tags, update status) | NICE TO HAVE | Campaign management; workaround = one-by-one |
| | CSV/bulk import | FUTURE | Helpful for large migrations; not immediate need |
| **Content Templates & Blueprints** | Template library (reusable content shapes) | NICE TO HAVE | Consistency + speed; workaround = manual copy |
| | Template settings (fields, defaults, validation) | NICE TO HAVE | Enforce structure |
| | Template inheritance (variants) | FUTURE | Advanced reuse; lower priority |
| **Content Cloning & Duplication** | Clone entire item with history reset | NICE TO HAVE | Faster updates to similar pieces; workaround = manual copy |
| | Clone with field mapping | FUTURE | Advanced; nice-to-have optimization |

---

## 2. Content Scheduling & Workflow

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **Scheduled Publishing** | Publish at future date + time | MUST HAVE | Async distribution to global audiences |
| | Scheduled unpublishing / expiry | NICE TO HAVE | Content lifecycle; workaround = manual unpublish |
| | Timezone handling | MUST HAVE | Global team or audience |
| **Editorial Workflow** | Draft state | MUST HAVE | Baseline editing |
| | In-Review state (submitted for approval) | MUST HAVE | Prevents accidental publication |
| | Approved state (ready to publish) | MUST HAVE | Gating mechanism before going live |
| | Published state | MUST HAVE | Baseline |
| | Reject / Send back to draft | NICE TO HAVE | Feedback loops; workaround = comments |
| **Approval Chains** | Single approver requirement | MUST HAVE | Quality gate |
| | Multi-person approval (series or parallel) | NICE TO HAVE | Large teams; workaround = single approver + comments |
| | Role-based approval routing (e.g., SEO → Legal → Publish) | NICE TO HAVE | Specialized workflows |
| | Approval comments / feedback | MUST HAVE | Approver-to-author communication |
| **Content Calendar View** | Visual calendar (month, week, day) | NICE TO HAVE | Editorial planning; workaround = external calendar |
| | Drag-to-reschedule | NICE TO HAVE | Quick adjustments |
| | Color-coded status (draft, scheduled, published, expired) | NICE TO HAVE | At-a-glance view |
| | Filter by author, status, category | NICE TO HAVE | Navigation |
| **Content Status Tracking** | Display current state (draft, in-review, scheduled, live, archived) | MUST HAVE | Clarity |
| | Activity timeline (who did what, when) | NICE TO HAVE | Audit clarity |
| | Status change notifications | NICE TO HAVE | Team awareness |

---

## 3. Media & Asset Management

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **Upload** | Drag-and-drop file upload | MUST HAVE | Baseline UX |
| | Bulk upload (multiple files at once) | NICE TO HAVE | Speed; workaround = one-by-one |
| | Direct file paste (Ctrl+V) | NICE TO HAVE | Quick workflow |
| | Upload progress indicator | MUST HAVE | UX feedback |
| **Image Optimization** | Auto-resize on upload (fit to max width) | MUST HAVE | Prevent massive files |
| | Crop tool (interactive) | NICE TO HAVE | Customization; workaround = external tool |
| | Format conversion (JPEG, WebP, AVIF) | NICE TO HAVE | Performance; workaround = serve as-uploaded |
| | Compression (lossy + lossless) | NICE TO HAVE | File size reduction |
| | Focal point / hotspot editor (for responsive crops) | NICE TO HAVE | Prevent content loss in smaller viewports |
| **Video Hosting & Embed** | Native video upload + hosting | NICE TO HAVE | Convenience; workaround = embed YouTube/Vimeo |
| | YouTube/Vimeo embed support | MUST HAVE | Third-party video distribution |
| | Video player (controls, captions, autoplay) | NICE TO HAVE | If self-hosted |
| **Asset Library** | Search assets by filename, alt-text | MUST HAVE | Findability |
| | Filter by type (images, video, documents) | MUST HAVE | Navigation |
| | Tag / organize assets (folders, collections) | MUST HAVE | Large team organization |
| | View asset metadata (dimensions, file size, upload date) | NICE TO HAVE | Asset management clarity |
| | Bulk asset operations (tag, delete, move) | NICE TO HAVE | Housekeeping |
| **CDN Delivery** | Automatic CDN serving (Cloudflare, Fastly, etc.) | MUST HAVE | Performance baseline |
| | Cache headers / TTL control | NICE TO HAVE | Performance tuning |
| | Purge/invalidate cache on update | MUST HAVE | Ensure fresh delivery after edits |
| **SVG Support** | Upload and serve SVG | NICE TO HAVE | Icons, diagrams; workaround = PNG fallback |
| | Inline SVG editing | FUTURE | Advanced; lower priority |
| **Responsive Image Generation** | Auto-generate srcset (multiple sizes) | NICE TO HAVE | Responsive performance; workaround = manual srcset |
| | WebP variant generation | NICE TO HAVE | Modern format support |
| | AVIF variant generation | FUTURE | Next-gen format; plan for future |

---

## 4. SEO & Metadata

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **Per-Page SEO Fields** | Meta title (editable, character count with preview) | MUST HAVE | Google SERP display; critical for CTR |
| | Meta description (editable, 155–160 char guidance) | MUST HAVE | Google SERP display |
| | Meta keywords (legacy, but captures intent) | NICE TO HAVE | Backward compatibility; less critical |
| | Focus keyword / primary keyword tracking | NICE TO HAVE | Editorial guidance |
| **Open Graph (OG) Tags** | og:title | MUST HAVE | Social sharing preview |
| | og:description | MUST HAVE | Social sharing preview |
| | og:image (with upload/URL input) | MUST HAVE | Social sharing thumbnail |
| | og:image alt text | NICE TO HAVE | Accessibility for social |
| | og:type (article, website, etc.) | NICE TO HAVE | Rich sharing info |
| | og:url (auto-set or override) | MUST HAVE | Share link accuracy |
| | og:locale (for multi-language) | FUTURE | Multi-language support |
| **Twitter Card Tags** | twitter:card (summary, summary_large_image) | NICE TO HAVE | Twitter preview; workaround = fallback to OG |
| | twitter:title / twitter:description | NICE TO HAVE | Twitter-specific preview |
| | twitter:image | NICE TO HAVE | Twitter-specific thumbnail |
| | twitter:site / twitter:creator | NICE TO HAVE | Attribution |
| **Canonical URL** | Auto-set canonical (self-reference) | MUST HAVE | Prevent duplicate content penalties |
| | Override canonical (point to original/primary) | NICE TO HAVE | Syndication management |
| **XML Sitemap** | Auto-generate sitemap.xml | MUST HAVE | Search engine discovery |
| | Include lastmod timestamps | NICE TO HAVE | Crawl priority hints |
| | Include priority hints (0.0–1.0) | NICE TO HAVE | Crawl guidance |
| | Exclude unpublished/archived content | MUST HAVE | Don't expose drafts to search |
| **Robots Meta Per-Page** | robots: index/noindex toggle | MUST HAVE | Exclude sensitive/draft pages from search |
| | robots: follow/nofollow toggle | NICE TO HAVE | Control link crawling |
| | robots: nosnippet / noimageindex | FUTURE | Advanced SEO control |
| **Schema.org / JSON-LD** | Article schema (headline, author, datePublished, image) | MUST HAVE | Rich snippets in search results |
| | Breadcrumb schema | NICE TO HAVE | Breadcrumb rich results |
| | Organization schema (logo, contact, social profiles) | NICE TO HAVE | Brand rich results |
| | Person schema (author bio) | NICE TO HAVE | Author attribution |
| | Auto-generate schema from content metadata | NICE TO HAVE | Reduces manual entry |
| **Breadcrumb Schema** | Auto-generate from URL hierarchy | NICE TO HAVE | Navigation rich results |
| | Custom breadcrumb paths | FUTURE | Advanced control |
| **Readability Scoring** | Flesch-Kincaid reading level | NICE TO HAVE | Content clarity guidance |
| | Sentence/paragraph length warnings | NICE TO HAVE | Readability optimization |
| | Passive voice detection | NICE TO HAVE | Writing style guidance |
| **Keyword & SEO Insights** | Focus keyword tracker (in title, headings, body) | NICE TO HAVE | SEO optimization hints |
| | Keyword density warnings | NICE TO HAVE | Avoid keyword stuffing |
| | Internal linking suggestions (based on keyword matches) | NICE TO HAVE | Cross-linking automation |
| | Related content recommendations | NICE TO HAVE | Content clustering |
| **Redirect Management** | 301 (permanent) redirect rules | NICE TO HAVE | URL migration; workaround = server config |
| | 302 (temporary) redirect rules | NICE TO HAVE | Temporary routing |
| | Bulk redirect import (CSV) | FUTURE | Large migrations |

---

## 5. Forms & Lead Capture

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **Form Builder** | Visual / drag-and-drop form designer | NICE TO HAVE | Non-technical form creation; workaround = form service (Typeform, Formspree) |
| | Template library (contact, newsletter signup, survey) | NICE TO HAVE | Faster creation |
| | Code/config-based forms (JSON schema) | NICE TO HAVE | Developer-friendly; flexibility |
| **Field Types** | Text input (single-line) | MUST HAVE | Baseline |
| | Email field (with validation) | MUST HAVE | Newsletter signup, contact |
| | Textarea (multi-line text) | NICE TO HAVE | Comments, messages |
| | Select dropdown | NICE TO HAVE | Options, categories |
| | Radio buttons | NICE TO HAVE | Binary/multiple choice |
| | Checkbox (single + multi-select) | NICE TO HAVE | Options |
| | Date picker | NICE TO HAVE | Scheduling, registration |
| | File upload field | NICE TO HAVE | Resume, proposal submission |
| | Phone number (with country code) | NICE TO HAVE | Contact forms |
| | Custom field types (extensibility) | FUTURE | Advanced |
| **Multi-Step Forms** | Form step navigation (next/prev buttons) | NICE TO HAVE | Reduce form abandonment; workaround = single-page |
| | Progress indicator (step 2 of 5) | NICE TO HAVE | UX clarity |
| | Skip/optional steps | FUTURE | Conditional navigation |
| **Conditional Logic** | Show/hide fields based on previous answers | NICE TO HAVE | Dynamic forms reduce cognitive load |
| | Conditional validation (require field X if Y selected) | NICE TO HAVE | Smart validation |
| **Spam Protection** | Honeypot field (hidden field to trap bots) | MUST HAVE | Baseline bot protection |
| | CAPTCHA (reCAPTCHA, hCaptcha) | NICE TO HAVE | Visible bot prevention; workaround = honeypot alone |
| | Rate limiting (prevent form submission spam) | NICE TO HAVE | DoS protection |
| **Form Submission** | Email notification to site owner | MUST HAVE | Lead capture alert |
| | Email confirmation to submitter | NICE TO HAVE | Transactional email |
| | Success message / redirect | MUST HAVE | User feedback |
| | Store submissions in database | MUST HAVE | Lead database / audit trail |
| **Webhooks** | POST to external URL on submission | NICE TO HAVE | CRM sync, automation (Zapier, Make) |
| | Retry logic (if webhook fails) | NICE TO HAVE | Reliability |
| **CRM Integration** | HubSpot sync | NICE TO HAVE | Lead capture → CRM workflow; workaround = webhook |
| | Salesforce sync | FUTURE | Enterprise need |
| | Custom CRM mapping | FUTURE | Advanced |
| **Lead Scoring** | Auto-assign score based on field values | FUTURE | Sales prioritization; not immediate need |
| | Engagement scoring (form completion rate, repeat visits) | FUTURE | Qualification logic |

---

## 6. Email & Newsletter

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **Subscriber Capture** | Embedded newsletter signup form | NICE TO HAVE | On-page subscription; workaround = external form |
| | Popup / modal signup (exit-intent, timed) | NICE TO HAVE | Capture rate optimization |
| | Slide-in / sticky signup (bottom/side of page) | NICE TO HAVE | Non-intrusive capture |
| | Double opt-in (confirmation email) | MUST HAVE | GDPR compliance, list hygiene |
| **Newsletter Management** | Subscriber list management (view, export, segment) | NICE TO HAVE | List administration |
| | Unsubscribe link (auto-included) | MUST HAVE | GDPR compliance, CAN-SPAM |
| | Preference center (frequency, topics) | NICE TO HAVE | Subscriber control; lower priority |
| **RSS-to-Email Automation** | Auto-send new published content as email | NICE TO HAVE | Distribution automation; workaround = manual send or third-party service |
| | Email template for RSS items | NICE TO HAVE | Branded email layout |
| | Digest format (daily, weekly, custom) | NICE TO HAVE | Batching |
| **Drip Sequences & Automation** | Create multi-email sequences (triggered by signup) | FUTURE | Nurture campaigns; not immediate need; workaround = external email service |
| | Conditional branching (if opened, then X) | FUTURE | Advanced automation |
| | Delay between emails | FUTURE | Pacing control |
| **Email Template Builder** | Visual template editor (drag-drop blocks) | NICE TO HAVE | Non-technical email design; workaround = HTML editor |
| | Mobile-responsive templates | MUST HAVE | Email inbox viewing |
| | Template library (newsletter, announcement, digest) | NICE TO HAVE | Quick creation |
| **Subscriber Segmentation** | Segment by signup date | NICE TO HAVE | Behavioral targeting |
| | Segment by engagement (opens, clicks) | NICE TO HAVE | Re-engagement campaigns |
| | Segment by custom fields / tags | NICE TO HAVE | Personalization |
| **Unsubscribe & Compliance** | One-click unsubscribe | MUST HAVE | GDPR, CAN-SPAM requirement |
| | Bounce handling (auto-remove invalid emails) | NICE TO HAVE | List hygiene |
| | GDPR data export (GDPR right to data portability) | MUST HAVE | Legal compliance |
| | GDPR data deletion (right to be forgotten) | MUST HAVE | Legal compliance |
| | Consent tracking (when opted-in) | NICE TO HAVE | Audit trail |

---

## 7. Membership & Paywalled Content

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **User Registration & Authentication** | Registration form (email + password) | FUTURE | Not immediate for thought leadership site; workaround = no auth |
| | Email verification | FUTURE | Account security |
| | Password reset | FUTURE | Account recovery |
| | Social login (Google, GitHub) | FUTURE | Frictionless signup |
| | SAML/SSO for enterprise | FUTURE | Team access |
| **Role-Based Content Access** | Public content (no auth required) | MUST HAVE | Baseline publishing |
| | Member-only content (auth required) | FUTURE | Gating; plan for later |
| | Subscriber-tier content (free vs. premium) | FUTURE | Monetization |
| | Admin/editor roles (content management access) | NICE TO HAVE | Team permissions |
| **Paywall & Gating** | Free preview (first N paragraphs) + paywall | FUTURE | Monetization strategy; not immediate |
| | "Member-only" badge on content | FUTURE | Clarity |
| | Paywall message (call-to-action) | FUTURE | Conversion |
| **Subscription Management** | Stripe integration (payment processing) | FUTURE | Monetization |
| | Subscription tiers (free, $5/mo, $20/mo) | FUTURE | Pricing strategy |
| | Recurring billing + invoice management | FUTURE | Business operations |
| **Member-Only Areas** | Member dashboard (profile, subscriptions, history) | FUTURE | UX |
| | Download history / archive access | FUTURE | Member value |
| **Content Tiers** | Free tier content | FUTURE | Baseline access |
| | Premium tier content (paywall) | FUTURE | Revenue |
| | VIP tier content (exclusive) | FUTURE | Premium positioning |
| **Passwordless / Magic Link Login** | Email magic link auth (no password) | FUTURE | Frictionless login |
| | Time-limited link expiry | FUTURE | Security |

---

## 8. Analytics & Attribution

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **Page View Tracking** | Auto-track page views (on published content) | MUST HAVE | Baseline analytics |
| | Unique visitor tracking (session, user) | MUST HAVE | Audience size |
| | Time on page / scroll depth | NICE TO HAVE | Engagement measurement; workaround = external analytics |
| **Content Performance Metrics** | Page view count (total, over time) | MUST HAVE | Content success |
| | Bounce rate | NICE TO HAVE | Content relevance |
| | Average time on page | NICE TO HAVE | Engagement |
| | Click-through rate (CTR) to outbound links | NICE TO HAVE | Traffic influence |
| | Conversion rate (form submissions) | NICE TO HAVE | Lead capture success |
| | Top performing content (top 10 by views) | NICE TO HAVE | Editorial insights |
| **Conversion Funnel Tracking** | Form completion rate | NICE TO HAVE | Lead capture funnel |
| | Email signup conversion | NICE TO HAVE | Nurture funnel |
| | Multi-step funnel (awareness → consideration → decision) | NICE TO HAVE | Attribution clarity |
| **UTM Parameter Handling** | Auto-capture utm_source, utm_medium, utm_campaign | MUST HAVE | Campaign attribution |
| | utm_content, utm_term parsing | NICE TO HAVE | Detailed attribution |
| | Campaign report by UTM | NICE TO HAVE | Campaign ROI |
| **Source/Medium Attribution** | Traffic source (organic, direct, referral, paid, social) | MUST HAVE | Channel analysis |
| | Traffic medium (search, email, social, display) | NICE TO HAVE | Channel breakdown |
| | Referrer tracking (which site sent traffic) | NICE TO HAVE | Referral insights |
| **A/B Testing** | A/B test framework (variant tracking) | FUTURE | Optimization; not immediate need; workaround = manual test |
| | Statistically significant winner detection | FUTURE | Test validation |
| | Multi-variant testing (A/B/C/D) | FUTURE | Advanced |
| **Heatmaps** | Click heatmap (where users click) | FUTURE | UX optimization; workaround = external tool (Hotjar) |
| | Scroll heatmap (how far users scroll) | FUTURE | Content engagement |
| | Session replay | FUTURE | User behavior observation |

---

## 9. Social & Distribution

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **Auto-Post to Social Platforms** | Twitter/X auto-publish | NICE TO HAVE | Distribution automation; workaround = manual post or Buffer/Later |
| | LinkedIn auto-publish | NICE TO HAVE | Professional network distribution |
| | Facebook auto-publish | NICE TO HAVE | Social reach |
| | Instagram auto-publish | NICE TO HAVE | Visual content distribution |
| | Schedule posts (queue for later) | NICE TO HAVE | Async distribution |
| | Bulk schedule social variants | FUTURE | Campaign-scale automation |
| **Social Share Buttons** | Share to Twitter | NICE TO HAVE | Reader distribution |
| | Share to LinkedIn | NICE TO HAVE | Professional sharing |
| | Share to Facebook | NICE TO HAVE | Social reach |
| | Share to email | NICE TO HAVE | Email distribution |
| | Copy link to clipboard | MUST HAVE | Basic sharing |
| | Share count display | NICE TO HAVE | Social proof |
| **OG Image Auto-Generation** | Auto-generate og:image from content (title + theme) | NICE TO HAVE | Visual consistency; workaround = manual image per post |
| | Custom OG image upload override | NICE TO HAVE | Full control |
| | OG image templates (dynamic backgrounds) | FUTURE | Scalability |
| **Social Preview in Editor** | Show Twitter card preview | NICE TO HAVE | Pre-publish verification |
| | Show Facebook preview | NICE TO HAVE | Multi-platform check |
| | Show LinkedIn preview | NICE TO HAVE | Multi-platform check |
| **RSS Feed Generation** | Auto-generate RSS feed (full content or excerpt) | MUST HAVE | Syndication, newsletter integration |
| | RSS per category (blog RSS, news RSS) | NICE TO HAVE | Targeted feeds |
| | JSON Feed support | FUTURE | Modern feed format |
| **Content Syndication** | Medium integration (publish to Medium) | FUTURE | Multi-platform publishing |
| | Dev.to integration | FUTURE | Tech audience reach |
| | Substack integration | FUTURE | Newsletter syndication |

---

## 10. Internationalization (i18n)

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **Multi-Language Content** | Translate content to multiple languages | FUTURE | Global audience; plan for Phase 2 |
| | Per-language content management | FUTURE | Separate editorial workflow |
| | Language switcher UI | FUTURE | Navigation |
| **Locale-Specific URLs** | URL structure: /en/blog/post or /blog/post?lang=en | FUTURE | SEO-friendly URLs |
| | URL hreflang linking (see below) | FUTURE | Search engine clarity |
| **hreflang Tags** | Auto-generate hreflang tags (link alternate languages) | FUTURE | Multi-language SEO |
| | Correct hreflang structure (self-reference + alternates) | FUTURE | Search compliance |
| **Translation Workflow** | Assign translation tasks to team members | FUTURE | Operational workflow |
| | Translation memory (reuse translated terms) | FUTURE | Consistency |
| | Translation status tracking (in progress, reviewed, published) | FUTURE | Workflow visibility |
| **RTL Support** | Right-to-left text rendering (Arabic, Hebrew) | FUTURE | Middle East/Israel audience |
| | RTL CSS + layout mirroring | FUTURE | Visual correctness |

---

## 11. API & Integration

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **REST API** | Read published content via REST API | NICE TO HAVE | Headless CMS capability; enables decoupled frontend |
| | List content (with filtering, pagination) | NICE TO HAVE | Content discovery API |
| | Get single content item | NICE TO HAVE | Detail page loading |
| | Filter by category, tags, author | NICE TO HAVE | Faceted search |
| | Search API (full-text search) | NICE TO HAVE | Content discovery |
| **GraphQL API** | GraphQL endpoint for flexible querying | NICE TO HAVE | Developer flexibility; workaround = REST only |
| | Query content with custom field selection | NICE TO HAVE | Efficient data fetching |
| **Webhooks** | Webhook on content create | NICE TO HAVE | Event-driven workflows |
| | Webhook on content update | NICE TO HAVE | Sync to external systems |
| | Webhook on content publish | NICE TO HAVE | Trigger distribution workflows |
| | Webhook on content delete/archive | NICE TO HAVE | Cleanup operations |
| | Webhook signature verification | MUST HAVE | Security (prevent spoofed webhooks) |
| | Retry logic (if webhook fails) | NICE TO HAVE | Reliability |
| **SDK / Client Libraries** | JavaScript/TypeScript SDK | NICE TO HAVE | Easier frontend integration |
| | Python SDK | FUTURE | Backend integration |
| | REST API documentation | MUST HAVE | Developer onboarding |
| **Zapier / Make Integration** | Pre-built Zapier integration | NICE TO HAVE | No-code automation (form → email → CRM) |
| | Make / Integromat integration | NICE TO HAVE | Open automation platform |
| **Custom API Endpoints** | Build custom endpoints (webhooks, exports) | FUTURE | Bespoke integrations |

---

## 12. Developer Experience

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **CLI Tooling** | CLI to create, update, publish content | NICE TO HAVE | Developer-friendly; workaround = web UI |
| | CLI to export all content | NICE TO HAVE | Bulk operations, backup |
| | CLI to preview/draft content locally | NICE TO HAVE | Local development |
| **TypeScript Support** | TypeScript types for content models | NICE TO HAVE | Type safety; workaround = JSDoc types |
| | Auto-generated types from schema | NICE TO HAVE | Keep types in sync |
| **Local Development** | Local content server (for offline work) | NICE TO HAVE | Disconnected development |
| | Local database / mock data | NICE TO HAVE | Testing without live CMS |
| **Preview / Draft Preview** | Preview draft content before publishing | MUST HAVE | Safe publishing |
| | Preview URL (shareable link) | MUST HAVE | Approval workflow |
| | Draft preview API (fetch draft via API) | NICE TO HAVE | Headless preview |
| **Hot Reload in Dev** | Auto-refresh browser on content change | NICE TO HAVE | Developer experience; workaround = manual refresh |
| **Schema-as-Code** | Define content models in code (TypeScript, JSON) | NICE TO HAVE | Version control for schema; workaround = UI-based schema |
| | Schema migrations (add/remove fields) | NICE TO HAVE | Schema evolution |
| **Migration Tooling** | Export content from old CMS | FUTURE | Vendor migration |
| | Bulk import tool | FUTURE | Content migration |
| | Data validation on import | FUTURE | Quality assurance |
| **Plugin / Extension System** | Custom field types (plugin architecture) | FUTURE | Advanced extensibility |
| | Custom middleware (pre-publish hooks) | FUTURE | Custom workflows |

---

## 13. Operations & Security

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **RBAC (Role-Based Access Control)** | Admin role (full access) | MUST HAVE | Access control baseline |
| | Editor role (create, edit, publish content) | MUST HAVE | Collaborative content creation |
| | Reviewer role (approve content, not edit) | NICE TO HAVE | Separation of duties |
| | Viewer role (read-only) | NICE TO HAVE | View-only access |
| | Custom roles (define permissions) | FUTURE | Fine-grained control |
| **SSO (Single Sign-On)** | Google OAuth login | NICE TO HAVE | Frictionless team access; workaround = password login |
| | GitHub OAuth login | NICE TO HAVE | Developer team access |
| | SAML (enterprise SSO) | FUTURE | Enterprise integration |
| | OIDC support | FUTURE | Standards-based auth |
| **Audit Logs** | Track all content changes (who, what, when) | MUST HAVE | Compliance, audit trail |
| | User login audit log | NICE TO HAVE | Security monitoring |
| | Delete/archive audit trail | MUST HAVE | Recovery, compliance |
| | Export audit logs | NICE TO HAVE | External audit |
| **Backup & Export** | Daily automatic backups | MUST HAVE | Data loss prevention |
| | Full content export (JSON, CSV) | MUST HAVE | Data portability |
| | Export to static files (Markdown, HTML) | NICE TO HAVE | Offline archive |
| | Restore from backup (point-in-time recovery) | MUST HAVE | Disaster recovery |
| **Rate Limiting** | API rate limiting (prevent abuse) | NICE TO HAVE | DoS protection |
| | Per-user rate limits | NICE TO HAVE | Fair resource usage |
| **GDPR & Privacy Tools** | Data export (GDPR right to portability) | MUST HAVE | Legal requirement |
| | Data deletion (right to be forgotten) | MUST HAVE | Legal requirement |
| | Consent tracking | NICE TO HAVE | Privacy audits |
| | Privacy policy template | FUTURE | Legal templates |
| **Two-Factor Authentication (2FA)** | TOTP support (Google Authenticator, Authy) | NICE TO HAVE | Account security; workaround = password only |
| | SMS-based 2FA | FUTURE | Alternative 2FA |
| | WebAuthn / passkey support | FUTURE | Passwordless security |

---

## 14. Deployment & Hosting

| Feature | Sub-Feature | Requirement | Notes |
|---------|-------------|-------------|-------|
| **Self-Hosted Option** | Deploy on own infrastructure (Docker, K8s) | FUTURE | Full control; not immediate need |
| | Run on own server (VM, VPS) | FUTURE | Privacy, control |
| | Database choice (PostgreSQL, MySQL, MongoDB) | FUTURE | Flexibility |
| **Cloud/SaaS Option** | Managed SaaS deployment | MUST HAVE | Low operational overhead |
| | Automatic updates | MUST HAVE | Security, maintenance |
| | Automatic backups | MUST HAVE | Data safety |
| | Uptime SLA (99.9% or better) | MUST HAVE | Reliability |
| **Edge Deployment** | Cloudflare Workers integration | NICE TO HAVE | Global CDN + serverless; workaround = standard CDN |
| | Vercel deployment integration | NICE TO HAVE | Jamstack-friendly |
| | Netlify deployment integration | NICE TO HAVE | Static site hosting |
| **Static Site Generation (SSG) Support** | Export to static HTML + CSS + JS | NICE TO HAVE | Deploy anywhere; workaround = dynamic site only |
| | Build trigger on content publish | NICE TO HAVE | Auto-rebuild on updates |
| | Incremental static regeneration (ISR) | NICE TO HAVE | Fast rebuilds for large sites |
| **CDN Integration** | Built-in CDN (Cloudflare, Fastly, etc.) | MUST HAVE | Performance baseline |
| | Cache invalidation on publish | MUST HAVE | Fresh content delivery |
| | Edge caching rules | NICE TO HAVE | Performance tuning |
| **Serverless Compatible** | Deploy as serverless function (AWS Lambda, Google Cloud Functions) | FUTURE | Cost-efficient scaling; not immediate need |
| | Stateless API design | FUTURE | Scalability |

---

## Quick Evaluation Checklist

Use this table to score any CMS vendor:

| Category | Weight | # MUST HAVEs | # Covered | Score |
|----------|--------|--------------|-----------|-------|
| Content Authoring | 15% | 11 | — | — |
| Scheduling & Workflow | 15% | 6 | — | — |
| Media & Assets | 15% | 7 | — | — |
| SEO & Metadata | 20% | 13 | — | — |
| Forms & Lead Capture | 15% | 5 | — | — |
| Email & Newsletter | 10% | 4 | — | — |
| Membership & Paywall | 5% | 0* | — | — |
| Analytics & Attribution | 10% | 3 | — | — |
| Social & Distribution | 10% | 3 | — | — |
| i18n | 5% | 0* | — | — |
| API & Integration | 10% | 3 | — | — |
| Developer Experience | 10% | 2 | — | — |
| Operations & Security | 15% | 5 | — | — |
| Deployment & Hosting | 10% | 4 | — | — |
| **TOTAL** | **150%** | **76** | — | — |

*Marked 0 because these are FUTURE priorities for thought leadership site (not immediate launch need).

**Scoring Rule**:
- **Green (75%+ MUST HAVEs covered)**: Viable for launch
- **Yellow (50–74% MUST HAVEs covered)**: Gaps; need workarounds
- **Red (<50% MUST HAVEs covered)**: Not ready; requires significant custom work

---

## Usage Guide

### For RFP / Vendor Evaluation
1. Make a copy of this matrix
2. For each vendor, check off which features they provide
3. Count MUST HAVEs vs. NICE TO HAVEs
4. Calculate weighted score (use rightmost table)
5. Identify gaps and workarounds

### For Requirements Definition
1. This matrix is the baseline
2. Circle MUST HAVEs specific to your project
3. Prioritize NICE TO HAVEs by business impact
4. Mark FUTURE items for roadmap planning

### For Post-Launch Planning
1. Use NICE TO HAVEs as Phase 2 / Phase 3 features
2. Use FUTURE items as long-term strategy (2–3 year view)
3. Re-evaluate vendor quarterly as needs evolve

---

## Context: Mishal.One + Qrius.Global

This matrix is optimized for:
- **High-volume thought leadership** (10–15 posts/month across two brands)
- **SEO-driven content** (organic search as primary traffic driver)
- **Lead capture** (contact forms, newsletter signup)
- **Multi-platform distribution** (Twitter, LinkedIn, own sites)
- **Solo operator** (Mishal, 4 hrs/week) — needs smart automation, not full automation
- **Audit-ready workflows** (checklist-driven, agent-auditable)
- **No external API integrations** — file system is source of truth

### What This Matrix Does NOT Cover
- Headless CMS only (covers both traditional + headless)
- E-commerce product management
- Video platform / streaming
- Design collaboration tools
- Community / comment management
- Landing page builder
- A/B testing platforms (separate tool)

### Adjacent Tools Not Covered Here
- **Analytics**: PostHog, Plausible, Splitbee (external)
- **Email Service**: Buttondown, ConvertKit, Substack (external)
- **Social Management**: Buffer, Later, Later (external)
- **CRM**: HubSpot, Salesforce (external)
- **Forms**: Typeform, Formspree (external)

This matrix is **CMS-only** to keep scope tight.
