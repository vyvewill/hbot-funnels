# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People in and around Charlotte, NC recovering from something specific, who want to support that recovery rather than wait it out. Four confirmed avatars, each with its own landing page and ad traffic:

- **Cosmetic surgery recovery.** Men and women who have just had, or have scheduled, a cosmetic procedure (facelift, tummy tuck, liposuction, breast augmentation or lift, rhinoplasty, BBL, mommy makeover). They paid for a result and want to see it sooner, recover with as little visible downtime as possible, and get back to normal life without anyone knowing they had work done. Pre-op visitors are in scope: some patients start sessions before their procedure (confirmed by Dr. Haas).
- **Orthopedic surgery recovery.** Post knee, hip, shoulder or spine procedure; want faster recovery and less time in physical therapy.
- **Athletes and injury recovery.** Active people recovering from an injury.
- **Neuro recovery.** Post-stroke and post-concussion; typically also under a neurologist's care.

The job in every case: book a first visit, then follow a short course of sessions timed to the recovery window.

## Product Purpose

VYVE Wellness offers physician-led hyperbaric oxygen therapy (HBOT). The funnel sells the **Recovery Kickstart**: a $147 first visit that includes a physician consultation, a health screening, a recovery baseline, a 60-minute chamber session, and a written plan for how many sessions, how often, and why. Success is a booked and attended first visit that converts into a course of sessions.

The Kickstart is positioned as step one of a plan, not a one-and-done session. Hyperbaric oxygen compounds over weeks; session one is what it feels like, a course is where it goes.

## Positioning

Anyone in Charlotte can sell chamber time out of a gym or recovery bar. Four things VYVE has that a session rental can't copy:

- **A physician on site.** Dr. Will Haas, MD, founder. Castle Connolly Top Doctor 2025.
- **The consultation is included** in the $147, not sold as an upsell.
- **A plan on paper.** The patient leaves with a written, personalised hyperbaric plan and a measured baseline.
- **Screening before every session.** HBOT has real contraindications; checking is framed as part of the service, not fine print.

The line: anyone can sell you a session, nobody else builds you a plan. For surgical avatars, the plan is built around the surgeon's aftercare timeline, never around it.

## Operating Context

- Pages are built as self-contained HTML blocks pasted into GoHighLevel (GHL) Custom HTML elements. GHL supplies the document shell, forms, order form, and the page's site-wide GTM container. See `docs/build-and-wiring.md`.
- The funnel is four landing pages feeding one shared lead capture, checkout (with a $25 Red Light Recovery order bump, normally $40) and confirmation page.
- Chamber slots are booked manually by staff to avoid double-booking. After purchase, a real person texts within business hours to lock in a time. There is no calendar embed.
- Three tag-driven follow-up sequences run behind the funnel (Lead to Purchase, Purchased to Scheduled, Scheduled to Showed), in `docs/nurture-sequences.md`. Lead-capture answers are played back inside SMS copy.
- Clinic: 497 N Wendover Rd, Charlotte, NC 28211. Phone 704-385-5113. Weekdays 9am to 5pm.
- Local preview: `node dev/serve.js` wraps the pages in the GHL shell for browser and mobile checks.

## Capabilities and Constraints

- **Compliance ceiling (binding, from `docs/messaging-brief.md`).** Never cure, treat, heal, reverse or fix; always support, recovery, and how you feel. "FDA-cleared" describes the chamber, never a benefit, and does not appear on-page. No diagnostic framing in Meta ads. Every page carries: "Individual results vary. This is a wellness service and is not a substitute for medical care." Testimonials describe experience, never a named condition being resolved; the existing Lyme review cannot run in any form.
- **Risk reversal.** The Worth-It Guarantee: finish the session, and if you don't think it was worth $147, say so at the front desk before leaving and it is refunded on the spot. Approved in `docs/funnel-strategy.md`; the clinic already honours the same mechanic on another offer. No outcome guarantee is possible or allowed.
- **Scarcity.** Real capacity only: about 5 first-visit slots per week (confirmed). No countdowns or decrementing widgets.
- **Pricing.** $147 first visit. Value anchor $225, the honest sum of the two priced line items ($75 baseline + $150 written plan). Cash-pay; insurance does not cover it.
- **Session facts.** About 60 minutes in a clear chamber; the client can see out the whole time and staff are outside throughout. Block about 90 minutes for the whole first visit. Sessions typically run two to three a week over several weeks.
- **Booking follow-through.** Because booking is manual, every page and sequence must reinforce the "we text you to lock in your time" promise.
- **Terminology.** "Recovery Kickstart" is the internal offer name; readers don't know it, so pages should say what it is before using it. "HRV baseline" is the measured starting point; for surgical avatars call it a recovery baseline.
- **Undecided.** Whether the four landing pages should be generated from one template (they currently differ by about 40 lines and every shared fix is applied four times).

## Brand Commitments

- Name: VYVE Wellness. Logo is embedded in the pages as a data URI.
- Voice (from the existing pages and docs): plain, direct, physician-led, honest about limits. Says "we'll tell you plainly," names who it is not for, and avoids miracle language.
- Existing visual system in the pages: pink to violet to blue gradient accent, near-white ground, Poppins for headings, Figtree for body, Playfair Display italic for pull lines, everything namespaced under `#vy`. Treat as the incumbent system.

## Evidence on Hand

- **Castle Connolly Top Doctor 2025** for Dr. Haas: confirmed, citable by name and year.
- **150+ five-star reviews:** confirmed against a public profile.
- **Voted #1 Wellness Center in Charlotte:** confirmed; the pages should name the publication and year when it appears (still to be added to copy).
- **Cosmetic-recovery testimonials exist** and a release can be obtained; not yet on the pages. Until they are, the only on-topic review is Kat's (surgery, January 2024, wounds healed faster than her doctor had seen).
- Photography embedded in the pages: four hero photos (one per avatar), a real chamber session at VYVE Charlotte, the clinical team with Dr. Haas, and two clinicians at the chamber. Page weight is about 1 MB each because of this; hosted media is an open item.
- Strategy documents in `docs/`: funnel strategy, messaging brief, nurture sequences, build and wiring, and a CRO audit of the cosmetic page.
- Absent, do not fabricate: surgeon endorsements, clinical outcome statistics, before/after imagery, and any testimonial naming a diagnosis.

## Product Principles

1. Sell the plan, not the chamber. The physician, the screening and the written plan are the product; the session is the delivery.
2. One avatar per page. The hero, the benefits, the proof and the FAQ speak to one recovery, and shared sections must still read as if written for that reader.
3. Honesty is the conversion strategy. Say who it is not for, guarantee the experience rather than the outcome, and use only real capacity as scarcity.
4. The surgeon stays in charge. For surgical avatars, every claim is framed as supporting the existing aftercare plan.
5. Stay inside the compliance ceiling on the first draft, so copy is written once.

## Accessibility & Inclusion

Ad traffic is largely mobile; every page must render cleanly at 360 to 430px. Reduced-motion preferences are respected by the existing pages and must stay respected. No further product-specific requirement established.
