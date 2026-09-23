# Shaggy Cleaning Website --- System Specification

**Document:** `system.md`\
**Product:** Shaggy Cleaning Services Website\
**Primary Location:** Hobart, Tasmania, Australia\
**Product Type:** Service Business Website + Lead Generation System\
**Primary Business Goal:** Generate qualified cleaning service enquiries
and convert website visitors into potential customers.

------------------------------------------------------------------------

## 1. Product Overview

The Shaggy Cleaning website is a lead-generation-focused website for a
professional cleaning company serving Hobart and surrounding areas.

The website must do more than present company information. It must help
visitors:

1.  Understand what Shaggy Cleaning offers.
2.  Find the correct cleaning service quickly.
3.  Confirm whether their location is covered.
4.  Build trust before making contact.
5.  Request a quote/service easily.
6.  Contact the business by phone or email.
7.  Find useful cleaning information through FAQs and Resources.

### Core Product Principle

> **Every page should help the user move toward a service enquiry.**

The website should therefore maintain a consistent conversion system
throughout the entire experience.

------------------------------------------------------------------------

# 2. Primary Conversion Strategy

## 2.1 Global Quick Service Request

A **Quick Service Request** form must be available throughout the
website.

This is a key product requirement.

The user should never have to return to the homepage to request a
service.

### Global availability

The Quick Service Request should be accessible on:

-   Homepage
-   Services
-   Residential Cleaning
-   Commercial Cleaning
-   Specialised Cleaning
-   Individual Service Pages
-   Locations
-   Individual Location Pages
-   About Us
-   FAQs
-   Blog / Resources
-   Individual Blog Articles
-   Contact
-   Other future landing pages

### Recommended placement

Every page should provide at least one highly visible quick-request
entry point.

Recommended locations:

1.  Header CTA
2.  Hero section
3.  Relevant mid-page CTA
4.  Final CTA section
5.  Mobile sticky CTA

The header should consistently contain:

-   Call Now
-   Get a Free Quote / Request Service

### Quick Service Request behavior

The global form should be short and easy to complete.

Recommended fields:

-   Service Required
-   Property Type
-   Location / Suburb
-   Preferred Date
-   Name
-   Phone
-   Email
-   Optional Message

The exact fields can change dynamically according to the selected
service.

Example:

**Service Required** - House Cleaning - End of Lease Cleaning - Office
Cleaning - Commercial Cleaning - Medical Centre Cleaning - Carpet
Cleaning - Window Cleaning - Pressure Cleaning - Airbnb Cleaning -
Builders Cleaning - Other

### Quick form principle

Do not make the global form unnecessarily long.

The purpose is to capture the lead quickly.

For users who require a more detailed quote, the Quick Service Request
can continue into the full **Get a Free Quote** flow.

------------------------------------------------------------------------

# 3. Full Quote System

The dedicated **Get a Free Quote** page contains the complete multi-step
enquiry process.

## Step 1 --- Your Details

Fields:

-   First Name
-   Last Name
-   Email Address
-   Phone Number

## Step 2 --- Property Details

Fields:

-   Property Address
-   Property Type

Possible property types:

-   House
-   Apartment
-   Office
-   Commercial Building
-   Medical Centre
-   School
-   Restaurant
-   Gym
-   Industrial Facility
-   Aged Care
-   Other

## Step 3 --- Cleaning Service

Field:

-   Cleaning Service

The selected service should influence later fields where applicable.

## Step 4 --- Additional Information

Field:

-   Additional Requirements / Message

Examples:

-   Property size
-   Special cleaning requirements
-   Areas requiring extra attention
-   Access information
-   Special requests

## Step 5 --- Preferred Date & Time

Fields:

-   Preferred Date
-   Preferred Time
-   Cleaning Frequency

Possible frequency:

-   One-off
-   Weekly
-   Fortnightly
-   Monthly
-   Other

## Step 6 --- Review & Submit

The user should be able to review the entered information before
submitting.

Required:

-   Consent checkbox
-   Back
-   Review & Submit

## After submission

Display a clear confirmation state:

-   Request received
-   Reference/request number if implemented
-   What happens next
-   Expected contact method
-   Phone/email alternatives

------------------------------------------------------------------------

# 4. Product Goals

## 4.1 Business Goals

