# Shaggy Cleaning --- Complete Design System

**File:** `design.md`\
**Product:** Shaggy Cleaning Services Website\
**Primary market:** Hobart, Tasmania, Australia\
**Design direction:** Modern premium service-business website\
**Design inspiration:** The supplied NeatNest / PlumPro reference
designs\
**Brand constraint:** Use only **White, Red and Black** as the UI color
system.

------------------------------------------------------------------------

# 01. Design Vision

The Shaggy Cleaning website should feel:

-   Clean
-   Modern
-   Professional
-   Trustworthy
-   Premium
-   Local
-   Simple
-   Conversion-focused
-   Easy to scan

The design should take inspiration from the supplied reference websites
in terms of:

-   Strong hero compositions
-   Large service imagery
-   Structured service cards
-   Clear trust signals
-   Strong CTA placement
-   Process storytelling
-   Testimonials
-   FAQ sections
-   Large conversion banners
-   Editorial-style content sections

However, the Shaggy website must **not copy the visual identity** of the
references.

The visual identity must be built around:

``` text
WHITE  → Primary background / clean space
BLACK  → Typography / structure / contrast
RED    → Brand accent / interaction / conversion
```

The result should feel like a **premium modern cleaning brand**, not a
generic template.

------------------------------------------------------------------------

# 02. Core Design Principle

> **Clean space. Strong typography. Strategic red.**

White should dominate the interface.

Black should create hierarchy and structure.

Red should be used selectively to create attention and conversion.

### Target visual balance

``` text
White     ████████████████████████████████████████████  ~80–90%
Black     █████████                                    ~8–15%
Red       ██                                           ~3–7%
```

These are visual targets, not strict mathematical requirements.

Red should never overwhelm the website.

------------------------------------------------------------------------

# 03. Brand Color System

The client specifically requested only three brand colors.

## 3.1 Primary White

``` text
Name: Pure White
HEX: #FFFFFF
RGB: 255, 255, 255
```

Use for:

-   Main page background
-   Cards
-   Forms
-   Navigation background
-   Content sections
-   Service cards
-   FAQ panels
-   Footer areas where appropriate

White is the dominant visual color.

------------------------------------------------------------------------

## 3.2 Primary Black

``` text
Name: Shaggy Black
HEX: #000000
RGB: 0, 0, 0
```

Use for:

-   H1
-   H2
-   H3
-   Body text
-   Navigation
-   Icons
-   Borders
-   Dividers
-   Secondary buttons
-   Footer text
-   Form labels

Black is the structural color.

------------------------------------------------------------------------

## 3.3 Brand Red

Recommended primary red:

``` text
Name: Shaggy Red
HEX: #D9232E
RGB: 217, 35, 46
```

Use for:

-   Primary CTA
-   Active navigation indicator
-   Important links
-   Hover states
-   Selected form states
-   Small accent lines
-   Important badges
-   Highlight words
-   Conversion-focused elements
-   Important icons where appropriate

Red must be treated as an accent, not as the main page background.

------------------------------------------------------------------------

# 04. Strict Color Rules

Only these three base colors are allowed:

``` text
#FFFFFF
#000000
#D9232E
```

Do not introduce:

-   Blue
-   Green
-   Orange
-   Purple
-   Brown
-   Beige
-   Yellow
-   Independent gray colors

### Transparency rule

Secondary black can be represented using black opacity rather than
introducing gray colors.

Examples:

``` css
rgba(0, 0, 0, 0.06)
rgba(0, 0, 0, 0.10)
rgba(0, 0, 0, 0.20)
rgba(0, 0, 0, 0.55)
rgba(0, 0, 0, 0.70)
```

This preserves the three-color brand system.

### Important

Natural colors may exist inside photography and real-world imagery.

The three-color rule applies to the **interface and graphic design
system**, not to photographic content.

------------------------------------------------------------------------

# 05. Color Usage by Component

  Component       Background      Text            Accent
  --------------- --------------- --------------- --------------------
  Main page       White           Black           Red
  Header          White           Black           Red
  Hero            White           Black           Red
  Primary CTA     Red             White           ---
  Secondary CTA   White           Black           Black border
  Service card    White           Black           Red on interaction
  Dark section    Black           White           Red
  Form            White           Black           Red focus
  FAQ             White           Black           Red active
  Footer          Black / White   White / Black   Red
  Badge           White           Black           Red accent
  Active nav      White           Black           Red underline
  Error           White           Black           Red
  Success         White           Black           Red

------------------------------------------------------------------------

# 06. Typography

The typography should feel modern, clean and highly readable.

## Recommended font system

### Primary display font

**Manrope**

Use for:

-   H1
-   H2
-   H3
-   Hero statements
-   Large statistics
-   Section headings

### Secondary/body font

**Inter**

Use for:

-   Body copy
-   Navigation
-   Form labels
-   Buttons
-   Metadata
-   FAQ text
-   Blog content

If the project needs one font only, use **Manrope** across the entire
website.

------------------------------------------------------------------------

# 07. Typography Scale

Desktop:

``` text
Display / Hero H1      64–80px
H1                     56–64px
H2                     40–48px
H3                     28–32px
H4                     20–24px
Body Large             18–20px
Body                   16–18px
Body Small             14px
Caption                12–13px
Button                 14–16px
Navigation             14–16px
```

Mobile:

``` text
Display / Hero H1      40–48px
H1                     38–44px
H2                     30–36px
H3                     22–26px
H4                     18–20px
Body Large             17–18px
Body                   15–16px
Body Small             13–14px
Button                 14–16px
```

------------------------------------------------------------------------

# 08. Typography Weight System

Use a controlled weight hierarchy.

``` text
400 — Regular
500 — Medium
600 — Semibold
700 — Bold
800 — Extra Bold
```

Recommended:

-   H1: 700--800
-   H2: 700--800
-   H3: 700
-   Navigation: 500--600
-   Body: 400--500
-   Buttons: 600--700
-   Labels: 600
-   Important numbers: 700--800

Avoid using 900 unless there is a strong visual reason.

------------------------------------------------------------------------

# 09. Typography Rules

### Headlines

Headlines should be short and confident.

Example:

> Professional Cleaning. Simply Done.

Instead of:

> We are a professional cleaning company providing a wide range of
> cleaning services.

### Highlighting

Use red sparingly.

Example:

**Professional Cleaning.**\
**Trusted Locally.**

The word or phrase selected for red should carry meaning.

