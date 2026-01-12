# Location Page Template Documentation

**Version:** 1.0
**Purpose:** Template structure for Aaron's Lawn Care neighborhood location pages
**Date:** 2025-01-12

---

## Overview

This document outlines the complete structure, components, and content requirements for creating location-specific pages for Aaron's Lawn Care neighborhood service areas.

---

## Page Architecture

### Component Structure

```tsx
// LocationPage.tsx
<div className="location-page">
  <Hero/>                    // Neighborhood hero section
  <ServiceCoverage/>         // Services available in area
  <WhyChooseUs/>            // Local expertise section
  <ServiceDetails/>         // Detailed service offerings
  <Testimonials/>           // Area-specific reviews
  <ServiceMap/>             // Interactive service area map
  <FAQ/>                    // Neighborhood-specific FAQs
  <LocalContext/>           // Neighborhood info & community
  <CTASection/>             // Final call-to-action
  <SchemaScripts/>          // JSON-LD schema markup
</div>
```

### Props Interface

```typescript
interface LocationPageProps {
  neighborhoodName: string;      // "St. Matthews"
  slug: string;                  // "st-matthews"
  city: string;                  // "Louisville"
  state: string;                 // "Kentucky" or "KY"
  zipCode: string;               // "40207"
  latitude: number;              // 38.2338
  longitude: number;             // -85.6614
  services: ServiceData[];       // Available services
  testimonials: TestimonialData[]; // Area-specific reviews
  landmarks?: string[];          // Local landmarks
  established?: number;          // Year established in area
  areaDescription?: string;      // Custom area description
}

interface ServiceData {
  id: string;
  name: string;
  description: string;
  image?: string;
  featured: boolean;
}

interface TestimonialData {
  author: string;
  location: string;            // Neighborhood-specific
  rating: number;              // 1-5
  text: string;
  date: string;
  service: string;
}
```

---

## Section-by-Section Template

### 1. HERO SECTION

**Purpose:** Immediate impact, establish neighborhood relevance
**Word Count:** 100-150 words
**Key Elements:**
- Neighborhood name prominently displayed
- Clear value proposition
- Primary CTA button
- Background image (lawn/landscape in neighborhood)

**Content Template:**

```
HEADLINE:
"Professional Lawn Care Services in [Neighborhood], Louisville"

SUBHEADING:
"Transform your [Neighborhood] yard with Aaron's Lawn Care—your trusted local experts"

BODY:
Aaron's Lawn Care has been serving [Neighborhood] homeowners since [YEAR] with
professional lawn mowing, landscaping, and yard maintenance. We understand the
specific needs of [NEIGHBORHOOD]'s properties and provide customized solutions
that keep your lawn looking beautiful year-round.

[CTA BUTTON: "Get Your Free Quote Today"]
```

**SEO Considerations:**
- Include primary keyword in H1 (headline)
- Use neighborhood name naturally 2-3 times
- Include local geography references
- Include year established (if applicable)

**Design Notes:**
- Hero image should show actual [Neighborhood] properties (if available)
- Fallback to generic landscape/lawn image
- Responsive: Full-width on mobile, contained on desktop
- Text overlay with semi-transparent background for readability

---

### 2. SERVICE COVERAGE SECTION

**Purpose:** Quickly show what services available in this area
**Word Count:** 150-200 words
**Key Elements:**
- Service grid (4-6 services)
- Brief description per service
- Links to detailed service pages
- Service icons

**Content Template:**

