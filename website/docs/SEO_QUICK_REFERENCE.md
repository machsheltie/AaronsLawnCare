# SEO Meta Tags - Quick Reference Guide

## Common Page Types - Copy & Paste Templates

### 1. Homepage

```tsx
import { SEOHead } from '../components/common/SEOHead';
import { getHomePageSEO } from '../utils/seo-meta';
import { generateLocalBusinessSchema } from '../utils/schemas';

export default function HomePage() {
  return (
    <>
      <SEOHead
        {...getHomePageSEO()}
        schemaMarkup={generateLocalBusinessSchema()}
      />
      {/* Page content */}
    </>
  );
}
```

### 2. Service Page (Lawn Mowing Example)

```tsx
import { SEOHead } from '../components/common/SEOHead';
import { getServicePageSEO } from '../utils/seo-meta';
import { generateServiceSchema } from '../utils/schemas';

export default function LawnMowingPage() {
  const seoConfig = getServicePageSEO(
    'Lawn Mowing',
    'Professional lawn mowing with precision edging and trimming.',
    'lawn-mowing'
  );

  const schema = generateServiceSchema(
    'Lawn Mowing',
    'Professional lawn mowing with precision edging and trimming.',
    '/services/lawn-mowing'
  );

  return (
    <>
      <SEOHead {...seoConfig} schemaMarkup={schema} />
      {/* Page content */}
    </>
  );
}
```

### 3. Blog/Article Page

```tsx
import { SEOHead } from '../components/common/SEOHead';
import { getArticleSEO } from '../utils/seo-meta';
import { generateBlogPostSchema } from '../utils/schemas';

export default function BlogPost() {
  const seoConfig = getArticleSEO(
    'Spring Lawn Care Tips',
    'Learn best practices for spring lawn maintenance.',
    'spring-lawn-care-tips',
    '2025-01-14'
  );

  const schema = generateBlogPostSchema(
    'Spring Lawn Care Tips',
    'Learn best practices for spring lawn maintenance.',
    'Article content here...',
    '2025-01-14',
    '2025-01-14',
    '/blog/spring-lawn-care-tips'
  );

  return (
    <>
      <SEOHead {...seoConfig} schemaMarkup={schema} />
      {/* Page content */}
    </>
  );
}
```

### 4. Contact Page

```tsx
import { SEOHead } from '../components/common/SEOHead';
import { getContactPageSEO } from '../utils/seo-meta';

export default function ContactPage() {
  return (
    <>
      <SEOHead {...getContactPageSEO()} />
      {/* Page content */}
    </>
  );
}
```

### 5. About Page

```tsx
import { SEOHead } from '../components/common/SEOHead';
import { getAboutPageSEO } from '../utils/seo-meta';

export default function AboutPage() {
  return (
    <>
      <SEOHead {...getAboutPageSEO()} />
      {/* Page content */}
    </>
  );
}
```

### 6. Fully Custom Page

```tsx
import { SEOHead } from '../components/common/SEOHead';
import { generateCanonicalUrl, BASE_URL, IMAGE_PATH } from '../utils/seo-meta';

export default function CustomPage() {
  return (
    <>
      <SEOHead
        title="Custom Page | Aaron's Lawn Care"
        description="Custom page description (150-160 characters recommended)."
        canonical={generateCanonicalUrl('/custom-page')}
        ogImage={`${BASE_URL}${IMAGE_PATH}/og-custom.jpg`}
        ogImageAlt="Custom page image"
        twitterImage={`${BASE_URL}${IMAGE_PATH}/twitter-custom.jpg`}
        robots="index, follow, max-image-preview:large"
        geoRegion="US-KY"
        geoPlacename="Louisville"
        geoPosition="38.2527;-85.7585"
      />
      {/* Page content */}
    </>
  );
}
```

## All Service Page Names (for copy-paste)

Use these with `getServicePageSEO()`:

```tsx
// Example: getServicePageSEO('Service Name', 'Description', 'url-slug')

'Lawn Mowing' → 'lawn-mowing'
'Edging' → 'edging'
'Leaf Removal' → 'leaf-removal'
'Mulching' → 'mulching'
'Aeration & Overseeding' → 'aeration'
'Seasonal Cleanup' → 'seasonal-cleanup'
'Hedge Trimming' → 'hedge-trimming'
'Landscape Design' → 'landscape-design'
'Landscape Maintenance' → 'landscape-maintenance'
'Snow Removal' → 'snow-removal'
```

## Key Meta Tag Specifications

### Optimal Character Counts

| Element | Optimal | Min | Max | Impact |
|---------|---------|-----|-----|--------|
| Title | 55 | 30 | 60 | HIGH |
| Description | 155 | 120 | 160 | HIGH |
| Keywords | 5-10 | 1 | - | LOW |
| Meta text | 125 | - | - | MED |

### Image Dimensions

| Use Case | Size | Format | Max File |
|----------|------|--------|----------|
| Open Graph | 1200x630 | JPG/PNG | 500KB |
| Twitter Card | 1200x675 | JPG/PNG | 500KB |

### Default Values (Aaron's Lawn Care)