### Paragraph width

Long paragraphs should not span the full screen.

Recommended maximum:

``` text
600–720px
```

------------------------------------------------------------------------

# 10. Layout System

The website should use a consistent responsive grid.

## Desktop container

``` text
Max width: 1280px
Preferred content width: 1200px
Side padding: 32–48px
```

## Tablet

``` text
Side padding: 24–32px
```

## Mobile

``` text
Side padding: 20px
```

Never allow text or cards to touch the viewport edge.

------------------------------------------------------------------------

# 11. Grid System

## Desktop

Use a 12-column grid.

Common layouts:

``` text
12 columns
8 + 4
7 + 5
6 + 6
4 + 4 + 4
3 + 3 + 3 + 3
```

## Tablet

Use:

``` text
6-column grid
```

## Mobile

Use:

``` text
1-column layout
```

Cards may become 2 columns on larger mobile widths only where
readability remains strong.

------------------------------------------------------------------------

# 12. Spacing System

Use a consistent spacing scale.

``` text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px
120px
```

### Common usage

``` text
4–8px     icon/text gap
12–16px   label/control gap
20–24px   card internal spacing
32px      small section gap
48px      standard section padding
64px      major section padding
80–96px   large desktop section spacing
120px     hero / major visual separation
```

Avoid random spacing values.

------------------------------------------------------------------------

# 13. Section Spacing

Desktop:

``` text
Major section: 80–120px
Standard section: 64–96px
Compact section: 48–64px
```

Mobile:

``` text
Major section: 56–72px
Standard section: 48–64px
Compact section: 32–48px
```

The website should breathe.

Do not compress every section into a dense information block.

------------------------------------------------------------------------

# 14. Border System

Borders are primarily black.

Recommended:

``` text
1px solid rgba(0,0,0,0.12)
1px solid rgba(0,0,0,0.20)
2px solid #000000
```

Use 1px borders for:

-   Cards
-   Form fields
-   Dividers
-   FAQ rows

Use 2px borders for:

-   Strong outline buttons
-   Important interactive states

Red borders should be reserved for:

-   Active form controls
-   Selected states
-   Important alerts
-   Brand accents

------------------------------------------------------------------------

# 15. Radius System

The reference designs use structured cards rather than highly rounded
UI.

Shaggy should follow a modern restrained radius system.

``` text
0px      Strong editorial blocks
4px      Inputs
6px      Buttons
8px      Cards
12px     Feature cards
16px     Large media containers
20px     Hero image container
```

Avoid:

-   Excessive pill shapes
-   Fully rounded cards everywhere
-   Overly playful UI

Pills may be used for small badges only.

------------------------------------------------------------------------

# 16. Shadow System

The interface should primarily rely on:

-   Borders
-   Contrast
-   Spacing
-   Image composition

rather than heavy shadows.

Allowed:

``` css
box-shadow: 0 8px 30px rgba(0,0,0,0.08);
```

Use shadows mainly for:

-   Floating quote forms
-   Modal
-   Sticky elements
-   Important elevated cards

Avoid shadows on every card.

------------------------------------------------------------------------

# 17. Visual Style

The overall visual language should combine:

``` text
Premium editorial layout
+
Modern service-business website
+
Strong photography
+
Large typography
+
Structured cards
+
Minimal red accents
```

The site should feel more sophisticated than a typical cleaning-company
template.

------------------------------------------------------------------------

# 18. Image Direction

Photography is a major part of the design.

The supplied references show strong use of real service imagery. Shaggy
should use the same principle.

## Preferred imagery

-   Professional cleaners
-   Real homes
-   Modern offices
-   Commercial facilities
-   Cleaning in action
-   Before/after where genuine
-   Equipment
-   Close-up cleaning details
-   Happy customers where permission exists
-   Local Hobart context where relevant

## Image style

Photography should be:

-   Bright
-   Natural
-   Professional
-   Clean
-   Authentic
-   High-resolution
-   Human-focused

Avoid overly staged stock photography where possible.

------------------------------------------------------------------------

# 19. Image Color Treatment

Do not force the entire image into brand colors.

Photography can retain natural colors.

Brand colors should come from:

-   UI
-   Typography
-   CTA
-   Frames
-   Badges
-   Graphic overlays

Optional treatment:

-   Black-and-white imagery with red accents for editorial sections
-   Red overlay only in controlled campaign/CTA visuals

Do not apply a heavy red filter to normal photography.

------------------------------------------------------------------------

# 20. Iconography

Use one consistent icon family.

Recommended style:

-   Outline icons
-   1.75--2px stroke
-   Minimal detail
-   Rounded or geometric construction
-   Black default
-   Red for selected/important states

Examples:

-   Phone
-   Mail
-   Map pin
-   Shield
-   Users
-   Leaf
-   Star
-   Calendar
-   Clock
-   Sparkles
-   Home
-   Building
-   Cleaning tools
-   Arrow
-   Check
-   Search

Do not mix multiple icon styles.

------------------------------------------------------------------------

# 21. Logo

Header logo:

``` text
[Logo] Shaggy Cleaning
```

The logo should remain primarily black/white.

Red can be included only if it is part of the approved brand logo.

Do not recolor the logo arbitrarily.

------------------------------------------------------------------------

# 22. Header Design

## Desktop

Structure:

``` text
[Logo]    Home Services Locations About FAQs Blog Contact    [Call Now] [Get a Free Quote]
```

Height:

``` text
72–88px
```

Background:

``` text
White
```

Bottom border:

``` text
1px solid rgba(0,0,0,0.12)
```

### Navigation

Default:

``` text
Black
```

Hover:

``` text
Red
```

Active:

``` text
Black + red underline
```

### Header CTA

Primary:

``` text
Red background
White text
```

Secondary:

``` text
White background
Black border
Black text
```

------------------------------------------------------------------------

# 23. Sticky Header

Desktop:

-   Header remains accessible during scrolling.
-   Background stays white.
-   Slight shadow/border appears after scrolling.
-   CTA remains visible.

Mobile:

``` text
[Logo]                  [Menu]
```

Then use a bottom sticky conversion bar:

``` text
[ Call Now ] [ Request Service ]
```

The sticky bar should not cover form fields or important content.

------------------------------------------------------------------------

# 24. Mobile Bottom CTA

This is a major conversion feature.

### Structure

``` text
CALL NOW          REQUEST SERVICE
```

Call Now:

``` text
White / black outline
```