```
SECTION TITLE:
"Comprehensive Lawn Care Services in [Neighborhood]"

INTRODUCTORY TEXT:
Whether you need regular lawn mowing, landscape design, or seasonal cleanup,
Aaron's Lawn Care provides full-service solutions for [Neighborhood] properties.
We're committed to keeping your yard in top condition, no matter the season.

[SERVICE CARDS IN GRID - 4-6 SERVICES]

SERVICE CARD EXAMPLE:
---
ICON: [Lawn mowing icon]
SERVICE NAME: "Lawn Mowing"
DESCRIPTION: "Weekly or bi-weekly lawn mowing tailored to your [Neighborhood] property's needs."
[LINK: "Learn More →"]
---

[INCLUDE 4-5 MORE SIMILAR CARDS]

CLOSING TEXT:
All services are customized for [Neighborhood] properties and available for
monthly contracts or one-time services. [CTA: "Explore All Services"]
```

**SEO Considerations:**
- Use H2 for section title
- Include service names with neighborhood modifiers
- Link to service detail pages
- Natural keyword inclusion (1-2% density)

**Content Notes:**
- Choose 4-6 primary services most in-demand for area
- Each service gets 1-2 sentence description
- Keep descriptions concise and scannable
- Link to main service pages for more detail

---

### 3. WHY CHOOSE AARON'S IN [NEIGHBORHOOD]

**Purpose:** Build local authority and trust
**Word Count:** 200-300 words
**Key Elements:**
- Local expertise highlight
- Years of service in area
- Neighborhood-specific benefits
- Trust signals and credentials
- Area-specific testimonial mention

**Content Template:**

```
SECTION TITLE:
"Why [Neighborhood] Homeowners Choose Aaron's Lawn Care"

INTRODUCTION:
We're not just a lawn care company—we're your [Neighborhood] neighbors committed
to transforming your outdoor space. With [X] years of experience serving
[NEIGHBORHOOD], we understand this community's unique landscape challenges and opportunities.

SUBSECTION: Local Expertise
[Neighborhood] properties have specific characteristics we know intimately:
- [Specific soil type/condition common in area]
- [Typical plant types and seasonal challenges]
- [Climate/weather patterns affecting landscaping]
- [Common property styles and landscaping preferences]

Our team lives and works in [NEIGHBORHOOD], and we pride ourselves on providing
personalized service that reflects our commitment to this community.

SUBSECTION: What Sets Us Apart
✓ [X] years serving [Neighborhood] residents
✓ Licensed and insured professionals
✓ Same-day service available
✓ Free estimates and consultations
✓ 100% satisfaction guarantee
✓ Eco-friendly practices
✓ Community involvement and local partnerships

SUBSECTION: Trusted by [Neighborhood] Homeowners
Our [NEIGHBORHOOD] customers consistently rate us highly for:
• Professional and reliable service
• Attention to detail and property care
• Fair and transparent pricing
• Friendly and responsive team
• Reliable scheduling and follow-through

[TESTIMONIAL QUOTE FROM AREA CUSTOMER]
"[Customer name]" — St. Matthews homeowner

[LINK TO REVIEWS: "Read more [Neighborhood] reviews →"]
```

**SEO Considerations:**
- Use H2 for main section
- Use H3 for subsections
- Include neighborhood name 3-5 times naturally
- Incorporate local keywords organically
- Add internal link to reviews/testimonials

**Content Notes:**
- Use specific, verifiable local claims only
- Include real accomplishments and credentials
- Reference actual neighborhood characteristics
- Include year established if significant
- Use bullet points for scannability
- Incorporate actual testimonial if possible

---

### 4. DETAILED SERVICES SECTION

**Purpose:** Provide comprehensive service information
**Word Count:** 300-400 words total (50-80 per service)
**Key Elements:**
- Service-specific details
- Process/timeline information
- Pricing or service options
- Neighborhood-specific benefits
- Links to service pages

**Content Template:**

