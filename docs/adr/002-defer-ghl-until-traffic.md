# ADR-002: Defer Go High Level Until 10K Weekly Visitors

**Status**: Accepted
**Date**: 2026-04-10
**Decision maker**: Mishal
**Backlog items**: BL-007 (deferred), BL-009 (deferred)

## Context

Go High Level (GHL) is an all-in-one CRM + marketing automation platform at $97/mo. It replaces Mailchimp, Gravity Forms, Calendly, and basic CRM. The site currently has zero traffic and no monetisation path.

## Decision

**Defer GHL setup until mishal.one reaches 10K weekly visitors consistently.**

## Rationale

1. **$97/mo is premature** — At zero traffic, CRM automation has nothing to automate. $1,164/yr with no ROI.
2. **Buttondown covers newsletter** — Free tier handles email capture + RSS-to-email. Sufficient for traffic-building phase.
3. **PostHog covers analytics** — Free tier provides UTM tracking, funnel analysis, content attribution. No need for GHL analytics.
4. **Lead capture without GHL** — Simple Buttondown signup form captures email subscribers. That's the only lead capture needed at this stage.
5. **Focus** — Every dollar and hour should go toward content creation (the traffic driver), not CRM configuration.

## Consequences

### What we lose (temporarily)
- Multi-step forms with conditional logic
- SMS marketing
- Sales pipeline management
- Appointment scheduling
- Email drip sequences beyond Buttondown's auto-responder

### What we keep
- Email subscriber capture (Buttondown)
- RSS-to-email newsletter (Buttondown)
- Content analytics + UTM tracking (PostHog)
- Social sharing (manual or Buffer $5/mo)

## Review Trigger

Add GHL when PostHog shows **4 consecutive weeks at 10K+ weekly visitors**.

## References

- `docs/go-high-level-integration.md` — Full GHL integration plan (ready to execute when triggered)