Request Service:

``` text
Red / white
```

Position:

``` text
fixed
bottom: 0
```

Add safe-area spacing for modern mobile devices.

------------------------------------------------------------------------

# 25. Breadcrumbs

Breadcrumbs should appear on internal pages.

Example:

``` text
Home  /  Services  /  Residential Cleaning  /  House Cleaning
```

Style:

-   Small
-   Black
-   Reduced opacity for parent items
-   Current page strong
-   Red only for active link/hover

Mobile:

Keep breadcrumbs concise and allow wrapping.

------------------------------------------------------------------------

# 26. Hero System

The hero is one of the most important components.

The old site had an overloaded hero. The new design must avoid this.

The hero should communicate:

1.  What Shaggy does
2.  Who it helps
3.  Where it operates
4.  What the user should do next

But it should remain visually calm.

------------------------------------------------------------------------

# 27. Homepage Hero

Recommended structure:

``` text
┌─────────────────────────────────────────────────────┐
│ Small eyebrow                                       │
│                                                     │
│ Professional Cleaning                               │
│ for Homes & Businesses                              │
│                                                     │
│ Short supporting paragraph                          │
│                                                     │
│ [Get a Free Quote] [Call Now]                       │
│                                                     │
│ Trust indicators                                    │
│                                                     │
│                         Large cleaning image         │
│                         + small red accent card     │
└─────────────────────────────────────────────────────┘
```

The hero should not contain a large six-field form.

Instead:

-   Short Quick Service Request
-   Or a prominent button that opens the quick request

------------------------------------------------------------------------

# 28. Quick Service Request Design

This component is a **global product requirement**.

It must be available throughout the website.

## Visual structure

Desktop:

``` text
┌─────────────────────────────────────────────┐
│ Request a Cleaning Service                  │
│ Tell us what you need and we'll help.      │
│                                             │
│ Service ▼     Location ▼    Date ▼          │
│ Name          Phone        [Request]        │
└─────────────────────────────────────────────┘
```

Mobile:

``` text
Request a Cleaning Service

Service
[ Select service ]

Location
[ Select location ]

Preferred date
[ Select date ]

Name
[ Your name ]

Phone
[ Your phone ]

[ Request Service ]
```

Primary submit button:

``` text
Red background
White text
```

------------------------------------------------------------------------

# 29. Quick Form States

### Default

White field / black border.

### Focus

Red border.

### Valid

Black/normal border.

### Error

Red border + clear message.

### Loading

Button becomes:

``` text
Submitting...
```

### Success

Use a clean confirmation block:

``` text
Request received.

Thanks — our team will review your
requirements and contact you shortly.

[ Call Now ]
```

------------------------------------------------------------------------

# 30. Full Quote Form

The full quote page should use a premium multi-step layout.

Desktop:

``` text
LEFT
Step navigation + form

RIGHT
Trust / help / service area information
```

Step indicator:

``` text
01 → 02 → 03 → 04 → 05 → 06
```

Active step:

-   Black number circle
-   Red progress indicator

Completed step:

-   Red check

Inactive:

-   Black outline

------------------------------------------------------------------------

# 31. Buttons

## Primary Button

``` text
Background: Red
Text: White
Border: Red
```

Example:

**Get a Free Quote →**

Hover:

-   Slightly darker red using the same red color with controlled
    overlay/opacity
-   Small upward/forward motion
-   No color explosion

------------------------------------------------------------------------

## Secondary Button

``` text
Background: White
Text: Black
Border: Black
```

Example:

**Call Now**

Hover:

``` text
Background: Black
Text: White
```

------------------------------------------------------------------------

## Text Button

``` text
Black text
Red arrow
```

Example:

**View Service →**

Hover:

-   Text red
-   Arrow moves 4--6px

------------------------------------------------------------------------

# 32. Button Dimensions

Desktop:

``` text
Height: 48–56px
Horizontal padding: 20–28px
```

Small:

``` text
Height: 40–44px
```

Mobile:

``` text
Minimum height: 48px
```

Touch targets should remain comfortably tappable.

------------------------------------------------------------------------

# 33. CTA Hierarchy

Each section should have one clear primary action.

Priority:

``` text
1. Get a Free Quote / Request Service
2. Call Now
3. View Service
4. Learn More
```

Do not use five competing primary buttons in one section.

------------------------------------------------------------------------

# 34. Trust Strip

Inspired by the reference designs.

Example:

``` text
✓ Trusted & Local
✓ Professional Team
✓ Flexible Scheduling
✓ Quality Focused
```

Visual style:

-   White background
-   Black icons
-   Red accent
-   Compact horizontal layout

Mobile:

Stack or horizontally scroll if necessary.

------------------------------------------------------------------------

# 35. Service Card

Service cards are central to the website.

## Structure

``` text
┌──────────────────────────┐
│                          │
│       SERVICE IMAGE      │
│                          │
├──────────────────────────┤
│ House Cleaning           │
│ Regular professional     │
│ cleaning for homes.      │
│                          │
│ View Service →           │
└──────────────────────────┘
```

Image should dominate the upper area.

------------------------------------------------------------------------

# 36. Service Card Interaction

Default:

-   White background
-   Black border
-   Black text

Hover:

-   Image subtle scale: 1.03
-   Border becomes red
-   Arrow moves
-   Service title can become red

Avoid large card transformations.

------------------------------------------------------------------------

# 37. Service Category Cards

Three major categories:

``` text
Residential Cleaning
Commercial Cleaning
Specialised Cleaning
```

These should be larger than normal service cards.

Use:

-   Large image
-   Strong title
-   Short explanation
-   2--4 featured services
-   Category CTA

------------------------------------------------------------------------

# 38. Featured Service Grid

Desktop:

``` text
3-column
```

Recommended visual pattern:

``` text
Large featured card
+
two smaller cards
```

This creates visual hierarchy instead of showing every service with
equal importance.

------------------------------------------------------------------------

# 39. Why Choose Shaggy Section

This should visually communicate trust.

Recommended:

``` text
Why Choose Shaggy?

[01 Reliable Service]
[02 Professional Team]
[03 Consistent Quality]

[04 Flexible Scheduling]
[05 Clear Communication]
[06 Tailored Cleaning]
```

Cards should remain simple.

Icons:

Black.

Active/hover accent:

Red.

------------------------------------------------------------------------

# 40. Dark Brand Section

A black section can be used strategically to break up the white page.

Example:

