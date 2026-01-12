# SEO Meta Tags - Visual Preview Guide

This guide shows what each meta tag looks like and how they appear to users and search engines.

## How Meta Tags Are Used

### 1. Search Engine Results (SERP)

```
┌─────────────────────────────────────────────────────┐
│ Aaron's Lawn Care | Professional Lawn Services in   │  ← <title>
│ Louisville, KY                                      │
├─────────────────────────────────────────────────────┤
│ https://aaronslawncare.com                          │  ← Canonical URL
├─────────────────────────────────────────────────────┤
│ 20+ years of professional lawn care services in     │
│ Louisville, KY. Mowing, treatment, landscaping,    │  ← <meta description>
│ and more. Get your free quote today!               │
└─────────────────────────────────────────────────────┘
```

**Character Count Display:**
- **Title:** ~55 characters (shown in full)
- **Description:** ~155 characters (shown in full on desktop, ~120 on mobile)

### 2. Facebook Share Preview

```
┌──────────────────────────────────────────┐
│  [OG Image - 1200x630px]                 │  ← og:image
│                                          │
│  ┌──────────────────────────────────────┤
│  │ Aaron's Lawn Care | Professional     │  ← og:title
│  │ Lawn Care Services in Louisville, KY │
│  │                                       │
│  │ 20+ years of professional lawn care  │  ← og:description
│  │ services in Louisville, KY. Mowing,  │
│  │ treatment, landscaping, and more.    │
│  │                                       │
│  │ aaronslawncare.com                   │  ← og:url (canonical)
│  └──────────────────────────────────────┘
└──────────────────────────────────────────┘
```

### 3. Twitter Card Preview

```
┌──────────────────────────────────────────┐
│  [Twitter Image - 1200x675px]            │  ← twitter:image
│                                          │
│  Aaron's Lawn Care | Professional Lawn  │
│  Care Services in Louisville, KY         │  ← twitter:title
│                                          │
│  20+ years of professional lawn care    │
│  services in Louisville, KY. Mowing,    │  ← twitter:description
│  treatment, landscaping, and more.      │
└──────────────────────────────────────────┘
```

### 4. Google Search Console Data

```
┌────────────────────────────────────────────────┐
│ Page Indexing                                  │
├────────────────────────────────────────────────┤
│ URL: https://aaronslawncare.com               │ ← canonical
│ Robots: index, follow, max-image-preview...   │ ← robots meta
│ Geo: US-KY, Louisville                        │ ← geo tags
│ Structured Data: LocalBusiness ✓              │ ← schema markup
│ Mobile: Optimized ✓                           │
└────────────────────────────────────────────────┘
```

## Complete HTML Output

Here's what the SEOHead component generates for the homepage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Primary Meta Tags -->
  <title>Aaron's Lawn Care | Professional Lawn Care Services in Louisville, KY</title>
  <meta name="title" content="Aaron's Lawn Care | Professional Lawn Care Services in Louisville, KY">
  <meta name="description" content="20+ years of professional lawn care services in Louisville, KY. Mowing, treatment, landscaping, and more. Get your free quote today!">
  <meta name="keywords" content="lawn care, Louisville KY, landscaping, lawn mowing">

  <!-- Canonical URL - Prevents Duplicate Content -->
  <link rel="canonical" href="https://aaronslawncare.com/">

  <!-- Robots Meta Tags - Search Engine Directives -->
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

  <!-- Geo Location Tags - Local SEO -->
  <meta name="geo.region" content="US-KY">
  <meta name="geo.placename" content="Louisville">
  <meta name="geo.position" content="38.2527;-85.7585">

  <!-- Locale -->
  <meta property="og:locale" content="en_US">

  <!-- Open Graph Tags - Social Media Sharing (Facebook, LinkedIn, Pinterest) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Aaron's Lawn Care | Professional Lawn Care Services in Louisville, KY">
  <meta property="og:description" content="20+ years of professional lawn care services in Louisville, KY. Mowing, treatment, landscaping, and more. Get your free quote today!">
  <meta property="og:url" content="https://aaronslawncare.com/">
  <meta property="og:site_name" content="Aaron's Lawn Care">

  <!-- Open Graph Image - Recommended: 1200x630px -->
  <meta property="og:image" content="https://aaronslawncare.com/images/og-home.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Aaron's Lawn Care - Professional Lawn Services">

  <!-- Twitter Card Tags - Social Media Sharing (Twitter/X) -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Aaron's Lawn Care | Professional Lawn Care Services in Louisville, KY">
  <meta name="twitter:description" content="20+ years of professional lawn care services in Louisville, KY. Mowing, treatment, landscaping, and more. Get your free quote today!">
  <meta name="twitter:image" content="https://aaronslawncare.com/images/twitter-home.jpg">

  <!-- Mobile & Theme Meta Tags -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#15803d">
  <meta name="color-scheme" content="light">

  <!-- Apple Mobile Web App Meta Tags -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Aaron's Lawn Care">

  <!-- Structured Data - JSON-LD (Google Rich Results) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aaron's Lawn Care",
    "description": "Professional lawn care and landscaping services...",
    "url": "https://aaronslawncare.com",
    "telephone": "+15029268524",
    "email": "gnaua429@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Louisville",
      "addressRegion": "KY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.2527",
      "longitude": "-85.7585"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "38.2527",
        "longitude": "-85.7585"
      },
      "geoRadius": "50000"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "10"
    }
  }
  </script>
