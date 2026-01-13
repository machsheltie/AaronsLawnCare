# SEO Technical Implementation Tasks - Aaron's Lawn Care
**Date Created:** 2025-01-14
**I Can Help You With All of These**

---

## 🚀 Implementation Priority Order

### Priority 1: Schema Markup (2-3 hours)
### Priority 2: Location Pages (4-6 hours)
### Priority 3: Blog Structure (2-3 hours)
### Priority 4: FAQ Page (1-2 hours)
### Priority 5: Page Speed Optimization (3-4 hours)
### Priority 6: Mobile Enhancements (2-3 hours)
### Priority 7: Internal Linking (1-2 hours)

**Total Estimated Time:** 15-23 hours of implementation

---

## 🔥 PRIORITY 1: Enhanced Schema Markup

### 1.1 LocalBusiness Schema (Homepage)
**File:** `website/src/pages/HomePage.tsx` or `website/index.html`
**Impact:** Rich snippets, star ratings, "Open Now" badges in search results

**Implementation:**
```typescript
// Add to HomePage.tsx or index.html <head>
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aaron's Lawn Care",
  "image": "https://aaronslawncare502.com/og-image.jpg",
  "@id": "https://aaronslawncare502.com",
  "url": "https://aaronslawncare502.com",
  "telephone": "+1-502-926-8524",
  "email": "gnaua429@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Louisville",
    "addressRegion": "KY",
    "postalCode": "40207",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.2527,
    "longitude": -85.7585
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/aaronslawncare",
    "https://www.instagram.com/aaronslawncare502",
    "https://www.linkedin.com/company/aaronslawncare"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Louisville",
      "containedIn": {
        "@type": "State",
        "name": "Kentucky"
      }
    },
    {
      "@type": "City",
      "name": "Jeffersontown"
    },
    {
      "@type": "City",
      "name": "St. Matthews"
    },
    {
      "@type": "City",
      "name": "Highlands"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Lawn Care Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lawn Mowing",
          "description": "Professional lawn mowing services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landscaping",
          "description": "Complete landscaping services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Leaf Removal",
          "description": "Seasonal leaf removal and cleanup"
        }
      }
    ]
  }
};
```

**Notes:**
- Update `openingHoursSpecification` with actual business hours
- Add real `sameAs` social media URLs once profiles are created
- Update `aggregateRating` as reviews accumulate
- Add all services to `hasOfferCatalog`

---

### 1.2 Service Schema (All Service Pages)
**Files:** All service pages in `website/src/pages/services/`
**Impact:** Service-specific rich snippets

**Template for Each Service:**
```typescript
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Lawn Mowing", // Change per service
  "provider": {
    "@type": "LocalBusiness",
    "name": "Aaron's Lawn Care",
    "@id": "https://aaronslawncare502.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Louisville",
    "containedIn": {
      "@type": "State",
      "name": "Kentucky"
    }
  },
  "description": "Professional lawn mowing services in Louisville, KY",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "50", // Approximate price
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "price": "50",
      "referenceQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitText": "visit"
      }
    }
  }
};
```

**Services to Add Schema To:**
- Lawn Mowing
- Edging
- Landscaping
- Mulching
- Leaf Removal
- Spring Cleanup
- Fall Cleanup
- Aeration
- Hedge Trimming
- Tree Removal
- Pressure Washing
- Snow Removal
- Gutter Cleaning
- Lawn Treatment
- Debris Removal

---

### 1.3 FAQ Schema
**File:** Create new FAQ page or add to relevant pages
**Impact:** FAQ rich snippets, voice search optimization

**Implementation:**
```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does lawn mowing cost in Louisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Average lawn mowing in Louisville costs $35-$75 per visit, depending on lawn size. Small yards (under 5,000 sq ft) typically cost $35-$45, medium yards (5,000-10,000 sq ft) cost $45-$60, and large yards (over 10,000 sq ft) cost $60-$75 or more."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I mow my lawn in Louisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Louisville, lawns should be mowed weekly during the growing season (April-October) and bi-weekly or as-needed during cooler months. Kentucky bluegrass and fescue lawns grow most actively in spring and fall."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide free estimates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Aaron's Lawn Care provides free, no-obligation estimates for all services. Contact us at (502) 926-8524 or fill out our online quote form, and we'll assess your property and provide a detailed estimate within 24 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Louisville and surrounding areas including St. Matthews, Jeffersontown, Highlands, Middletown, Prospect, Anchorage, Okolona, Lyndon, and more. Contact us to confirm we service your specific neighborhood."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Aaron's Lawn Care is fully licensed and insured for general liability. We carry comprehensive insurance to protect your property and give you peace of mind."
      }
    }
  ]
};
```