``` text
BLACK BACKGROUND

Why choose the Shaggy difference?

Reliable.
Professional.
Consistent.

[Get a Free Quote]

                    Image
```

Text:

White.

Accent:

Red.

This should be used sparingly.

Recommended:

-   1--2 dark sections per long page
-   Not every section

------------------------------------------------------------------------

# 41. Process Section

Use a clean horizontal process.

Example:

``` text
01              02              03              04
Request         Tell Us         Receive         Schedule
a Quote         Requirements    Your Quote      Cleaning
```

Each step:

-   Number
-   Icon
-   Title
-   Short description

Arrows connect steps on desktop.

On mobile:

Vertical or 2-column arrangement.

------------------------------------------------------------------------

# 42. Process Number Style

Number circles:

``` text
Black background
White number
```

Active/accent:

``` text
Red
White
```

Do not use different colors for every step.

------------------------------------------------------------------------

# 43. Testimonial Design

Testimonials should feel authentic and premium.

Structure:

``` text
★★★★★

"Short customer quote..."

Customer Name
Hobart / Customer Type
```

Stars:

-   Black by default
-   Red accent is allowed

Avoid fake-looking oversized star graphics.

------------------------------------------------------------------------

# 44. Testimonial Carousel

Desktop:

Show 3 cards.

Navigation:

``` text
←  ● ○ ○  →
```

Active indicator:

Red.

Cards should not auto-rotate too aggressively.

------------------------------------------------------------------------

# 45. FAQ Design

FAQ section:

``` text
Frequently Asked Questions

What cleaning services do you provide?          +
Do you provide cleaning products?                +
Which areas do you service?                      +
How do I request a quote?                        +
```

Accordion row:

-   White background
-   Black text
-   Black border/divider

Active:

-   Red plus/minus
-   Red accent line
-   Expanded answer in black

------------------------------------------------------------------------

# 46. FAQ Search

Search input:

``` text
[ 🔍  Search your question... ] [ Search ]
```

Focus:

Red border.

Search button:

Black or red depending on hierarchy.

No additional colors.

------------------------------------------------------------------------

# 47. Location Cards

Location cards should communicate local coverage.

Example:

``` text
[Pin Icon]

Hobart
Professional cleaning services
across Hobart.

View Location →
```

Pin:

Black.

Hover:

Red.

------------------------------------------------------------------------

# 48. Location Map

Maps may naturally contain external colors.

The surrounding UI must remain:

-   White
-   Black
-   Red

Map should be treated as content rather than part of the brand color
system.

------------------------------------------------------------------------

# 49. Blog Cards

Structure:

``` text
Image
Category
Title
Short excerpt
Read Article →
```

Category:

Small uppercase label.

Use red as a subtle category accent.

------------------------------------------------------------------------

# 50. Featured Blog Article

Use an asymmetric editorial layout.

Desktop:

``` text
┌────────────────────┬────────────────────────┐
│                    │ FEATURED               │
│      IMAGE         │ Article title          │
│                    │ Description            │
│                    │ Read Article →         │
└────────────────────┴────────────────────────┘
```

This takes inspiration from the editorial feel of the supplied
reference.

------------------------------------------------------------------------

# 51. About Page Design

The About page should be more human.

Hero:

``` text
About Shaggy Cleaning
Local people. Professional cleaning.

[Get a Free Quote] [Call Now]

                 Team / cleaning image
```

Sections:

-   Our Story
-   Mission / Vision
-   Who We Are
-   Team
-   Why Choose Shaggy
-   Values
-   Our Approach
-   Service Areas
-   Reviews
-   CTA

------------------------------------------------------------------------

# 52. Team Cards

Use real team images if approved.

Structure:

``` text
[Portrait]

John Smith
Managing Director

Short biography
```

Image should be consistent across all cards.

Avoid random portrait styles.

------------------------------------------------------------------------

# 53. Values Section

Five values:

``` text
Quality
Reliability
Professionalism
Customer Focus
Integrity
```

Use:

-   Large icon
-   Title
-   One-line explanation

The section can use a black background with white text and red accents.

------------------------------------------------------------------------

# 54. Individual Service Page

The individual service page should be one of the strongest conversion
pages.

Hero:

``` text
Breadcrumb

House Cleaning

Professional house cleaning for a cleaner,
healthier and more comfortable home.

[Get a Free Quote] [Call Now]

Trust indicators

                         Service image
```

Immediately after hero:

**Quick Service Request**

------------------------------------------------------------------------

# 55. Service Benefits

Example:

``` text
Healthier Home
More Free Time
Fresh, Tidy Space
Peace of Mind
```

Cards should use:

-   White
-   Black
-   Red accent

No colored background cards.

------------------------------------------------------------------------

# 56. What's Included

Use a visual checklist.

Desktop:

``` text
IMAGE            ✓ Dusting all surfaces
                 ✓ Vacuuming and mopping
                 ✓ Kitchen cleaning
                 ✓ Bathroom cleaning

                 ✓ Bedroom cleaning
                 ✓ Emptying bins
                 ✓ Mirrors and glass
                 ✓ General tidying
```

Check icon:

Red.

------------------------------------------------------------------------

# 57. Service Information Panel

Use a bordered information card.

Example:

``` text
SERVICE INFORMATION

Standard Duration
2–4 hours

Frequency Options
Weekly, fortnightly, monthly or one-off

What You Need To Do
Provide access and special instructions
```

Keep the panel visually simple.

------------------------------------------------------------------------

# 58. Related Services

At the bottom of individual service pages:

``` text
Related Services

[End of Lease Cleaning]
[Carpet Cleaning]
[Window Cleaning]
```

This supports both navigation and SEO.

------------------------------------------------------------------------

# 59. Location Page Design

Hero:

``` text
Hobart Cleaning Services

Professional and reliable cleaning services
across Hobart and surrounding areas.

[Get a Free Quote] [Call Now]

                  Hobart / local visual
```

Then:

-   About area
-   Areas covered
-   Services
-   Why choose Shaggy
-   How it works
-   Reviews
-   Location information
-   FAQs
-   CTA

------------------------------------------------------------------------

# 60. Contact Page

Contact page should prioritize direct contact.

Top:

``` text
Contact Shaggy Cleaning Services

We're here to help.

[Get a Free Quote] [Call Now]
```

Then 3 direct contact cards:

``` text
Call Us
Email Us
Our Service Area
```

Followed by:

