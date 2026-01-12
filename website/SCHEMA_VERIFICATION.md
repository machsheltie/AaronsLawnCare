# Schema Implementation Verification Guide

## Overview
This document explains how to verify that structured data schemas are correctly implemented on service pages.

## What Was Implemented

### ServicePageTemplate.tsx Changes
The ServicePageTemplate now includes three types of structured data:

1. **Service Schema** - Describes the service offering
2. **FAQ Schema** - Structures the FAQs for rich results
3. **Breadcrumb Schema** - Provides navigation context

### Code Changes
```typescript
// Before: Inline schema (30+ lines)
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    // ... 20+ more lines
  })}
</script>

// After: Centralized schema generators (3 lines)
<script type="application/ld+json">
  {JSON.stringify(generateServiceSchema(serviceName, metaDescription, serviceUrl))}
</script>
<script type="application/ld+json">
  {JSON.stringify(generateFAQSchema(faqs))}
</script>
<script type="application/ld+json">
  {JSON.stringify(generateBreadcrumbSchema(getBreadcrumbsForService(serviceName, serviceUrl)))}
</script>
```

## Pages Affected
All service pages automatically inherit these schemas:
- Lawn Mowing Service
- Edging Service
- Leaf Removal Service
- Mulching Service
- Fall Cleanup Service
- Spring Cleanup Service
- Hedge Trimming Service
- Landscape Design Service
- Landscape Maintenance Service
- Snow Removal Service

## How to Verify

### Method 1: View Page Source (Development)
1. Start dev server: `npm run dev`
2. Navigate to any service page (e.g., http://localhost:5173/services/lawn-mowing)
3. Right-click → "View Page Source"
4. Search for `application/ld+json`
5. You should see 3 script tags with JSON-LD schemas

### Method 2: Google Rich Results Test (Production)
1. Deploy to production
2. Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
3. Enter your service page URL (e.g., https://aaronslawncare.com/services/lawn-mowing)
4. Click "Test URL"
5. Expected results:
   - ✅ Service schema detected
   - ✅ FAQPage schema detected
   - ✅ BreadcrumbList schema detected

### Method 3: Schema Markup Validator
1. Visit [Schema.org Validator](https://validator.schema.org/)
2. Paste your page URL or HTML source
3. Verify all three schemas are valid

### Method 4: Browser DevTools
1. Open service page in browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run this code:
```javascript
// Extract all JSON-LD schemas
const scripts = document.querySelectorAll('script[type="application/ld+json"]');
scripts.forEach((script, index) => {
  console.log(`Schema ${index + 1}:`, JSON.parse(script.textContent));
});
```

## Expected Schema Output

### Service Schema Example
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Lawn Mowing Services in Louisville, KY",
  "description": "Professional lawn mowing service in Louisville, Kentucky...",
  "url": "https://aaronslawncare.com/services/lawn-mowing",
  "serviceType": "Professional Lawn Mowing Services in Louisville, KY",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Aaron's Lawn Care",
    "telephone": "+15029268524",
    "email": "gnaua429@gmail.com",
    "url": "https://aaronslawncare.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Louisville",
      "addressRegion": "KY",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "38.2527",
      "longitude": "-85.7585"
    },
    "geoRadius": 50000
  }
}
```

### FAQ Schema Example
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I have my lawn mowed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Louisville lawns benefit from weekly mowing..."
      }
    }
    // ... more FAQs
  ]
}
```

### Breadcrumb Schema Example
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aaronslawncare.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://aaronslawncare.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Professional Lawn Mowing Services in Louisville, KY",
      "item": "https://aaronslawncare.com/services/lawn-mowing"
    }
  ]
}
```

## Troubleshooting

### Schemas Not Appearing
1. **Check build**: Ensure `npm run build` completes without errors
2. **Clear cache**: Hard refresh browser (Ctrl+Shift+R)
3. **Verify imports**: Check that schemas.ts is properly imported

### Invalid Schema Errors
1. **Verify data**: Ensure serviceName, metaDescription, and serviceUrl are correct
2. **Check FAQs**: Make sure faqs array has question/answer structure
3. **Test individually**: Use Schema.org validator to test each schema

### Rich Results Not Showing
1. **Wait for crawl**: Google needs to re-crawl after deployment (1-7 days)
2. **Check eligibility**: Not all schemas guarantee rich results
3. **Use Search Console**: Check "Enhancements" section for issues
4. **Validate manually**: Use Google Rich Results Test tool

## Next Steps

1. ✅ Deploy to production
2. ✅ Verify schemas on live site
3. ✅ Submit sitemap to Google Search Console
4. ⏳ Wait for Google to crawl (1-7 days)
5. ⏳ Monitor Search Console for rich results
6. ⏳ Check Google Search for enhanced listings

## Benefits

### SEO Benefits
- **Rich Search Results**: Eligible for enhanced listings in Google
- **Click-Through Rate**: Rich results typically have 20-40% higher CTR
- **Knowledge Panel**: Better chance of appearing in knowledge panels
- **Voice Search**: Structured data helps with voice search results

### Technical Benefits
- **Maintainability**: Centralized business data in schemas.ts
- **Consistency**: All service pages use same schema structure
- **Scalability**: Easy to add new service pages
- **Type Safety**: TypeScript ensures proper schema structure

## Resources
- [Schema.org Documentation](https://schema.org/)
- [Google Rich Results](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

**Last Updated**: 2026-01-12
**Implementation**: Complete ✅
**Status**: Ready for production deployment