-   Generate qualified cleaning service enquiries.
-   Increase Get a Free Quote submissions.
-   Increase phone enquiries.
-   Increase enquiries from individual service pages.
-   Reduce abandoned enquiry journeys.
-   Identify high-performing services.
-   Give high-value services appropriate visibility.
-   Support local SEO across Hobart and surrounding areas.

## 4.2 User Goals

Users should be able to:

-   Understand Shaggy Cleaning quickly.
-   Find a suitable cleaning service.
-   Understand what is included.
-   Understand who the service is for.
-   Check service areas.
-   Understand the cleaning process.
-   Read reviews and trust information.
-   Find answers through FAQs.
-   Request a quote without friction.
-   Contact the team directly.

------------------------------------------------------------------------

# 5. Sitemap

``` text
HOME
│
├── SERVICES
│   │
│   ├── Residential Cleaning
│   │   ├── House Cleaning
│   │   └── End of Lease Cleaning
│   │
│   ├── Commercial Cleaning
│   │   ├── Office Cleaning
│   │   ├── Commercial Building Cleaning
│   │   ├── Gym Cleaning
│   │   ├── Medical Centre Cleaning
│   │   ├── School Cleaning
│   │   ├── Restaurant Cleaning
│   │   ├── Industrial Cleaning
│   │   └── Aged Care Cleaning
│   │
│   └── Specialised Cleaning
│       ├── Airbnb Cleaning
│       ├── Builders Cleaning
│       ├── Steam Carpet Cleaning
│       ├── Window Cleaning
│       └── Pressure Cleaning
│
├── LOCATIONS
│   ├── Hobart
│   ├── Greater Hobart
│   ├── Northern Suburbs
│   └── Other Service Areas
│
├── ABOUT US
│
├── FAQs
│
├── BLOG / RESOURCES
│   ├── Cleaning Tips
│   ├── Cleaning Guides
│   ├── Service Guides
│   └── Local Cleaning Guides
│
├── CONTACT
│
└── GET A FREE QUOTE
```

------------------------------------------------------------------------

# 6. Global Navigation

## Desktop Header

### Left

-   Shaggy Cleaning Logo

### Main Navigation

-   Home
-   Services
-   Locations
-   About Us
-   FAQs
-   Blog / Resources
-   Contact

### Primary Actions

-   Call Now
-   Get a Free Quote

## Mobile Navigation

Mobile header should contain:

-   Logo
-   Menu button

The mobile navigation must preserve access to:

-   Services
-   Locations
-   About
-   FAQs
-   Blog
-   Contact
-   Get a Free Quote
-   Call Now

A sticky mobile action bar is recommended:

``` text
[ Call Now ] [ Request Service ]
```

------------------------------------------------------------------------

# 7. Global Page Structure

Every major page should follow a consistent product structure.

``` text
Header
↓
Breadcrumb
↓
Hero
↓
Primary CTA / Quick Service Request
↓
Main Page Content
↓
Relevant Trust / Proof
↓
Service Areas
↓
FAQs where relevant
↓
Final Conversion CTA
↓
Footer
```

Not every page needs every section, but the conversion pattern should
remain consistent.

------------------------------------------------------------------------

# 8. Homepage

## Purpose

The homepage is the primary acquisition and conversion page.

## Sections

### 8.1 Hero

Content:

-   Primary headline
-   Supporting description
-   Get a Free Quote
-   Call Now
-   Trust indicators
-   Hero visual
-   Quick Service Request form

The form should be visible above the fold where practical.

### 8.2 Trust Strip

Possible trust points:

-   Professional Team
-   Reliable Service
-   Flexible Scheduling
-   Local Service
-   Quality Focused

### 8.3 Cleaning Services

Categories:

-   Residential Cleaning
-   Commercial Cleaning
-   Specialised Cleaning

### 8.4 Featured Services

Examples:

-   Office Cleaning
-   Medical Centre Cleaning
-   House Cleaning

### 8.5 Why Choose Shaggy

Six-value system:

-   Reliable Service
-   Professional Team
-   Consistent Quality
-   Flexible Scheduling
-   Clear Communication
-   Tailored Cleaning

### 8.6 Getting Started

Four steps:

1.  Request a Quote
2.  Tell Us Your Requirements
3.  Receive Your Quote
4.  Schedule Your Cleaning

### 8.7 Cleaning Environments

Examples:

