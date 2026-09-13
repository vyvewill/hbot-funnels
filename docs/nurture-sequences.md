# VYVE HBOT - Recovery Kickstart Follow-Up System

**Prepared August 22, 2026 · Guidepost**

This document covers everything behind the new Recovery Kickstart funnel except the page copy itself - the four pages are shared as live links so you can review them exactly as a visitor sees them. Here you will find the tagging system, the three automation workflows, all 16 nurture messages word for word, the build spec, and the three inputs we still need from the clinic.

The system runs on the same conventions as the live Emerald Drop-A-Size funnel, so both funnels operate and report identically.

---

## 1. At a glance

A visitor lands from Meta ads, leaves contact details on the lead step, pays $147 on the checkout, then books with a human. Every gap between those steps has a sequence whose only job is closing it.

| | |
|---|---|
| Funnel pages | 4, live in GoHighLevel (links shared separately) |
| Workflows | 3, one per gap |
| SMS | 9, plus a no-show branch |
| Emails | 7 |
| Offer | $147 (anchor $225) |
| Order bump | Red Light Recovery Session, $25 (decided Aug 22) |
| Booking | Manual by design - staff-managed chamber slots, no self-serve calendar |

**Why the sequences matter:** the old funnel had 94 purchases in 90 days but only 26 people ever reached the confirmation page, and show-tracking recorded 6 enrolments against 115 bookings. With booking staying manual, Sequence 2 plus the speed-to-lead call task are the entire scheduling mechanism.

---

## 2. Tags: the state machine

One contact carries exactly one state at any moment. Each workflow entry adds its tag and removes the previous one, so counting contacts per tag IS the funnel report.

```
hbot-kickstart-lead  >  -purchased  >  -scheduled  >  -showed
```

Terminal states: `hbot-kickstart-lead-cold` (14 silent days) and `hbot-kickstart-noshow` (missed appointment, re-enters on rebooking).

Lead-to-purchased is the page conversion, purchased-to-scheduled is Sequence 2's score, and scheduled-to-showed is the show rate that has never been measurable before. The old `hbot trial purchased` and `hbot purchased` tags get consolidated into `hbot-kickstart-purchased`.

---

## 3. The three workflows

Exits are wired first, messages second - the fastest way to spam someone is a missing exit condition.

| Workflow | Entry trigger | Exit conditions |
|---|---|---|
| hbot-kickstart-lead-nurture | Lead form submitted + 5-min wait + no purchase | Purchase · STOP · 14 days |
| hbot-kickstart-get-scheduled | Payment received | Appointment created · 5 business days, then call task |
| hbot-kickstart-show-sequence | Appointment created | Completed · cancelled (restarts on rebooking) |

**Operating rules, applied to every workflow:**

- **Any inbound reply pauses the sequence** and notifies the assigned user. The automations start conversations; humans finish them. No robot ever answers a person.
- **SMS send window: 9am-7pm ET.** Automated texts only go out inside this window - anything due outside it is held and delivered at 9am. Nudges send on business days; purchase and booking confirmations are the exception and send anytime.
- **Hours branch** on the first lead SMS and the purchase SMS: staffed copy Mon-Fri 9-5 ET, after-hours copy otherwise, evaluated at send time.
- **Speed-to-lead task** fires on every purchase: staff calls within 2 business hours. The automation is the net, not the substitute.

---

## 4. Sequence 1 - Lead to Purchase

**"The Almost" · 3 SMS · 4 emails · 10 days**

Trigger: lead form submitted, no purchase after 5 minutes. Exit: purchase, STOP, or 14 days (tagged lead-cold). Judge the first SMS by reply rate plus purchase within 48 hours, not clicks.

### SMS 1 - 10 minutes after the lead

**Staffed hours (Mon-Fri 9-5 ET):**

```
Hi {{contact.first_name}}, it's {{assigned_user}} at VYVE. Quick question - did life get in the way, or did you decide against the Recovery Kickstart? Fine either way. Reply STOP to opt out
```

**After hours:**

```
Hi {{contact.first_name}}, it's the VYVE after-hours team. Quick question - did life get in the way, or did you decide against the Recovery Kickstart? Reply anytime, you're first up when we open. Reply STOP to opt out
```

