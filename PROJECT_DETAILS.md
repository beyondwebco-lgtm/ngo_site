# Anand Group Charitable Trust — Full Project Documentation & Context Details

> **Project Name:** Anand Group Charitable Trust Web Platform  
> **Repository:** `ngo_site`  
> **Organization:** Anand Group Charitable Trust  
> **Tagline:** *Empowering Lives. Building Hope.*  
> **Core Mission:** Grassroots social transformation across education, healthcare, environmental awareness, cultural heritage, elder dignity, and specialized ashram care in India.  
> **Date Generated:** November 2026  
> **Technical Stack:** Next.js (App Router v16+), React 19, Vanilla CSS3 (Premium Yellow & White Design System), Font Awesome 6.5, Google Fonts.

---

## Table of Contents
1. [Executive Summary & Organization Profile](#1-executive-summary--organization-profile)
2. [Architecture & Technology Stack](#2-architecture--technology-stack)
3. [Design System & UI/UX Specifications](#3-design-system--uiux-specifications)
4. [Project Directory & File Structure](#4-project-directory--file-structure)
5. [In-Depth Feature & Section Breakdown](#5-in-depth-feature--section-breakdown)
   - [Top Information Bar & Navigation Bar](#51-top-information-bar--navigation-bar)
   - [Hero Section](#52-hero-section)
   - [About Us & Trust Philosophy](#53-about-us--trust-philosophy)
   - [Six Core Focus Areas & Initiatives](#54-six-core-focus-areas--initiatives)
   - [Naadha Ashram Support (Dedicated Feature)](#55-naadha-ashram-support-dedicated-feature)
   - [Impact Targets & Metrics](#56-impact-targets--metrics)
   - [CSR Partnerships (Corporate Social Responsibility)](#57-csr-partnerships-corporate-social-responsibility)
   - [Moments & Community Photo Gallery](#58-moments--community-photo-gallery)
   - [Get Involved / Ways to Support](#59-get-involved--ways-to-support)
   - [Community Stories & Testimonials](#510-community-stories--testimonials)
   - [Contact & Field Support Section](#511-contact--field-support-section)
   - [Footer & Legal Compliance](#512-footer--legal-compliance)
6. [Interactive Components, Modals & State Management](#6-interactive-components-modals--state-management)
7. [Assets & Media Inventory](#7-assets--media-inventory)
8. [Compliance, Legal & Ethical Governance](#8-compliance-legal--ethical-governance)
9. [Developer Operations & Deployment Guide](#9-developer-operations--deployment-guide)
10. [Configuration & Environment Reference](#10-configuration--environment-reference)

---

## 1. Executive Summary & Organization Profile

### 1.1 About the Trust
**Anand Group Charitable Trust** is a dedicated Indian non-governmental organization (NGO) and registered charitable trust established to foster enduring grassroots transformation. Rejecting superficial, one-off charity, the Trust operates through sustained community-embedded interventions.

### 1.2 Core Pillars
1. **Dignity for All:** Every child, elder, and destitute individual is entitled to respect, shelter, health, and nourishment.
2. **Grassroots Direct Action:** Direct engagement with communities, rural village panchayats, schools, and ashrams without multi-layered intermediary friction.
3. **Holistic Upliftment:** Addressing systemic challenges concurrently—combining environmental cleanliness, child schooling, healthcare access, elder care, and cultural preservation.
4. **Transparent Governance:** Zero-tolerance policy toward deceptive claims; full fidelity in reporting community metrics and partner resource utilization.

---

## 2. Architecture & Technology Stack

| Layer | Technology | Details / Rationale |
|---|---|---|
| **Framework** | Next.js (16.4+) | React Server/Client App Router architecture. Highly optimized bundling, static metadata generation, and zero runtime bloat. |
| **Library** | React (19.3+) | Modern React hooks (`useState`, `useEffect`, `useRef`), event delegation, lightweight client-side routing. |
| **Styling** | Vanilla CSS3 (`globals.css`) | Custom design token system based on CSS custom properties (`:root`). Zero Tailwind or CSS-in-JS dependencies for high performance, custom branding, and maintainability. |
| **Typography** | Google Fonts | `Playfair Display` (serif, headings for gravitas and trust) & `Inter` (sans-serif, modern legibility across displays). |
| **Iconography** | Font Awesome 6.5.1 | Globally linked via CDN in `layout.jsx` for lightweight, scalable vector icons. |
| **Image Optimization** | Local SVGs & Compressed JPEGs | High-resolution assets optimized under 1.2MB with explicit responsive sizing and lazy rendering attributes. |
| **SEO & Social Graphs**| Next.js Metadata API | Full Open Graph (`og:*`), Twitter Card (`summary_large_image`), viewport configs, and canonical schema definitions. |

---

## 3. Design System & UI/UX Specifications

The visual identity is built on a sophisticated **Premium Yellow & White Theme** designed to reflect warmth, dignity, hope, and compassion while preserving clarity and trust.

### 3.1 Color Palette & Tokens

| Element | Role | Hex Code | Purpose / Application |
|---|---|---|---|
| **Primary Brand Yellow** | Golden Yellow | `#FACC15` | Primary CTA button backgrounds, active filter pills, hero highlights |
| **Secondary Yellow** | Warm Amber | `#EAB308` | Active navigation indicators, hover states, card border highlights |
| **Deep Accent** | Rich Gold | `#CA8A04` | Prominent icons, section eyebrow tags, modal badges |
| **Accessible Dark Gold** | Dark Amber | `#A16207` | Text on white backgrounds ensuring WCAG AA compliant contrast |
| **Main Background** | Pure White | `#FFFFFF` | ~70% of canvas area, card surfaces, clean whitespace |
| **Alternate Background** | Soft Cream | `#FFFEF0` | ~20% subtle section breaks (e.g., Ashram section, program cards) |
| **Highlight Background** | Pale Yellow | `#FEF9C3` | Tag pills, stat icon boxes, input hover tints |
| **Primary Text** | Charcoal Black | `#111827` | Headings, hero display titles, body text, primary button labels |
| **Secondary Text** | Slate Gray | `#4B5563` | Subtitles, helper text, form labels, metadata |
| **Borders** | Warm Light Gray & Gold | `#E5E7EB` / `#FDE047` | Subtle structural division and refined card outlines |

#### Proportional Harmony
- **~70% Pure White & Off-White Canvas:** Keeps the platform looking airy, spacious, and trustworthy.
- **~20% Subtle Cream & Pale Yellow Accents:** Adds warmth and gentle separation without visual noise.
- **~10% Strong Golden Yellow Highlights:** Guides user attention directly to key calls-to-action, active states, and impact stats.

```css
:root {
  /* Neutral Canvas & Backgrounds (70% Pure White & Cream) */
  --color-white: #FFFFFF;
  --color-bg: #FFFFFF;
  --color-bg-cream: #FFFEF0;         /* Soft Cream (Alternate Background) */
  --color-bg-highlight: #FEF9C3;     /* Pale Yellow (Highlight Background) */
  --color-bg-warm: #FFFBEB;          /* Warm Amber Tint */

  /* Text Colors (Accessible Contrast) */
  --color-text: #111827;             /* Charcoal Black */
  --color-text-muted: #4B5563;       /* Slate Gray */
  --color-text-subtle: #6B7280;      /* Muted Gray */

  /* Borders */
  --color-border: #E5E7EB;           /* Warm Light Gray */
  --color-border-subtle: #F3F4F6;
  --color-border-gold: #FDE047;      /* Warm Light Gold Border */
  --color-border-amber: #FACC15;     /* Golden Border */

  /* Yellow & Gold Design System */
  --color-yellow-primary: #FACC15;   /* Golden Yellow (Primary Brand) */
  --color-yellow-secondary: #EAB308; /* Warm Amber (Secondary Accent) */
  --color-yellow-deep: #CA8A04;      /* Rich Gold (Deep Accent) */
  --color-yellow-dark: #A16207;      /* Dark Amber for high-contrast legible text */
  --color-yellow-darker: #854D0E;    /* Deep Ochre */
  --color-yellow-light: #FEF08A;     /* Soft Pastel Yellow */
  --color-yellow-tint: #FEF9C3;      /* Pale Yellow Tint */
  --color-yellow-cream: #FFFEF0;     /* Soft Cream */

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Shadows with warm golden glow */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 12px 32px rgba(202, 138, 4, 0.08);
  --shadow-hover: 0 16px 36px rgba(202, 138, 4, 0.14);
  --shadow-gold: 0 8px 24px rgba(250, 204, 21, 0.28);
}
```

### 3.2 Typography Tokens
- **Display & Section Headings:** `'Playfair Display', Georgia, serif`
  - Font weights: `600`, `700`, rendered in Charcoal Black (`#111827`) with selective golden-yellow gradient highlights (`.hero-highlight`, `.text-gold`).
- **Body, Nav & Form Controls:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - Font weights: `400` (body), `500` (links), `600` (subheadings), `700` (buttons and badges).

### 3.3 Elevation, Micro-Interactions & Animation
- **Radii:** `sm` (6px), `md` (12px), `lg` (20px), `full` (9999px for pills and rounded action buttons).
- **Shadows & Lifts:** Smooth `translateY(-2px)` on button hovers with golden glow (`0 8px 24px rgba(234, 179, 8, 0.35)`), and `translateY(-4px)` to `translateY(-6px)` on cards.
- **Scroll Reveals:** IntersectionObserver `.reveal-on-scroll` transitions with 700ms cubic-bezier timing.
- **Accessibility:** Full `prefers-reduced-motion` overrides disabling animations when requested by users.
- **Responsive Breakpoints Handled:**
  - Ultra-wide: `> 1440px` (Max container clamp `1320px` / `1440px`)
  - Desktop: `1024px – 1440px`
  - Tablet: `768px – 1023px`
  - Mobile: `< 768px` (Fluid single-column reflow, sticky mobile menu drawer, tap-friendly touch targets `≥ 44px`).

---

## 4. Project Directory & File Structure

```
ngo_site/
│
├── .git/                                 # Git version control metadata
├── .gitignore                            # Standard Node/Next exclusions (.next, node_modules, etc.)
├── AGENTS.md                             # Next.js agent rule definitions & documentation guides
├── next.config.mjs                       # Next.js configuration (reactStrictMode: true)
├── package.json                          # Project dependencies, scripts, and metadata
├── package-lock.json                     # Deterministic dependency lockfile
│
├── app/
│   ├── globals.css                       # Master CSS architecture (pure white & golden design system)
│   ├── layout.jsx                        # RootLayout: Header, Footer, SEO metadata, Font Awesome
│   ├── page.jsx                          # Clean, simplified Homepage (hero, about preview, 6 cards, impact, spotlight, CTA)
│   ├── about/
│   │   └── page.jsx                      # Dedicated About Us page
│   ├── initiatives/
│   │   ├── page.jsx                      # All Initiatives overview & methodology
│   │   ├── social-environmental/
│   │   │   └── page.jsx                  # Swachh Bharat & Haritha Haram dedicated page
│   │   ├── education/
│   │   │   └── page.jsx                  # Education & Child Development dedicated page
│   │   ├── temple-development/
│   │   │   └── page.jsx                  # Temple Development & Annadanam dedicated page
│   │   ├── healthcare/
│   │   │   └── page.jsx                  # Healthcare & Medical Screening dedicated page
│   │   ├── elderly-care/
│   │   │   └── page.jsx                  # Elderly Care & Senior Welfare dedicated page
│   │   └── naadha-ashram/
│   │       └── page.jsx                  # Naadha Ashram Sanctuary dedicated page
│   ├── impact/
│   │   └── page.jsx                      # Impact Statistics, Milestones Timeline & Stories
│   ├── gallery/
│   │   └── page.jsx                      # Standalone Photo Gallery (category filters, inline viewer, NO pop-ups)
│   ├── get-involved/
│   │   └── page.jsx                      # Get Involved Hub (Pathways to contribute)
│   ├── volunteer/
│   │   └── page.jsx                      # Dedicated Volunteer Registration (inline form & validation)
│   ├── donate/
│   │   └── page.jsx                      # Dedicated Donation & Pledge Page (transparent 80G information, bank transfer)
│   ├── csr-partnerships/
│   │   └── page.jsx                      # Corporate CSR (Schedule VII Section 135 compliance & enquiry form)
│   ├── contact/
│   │   └── page.jsx                      # Dedicated Contact Us page (inline form, headquarters info)
│   ├── privacy-policy/
│   │   └── page.jsx                      # Dedicated Privacy Policy & Data Protection page
│   └── terms-and-conditions/
│       └── page.jsx                      # Dedicated Terms & Conditions page
│
├── components/
│   ├── Header.jsx                        # Shared Sticky Navbar with active tracking & auto-closing mobile drawer
│   ├── Footer.jsx                        # Shared 4-Column Footer with quick links, initiatives, contact & legal
│   ├── PageBanner.jsx                    # Reusable Inner Page Hero Banner with Breadcrumbs & Headings
│   ├── InitiativeCard.jsx                # Reusable Initiative Card navigating directly to /initiatives/<slug>
│   ├── PhotoShowcase.jsx                 # Reusable Field Action Photo Showcase with Inline Preview (NO pop-ups)
│   └── InitiativeSubpageLayout.jsx       # Standardized Layout for all 6 Initiative detail pages
│
├── data/
│   ├── initiatives.js                    # Centralized initiatives data, programs, benefits & photo mappings
│   ├── gallery.js                        # Curated 27+ authentic gallery items and categories
│   └── impact.js                         # Verified metrics, historical timeline & beneficiary stories
│
└── public/
    ├── favicon-anand-trust.svg           # Branded SVG favicon (active)
    ├── logo-anand-trust.svg              # Primary trust vector logo (active)
    ├── favicon-aashraya.svg              # Legacy asset backup
    ├── logo-aashraya.svg                 # Legacy asset backup
    │
    └── images/                           # Curated photography for all focus areas
        ├── swachh-bharat/                # Real Swachh Bharat & Awareness Field Photo Archive (WebP)
        │   ├── swachh-bharat-school-campus-cleanliness-drive.webp
        │   ├── swachh-bharat-college-campus-gate-cleaning.webp
        │   ├── swachh-bharat-volunteers-courtyard-sweeping.webp
        │   ├── swachh-bharat-cleanliness-pledge-unity.webp
        │   ├── swachh-bharat-railway-station-volunteer-team.webp
        │   ├── swachh-bharat-village-road-cleanliness-drive.webp
        │   ├── swachh-bharat-village-awareness-rally-children.webp
        │   ├── swachh-bharat-campaign-launch-dignitaries.webp
        │   ├── swachh-bharat-press-conference-awareness-release.webp
        │   ├── swachh-bharat-road-safety-traffic-awareness-launch.webp
        │   ├── swachh-bharat-nagarjuna-campaign-endorsement.webp
        │   ├── swachh-bharat-mother-earth-emotional-campaign.webp
        │   ├── swachh-bharat-anand-group-multi-campaign-poster.webp
        │   ├── swachh-bharat-anand-group-jubilee-hills-news.webp
        │   ├── swachh-bharat-andhra-jyothy-news-healthy-society.webp
        │   ├── swachh-bharat-sri-chaitanya-school-drive-news.webp
        │   ├── swachh-bharat-student-initiative-anakapalli-news.webp
        │   ├── swachh-bharat-press-reception-andhra-jyothy.webp
        │   ├── swachh-bharat-mind-cleanliness-news-speech.webp
        │   └── swachh-bharat-english-press-film-coverage.webp
        │
        ├── haritha-haram/                # Haritha Haram Tree Plantation Photographic Archive (WebP)
        │   ├── haritha-haram-community-tree-plantation-drive.webp
        │   └── haritha-haram-student-sapling-distribution.webp
        │
        ├── school-awareness/             # Education & Youth Mentorship Photographic Archive (WebP)
        │   ├── school-awareness-youth-inspiration-assembly.webp
        │   ├── school-awareness-rural-government-high-school-outreach.webp
        │   ├── school-awareness-student-civic-pledge.webp
        │   ├── school-awareness-auditorium-mentorship-session.webp
        │   ├── school-awareness-press-clipping-orphanage-education-support.webp
        │   └── school-awareness-press-clipping-dav-school-civic-awareness.webp
        │
        ├── hero_community_hope.jpg       # Hero banner visual
        ├── about_mentorship.jpg          # About section feature photo
        ├── init_awareness.jpg            # Archive environmental photo
        ├── init_education.jpg            # Classroom & child education photo
        ├── init_temple.jpg               # Heritage temple restoration & Annadanam photo
        ├── init_healthcare.jpg           # Free medical & diagnostic camp photo
        ├── init_elderly.jpg              # Elderly care & senior home assistance photo
        ├── init_ashram.jpg               # Naadha Ashram sanctuary & resident care photo
        ├── init_annadanam.jpg            # Community Annadanam food service photo
        ├── init_community.jpg            # Community engagement photo
        ├── init_child_welfare.jpg        # Child welfare & youth skills photo
        ├── init_women.jpg                # Women empowerment & family values photo
        ├── gallery_nutrition.jpg         # Nutrition & dry ration grocery kit distribution
        └── gallery_volunteers.jpg        # Cleanliness & youth volunteer field team
```

---

## 5. In-Depth Multi-Page Subpage Architecture (Strictly Zero Pop-Ups)

To eliminate all pop-ups, modals, accordions, and hidden panels, the website is structured into a clean, professional multi-page architecture using Next.js App Router:

### 5.1 Simplified Homepage (`/`)
- **Header & Navigation:** Sticky white navbar with active indicator and accessible auto-closing mobile menu drawer.
- **Hero Section:** Clean high-impact typography, impact stat badges, primary CTA to `/donate`, secondary CTA to `/initiatives`.
- **Short About Us Introduction:** Concise 2-paragraph trust overview with 4 feature bullets and link to `/about`.
- **Our Six Core Initiatives:** Simple cards linking directly to each initiative subpage (`/initiatives/<slug>`).
- **Impact Statistics:** 4 prominent stat cards with link to `/impact`.
- **Signature Seva Spotlight:** Side-by-side featured spotlights on *Swachh Bharat & Haritha Haram* and *Naadha Ashram Sanctuary*.
- **Photo Gallery Preview:** 6 curated field moments with CTA linking to `/gallery`.
- **Get Involved CTA:** 3 action pathways linking to `/donate`, `/volunteer`, and `/csr-partnerships`.
- **Contact & Helpline CTA:** Direct phone and link to `/contact`.

### 5.2 Dedicated Subpages Architecture

#### 1. About Us (`/about`)
- In-depth founding story and evolution.
- Mission, Vision, and 4 Core Pillars.
- Leadership profiles of Ambati Srinivasa Rao and Ambati Tanuja.
- Legal trust governance and audited compliance notes.

#### 2. All Initiatives (`/initiatives`)
- Comprehensive overview of all 6 core focus pillars.
- Grassroots methodology and three-point delivery framework.
- Direct cards linking to each specialized subpage.

#### 3. Six Specialized Initiative Subpages:
- `/initiatives/social-environmental`: Swachh Bharat street sanitation, Haritha Haram tree plantations, Save Water campaigns, plastic-free living, and 10 authentic field photos.
- `/initiatives/education`: Underprivileged child schooling, digital discipline, family values, and 6 authentic school awareness photos.
- `/initiatives/temple-development`: Historic temple renovation, sacred Annadanam food service, and cultural preservation.
- `/initiatives/healthcare`: Free rural medical camps, diagnostic check-ups, voluntary blood donation, and emergency medical assistance.
- `/initiatives/elderly-care`: Old age home support, senior citizen dignity, mobility aids, and companionship.
- `/initiatives/naadha-ashram`: 365-day daily nutrition, shelter improvements, and child schooling at Naadha Ashram sanctuary.

#### 4. Impact & Milestones (`/impact`)
- 6 verified field impact metrics.
- Historical milestones timeline from 2014 to present.
- Real community stories and beneficiary testimonials.

#### 5. Photo Gallery (`/gallery`)
- 27 authentic photographs with category filter tabs.
- **Strictly NO Pop-Up Lightbox:** High-resolution photos expand into an inline focus display panel directly within the page layout.

#### 6. Get Involved (`/get-involved`)
- 6 actionable pathways: Donate, Volunteer, CSR, Sponsor Ashram Meals, Adopt a School, Spread Awareness.

#### 7. Volunteer Registration (`/volunteer`)
- Dedicated volunteer onboarding page with inline registration form, skills selection, time availability, and inline confirmation (no pop-ups).

#### 8. Donation & Pledge (`/donate`)
- Direct support pledge form with tier selector (₹1,000, ₹2,500, ₹5,000, ₹10,000, Custom), initiative designation selector, official bank transfer particulars, and transparent 80G tax exemption guidelines.

#### 9. CSR Partnerships (`/csr-partnerships`)
- Schedule VII Section 135 statutory compliance alignment, CA fund utilization certificates, milestone audits, and inline corporate enquiry form.

#### 10. Contact Us (`/contact`)
- Office location in Andhra Pradesh & Telangana, direct helplines, email addresses, working hours, and inline inquiry form.

#### 11. Privacy Policy (`/privacy-policy`) & Terms and Conditions (`/terms-and-conditions`)
- Comprehensive statutory disclosures, donor confidentiality guarantees, non-refundable donation terms, and legal jurisdiction.

#### 2. Education & Child Development
- **Lead:** Enduring pathways out of generational hardship for disadvantaged children.
- **Programs:**
  - *Education for Underprivileged Children:* Tuition assistance, uniforms, textbooks, school bags, dropout tracking.
  - *Free Evening Coaching:* Foundational coaching by volunteer village mentors.
  - *School Infrastructure Upgrades:* Science kits, computer stations, classroom desks, reading corners.
  - *Mobile Phone & Digital Discipline:* Countering gaming addiction, screen-time overuse, online safety rules.
  - *Cleanliness, Etiquette & Manners:* Oral hygiene, courteous communication, classroom respect.
  - *Family Values & Respect:* Reverence for parents, teachers, and elders.
- **Expected Benefit:** Sharp reduction in dropouts, higher literacy and moral character formation.

#### 3. Temple Development & Cultural Activities
- **Lead:** Preserving sacred spaces as epicenters of community solace, ethics, and unity.
- **Programs:**
  - *Temple Renovation & Development:* Structural restoration of neglected rural temples, clean paving, hygienic sanitation.
  - *Cultural & Spiritual Events:* Devotional music festivals, traditional arts, volunteer crowd coordination.
  - *Annadanam & Food Distribution:* Hot nutritious meals distributed to pilgrims and homeless individuals.
- **Expected Benefit:** Protection of architectural heritage and guaranteed hot meals via sacred Annadanam.

#### 4. Healthcare & Medical Support
- **Lead:** Accessible primary diagnostics and preventive consultations at the doorstep.
- **Programs:**
  - *Free Medical Camps:* General health consultations, vital signs monitoring, pediatric screenings.
  - *Voluntary Blood Donation Drives:* Coordination with authorized blood banks to stock critical reserves.
  - *Diabetes & Hypertension Screenings:* Early blood sugar and BP checks with dietary advice.
  - *Eye Care & Cataract Screenings:* Vision testing, reading glasses distribution, partner hospital referrals.
- **Expected Benefit:** Preempts catastrophic health emergencies among economically vulnerable households.

#### 5. Elderly Care & Social Welfare
- **Lead:** Compassion, warmth, and dignity for senior citizens.
- **Programs:**
  - *Old Age Home Assistance:* Dry rations, bed linens, blankets, walking sticks, hygiene packs.
  - *Direct Destitute Support:* Monthly sustenance groceries for impoverished elderly living alone.
  - *Companionship Visits:* Volunteer listening circles, festival celebrations with elders.
- **Expected Benefit:** Combats elder loneliness, ensures consistent nutrition, restores elderly dignity.

#### 6. Naadha Ashram Support
- **Lead:** Dedicated support for the sanctuary home caring for destitute and vulnerable residents.
- **Programs:**
  - *Food & Nutrition Security:* Daily provision of rice, lentils, oil, fresh vegetables.
  - *Daily Household Essentials:* Soaps, disinfectants, mosquito nets, kitchen supplies.
  - *Clothing & Dignity Packs:* Sarees, dhotis, kurtas, sweaters, personal hygiene products.
  - *Medical Care & Volunteer Visits:* Regular physician visits, maintenance medications, spiritual satsang.
- **Expected Benefit:** Reliable daily sustenance and safety for all residents.

### 5.5 Naadha Ashram Support (Dedicated Feature) (`#ashram`)
A full section dedicated to highlighting the unique collaboration between Anand Group Charitable Trust and **Naadha Ashram**:
- Overview of the ashram's sanctuary mission.
- Breakdown of ongoing assistance across Food, Daily Essentials, Dignity Clothing, and Healthcare.
- Direct CTA button allowing supporters to pledge specifically to Naadha Ashram.

### 5.6 Impact Targets & Metrics (`#impact`)
Quantified roadmaps tracking grassroots expansion:
- **10,000+** Children provided educational kits, tuition, and digital etiquette coaching.
- **25,000+** Patients examined via free rural medical camps and blood donation drives.
- **50,000+** Community Annadanam meals served to pilgrims, elders, and destitute people.
- **100+** Swachh Bharat village cleanliness drives and road safety awareness sessions.
- **Dedicated Ashram Care:** Continuous safety net for Naadha Ashram residents.

### 5.7 CSR Partnerships (Corporate Social Responsibility) (`#csr`)
Designed for corporate sustainability teams and CSR executives:
- **Statutory Alignment:** Compliance-ready frameworks adhering to Section 135 and Schedule VII of the Indian Companies Act, 2013.
- **Why Partner with Anand Group:**
  - Direct field execution with measurable outcome tracking.
  - Utilization certificates, project milestones, and periodic photo-documentation.
  - Employee engagement opportunities (cleanliness drives, volunteer tutoring, medical camps).
- **Interactive CSR Enquiry Form:** Allows corporate leaders to specify organization name, contact info, proposed focus area, and CSR allocation.

### 5.8 Moments & Community Photo Gallery (`#gallery`)
- 12 high-impact curated field photographs.
- **Instant Category Filters:**
  - *All Moments*
  - *Education*
  - *Awareness*
  - *Temple & Annadanam*
  - *Medical Camps*
  - *Elderly Care*
  - *Naadha Ashram*
- **Interactive Lightbox Modal:** Full-screen zoom view with initiative tag, description, and direct "Support Cause" action button.

### 5.9 Get Involved / Ways to Support (`#get-involved`)
Structured options for individuals and groups to contribute:
1. **Volunteer With Us:** Mobilize time and expertise in community camps or online.
2. **Sponsor an Initiative:** Direct institutional or personal funding to a specific program.
3. **Make a Support Pledge:** Select from predetermined tiers (₹500, ₹1,500, ₹3,000, ₹5,000) or enter a custom amount.
4. **Corporate CSR Alliance:** Co-create custom CSR community initiatives.

### 5.10 Community Stories & Testimonials (`#stories`)
Authentic case narratives illustrating real lives transformed:
- **Sunita Devi (Mother & Community Leader):** On child education and digital awareness camps.
- **Rameshwar Sharma (Senior Resident):** On dignified care and food support in the elder-care program.
- **Dr. Arvind K. (Volunteer Physician):** On the preventive impact of regular rural medical and diabetes screening camps.

### 5.11 Contact & Field Support Section (`#contact`)
- **Direct Interactive Form:** Name, Email, Phone, Subject dropdown (*General Inquiry, CSR Collaboration, Volunteer Opportunity, Ashram Support, Donation Question*), and Message.
- **Office Location Information:**
  - *Registered Office:* Anand Group Charitable Trust, 14 Institutional Area, Sector 5, New Delhi - 110001, India (Standard official placeholder).
  - *Helpline:* `+91 98765 43210`
  - *Inquiry Email:* `contact@anandgroupcharitabletrust.org.in`
  - *Hours:* Monday – Saturday: 9:30 AM – 6:00 PM IST.

### 5.12 Footer & Legal Compliance (`.ash-footer`)
- Branded logo with clear mission statement.
- Social media links (Facebook, Instagram, LinkedIn, X/Twitter, YouTube).
- Quick links and direct modal triggers for each initiative.
- Inline Newsletter subscription with data privacy statement.
- Legal navigation links opening modals for:
  - **Privacy Policy** (data confidentiality guarantees)
  - **Terms & Conditions** (intellectual property & informational purpose)
  - **Governance & Trust Ethics** (charitable governance declaration)

---

## 6. Interactive Components, Modals & State Management

All state is maintained in `app/page.jsx` with standard React primitives without unnecessary external libraries:

### 6.1 State Table
| State Variable | Type | Purpose |
|---|---|---|
| `isScrolled` | `boolean` | Detects vertical window scroll (>40px) to apply elevation styling to header navbar. |
| `mobileMenuOpen` | `boolean` | Controls visibility of mobile slide-out navigation drawer. |
| `activeSection` | `string` | Tracks current section in viewport for active nav indicator highlighting. |
| `activeModal` | `string \| null` | Controls which modal is active: `'initiative'`, `'donation'`, `'volunteer'`, `'sponsor'`, `'story'`, `'privacy'`, `'terms'`. |
| `selectedInitiativeKey` | `string` | Identifies which initiative is being viewed in the deep-dive modal. |
| `activeInitiativeTab` | `string` | Tracks the active tab on the homepage initiatives component. |
| `donationTarget` | `string` | Pre-selects the program category in the support pledge modal. |
| `selectedTier` | `string` | Tracks preset pledge amount (₹500, ₹1500, ₹3000, ₹5000). |
| `customAmount` | `string` | Controlled input for user-entered pledge amounts. |
| `galleryFilter` | `string` | Filter tag for gallery images (`'all'`, `'education'`, `'awareness'`, etc.). |
| `lightboxData` | `object \| null` | Holds image metadata (`src`, `title`, `tag`) for active lightbox display. |
| `toast` | `object \| null` | Displays temporary floating success/status notification banner (`message`, `type`). |

### 6.2 Accessibility & Animations
- **IntersectionObserver:** Smooth `.reveal-on-scroll` effect applied to sections as they enter the viewport.
- **Escape Key & Backdrop Click Handlers:** All modals close cleanly when clicking the semi-transparent backdrop or trigger button.
- **Form Validations:** Native HTML5 validation coupled with informative user feedback toasts.

---

## 7. Assets & Media Inventory

### 7.1 Vector Assets (`public/`)
- `logo-anand-trust.svg`: Primary vector brand logo featuring the trust name and an emblem representing care, unity, and growth.
- `favicon-anand-trust.svg`: Optimized 32x32/48x48 icon for browser tabs and mobile bookmarks.

### 7.2 High-Definition Image Assets (`public/images/`)
All images are curated, compressed for fast web loading, and visually represent the authentic spirit of Indian charitable work:
- `hero_community_hope.jpg` (991 KB): Children and community members under warm natural lighting.
- `about_mentorship.jpg` (999 KB): Mentor interacting with students.
- `init_education.jpg` (836 KB): Underprivileged children in active study sessions.
- `init_temple.jpg` (1.1 MB): Heritage temple precinct undergoing maintenance and community service.
- `init_healthcare.jpg` (900 KB): Doctors conducting health screenings and diagnostics.
- `init_elderly.jpg` (894 KB): Senior citizen receiving care and support.
- `init_ashram.jpg` (1.1 MB): Calm, clean environment at Naadha Ashram with residents.
- `init_annadanam.jpg` (1.0 MB): Traditional Annadanam meal distribution.
- `init_community.jpg` (1.1 MB): Community gathering and civic discussion.
- `init_child_welfare.jpg` (943 KB): Child development and life skills activity.
- `init_women.jpg` (983 KB): Grassroots family and women empowerment.
- `gallery_nutrition.jpg` (1.0 MB): Packaging and distributing wholesome grocery ration kits.
- `gallery_volunteers.jpg` (1.1 MB): Youth volunteers holding cleanliness supplies.

### 7.3 Swachh Bharat & Environmental Awareness Photographic Archive (`public/images/swachh-bharat/`)
A dedicated archive of authentic field action photography and press coverage documenting Anand Group Charitable Trust's historical Swachh Bharat drives, school cleanliness rallies, road safety campaigns, and community hygiene initiatives. All assets have been converted from raw PNGs into modern, lightweight, high-fidelity WebP format (averaging 85% bandwidth reduction):

| Filename | Dimensions | WebP Size | Original Content & Scene Description |
|---|---|---|---|
| `swachh-bharat-school-campus-cleanliness-drive.webp` | 1152x648 | 140 KB | Ambati Srinivasa Rao & volunteers in protective gloves sweeping school ground with students & teachers |
| `swachh-bharat-college-campus-gate-cleaning.webp` | 960x640 | 147 KB | College campus gate and public roadway sweep action with students and volunteers |
| `swachh-bharat-volunteers-courtyard-sweeping.webp` | 1072x712 | 171 KB | Volunteers and community team sweeping courtyard grounds with traditional long brooms |
| `swachh-bharat-cleanliness-pledge-unity.webp` | 960x720 | 94 KB | Community volunteers joining hands in a circle of unity taking the Swachhata cleanliness oath |
| `swachh-bharat-railway-station-volunteer-team.webp` | 960x720 | 103 KB | Volunteer team in matching Swachh Bharat shirts with brooms and yellow flag at Sompeta station square |
| `swachh-bharat-village-road-cleanliness-drive.webp` | 960x540 | 106 KB | Village elders, leaders, and community members sweeping rural village roadway |
| `swachh-bharat-village-awareness-rally-children.webp` | 960x540 | 160 KB | Village awareness rally with children and youth marching with "Swachhata Hi Seva" banner & placards |
| `swachh-bharat-campaign-launch-dignitaries.webp` | 960x640 | 92 KB | Dignitaries unveiling the "Mana Bharat - Swachh Bharat" round emblem at official launch |
| `swachh-bharat-press-conference-awareness-release.webp` | 960x720 | 63 KB | Press conference and public awareness poster release event |
| `swachh-bharat-road-safety-traffic-awareness-launch.webp` | 387x398 | 24 KB | Hon'ble CM Sri N. Chandrababu Naidu launching "Safety First - Traffic Rules" road safety campaign |
| `swachh-bharat-nagarjuna-campaign-endorsement.webp` | 574x449 | 24 KB | Actor Akkineni Nagarjuna supporting the "Hamara Bharat, Hamari Maa, Swachh Bharat" campaign |
| `swachh-bharat-mother-earth-emotional-campaign.webp` | 960x540 | 76 KB | Anand Group "Mana Bharat, Manandari Amma" mother-earth emotional campaign portrait |
| `swachh-bharat-anand-group-multi-campaign-poster.webp` | 960x640 | 124 KB | Anand Group multi-campaign awareness poster (Plastic, Swine Flu, Traffic Safety, Swachh Bharat) |
| `swachh-bharat-anand-group-jubilee-hills-news.webp` | 1531x508 | 311 KB | News report explicitly citing "Anand Group" organizing the Jubilee Hills Road No. 11 Swachh Bharat drive |
| `swachh-bharat-andhra-jyothy-news-healthy-society.webp` | 780x1040 | 86 KB | Andhra Jyothy media coverage: "Healthy Society through Swachh Bharat" |
| `swachh-bharat-sri-chaitanya-school-drive-news.webp` | 729x1032 | 113 KB | News report covering Sri Chaitanya School campus cleanliness drive |
| `swachh-bharat-student-initiative-anakapalli-news.webp` | 805x960 | 242 KB | News report on student initiative in Swachh Bharat at Anakapalli school |
| `swachh-bharat-press-reception-andhra-jyothy.webp` | 720x960 | 157 KB | Andhra Jyothy press report: "Tremendous Reception for Swachh Bharat" |
| `swachh-bharat-mind-cleanliness-news-speech.webp` | 960x684 | 242 KB | Press feature on speech: "Clean Minds Lead to Successful Swachh Bharat" |
| `swachh-bharat-english-press-film-coverage.webp` | 720x960 | 110 KB | English national newspaper clipping covering Swachh Bharat awareness film |

### 7.4 Haritha Haram Tree Plantation Photographic Archive (`public/images/haritha-haram/`)
Authentic field photography documenting Anand Group Charitable Trust's tree plantation initiatives, student sapling distributions, and green cover campaigns:

| Filename | Dimensions | WebP Size | Original Content & Scene Description |
|---|---|---|---|
| `haritha-haram-community-tree-plantation-drive.webp` | 960x640 | 179 KB | Anand Group trustees and volunteers planting saplings, weeding, and nurturing roadside green belts |
| `haritha-haram-student-sapling-distribution.webp` | 960x720 | 88 KB | Trust representative presenting green potted plant & sapling to college student at STAR Junior College |

### 7.5 School & Youth Awareness Photographic Archive (`public/images/school-awareness/`)
Authentic photography and media coverage documenting school assemblies, student mentorship sessions, value education, and child support initiatives:

| Filename | Dimensions | WebP Size | Original Content & Scene Description |
|---|---|---|---|
| `school-awareness-youth-inspiration-assembly.webp` | 1040x780 | 193 KB | Cheerful school students in uniform with hands raised high cheering during interactive youth assembly |
| `school-awareness-rural-government-high-school-outreach.webp` | 1280x960 | 208 KB | Morning assembly & outreach at Zilla Praja Parishad High School, Pedapullalanka with rural students |
| `school-awareness-student-civic-pledge.webp` | 1280x720 | 114 KB | High school & junior college students taking formal civic, cleanliness, and responsibility pledge |
| `school-awareness-auditorium-mentorship-session.webp` | 1088x816 | 88 KB | Trust speaker addressing full auditorium of students at Sri Chaitanya School on moral values & civic duty |
| `school-awareness-press-clipping-orphanage-education-support.webp` | 532x227 | 40 KB | Press media report: Ambati Srinivas distributing books, school supplies & sweets at Generation Yuva Ashram |
| `school-awareness-press-clipping-dav-school-civic-awareness.webp` | 960x551 | 148 KB | Press media report: DAV Public School address inspiring students to avoid plastics and maintain discipline |

---

## 8. Compliance, Legal & Ethical Governance

### 8.1 Ethical Financial Posture
To maintain trust, transparency, and legal compliance, the website incorporates clear notices:
- **No Direct Gateway Scam Risk:** The platform does not take blind credit/debit card gateway transactions without providing prospective donors with official organizational verification and 80G tax clearance certificates.
- **Pledge Submission Model:** Donors submit their support intention; the trust then communicates directly from official trust email channels.

### 8.2 Corporate Social Responsibility (CSR) Readiness
- Aligned with **Schedule VII, Section 135 of the Indian Companies Act, 2013**:
  - Eradicating hunger, poverty, and malnutrition; promoting healthcare and sanitation (*Annadanam, Medical Camps, Naadha Ashram*).
  - Promoting education, including special education and employment-enhancing vocational skills (*Education & Digital Awareness*).
  - Protection of national heritage, art, and culture (*Temple Renovation & Cultural Activities*).
  - Ensuring environmental sustainability, ecological balance, and conservation of natural resources (*Cleanliness & Save Water Campaigns*).
  - Setting up old age homes, day care centres, and other facilities for senior citizens (*Elderly Care & Social Welfare*).

---

## 9. Developer Operations & Deployment Guide

### 9.1 Package Scripts
In `package.json`:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

### 9.2 Running Locally
1. **Install Dependencies:**
   ```powershell
   npm install
   ```
2. **Start Development Server:**
   ```powershell
   npm run dev
   ```
   *The application will launch on `http://localhost:3000`.*
3. **Build for Production:**
   ```powershell
   npm run build
   ```
4. **Start Production Server:**
   ```powershell
   npm start
   ```

### 9.3 Next.js Agent Guidelines (`AGENTS.md`)
Please note that this project runs on modern Next.js with breaking App Router standards.
- Do not mix legacy `pages/` directory conventions with `app/`.
- Maintain docstrings and comments.
- Verify imports from `next/navigation`, `next/font`, and React 19 standard hooks.

---

## 10. Configuration & Environment Reference

### 10.1 `next.config.mjs`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

### 10.2 Production Domain & Metadata Base
- Canonical URL: `https://www.anandgroupcharitabletrust.org.in`
- Locale: `en_IN`
- Theme Color: `#EAB308` (Warm Amber)
- Viewport: `width=device-width, initialScale=1, maximumScale=5, themeColor=#EAB308`

---

*This document serves as the comprehensive single source of truth for the Anand Group Charitable Trust web application.*

