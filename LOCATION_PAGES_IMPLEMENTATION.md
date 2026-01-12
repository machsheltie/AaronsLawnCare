# Location Pages Implementation Guide

**Version:** 1.0
**Purpose:** Technical implementation guide for local SEO location pages
**Date:** 2025-01-12
**Status:** Ready for Development

---

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Router Configuration](#router-configuration)
4. [Data Structure](#data-structure)
5. [Component Architecture](#component-architecture)
6. [Implementation Checklist](#implementation-checklist)
7. [Testing & Validation](#testing--validation)
8. [Performance Optimization](#performance-optimization)
9. [SEO Configuration](#seo-configuration)
10. [Deployment Strategy](#deployment-strategy)

---

## Overview

### What We're Building

A dynamic location pages system that:
- Serves neighborhood-specific content at `/areas/[neighborhood-slug]/`
- Generates SEO-optimized pages with unique content per location
- Implements proper schema markup for local business
- Handles internal linking and breadcrumbs
- Tracks performance by neighborhood

### Tech Stack

- **Framework:** React with TypeScript
- **Routing:** React Router v6
- **Styling:** Tailwind CSS (existing setup)
- **SEO:** React Helmet or custom Head component
- **Schema:** JSON-LD (inline scripts)
- **Maps:** Google Maps API
- **Analytics:** Google Analytics 4

### Expected File Structure

```
src/
├── pages/
│   ├── locations/
│   │   ├── LocationPage.tsx          # Dynamic location page component
│   │   ├── LocationHub.tsx            # Hub page listing all locations
│   │   └── index.tsx                  # Export
│   └── [existing pages...]
├── components/
│   ├── locations/
│   │   ├── LocationHero.tsx
│   │   ├── LocationServices.tsx
│   │   ├── LocationTestimonials.tsx
│   │   ├── LocationMap.tsx
│   │   ├── LocationFAQ.tsx
│   │   ├── LocationCTA.tsx
│   │   └── index.ts
│   └── [existing components...]
├── data/
│   ├── locations/
│   │   ├── neighborhoods.ts          # All neighborhood data
│   │   ├── services.ts               # Services available per neighborhood
│   │   └── testimonials.ts           # Area-specific testimonials
│   └── [existing data...]
├── schemas/
│   ├── locationSchemas.ts            # Location-specific schema generators
│   └── [existing schemas...]
├── hooks/
│   ├── useLocation.ts                # Custom hook for location data
│   └── [existing hooks...]
├── router.tsx                        # Updated with location routes
└── [existing structure...]
```

---

## Router Configuration

### React Router Setup

**File:** `src/router.tsx`

```typescript
import { createBrowserRouter } from 'react-router-dom';
import LocationPage from './pages/locations/LocationPage';
import LocationHub from './pages/locations/LocationHub';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // ... existing routes ...

      // Location pages routes
      {
        path: 'areas',
        children: [
          {
            index: true,
            element: <LocationHub />,
            handle: {
              title: 'Service Areas',
              description: 'View all of Aaron\'s Lawn Care service neighborhoods'
            }
          },
          {
            path: ':slug',
            element: <LocationPage />,
            handle: {
              title: 'Service Area',
              description: 'Local lawn care services'
            }
          }
        ]
      },

      // ... rest of routes ...
    ]
  }
]);
```

### URL Routing Examples

```
/areas/                      → LocationHub (all neighborhoods)
/areas/st-matthews/          → St. Matthews location page
/areas/highlands/            → Highlands location page
/areas/jeffersontown/        → Jeffersontown location page
/areas/middletown/           → Middletown location page
/areas/[neighborhood-slug]/  → Dynamic location pages
```

### Canonical URLs

Implement canonical URLs to prevent duplicate content:

```typescript
// In LocationPage.tsx
import { Helmet } from 'react-helmet-async';

function LocationPage() {
  const { slug } = useParams();
  const canonicalUrl = `https://aaronslawncareluv.com/areas/${slug}/`;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      {/* Page content */}
    </>
  );
}
```

---

## Data Structure

### Neighborhoods Data

**File:** `src/data/locations/neighborhoods.ts`

```typescript
export interface Neighborhood {
  // Unique Identifiers
  id: string;
  name: string;
  slug: string;

  // Location Information
  state: string;
  city: string;
  zipCodes: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };

  // Demographics
  population: number;
  mediaHomeValue: string;
  characteristics: string[];

  // Business Information
  established: number;          // Year service started in this area
  phone: string;
  email: string;

  // Content
  description: string;          // Short description
  detailedDescription: string;  // Longer, SEO-optimized description
  seasonalNotes: string;
  landmarks: string[];
  localReferences: string[];

  // Services
  primaryServices: string[];    // Service IDs
  allServices: string[];        // Service IDs

  // Social Proof
  testimonialIds: string[];
  averageRating: number;
  reviewCount: number;

  // SEO
  seoKeywords: string[];
  metaDescription: string;

  // Images
  heroImage: string;
  mapImage?: string;
  servicesToImageMap: Record<string, string>;
}

export const neighborhoods: Neighborhood[] = [
  {
    id: 'st-matthews',
    name: 'St. Matthews',
    slug: 'st-matthews',
    state: 'Kentucky',
    city: 'Louisville',
    zipCodes: ['40207', '40205'],
    coordinates: {
      latitude: 38.2338,
      longitude: -85.6614
    },
    population: 18000,
    mediaHomeValue: '$350,000 - $500,000',
    characteristics: [
      'Affluent suburban community',
      'Established residential neighborhoods',
      'Mature landscaping and trees',
      'Mix of residential styles'
    ],
    established: 2015,
    phone: '(502) 555-5296',
    email: 'hello@aaronslawncareluv.com',
    description: 'Professional lawn care in St. Matthews',
    detailedDescription: 'St. Matthews is one of Louisville\'s most desirable communities...',
    seasonalNotes: 'Spring and fall cleanup are critical for mature lawns...',
    landmarks: ['St. Matthew\'s Mall', 'Watterson Park', 'Westport Village'],
    localReferences: ['Eastern Louisville', 'East End', 'Metropolitan area'],
    primaryServices: ['lawn-mowing', 'landscape-design', 'seasonal-cleanup'],
    allServices: ['lawn-mowing', 'edging', 'landscape-design', 'mulching', 'seasonal-cleanup', 'snow-removal'],
    testimonialIds: ['st-matthews-1', 'st-matthews-2', 'st-matthews-3'],
    averageRating: 4.9,
    reviewCount: 127,
    seoKeywords: ['lawn care st matthews', 'landscaping services st matthews ky', 'lawn mowing st matthews'],
    metaDescription: 'Professional lawn care & landscaping in St. Matthews, Louisville. Same-day service, free quotes. Trusted since 2015.',
    heroImage: '/images/areas/st-matthews-hero.jpg',
    servicesToImageMap: {
      'lawn-mowing': '/images/areas/st-matthews-lawn-mowing.jpg',
      'landscape-design': '/images/areas/st-matthews-design.jpg'
    }
  },
  // ... more neighborhoods ...
];

// Utility functions
export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find(n => n.slug === slug);
}

export function getAllNeighborhoods(): Neighborhood[] {
  return neighborhoods;
}

export function getNeighborhoodsByPriority(): Neighborhood[] {
  // Priority tier 1: High-volume markets
  const tier1 = ['st-matthews', 'highlands', 'jeffersontown'];
  // Priority tier 2: Secondary markets
  const tier2 = ['middletown', 'okolona', 'prospect', 'anchorage'];
  // Priority tier 3: Growth markets
  const tier3 = ['lyndon', 'eastwood', 'bashford-manor'];

  return neighborhoods.sort((a, b) => {
    const aTier = [tier1, tier2, tier3].findIndex(t => t.includes(a.slug));
    const bTier = [tier1, tier2, tier3].findIndex(t => t.includes(b.slug));
    return aTier - bTier;
  });
}
```

### Services Data Structure

**File:** `src/data/locations/services.ts`

```typescript
export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  basePrice: number;
  pricingModel: 'per-visit' | 'monthly' | 'hourly' | 'custom';
  neighborhoods: string[];  // neighborhood slugs where available
  featured: boolean;
}

export const services: Service[] = [
  {
    id: 'lawn-mowing',
    name: 'Lawn Mowing',
    slug: 'lawn-mowing',
    description: 'Professional lawn mowing with weekly or bi-weekly scheduling',
    icon: '🌱',
    basePrice: 45,
    pricingModel: 'per-visit',
    neighborhoods: ['st-matthews', 'highlands', 'jeffersontown', 'middletown', 'okolona'],
    featured: true
  },
  // ... more services ...
];

export function getServicesByNeighborhood(neighborhoodSlug: string): Service[] {
  return services.filter(s => s.neighborhoods.includes(neighborhoodSlug));
}
```

### Testimonials Data

**File:** `src/data/locations/testimonials.ts`

```typescript
export interface Testimonial {
  id: string;
  author: string;
  neighborhood: string;
  service: string;
  rating: number;
  text: string;
  date: string;
  photo?: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'st-matthews-1',
    author: 'Margaret H.',
    neighborhood: 'st-matthews',
    service: 'landscape-design',
    rating: 5,
    text: 'Aaron\'s Lawn Care completely transformed our front yard in St. Matthews...',
    date: '2024-12-15',
    featured: true
  },
  // ... more testimonials ...
];

export function getTestimonialsByNeighborhood(neighborhoodSlug: string): Testimonial[] {
  return testimonials.filter(t => t.neighborhood === neighborhoodSlug);
}
```

---

## Component Architecture

### LocationPage Component

**File:** `src/pages/locations/LocationPage.tsx`

```typescript
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getNeighborhoodBySlug } from '../../data/locations/neighborhoods';
import { generateLocationSchema } from '../../schemas/locationSchemas';

// Sub-components
import LocationHero from '../../components/locations/LocationHero';
import LocationServices from '../../components/locations/LocationServices';
import LocationWhyChooseUs from '../../components/locations/LocationWhyChooseUs';
import LocationTestimonials from '../../components/locations/LocationTestimonials';
import LocationMap from '../../components/locations/LocationMap';
import LocationFAQ from '../../components/locations/LocationFAQ';
import LocationCTA from '../../components/locations/LocationCTA';

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const neighborhood = getNeighborhoodBySlug(slug || '');

  // Redirect to 404 if neighborhood not found
  useEffect(() => {
    if (slug && !neighborhood) {
      navigate('/404');
    }
  }, [slug, neighborhood, navigate]);

  if (!neighborhood) {
    return null;
  }

  const canonicalUrl = `https://aaronslawncareluv.com/areas/${neighborhood.slug}/`;
  const schema = generateLocationSchema(neighborhood);
  const pageTitle = `${neighborhood.name} Lawn Care & Landscaping Services | Aaron's`;

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={neighborhood.metaDescription} />
        <meta name="keywords" content={neighborhood.seoKeywords.join(', ')} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Breadcrumb structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://aaronslawncareluv.com'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Areas',
                item: 'https://aaronslawncareluv.com/areas'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: neighborhood.name,
                item: canonicalUrl
              }
            ]
          })}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <main className="location-page">
        <LocationHero neighborhood={neighborhood} />
        <LocationServices neighborhood={neighborhood} />
        <LocationWhyChooseUs neighborhood={neighborhood} />
        <LocationTestimonials neighborhood={neighborhood} />
        <LocationMap neighborhood={neighborhood} />
        <LocationFAQ neighborhood={neighborhood} />
        <LocationCTA neighborhood={neighborhood} />
      </main>
    </>
  );
}
```

### LocationHero Component

**File:** `src/components/locations/LocationHero.tsx`

```typescript
import React from 'react';
import { Neighborhood } from '../../data/locations/neighborhoods';

