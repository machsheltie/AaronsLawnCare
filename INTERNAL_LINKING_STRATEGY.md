# Internal Linking Strategy for Location Pages

**Version:** 1.0
**Purpose:** Comprehensive guide for internal linking across location pages and main site
**Date:** 2025-01-12

---

## Overview

Effective internal linking:
- Establishes information architecture hierarchy
- Distributes page authority throughout site
- Improves crawlability and indexation
- Helps users navigate to relevant content
- Strengthens topical clusters for SEO

**Target:** 5-11 internal links per location page, strategically distributed

---

## Site Architecture Map

```
HOME (/)
│
├─ SERVICES (/services)
│  │
│  ├─ Lawn Mowing (/services/lawn-mowing)
│  │  ├─ → Lawn Mowing in St. Matthews (/areas/st-matthews/#lawn-mowing)
│  │  ├─ → Lawn Mowing in Highlands (/areas/highlands/#lawn-mowing)
│  │  └─ → Lawn Mowing in Jeffersontown (/areas/jeffersontown/#lawn-mowing)
│  │
│  ├─ Landscape Design (/services/landscape-design)
│  │  ├─ → Design in St. Matthews (/areas/st-matthews/#design)
│  │  └─ → Design in Highlands (/areas/highlands/#design)
│  │
│  ├─ Edging (/services/edging)
│  ├─ Mulching (/services/mulching)
│  ├─ Seasonal Cleanup (/services/seasonal-cleanup)
│  └─ Snow Removal (/services/snow-removal)
│
├─ AREAS (/areas) [Location Hub]
│  │
│  ├─ St. Matthews (/areas/st-matthews)
│  │  ├─ ↔ Highlands (nearby)
│  │  ├─ ↔ Jeffersontown (nearby)
│  │  └─ → All Services (/services)
│  │
│  ├─ Highlands (/areas/highlands)
│  │  ├─ ↔ St. Matthews (nearby)
│  │  ├─ ↔ Jeffersontown (nearby)
│  │  └─ → All Services (/services)
│  │
│  ├─ Jeffersontown (/areas/jeffersontown)
│  │  ├─ ↔ Middletown (nearby)
│  │  ├─ ↔ Anchorage (nearby)
│  │  ├─ ↔ Prospect (nearby)
│  │  └─ → All Services (/services)
│  │
│  └─ [More neighborhoods...]
│
├─ ABOUT (/about)
├─ CONTACT (/contact)
├─ REVIEWS (/reviews)
└─ BLOG (/blog)
```

---

## Internal Linking Patterns

### Pattern 1: Service → Locations

**From:** Service detail page (e.g., `/services/lawn-mowing/`)
**To:** Location pages offering that service
**Anchor Text:** "[Service] in [Neighborhood]"
**Frequency:** 1-2 per service page
**Example:**

```html
<p>
  We're proud to serve Louisville's finest neighborhoods including
  <a href="/areas/st-matthews/">lawn mowing in St. Matthews</a>,
  <a href="/areas/highlands/">professional service in Highlands</a>,
  and <a href="/areas/jeffersontown/">quality lawn care in Jeffersontown</a>.
</p>
```

**Where on page:** Lower third of service page, in descriptive section

---

### Pattern 2: Location → Services

**From:** Location page (e.g., `/areas/st-matthews/`)
**To:** Detailed service pages for that location
**Anchor Text:** "Learn more about [Service]", "[Service] services"
**Frequency:** 3-5 per location page
**Example:**

```html
<section class="service-details">
  <h3>Professional Lawn Mowing in St. Matthews</h3>
  <p>We provide regular lawn mowing services tailored to your St. Matthews property...</p>
  <a href="/services/lawn-mowing/">Learn more about our lawn mowing services →</a>
</section>

<section class="landscape-design">
  <h3>Landscape Design for St. Matthews Homes</h3>
  <p>Create the perfect outdoor space with professional landscape design...</p>
  <a href="/services/landscape-design/">Explore landscape design options →</a>
</section>
```

**Where on page:** Within each service description section

---

### Pattern 3: Location → Related Locations

**From:** Location page
**To:** Geographically adjacent neighborhoods
**Anchor Text:** "[Neighborhood] service area", "serving [Neighborhood]"
**Frequency:** 2-3 per location page
**Example:**