``` text
Send Us an Enquiry
+
Our Location
```

------------------------------------------------------------------------

# 61. Contact Form

Desktop:

``` text
LEFT                         RIGHT

Send Us an Enquiry           Our Location
Name                         Map
Email                        Address
Phone                        Contact details
Service
Address
Message
[Send Enquiry]
```

Mobile:

Stack vertically.

------------------------------------------------------------------------

# 62. Quote Page Layout

The quote page should feel like a guided application rather than a
generic contact form.

Desktop:

``` text
LEFT 70%                         RIGHT 30%

STEP 01                         Why Choose Shaggy?
Your Details                    ✓ Fast & Free
                                 ✓ No Obligation
Form                             ✓ Trusted & Local
                                 ✓ Transparent Pricing

                                 Need Help?
                                 Call / Email
```

Keep the form area visually dominant.

------------------------------------------------------------------------

# 63. Blog / Resources Page

The blog should use an editorial layout.

Hero:

``` text
Cleaning Tips & Resources

Helpful guides for cleaner,
healthier and happier spaces.

[Get a Free Quote] [Call Now]
```

Then:

-   Featured article
-   Categories
-   Latest articles
-   Popular resources
-   Services
-   Locations

------------------------------------------------------------------------

# 64. Footer Design

The footer should feel clean and structured.

Recommended dark footer:

``` text
BLACK BACKGROUND
WHITE TEXT
RED ACCENTS
```

Structure:

``` text
Shaggy Cleaning
description
social links

Services
Company
Service Areas
Contact
```

Footer CTA can sit immediately above it:

``` text
READY FOR A CLEANER SPACE?

Get your free quote today.

[Get a Free Quote] [Call Now]
```

------------------------------------------------------------------------

# 65. Footer CTA

Use a large conversion banner.

White or black background depending on page.

Preferred:

``` text
WHITE background
BLACK heading
BLACK secondary CTA
RED primary CTA
```

Alternative premium section:

``` text
BLACK background
WHITE heading
RED CTA
```

Do not use gradients.

------------------------------------------------------------------------

# 66. Social Icons

Use consistent outline icons.

Default:

Black or white depending on footer.

Hover:

Red.

Do not use each platform's brand colors because the site is restricted
to three UI colors.

------------------------------------------------------------------------

# 67. Form Design System

Inputs:

``` text
Height: 48–56px
Border: 1px black opacity
Radius: 4–6px
Background: White
Text: Black
```

Focus:

``` text
Border: Red
Outline: subtle red
```

Labels:

``` text
14px
600
Black
```

Placeholder:

``` text
Black at reduced opacity
```

------------------------------------------------------------------------

# 68. Select Fields

Use a clean native/select-style interface.

Example:

``` text
Service Required *
[ Select a service                       ▼ ]
```

Focus:

Red border.

Do not use colorful dropdown backgrounds.

------------------------------------------------------------------------

# 69. Checkbox

Default:

Black outline.

Selected:

Red background + white check.

------------------------------------------------------------------------

# 70. Date Picker

Use a clean calendar UI.

Selected date:

Red.

Today:

Black border.

Other dates:

Black text.

Avoid blue default browser styling.

------------------------------------------------------------------------

# 71. Form Error Messages

Use red.

Example:

``` text
Please enter your phone number.
```

Do not use another error color.

Because red is the only accent color, errors must be clearly
differentiated using:

-   Text
-   Icon
-   Border
-   Position

------------------------------------------------------------------------

# 72. Form Success State

Success should not introduce green.

Use:

``` text
Black icon/check
Red accent
White background
```

Example:

``` text
✓

Request Received

Thanks. Our team will review your
requirements and contact you shortly.
```

------------------------------------------------------------------------

# 73. Loading States

Avoid introducing blue/green spinners.

Use:

-   Black spinner
-   Red progress indicator
-   Skeleton using black opacity

------------------------------------------------------------------------

# 74. Modal / Drawer

If Quick Service Request opens in a modal:

Desktop:

``` text
Overlay: black 55–70% opacity

White modal
Black heading
Red CTA
```

Mobile:

Use bottom sheet or full-screen panel.

The close button must be obvious.

------------------------------------------------------------------------

# 75. Navigation Dropdown

Services dropdown:

``` text
Services
────────────────────────

Residential
House Cleaning
End of Lease

Commercial
Office Cleaning
Medical Centre
School
...

Specialised
Airbnb
Carpet
Window
Pressure
```

Use a structured multi-column mega menu on desktop.

Red highlights the current/hovered service.

------------------------------------------------------------------------

# 76. Service Mega Menu

Recommended structure:

``` text
RESIDENTIAL
House Cleaning
End of Lease

COMMERCIAL
Office
Medical
School
Restaurant
Industrial
Aged Care

SPECIALISED
Airbnb
Builders
Carpet
Window
Pressure

                  View All Services →
```

This improves service discovery.

------------------------------------------------------------------------

# 77. Hover System

Hover effects should be subtle.

Recommended:

``` text
Image scale: 1.02–1.04
Arrow movement: 4–6px
Text: Black → Red
Border: Black → Red
```

Animation duration:

``` text
180–300ms
```

Easing:

``` text
ease-out
```

Do not use:

-   Excessive bouncing
-   Rotation
-   Large scaling
-   Flashing
-   Color cycling

------------------------------------------------------------------------

# 78. Scroll Animation

Use subtle reveal animations.

Recommended:

``` text
opacity: 0 → 1
translateY: 20px → 0
```

Duration:

``` text
500–700ms
```

Stagger:

``` text
80–120ms
```

Animations should support hierarchy, not distract from content.

------------------------------------------------------------------------

# 79. Hero Animation

Optional:

-   Slow image movement
-   Subtle image scale
-   Text reveal

Avoid:

-   Large parallax
-   Excessive particles
-   Rotating text
-   Decorative animation overload

------------------------------------------------------------------------

# 80. Accessibility Motion

Respect:

``` text
prefers-reduced-motion
```

When enabled:

-   Remove large transitions
-   Reduce animation duration
-   Disable unnecessary movement

------------------------------------------------------------------------

# 81. Responsive Breakpoints

Recommended:

``` text
Mobile:       < 640px
Tablet:       640–1023px
Desktop:      1024–1279px
Large Desktop: 1280px+
```

The design should be fluid between breakpoints.

------------------------------------------------------------------------

# 82. Mobile Hero

Mobile hero should become:

