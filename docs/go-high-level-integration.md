# Go High Level (GHL) Integration — mishal.one

## What GHL Replaces

| WordPress plugin | GHL equivalent | Included in $97/mo |
|---|---|---|
| Mailchimp | Email campaigns + sequences | Yes |
| ConvertKit | Drip automation | Yes |
| Gravity Forms | Form builder + submissions | Yes |
| HubSpot CRM | Contact management + pipelines | Yes |
| OptinMonster | Lead capture + popup triggers | Yes |
| Calendly | Appointment scheduling | Yes |
| Twilio | SMS 2-way messaging | Yes (usage-based) |
| Hootsuite | Social planner (limited) | Yes |

**GHL does NOT replace**: Buttondown (newsletter-first RSS-to-email), PostHog (analytics), Buffer (social scheduling polish).

## Pricing

| Plan | Price | Sub-accounts | Best for |
|---|---|---|---|
| Starter | $97/mo | 3 | Solo operators |
| Unlimited | $297/mo | Unlimited | Agencies |
| SaaS Pro | $497/mo | White-label | Reselling |

Additional: Email ~$0.675/1K, SMS ~$0.015/msg. 14-day free trial.

## Integration with Astro (3 options)

### Option A: Inbound Webhook (simplest, no backend)

```
Astro form → POST to GHL webhook URL → auto-creates contact → triggers workflow
```

1. In GHL: Workflows → New → Trigger: "Inbound Webhook" → copy URL
2. In Astro: form submits to that URL via client-side fetch
3. GHL auto-creates contact, tags, enrolls in sequence

### Option B: API Route (recommended for UTM capture)

```typescript
// src/pages/api/lead.ts (requires Astro SSR or Cloudflare Functions)
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const res = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.GHL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      firstName: data.name,
      tags: ['website-lead'],
      customFields: {
        utm_source: data.utm_source,
        utm_campaign: data.utm_campaign,
        lead_source: 'mishal.one',
        page_url: data.page_url,
      },
    }),
  });

  return new Response(JSON.stringify({ ok: res.ok }), { status: res.ok ? 200 : 500 });
};
```

### Option C: GHL Embedded Form

```html
<!-- Paste GHL form embed code directly into Astro page -->
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
<iframe src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
  style="width:100%;height:500px;border:none;"></iframe>
```

## UTM Tracking

**Critical constraint**: UTMs only captured if form is on the **same page** the user landed on.

```javascript
// Capture UTMs from URL and pass to form submission
const params = new URLSearchParams(window.location.search);
const utmData = {
  utm_source: params.get('utm_source'),
  utm_medium: params.get('utm_medium'),
  utm_campaign: params.get('utm_campaign'),
};
```

## Auto-Post to X (Twitter) Flow

```
Write blog post in CMS
  → Publish triggers webhook
  → GHL Workflow receives webhook
  → Action: Custom Webhook → POST to X API (or Buffer API)
  → Tweet posted with title + URL
```

Alternative: Payload `afterChange` hook → direct X API call (no GHL needed for this).

## Recommended Stack with GHL

| Layer | Tool | Cost |
|---|---|---|
| CMS | Payload or Sanity | $0-99/mo |
| CRM + Automation | Go High Level | $97/mo |
| Newsletter | Buttondown (RSS-to-email) | $0-15/mo |
| Analytics | PostHog | $0 |
| Social scheduling | Buffer | $5/mo |
| Hosting | Cloudflare Pages | $0 |
| **Total** | | **$102-216/mo** |

## API Reference

- Auth: Bearer token (`Authorization: Bearer YOUR_TOKEN`)
- Base URL: `https://services.leadconnectorhq.com`
- Key endpoints:
  - `POST /contacts/upsert` — create/update contact
  - `GET /contacts/{id}` — get contact
  - `POST /contacts/{id}/tags` — add tags
  - Webhooks: inbound URL per workflow
- Docs: https://marketplace.gohighlevel.com/docs/
