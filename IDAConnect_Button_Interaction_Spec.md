# IDAConnect Prototype Button & Interaction Spec

This is a cleaned front-end handoff based on the current prototype overview PDF, the prior draft, and the IDAConnect Drive documentation.

## Scope

Build a believable front-end prototype around the core MVP loop:

Family member -> Loved one profile -> Verified companion -> Book visit -> Payment confirmation -> Visit details -> Visit report -> Rebook

Family Member and Companion are active MVP roles. Resident and Facility Staff may be visible as future roles, but should use "Coming soon" behavior unless a separate demo flow is intentionally added.

## Global Rules

- Every clickable item must respond: navigate, open a modal, toggle state, show validation, or show a coming-soon message.
- Primary actions should use the existing purple filled button style. Secondary actions should use outlined or text styling.
- Trust and elder-care context should be more prominent than price.
- Do not expose unnecessary medical or sensitive data. Media buttons must respect consent state.
- Use demo data consistently: Eleanor Thompson, Sunrise of Walnut Creek, Sophia Martinez.

## 1. Welcome / Landing

Purpose: choose user role and explain the service clearly.

Recommended copy:
- Headline: "When you can't be there, someone trusted can."
- Supporting line: "Verified companion visits for loved ones in nursing homes and hospitals."
- Trust points: Verified companions, short in-person visits, visit reports for families.

| Element | Behavior |
| --- | --- |
| I'm a Family Member | Set role to `family`; navigate to Create Account or Login. |
| I'm a Companion | Set role to `companion`; navigate to Create Account or Companion Application. |
| Resident | Future role. Open modal: "Resident access is planned for a future version." |
| Facility Staff | Future role. Open modal: "Facility staff tools are planned for a future version." |

## 2. Create Account

Purpose: create a role-specific account and route the user to the next required setup step.

| Element | Behavior |
| --- | --- |
| Back arrow | Return to Welcome / Landing. |
| Role selector | Show selected role at top. Active options: Family Member, Companion. Future options: Resident, Facility Staff. |
| First Name, Last Name, Email, Phone, Password, Confirm Password | Required fields. Show inline validation if empty or invalid. |
| Show / hide password icon | Toggle password visibility. |
| Terms and Privacy checkbox | Required before Create Account becomes active. Store as accepted in demo state. |
| Terms link | Open short Terms modal. Include non-medical scope, cancellation/payment basics, acceptable use. |
| Privacy link | Open short Privacy modal. Mention profile data, visit reports, consent, media, and secure storage. |
| Create Account | If family: navigate to Add Loved One Profile. If companion: navigate to Companion Verification / Profile Setup. |
| Log In link | Navigate to Login. |

Important improvement: family users should not land directly on the dashboard before adding a loved one profile. The loved one is the center of the product.

## 3. Login

Purpose: return users to the correct role experience.

| Element | Behavior |
| --- | --- |
| Back arrow | Return to Welcome / Landing. |
| Email and Password fields | Required. Accept demo values. |
| Show / hide password icon | Toggle password visibility. |
| Forgot Password? | Open reset modal with email input, Send Reset Link, Cancel. |
| Send Reset Link | Show confirmation toast: "Reset link sent." |
| Log In | Show loading, then route by selected/demo role: Family Dashboard or Companion Dashboard. |
| Continue with Google | Simulate login for smoother demo; route by selected role. |
| Continue with Apple | Simulate login for smoother demo; route by selected role. |
| Sign Up | Navigate to Create Account. |

Recommended trust line under logo: "Secure access to your loved one's visit updates."

## 4. Add Loved One Profile - Required Missing Screen

Purpose: create the resident context before booking.

| Element | Behavior |
| --- | --- |
| Back arrow | Return to previous setup step. |
| Save Loved One | Validate required fields and navigate to Family Dashboard. |
| Skip for Now | Optional for demo only. If used, show warning that booking requires a loved one profile. |
| Media consent toggle | Enable or disable photo/video use in visit reports. |
| Add interests / topics chips | Toggle selected interests, such as Music, Reading, Gardening, Family stories. |

