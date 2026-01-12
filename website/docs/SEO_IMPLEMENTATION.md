# SEO Meta Tags Implementation Guide

## Overview

This guide explains how to use the new SEO meta tags utilities in Aaron's Lawn Care website to optimize search engine visibility and social media sharing.

## Files Created

### 1. **`src/utils/seo-meta.ts`** - Core SEO Utilities
Complete utilities for generating SEO meta tags:
- Canonical URL generation
- Robots meta tags (with presets)
- Geo location tags for Louisville, KY
- Open Graph tags for social sharing
- Twitter Card tags
- Meta tag validation helpers

### 2. **`src/components/common/SEOHead.tsx`** - Reusable Component
React component that renders all SEO meta tags using React Helmet.
- Type-safe with TypeScript
- Supports structured data (JSON-LD)
- Simple and flexible API

## Quick Start

### Basic Usage (HomePage)

```tsx
import { SEOHead } from '../components/common/SEOHead';
import { getHomePageSEO } from '../utils/seo-meta';
import { generateLocalBusinessSchema } from '../utils/schemas';

export default function HomePage() {
  const seoConfig = getHomePageSEO();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <SEOHead
        {...seoConfig}
        schemaMarkup={localBusinessSchema}
      />
      {/* Page content */}
    </>
  );
}
```

### Service Pages

```tsx
import { SEOHead } from '../components/common/SEOHead';
import { getServicePageSEO } from '../utils/seo-meta';
import { generateServiceSchema } from '../utils/schemas';

export default function LawnMowingPage() {
  const seoConfig = getServicePageSEO(
    'Lawn Mowing',
    'Professional lawn mowing services with precision edging and trimming',
    'lawn-mowing'
  );

  const serviceSchema = generateServiceSchema(
    'Lawn Mowing',
    'Professional lawn mowing services with precision edging and trimming',
    '/services/lawn-mowing'
  );

  return (
    <>
      <SEOHead
        {...seoConfig}
        schemaMarkup={serviceSchema}
      />
      {/* Page content */}
    </>
  );
}
```

### Blog/Article Pages

```tsx
import { SEOHead } from '../components/common/SEOHead';
import { getArticleSEO } from '../utils/seo-meta';

export default function BlogPost() {
  const seoConfig = getArticleSEO(
    'Spring Lawn Care Tips',
    'Learn the best practices for maintaining your lawn in spring',
    'spring-lawn-care-tips',
    '2025-01-14',
    '2025-01-14',
    '/images/blog/spring-tips.jpg'
  );

  return (
    <>
      <SEOHead {...seoConfig} />
      {/* Page content */}
    </>
  );
}
```

### Custom Configuration

```tsx
import { SEOHead } from '../components/common/SEOHead';
import { generateCanonicalUrl } from '../utils/seo-meta';

export default function CustomPage() {
  return (
    <SEOHead
      title="Custom Page Title"
      description="Custom page description"
      canonical={generateCanonicalUrl('/custom-page')}
      ogImage="https://aaronslawncare.com/images/custom.jpg"
      ogImageAlt="Custom page image"
      robots="index, follow, max-image-preview:large"
      geoRegion="US-KY"
      geoPlacename="Louisville"
      geoPosition="38.2527;-85.7585"
    />
  );
}
```

## Meta Tags Generated

### By SEOHead Component

The `SEOHead` component renders the following meta tags:

#### Primary Meta Tags
```html
<title>Page Title</title>
<meta name="title" content="Page Title" />
<meta name="description" content="Page description" />
<meta name="keywords" content="keywords" /> <!-- optional -->
<link rel="canonical" href="https://aaronslawncare.com/page" />
```

#### Robots & Crawling Directives
```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="..." />
<meta name="bingbot" content="..." />
```

#### Geo Location Tags (Local SEO)
```html
<meta name="geo.region" content="US-KY" />
<meta name="geo.placename" content="Louisville" />
<meta name="geo.position" content="38.2527;-85.7585" />
```

#### Open Graph Tags (Facebook, LinkedIn, Pinterest)
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
<meta property="og:url" content="https://aaronslawncare.com/page" />
<meta property="og:site_name" content="Aaron's Lawn Care" />
<meta property="og:locale" content="en_US" />
<meta property="og:image" content="https://aaronslawncare.com/images/og.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Image alt text" />
```

#### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Page description" />
<meta name="twitter:image" content="https://aaronslawncare.com/images/twitter.jpg" />
```

