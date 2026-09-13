# VYVE Wellness - HBOT Recovery Kickstart

Everything for the hyperbaric oxygen (HBOT) Recovery Kickstart funnel: the landing
pages, the lead / checkout / confirmation steps, and the follow-up messaging that
runs behind them.

## What is in here

```
pages/    7 self-contained HTML files, ready to paste into GoHighLevel
docs/     Strategy, messaging and follow-up sequence documents (.md and .docx)
```

## The funnel

Four avatar-specific landing pages feed one shared lead / checkout / confirmation
path. Distinct ads point at distinct landing pages; everything below the hero is
shared, so there is one funnel to maintain, not four.

| Step | File | Suggested URL |
|---|---|---|
| 1a | `pages/01-landing-ortho-surgery-recovery.html` | `/hbot-surgery-recovery` |
| 1b | `pages/01-landing-cosmetic-surgery-recovery.html` | `/hbot-cosmetic-recovery` |
| 1c | `pages/01-landing-athletes-injury-recovery.html` | `/hbot-injury-recovery` |
| 1d | `pages/01-landing-neuro-recovery.html` | `/hbot-neuro-recovery` |
| 2 | `pages/02-lead-capture.html` | Lead capture (step 1 of 2) |
| 3 | `pages/03-checkout.html` | Checkout (step 2 of 2) + order bump |
| 4 | `pages/04-confirmation.html` | Confirmation |

Steps 2, 3 and 4 are shared by all four landing pages.

### The four positions

| Page | Who it speaks to |
|---|---|
| Ortho surgery recovery | Post-orthopedic-surgery: faster recovery, less time in PT |
| Cosmetic surgery recovery | Post-cosmetic-surgery: speed of recovery, less downtime |
| Athletes / injury | Active people recovering from an injury |
| Neuro recovery | Post-stroke and post-concussion recovery |

Each page has its own hero photo, headline, four-card benefit block, qualifier line
and one avatar-specific FAQ. Below that, every page runs the same body: mechanism,
comparison, physician-led (Dr. Haas), expectation-setter, offer, honest fit filter,
testimonials, FAQ, three-step next steps, final CTA, footer.

## The offer

$147 Recovery Kickstart - a 60-minute chamber session, a one-on-one physician
consultation and a written recovery baseline. Positioned as step one of a course,
not a one-and-done session.

Order bump at checkout: a $25 Red Light Recovery session (normally $40), available
only before the first visit.

## Documents

| File | What it covers |
|---|---|
| `docs/build-and-wiring.md` | How to paste each page into GHL and wire the funnel |
| `docs/funnel-strategy.md` | Full funnel strategy: offer, pricing, bump, guarantee, page-by-page structure |
| `docs/nurture-sequences.md` | The three follow-up sequences (SMS + email), tags, timing, merge tokens |
| `docs/messaging-brief.md` | Positioning, mechanism, headline options, benefit order, compliance guardrails |

The same three strategy documents are also included as `.docx` for easier reading
and sharing.

## Follow-up at a glance

Three sequences run behind the funnel, driven by tags:

1. **Lead to Purchase** - 3 SMS + 4 email over 10 days, for people who opt in but do not buy.
2. **Purchased to Scheduled** - 3 SMS + 2 email over 5 days, until the first visit is booked.
3. **Scheduled to Showed** - 3 SMS + 1 email, plus a no-show branch.

Full copy, timing and build spec are in `docs/nurture-sequences.md`.

## A note on the copy

All page copy is written to stay in recovery and support language. HBOT devices
are cleared for a specific list of medical conditions, and none of these four
audiences fall on that list, so the pages avoid treat / cure / heal claims and do
not use "FDA-cleared" anywhere on-page. Please keep any edits inside the same
guardrails - they are set out in `docs/messaging-brief.md`.