*Why: "did you decide against it" invites a no, and no is the answer people feel safe giving. "No, I just got busy" is the lead talking themselves back in. After-hours messages sign as the team, never a named person - a first name on a 9pm text claims someone is live on the line.*

### Email 1 - 45 minutes after the lead

```
Subject: you were about 60 seconds from done
Preview: Your spot is still held. Here is where you stopped.

Hi {{contact.first_name}},

You started claiming one of this week's Recovery Kickstart sessions and stopped at the last step. Usually that is a kid, a meeting, or a phone call, so here is exactly where you left off.

The Recovery Kickstart - $147
- A full 60-minute hyperbaric oxygen session. The real session, not a consultation.
- One-on-one with a board-certified clinician
- Your HRV Recovery Assessment, on paper, yours to keep
- Your Personalized Hyperbaric Plan

And the part people do not believe until they see it written down: finish your session, and if you do not think it was worth $147, tell the front desk before you leave and we refund it. No form. No argument.

Would it help to see exactly what a first visit looks like, start to finish? It is all here: {LANDING PAGE LINK}

Or pick it back up where you stopped: {CHECKOUT LINK}

- The VYVE team, Charlotte
{{location.number}} - weekdays 9-5
```

### Email 2 - Day 2, morning

```
Subject: why you cannot feel a supplement working
Preview: And what it feels like when something actually does.

{{contact.first_name}},

Most people who end up in our chamber tried the cabinet first. The B12. The adaptogens. The greens powder that tasted like a lawn.

Here is the honest problem with all of it: you cannot feel any of it working. So you take it for three weeks, notice nothing, and quietly stop. Then you assume the problem is you.

The reason we start everyone with a single session and a baseline number is that it removes the guessing. You sit down with a clinician, you get an HRV reading on paper, you do sixty minutes in the chamber, and then you have something to compare against.

You do not have to believe anything in advance. You just have to have one data point.

That is what $147 buys: {CHECKOUT LINK}

- VYVE Wellness, Charlotte
```

### SMS 2 - Day 3, early afternoon

```
Just out of curiosity {{contact.first_name}} - still want {GOAL} back this year? First session is $147 and refunded if you don't think it was worth it. Want me to check this week's openings?
```

*The lead's own form answer is played back mid-sentence, which is why the goal field must store an SMS-ready phrase and not the button label (see section 8). "Want me to check" asks permission to serve, not permission to sell.*

### Email 3 - Day 5

```
Subject: "I assumed it was a gimmick"
Preview: Fair. Here is the part that is checkable.

It probably sounds like too much. A chamber that makes you feel better by changing air pressure does sound like a wellness gimmick. Most people start there and we would rather you say it out loud than think it quietly.

So here is what you can actually check before you spend anything.

The mechanism is basic physics. Under pressure, gas dissolves into liquid. More oxygen in your plasma means oxygen reaches tissue your circulation struggles to serve. That is not a marketing claim, it is Henry's Law.

Hospitals have used it for decades. Not as a wellness trend, as standard care for wounds that will not heal.

A physician runs this clinic. Dr. Will Haas sees the plan before you start it, and will tell you if this is not the right thing for you.

And you are not asked to take any of it on faith. One session, $147, refunded on the spot if you finish it and disagree.

Compare that to the cabinet you have already paid for.

If it is still a no, that is genuinely fine. Just make it a no based on the checkable parts: {LANDING PAGE LINK}

- VYVE Wellness, Charlotte
```

### SMS 3 - Day 8, the last text

```
Have you given up on getting {GOAL} sorted this year, {{contact.first_name}}? If not, I'm at {{location_number}} whenever you're ready. Last text either way. - {{assigned_user}}
```

*"Have you given up" begs a no, and "no, I haven't" is the lead recommitting to the goal in their own words. It also closes the loop honestly: last text, stated plainly.*

### Email 4 - Day 10, the breakup