```
SECTION TITLE:
"Our [Neighborhood] Lawn Care Services"

SERVICE 1: LAWN MOWING
SUBHEADING: "Professional Lawn Mowing in [Neighborhood]"

We provide regular lawn mowing services tailored to your [Neighborhood] property's
needs and your schedule preferences. Our professional-grade equipment and experienced
team ensure a pristine cut every time.

What's Included:
✓ Precision cutting at proper grass height
✓ Edging and trimming
✓ Debris cleanup and disposal
✓ Weekly or bi-weekly scheduling
✓ Flexible service adjustments

[NEIGHBORHOOD]-SPECIFIC BENEFITS:
[Neighborhood] properties benefit from our understanding of local grass types,
seasonal growth patterns, and soil conditions. We adjust our mowing schedule and
techniques based on current weather and grass growth to maintain your lawn in peak condition.

PRICING: Starting at $[X]/mow or $[X]/month for regular service
[LINK: "Schedule Lawn Mowing Service"]

---

SERVICE 2: [SERVICE NAME]
[REPEAT ABOVE STRUCTURE FOR EACH MAJOR SERVICE]

---

[INCLUDE 4-5 MAJOR SERVICES IN THIS FORMAT]

CLOSING:
All services are fully customizable and available on flexible schedules.
We work with your timeline and budget to deliver professional results.

[CTA: "Get Free Estimate for Any Service"]
```

**SEO Considerations:**
- Use H3 for each service name
- Include "[Service] in [Neighborhood]" naturally
- Include neighborhood name in benefits section
- Optimize alt text for images (if included)
- Link to main service pages

**Content Notes:**
- Adapt generic service descriptions with neighborhood-specific details
- Include actual pricing if possible (or pricing ranges)
- Detail what's included in each service
- Explain neighborhood-specific benefits
- Keep each service description to 75-100 words
- Focus on benefits, not just features

---

### 5. TESTIMONIALS SECTION

**Purpose:** Social proof and credibility
**Word Count:** 100-150 words
**Key Elements:**
- 3-5 testimonials specifically from neighborhood
- Star ratings
- Customer name and neighborhood
- Service received
- Specific results mentioned
- Photo if available

**Content Template:**

```
SECTION TITLE:
"Trusted by [Neighborhood] Homeowners"

INTRODUCTORY TEXT:
See what your neighbors are saying about Aaron's Lawn Care.

[TESTIMONIAL CARD 1]
★★★★★ (5 STARS)
"Aaron's Lawn Care completely transformed our front yard. The attention to detail
and professionalism was outstanding. Highly recommend to anyone in [Neighborhood]!"

— [Customer First Name], [Service Type] customer
[Optional: "Serving [Neighborhood] since [Year]"]
[Optional: Photo of customer or property]

---

[TESTIMONIAL CARDS 2-5]
[Repeat above structure]

CLOSING:
[LINK: "View All [Neighborhood] Reviews →"]
[LINK: "View Our Full Review Collection →"]
```

**SEO Considerations:**
- Include neighborhood name in testimonials when possible
- Use H2 for section title
- Include natural review keywords (professional, reliable, etc.)
- Link to full review/testimonial page

**Content Notes:**
- Use only verified, genuine testimonials
- Get explicit permission from customers before publishing
- Include photo with permission (builds trust)
- Vary services mentioned across testimonials
- Target 3-5 reviews minimum for social proof
- Date testimonials if possible
- Include customer name (first name + last initial if preferred)

---

### 6. SERVICE AREA MAP SECTION

**Purpose:** Visual representation of service boundaries
**Word Count:** 75-100 words
**Key Elements:**
- Interactive Google Map
- Highlighted service area
- Neighborhood boundaries marked
- Nearby service areas callout
- Map controls (zoom, etc.)

**Content Template:**

```
SECTION TITLE:
"Our [Neighborhood] Service Area"

INTRODUCTORY TEXT:
Aaron's Lawn Care proudly serves all of [Neighborhood] and surrounding areas.
Use the map below to see our coverage area, or contact us to confirm service
availability for your specific address.

[INTERACTIVE MAP]
- Center: [Neighborhood center coordinates]
- Highlight: Service boundaries
- Markers: Key landmarks (optional)
- Zoom: Default to neighborhood view
- Callouts: Neighboring service areas

SERVICE AREA NOTES:
We serve the following [Neighborhood] areas:
• [Specific streets/zones within neighborhood]
• [Major landmarks or subdivisions]
• [ZIP codes in service area]

NOT SURE IF WE SERVE YOUR ADDRESS?
[CTA: "Check Service Availability →"]
```

