# Product Requirements Document
## Aaron's Lawn Care Website

| | |
|---|---|
| **Version:** | 1.0 |
| **Date:** | January 5, 2026 |
| **Author:** | Stacey |
| **Status:** | Draft |

---

## 1. Executive Summary

This document outlines the requirements for a professional marketing website for Aaron's Lawn Care, a solo lawn care and landscaping business serving the greater Louisville, Kentucky area. The website will serve as the primary digital marketing presence, enabling potential customers to learn about services, view work samples, and request quotes. This is phase one of a larger digital ecosystem that will eventually include a customer-facing mobile app for scheduling and billing.

---

## 2. Business Overview

| Field | Value |
|-------|-------|
| Business Name | Aaron's Lawn Care |
| Owner/Operator | Aaron |
| Years in Business | 20 years |
| Team Size | Solo operator |
| Service Area | Greater Louisville, Kentucky |
| Insurance Status | Fully insured |
| Business Model | Quote-based pricing; one-time jobs and recurring service plans |

---

## 3. Project Goals

### 3.1 Primary Objectives

- Establish a professional online presence that reflects 20 years of experience and expertise
- Generate qualified leads through an optimized quote request system
- Rank highly in local search results for lawn care and landscaping services in Louisville
- Build an email subscriber list for ongoing marketing communications
- Showcase quality of work through a filterable before/after gallery

### 3.2 Success Metrics

- Quote requests per month
- Organic search traffic volume
- Local search ranking positions for target keywords
- Newsletter subscription rate
- Phone call volume from website

---

## 4. Services Offered

Each service will have dedicated content on the website for SEO purposes:

| Service Category | Service | Season |
|-----------------|---------|--------|
| Lawn Maintenance | Mowing | Spring/Summer/Fall |
| Lawn Maintenance | Edging | Spring/Summer/Fall |
| Lawn Maintenance | Leaf Removal | Fall |
| Lawn Health | Aeration | Spring/Fall |
| Landscaping | General Landscaping | Year-round |
| Landscaping | Garden Bed Design | Spring/Summer |
| Trimming & Pruning | Hedge Trimming | Spring/Summer/Fall |
| Tree Services | Tree Removal | Year-round |
| Ground Prep | Tilling | Spring |
| Winter Services | Snow Removal | Winter |

---

## 5. Site Architecture

### 5.1 Page Structure

#### 1. Home Page
- Hero section with primary CTA (Request a Quote)
- Brief business introduction highlighting 20 years experience
- Services overview with links to detail pages
- Featured gallery images
- Trust indicators (insured, 20 years experience)
- Newsletter signup

#### 2. About Us Page
- Business story and history (placeholder content initially)
- Values and commitment to quality
- Service area information
- Insurance and credentials

#### 3. Services Page (Hub)
- Overview of all services offered
- Links to individual service detail pages
- Seasonal service highlights

#### 4. Individual Service Pages (10 pages)
Create a dedicated page for each service:
- `/services/mowing`
- `/services/edging`
- `/services/leaf-removal`
- `/services/aeration`
- `/services/landscaping`
- `/services/garden-bed-design`
- `/services/hedge-trimming`
- `/services/tree-removal`
- `/services/tilling`
- `/services/snow-removal`

Each page should include:
- Service description and benefits
- Related gallery images
- Quote request CTA
- SEO-optimized content with target keywords

#### 5. Gallery Page
- Filterable by service type
- Before/after image pairs
- Lightbox functionality for full-size viewing

#### 6. Reviews/Testimonials Page
- Customer testimonials (placeholder for future content)
- Links to third-party review platforms when available

#### 7. Request a Quote Page
- Comprehensive quote request form
- Contact information display

#### 8. Contact Page
- Phone number and email
- Service area map
- Business hours (by appointment)

#### 9. Privacy Policy Page

#### 10. Terms of Service Page

---

## 6. Quote Request Form Specifications

### 6.1 Required Fields

| Field | Type | Notes |
|-------|------|-------|
| Full Name | Text input | Required |
| Property Address | Text input | Required; service location |
| Phone Number | Tel input | Required; formatted |
| Email Address | Email input | Required |
| Service Type(s) | Multi-select checkboxes | Required; at least one |
| Property Size | Select dropdown | Options: Small / Medium / Large / Not Sure |
| Photos | File upload | Optional; multiple allowed |
| Preferred Contact | Radio buttons | Options: Phone / Email / Either |
| Urgency | Select dropdown | Options: Routine / Soon / Urgent |
| Additional Details | Textarea | Optional |

### 6.2 Form Behavior

- Form submissions sent to: `gnaua429@gmail.com`
- Confirmation message displayed on successful submission
- Auto-response email to customer confirming receipt
- Response time messaging: "We will get back to you as soon as possible"
- Response method: Phone call to schedule on-site visit