-   Offices
-   Medical Centres
-   Schools
-   Restaurants
-   Gyms
-   Industrial Facilities
-   Aged Care
-   Residential Properties

### 8.8 Service Areas

Highlight:

-   Hobart
-   Surrounding Areas

Link to Locations.

### 8.9 Testimonials

Customer reviews with:

-   Rating
-   Review
-   Customer name
-   Location / role where appropriate

### 8.10 FAQs

High-value questions with link to full FAQs.

### 8.11 Final CTA

Primary:

-   Get a Free Quote

Secondary:

-   Call Now

------------------------------------------------------------------------

# 9. Services Overview

## Purpose

Help users understand the complete service offering and quickly choose a
category or individual service.

## Sections

1.  Hero
2.  Explore Our Services
3.  Residential Cleaning
4.  Commercial Cleaning
5.  Specialised Cleaning
6.  All Cleaning Services
7.  Need Help Choosing a Service?
8.  Footer

## Service Card Requirements

Each service card should contain:

-   Image
-   Service name
-   Short description
-   View Service CTA

------------------------------------------------------------------------

# 10. Residential Cleaning

## Services

-   House Cleaning
-   End of Lease Cleaning

## Sections

1.  Hero
2.  Residential Services
3.  Why Residential Customers Choose Shaggy
4.  What's Included
5.  Getting Started
6.  Service Areas
7.  Testimonials
8.  FAQs
9.  Final CTA

------------------------------------------------------------------------

# 11. Commercial Cleaning

## Services

-   Office Cleaning
-   Commercial Building Cleaning
-   Gym Cleaning
-   Medical Centre Cleaning
-   School Cleaning
-   Restaurant Cleaning
-   Industrial Cleaning
-   Aged Care Cleaning

## Sections

1.  Hero
2.  Commercial Services
3.  Why Businesses Choose Shaggy
4.  What's Included
5.  Industries We Serve
6.  Getting Started
7.  Service Areas
8.  Testimonials
9.  FAQs
10. Final CTA

------------------------------------------------------------------------

# 12. Specialised Cleaning

## Services

-   Airbnb Cleaning
-   Builders Cleaning
-   Steam Carpet Cleaning
-   Window Cleaning
-   Pressure Cleaning

## Sections

1.  Hero
2.  Specialised Services
3.  Why Choose Shaggy
4.  What's Included
5.  Common Environments We Clean
6.  Getting Started
7.  Service Areas
8.  Testimonials
9.  FAQs
10. Final CTA

------------------------------------------------------------------------

# 13. Individual Service Page

Example:

`/services/residential/house-cleaning`

## Purpose

Provide enough information for a user to understand the service and
request it without leaving the page.

## Sections

1.  Breadcrumb
2.  Service Hero
3.  Quick Service Request
4.  Service Overview
5.  Who Is It For?
6.  Ideal For
7.  What's Included
8.  Key Benefits
9.  Cleaning Process
10. Service Information
11. Why Choose Shaggy
12. Service Areas
13. Customer Reviews
14. FAQs
15. Related Services
16. Final CTA
17. Footer

## Service Information

May include:

-   Standard duration
-   Frequency options
-   Preparation requirements
-   Access requirements
-   Other relevant information

------------------------------------------------------------------------

# 14. Location System

## Location Structure

``` text
Locations
├── Hobart
├── Greater Hobart
├── Northern Suburbs
└── Other Service Areas
```

## Location Page

Example:

`/locations/hobart`

Sections:

1.  Hero
2.  About Cleaning Services in Hobart
3.  Areas We Cover
4.  Cleaning Services in Hobart
5.  Why Choose Shaggy in Hobart
6.  How It Works
7.  Customer Reviews
8.  Location Information
9.  FAQs
10. Final CTA

## Location Page Conversion

A location visitor should be able to request a quote without navigating
elsewhere.

The Quick Service Request should automatically preselect the current
location when appropriate.

------------------------------------------------------------------------

# 15. About Us

## Sections

1.  Hero
2.  Our Story
3.  Mission
4.  Vision
5.  Who We Are
6.  Team
7.  Why Choose Shaggy
8.  Our Values
9.  Our Approach
10. Service Areas
11. Customer Reviews
12. Final CTA

## Values

-   Quality
-   Reliability
-   Professionalism
-   Customer Focus
-   Integrity