```html
<section class="nearby-areas">
  <h3>Service Areas Near St. Matthews</h3>
  <p>
    If you're in <a href="/areas/highlands/">Highlands</a>,
    <a href="/areas/jeffersontown/">Jeffersontown</a>,
    or surrounding areas, Aaron's Lawn Care is here to serve you!
  </p>
</section>
```

**Where on page:** Footer or sidebar section

**Linking Rules:**
```
St. Matthews → Highlands, Jeffersontown
Highlands → St. Matthews, Jeffersontown
Jeffersontown → Middletown, Anchorage, Prospect
Middletown → Jeffersontown, Okolona
Okolona → Middletown, Prospect
Prospect → Jeffersontown, Okolona
Anchorage → Jeffersontown, Prospect
Lyndon → Eastwood, Bashford Manor
Eastwood → Lyndon, Bashford Manor
Bashford Manor → Lyndon, Eastwood
```

---

### Pattern 4: Hub → Location Pages

**From:** Location hub page (`/areas/`)
**To:** All individual location pages
**Anchor Text:** Neighborhood name, "View [Neighborhood]"
**Frequency:** One per neighborhood (10+)
**Example:**

```html
<div class="neighborhoods-grid">
  <div class="neighborhood-card">
    <img src="st-matthews.jpg" alt="St. Matthews lawn care area" />
    <h3><a href="/areas/st-matthews/">St. Matthews</a></h3>
    <p>Established neighborhoods with mature landscaping...</p>
    <a href="/areas/st-matthews/">View St. Matthews →</a>
  </div>

  <div class="neighborhood-card">
    <img src="highlands.jpg" alt="Highlands service area" />
    <h3><a href="/areas/highlands/">Highlands</a></h3>
    <p>Vibrant community with diverse properties...</p>
    <a href="/areas/highlands/">View Highlands →</a>
  </div>

  <!-- More neighborhood cards... -->
</div>
```

**Where on page:** Main content area with grid layout

---

### Pattern 5: Location → Hub

**From:** Location page
**To:** Location hub page
**Anchor Text:** "View all service areas", "Other neighborhoods"
**Frequency:** 1 per location page
**Example:**

```html
<div class="see-more-areas">
  <p>Serving more neighborhoods throughout Louisville?</p>
  <a href="/areas/">View all service areas →</a>
</div>
```

**Where on page:** Footer or sidebar

---

### Pattern 6: Home → Services/Locations

**From:** Homepage (`/`)
**To:** Services and locations
**Anchor Text:** "Our services", "Service areas"
**Frequency:** 1-2 per section
**Example:**

```html
<section class="featured-services">
  <h2>Services We Offer</h2>
  <p>Aaron's Lawn Care provides professional services across Louisville neighborhoods.</p>
  <a href="/services/">Explore all services →</a>
</section>

<section class="service-areas">
  <h2>Where We Serve</h2>
  <p>We proudly serve neighborhoods throughout Louisville.</p>
  <a href="/areas/">View all service areas →</a>
</section>
```

---

### Pattern 7: Footer Links

**From:** Footer (global)
**To:** Services, locations, main pages
**Anchor Text:** Varied (primary keywords, branded, navigational)
**Example:**

```html
<footer>
  <div class="footer-links">
    <div class="footer-column">
      <h4>Services</h4>
      <ul>
        <li><a href="/services/">All Services</a></li>
        <li><a href="/services/lawn-mowing/">Lawn Mowing</a></li>
        <li><a href="/services/landscape-design/">Landscape Design</a></li>
        <li><a href="/services/seasonal-cleanup/">Seasonal Cleanup</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Service Areas</h4>
      <ul>
        <li><a href="/areas/">All Areas</a></li>
        <li><a href="/areas/st-matthews/">St. Matthews</a></li>
        <li><a href="/areas/highlands/">Highlands</a></li>
        <li><a href="/areas/jeffersontown/">Jeffersontown</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Company</h4>
      <ul>
        <li><a href="/about/">About Us</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a href="/reviews/">Reviews</a></li>
        <li><a href="/blog/">Blog</a></li>
      </ul>
    </div>
  </div>
</footer>
```

---

## Link Anchor Text Guidelines

### Primary Keyword Anchors (5-10%)
**Purpose:** Signal target keywords to search engines
**Text:** Include location and/or service keyword

```
✓ "Lawn care in St. Matthews"
✓ "Landscaping services in Highlands"
✓ "Landscape design Jeffersontown"
✓ "Professional lawn mowing St. Matthews"
```