interface LocationHeroProps {
  neighborhood: Neighborhood;
}

export default function LocationHero({ neighborhood }: LocationHeroProps) {
  return (
    <section className="location-hero">
      <div className="hero-background">
        <img
          src={neighborhood.heroImage}
          alt={`${neighborhood.name} lawn care service area`}
          className="hero-image"
          loading="lazy"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Lawn Care & Landscaping Services in {neighborhood.name}, Louisville
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Transform your {neighborhood.name} yard with Aaron's Lawn Care—your trusted local experts in professional landscaping and lawn maintenance.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Your Free Quote Today</button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### LocationServices Component

**File:** `src/components/locations/LocationServices.tsx`

```typescript
import React from 'react';
import { Neighborhood } from '../../data/locations/neighborhoods';
import { getServicesByNeighborhood } from '../../data/locations/services';
import { Link } from 'react-router-dom';

interface LocationServicesProps {
  neighborhood: Neighborhood;
}

export default function LocationServices({ neighborhood }: LocationServicesProps) {
  const services = getServicesByNeighborhood(neighborhood.slug);

  return (
    <section className="location-services py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">
          Comprehensive Lawn Care Services in {neighborhood.name}
        </h2>
        <p className="text-lg mb-12 text-gray-600">
          Whether you need regular lawn mowing, landscape design, or seasonal cleanup,
          Aaron's Lawn Care provides full-service solutions for {neighborhood.name} properties.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={`/services/${service.slug}#neighborhoods`} className="text-blue-600 hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center mt-12">
          All services are customized for {neighborhood.name} properties and available for monthly contracts
          or one-time services. <Link to="/services" className="text-blue-600 hover:underline">Explore All Services</Link>
        </p>
      </div>
    </section>
  );
}
```

### LocationMap Component

**File:** `src/components/locations/LocationMap.tsx`

```typescript
import React, { useEffect, useRef } from 'react';
import { Neighborhood } from '../../data/locations/neighborhoods';