#### Article Metadata (Optional)
```html
<meta property="article:published_time" content="2025-01-14T00:00:00Z" />
<meta property="article:modified_time" content="2025-01-14T00:00:00Z" />
<meta property="article:author" content="Aaron's Lawn Care" />
```

#### Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  ...
}
</script>
```

## API Reference

### Main Component: `SEOHead`

```tsx
interface SEOHeadProps extends Partial<SEOConfig> {
  schemaMarkup?: Record<string, any>;
  children?: React.ReactNode;
}

<SEOHead
  title="Page Title"
  description="Page description"
  canonical="https://aaronslawncare.com/page"
  ogImage="https://aaronslawncare.com/images/og.jpg"
  ogImageWidth={1200}
  ogImageHeight={630}
  twitterImage="https://aaronslawncare.com/images/twitter.jpg"
  robots="index, follow, max-image-preview:large"
  geoRegion="US-KY"
  geoPlacename="Louisville"
  geoPosition="38.2527;-85.7585"
  locale="en_US"
  ogType="website" // or "article"
  publishedTime="2025-01-14T00:00:00Z"
  modifiedTime="2025-01-14T00:00:00Z"
  author="Author Name"
  keywords="keyword1, keyword2"
  schemaMarkup={schemaObject}
/>
```

### Utility Functions

#### `generateCanonicalUrl(pathname, baseUrl?)`
Generates the full canonical URL for a page.

```tsx
import { generateCanonicalUrl } from '../utils/seo-meta';

const canonical = generateCanonicalUrl('/services/lawn-mowing');
// Returns: "https://aaronslawncare.com/services/lawn-mowing"
```

#### `generateRobotsMeta(preset?)`
Generates robots meta tag content from presets or custom string.

```tsx
import { generateRobotsMeta, ROBOTS_PRESETS } from '../utils/seo-meta';

// Using presets
const default = generateRobotsMeta('default');
// Returns: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

const noIndex = generateRobotsMeta('noIndex');
// Returns: "noindex, nofollow"

// Custom string
const custom = generateRobotsMeta('index, follow, noimageindex');
```

**Available Presets:**
- `default` - Standard indexing with full preview permissions
- `googleFull` - Full Google indexing permissions
- `noIndex` - No indexing (staging/private pages)
- `restrictSnippets` - Limited snippet length
- `noImagePreview` - No image preview in search results
- `archive` - Archive-only access

#### `generateGeoTags(geo?)`
Generates geo location meta tags for local SEO.

```tsx
import { generateGeoTags, LOUISVILLE_GEO } from '../utils/seo-meta';

const tags = generateGeoTags(LOUISVILLE_GEO);
// Returns: {
//   "geo.region": "US-KY",
//   "geo.placename": "Louisville",
//   "geo.position": "38.2527;-85.7585"
// }
```

#### `generateOpenGraphImage(url, width?, height?, type?, alt?)`
Generates Open Graph image meta tags.

```tsx
import { generateOpenGraphImage } from '../utils/seo-meta';

const ogTags = generateOpenGraphImage(
  'https://aaronslawncare.com/images/og.jpg',
  1200,
  630,
  'image/jpeg',
  'Aaron\'s Lawn Care'
);
```

#### `generateOpenGraphTags(config)`
Generates all Open Graph tags.

```tsx
import { generateOpenGraphTags } from '../utils/seo-meta';

const config = {
  canonical: 'https://aaronslawncare.com/',
  title: 'Aaron\'s Lawn Care',
  description: 'Professional lawn care services',
  ogImage: 'https://aaronslawncare.com/images/og.jpg'
};

const ogTags = generateOpenGraphTags(config);
```

#### `generateTwitterCardTags(config, cardType?)`
Generates Twitter Card meta tags.

```tsx
import { generateTwitterCardTags } from '../utils/seo-meta';

const twitterTags = generateTwitterCardTags(config, 'summaryLarge');
```

**Card Types:**
- `summaryLarge` - Large image card (recommended)
- `summary` - Standard summary card
- `player` - Video player card
- `app` - Mobile app card

#### `generateCompleteSEOTags(config)`
Generates all SEO tags in one call.

```tsx
import { generateCompleteSEOTags } from '../utils/seo-meta';

const allTags = generateCompleteSEOTags(seoConfig);
```

#### `getHomePageSEO()`
Pre-configured SEO for homepage.

#### `getServicePageSEO(serviceName, description, slug)`
Pre-configured SEO for service pages.

#### `getArticleSEO(title, description, slug, publishedDate, modifiedDate?, imageUrl?)`
Pre-configured SEO for article/blog pages.

#### `getContactPageSEO()`
Pre-configured SEO for contact page.

#### `getAboutPageSEO()`
Pre-configured SEO for about page.

### Validation Helpers

#### `validateMetaDescription(description, ideal?)`
Validates meta description length (optimal: 150-160 characters).

```tsx
import { validateMetaDescription } from '../utils/seo-meta';

