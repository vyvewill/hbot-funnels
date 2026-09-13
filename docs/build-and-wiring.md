# Build and wiring notes

Seven pages, light theme, in funnel order. Each file is **one self-contained block**:
the font import, all CSS, the markup and the JavaScript are in the single file.
Nothing external needs to be hosted.

## How to paste each one

1. Create a new **blank** funnel step. Remove the default section padding.
2. Add ONE full-width **Custom HTML / Code** element.
3. Paste the entire file contents into it. Do not add a GHL header or footer - the
   landing pages carry their own fixed nav, and all seven carry their own footer.
4. Set the page background to `#fbfbfe` so there is no white flash before the CSS paints.

Everything is namespaced under `#vy`, so GHL builder styles cannot collide with the
page and the page cannot leak into anything else on the funnel.

## Wiring, in order

### Landing pages (all four)

Point every `href="#claim"` at the step 2 (lead capture) URL. There are **6 per page**:
nav CTA, hero, offer card, capacity block, final CTA, and the sticky mobile bar.

All four landing pages point at the **same** step 2. The lead, checkout and
confirmation steps are shared across avatars.

### Page 2 - lead capture

Replace the mock `<form>` with the GHL form or survey embed.

**Important:** set each goal option's stored **Value** to the value in the right-hand
column below, not the button label. The follow-up SMS plays this value back inside a
sentence, and the labels read as ungrammatical mid-sentence.

| Button label | Stored value |
|---|---|
| My energy | `your energy` |
| Clear thinking | `the brain fog` |
| Faster recovery | `your recovery` |
| Fewer aches | `the aches` |
| A few of these | `those things` |

### Page 3 - checkout

Replace everything between `<!-- EMBED-START -->` and `<!-- EMBED-END -->` with the
GHL two-step order form. Configure the built-in bump on the payment step:

> **Add a Red Light Recovery Session - $25**
> While you're here, adding a revitalizing red-light session is the easiest and most
> powerful thing to combine with hyperbaric oxygen to kickstart your recovery. It's
> 1+1=3. Ten minutes under the panel, right after your hyperbaric session. Normally $40.
> Only available before your first visit.

When the bump is purchased, add the red light session to the first-visit booking.

### Page 4 - confirmation

- Fire the purchase / conversion pixel (Meta + Hyros).
- **No calendar embed.** Chamber slots are managed manually to avoid double-booking,
  so the page promises a staff text within business hours and gives the call / text
  number. Because booking stays manual, the post-purchase workflow must reliably fire
  the outbound "lock your time" text, and sequence 2 (Purchased to Scheduled) chases
  anyone still unscheduled.
- Embed the prep-guide video (Dr. Haas walkthrough) in the `VIDEO-START` slot. Re-watch
  it first: if it says "30 minutes" or mentions a free red light bonus, it contradicts
  the current offer.

## Analytics

The pages do not load gtag.js and do not carry a Measurement ID. GTM goes in
site-wide through the GHL funnel settings instead, and the pages push namespaced
events to `window.dataLayer`:

| Event | Fires on |
|---|---|
| `hbot_page_view` | Page load, with an `avatar` parameter identifying which landing page |
| `hbot_scroll_depth` | 25% / 50% / 75% / 100% scroll |
| `hbot_cta_click` | Every CTA button |

In the GTM container, add a GA4 Configuration tag (or reuse the existing site-wide
one) plus three event triggers to pick these up.

## Images

All photography is embedded directly in the HTML as data URIs, so the pages work as
pasted with no media uploads required. Find the slots by `data-slot`:

| `data-slot` | What is in it |
|---|---|
| `avatar` | The hero photo, different on each of the four landing pages |
| `doctor` | Dr. Haas with the clinical team |
| `chamber` | A client mid-session in the chamber |
| `consult` | Two clinicians at the chamber |

**Page weight:** embedding the photos puts each landing page at roughly 1 to 1.15 MB.
That is fine for review and for the GHL Custom HTML element, but for production it is
worth uploading the four hero photos and the three shared photos to GHL media and
swapping the data URIs for hosted URLs. That cuts each page back to roughly 100 KB.

## Open items before launch

- [ ] Swap the embedded data URIs for hosted GHL media URLs (see page weight, above).
- [ ] Build the GA4 configuration tag and three event triggers in GTM.
- [ ] Confirm the three avatar-specific FAQ answers with Dr. Haas - post-surgery start
      timing, training during a course of sessions, and coordination with a neurologist.
      The current answers are reasonable and compliant, but they are placeholders until
      he signs off.
- [ ] Confirm written releases are on file for the three published testimonials.
- [ ] Remove the free red light promise from the old funnel before this one goes live.
      It is currently promised in four places, and selling the red light session as a
      bump while ads still promise it free will cause chargebacks.
- [ ] Confirm the phone number. The pages use 704-385-5113 throughout.
- [ ] Optional: the pages show $225 as the anchor. A roughly $25 bonus would restore a
      $250 anchor if that is preferred.