``` text
Eyebrow
H1
Description
Primary CTA
Secondary CTA
Trust indicators
Image
```

Do not place large desktop two-column forms beside the hero on mobile.

------------------------------------------------------------------------

# 83. Mobile Cards

Desktop:

``` text
3–4 columns
```

Mobile:

``` text
1 column
```

For simple icon grids:

``` text
2 columns
```

may be used.

Cards should not become too narrow.

------------------------------------------------------------------------

# 84. Mobile Forms

All form fields should be full width.

Use:

``` text
1 field per row
```

except very short paired fields where appropriate.

Buttons:

``` text
Full width
```

Recommended:

``` text
[ Request Service ]
```

rather than small buttons.

------------------------------------------------------------------------

# 85. Mobile Footer

Stack footer columns:

``` text
Logo
Description
Social

Services
Company
Service Areas
Contact
```

Accordion footer navigation may be used if the footer becomes too long.

------------------------------------------------------------------------

# 86. Mobile Sticky Conversion

Always prioritize:

``` text
Call Now
Request Service
```

Do not place more than two primary actions in the mobile sticky bar.

------------------------------------------------------------------------

# 87. Homepage Section Order

Final homepage visual sequence:

``` text
01 Header
02 Hero
03 Trust Strip
04 Cleaning Services
05 Featured Services
06 Why Choose Shaggy
07 Getting Started
08 Cleaning Environments
09 Service Areas
10 Testimonials
11 FAQs
12 Final CTA
13 Footer
```

------------------------------------------------------------------------

# 88. Services Page Section Order

``` text
01 Header
02 Breadcrumb
03 Hero
04 Quick Service Request
05 Service Categories
06 All Services
07 Help Choosing a Service
08 Final CTA
09 Footer
```

------------------------------------------------------------------------

# 89. Category Page Section Order

For Residential / Commercial / Specialised:

``` text
01 Header
02 Breadcrumb
03 Hero
04 Quick Service Request
05 Category Services
06 Why Choose Shaggy
07 What's Included
08 Environments / Industries
09 Process
10 Service Areas
11 Testimonials
12 FAQs
13 Final CTA
14 Footer
```

------------------------------------------------------------------------

# 90. Individual Service Page Order

``` text
01 Header
02 Breadcrumb
03 Hero
04 Quick Service Request
05 Service Overview
06 Who Is It For
07 Ideal For
08 What's Included
09 Benefits
10 Cleaning Process
11 Service Information
12 Why Choose Shaggy
13 Service Areas
14 Testimonials
15 FAQs
16 Related Services
17 Final CTA
18 Footer
```

------------------------------------------------------------------------

# 91. Location Page Order

``` text
01 Header
02 Breadcrumb
03 Hero
04 Quick Service Request
05 About Location
06 Areas Covered
07 Services
08 Why Choose Shaggy
09 How It Works
10 Testimonials
11 Location Information
12 FAQs
13 Final CTA
14 Footer
```

------------------------------------------------------------------------

# 92. About Page Order

``` text
01 Header
02 Breadcrumb
03 Hero
04 Our Story
05 Mission / Vision
06 Who We Are
07 Why Choose Shaggy
08 Values
09 Team
10 Our Approach
11 Service Areas
12 Testimonials
13 Final CTA
14 Footer
```

------------------------------------------------------------------------

# 93. FAQ Page Order

``` text
01 Header
02 Breadcrumb
03 Hero
04 Quick Service Request
05 Search
06 Categories
07 FAQ Accordion
08 Still Have Questions
09 Final CTA
10 Footer
```

------------------------------------------------------------------------

# 94. Blog Page Order

``` text
01 Header
02 Breadcrumb
03 Hero
04 Featured Article
05 Categories
06 Latest Articles
07 Popular Resources
08 Explore Services
09 Service Areas
10 Final CTA
11 Footer
```

------------------------------------------------------------------------

# 95. Contact Page Order

``` text
01 Header
02 Breadcrumb
03 Hero
04 Quick Contact Cards
05 Enquiry + Location
06 FAQs
07 Service Areas
08 Final CTA
09 Footer
```

------------------------------------------------------------------------

# 96. Quote Page Order

``` text
01 Header
02 Breadcrumb
03 Quote Hero
04 Six-Step Form
05 Why Choose Shaggy
06 Need Help
07 Service Areas
08 FAQs
09 What Happens Next
10 Footer
```

------------------------------------------------------------------------

# 97. Visual Hierarchy

Every page should follow:

``` text
H1
↓
Primary CTA
↓
Supporting message
↓
Section H2
↓
Cards / content
↓
Secondary details
```

Do not allow:

-   Body text to look like headings
-   Secondary buttons to compete with primary CTA
-   Every card to have equal visual weight
-   Too many red elements

------------------------------------------------------------------------

# 98. Red Accent Rules

Red is the strongest attention color.

Use red for:

-   Primary CTA
-   Active state
-   Important links
-   Small labels
-   Progress
-   Selected controls
-   Key highlights

Do NOT use red for:

-   Entire page backgrounds
-   Every heading
-   Every icon
-   Every card
-   Large body paragraphs
-   Decorative gradients

------------------------------------------------------------------------

# 99. Black Section Rules

Black can be used to create visual rhythm.

Recommended:

``` text
White
White
Black
White
White
Black
White
```

Avoid:

``` text
Black
Black
Black
Red
Black
```

The website should remain predominantly white.

------------------------------------------------------------------------

# 100. White Space

Whitespace is an important part of the brand.

Do not fill empty space just because it exists.

Whitespace communicates:

-   Premium
-   Clean
-   Professional
-   Confidence
-   Organization

This is especially important for a cleaning company.

------------------------------------------------------------------------

# 101. Editorial Layouts

Some sections should intentionally break the standard card grid.

Examples:

### Split layout

``` text
IMAGE | CONTENT
```

### Large feature

``` text
LARGE IMAGE
       +
CONTENT
```

### Asymmetric

``` text
LARGE CARD | SMALL CARD
          | SMALL CARD
```

This prevents the website from looking repetitive.

------------------------------------------------------------------------

# 102. Avoid Template Feel

Do not repeat:

``` text
Heading
6 cards
Heading
6 cards
Heading
6 cards
```

Instead alternate:

-   Grid
-   Split
-   Full-width
-   Image-led
-   Editorial
-   Dark section
-   Process
-   Testimonials
-   FAQ

------------------------------------------------------------------------

# 103. Photography + UI Balance