**SEO Considerations:**
- Include neighborhood name and ZIP codes naturally
- Provide clear service boundary information
- Link to service area confirmation

**Technical Notes:**
- Use Google Maps API or similar embed
- Center map on neighborhood center point
- Provide coordinates for each neighborhood
- Make map responsive for mobile
- Include fallback static map for accessibility

**Coordinates by Neighborhood:**
```
St. Matthews: 38.2338, -85.6614
Highlands: 38.2044, -85.7383
Jeffersontown: 38.2389, -85.5453
Middletown: 38.2194, -85.4964
Okolona: 38.2014, -85.5711
Prospect: 38.3103, -85.6869
Anchorage: 38.2733, -85.6544
Lyndon: 38.3014, -85.7328
Eastwood: 38.2294, -85.6011
Bashford Manor: 38.1903, -85.5825
```

---

### 7. FAQ SECTION

**Purpose:** Answer neighborhood-specific questions, improve SEO
**Word Count:** 200-300 words total
**Key Elements:**
- 8-12 questions and answers
- Neighborhood-specific relevance
- Expandable/accordion format
- Clear, concise answers
- Internal links when relevant

**Content Template:**

```
SECTION TITLE:
"Frequently Asked Questions About [Neighborhood] Lawn Care"

INTRODUCTORY TEXT:
Have questions about our services in [Neighborhood]? Find answers to the most
common questions below.

[ACCORDION/EXPANDABLE FAQS]

Q1: Do you service [Neighborhood]?
A: Yes! Aaron's Lawn Care is proud to serve all of [NEIGHBORHOOD] and surrounding
areas. We've been serving [NEIGHBORHOOD] residents since [YEAR]. To confirm service
availability for your specific address, [LINK: "contact us here"].

Q2: What lawn care services do you offer in [Neighborhood]?
A: We provide comprehensive lawn care services in [NEIGHBORHOOD] including lawn mowing,
edging, leaf removal, mulching, landscape design, hedge trimming, and seasonal cleanups.
[LINK: "View all our services →"]

Q3: What are typical service costs in [Neighborhood]?
A: Service costs depend on property size and service type. We offer flexible options
including weekly, bi-weekly, or monthly lawn mowing, plus one-time specialty services.
[LINK: "Request a free quote →"]

Q4: How quickly can you schedule service in [Neighborhood]?
A: We offer same-day and next-day service availability for most [NEIGHBORHOOD] customers.
For recurring service, we'll work with your schedule. [LINK: "Schedule online →"]

Q5: Can you handle [SPECIFIC CHALLENGE COMMON TO AREA]?
A: Absolutely. [Specific neighborhood challenge] is common in [NEIGHBORHOOD] properties.
Our team has extensive experience addressing this through [specific solution].
[LINK: "Learn about [Service Name] →"]

Q6: Are you insured and licensed?
A: Yes. Aaron's Lawn Care is fully licensed and insured in Kentucky. We maintain current
credentials and liability coverage for all our services.

Q7: Do you offer seasonal services in [Neighborhood]?
A: Yes! We provide spring cleanup, fall leaf removal, spring landscaping, and winter
snow removal services. [LINK: "View seasonal services →"]

Q8: What makes Aaron's different from other [Neighborhood] lawn care companies?
A: We're local [NEIGHBORHOOD] owners with [X] years of experience in this community.
We provide personalized service, fair pricing, and a 100% satisfaction guarantee.
[LINK: "Why choose Aaron's? →"]

Q9: [Additional neighborhood-specific question]
A: [Answer with neighborhood context]

Q10-Q12: [Additional FAQs as needed]

[STILL HAVE QUESTIONS?]
[CTA: "Contact us for personalized service →"]
```