```
Subject: closing your file
Preview: One last thing, then we will stop.

{{contact.first_name}},

This is the last email in your file, so I will be quick.

The thing about running at 70% is that it is survivable. That is exactly what makes it dangerous. Nothing forces the issue. You just get a little more used to it every year, and the version of you that had energy gets a little further away.

Nobody is coming to make you deal with this. It is genuinely fine if the answer is not now.

But if it is a yes: one session, $147, sixty minutes, and you walk out with a number instead of a theory. If you finish it and think it was not worth it, we hand the money back before you reach the car.

{CHECKOUT LINK} - or call or text {{location.number}} and a human will handle all of it.

Either way, we will stop emailing. Deal?

- The VYVE team, Charlotte

P.S. The consultation is with a physician-led team, not a salesperson. If hyperbaric is the wrong answer for you, you will be told that, and you will still get your $147 back.
```

---

## 5. Sequence 2 - Purchased to Scheduled

**"Paid and parked" · 3 SMS · 2 emails · 5 days**

Trigger: purchase confirmed, no appointment booked. Exit: appointment created, or 5 business days then a front-desk call task. On trigger, an internal staff task also fires: call within 2 business hours.

**This sequence is the scheduling mechanism, not a safety net.** With no self-serve calendar (chamber slots are staff-managed to prevent double-booking), this sequence and the 2-hour call task are what close the old funnel's purchase-to-appointment leak.

### SMS 1 - immediately on purchase

**Staffed hours:**

```
You're in, {{contact.first_name}} - Recovery Kickstart paid. Reply with 2 or 3 windows that work this week and I'll lock your time. - {{assigned_user}} at VYVE
```

**After hours:**

```
You're in, {{contact.first_name}} - Recovery Kickstart paid. Reply 2 or 3 windows that work this week and we'll lock your time first thing when we open. - VYVE after-hours team
```

*Same ask either way: capture the buyer's schedule windows the minute they pay, at peak commitment. Confirmations are exempt from the send window, so trigger time is send time.*

### Email 1 - immediately on purchase

```
Subject: You're in. Here is what happens next.
Preview: Paid in full - nothing more due at your visit

{{contact.first_name}} - your Recovery Kickstart is confirmed. Three things worth knowing.

1. $147 covered everything. Nothing more is due when you arrive.

2. Your first visit runs about 90 minutes. Consultation, HRV baseline, sixty minutes in the chamber, then your plan. Most people go straight back to work afterwards.

3. A real person from our Charlotte clinic will text you within a few business hours to lock your exact time. Don't feel like waiting? Call or text {{location.number}}, weekdays 9-5, and we will book you on the spot.

One thing that genuinely helps: drink water the day before and the day of. Hydration is how your body moves oxygen around once it is in there.

See you soon,
- The VYVE team, Charlotte
```

### SMS 2 - 1 business day later, if still unscheduled

```
Hi {{contact.first_name}} - your session's paid but not booked yet. What does Thursday or Friday look like? Reply a rough time and I'll handle the rest. - {{assigned_user}}
```

*Swap in the actual next two open days. A specific door beats an open field.*

### SMS 3 - 3 business days later, if still unscheduled

```
{{contact.first_name}}, would you be opposed to getting your session on the calendar this week? Schedule resets Monday. Reply a window or call {{location_number}}, takes 2 min. - {{assigned_user}}
```

*"Would you be opposed" is the no-pressure ask that invites a safe "no, not opposed." The Monday reset is real scarcity stated as calendar fact.*

### Email 2 - 4 business days later, if still unscheduled

```
Subject: your session is paid for, it just needs a date
Preview: Two minutes and you are booked.

{{contact.first_name}},

You have already done the hard part. The session is bought and the money is spent, and right now it is sitting on a shelf.

So instead of nudging you again, the more useful question: what is actually in the way of picking a time?

If it is the schedule, reply with what does not work and we will find the gap. If it is second thoughts, say that, and we will talk it through like adults - the refund exists precisely so you do not have to be certain yet. If it is just life being loud, reply "next week" and I will check back then instead.

Or skip all of it: {{location.number}}. Two minutes, done.

- The VYVE team, Charlotte
```

**Day 5:** automation ends, the front desk gets a personal-call task with full context. Someone who paid and will not book is a phone call, not a fifth text.

---

## 6. Sequence 3 - Scheduled to Showed

**"The show sequence" · 3 SMS · 1 email · no-show branch**

Trigger: appointment created. Exit: completed or cancelled (restarts on rebooking).