Required fields:
- Preferred name
- Age range
- Facility name
- Language
- Interests or favorite topics
- Visit preferences
- Media consent
- Notes for companion

Avoid collecting diagnoses, exact birthdate, medical records, or unnecessary PHI.

## 5. Family Dashboard

Purpose: reassure the family and offer quick access to the next visit, latest report, and booking.

Add a Loved One Status Card near the top:
- Eleanor Thompson
- Facility: Sunrise of Walnut Creek
- Last visit: Yesterday
- Mood: Good
- Next visit: Tomorrow at 11:00 AM

| Element | Behavior |
| --- | --- |
| Notification bell | Open notifications modal/list. Include visit confirmation, report ready, schedule update. |
| View Details on Next Visit | Navigate to Visit Details. |
| Book a Visit | If loved one exists, navigate to Find a Companion. If not, navigate to Add Loved One Profile. |
| Visit History | Navigate to Visits screen with tabs: Upcoming, Completed, Canceled. |
| Messages | Open Messages screen. MVP can show Companion Messages and IDA Support; Facility Responses marked future. |
| Payment | Open payment methods and receipts screen. |
| View All | Open all upcoming visits. |
| Upcoming Visit card | Open that visit's details. |
| View Latest Report | Navigate to latest Visit Report. This should be added because reports are core value. |
| Book Another Visit | Start booking with the previous loved one preselected. |
| Bottom nav: Home | Show Family Dashboard and active state. |
| Bottom nav: Loved Ones | Open loved one profile list/details. |
| Bottom nav: Visits | Open visit schedule/history. |
| Bottom nav: Messages | Open Messages. |
| Bottom nav: Account | Open Account Settings. |

## 6. Find a Companion

Purpose: choose a verified companion. This should not feel like a generic marketplace.

| Element | Behavior |
| --- | --- |
| Back arrow | Return to Family Dashboard. |
| Search bar | Filter companions by name, language, skill, background, or interest. |
| Filter icon | Open filter drawer. |
| All chip | Show all companions. |
| Available Now chip | Show companions available now. |
| Students chip | Show student companions. |
| Female chip | Filter by female companions. |
| Companion card | Navigate to that companion's profile. |
| Heart icon | Toggle favorite state; show "Added to favorites" / "Removed from favorites." |
| Verification badge or View Verification | Open trust modal. |

Recommended companion card content:
- Photo
- First name and last initial or full demo name
- Background, e.g. Social Work Student
- Rating and review count
- Availability
- Languages
- Trust badges: ID Verified, Background Checked, Training Completed
- Price per minute, visually secondary

Useful filters:
- Availability
- Language
- Background or student type
- Dementia-friendly training
- Hospital visit experience
- Repeat visits available
- Rating
- Price

## 7. Companion Profile

Purpose: build enough trust for a family to book.

| Element | Behavior |
| --- | --- |
| Back arrow | Return to Find a Companion. |
| Three-dot menu | Open menu: Share Profile, Report Profile, View Verification, Save Companion. |
| Message | MVP behavior: show "Messaging is available after booking" or open limited demo conversation. |
| Book a Visit | Navigate to Book a Visit with this companion preselected. |
| Skill / interest chips | Static or open short explanation. Do not overcomplicate. |
| View Verification Details | Open verification modal. |
| Favorite Companion | Toggle saved state. |
| View Reviews | Scroll to reviews section or open reviews modal. |

Verification modal content:
- ID Verified
- Background Check Completed
- Training Completed
- Interview Approved

Recommended profile additions:
- "Why I joined IDAConnect"
- Languages
- Preferred visit types
- Experience with older adults
- Repeat visits available

## 8. Book a Visit

Purpose: schedule a specific visit for a specific loved one.