const result = validateMetaDescription('Your description here');
console.log(result);
// {
//   length: 20,
//   isOptimal: false,
//   isTooShort: true,
//   isTooLong: false,
//   message: "Too short (20). Aim for 150-160 characters."
// }
```

#### `validateMetaTitle(title, ideal?)`
Validates meta title length (optimal: 50-60 characters).

```tsx
import { validateMetaTitle } from '../utils/seo-meta';

const result = validateMetaTitle('Page Title');
console.log(result);
// {
//   length: 10,
//   isOptimal: false,
//   isTooShort: true,
//   isTooLong: false,
//   message: "Too short (10). Aim for 50-60 characters."
// }
```

## Best Practices

### Image Optimization

**Open Graph Image Recommendations:**
- Size: 1200x630 pixels
- Format: JPEG or PNG
- File size: <500KB
- Aspect ratio: 1.91:1 (standard for most platforms)

**Twitter Image Recommendations:**
- Size: 1200x675 pixels
- Format: JPEG or PNG
- File size: <500KB
- Aspect ratio: 16:9 (standard for Twitter cards)

### Meta Description Length

Google typically displays:
- **Desktop:** 150-160 characters
- **Mobile:** 120 characters
- **Optimal:** 155 characters

Use the `validateMetaDescription()` helper to check length.

### Meta Title Length

Google typically displays:
- **Desktop:** 50-60 characters
- **Mobile:** 30-40 characters
- **Optimal:** 55 characters

Use the `validateMetaTitle()` helper to check length.

### Canonical URLs

- Always include canonical URL
- Use absolute URLs (not relative)
- Prevents duplicate content issues
- Should point to the preferred version of a page

### Robots Meta Tags

Default for all pages:
```
index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
```

This tells search engines to:
- `index` - Include in search index
- `follow` - Follow outbound links
- `max-image-preview:large` - Show large image previews
- `max-snippet:-1` - Show any length snippet
- `max-video-preview:-1` - Show any length video preview

### Geo Tags (Local SEO)

Include for all pages:
```html
<meta name="geo.region" content="US-KY" />
<meta name="geo.placename" content="Louisville" />
<meta name="geo.position" content="38.2527;-85.7585" />
```

This helps with local search visibility in Louisville, Kentucky.

### Structured Data

Always include appropriate structured data (JSON-LD):
- **Homepage:** LocalBusiness schema
- **Service Pages:** Service schema
- **Blog Posts:** BlogPosting schema
- **Contact Page:** ContactPoint schema

## Integration Checklist

- [x] Create `seo-meta.ts` utility file
- [x] Create `SEOHead.tsx` component
- [x] Update HomePage with SEOHead
- [ ] Update all service pages with getServicePageSEO()
- [ ] Update contact page with getContactPageSEO()
- [ ] Update about page with getAboutPageSEO()
- [ ] Create OG images for all pages
- [ ] Create Twitter images for all pages
- [ ] Test with Google Rich Results Testing Tool
- [ ] Verify structured data with Schema.org validator
- [ ] Test social media sharing (Facebook, Twitter, LinkedIn)
- [ ] Monitor Search Console for indexing issues

## Testing & Validation

### Test with Google Tools

1. **Rich Results Test:**
   - https://search.google.com/test/rich-results
   - Validates structured data (JSON-LD)

2. **Mobile-Friendly Test:**
   - https://search.google.com/test/mobile-friendly
   - Checks mobile responsiveness and rendering

3. **PageSpeed Insights:**
   - https://pagespeed.web.dev/
   - Checks performance and SEO issues

### Test with Social Media Debuggers

1. **Facebook Sharing Debugger:**
   - https://developers.facebook.com/tools/debug/
   - Preview Open Graph rendering

2. **Twitter Card Validator:**
   - https://cards-dev.twitter.com/validator
   - Validate Twitter Card markup

3. **LinkedIn Post Inspector:**
   - https://www.linkedin.com/post-inspector/
   - Preview LinkedIn sharing

### Test with Schema.org Validator

- https://validator.schema.org/
- Validates structured data format and completeness

## Example Pages

### Homepage
```tsx
import { getHomePageSEO } from '../utils/seo-meta';
import { generateLocalBusinessSchema } from '../utils/schemas';