---

## 7. Contact Information

| Field | Value |
|-------|-------|
| Phone | (502) 926-8524 |
| Email | gnaua429@gmail.com |
| Business Hours | By appointment |
| Service Area | Greater Louisville, Kentucky |

---

## 8. SEO Strategy & Keywords

### 8.1 Primary Local Keywords (High Priority)

These keywords should appear in page titles, H1 tags, meta descriptions, and body content:

- lawn care Louisville KY
- lawn service Louisville
- landscaping Louisville Kentucky
- lawn mowing Louisville
- landscaper near me Louisville
- lawn care services Louisville KY
- professional lawn care Louisville

### 8.2 Service-Specific Keywords

| Service | Target Keywords |
|---------|----------------|
| Mowing | lawn mowing service Louisville, grass cutting Louisville KY, weekly lawn mowing |
| Landscaping | landscaping company Louisville, landscape design Louisville KY, residential landscaping |
| Tree Removal | tree removal Louisville KY, tree service Louisville, tree cutting near me |
| Snow Removal | snow removal Louisville KY, snow plowing service Louisville, residential snow removal |
| Hedge Trimming | hedge trimming Louisville, shrub trimming service, bush trimming near me |
| Aeration | lawn aeration Louisville KY, core aeration service, fall aeration Louisville |
| Leaf Removal | leaf removal Louisville, fall leaf cleanup, leaf cleanup service Louisville KY |
| Garden Beds | garden bed design Louisville, flower bed installation, garden landscaping |
| Tilling | garden tilling Louisville KY, soil tilling service, yard tilling |
| Edging | lawn edging Louisville, sidewalk edging, professional edging service |

### 8.3 Long-Tail Keywords

- best lawn care company in Louisville KY
- affordable lawn service Louisville Kentucky
- residential landscaping services near me
- emergency tree removal Louisville KY
- spring yard cleanup Louisville
- fall leaf removal service Louisville
- snow removal company Louisville Kentucky
- one-time lawn mowing Louisville
- recurring lawn care plans Louisville KY

### 8.4 SEO Implementation Requirements

- Create dedicated service pages targeting specific service + location keywords
- Optimize meta titles: 50-60 characters including primary keyword and location
- Optimize meta descriptions: 150-160 characters with compelling CTA
- Use descriptive, keyword-rich image file names (e.g., `lawn-mowing-louisville-before-after.jpg`)
- Include alt text on all images with relevant keywords
- Implement schema markup for LocalBusiness
- Set up Google Business Profile (critical for local SEO)
- Ensure NAP (Name, Address, Phone) consistency across all pages

### 8.5 Meta Tag Templates

**Home Page:**
```
Title: Aaron's Lawn Care | Professional Lawn Service in Louisville KY
Description: 20 years of professional lawn care and landscaping in Louisville, Kentucky. Mowing, landscaping, tree removal, snow removal & more. Request a free quote today!
```

**Service Page Example (Mowing):**
```
Title: Lawn Mowing Service Louisville KY | Aaron's Lawn Care
Description: Professional lawn mowing service in Louisville, Kentucky. Weekly, bi-weekly, or one-time mowing. 20 years experience. Request your free quote today!
```

---

## 9. Branding & Visual Identity

### 9.1 Brand Attributes

- **Vibe:** Professional and polished
- **Experience emphasis:** 20 years serving Louisville
- **Trust signals:** Fully insured, established business

### 9.2 Color Direction

Green and complementary earthy tones. Suggested palette:

- **Primary:** Deep forest green (professional, established) — suggest `#2D5016` or similar
- **Secondary:** Warm earth brown or tan — suggest `#8B7355` or similar
- **Accent:** Fresh grass green (energy, growth) — suggest `#4A7D26` or similar
- **Neutrals:** Cream, off-white, charcoal for backgrounds and text

### 9.3 Logo

Logo to be created from scratch. Requirements:
- Works in full color
- Works in single color (for uniforms, vehicle decals)
- Works at favicon size (16x16, 32x32)
- Includes business name "Aaron's Lawn Care"

### 9.4 Typography

- Clean, professional sans-serif fonts
- High readability on mobile devices
- Consistent hierarchy across all pages

---

## 10. Newsletter Integration

### 10.1 Platform

Mailchimp

### 10.2 Signup Locations

- Home page (above footer)
- Footer (all pages)
- Dedicated signup on Contact page

### 10.3 Signup Form Fields

- Email address (required)
- First name (optional)

### 10.4 Content Purpose

- Seasonal lawn care tips and reminders
- Promotions and special offers
- Service availability updates (snow removal season, etc.)

---

## 11. Social Media Integration

Links to social profiles in header and/or footer:

- Facebook
- Instagram
- X (Twitter)

*Note: Actual profile URLs to be added once accounts are created.*

---