| Element | Behavior |
| --- | --- |
| Back arrow | Return to Companion Profile. |
| Companion card | Open compact companion profile modal. |
| Select Loved One | Open loved one selector. If only one exists, preselect Eleanor. |
| Date buttons | Select one date and update summary. |
| Time selector | Select visit time. Add if missing. |
| Duration buttons | Select 15, 30, 45, or 60 minutes and update total. |
| Visit Purpose | Select one purpose and show it in summary. |
| Add Notes for Companion | Open note field. |
| Review & Pay | Navigate to Payment Review. |

Visit purpose options:
- Friendly check-in
- Conversation
- Reading together
- Dementia engagement
- Hospital support
- Walk or light activity
- Birthday / special occasion
- Help connect with family by phone

Visit summary should include:
- Loved one
- Facility
- Companion
- Date and time
- Duration
- Visit purpose
- Notes indicator
- Media consent state
- Price total

## 9. Payment Review - Required Missing Screen

Purpose: complete the booking flow without real payment.

| Element | Behavior |
| --- | --- |
| Add Payment Method | Open card form placeholder. |
| Apply Promo Code | Reveal promo field. Demo code `IDA10` applies 10 percent off. |
| Edit Visit | Return to Book a Visit with selections preserved. |
| Confirm & Pay | Show loading, then navigate to Booking Confirmation. |

Payment is simulated in the prototype. Production can later use Stripe.

## 10. Booking Confirmation - Required Missing Screen

Purpose: reassure the family that the visit is scheduled.

| Element | Behavior |
| --- | --- |
| View Visit Details | Navigate to Visit Details. |
| Add to Calendar | Show toast: "Visit added to calendar." |
| Book Another Visit | Start another booking with loved one preselected. |
| Return Home | Navigate to Family Dashboard. |

Confirmation should show companion, loved one, facility, date/time, duration, purpose, total paid, and cancellation policy.

## 11. Visit Details - Required Missing Screen

Purpose: show the status of a scheduled visit.

| Element | Behavior |
| --- | --- |
| Cancel Visit | Open confirmation modal. If confirmed, set status to Canceled. |
| Reschedule Visit | Return to Book a Visit with details prefilled. |
| Message Companion | Open limited messaging or "available after booking" flow. |
| Contact Support | Open support modal. |

Include visit status: Scheduled, Companion confirmed, Checked in, In progress, Completed, Report ready.

## 12. Visit Report - Essential MVP Screen

Purpose: deliver the core value families are paying for: reassurance and visibility.

| Element | Behavior |
| --- | --- |
| Rebook Same Companion | Open Book a Visit with same loved one and companion preselected. |
| Rate Visit | Open rating modal. |
| Share Report | Open share modal: Copy link, Email report, Download PDF. |
| View Photo / Video | Open media preview only if consent is enabled and media exists. |
| Raise Concern | Open concern form. |

Report content:
- Companion name
- Loved one name
- Facility
- Visit date and actual duration
- Mood indicator
- Activities completed
- Written summary
- Optional photo/video if consented
- Concern flag

Concern categories:
- Visit was too short
- Resident seemed upset
- Companion issue
- Facility scheduling issue
- Photo/video concern
- Other

## 13. Companion Registration / Verification

Purpose: show that companions are vetted before visiting vulnerable adults.

| Element | Behavior |
| --- | --- |
| Create Companion Profile | Open companion profile setup. |
| Upload ID | Open upload placeholder; show success state. |
| Start Background Check | Show "Background check in progress"; allow demo approval. |
| Complete Training | Open training checklist. |
| Submit Application | Show "Application submitted for review." |

Required verification statuses:
- ID uploaded
- Background check
- Training completed
- Interview approved
- Admin approval

## 14. Companion Dashboard

Purpose: let companions manage assigned visits and earnings.

| Element | Behavior |
| --- | --- |
| Accept Visit | Set visit status to Accepted; family sees "Companion confirmed." |
| Decline Visit | Open reason modal. |
| View Visit | Navigate to Companion Visit Details. |
| Set Availability | Open availability calendar. |
| View Earnings | Open earnings summary. |