interface LocationMapProps {
  neighborhood: Neighborhood;
}

export default function LocationMap({ neighborhood }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Google Map
    if (!mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: neighborhood.coordinates,
      zoom: 13,
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e9e9e9' }]
        }
      ]
    });

    // Add marker for neighborhood center
    new window.google.maps.Marker({
      position: neighborhood.coordinates,
      map,
      title: neighborhood.name
    });
  }, [neighborhood]);

  return (
    <section className="location-map py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">
          Our {neighborhood.name} Service Area
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Aaron's Lawn Care proudly serves all of {neighborhood.name} and surrounding areas.
        </p>

        <div className="map-container" style={{ height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
          <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Service Area Details</h3>
            <p className="text-gray-600 mb-4">
              We serve the following {neighborhood.name} areas:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {neighborhood.zipCodes.map((zip) => (
                <li key={zip}>ZIP Code {zip}</li>
              ))}
              {neighborhood.landmarks.map((landmark) => (
                <li key={landmark}>{landmark}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Not Sure if We Serve Your Address?</h3>
            <p className="text-gray-600 mb-4">
              Contact us to confirm service availability for your specific location.
            </p>
            <button className="btn btn-primary">Check Service Availability</button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### LocationFAQ Component

**File:** `src/components/locations/LocationFAQ.tsx`

```typescript
import React, { useState } from 'react';
import { Neighborhood } from '../../data/locations/neighborhoods';

interface FAQItem {
  question: string;
  answer: string;
}

interface LocationFAQProps {
  neighborhood: Neighborhood;
}

// FAQ template factory
function generateLocationFAQs(neighborhood: Neighborhood): FAQItem[] {
  return [
    {
      question: `Do you service ${neighborhood.name}?`,
      answer: `Yes! Aaron's Lawn Care is proud to serve all of ${neighborhood.name} and surrounding areas. We've been serving ${neighborhood.name} residents since ${neighborhood.established} and have established relationships with homeowners throughout the neighborhood.`
    },
    {
      question: `What lawn care services do you offer in ${neighborhood.name}?`,
      answer: `We provide comprehensive lawn care services in ${neighborhood.name} including ${neighborhood.primaryServices.join(', ')}, and more.`
    },
    // ... more FAQs ...
  ];
}

export default function LocationFAQ({ neighborhood }: LocationFAQProps) {
  const [openId, setOpenId] = useState<number | null>(0);
  const faqs = generateLocationFAQs(neighborhood);

  return (
    <section className="location-faq py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">
          Frequently Asked Questions About {neighborhood.name} Lawn Care
        </h2>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })}
        </script>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item border rounded">
              <button
                onClick={() => setOpenId(openId === index ? null : index)}
                className="w-full p-4 text-left font-semibold flex justify-between items-center hover:bg-gray-100"
              >
                {faq.question}
                <span>{openId === index ? '−' : '+'}</span>
              </button>
              {openId === index && (
                <div className="p-4 border-t bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Implementation Checklist

### Phase 1: Data Setup (Week 1)

- [ ] Create `src/data/locations/neighborhoods.ts` with all neighborhood data
- [ ] Create `src/data/locations/services.ts` with service definitions
- [ ] Create `src/data/locations/testimonials.ts` with all testimonials
- [ ] Define TypeScript interfaces for all data structures
- [ ] Test data retrieval functions

### Phase 2: Component Development (Week 2)

- [ ] Create LocationPage component
- [ ] Create LocationHero component
- [ ] Create LocationServices component
- [ ] Create LocationWhyChooseUs component
- [ ] Create LocationTestimonials component
- [ ] Create LocationMap component
- [ ] Create LocationFAQ component
- [ ] Create LocationCTA component
- [ ] Create LocationHub component (listing all neighborhoods)

### Phase 3: Routing & Schema (Week 3)

- [ ] Update router.tsx with location routes
- [ ] Implement BreadcrumbList schema
- [ ] Implement LocalBusiness schema generator
- [ ] Implement FAQPage schema
- [ ] Implement AggregateRating schema
- [ ] Test schema with Schema.org validator
- [ ] Test with Google Rich Result Test

### Phase 4: Testing & Optimization (Week 4)

- [ ] Test all routes and 404 handling
- [ ] Test mobile responsiveness
- [ ] Optimize image sizes and loading
- [ ] Test page load speed (<3s target)
- [ ] Test SEO meta tags
- [ ] Verify internal linking
- [ ] Test analytics tracking

### Phase 5: Deployment & Monitoring (Week 5)

- [ ] Deploy to staging environment
- [ ] Create URL in Google Search Console
- [ ] Submit sitemap to Google
- [ ] Monitor initial indexing
- [ ] Set up GA4 events for location pages
- [ ] Deploy to production
- [ ] Monitor rankings and traffic

---

## Testing & Validation

### SEO Testing

```bash
# Validate schema markup
curl https://aaronslawncareluv.com/areas/st-matthews/ | grep 'schema.org'

# Check meta tags
curl -I https://aaronslawncareluv.com/areas/st-matthews/ | grep 'X-'

# Test with Google tools
# 1. Google Rich Result Test (richresults.google.com)
# 2. Google Mobile Friendly Test
# 3. Google PageSpeed Insights
```

### Component Testing

```typescript
// Example Jest test
import { render, screen } from '@testing-library/react';
import LocationPage from '../LocationPage';

describe('LocationPage', () => {
  it('renders neighborhood name in title', () => {
    render(<LocationPage />);
    expect(screen.getByText(/St. Matthews/i)).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    render(<LocationPage />);
    const serviceCards = screen.getAllByRole('article');
    expect(serviceCards.length).toBeGreaterThan(0);
  });

  it('includes proper schema markup', () => {
    render(<LocationPage />);
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    expect(scripts.length).toBeGreaterThan(0);
  });
});
```

### Lighthouse Performance

```bash
# Run Lighthouse audit
npm run lighthouse https://aaronslawncareluv.com/areas/st-matthews/

# Targets:
# - Performance: >90
# - Accessibility: >95
# - Best Practices: >90
# - SEO: >95
```

---

## Performance Optimization

### Image Optimization

```typescript
// Use responsive images
<img
  src={neighborhood.heroImage}
  srcSet={`
    ${neighborhood.heroImage}?w=640 640w,
    ${neighborhood.heroImage}?w=1280 1280w,
    ${neighborhood.heroImage}?w=1920 1920w
  `}
  sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
  alt={`${neighborhood.name} lawn care`}
  loading="lazy"
/>
```

### Code Splitting

```typescript
// Lazy load map component
import { lazy, Suspense } from 'react';

const LocationMap = lazy(() => import('../../components/locations/LocationMap'));

export default function LocationPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LocationMap neighborhood={neighborhood} />
    </Suspense>
  );
}
```

### Caching Strategy

```typescript
// Cache neighborhood data for 24 hours
const cacheKey = `neighborhoods_${Date.now()}`;
const cachedData = localStorage.getItem(cacheKey);

if (cachedData) {
  return JSON.parse(cachedData);
} else {
  const data = fetchNeighborhoodsFromAPI();
  localStorage.setItem(cacheKey, JSON.stringify(data));
  return data;
}
```

---

## SEO Configuration

### Sitemap Generation

```typescript
// scripts/generateLocationSitemap.ts
import { neighborhoods } from '../src/data/locations/neighborhoods';

const baseUrl = 'https://aaronslawncareluv.com';
const lastmod = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/areas</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  ${neighborhoods.map(n => `
  <url>
    <loc>${baseUrl}/areas/${n.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}
</urlset>`;

fs.writeFileSync('public/location-sitemap.xml', sitemap);
```

### robots.txt Update

```
User-agent: *
Allow: /

Sitemap: https://aaronslawncareluv.com/sitemap.xml
Sitemap: https://aaronslawncareluv.com/location-sitemap.xml
```

---

## Deployment Strategy

### Pre-Deployment Checklist

- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Performance targets met
- [ ] SEO meta tags verified
- [ ] Schema validation passed
- [ ] Internal links verified
- [ ] Mobile responsiveness tested

### Deployment Steps

```bash
# 1. Build
npm run build

# 2. Test build locally
npm run preview

# 3. Deploy to staging
git push origin develop

# 4. Test on staging
# - Verify URLs accessible
# - Check schema in browser
# - Test internal links
# - Monitor performance

# 5. Deploy to production
git push origin main

# 6. Monitor production
# - Check Google Search Console
# - Monitor GA4 events
# - Check Core Web Vitals
# - Monitor error rates
```

### Post-Deployment Monitoring

```typescript
// Monitor page load time
window.addEventListener('load', () => {
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

  // Send to analytics
  gtag('event', 'page_load_time', {
    location: neighborhood.slug,
    loadTime: pageLoadTime
  });
});

// Monitor conversions
function trackCTA(action: string) {
  gtag('event', 'location_cta', {
    action,
    location: neighborhood.slug
  });
}
```

---

## Maintenance Schedule

### Daily
- Monitor error logs
- Check Google Search Console for issues
- Monitor conversion tracking

### Weekly
- Review traffic by neighborhood
- Check keyword rankings
- Validate schema markup

### Monthly
- Update testimonials and reviews
- Refresh neighborhood images (seasonal)
- Review and optimize underperforming locations
- Competitor analysis

### Quarterly
- Update location content (seasonal updates)
- Review and refresh FAQs
- Update neighborhood statistics
- Plan new neighborhood launches

---

## File Checklist

Create the following files for full implementation:

```
✓ src/pages/locations/LocationPage.tsx
✓ src/pages/locations/LocationHub.tsx
✓ src/components/locations/LocationHero.tsx
✓ src/components/locations/LocationServices.tsx
✓ src/components/locations/LocationWhyChooseUs.tsx
✓ src/components/locations/LocationTestimonials.tsx
✓ src/components/locations/LocationMap.tsx
✓ src/components/locations/LocationFAQ.tsx
✓ src/components/locations/LocationCTA.tsx
✓ src/components/locations/index.ts
✓ src/data/locations/neighborhoods.ts
✓ src/data/locations/services.ts
✓ src/data/locations/testimonials.ts
✓ src/schemas/locationSchemas.ts
✓ src/hooks/useLocation.ts
✓ Updated: src/router.tsx
✓ Updated: src/App.tsx (if needed)
✓ scripts/generateLocationSitemap.ts
✓ scripts/validateLocationSchema.ts
```

---

## Next Steps

1. **Review** - Confirm approach with stakeholders
2. **Data Gathering** - Collect neighborhood data and testimonials
3. **Development** - Implement components in phases
4. **Testing** - Comprehensive testing and validation
5. **Deployment** - Staged rollout and monitoring
6. **Optimization** - Ongoing refinement based on performance

---

**Document Version:** 1.0
**Created:** 2025-01-12
**Last Updated:** 2025-01-12
**Status:** Ready for Development