### SMS 1 - immediately on booking

```
Locked in, {{contact.first_name}}: {{appointment.start_time}} at VYVE, {{location_address}}. Block about 90 min for the full first visit. Questions? Just reply here. - {{assigned_user}}
```

*No confirm/reschedule ask here - they booked seconds ago, and offering an exit at peak commitment plants the wrong seed. The confirm ask lives at 24 hours, where it belongs.*

### Email 1 - immediately on booking

```
Subject: You are set - how to get the most out of it
Preview: {{appointment.start_time}} - about 90 minutes - here is your prep

{{contact.first_name}} - you are on the calendar: {{appointment.start_time}}, VYVE Wellness, {{location_address}}.

Five things that make a real difference:

Hydrate the day before and the day of. If you do one thing on this list, this is it.

Skip caffeine and alcohol that day. Both work against what the session is doing.

No heavy meal within two hours. Light is fine, full is uncomfortable.

Wear loose cotton. No synthetics in the chamber.

Arrive 15 minutes early and bring something to read. Your consultation and HRV baseline start on time so the whole visit fits.

Finding us is the only fiddly part, so here is a 20-second video of exactly how to reach our door: {DIRECTIONS VIDEO URL}

And if you are quietly wondering about the chamber being enclosed - most people do, very few say it. It is clear, you can see out the whole time, [you can talk to us throughout,] and we can stop at any point. Say the word when you arrive and we will walk you through it before anything starts.

Need to move it? Reply here or call {{location.number}}. Rescheduling beats no-showing every time.

- The VYVE team, Charlotte
```

**Flagged for clinic confirmation:** the bracketed line above. Does the patient wear a mask? Is there an intercom? This claim was removed from all funnel pages pending the answer; one confirmation settles whether the line stays, changes, or goes.

### SMS 2 - 24 hours before

```
Tomorrow, {{contact.first_name}}: {{appointment.start_time}} at VYVE. Best thing you can do today for tomorrow? Water, lots of it. Reply C to confirm, R to move it.
```

*People who confirm in their own keystrokes show up at meaningfully higher rates. Skipped automatically when booking-to-appointment is under 24 hours.*

### SMS 3 - morning of, 3 hours before

```
Today's the day - {{appointment.start_time}}, {{location_address}}. Loose cotton, arrive 15 min early, skip the coffee. How to find us: {DIRECTIONS VIDEO URL} - {{assigned_user}}
```

*The directions video lands at the exact moment it is needed: in the car, wondering which entrance. A found door is a kept appointment.*

### No-show branch - 1 hour after a missed appointment

```
Seems like today got away from you, {{contact.first_name}} - happens. Your Kickstart is still paid and still stands. Reply 2 or 3 new windows or call {{location_number}}. - {{assigned_user}}
```

*One warm text, zero guilt - a guilt-trip text loses the long-term program to protect the $147 session, which is the wrong trade. Internal: front-desk task, personal call next business morning if no reply.*

---

## 7. Existing build - what changes

The current GoHighLevel account has live automations that conflict with this system. These happen before switch-on:

1. **Retire the live 194-step Post-Lead Nurture.** Sequence 1 replaces it. Running both sends two parallel SMS threads from different personas to the same contact.
2. **Retire the "Olivia" persona.** Every message now signs as the real person who answers the line; after-hours messages sign as the team.
3. **Archive the 20 draft workflows, harvesting two first:** "Appt Missed: Tag + Move to Missed" and "Appt Show: Tag + Move to Showed". Those two fix show-tracking and are already built.
4. **Fix show tracking off appointment status,** not the trigger link. Today: 6 enrolments recorded against 115 bookings, so there is no show-rate data at all.
5. **Consolidate tags** into hbot-kickstart-purchased.
6. **Strip free-red-light promises** from any surviving nurture copy and any live Meta ad creative. The bump now sells what the old funnel gave away; overlap risks chargebacks.

---

## 8. Fields, tokens and tracking

### Order bump

Decided Aug 22: **$25 single Red Light Recovery Session** (normal price $40), per Dr. Haas. On bump purchase, the session is added to the first-visit booking - no banked sessions, no custom field. Bump buyers see "Red Light Recovery Session - added to today's visit" on the confirmation page.