</head>
<body>
  <!-- Page content -->
</body>
</html>
```

## Meta Tag Purpose & Impact

### Title Tag
```html
<title>Aaron's Lawn Care | Professional Lawn Services Louisville, KY</title>
```
- **Purpose:** Page title in browser tab and search results
- **Character Count:** 55 characters (optimal: 50-60)
- **Impact:** HIGH - Directly affects click-through rate
- **Best Practice:**
  - Put primary keyword first
  - Include location for local SEO
  - Use pipes (|) or dashes (-) to separate sections

### Meta Description
```html
<meta name="description" content="20+ years of professional lawn care services in Louisville, KY. Mowing, treatment, landscaping, and more. Get your free quote today!">
```
- **Purpose:** Summary shown under URL in search results
- **Character Count:** 155 characters (optimal: 150-160)
- **Impact:** HIGH - Directly affects click-through rate
- **Best Practice:**
  - Include primary keyword
  - Include location
  - Add call-to-action
  - Make compelling and unique

### Canonical URL
```html
<link rel="canonical" href="https://aaronslawncare.com/">
```
- **Purpose:** Tells search engines which URL is the "main" version
- **Impact:** HIGH - Prevents duplicate content penalties
- **Best Practice:**
  - Use absolute URL (not relative)
  - Should match current page URL
  - One per page only

### Robots Meta Tag
```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
```
- **Purpose:** Directs search engine crawlers what to do
- **Impact:** MEDIUM - Controls indexing behavior
- **Best Practice:**
  - `index` = Include in search results
  - `follow` = Follow outbound links
  - `max-image-preview:large` = Show large image previews
  - `-1` = No limits on snippets/videos

### Geo Tags
```html
<meta name="geo.region" content="US-KY">
<meta name="geo.placename" content="Louisville">
<meta name="geo.position" content="38.2527;-85.7585">
```
- **Purpose:** Signals geographic relevance to search engines
- **Impact:** MEDIUM - Improves local search visibility
- **Best Practice:**
  - Use for local businesses
  - Include on all pages
  - Ensure accuracy
  - Format: region=ISO code, placename=city, position=lat;long

### Open Graph Tags
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">
```
- **Purpose:** Controls how page appears when shared on social media
- **Impact:** MEDIUM - Affects social sharing engagement
- **Best Practice:**
  - Use 1200x630px images
  - Match page content
  - Keep titles and descriptions concise

### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:image" content="...">
```
- **Purpose:** Controls how page appears when shared on Twitter/X
- **Impact:** LOW-MEDIUM - Affects social sharing appearance
- **Best Practice:**
  - Use 1200x675px images
  - Keep copy under 200 characters
  - Test with Twitter Card validator

### Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  ...
}
</script>
```
- **Purpose:** Provides semantic meaning to content
- **Impact:** HIGH - Enables Rich Results in Google
- **Best Practice:**
  - Use schema.org vocabulary
  - Match actual page content
  - Validate with schema.org validator
  - LocalBusiness for homepage
  - Service for service pages
  - BlogPosting for articles

## Mobile vs Desktop Display

### Google Search Results

**Desktop (55+ characters visible):**
```
Aaron's Lawn Care | Professional Lawn Care Services in Louisville, KY
20+ years of professional lawn care services in Louisville, KY. Mowing,
treatment, landscaping, and more. Get your free quote today!
```

**Mobile (30-40 characters visible):**
```
Aaron's Lawn Care | Professional...
20+ years of professional lawn care services in Louisville, KY. Mowing,...
```

### Social Media Share Preview

**Facebook (Large Image Card):**
```
[Large Image - 1200x630px]
Aaron's Lawn Care Title
Description text (2-3 lines)
aaronslawncare.com
```

**Twitter (Summary Large Image):**
```
[Large Image - 1200x675px]
Title (Bold, Black)
Description (Gray, Regular)
```

**LinkedIn (Standard Preview):**
```
[Small Thumbnail]
Page Title
Description Summary
URL Domain
```

## Character Counting Examples

### Title (50-60 chars optimal)