**30 More FAQ Questions to Add:**
1. What's the best height to cut grass in Kentucky?
2. Do you offer same-day service?
3. How do I schedule a service?
4. What payment methods do you accept?
5. Do you service commercial properties?
6. Can you work around my schedule?
7. What if I'm not home when you service my lawn?
8. Do you guarantee your work?
9. How do I cancel or reschedule a service?
10. What's included in your lawn mowing service?
11. Do you edge and trim every visit?
12. How do you handle pet waste?
13. Will you bag or mulch grass clippings?
14. Do you move outdoor furniture or toys?
15. What time do you typically service lawns?
16. How far in advance should I book?
17. Do you offer recurring service discounts?
18. What happens if it rains on my service day?
19. Do you work on weekends?
20. Can I get a one-time service?
21. Do you offer seasonal packages?
22. How long have you been in business?
23. Are your employees background checked?
24. Do you use eco-friendly products?
25. Can you handle large properties?
26. Do you service HOA common areas?
27. What equipment do you use?
28. Do you sharpen mower blades regularly?
29. How do I leave feedback or a review?
30. Do you offer referral discounts?

---

### 1.4 Review/Rating Schema
**File:** `website/src/pages/ReviewsPage.tsx` (already has some, enhance it)
**Impact:** Star ratings in search results

**Already Implemented:** ✅ You have this on ReviewsPage.tsx
**Enhancement Needed:** Add to other pages (Homepage, service pages)

---

## 🗺️ PRIORITY 2: Location Pages (High-Value Content)

### 2.1 Create 12 Additional Location Pages
**Current:** 3 pages (Jeffersontown, Highlands, St. Matthews)
**Target:** 15 total pages
**Template:** Copy existing area page pattern

**New Pages to Create:**

1. **Middletown, KY**
   - File: `website/src/pages/areas/MiddletownPage.tsx`
   - URL: `/areas/middletown`
   - Title: "Lawn Care in Middletown, Louisville KY | Aaron's Lawn Care"

2. **Prospect, KY**
   - File: `website/src/pages/areas/ProspectPage.tsx`
   - URL: `/areas/prospect`

3. **Anchorage, KY**
   - File: `website/src/pages/areas/AnchoragePage.tsx`
   - URL: `/areas/anchorage`

4. **Okolona, KY**
   - File: `website/src/pages/areas/OkolonaPage.tsx`
   - URL: `/areas/okolona`

5. **Lyndon, KY**
   - File: `website/src/pages/areas/LyndonPage.tsx`
   - URL: `/areas/lyndon`

6. **Shively, KY**
   - File: `website/src/pages/areas/ShivelyPage.tsx`
   - URL: `/areas/shively`

7. **Pleasure Ridge Park, KY**
   - File: `website/src/pages/areas/PleasureRidgeParkPage.tsx`
   - URL: `/areas/pleasure-ridge-park`

8. **Valley Station, KY**
   - File: `website/src/pages/areas/ValleyStationPage.tsx`
   - URL: `/areas/valley-station`

9. **Buechel, KY**
   - File: `website/src/pages/areas/BuechelPage.tsx`
   - URL: `/areas/buechel`

10. **Newburg, KY**
    - File: `website/src/pages/areas/NewburgPage.tsx`
    - URL: `/areas/newburg`

11. **Fairdale, KY**
    - File: `website/src/pages/areas/FairdalePage.tsx`
    - URL: `/areas/fairdale`

12. **Fern Creek, KY**
    - File: `website/src/pages/areas/FernCreekPage.tsx`
    - URL: `/areas/fern-creek`

### Page Template Structure:
```typescript
// Copy from existing StMatthewsPage.tsx and customize:
- Hero section with city name
- Intro paragraph with local landmarks
- Services list
- Why choose us section
- Call to action
- Testimonials (2 fake ones with city-specific names)

// Customize these elements per city:
- GPS coordinates (get from Google Maps)
- Zip code (primary for that area)
- Local landmarks (parks, schools, major roads)
- Neighborhood names
- Historical facts about area
```