### Branded Anchors (30-40%)
**Purpose:** Build brand recognition and natural linking
**Text:** Include brand name

```
✓ "Aaron's Lawn Care in St. Matthews"
✓ "Our services in Highlands"
✓ "Learn about Aaron's landscaping"
✓ "Aaron's service areas"
```

### Navigational Anchors (30-40%)
**Purpose:** Natural navigation signals
**Text:** Generic navigation phrases

```
✓ "View all neighborhoods"
✓ "Learn more about services"
✓ "Service areas near you"
✓ "Explore our offerings"
✓ "More information"
```

### Long-tail/Descriptive (10-20%)
**Purpose:** Contextual relevance
**Text:** Descriptive phrases

```
✓ "Professional lawn care throughout Louisville"
✓ "Find local landscaping services"
✓ "Serving St. Matthews and surrounding areas"
✓ "Get landscape design consultation"
```

### Avoid
```
✗ "Click here"
✗ "Read more"
✗ "Link"
✗ Generic single keywords (spam-like)
✗ Over-optimization in any category
```

---

## Location Page Internal Linking Specification

### Per-Page Linking Template

**Location Page:** `/areas/[neighborhood]/`

**Outgoing Links Required:**

1. **Service Links (3-5 links)**
   - Each major service gets 1 link
   - Pattern: [Service] in [Neighborhood]
   - Destination: Service detail page or section
   - Example: "Learn more about lawn mowing in St. Matthews"
   - Placement: Within service description section

2. **Related Location Links (2-3 links)**
   - Link to 2-3 neighboring areas
   - Pattern: [Related Neighborhood]
   - Destination: Related location page
   - Placement: Sidebar, "Nearby Areas" section, or footer

3. **Hub Link (1 link)**
   - Link back to location hub
   - Pattern: "View all service areas"
   - Destination: /areas/
   - Placement: Footer or main navigation

4. **Home Link (1 link)**
   - Link to homepage
   - Pattern: Branded link
   - Destination: /
   - Placement: Logo in header or footer (global)

5. **Review/Portfolio Link (0-1 link)**
   - Link to neighborhood-specific reviews
   - Pattern: "[Neighborhood] reviews"
   - Destination: /reviews/?location=st-matthews
   - Placement: Testimonials section (optional)

**Total per page:** 7-11 links

---

## Anchor Text Distribution Per Location Page

```
St. Matthews Location Page Anchor Text Breakdown:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primary Keyword (8%):
  • "Lawn mowing in St. Matthews" (1)

Branded (35%):
  • "Aaron's Lawn Care in St. Matthews" (1)
  • "Aaron's Lawn Care services" (1)
  • "Our St. Matthews service area" (1)
  • "Aaron's" (1)

Navigational (40%):
  • "Learn more about lawn mowing" (1)
  • "View landscape design services" (1)
  • "Explore all services" (1)
  • "View all service areas" (1)
  • "More neighborhoods" (1)
  • "Service areas" (1)

Long-tail (17%):
  • "Professional lawn care in surrounding areas" (1)
  • "Serving Highlands and Jeffersontown" (1)

Total: 11 links per page
```

---

## Linking Timeline & Phasing

### Phase 1: Hub & Primary Pages (Week 1)
- Create /areas/ hub page
- Create St. Matthews location page (full linking)
- Create Highlands location page (full linking)
- Create Jeffersontown location page (full linking)
- Update service pages with location links

### Phase 2: Secondary Neighborhoods (Week 2)
- Create 4 secondary location pages
- Update hub page links
- Test all internal links

### Phase 3: Tertiary & Optimization (Week 3)
- Create remaining location pages
- Verify all linking patterns
- Test site crawlability
- Optimize anchor text distribution

### Phase 4: Ongoing Maintenance
- Monthly review of broken links
- Update links as new content added
- Monitor link click-through rates
- Refine anchor text based on performance

---

## Tools & Testing

### Link Validation

```bash
# Check for broken links
# Using Screaming Frog, Ahrefs, or similar tools:
1. Crawl entire site
2. Filter for HTTP 404 errors
3. Monitor internal links
4. Track redirect chains
```

### Anchor Text Analysis

```bash
# Audit anchor text distribution
# Using Google Analytics or similar:
1. Check "link clicks by anchor text"
2. Verify distribution across categories
3. Identify over-optimization
4. Plan adjustments
```