## 12. Technical Specifications

| Specification | Details |
|--------------|---------|
| Framework | React |
| Hosting | Netlify |
| Domain | TBD - to be registered |
| SSL Certificate | Required (Netlify provides free) |
| Responsive Design | Mobile-first approach |
| Content Management | Managed by developer (Stacey) |
| Form Handling | Netlify Forms or custom solution |
| Analytics | Google Analytics 4 |
| Performance Target | 90+ Lighthouse score |

### 12.1 Domain Recommendations

Selected domain name, based on availability

- aaronslawncare502.com

### 12.2 Technical Requirements

- React 18+
- React Router for navigation
- Responsive images with lazy loading
- Form validation (client-side)
- Accessible (WCAG 2.1 AA compliance)
- Fast initial page load (< 3 seconds)
- Optimized images (WebP format where supported)

### 12.3 Project Structure (Suggested)

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── ServiceCard.jsx
│   ├── forms/
│   │   ├── QuoteForm.jsx
│   │   └── NewsletterSignup.jsx
│   └── gallery/
│       ├── Gallery.jsx
│       ├── GalleryFilter.jsx
│       └── BeforeAfter.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── Gallery.jsx
│   ├── Reviews.jsx
│   ├── Quote.jsx
│   ├── Contact.jsx
│   ├── PrivacyPolicy.jsx
│   └── TermsOfService.jsx
├── data/
│   ├── services.js
│   └── gallery.js
├── styles/
│   └── (CSS/SCSS files)
├── assets/
│   └── images/
├── utils/
│   └── helpers.js
└── App.jsx
```

---

## 13. Legal Pages

### 13.1 Privacy Policy

Must address:

- Data collected via quote request form
- Newsletter subscription data
- Cookie usage and analytics
- Third-party services (Mailchimp, Google Analytics)
- Contact information for privacy inquiries
- Data retention policies
- User rights regarding their data

### 13.2 Terms of Service

Standard website terms covering:

- Website use limitations
- Quote request disclaimer (quotes are estimates, final pricing determined after on-site visit)
- Intellectual property
- Limitation of liability
- Governing law (Kentucky)

---

## 14. Accessibility Requirements

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast (4.5:1 minimum)
- Alt text on all images
- Focus indicators on interactive elements
- Skip navigation link

---

## 15. Future Considerations (Phase 2+)

Items explicitly out of scope for this phase but planned for future development:

- Customer portal/login functionality
- Online scheduling system
- Online payment processing
- Customer mobile app
- Business operations app (job management, billing)
- Integration between website and app systems
- Blog for content marketing
- Live chat functionality
- SMS notifications

---

## 16. Content Placeholders

### 16.1 About Page Placeholder

> "For over 20 years, Aaron's Lawn Care has been serving the greater Louisville area with professional, reliable lawn care and landscaping services. As a locally-owned business, we take pride in treating every property as if it were our own. We're fully insured and committed to delivering quality work that exceeds your expectations."
>
> *[Expand with Aaron's personal story and values]*

### 16.2 Testimonials Placeholder

> "Customer testimonials coming soon. We're proud of our work and our customers' satisfaction. Check back soon to see what Louisville homeowners are saying about Aaron's Lawn Care."

### 16.3 Service Description Templates

Each service page needs:

1. **H1 headline** with service name and location
2. **Intro paragraph** explaining the service
3. **Benefits section** (why choose Aaron's for this service)
4. **What to expect** (process description)
5. **CTA** to request a quote
6. **Related gallery images**

---

## 17. Image Requirements

### 17.1 Gallery Images

- Before/after pairs for each service type
- High resolution (minimum 1200px wide)
- Consistent aspect ratio (16:9 recommended)
- Optimized file sizes for web
- Descriptive filenames for SEO

### 17.2 File Naming Convention

```
{service}-{location}-{descriptor}-{before|after}.jpg

Examples:
lawn-mowing-louisville-residential-before.jpg
lawn-mowing-louisville-residential-after.jpg
tree-removal-louisville-backyard-before.jpg
```

---

## 18. Launch Checklist

- [ ] All pages built and content populated
- [ ] Quote form tested and email delivery confirmed
- [ ] Newsletter signup connected to Mailchimp
- [ ] All images optimized and alt text added
- [ ] Meta titles and descriptions added to all pages
- [ ] Schema markup implemented
- [ ] Google Analytics installed
- [ ] SSL certificate active
- [ ] Mobile responsiveness tested
- [ ] Cross-browser testing complete
- [ ] Lighthouse score 90+
- [ ] Privacy policy and terms of service published
- [ ] Social media links updated (when accounts ready)
- [ ] Google Business Profile created/updated
- [ ] 404 page created
- [ ] Favicon installed
- [ ] Domain DNS configured
- [ ] Form spam protection implemented

---

*— End of Document —*