------------------------------------------------------------------------

# 16. FAQs

## Purpose

Reduce uncertainty and support both users and SEO.

## Functions

-   Search questions
-   Browse categories
-   Accordion answers
-   Link to relevant services
-   Link to contact
-   Link to quote form

## Categories

-   General FAQs
-   Service FAQs
-   Pricing & Quotes
-   Booking & Scheduling

## FAQ behavior

Only the selected question should expand unless a different accordion
behavior is intentionally implemented.

------------------------------------------------------------------------

# 17. Blog / Resources

## Categories

-   Cleaning Tips
-   Cleaning Guides
-   Service Guides
-   Local Cleaning Guides

## Blog Overview

Sections:

1.  Hero
2.  Featured Article
3.  More from Blog
4.  Browse by Category
5.  Latest Articles
6.  Popular Resources
7.  Explore Services
8.  Service Areas
9.  Final CTA

## Individual Article

Recommended structure:

``` text
Breadcrumb
Title
Category
Published date
Featured image
Article content
Related articles
Related service
Related location
Quick Service Request
Final CTA
```

------------------------------------------------------------------------

# 18. Contact Page

## Sections

1.  Hero
2.  Contact CTA
3.  Phone
4.  Email
5.  Service Area
6.  Enquiry Form
7.  Location / Map
8.  Contact Details
9.  FAQs
10. Service Areas
11. Final CTA

## Contact Form

Fields:

-   First Name
-   Last Name
-   Email
-   Phone
-   Service Required
-   Property Address
-   Message
-   Consent

------------------------------------------------------------------------

# 19. Get a Free Quote Page

This page is the full lead-capture workflow.

See the six-step Quote System defined in Section 3.

The page should also contain supporting trust information:

-   Fast & Free Quotes
-   No Obligation
-   Trusted & Local
-   Transparent Pricing
-   Professional & Friendly

And support blocks:

-   Need Help?
-   Service Areas
-   FAQs

------------------------------------------------------------------------

# 20. User Flows

## 20.1 General Visitor Flow

``` text
Landing Page
↓
Understand Shaggy
↓
Explore Service
↓
Check Trust
↓
Check Location
↓
Request Quote
↓
Submit Enquiry
↓
Confirmation
```

## 20.2 Service Discovery Flow

``` text
Home
↓
Services
↓
Service Category
↓
Individual Service
↓
Quick Service Request
↓
Submit
```

## 20.3 Location Discovery Flow

``` text
Home
↓
Locations
↓
Hobart / Area
↓
Available Services
↓
Quick Service Request
↓
Submit
```

## 20.4 Direct Quote Flow

``` text
Any Page
↓
Get a Free Quote
↓
Your Details
↓
Property Details
↓
Service
↓
Requirements
↓
Date & Time
↓
Review
↓
Submit
↓
Confirmation
```

## 20.5 Phone Conversion Flow

``` text
Any Page
↓
Call Now
↓
Phone Call
```

## 20.6 Blog Conversion Flow

``` text
Google / Social
↓
Blog Article
↓
Related Service
↓
Service Page
↓
Quick Service Request
↓
Lead
```

------------------------------------------------------------------------

# 21. User Journeys

## Journey A --- Homeowner

### User need

Find reliable house cleaning.

### Journey

``` text
Homepage
→ Residential Cleaning
→ House Cleaning
→ Understand service
→ Read benefits/reviews
→ Check Hobart coverage
→ Request Service
→ Submit
```

### Conversion objective

Quote request.

------------------------------------------------------------------------

## Journey B --- Business Owner

### User need

Find professional office cleaning.

### Journey

``` text
Homepage / Google
→ Commercial Cleaning
→ Office Cleaning
→ Review inclusions
→ Review process
→ Check service area
→ Request Quote
→ Submit
```

### Conversion objective

Commercial enquiry.

------------------------------------------------------------------------

## Journey C --- Local SEO Visitor

### User need

Find a cleaning company in Hobart.

### Journey

``` text
Google
→ Hobart Location Page
→ Services
→ Relevant Service
→ Quote Request
```

------------------------------------------------------------------------

## Journey D --- Information-Seeking Visitor

### User need

Understand a cleaning process or solve a cleaning problem.

### Journey

``` text
Google
→ Blog Article
→ Related Service
→ Quick Service Request
```

------------------------------------------------------------------------