### Internal Link Report Template

```
INTERNAL LINK AUDIT - LOCATION PAGES
═══════════════════════════════════════════

Location: St. Matthews
URL: https://aaronslawncareluv.com/areas/st-matthews/

OUTGOING LINKS:
Service Links:        3 (lawn-mowing, landscape-design, edging)
Related Locations:    3 (highlands, jeffersontown, middletown)
Hub Link:            1 (/areas)
Home Link:           1 (/)
Other Links:         2 (reviews, blog)
─────────────────────────────────────
TOTAL OUTGOING:      10 links ✓

INCOMING LINKS:
From Home:           1 ✓
From Services:       3 ✓
From Hub:            1 ✓
From Related Locs:   3 ✓
─────────────────────────────────────
TOTAL INCOMING:      8 links ✓

ANCHOR TEXT:
Primary Keyword:     8% ✓
Branded:             40% ✓
Navigational:        40% ✓
Long-tail:           12% ✓
─────────────────────────────────────
DISTRIBUTION:        Healthy ✓
```

---

## Best Practices

### DO ✓

- Use descriptive, contextual anchor text
- Link to most relevant content
- Include keyword variations naturally
- Maintain balance across categories
- Update links as content changes
- Monitor click-through rates
- Test on mobile for proper linking
- Ensure links are crawlable by bots

### DON'T ✗

- Keyword stuff anchor text
- Link to irrelevant pages
- Create excessive linking (>15 per page)
- Use generic anchors exclusively
- Leave broken links unfixed
- Link to duplicate content
- Hide links with CSS display:none
- Participate in link schemes

---

## Link Performance Tracking

### Google Analytics 4 Setup

```javascript
// Track internal link clicks
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href*="/areas/"]');
  if (link) {
    gtag('event', 'location_link_click', {
      link_text: link.innerText,
      link_url: link.href,
      source_page: window.location.pathname
    });
  }
});
```

### Key Metrics

**Track per location page:**
- Total internal links clicked
- Click-through rate by location
- Conversion rate from internal links
- Time on page before clicking link
- Bounce rate after internal link

**Report monthly:**
- Top-performing locations
- Links with lowest CTR
- Underperforming internal links
- Opportunities for optimization

---

## Common Mistakes & Solutions

### Mistake 1: Over-Optimization
**Problem:** Too many keyword-heavy anchors (>20%)
**Solution:** Balance with branded and navigational anchors
**Check:** Audit anchor text distribution monthly

### Mistake 2: Irrelevant Linking
**Problem:** Linking to unrelated content
**Solution:** Ensure each link is contextually relevant
**Check:** User test - do links make sense contextually?

### Mistake 3: Broken Links
**Problem:** Links point to deleted or moved pages
**Solution:** Use 301 redirects, maintain link structure
**Check:** Monthly broken link audit

### Mistake 4: Too Many Links
**Problem:** Page becomes cluttered, dilutes page authority
**Solution:** Target 5-11 relevant links per page
**Check:** Count links per page, aim for sweet spot

### Mistake 5: Neglected Maintenance
**Problem:** Links become stale as content changes
**Solution:** Regular audit and maintenance schedule
**Check:** Monthly link validation crawls

---

## Summary Table

| Link Type | Count | Anchor % | Destination | Purpose |
|---|---|---|---|---|
| Service | 3-5 | 8% | Service pages | Authority, relevance |
| Related Locations | 2-3 | 12% | Location pages | Cluster building |
| Hub | 1 | 5% | /areas | Navigation, user journey |
| Home | 1 | 5% | / | Navigation (global) |
| Other | 0-1 | 5% | Reviews, blog | Context, variety |
| **TOTAL** | **7-11** | **35% KW** | **- | - |

---

## Implementation Checklist

- [ ] Document all internal link patterns
- [ ] Create link templates per page type
- [ ] Set up anchor text tracking
- [ ] Implement links in location pages
- [ ] Validate all links work (404 check)
- [ ] Test on mobile devices
- [ ] Verify anchor text distribution
- [ ] Set up GA4 event tracking
- [ ] Create monthly audit schedule
- [ ] Train team on best practices
- [ ] Monitor performance metrics
- [ ] Refine strategy based on data

---

**Document Version:** 1.0
**Created:** 2025-01-12
**Status:** Ready for Implementation
**Next Review:** Monthly during active optimization phase