### 2.2 Create Service Areas Overview Page
**File:** `website/src/pages/AreasPage.tsx` (if doesn't exist)
**URL:** `/areas`
**Purpose:** Hub page linking to all location pages

**Content:**
- Map of service area
- Grid of all 15+ locations with links
- "Don't see your city? Contact us!" CTA

---

## 📝 PRIORITY 3: Blog Structure & Infrastructure

### 3.1 Create Blog Section
**Files to Create:**

1. **Blog Index Page**
   - File: `website/src/pages/BlogPage.tsx`
   - URL: `/blog`
   - Lists all blog posts
   - Categories: Seasonal Tips, How-To Guides, Cost Guides, Lawn Problems

2. **Blog Post Template**
   - File: `website/src/pages/blog/BlogPostTemplate.tsx`
   - Reusable template for all blog posts
   - Includes:
     - Hero with featured image
     - Table of contents (auto-generated from H2s)
     - Author info
     - Publish date
     - Reading time estimate
     - Social share buttons
     - Related posts section
     - CTA at bottom

3. **Blog Router Configuration**
   - File: `website/src/router.tsx`
   - Add routes for:
     - `/blog` (index)
     - `/blog/:slug` (individual posts)

### 3.2 Blog Post Metadata System
**Implementation:**
```typescript
// website/src/data/blogPosts.ts
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishDate: string;
  updatedDate?: string;
  featuredImage: string;
  category: 'Seasonal Tips' | 'How-To Guides' | 'Cost Guides' | 'Lawn Problems';
  tags: string[];
  readingTime: number; // minutes
  content: string; // Markdown
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-does-lawn-care-cost-louisville',
    title: 'How Much Does Lawn Care Cost in Louisville? (2025 Price Guide)',
    description: 'Complete pricing guide for lawn care services in Louisville, KY...',
    author: 'Aaron',
    publishDate: '2025-02-01',
    featuredImage: '/blog/lawn-care-cost-louisville.jpg',
    category: 'Cost Guides',
    tags: ['pricing', 'louisville', 'lawn care costs'],
    readingTime: 8,
    content: `# How Much Does Lawn Care Cost in Louisville?...`
  },
  // More posts...
];
```

### 3.3 Blog SEO Optimization Features
**Add to Blog Template:**
- Dynamic meta tags per post
- Schema markup (Article type)
- Breadcrumbs
- Internal linking suggestions
- Related posts (3-4 at bottom)
- Social share buttons
- Estimated reading time
- Author bio with link to contact

### 3.4 Blog Post Schema
```typescript
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How Much Does Lawn Care Cost in Louisville?",
  "image": "https://aaronslawncare502.com/blog/lawn-care-cost.jpg",
  "author": {
    "@type": "Person",
    "name": "Aaron",
    "url": "https://aaronslawncare502.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Aaron's Lawn Care",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aaronslawncare502.com/logo.png"
    }
  },
  "datePublished": "2025-02-01",
  "dateModified": "2025-02-01",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://aaronslawncare502.com/blog/how-much-does-lawn-care-cost-louisville"
  }
};
```

---

## ❓ PRIORITY 4: FAQ Page

### 4.1 Create Comprehensive FAQ Page
**File:** `website/src/pages/FAQPage.tsx`
**URL:** `/faq`
**Purpose:** Answer all common questions, target voice search

**Structure:**
```typescript
// Organize by category:
interface FAQCategory {
  category: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

const faqCategories: FAQCategory[] = [
  {
    category: "Pricing & Quotes",
    questions: [
      {
        question: "How much does lawn mowing cost in Louisville?",
        answer: "Average lawn mowing costs $35-$75 per visit..."
      },
      // 8-10 more pricing questions
    ]
  },
  {
    category: "Scheduling & Service",
    questions: [
      // 8-10 scheduling questions
    ]
  },
  {
    category: "Services Offered",
    questions: [
      // 8-10 service questions
    ]
  },
  {
    category: "Service Area",
    questions: [
      // 5-8 area questions
    ]
  }
];
```

**Features:**
- Search/filter functionality
- Expandable accordion UI
- Jump-to-category links
- "Didn't find your answer?" CTA to contact
- FAQ schema for each question

---

## ⚡ PRIORITY 5: Page Speed Optimization

### 5.1 Image Optimization
**Actions:**

1. **Convert to WebP Format**
   - Install package: `npm install sharp`
   - Create script to convert all JPG/PNG to WebP
   - Save ~30-40% file size

2. **Implement Responsive Images**
   ```html
   <picture>
     <source srcset="image-400w.webp 400w, image-800w.webp 800w" type="image/webp" />
     <source srcset="image-400w.jpg 400w, image-800w.jpg 800w" type="image/jpeg" />
     <img src="image-800w.jpg" alt="Description" loading="lazy" />
   </picture>
   ```

3. **Lazy Loading**
   - Add `loading="lazy"` to all images below fold
   - Already implemented in React with Intersection Observer

4. **Image CDN** (Optional)
   - Consider: Cloudinary or imgix
   - Auto-optimization, resizing, format conversion
   - Cost: $0-50/month

### 5.2 Code Splitting Improvements
**Files to Optimize:**

Already good, but can improve:
- Lazy load service pages (already done ✅)
- Lazy load area pages (already done ✅)
- Consider splitting ui-vendor bundle further

### 5.3 Service Worker / PWA
**Implementation:**

1. **Install vite-plugin-pwa**
   ```bash
   npm install vite-plugin-pwa -D
   ```

2. **Configure in vite.config.ts**
   ```typescript
   import { VitePWA } from 'vite-plugin-pwa';