# 22. Core Website Functions

## Navigation

-   Desktop navigation
-   Mobile navigation
-   Dropdown service navigation
-   Breadcrumbs
-   Internal links
-   Sticky header

## Conversion

-   Quick Service Request
-   Full Quote Form
-   Contact Form
-   Call Now
-   Email CTA
-   Final CTA sections
-   Mobile sticky conversion bar

## Content

-   Service pages
-   Location pages
-   FAQ system
-   Blog
-   Testimonials
-   Team profiles
-   Service cards

## Search

-   FAQ search
-   Blog/category filtering if required

## Forms

All forms must support:

-   Validation
-   Required fields
-   Error states
-   Loading state
-   Success state
-   Failure state
-   Spam protection
-   Consent
-   Email notification

------------------------------------------------------------------------

# 23. Dynamic Quick Request System

The Quick Service Request should be a reusable website component.

## Component states

``` text
Default
↓
User selects service
↓
Dynamic fields appear
↓
User enters information
↓
Validation
↓
Submit
↓
Loading
↓
Success / Error
```

## Context-aware behavior

If opened from:

`House Cleaning`

Then:

``` text
Service = House Cleaning
```

If opened from:

`/locations/hobart`

Then:

``` text
Location = Hobart
```

If opened from:

`Commercial Cleaning`

Then commercial services should be prioritized.

This reduces user effort and improves conversion flow.

------------------------------------------------------------------------

# 24. Form Validation

Required fields should be clearly identified.

Examples:

-   Valid email
-   Valid phone
-   Required service
-   Required name
-   Required consent
-   Required location where applicable

Error messages should be human-readable.

Example:

Bad:

`Invalid input`

Good:

`Please enter a valid phone number.`

------------------------------------------------------------------------

# 25. Lead Management

Every successful enquiry should create a structured lead.

Recommended lead data:

``` text
Lead ID
Name
Email
Phone
Service
Property Type
Address / Location
Preferred Date
Preferred Time
Frequency
Additional Requirements
Source Page
Source URL
UTM Source
UTM Medium
UTM Campaign
Submission Date
Status
```

## Lead statuses

``` text
New
Contacted
Qualified
Quote Sent
Booked
Completed
Lost
```

------------------------------------------------------------------------

# 26. Analytics

Track major conversion events.

## Events

-   `quote_cta_click`
-   `call_cta_click`
-   `quick_form_open`
-   `quick_form_start`
-   `quick_form_step_complete`
-   `quick_form_submit`
-   `quote_form_start`
-   `quote_form_submit`
-   `contact_form_submit`
-   `service_view`
-   `location_view`
-   `faq_open`
-   `blog_article_view`

## Important conversion metrics

-   Quote submissions
-   Phone clicks
-   Contact submissions
-   Quote-form completion rate
-   Form abandonment
-   Service page conversions
-   Location page conversions
-   Traffic by service
-   Traffic by location
-   Blog → service conversions

------------------------------------------------------------------------

# 27. SEO System

## Primary location

Hobart, Tasmania.

## Primary keywords

-   Commercial cleaning Hobart
-   Commercial cleaners Hobart
-   Cleaning services Hobart
-   Professional cleaners Hobart
-   Professional cleaning Hobart
-   Business cleaning services Hobart

## Service keywords

-   Office cleaning Hobart
-   Industrial cleaning Hobart
-   School cleaning Hobart
-   Restaurant cleaning Hobart
-   Medical cleaning Hobart
-   Retail cleaning Hobart
-   Carpet cleaning Hobart
-   Window cleaning Hobart
-   Deep cleaning Hobart

## Long-tail examples

-   Best commercial cleaning service for offices in Hobart
-   Office cleaning company for small businesses Hobart
-   After hours commercial cleaning Hobart
-   Professional office cleaners Hobart
-   Cleaning company for business Hobart
-   Weekly office cleaning Hobart
-   Commercial cleaning for restaurants Hobart
-   Cleaning services for medical centres Hobart

## Technical SEO

Every indexable page should have:

-   Unique title
-   Unique meta description
-   One clear H1
-   Logical H2/H3 structure
-   Canonical URL
-   SEO-friendly URL
-   Image alt text
-   Internal links
-   Structured data where appropriate
-   XML sitemap
-   Robots.txt
-   Open Graph metadata
-   Social sharing metadata