### The goal field: store the phrase, not the label

The lead form's goal options must store an SMS-ready value so the playback in Sequence 1 stays grammatical mid-sentence. Button labels stay as designed; the stored Value changes:

| Button label | Stored value |
|---|---|
| My energy | your energy |
| Clear thinking | the brain fog |
| Faster recovery | your recovery |
| Fewer aches | the aches |
| A few of these | those things |

### Merge-token mapping

| Shorthand in this document | GoHighLevel token | Note |
|---|---|---|
| {{assigned_user}} | {{user.first_name}} | Must be the human who actually monitors the line; replies route to them |
| {{location_number}} | {{location.number}} | Booking line: 704-385-5113 |
| {{location_address}} | {{location.full_address}} | 497 N Wendover Rd, Charlotte, NC 28211 |
| {DIRECTIONS VIDEO URL} | GHL media URL | 20-second directions clip, used in Sequence 3 |

### Link tracking

Every checkout and landing-page link is shortened and UTM-tagged (utm_source=sms, utm_medium=followup, utm_campaign=hbot-kickstart, utm_content incremented per touch). Hyros and the Meta pixel carry across to all four pages; the purchase event gets verified with a live $1 product so Sequence 1 exits reliably.

---

## 9. SMS ground rules

Carried from the Emerald system. Every text above already complies; every future edit must too.

- **Thumb-typed or it does not send.** Every SMS reads like a real person wrote it. Staffed messages sign with a real first name; after-hours messages sign as "the VYVE after-hours team", never a name.
- **Plain characters only.** Straight apostrophes and hyphens. Special dashes, curly quotes, and emoji silently triple the sending cost.
- **Two segments (306 characters) hard cap, one segment preferred.**
- **Reply beats click.** Most texts ask for a reply, not a tap. Replies become conversations, and conversations close.
- **"Reply STOP to opt out" appears on the first lead SMS only.** Consent is captured on the lead form; later messages are an established two-way thread.
- **Ceiling: three texts per stage.** No daily drips, no countdown timers, no stacked "last chance." The list's trust is worth more than any single conversion.

---

## 10. Launch checklist

Every box before ads cut over:

- SMS send window 9am-7pm ET on all nudge steps (held to 9am outside it; confirmations exempt)
- Hours branch on Lead SMS 1 and Purchase SMS 1, evaluated at send time
- Goal survey values stored as the SMS-ready phrase
- Inbound reply pauses the workflow and notifies the assigned user
- Assigned user set to whoever actually monitors the line
- SMS as plain text: straight apostrophes and hyphens, no emoji
- Links shortened and UTM-tagged, incremented per touch
- Purchase event verified with a live $1 product
- Speed-to-lead call task fires on purchase
- Order bump wired at $25; on purchase, red light added to the first-visit booking
- Outbound "lock your time" text fires reliably on purchase (no calendar by design)
- Hyros and Meta pixel on all four pages; purchase pixel on the confirmation page
- Directions video uploaded; URL in Sequence 3 email and morning-of SMS
- Prep-guide video re-checked (no "30 minutes", no free red light mention), then embedded on the confirmation page

---

## 11. Needed from the clinic

Three inputs, none blocking launch - every unverified claim is already off the pages, so answers only decide whether stronger claims get added back.

1. **Chamber facts.** Mask or no mask? Intercom? Phone allowed inside? Settles the flagged line in Sequence 3 and whether the talk/phone claims return to the pages.
2. **HBOT testimonials and Dr. Haas bio.** Two experience-based quotes from HBOT clients (photo or initials plus city, signed release - the Lyme quote cannot carry over), plus Dr. Haas's bio and photo for the physician section.
3. **Weekly chamber capacity (optional).** Pages say "limited spots available," which is true at any number. A confirmed weekly first-visit count would let the stronger specific version return.

---

## 12. Build order

1. Done: copy locked, four pages built and loaded into GoHighLevel
2. Build the 7 emails as branded HTML from the email template
3. Strip red light from the existing funnel and ads
4. Build the 3 workflows, exits first, then messages; retire the old automations
5. Test end to end with a live $1 product: purchase event, tags, speed-to-lead task, outbound scheduling text
6. Cut ads over, retire the old funnel