The reference designs demonstrate that strong imagery makes service
cards more visually compelling.

For Shaggy:

``` text
Image = emotional / contextual
Typography = informational
Red = action
Black = trust
White = space
```

This should be the core visual formula.

------------------------------------------------------------------------

# 104. Service Imagery Ratio

Recommended:

``` text
Service card image: 16:10 or 4:3
Hero image: 4:3 or 16:10
Team image: 4:5
Blog image: 16:10
Testimonial portrait: 1:1
```

Keep image ratios consistent within each component type.

------------------------------------------------------------------------

# 105. Image Overlay

If text must sit on an image:

Use a black transparent overlay.

Example:

``` css
background: rgba(0,0,0,0.45);
```

Text:

``` text
White
```

CTA:

``` text
Red
```

Do not use gradients unless absolutely necessary for readability.

------------------------------------------------------------------------

# 106. Badges

Small badges may be used.

Example:

``` text
LOCAL & TRUSTED
```

Style:

``` text
White background
Black border
Black text
Small red line/icon
```

Do not overuse badges.

------------------------------------------------------------------------

# 107. Statistics

If genuine business statistics are available:

``` text
15+
Years Experience

2,500+
Happy Customers

3,500+
Projects Completed
```

Do not invent statistics.

If statistics are not confirmed, use trust statements instead.

------------------------------------------------------------------------

# 108. Content Rules

UI copy should be:

-   Clear
-   Direct
-   Short
-   Human
-   Professional
-   Action-oriented

Avoid:

-   Corporate jargon
-   Long paragraphs
-   Excessive adjectives
-   Fake claims
-   Unverified statistics

------------------------------------------------------------------------

# 109. Heading Style

Recommended style:

``` text
Short statement
Supporting statement
```

Example:

**Cleaning made simple.**

Professional cleaning services for homes, businesses and specialised
facilities across Hobart.

------------------------------------------------------------------------

# 110. CTA Copy Rules

Prefer:

-   Get a Free Quote
-   Request Service
-   Call Now
-   View Service
-   View All Services
-   View Locations
-   Contact Us
-   Read Article

Avoid vague:

-   Click Here
-   Learn More About Us
-   Submit
-   Discover More

where a more descriptive CTA is possible.

------------------------------------------------------------------------

# 111. Icon + Text Alignment

For trust cards:

``` text
ICON
TITLE
DESCRIPTION
```

For horizontal information:

``` text
ICON | TITLE + DESCRIPTION
```

Keep icon sizing consistent.

------------------------------------------------------------------------

# 112. Icon Sizes

``` text
Navigation: 18–20px
Button: 18–20px
Trust: 28–36px
Feature card: 32–44px
Process: 32–40px
Large feature: 48–64px
```

------------------------------------------------------------------------

# 113. Divider System

Use subtle black opacity dividers.

``` text
1px rgba(0,0,0,0.10)
```

Avoid visible dividers between every element.

Use spacing first.

------------------------------------------------------------------------

# 114. Tables

If tables are required:

-   White background
-   Black text
-   Black borders
-   Red header/active accent only where useful

Do not introduce gray row backgrounds.

------------------------------------------------------------------------

# 115. Tooltips

Use sparingly.

Tooltip:

``` text
Black background
White text
```

Red can be used for the trigger state.

------------------------------------------------------------------------

# 116. Modal Confirmation

Quote confirmation:

``` text
White modal
Black heading
Red accent icon
Black body text
Red primary button
```

Keep the message short.

------------------------------------------------------------------------

# 117. 404 Page

Design:

``` text
404

Looks like this page needs
a little cleaning up.

The page you're looking for
could not be found.

[Back Home] [Request Service]
```

Use a playful but professional cleaning-related line.

------------------------------------------------------------------------

# 118. Loading / Skeleton

Skeleton:

``` text
White base
Black at very low opacity
```

Do not introduce gray hex values.

Use opacity.

------------------------------------------------------------------------

# 119. Design Tokens

Recommended CSS variables:

``` css
:root {
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-red: #D9232E;

  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;

  --container-max: 1280px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;
  --space-9: 48px;
  --space-10: 64px;
  --space-11: 80px;
  --space-12: 96px;
  --space-13: 120px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  --border: rgba(0,0,0,0.12);

  --transition-fast: 180ms;
  --transition-base: 250ms;
  --transition-slow: 500ms;
}
```

------------------------------------------------------------------------

# 120. Component Naming

Recommended component names:

``` text
Header
Navigation
MobileMenu
Breadcrumbs
Hero
TrustStrip
QuickServiceRequest
QuoteForm
CTAButton
ServiceCard
ServiceCategoryCard
FeatureCard
BenefitCard
ProcessSteps
TestimonialCard
TestimonialCarousel
FAQAccordion
FAQSearch
LocationCard
LocationGrid
BlogCard
FeaturedArticle
TeamCard
ContactCard
MapSection
FinalCTA
Footer
```

------------------------------------------------------------------------

# 121. Design Component States

Every interactive component should define:

``` text
Default
Hover
Focus
Active
Selected
Disabled
Loading
Error
Success
```

Do not design only the default state.

------------------------------------------------------------------------

# 122. Button States

### Default

Red / white.

### Hover

Slight darkening / motion.

### Focus

Visible black/red focus ring.

### Disabled

Black at reduced opacity with white background or controlled opacity.

### Loading

Spinner + loading text.

------------------------------------------------------------------------

# 123. Card States

### Default

White + black border.

### Hover

Red border + subtle movement.

### Selected

Red border + red accent.

### Disabled

Reduced opacity.

------------------------------------------------------------------------

# 124. Accessibility Color Rules

The three-color system must still support readable contrast.

Important text should remain:

``` text
Black on White
White on Black
White on Red
```

Do not use low-opacity black for primary body text.

Opacity is appropriate for:

-   Secondary metadata
-   Placeholder
-   Decorative borders

Not for important information.

------------------------------------------------------------------------

# 125. SEO + Design Relationship

The design should support SEO without making pages look SEO-generated.

Each service page should visually communicate:

``` text
Service
↓
Benefits
↓
What's Included
↓
Process
↓
Location
↓
Trust
↓
FAQs
↓
Request
```

This gives users and search engines clear topical structure.

------------------------------------------------------------------------

# 126. Conversion Psychology

The design should reduce uncertainty through:

``` text
Clear service
+
Local coverage
+
Trust signals
+
Real imagery
+
Process
+
Reviews
+
Simple request
```