------------------------------------------------------------------------

# 28. Internal Linking System

Internal linking should connect:

``` text
Services
↕
Individual Services
↕
Locations
↕
Blog Articles
↕
FAQs
↕
Quote
```

Examples:

House Cleaning → Hobart → House Cleaning Quote

Office Cleaning → Commercial Cleaning → Hobart → Quote

Blog Article → Related Service → Quote

FAQ → Relevant Service → Quote

------------------------------------------------------------------------

# 29. Trust System

Trust should appear throughout the website, not only on the About page.

Possible trust signals:

-   Local business positioning
-   Professional team
-   Insurance
-   Customer reviews
-   Quality standards
-   Eco-friendly products where applicable
-   Clear communication
-   Transparent pricing messaging
-   Service process
-   Service areas
-   Business contact information

Only claims that are confirmed by the business should be published.

------------------------------------------------------------------------

# 30. Testimonials

Each testimonial should support:

-   Customer quote
-   Customer name
-   Location or customer type where approved
-   Rating where genuine

Do not use placeholder reviews in the production website.

------------------------------------------------------------------------

# 31. Service Area System

The service-area component should be reusable.

Example:

``` text
Service Areas
Hobart
Kingston
Glenorchy
Sandy Bay
Battery Point
Dynnyrne
Rosny
New Town
Bellerive
Moonah
Howrah
Surrounding Suburbs
```

The actual published coverage should be confirmed by the business before
launch.

------------------------------------------------------------------------

# 32. CMS / Content Management

The system should ideally allow the business team to manage:

-   Services
-   Service categories
-   Locations
-   FAQs
-   Blog posts
-   Testimonials
-   Team members
-   Service areas
-   Contact information

## Recommended content model

### Service

``` text
id
name
slug
category
shortDescription
description
heroImage
includedItems
benefits
process
serviceInformation
serviceAreas
faqs
relatedServices
seo
```

### Location

``` text
id
name
slug
description
heroImage
areasCovered
services
reviews
faqs
seo
```

### Blog

``` text
id
title
slug
category
excerpt
content
featuredImage
author
publishedDate
relatedServices
relatedLocations
seo
```

### FAQ

``` text
id
question
answer
category
relatedService
relatedLocation
order
```

------------------------------------------------------------------------

# 33. Responsive Design

The website must work across:

-   Large desktop
-   Desktop
-   Tablet
-   Mobile

## Mobile priorities

On mobile:

1.  Logo
2.  Menu
3.  Call
4.  Request Service
5.  Clear H1
6.  Short content blocks
7.  Easy form interaction

Forms should use appropriate mobile input types.

------------------------------------------------------------------------

# 34. Accessibility

The website should follow accessible web practices.

Requirements:

-   Keyboard navigation
-   Visible focus states
-   Proper heading hierarchy
-   Semantic HTML
-   Accessible form labels
-   Accessible error messages
-   Sufficient text contrast
-   Alt text for meaningful images
-   Decorative images marked appropriately
-   Buttons must have clear labels
-   Accordion controls must be keyboard accessible

------------------------------------------------------------------------

# 35. Performance

The website should prioritize fast loading.

Requirements:

-   Optimized images
-   Modern image formats
-   Lazy loading below the fold
-   Minified assets
-   Minimal unnecessary JavaScript
-   Efficient font loading
-   Avoid oversized hero media
-   Responsive images
-   Avoid layout shift

------------------------------------------------------------------------

# 36. Security

Forms and lead data must be protected.

Requirements:

-   HTTPS
-   Server-side validation
-   Client-side validation
-   Spam protection
-   Rate limiting where applicable
-   Secure email handling
-   No sensitive data in URLs
-   Secure API endpoints
-   Environment variables for secrets
-   Input sanitization

------------------------------------------------------------------------

# 37. Form Security

The enquiry system should include:

-   Honeypot or equivalent spam protection
-   CAPTCHA where necessary
-   Rate limiting
-   Server-side validation
-   Sanitization
-   Duplicate submission prevention
-   Clear privacy/consent handling

------------------------------------------------------------------------

# 38. Error States

Every important interaction needs a defined state.

## Form

``` text
Idle
Loading
Success
Validation Error
Server Error
```

## API

``` text
Success
Unauthorized
Validation Error
Not Found
Server Error
```

