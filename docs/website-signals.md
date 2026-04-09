# Website Signals Framework — mishal.one

Based on David C. Baker's 13 signals. These are **business communication goals**, not design specs.

## The 13 Signals (mapped to implementation)

| # | Signal | What it communicates | Implementation |
|---|---|---|---|
| 1 | **Insights** | You have a POV. Your firm runs well enough to produce thought leadership. | `/blog` — essays with real opinions, not corporate fluff. Content pipeline already built. |
| 2 | **Good Imagery** | You care about visual quality. Not clip art, not stock. | Brand palette applied. Profile photo. Future: custom OG images, blog hero shots. |
| 3 | **Primary CTA = Insight Emails** | "Give me your time, you'll want more." Not "Contact Us". | Newsletter signup as primary CTA. Buttondown integration. Email list > contact form. |
| 4 | **Speaking Page** | In demand. Groups seek you out. | Future page: `/speaking` — topics, bio, usable portraits, past appearances. |
| 5 | **City/State/Country** | You're real. Prospects pin you on a map. | Footer or about: "Based in Australia" — specific city when comfortable. |
| 6 | **Staff Photos** | Real humans. Relatable. | Profile photo on landing page (done). Future: about page with proper headshot. |
| 7 | **People-Only Photos** | Professional, not gimmicky. | No pets, no memes, no cartoon avatars. Real photo only. |
| 8 | **Tight Focus** | You know who you are. Not a fit for everybody. | Site copy: "Builder. Thinker. Operator." — clear positioning, not "full-stack everything". |
| 9 | **ICP Description** | "This is who we work with and how." | About page or services: describe ideal client, minimum engagement, how you start. |
| 10 | **Diagnostic / Roadmap** | You've done this a lot. You lead the relationship. | Future: intake process description, "how I work" section, scoping approach. |
| 11 | **Award NOT-Winning** | Don't mention awards. Let quality speak. | No awards section. No badges. No "certified" badges. |
| 12 | **Real Testimonials** | Named humans at real companies. | Future: 2-3 real quotes with full name + company. Not "Tim C. at a tech firm". |
| 13 | **Productization** | Expert packaging. Easy to buy. | Future: clear service offerings with scope + rough pricing. "Start with X". |

## Priority Implementation

### Now (Level 1 — Personal site)
- [x] Signal 1: Blog/insights section (done — `/blog` with content collection)
- [x] Signal 2: Brand imagery (done — palette, fonts, profile photo)
- [x] Signal 3: Newsletter CTA (Buttondown integration planned)
- [x] Signal 5: Location — add "Australia" to footer/about
- [x] Signal 6: Profile photo (done — landing page)
- [x] Signal 8: Tight focus — tagline set ("Builder. Thinker. Operator.")
- [x] Signal 11: No awards — nothing to remove

### Next (Level 2 — Positioning)
- [ ] Signal 4: Speaking page with topics + bio
- [ ] Signal 9: ICP description ("Who I work with")
- [ ] Signal 10: How I work / intake process
- [ ] Signal 12: 2-3 real testimonials
- [ ] Signal 13: Productized offerings

### Later (Level 3 — Scale)
- [ ] Signal 7: Professional headshot (speaker/podcast quality)
- [ ] Custom OG image generation per blog post
- [ ] Video content (talks, podcast clips)

## What This Means for the CMS

The CMS needs to support:
1. **Blog with scheduling** — Signal 1 (insights at regular cadence)
2. **Newsletter capture** — Signal 3 (primary CTA, not "contact us")
3. **Media management** — Signal 2 (hero images, OG images, portraits)
4. **Custom pages** — Signals 4, 9, 10 (speaking, ICP, how-I-work)
5. **Testimonials collection** — Signal 12 (structured data: quote, name, company, photo)
6. **Services/products collection** — Signal 13 (productized offerings)

This maps directly to Payload CMS collections:
- `posts` (blog/insights)
- `pages` (speaking, about, how-I-work)
- `testimonials` (quote + attribution)
- `services` (productized offerings)
- `media` (images with optimization)
