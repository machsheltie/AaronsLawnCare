# Image Optimization Guide for Aaron's Lawn Care Website

**Last Updated:** 2026-01-12
**Purpose:** Comprehensive guide for optimizing images for SEO and performance

---

## Table of Contents

1. [Alt Text Best Practices](#alt-text-best-practices)
2. [Lazy Loading Implementation](#lazy-loading-implementation)
3. [Image Sizing Recommendations](#image-sizing-recommendations)
4. [WebP Conversion Guide](#webp-conversion-guide)
5. [Performance Metrics](#performance-metrics)
6. [Common Mistakes to Avoid](#common-mistakes-to-avoid)
7. [Implementation Checklist](#implementation-checklist)

---

## Alt Text Best Practices

### The Formula for SEO-Optimized Alt Text

```
[Specific Service] + [Location Keywords] + [Business Name]
```

**Example:**
```html
<!-- ❌ BAD: Generic and non-descriptive -->
<img src="lawn.jpg" alt="lawn" />

<!-- ✅ GOOD: Descriptive with location keywords -->
<img
  src="lawn.jpg"
  alt="Professional lawn mowing service in Louisville Kentucky by Aaron's Lawn Care"
/>
```

### Location Keywords to Include

**Primary Keywords:**
- Louisville
- Louisville KY
- Louisville Kentucky
- Kentucky

**Secondary Keywords (when relevant):**
- St. Matthews
- Highlands
- Okolona
- Jeffersontown
- Greater Louisville area

### Service-Specific Alt Text Templates

#### Lawn Mowing
```html
<img alt="Professional lawn mowing service in [Area] Louisville KY by Aaron's Lawn Care" />
<img alt="Perfectly manicured lawn with striping pattern in Louisville Kentucky" />
<img alt="Weekly lawn mowing and maintenance service Louisville KY" />
```

#### Landscaping
```html
<img alt="Professional landscape design and installation in Louisville Kentucky by Aaron's Lawn Care" />
<img alt="Beautiful landscaped garden transformation Louisville KY" />
<img alt="Custom landscape design for residential property Louisville Kentucky" />
```

#### Mulching
```html
<img alt="Premium mulch installation in garden beds Louisville KY by Aaron's Lawn Care" />
<img alt="Fresh mulch application for flower beds Louisville Kentucky" />
<img alt="Professional mulching service for landscaping Louisville KY" />
```

#### Hedge Trimming
```html
<img alt="Professional hedge trimming and shaping service Louisville Kentucky" />
<img alt="Neatly trimmed hedges and shrubs in Louisville KY by Aaron's Lawn Care" />
<img alt="Hedge maintenance and pruning services Louisville Kentucky" />
```

#### Leaf Removal
```html
<img alt="Fall leaf removal and cleanup service in Louisville Kentucky" />
<img alt="Professional leaf cleanup for residential property Louisville KY" />
<img alt="Complete fall cleanup services Louisville Kentucky by Aaron's Lawn Care" />
```

#### Seasonal Cleanup
```html
<img alt="Spring cleanup and lawn preparation services Louisville KY" />
<img alt="Fall yard cleanup and winterization Louisville Kentucky" />
<img alt="Seasonal property maintenance services Louisville KY by Aaron's Lawn Care" />
```

### Alt Text Writing Rules

**DO:**
- ✅ Be specific and descriptive
- ✅ Include primary location keywords (Louisville, KY, Kentucky)
- ✅ Mention the business name (Aaron's Lawn Care)
- ✅ Describe what's actually in the image
- ✅ Keep it under 125 characters for optimal SEO
- ✅ Use natural language that makes sense

**DON'T:**
- ❌ Keyword stuff (repeating Louisville 5 times)
- ❌ Use generic phrases like "image of" or "picture of"
- ❌ Leave alt text empty
- ❌ Use the same alt text for multiple images
- ❌ Exceed 125 characters unnecessarily
- ❌ Use special characters or symbols

---

## Lazy Loading Implementation

### When to Use Lazy Loading

**Use `loading="lazy"` for:**
- ✅ Images below the fold (not visible on initial page load)
- ✅ Gallery images
- ✅ Testimonial images/avatars
- ✅ Service section images (lower on page)
- ✅ Footer images

**Use `loading="eager"` for:**
- ✅ Hero section images (above the fold)
- ✅ Logo images
- ✅ Critical first-view content
- ✅ Lightbox/modal images (when opened)

### Implementation Examples

#### Hero Section (Above the Fold)
```tsx
// HomePage.tsx - Hero background or main image
<img
  src="/images/hero-lawn.jpg"
  alt="Professional lawn care services in Louisville Kentucky by Aaron's Lawn Care"
  loading="eager"
  width="1920"
  height="1080"
  className="w-full h-full object-cover"
/>
```

#### Gallery Images (Below the Fold)
```tsx
// Gallery.tsx - All gallery images
<img
  src="/images/gallery/mowing-1.jpg"
  alt="Professional estate lawn maintenance service in Louisville Kentucky by Aaron's Lawn Care"
  loading="lazy"
  width="1200"
  height="800"
  className="w-full h-full object-cover"
/>
```

#### Service Cards (Below the Fold)
```tsx
// ServicesPreview.tsx
<img
  src="/images/services/landscaping.jpg"
  alt="Complete landscape transformation and maintenance services in Louisville KY"
  loading="lazy"
  width="800"
  height="600"
  className="rounded-lg shadow-lg"
/>
```

### Browser Support

- **Chrome/Edge:** Supported since version 77
- **Firefox:** Supported since version 75
- **Safari:** Supported since version 15.4
- **Mobile Safari:** Supported since iOS 15.4

**Fallback:** Browsers that don't support lazy loading will simply load images immediately (graceful degradation).

---

## Image Sizing Recommendations

### Width and Height Attributes

**Always include `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).**

```tsx
// ✅ GOOD: Prevents layout shift
<img
  src="lawn.jpg"
  alt="Professional lawn service"
  width="800"
  height="600"
  loading="lazy"
  className="w-full h-auto"
/>

// ❌ BAD: Causes layout shift as image loads
<img
  src="lawn.jpg"
  alt="Professional lawn service"
  loading="lazy"
  className="w-full h-auto"
/>
```

### Recommended Image Dimensions

#### Hero/Banner Images
- **Desktop:** 1920x1080px (16:9 ratio)
- **Mobile:** 1200x900px (4:3 ratio)
- **File Size:** <300KB (WebP) or <500KB (JPEG)

#### Gallery Images
- **Thumbnail:** 400x300px
- **Full Size:** 1200x900px or 1600x1200px
- **File Size:** <150KB (WebP) or <250KB (JPEG)

#### Service Card Images
- **Standard:** 800x600px (4:3 ratio)
- **Wide:** 1000x600px (5:3 ratio)
- **File Size:** <100KB (WebP) or <200KB (JPEG)

#### Profile/Avatar Images
- **Standard:** 200x200px (1:1 ratio)
- **Large:** 400x400px (1:1 ratio)
- **File Size:** <50KB (WebP) or <100KB (JPEG)

#### Before/After Images
- **Standard:** 800x600px (both should match)
- **File Size:** <150KB each (WebP) or <250KB (JPEG)

### Aspect Ratios

| Use Case | Aspect Ratio | Dimensions Example |
|----------|--------------|-------------------|
| Hero/Banner | 16:9 | 1920x1080 |
| Service Cards | 4:3 | 800x600 |
| Gallery Landscape | 3:2 | 1200x800 |
| Gallery Portrait | 2:3 | 800x1200 |
| Profile/Avatar | 1:1 | 400x400 |

---

## WebP Conversion Guide

### Why Use WebP?

- **30-50% smaller file size** compared to JPEG
- **Better compression** with same visual quality
- **Supports transparency** (like PNG)
- **Widely supported** by modern browsers

### Conversion Tools

#### Online Tools (Easy)
1. **Squoosh** (https://squoosh.app/)
   - Drag and drop
   - Compare before/after
   - Adjust quality in real-time

2. **CloudConvert** (https://cloudconvert.com/jpg-to-webp)
   - Batch conversion
   - Multiple format support

#### Command Line (Advanced)

**Using cwebp (Google's tool):**
```bash
# Install (macOS)
brew install webp

# Install (Windows - download from Google)
# https://developers.google.com/speed/webp/download

# Convert single image
cwebp input.jpg -q 80 -o output.webp

# Batch convert all JPEGs in folder
for file in *.jpg; do cwebp "$file" -q 80 -o "${file%.jpg}.webp"; done
```

**Quality Settings:**
- **q 75:** Good quality, smaller size (recommended for most images)
- **q 80:** Better quality, moderate size (recommended for hero images)
- **q 85:** High quality, larger size (use for important showcase images)
- **q 90:** Very high quality (use sparingly)

### Implementation with Fallback

```tsx
// Option 1: <picture> element with fallback
<picture>
  <source srcSet="/images/lawn.webp" type="image/webp" />
  <img
    src="/images/lawn.jpg"
    alt="Professional lawn service in Louisville KY"
    loading="lazy"
    width="800"
    height="600"
  />
</picture>

// Option 2: React component (recommended)
<OptimizedImage
  src="/images/lawn"
  alt="Professional lawn service in Louisville KY"
  width={800}
  height={600}
  loading="lazy"
/>
```

### Creating an OptimizedImage Component

```tsx
// components/OptimizedImage.tsx
import React from 'react';

interface OptimizedImageProps {
  src: string; // path without extension
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className = '',
}) => {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img
        src={`${src}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
      />
    </picture>
  );
};

// Usage:
<OptimizedImage
  src="/images/lawn"
  alt="Professional lawn service in Louisville KY"
  width={800}
  height={600}
  loading="lazy"
  className="rounded-lg"
/>
```

---

## Performance Metrics

### Target Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Largest Contentful Paint (LCP) | <2.5s | TBD | 🟡 |
| First Input Delay (FID) | <100ms | TBD | 🟡 |
| Cumulative Layout Shift (CLS) | <0.1 | TBD | 🟡 |
| Total Image Size (Homepage) | <1MB | TBD | 🟡 |
| Lighthouse Performance Score | >90 | TBD | 🟡 |

### How to Measure

#### Google Lighthouse (Chrome DevTools)
```
1. Open Chrome DevTools (F12)
2. Click "Lighthouse" tab
3. Select "Performance"
4. Click "Generate report"
5. Review image-specific issues
```

#### PageSpeed Insights
```
1. Go to https://pagespeedinsights.google.com/
2. Enter your URL
3. Click "Analyze"
4. Review "Opportunities" section for image optimization
```

#### Key Metrics to Monitor

**Largest Contentful Paint (LCP):**
- Measures loading performance
- Should be <2.5 seconds
- Hero images directly impact this

**Cumulative Layout Shift (CLS):**
- Measures visual stability
- Should be <0.1
- Fixed by adding width/height attributes

**Total Blocking Time (TBT):**
- Measures interactivity
- Large images can delay JavaScript execution

---

## Common Mistakes to Avoid

### 1. Missing Alt Text
```tsx
// ❌ BAD
<img src="lawn.jpg" />
<img src="lawn.jpg" alt="" />

// ✅ GOOD
<img
  src="lawn.jpg"
  alt="Professional lawn mowing service in Louisville KY"
/>
```

### 2. Generic Alt Text
```tsx
// ❌ BAD
<img alt="lawn" />
<img alt="image" />
<img alt="photo of lawn care" />

// ✅ GOOD
<img alt="Residential lawn mowing with striping pattern in Louisville Kentucky" />
```

### 3. Keyword Stuffing
```tsx
// ❌ BAD (over-optimization)
<img alt="Louisville lawn care Louisville Kentucky lawn mowing Louisville KY Aaron's Lawn Care Louisville" />

// ✅ GOOD (natural language)
<img alt="Professional lawn mowing service in Louisville Kentucky by Aaron's Lawn Care" />
```

### 4. Missing Width/Height
```tsx
// ❌ BAD (causes layout shift)
<img src="lawn.jpg" alt="Lawn service" />

// ✅ GOOD (prevents layout shift)
<img
  src="lawn.jpg"
  alt="Lawn service"
  width="800"
  height="600"
/>
```

### 5. Not Using Lazy Loading
```tsx
// ❌ BAD (loads all images immediately)
<img src="gallery-1.jpg" alt="Gallery image 1" />
<img src="gallery-2.jpg" alt="Gallery image 2" />
<img src="gallery-3.jpg" alt="Gallery image 3" />

// ✅ GOOD (loads images as user scrolls)
<img src="gallery-1.jpg" alt="..." loading="lazy" width="800" height="600" />
<img src="gallery-2.jpg" alt="..." loading="lazy" width="800" height="600" />
<img src="gallery-3.jpg" alt="..." loading="lazy" width="800" height="600" />
```

### 6. Oversized Images
```tsx
// ❌ BAD (using 5MB original photo)
<img src="lawn-original.jpg" width="800" height="600" />

// ✅ GOOD (optimized and resized)
<img src="lawn-800x600.webp" width="800" height="600" />
```

### 7. Wrong Loading Priority
```tsx
// ❌ BAD (hero image lazy loaded)
<section className="hero">
  <img src="hero.jpg" alt="..." loading="lazy" />
</section>

// ✅ GOOD (hero image eager loaded)
<section className="hero">
  <img src="hero.jpg" alt="..." loading="eager" width="1920" height="1080" />
</section>
```

---

## Implementation Checklist

### Pre-Upload Checklist

- [ ] Image is properly sized (not oversized)
- [ ] Image is optimized (compressed)
- [ ] WebP version created (if possible)
- [ ] File name is descriptive (lawn-mowing-louisville.jpg, not IMG_1234.jpg)
- [ ] Image is high quality but optimized for web

### Code Implementation Checklist

- [ ] Alt text is descriptive and includes location keywords
- [ ] Alt text follows the formula: `[Service] + [Location] + [Business Name]`
- [ ] `loading` attribute is set appropriately (`lazy` or `eager`)
- [ ] `width` and `height` attributes are included
- [ ] Aspect ratio is maintained in CSS
- [ ] File size is optimized (<300KB for hero, <150KB for gallery)
- [ ] Image format is appropriate (WebP preferred, JPEG/PNG fallback)

### Testing Checklist

- [ ] Image loads correctly on desktop
- [ ] Image loads correctly on mobile
- [ ] Alt text displays when image fails to load
- [ ] No layout shift when image loads (CLS check)
- [ ] Lazy loading works (images load as you scroll)
- [ ] PageSpeed Insights score improved
- [ ] Lighthouse Performance score >90

### SEO Checklist

- [ ] Alt text is unique for each image
- [ ] Alt text includes primary keyword (Louisville, lawn care, etc.)
- [ ] Alt text is natural and readable
- [ ] File name includes keywords (if applicable)
- [ ] Image sitemap created (for large galleries)
- [ ] Structured data includes image URLs (where applicable)

---

## Page-Specific Implementation Status

### ✅ Completed

- **Gallery Component** (`src/components/home/Gallery.tsx`)
  - 4 images optimized
  - All have SEO alt text
  - Lazy loading enabled
  - Width/height attributes added

- **Gallery Page** (`src/pages/GalleryPage.tsx`)
  - 12 images optimized (6 before/after pairs)
  - All have descriptive, location-based alt text
  - Lazy loading for gallery images
  - Eager loading for lightbox
  - Width/height attributes added

### 🟡 To Be Added (Future)

- **Hero Section** (HomePage.tsx)
  - Currently no images (text-only hero)
  - Consider adding hero image with `loading="eager"`

- **Service Pages**
  - Add service-specific images
  - Use lazy loading
  - Follow alt text formula

- **About Page**
  - Add team/equipment photos
  - Use lazy loading
  - Include location keywords

---

## Quick Reference

### Alt Text Formula
```
[Specific Service] in [Location] by Aaron's Lawn Care
```

### Image Tag Template
```tsx
<img
  src="/images/service.jpg"
  alt="Professional [service] in Louisville Kentucky by Aaron's Lawn Care"
  loading="lazy"
  width="800"
  height="600"
  className="..."
/>
```

### Performance Budget
- **Hero images:** <300KB
- **Gallery images:** <150KB
- **Service cards:** <100KB
- **Avatars/icons:** <50KB
- **Total page weight:** <1MB (images only)

---

## Additional Resources

### Tools
- **Squoosh:** https://squoosh.app/ (image compression)
- **TinyPNG:** https://tinypng.com/ (PNG/JPEG optimization)
- **PageSpeed Insights:** https://pagespeedinsights.google.com/
- **WebP Converter:** https://cloudconvert.com/jpg-to-webp

### Documentation
- **Google Image SEO:** https://developers.google.com/search/docs/appearance/google-images
- **Web.dev Lazy Loading:** https://web.dev/lazy-loading-images/
- **MDN Image Element:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img

### Testing
- **Google Lighthouse:** Built into Chrome DevTools
- **GTmetrix:** https://gtmetrix.com/
- **WebPageTest:** https://www.webpagetest.org/

---

## Maintenance Schedule

**Weekly:**
- Review new images added to website
- Verify alt text quality
- Check for oversized images

**Monthly:**
- Run PageSpeed Insights on all pages
- Review Lighthouse scores
- Identify optimization opportunities

**Quarterly:**
- Audit all images for SEO
- Convert remaining JPEGs to WebP
- Update alt text with new keywords (if needed)

---

**Document Version:** 1.0
**Last Updated:** 2026-01-12
**Next Review:** 2026-02-12
**Maintained By:** Web Development Team