## Content

If content is unavailable:

-   Show useful fallback
-   Do not show broken layouts
-   Provide navigation back to relevant content

------------------------------------------------------------------------

# 39. Empty States

Examples:

### Blog

`No articles available in this category yet.`

### Search

`No matching questions found. Try another search term or contact our team.`

### Service

`This service is currently being updated. Contact us for assistance.`

------------------------------------------------------------------------

# 40. CTA System

Primary CTA:

**Get a Free Quote**

Secondary CTA:

**Call Now**

Contextual CTA:

**Request This Service**

Other:

-   View Service
-   View All Services
-   View All Locations
-   View FAQs
-   Read Article
-   Contact Us

CTA wording should remain consistent throughout the website.

------------------------------------------------------------------------

# 41. Footer System

Every major page should have the same footer structure.

## Column 1

Shaggy Cleaning:

-   Logo
-   Short company description
-   Social links

## Column 2

Services:

-   House Cleaning
-   End of Lease Cleaning
-   Office Cleaning
-   Commercial Cleaning
-   Specialised Cleaning
-   View All Services

## Column 3

Company:

-   About Us
-   Why Choose Shaggy
-   Our Team
-   Our Values
-   FAQs
-   Blog / Resources
-   Contact

## Column 4

Service Areas:

-   Hobart
-   Surrounding Areas
-   View All Locations

## Column 5

Contact:

-   Phone
-   Email
-   Address / service location

Bottom:

-   Copyright
-   Privacy Policy
-   Terms & Conditions

------------------------------------------------------------------------

# 42. Design System Relationship

`system.md` defines:

-   Product architecture
-   Pages
-   Sitemap
-   User flows
-   User journeys
-   Features
-   Functions
-   Data
-   Conversion logic
-   SEO
-   Technical behavior

`design.md` should define:

-   Colors
-   Typography
-   Spacing
-   Grid
-   Components
-   Buttons
-   Cards
-   Forms
-   Icons
-   Imagery
-   Responsive breakpoints
-   Animation
-   Visual style

The two documents should work together.

``` text
system.md
    ↓
Product + UX + Function
    ↓
design.md
    ↓
Visual System
    ↓
Development
```

------------------------------------------------------------------------

# 43. Recommended Component Architecture

Reusable components should include:

``` text
Header
MobileNavigation
Breadcrumb
Hero
QuickServiceRequest
QuoteForm
CTAButton
TrustStrip
ServiceCard
ServiceCategoryCard
BenefitCard
ProcessSteps
TestimonialCard
FAQAccordion
FAQSearch
LocationCard
LocationGrid
BlogCard
FeaturedArticle
TeamCard
ContactCard
Map
FinalCTA
Footer
```

------------------------------------------------------------------------

# 44. Reusable Conversion Components

The following should be reusable across the entire application:

### `QuickServiceRequest`

Used globally.

### `FinalCTA`

Used at the bottom of pages.

### `CallNowButton`

Used in header, hero, CTA and mobile.

### `GetQuoteButton`

Used throughout the site.

### `ServiceRequestModal`

Optional modal version of the Quick Service Request.

------------------------------------------------------------------------

# 45. Recommended Quick Request UX

There are two levels of enquiry.

## Level 1 --- Quick Request

Short, low-friction form available everywhere.

``` text
What service do you need?
↓
Where are you located?
↓
When do you need it?
↓
Contact details
↓
Submit
```

## Level 2 --- Full Quote

Detailed six-step form.

``` text
Your Details
↓
Property Details
↓
Service
↓
Requirements
↓
Date & Time
↓
Review & Submit
```

This creates a balance between **conversion speed** and **qualified lead
information**.

------------------------------------------------------------------------

# 46. Global Conversion Architecture

``` text
                    WEBSITE
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     Call Now     Quick Request    Full Quote
        │              │              │
        ↓              ↓              ↓
      Phone          Lead           Lead
                       │
                       ↓
                Lead Management
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     Contacted      Quote Sent      Booked
```

------------------------------------------------------------------------