```
Base URL: https://aaronslawncare.com
Image Path: /images
Locale: en_US
Region: US-KY
City: Louisville
Coordinates: 38.2527;-85.7585
Business: Aaron's Lawn Care
```

## Common Functions

### Generate Canonical URL
```tsx
import { generateCanonicalUrl } from '../utils/seo-meta';

const url = generateCanonicalUrl('/services/lawn-mowing');
// → "https://aaronslawncare.com/services/lawn-mowing"
```

### Validate Meta Description
```tsx
import { validateMetaDescription } from '../utils/seo-meta';

const result = validateMetaDescription('Your description');
// result.isOptimal → true/false
// result.message → "Perfect length" or error message
```

### Validate Meta Title
```tsx
import { validateMetaTitle } from '../utils/seo-meta';

const result = validateMetaTitle('Your Title');
// result.isOptimal → true/false
// result.message → "Perfect length" or error message
```

### Get Geo Tags
```tsx
import { generateGeoTags, LOUISVILLE_GEO } from '../utils/seo-meta';

const tags = generateGeoTags(LOUISVILLE_GEO);
// → { "geo.region": "US-KY", ... }
```

## Meta Tag Presets

### Robots Presets (use with `generateRobotsMeta()`)

```tsx
import { generateRobotsMeta } from '../utils/seo-meta';

// Default (recommended for all pages)
generateRobotsMeta('default')
// → "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

// No indexing (staging, private pages)
generateRobotsMeta('noIndex')
// → "noindex, nofollow"

// Restrict snippets
generateRobotsMeta('restrictSnippets')
// → "index, follow, max-snippet:120"

// No image preview
generateRobotsMeta('noImagePreview')
// → "index, follow, noimageindex"
```

## Testing Checklist

### Before Publishing Any Page

- [ ] Title is 50-60 characters
- [ ] Description is 150-160 characters
- [ ] Canonical URL is correct
- [ ] OG Image is 1200x630px
- [ ] Twitter Image is 1200x675px
- [ ] All images are publicly accessible (no 404s)
- [ ] Geo tags are correct for Louisville
- [ ] Structured data validates (schema.org validator)

### After Publishing

- [ ] Test with Google Rich Results: https://search.google.com/test/rich-results
- [ ] Test with Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Test with Twitter Validator: https://cards-dev.twitter.com/validator
- [ ] Check Google Search Console for errors
- [ ] Monitor indexed pages in Search Console

## File Locations

```
website/
├── src/
│   ├── utils/
│   │   ├── seo-meta.ts          ← Main SEO utilities
│   │   └── schemas.ts           ← Structured data generators
│   └── components/
│       └── common/
│           └── SEOHead.tsx      ← Reusable component
├── docs/
│   ├── SEO_IMPLEMENTATION.md    ← Full documentation
│   └── SEO_QUICK_REFERENCE.md   ← This file
└── pages/
    └── HomePage.tsx             ← Example implementation
```

## Common Issues & Solutions

### Meta tags not showing in head?
- Ensure SEOHead is the first element in return
- Check React Helmet is initialized in main.tsx
- Verify no typos in meta tag names

### Social media preview looks wrong?
- Check og:image URL is publicly accessible
- Verify image dimensions are correct
- Clear cache in Facebook/Twitter debuggers
- Wait 24-48 hours for cache refresh

### Structured data validation errors?
- Use https://validator.schema.org/ to check
- Ensure @context is "https://schema.org"
- Verify all required properties are present
- Check JSON syntax with linter

### Not ranking in local search?
- Verify geo tags are correct
- Check business name matches across pages
- Ensure LocalBusiness schema is present
- Wait 2-4 weeks for Google to re-index

## Resources

- **Schema Validator:** https://validator.schema.org/
- **Google Rich Results:** https://search.google.com/test/rich-results
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **Google Search Central:** https://developers.google.com/search
- **Open Graph Guide:** https://ogp.me/
- **Twitter Cards Guide:** https://developer.twitter.com/en/docs/twitter-for-websites/cards

## Quick Copy-Paste Service Descriptions

Use these descriptions with `getServicePageSEO()`:

```tsx
// Lawn Mowing
'Professional lawn mowing services with precision edging and trimming for a perfectly manicured lawn every time.'

// Edging
'Precise lawn edging services that create clean borders and enhance your landscape\'s appearance.'

// Leaf Removal
'Comprehensive leaf removal services to keep your lawn clean and healthy throughout the seasons.'

// Mulching
'Premium mulch installation to protect your plants, retain moisture, and enhance your landscape\'s appearance.'

// Aeration & Overseeding
'Improve soil health and lawn density with professional aeration and overseeding services.'

// Seasonal Cleanup
'Comprehensive spring and fall cleanup services to prepare your lawn for changing seasons.'

// Hedge Trimming
'Professional hedge and shrub trimming to maintain healthy, attractive landscaping.'

// Landscape Design
'Custom landscape design services to transform your outdoor space into a beautiful oasis.'

// Landscape Maintenance
'Full-service landscaping maintenance to keep your property looking beautiful year-round.'

// Snow Removal
'Professional winter snow removal services for safe, well-maintained properties.'
```

---

**Last Updated:** 2025-01-14
**For Full Documentation:** See `SEO_IMPLEMENTATION.md`