**SEO Considerations:**
- Use H3 for questions (helps with question-based keyword targeting)
- Include neighborhood name in questions
- Use natural, conversational language
- Include internal links (2-3 per section)
- Implement FAQPage schema (see schema section)

**Content Notes:**
- Focus on genuine customer questions
- Address neighborhood-specific concerns
- Keep answers concise (50-100 words each)
- Use expandable/accordion format for readability
- Test that questions/answers are findable
- Update quarterly with new customer questions

---

### 8. LOCAL CONTEXT SECTION

**Purpose:** Establish neighborhood familiarity and community engagement
**Word Count:** 200-250 words
**Key Elements:**
- Neighborhood statistics
- Local landmarks and references
- Seasonal considerations
- Community involvement
- Neighborhood character description

**Content Template:**

```
SECTION TITLE:
"About [Neighborhood]"

NEIGHBORHOOD OVERVIEW:
[Neighborhood] is one of Louisville's most desirable communities, known for its
[characteristic 1], [characteristic 2], and [characteristic 3]. The neighborhood
is home to approximately [population] residents and features a mix of [property types].

KEY NEIGHBORHOOD FEATURES:
• Located [distance] east of downtown Louisville
• Primary ZIP code: [40207] (and others if applicable)
• Notable landmarks: [St. Matthew's Mall, etc.]
• Nearby attractions: [Parks, shopping, dining options]
• Community center: [Local centers or organizations]
• Schools: [Notable schools in area]

RESIDENTIAL CHARACTER:
[Neighborhood] properties range from [style 1] to [style 2], with mature landscaping
being a defining feature. Many properties feature established trees, foundation plantings,
and mature lawns that require specialized care.

SEASONAL CONSIDERATIONS:
Maintaining a beautiful lawn in [NEIGHBORHOOD] requires attention to the area's specific
seasonal patterns:
• Spring: Focus on cleanup, fresh mulching, and new plantings
• Summer: Regular mowing and watering schedules
• Fall: Leaf removal and fall cleanup are essential
• Winter: Snow removal and dormant season maintenance

AARON'S IN [NEIGHBORHOOD]:
Aaron's Lawn Care is committed to being an active part of the [NEIGHBORHOOD] community.
We sponsor local [events/organizations], maintain partnerships with [local businesses],
and take pride in serving our neighbors.

[Learn more: "Our commitment to [Neighborhood] →"]
```

**SEO Considerations:**
- Include neighborhood name 4-6 times naturally
- Include ZIP codes
- Mention local landmarks
- Use H2 for section title, H3 for subsections
- Builds topical relevance for neighborhood queries

**Content Notes:**
- Research actual neighborhood characteristics
- Include real statistics (population, location, etc.)
- Reference actual local businesses and landmarks
- Mention actual community involvement if applicable
- Seasonal content should be customizable
- Keep tone professional but community-focused

---

### 9. FINAL CTA SECTION

**Purpose:** Drive conversions and quote requests
**Word Count:** 75-100 words
**Key Elements:**
- Clear value proposition
- Multiple CTA options
- Urgency element (optional)
- Contact information
- Trust signals

**Content Template:**

```
SECTION TITLE:
"Ready to Transform Your [Neighborhood] Yard?"

MAIN CTA TEXT:
Let Aaron's Lawn Care handle your [Neighborhood] lawn care and landscaping needs.
Get started with a free, no-obligation quote today.

[PRIMARY CTA BUTTON: "Get Your Free Quote"]
[SECONDARY CTA BUTTON: "Schedule Service Online"]

ALTERNATIVE CONTACT METHODS:
• Call: (502) XXX-XXXX
• Email: [email@example.com]
• Text: [Text to quote option]

TRUST SIGNALS:
✓ 100% satisfaction guarantee
✓ Licensed and insured
✓ Same-day/next-day available
✓ [X] years serving [Neighborhood]

[OPTIONAL: LIMITED TIME OFFER]
"First-time customers in [NEIGHBORHOOD]: 10% off your first service. Call or click above."
```