# 47. Page-to-Conversion Matrix

  Page                 Primary Conversion        Secondary Conversion
  -------------------- ------------------------- ----------------------
  Home                 Quick Request             Call Now
  Services             Request Service           View Service
  Residential          Request Service           Call Now
  Commercial           Request Quote             Call Now
  Specialised          Request Quote             Call Now
  Individual Service   Request This Service      Call Now
  Location             Request Service           Call Now
  About                Get Free Quote            Contact
  FAQs                 Get Free Quote            Contact
  Blog                 Related Service Request   Call Now
  Contact              Send Enquiry              Call Now
  Quote                Submit Quote              Call Now

------------------------------------------------------------------------

# 48. URL Structure

Recommended structure:

``` text
/
 /services
 /services/residential
 /services/residential/house-cleaning
 /services/residential/end-of-lease-cleaning

 /services/commercial
 /services/commercial/office-cleaning
 /services/commercial/commercial-building-cleaning
 /services/commercial/gym-cleaning
 /services/commercial/medical-centre-cleaning
 /services/commercial/school-cleaning
 /services/commercial/restaurant-cleaning
 /services/commercial/industrial-cleaning
 /services/commercial/aged-care-cleaning

 /services/specialised
 /services/specialised/airbnb-cleaning
 /services/specialised/builders-cleaning
 /services/specialised/steam-carpet-cleaning
 /services/specialised/window-cleaning
 /services/specialised/pressure-cleaning

 /locations
 /locations/hobart

 /about-us
 /faqs
 /blog
 /blog/[article-slug]
 /contact
 /get-a-free-quote
```

------------------------------------------------------------------------

# 49. Technical Product Requirements

The implementation should support:

-   Responsive frontend
-   Reusable components
-   Dynamic service content
-   Dynamic location content
-   Dynamic FAQs
-   Dynamic blog content
-   Form API
-   Email notification
-   Analytics
-   SEO metadata
-   Sitemap generation
-   Robots configuration
-   Error handling
-   Secure environment variables
-   Production deployment

------------------------------------------------------------------------

# 50. Production Checklist

## Content

-   [ ] All services confirmed
-   [ ] All service descriptions confirmed
-   [ ] All locations confirmed
-   [ ] Business information confirmed
-   [ ] Phone confirmed
-   [ ] Email confirmed
-   [ ] Testimonials approved
-   [ ] Team information approved
-   [ ] Images approved

## Forms

-   [ ] Quick Request works
-   [ ] Full Quote works
-   [ ] Contact form works
-   [ ] Email notifications work
-   [ ] Validation works
-   [ ] Spam protection works
-   [ ] Success state works
-   [ ] Error state works
-   [ ] Mobile forms tested

## SEO

-   [ ] Titles
-   [ ] Meta descriptions
-   [ ] H1s
-   [ ] URLs
-   [ ] Canonicals
-   [ ] Alt text
-   [ ] Internal links
-   [ ] Sitemap
-   [ ] Robots
-   [ ] Structured data
-   [ ] Open Graph

## UX

-   [ ] Navigation tested
-   [ ] Service discovery tested
-   [ ] Location discovery tested
-   [ ] Quote flow tested
-   [ ] Mobile navigation tested
-   [ ] CTA consistency checked
-   [ ] Accessibility checked

## Performance

-   [ ] Images optimized
-   [ ] Mobile performance tested
-   [ ] Desktop performance tested
-   [ ] Core Web Vitals checked
-   [ ] No major layout shifts
-   [ ] No broken links

------------------------------------------------------------------------

# 51. Product Success Metrics

The website should ultimately be measured by business outcomes.

### Primary KPIs

-   Qualified enquiries
-   Quote submissions
-   Phone enquiries
-   Service-page enquiries
-   Location-page enquiries
-   Quote completion rate

### Secondary KPIs

-   CTA click-through rate
-   Form start rate
-   Form abandonment rate
-   Service page engagement
-   Location page engagement
-   Blog-to-service conversion
-   Organic traffic
-   Organic enquiry volume

------------------------------------------------------------------------

# 52. Final Product Principle

The Shaggy Cleaning website should not behave like a static company
brochure.

It should behave like a **service discovery and lead-generation
product**.

The complete experience should follow:

``` text
DISCOVER
   ↓
UNDERSTAND
   ↓
TRUST
   ↓
CHOOSE SERVICE
   ↓
CHECK LOCATION
   ↓
REQUEST SERVICE
   ↓
SUBMIT LEAD
   ↓
FOLLOW-UP
```

And the most important global rule is:

> **A user should be able to request a cleaning service from any page
> without having to restart their journey.**