export default function HomePage() {
  const seoConfig = getHomePageSEO();
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <SEOHead {...seoConfig} schemaMarkup={schema} />
      {/* Content */}
    </>
  );
}
```

### Service Page
```tsx
import { getServicePageSEO } from '../utils/seo-meta';
import { generateServiceSchema } from '../utils/schemas';

export default function LawnMowingPage() {
  const seoConfig = getServicePageSEO(
    'Lawn Mowing',
    'Professional lawn mowing services with precision edging and trimming',
    'lawn-mowing'
  );

  const schema = generateServiceSchema(
    'Lawn Mowing',
    'Professional lawn mowing services with precision edging and trimming',
    '/services/lawn-mowing'
  );

  return (
    <>
      <SEOHead {...seoConfig} schemaMarkup={schema} />
      {/* Content */}
    </>
  );
}
```

### Blog Post
```tsx
import { getArticleSEO } from '../utils/seo-meta';
import { generateBlogPostSchema } from '../utils/schemas';

export default function BlogPost() {
  const seoConfig = getArticleSEO(
    'Spring Lawn Care Tips',
    'Learn the best practices for maintaining your lawn in spring',
    'spring-lawn-care-tips',
    '2025-01-14',
    '2025-01-14'
  );

  const schema = generateBlogPostSchema(
    'Spring Lawn Care Tips',
    'Learn the best practices for maintaining your lawn in spring',
    'Full article content here...',
    '2025-01-14',
    '2025-01-14',
    '/blog/spring-lawn-care-tips'
  );

  return (
    <>
      <SEOHead {...seoConfig} schemaMarkup={schema} />
      {/* Content */}
    </>
  );
}
```

## Troubleshooting

### Meta Tags Not Showing

1. Verify SEOHead component is at top of return statement (before other content)
2. Check React Helmet is properly initialized in main.tsx
3. Use browser DevTools to inspect `<head>` element

### Structured Data Errors

1. Use Schema.org validator: https://validator.schema.org/
2. Check JSON-LD syntax with linter: https://jsonlint.com/
3. Ensure @context is correct: `"https://schema.org"`

### Social Media Sharing Issues

1. Use Facebook Debugger to clear cache: https://developers.facebook.com/tools/debug/
2. Use Twitter Card Validator: https://cards-dev.twitter.com/validator
3. Verify og:image URL is publicly accessible
4. Check image dimensions match requirements

### Canonical URL Issues

1. Ensure canonical URL matches actual page URL
2. Use absolute URLs (not relative)
3. Verify no canonicals pointing to different domains
4. Check Google Search Console for canonical issues

## SEO Meta Tag Specifications

### Character Limits (Google Display)

| Tag | Desktop | Mobile | Ideal | Notes |
|-----|---------|--------|-------|-------|
| Title | 50-60 | 30-40 | 55 | Use primary keyword first |
| Description | 150-160 | 120 | 155 | Include call-to-action |
| Meta Tags | - | - | - | Limit to 5-10 relevant |

### Image Requirements

| Platform | Size | Format | Max Size |
|----------|------|--------|----------|
| OG Image | 1200x630 | JPG/PNG | 500KB |
| Twitter | 1200x675 | JPG/PNG | 500KB |
| OG Image Alt | - | Text | 125 chars |

### Robots Directives

| Directive | Purpose | Default |
|-----------|---------|---------|
| index | Include in search index | On |
| noindex | Exclude from index | Off |
| follow | Follow outbound links | On |
| nofollow | Don't follow links | Off |
| max-snippet | Max snippet length | -1 (any) |
| max-image-preview | Image preview size | large |
| max-video-preview | Video preview length | -1 (any) |

### Geo Tag Format

| Tag | Format | Example |
|-----|--------|---------|
| geo.region | ISO 3166-2 | US-KY |
| geo.placename | City name | Louisville |
| geo.position | lat;lng | 38.2527;-85.7585 |

## References

- **Open Graph Protocol:** https://ogp.me/
- **Twitter Cards:** https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
- **Schema.org:** https://schema.org/
- **Google Search Central:** https://developers.google.com/search/docs
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Meta Tags Best Practices:** https://developers.google.com/search/docs/beginner/meta-tags

## Support

For questions or issues, refer to:
1. Inline code comments in `seo-meta.ts`
2. Component JSDoc in `SEOHead.tsx`
3. Schema.org documentation at https://schema.org/
4. Google Search Central guides at https://developers.google.com/search