The website should never pressure users aggressively.

The goal is clarity and confidence.

------------------------------------------------------------------------

# 127. Global Quick Request Placement

This is a mandatory design rule.

Every major page must provide access to:

**Request Service / Get a Free Quote**

Recommended:

### Header

Always visible.

### Hero

Primary CTA.

### Mid-page

Contextual request CTA where relevant.

### Final section

Strong conversion CTA.

### Mobile

Sticky Request Service action.

### Individual service pages

Service-specific request.

### Location pages

Location-specific request.

### Blog pages

Related-service request.

------------------------------------------------------------------------

# 128. Contextual Quick Request

The form should adapt to the page.

### House Cleaning page

Preselect:

``` text
Service: House Cleaning
```

### Office Cleaning page

Preselect:

``` text
Service: Office Cleaning
Property Type: Office
```

### Hobart page

Preselect:

``` text
Location: Hobart
```

### Commercial Cleaning page

Show commercial services first.

This is important for reducing friction.

------------------------------------------------------------------------

# 129. Design Relationship With system.md

`system.md` defines:

``` text
What the website does
How users move
What pages exist
What functions exist
How forms work
How leads are captured
```

`design.md` defines:

``` text
How the product looks
How components behave visually
How colors are used
How typography works
How spacing works
How responsive layouts behave
How interactions feel
```

Architecture:

``` text
system.md
      ↓
Product / UX
      ↓
design.md
      ↓
Visual UI
      ↓
Development
```

Neither document should duplicate the other unnecessarily.

------------------------------------------------------------------------

# 130. Page Design Rules

Every page must have:

1.  Clear H1
2.  Clear primary action
3.  Relevant imagery
4.  Consistent header
5.  Consistent CTA system
6.  Strong content hierarchy
7.  Appropriate internal links
8.  Relevant trust signals
9.  Quick Service Request access
10. Consistent footer

------------------------------------------------------------------------

# 131. Service Page Rules

Every service page should answer:

``` text
What is this service?
Who is it for?
What's included?
What are the benefits?
How does it work?
How long does it take?
Where is it available?
Why Shaggy?
What do customers say?
What questions do people ask?
How do I request it?
```

The design must make these answers easy to scan.

------------------------------------------------------------------------

# 132. Location Page Rules

Every location page should answer:

``` text
Do you service this area?
What services are available?
Why choose Shaggy here?
What areas/suburbs are covered?
How does the service work?
How can I request a quote?
```

------------------------------------------------------------------------

# 133. Blog Design Rules

Blog pages should not feel disconnected from the service website.

Every article should provide pathways to:

``` text
Related Service
Related Location
Request Service
Contact
```

The blog should support conversion, not only traffic.

------------------------------------------------------------------------

# 134. Final Visual Direction

The final Shaggy Cleaning website should feel like:

``` text
Premium
       +
Clean
       +
Bold
       +
Human
       +
Local
       +
Conversion-focused
```

Visual formula:

``` text
WHITE
████████████████████████

BLACK
Strong typography + structure

RED
Strategic attention + action
```

------------------------------------------------------------------------

# 135. What To Avoid

Do not use:

-   Blue
-   Green
-   Orange
-   Purple
-   Beige
-   Multi-color gradients
-   Excessive shadows
-   Excessive rounded cards
-   Excessive glassmorphism
-   Generic stock-template layouts
-   Huge blocks of text
-   Red everywhere
-   Overloaded hero
-   Too many competing CTAs
-   Decorative animation without purpose
-   Inconsistent icon styles
-   Random border radii
-   Random spacing
-   Different button styles for every page

------------------------------------------------------------------------

# 136. Reference-Inspired, Not Reference-Copied

The supplied reference designs should influence:

-   Layout quality
-   Image usage
-   Service card presentation
-   Trust storytelling
-   Process sections
-   CTA placement
-   Editorial composition
-   Testimonial presentation
-   Conversion-focused structure

But the Shaggy design must remain distinct through:

-   White / Black / Red color system
-   Shaggy typography
-   Shaggy content
-   Shaggy photography
-   Shaggy service architecture
-   Shaggy conversion system

------------------------------------------------------------------------

# 137. Final Design Checklist

## Brand

-   [ ] White is dominant
-   [ ] Black creates hierarchy
-   [ ] Red is used strategically
-   [ ] No unrelated UI colors
-   [ ] Logo is consistent

## Typography

-   [ ] H1 is strong
-   [ ] H2 hierarchy is clear
-   [ ] Body text is readable
-   [ ] Font weights are consistent
-   [ ] Line lengths are controlled

## Layout

-   [ ] Consistent container
-   [ ] Consistent grid
-   [ ] Consistent spacing
-   [ ] Strong whitespace
-   [ ] Clear visual rhythm

## Components

-   [ ] Header
-   [ ] Hero
-   [ ] Quick Service Request
-   [ ] Buttons
-   [ ] Service cards
-   [ ] Benefit cards
-   [ ] Process
-   [ ] Testimonials
-   [ ] FAQs
-   [ ] Location cards
-   [ ] Blog cards
-   [ ] Forms
-   [ ] CTA
-   [ ] Footer

## Responsive

-   [ ] Desktop
-   [ ] Tablet
-   [ ] Mobile
-   [ ] Mobile sticky CTA
-   [ ] Mobile form usability
-   [ ] Mobile navigation

## Interaction

-   [ ] Hover
-   [ ] Focus
-   [ ] Active
-   [ ] Loading
-   [ ] Error
-   [ ] Success
-   [ ] Reduced motion

## Conversion

-   [ ] Quick Request available on every major page
-   [ ] Header CTA
-   [ ] Hero CTA
-   [ ] Contextual CTA
-   [ ] Final CTA
-   [ ] Call Now
-   [ ] Mobile sticky CTA

------------------------------------------------------------------------

# 138. Final Design Statement

The Shaggy Cleaning website is designed around one visual idea:

> **A clean interface should feel as professional as the cleaning
> service itself.**

White creates the clean environment.

Black creates trust, structure and authority.

Red creates attention and action.

The supplied reference websites provide inspiration for modern
service-business composition, but Shaggy Cleaning should have its own
unmistakable visual identity.

The final interface should therefore be:

**Clean. Bold. Local. Premium. Human. Conversion-focused.**

And throughout the entire product:

> **Users should always have an easy, visible path to request a cleaning
> service.**