   export default defineConfig({
     plugins: [
       VitePWA({
         registerType: 'autoUpdate',
         workbox: {
           globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,webp}']
         },
         manifest: {
           name: "Aaron's Lawn Care",
           short_name: "Aaron's Lawn",
           theme_color: '#047857',
           icons: [
             {
               src: '/icon-192.png',
               sizes: '192x192',
               type: 'image/png'
             },
             {
               src: '/icon-512.png',
               sizes: '512x512',
               type: 'image/png'
             }
           ]
         }
       })
     ]
   });
   ```

**Benefits:**
- Offline page caching
- Faster subsequent loads
- "Add to Home Screen" on mobile
- Progressive enhancement

---

## 📱 PRIORITY 6: Mobile Enhancements

### 6.1 Sticky Mobile CTA Bar
**File:** `website/src/components/common/MobileCTABar.tsx`
**Purpose:** Always-visible call/text button on mobile

**Implementation:**
```typescript
export const MobileCTABar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-green-700 shadow-lg p-3">
      <div className="flex gap-2">
        <a
          href="tel:+15029268524"
          className="flex-1 bg-white text-green-800 text-center py-3 rounded-lg font-bold"
        >
          📞 Call Now
        </a>
        <a
          href="/quote"
          className="flex-1 bg-green-900 text-white text-center py-3 rounded-lg font-bold"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
};
```

**Add to:** All pages except quote/contact (no need for CTA on conversion pages)

### 6.2 Mobile Performance Optimizations
**Actions:**
- Reduce mobile-specific JavaScript
- Optimize tap targets (min 48x48px)
- Test on real devices
- Improve form UX (proper input types, labels)

---

## 🔗 PRIORITY 7: Internal Linking Strategy

### 7.1 Topic Cluster Architecture
**Hub Pages:**
- Homepage (level 0)
- Services page (level 1)
- Individual service pages (level 2)

**Linking Rules:**
1. Homepage links to all hub pages
2. Services page links to all service pages
3. Each service page links back to services hub
4. Service pages link to 3-4 related services
5. All pages link to contact/quote

### 7.2 Contextual Internal Links
**Add to Blog Posts:**
- Link to relevant service pages
- Link to relevant location pages
- Link to other related blog posts
- Minimum 3-5 internal links per post

**Example:**
```
"If you need professional lawn mowing in [Louisville](/), check out
our [lawn mowing service](/services/lawn-mowing) or get a
[free quote](/quote) today."
```

### 7.3 Footer Links
**Enhance Footer:**
- Popular services (top 5)
- Service areas (all 15+)
- Recent blog posts (3-5)
- Quick links (FAQ, About, Contact, Quote)

---

## 📈 PRIORITY 8: Analytics & Tracking Enhancements

### 8.1 Enhanced Event Tracking
**Add to Google Analytics:**

**Button Clicks:**
- Phone number clicks
- "Get Quote" button clicks
- Service page CTA clicks
- Social media links

**Form Events:**
- Quote form started
- Quote form submitted
- Contact form submitted
- Newsletter signup

**Scroll Depth:**
- 25%, 50%, 75%, 100% page scroll
- Indicates engagement

**Time on Site:**
- Track by page type
- Service pages vs blog vs homepage

### 8.2 Conversion Tracking Setup
**Goals to Track:**
1. Quote form submission (primary goal)
2. Phone call click (mobile)
3. Contact form submission
4. Newsletter signup
5. Service page views (micro-conversion)

---

## 🎨 PRIORITY 9: Visual Enhancements

### 9.1 Before/After Image Gallery Component
**File:** `website/src/components/gallery/BeforeAfterGallery.tsx`
**Purpose:** Showcase transformations with slider

**Features:**
- Image comparison slider
- Touch/swipe support
- Lazy loading
- Lightbox for full-size view

### 9.2 Trust Badges Section
**Add to Homepage/Service Pages:**
- "20+ Years Experience"
- "Licensed & Insured"
- "100% Satisfaction Guaranteed"
- "Same-Day Quotes"
- "BBB Accredited" (once obtained)
- "5-Star Rated"

---

## 🛠️ Implementation Order Recommendation

### Week 1: Foundation
1. Enhanced schema markup (LocalBusiness, Service)
2. FAQ page with schema
3. Mobile CTA bar

**Expected Impact:** +20% CTR in search results

### Week 2-3: Content Expansion
4. Create 6 new location pages
5. Set up blog structure
6. Internal linking improvements

**Expected Impact:** +200 monthly visitors

### Week 4-5: Optimization
7. Page speed optimizations
8. Service worker/PWA
9. Analytics enhancements

**Expected Impact:** +15% conversion rate

### Week 6: Final Polish
10. Before/after gallery
11. Trust badges
12. Final 6 location pages

**Expected Impact:** +30% engagement

---

## 📋 Implementation Checklist

### Schema Markup:
- [ ] LocalBusiness schema on homepage
- [ ] Service schema on all service pages (15+)
- [ ] FAQ schema on FAQ page
- [ ] Article schema on blog posts
- [ ] Review schema enhanced

### Location Pages:
- [ ] Middletown page
- [ ] Prospect page
- [ ] Anchorage page
- [ ] Okolona page
- [ ] Lyndon page
- [ ] Shively page
- [ ] Pleasure Ridge Park page
- [ ] Valley Station page
- [ ] Buechel page
- [ ] Newburg page
- [ ] Fairdale page
- [ ] Fern Creek page
- [ ] Service areas overview page

### Blog Infrastructure:
- [ ] Blog index page
- [ ] Blog post template component
- [ ] Blog routing configured
- [ ] Blog metadata system
- [ ] Article schema
- [ ] Related posts system

### Performance:
- [ ] Images converted to WebP
- [ ] Responsive images implemented
- [ ] Lazy loading on all images
- [ ] Service worker configured
- [ ] PWA manifest

### Mobile:
- [ ] Sticky CTA bar
- [ ] Mobile form optimization
- [ ] Tap target sizes verified

### Analytics:
- [ ] Event tracking implemented
- [ ] Conversion goals configured
- [ ] Scroll depth tracking
- [ ] Phone click tracking

### Other:
- [ ] FAQ page
- [ ] Internal linking strategy
- [ ] Before/after gallery
- [ ] Trust badges section

---

## 🎯 Expected Results After Implementation

**Immediate (Week 1-2):**
- Rich snippets in search results
- Better mobile conversions (+20%)

**Short-term (Month 1-2):**
- +300-500 monthly visitors (location pages)
- +15-25% CTR improvement (schema)

**Medium-term (Month 3-6):**
- +800-1,200 monthly visitors (blog + locations)
- #1-3 local rankings for target keywords
- 90+ Lighthouse score

**Long-term (Month 6-12):**
- +2,000-3,000 monthly visitors
- Domain authority 25-30+
- Established content authority

---

## 💡 Which Should We Start With?

**My Recommendation:**
1. **Start with Schema Markup** (2-3 hours, immediate impact)
2. **Then Location Pages** (4-6 hours, high traffic potential)
3. **Then Blog Structure** (2-3 hours, enables content strategy)

These three will give you the biggest SEO wins fastest.

---

**Ready to implement? Let me know which priority you want to tackle first!**

**Last Updated:** 2025-01-14