## 15. Companion Visit Details / Check-In

Purpose: guide the companion through the visit safely.

| Element | Behavior |
| --- | --- |
| Start Directions | Open map placeholder. |
| View Resident Notes | Open family notes and visit preferences. |
| Check In | Navigate to check-in options. |
| Scan QR Code | Simulate successful QR scan and start visit. |
| Use GPS Check-In | Simulate location verified and start visit. |
| Manual Check-In | Open reason field; mark as "Needs admin review" in demo. |
| Call Family During Visit | Open call placeholder only if visit purpose includes family call or family consent allows it. |

## 16. In-Visit / Companion Report Submission

Purpose: complete the visit and send a structured report.

| Element | Behavior |
| --- | --- |
| Start Visit Timer | Start timer. |
| Conversation Prompts | Open prompt cards based on loved one interests. |
| Add Mid-Visit Note | Open note field. |
| Safety / Concern | Open incident form. |
| End Visit | Confirm end, then open Report Submission. |
| Select Mood | Choose one mood value. |
| Select Activities | Toggle activity chips. |
| Upload Photo / Video | Enabled only when media consent is active. |
| Submit Report | Show success, return to Companion Dashboard, notify family that report is ready. |

Mood options:
- Very Happy
- Happy
- Neutral
- Tired
- Sad / Concerned

Activity options:
- Conversation
- Reading
- Music
- Walk
- Family call
- Photos
- Games
- Other

## 17. Subscription Plans - Secondary / Later

Subscriptions support the business model, but they are not required before the core booking/report loop works.

| Element | Behavior |
| --- | --- |
| Pay Per Visit | Continue to normal booking. |
| Essential Visits | Select 4 short visits/month and open plan confirmation. |
| Weekly Wellness | Select 8 visits/month and open plan confirmation. |
| Daily Comfort | Select 12-20 micro-visits/month and open plan confirmation. |
| Compare Plans | Open plan comparison modal. |

## 18. Future / Demo-Only Roles

These should not distract from the MVP unless specifically presenting the long-term ecosystem.

| Role / Feature | Prototype Behavior |
| --- | --- |
| Resident dashboard | Coming-soon modal or one simple future preview. |
| Facility staff portal | Coming-soon modal or one simple future preview. |
| Facility response to feedback | Future feature; may appear as demo-only. |
| Resident activity calendar | Future feature; do not make required for MVP. |
| Facility reputation / public reviews | Future feature; keep out of MVP. |

## Implementation Priority

### Must Have

1. Role selection: Family Member, Companion
2. Create Account and Login
3. Add Loved One Profile
4. Family Dashboard with loved-one status
5. Find a Companion
6. Companion Profile with verification
7. Book a Visit with date, time, duration, loved one, purpose, notes
8. Payment Review and Booking Confirmation
9. Visit Details
10. Visit Report
11. Companion verification setup
12. Companion check-in and report submission

### Should Have

1. Search and filters
2. Favorite companion
3. Notifications
4. Visit history
5. Rate visit
6. Raise concern
7. Basic messages

### Later

1. Subscription plan management
2. Facility response workflow
3. Resident dashboard
4. Facility dashboard
5. Mood trend analytics
6. Public facility reviews

## Main Changes From The Prior Draft

- Removed repeated "purpose / production behavior" sections where they did not add implementation value.
- Reduced future roles and facility features to clear demo-only behavior.
- Added the missing Add Loved One Profile, Payment Review, Booking Confirmation, Visit Details, Visit Report, and Companion Report Submission screens because the Drive docs identify them as essential to the MVP loop.
- Made the booking flow elder-care-specific by requiring loved one, facility, visit purpose, notes, and media consent state.
- Shifted companion search/profile from marketplace logic to trust-first decision-making.
- Added consent and privacy guardrails without overloading the front-end spec with legal detail.