```
Too Short (40 chars):
"Aaron's Lawn Care in Louisville"

Perfect (55 chars):
"Aaron's Lawn Care | Professional Services Louisville, KY"

Too Long (65 chars):
"Aaron's Lawn Care | Professional Lawn Care Services in Louisville, Kentucky"
```

### Description (150-160 chars optimal)

```
Too Short (110 chars):
"Professional lawn care services in Louisville, Kentucky. Get a free quote today!"

Perfect (155 chars):
"20+ years of professional lawn care services in Louisville, KY. Mowing, treatment, landscaping, and more. Get your free quote today!"

Too Long (180 chars):
"Welcome to Aaron's Lawn Care! We have been providing professional lawn care services to the Louisville, Kentucky area for over 20 years. We offer lawn mowing, treatment, landscaping, and much more. Contact us today for a free quote!"
```

## Testing with Browser DevTools

### View Page Meta Tags

1. **Open DevTools:** F12 or Right-click → Inspect
2. **Go to Elements tab**
3. **Look at `<head>` section:**

```
<head>
  <title>Aaron's Lawn Care | ...</title>  ← Page title
  <meta name="description" ...>            ← Meta description
  <meta property="og:image" ...>           ← OG image
  <meta name="twitter:card" ...>           ← Twitter card
  <script type="application/ld+json">      ← Structured data
</head>
```

### Mobile View

1. **DevTools → Toggle Device Toolbar** (Ctrl+Shift+M)
2. **Select iPhone SE or common mobile device**
3. **View how search results appear on mobile**

## Real-World Example: Full Page Metadata

### Homepage SEO

```tsx
<SEOHead
  title="Aaron's Lawn Care | Professional Lawn Services Louisville, KY"
  description="20+ years of professional lawn care services in Louisville, KY. Mowing, treatment, landscaping, and more. Get your free quote today!"
  canonical="https://aaronslawncare.com/"
  ogImage="https://aaronslawncare.com/images/og-home.jpg"
  ogImageAlt="Aaron's Lawn Care - Professional Lawn Services"
  twitterImage="https://aaronslawncare.com/images/twitter-home.jpg"
  robots="index, follow, max-image-preview:large"
  geoRegion="US-KY"
  geoPlacename="Louisville"
  geoPosition="38.2527;-85.7585"
  schemaMarkup={generateLocalBusinessSchema()}
/>
```

**Renders as:**

| Source | Value |
|--------|-------|
| Page Title | Aaron's Lawn Care \| Professional Lawn Services Louisville, KY |
| Canonical | https://aaronslawncare.com/ |
| Meta Description | 20+ years of professional lawn care services... |
| OG Image | https://aaronslawncare.com/images/og-home.jpg |
| Twitter Image | https://aaronslawncare.com/images/twitter-home.jpg |
| Robots | index, follow, max-image-preview:large |
| Geo Region | US-KY |
| Geo City | Louisville |
| Coordinates | 38.2527;-85.7585 |
| Schema | LocalBusiness JSON-LD |

## SEO Checklist for Each Meta Tag

### Title Tag
- [ ] 50-60 characters
- [ ] Primary keyword in first 30 characters
- [ ] Includes location (Louisville, KY)
- [ ] No keyword stuffing
- [ ] Unique per page
- [ ] Matches actual page content

### Meta Description
- [ ] 150-160 characters
- [ ] Includes primary keyword
- [ ] Includes location
- [ ] Has call-to-action
- [ ] Compelling and unique
- [ ] No keyword stuffing
- [ ] Matches page content

### Canonical URL
- [ ] Absolute URL (not relative)
- [ ] Matches current page URL
- [ ] No trailing parameters
- [ ] Uses HTTPS
- [ ] One per page only

### Robots Meta
- [ ] Correct indexing directive
- [ ] Proper snippet length setting
- [ ] Image preview size set
- [ ] Video preview settings correct

### Geo Tags
- [ ] Region is correct (US-KY)
- [ ] City is correct (Louisville)
- [ ] Coordinates are accurate
- [ ] Included on all pages

### Open Graph Tags
- [ ] OG Image is 1200x630px
- [ ] Image is publicly accessible
- [ ] Title matches page title
- [ ] Description matches meta description
- [ ] URL is canonical URL
- [ ] Site name is correct

### Twitter Card Tags
- [ ] Card type is summary_large_image
- [ ] Image is 1200x675px
- [ ] Image is publicly accessible
- [ ] Title is under 70 characters
- [ ] Description is under 200 characters

### Structured Data
- [ ] Valid JSON-LD format
- [ ] Correct @context (schema.org)
- [ ] Correct @type for page
- [ ] All required fields present
- [ ] Validates at schema.org validator
- [ ] Matches actual page content

---

**Remember:** Good meta tags are the first step to SEO success. They tell both users and search engines what your page is about. Keep them accurate, concise, and compelling!