**SEO Considerations:**
- Include neighborhood name 1-2 times
- Natural placement of primary keywords
- Multiple conversion paths
- Clear next step for user

**Design Notes:**
- High contrast CTA buttons
- Make CTA buttons sticky/visible on mobile
- Multiple options (call, quote, schedule)
- Clear phone number display
- Trust signals prominently shown

---

## Schema Markup Implementation

### Required Schema Scripts

Add to `<head>` or end of `<body>` of location page:

```html
<!-- LocalBusiness Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "LandscapingService"],
  "name": "Aaron's Lawn Care",
  "image": "https://aaronslawncareluv.com/logo.png",
  "description": "Professional lawn care and landscaping services in [Neighborhood], Louisville, Kentucky.",
  "url": "https://aaronslawncareluv.com/areas/[slug]/",
  "telephone": "(502) XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Service area address]",
    "addressLocality": "[Neighborhood]",
    "addressRegion": "KY",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [LATITUDE],
    "longitude": [LONGITUDE]
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "[Neighborhood]",
      "addressRegion": "KY",
      "addressCountry": "US"
    }
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://www.google.com/maps/...",
    "https://www.facebook.com/...",
    "https://www.yelp.com/..."
  ]
}
</script>

<!-- Organization Schema (if not in global head) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aaron's Lawn Care",
  "url": "https://aaronslawncareluv.com",
  "logo": "https://aaronslawncareluv.com/logo.png",
  "foundingDate": "[FOUNDING YEAR]",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(502) XXX-XXXX",
    "contactType": "Customer Service"
  }
}
</script>

<!-- FAQPage Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you service [Neighborhood]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Aaron's Lawn Care is proud to serve all of [Neighborhood]..."
      }
    }
    // ... more questions
  ]
}
</script>

<!-- AggregateRating Schema (if reviews available) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "127",
  "bestRating": "5",
  "worstRating": "1"
}
</script>

<!-- Breadcrumb Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aaronslawncareluv.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Service Areas",
      "item": "https://aaronslawncareluv.com/areas"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Neighborhood]",
      "item": "https://aaronslawncareluv.com/areas/[slug]/"
    }
  ]
}
</script>
```

### Validation

- Test all schema at [Schema.org Validator](https://schema.org/docs/schemas.html)
- Use [Google Rich Result Test](https://search.google.com/test/rich-results)
- Validate after each page update

---

## SEO Meta Tags

### Title Tag (60 characters max)
```
[Service] in [Neighborhood], Louisville | Aaron's
Example: "Lawn Care in St. Matthews, Louisville | Aaron's"
```

### Meta Description (160 characters max)
```
Professional [service] in [Neighborhood], Louisville. Free quotes, same-day
service available. Trusted by [Neighborhood] since [year].
```

### Header Tags Hierarchy
- **H1:** "[Service Type] in [Neighborhood], Louisville" (page title)
- **H2:** "Why [Neighborhood] Homeowners Choose Aaron's"
- **H2:** "Our [Neighborhood] Lawn Care Services"
- **H2:** "Frequently Asked Questions"
- **H3:** Individual service names, subsection titles

### Image Alt Text
```
[Service type] in [Neighborhood] by Aaron's Lawn Care
Example: "Professional lawn mowing in St. Matthews by Aaron's Lawn Care"
```

---

## Content Checklist

- [ ] All sections completed with neighborhood-specific content
- [ ] Minimum 800-1,200 words of original content
- [ ] Primary keyword in H1, title, and meta description
- [ ] 3-5 neighborhood mentions throughout
- [ ] 3-5 area-specific testimonials included
- [ ] Service area map implemented with correct coordinates
- [ ] All internal links working and relevant
- [ ] All images optimized and properly alt-tagged
- [ ] Schema markup validation passed
- [ ] Mobile responsiveness verified
- [ ] Page load time under 3 seconds
- [ ] All CTAs visible and clickable
- [ ] Contact information accurate
- [ ] Phone number format consistent

---

## File Structure

```
/src/pages/locations/
├── LocationPage.tsx                    # Template component
├── LocationPageTemplate.tsx            # Generic template
└── [neighborhoodSlug]/
    └── index.tsx                       # Specific location page

/src/data/locations/
├── locations.ts                        # Location data
└── neighborhoods.ts                    # Neighborhood metadata

/src/schemas/
└── locationSchemas.ts                  # Location-specific schema generators

/src/components/locations/
├── LocationHero.tsx
├── LocationServiceCoverage.tsx
├── LocationWhyChooseUs.tsx
├── LocationServiceDetails.tsx
├── LocationTestimonials.tsx
├── LocationMap.tsx
├── LocationFAQ.tsx
├── LocationContext.tsx
└── LocationCTA.tsx
```

---

## Data Structure for Location Pages

```typescript
// data/locations/neighborhoods.ts

export interface NeighborhoodData {
  id: string;
  name: string;
  slug: string;
  state: string;
  city: string;
  zipCodes: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  population: number;
  established: number;
  landmarks: string[];
  characteristics: string[];
  seasonalNotes: string;
  services: ServiceReference[];
  testimonials: TestimonialReference[];
  description: string;
  seoKeywords: string[];
}

const neighborhoods: NeighborhoodData[] = [
  {
    id: "st-matthews",
    name: "St. Matthews",
    slug: "st-matthews",
    state: "Kentucky",
    city: "Louisville",
    zipCodes: ["40207", "40205"],
    coordinates: {
      latitude: 38.2338,
      longitude: -85.6614
    },
    population: 18000,
    established: 2015,
    landmarks: ["St. Matthew's Mall", "Watterson Park"],
    characteristics: ["Affluent suburban community", "Large established homes"],
    seasonalNotes: "Spring and fall cleanup are critical for mature lawns",
    services: ["lawn-mowing", "edging", "landscape-design"],
    testimonials: ["st-matthews-testimonial-1", "st-matthews-testimonial-2"],
    description: "St. Matthews is one of Louisville's most desirable communities...",
    seoKeywords: ["lawn care st matthews", "landscaping st matthews ky"]
  }
  // ... more neighborhoods
];
```

---

## Performance Optimization

### Image Optimization
- Use WebP format with fallbacks
- Optimize for mobile (max-width: 1200px)
- Lazy load below-fold images
- Use proper image dimensions (avoid distortion)
- Compress to <100KB per image

### Code Optimization
- Lazy load schema scripts (use defer attribute)
- Minimize CSS/JS for location pages
- Cache static location data
- Use CDN for images
- Implement service worker for offline fallback

### Speed Targets
- Page load: <3 seconds
- First contentful paint: <1.5 seconds
- Largest contentful paint: <2.5 seconds
- Cumulative layout shift: <0.1

---

## Maintenance Schedule

### Monthly
- Update testimonials and reviews
- Check all links functionality
- Verify phone number and contact info
- Monitor keyword rankings

### Quarterly
- Refresh location images (seasonal updates)
- Update seasonal notes and local context
- Review and update FAQ section
- Check schema markup validity

### Annually
- Full content audit and refresh
- Update neighborhood statistics
- Refresh testimonial collection
- Evaluate expansion to new neighborhoods

---

## Summary

This template provides a comprehensive, reusable structure for creating location pages that are:
- **SEO-optimized** for local search
- **Conversion-focused** with multiple CTAs
- **Content-rich** with 800-1,200+ words
- **Properly structured** with schema markup
- **Mobile-friendly** and accessible
- **Maintainable** with clear data structures

Use this template as the foundation for all new location pages, customizing content while maintaining the overall structure and SEO best practices.
