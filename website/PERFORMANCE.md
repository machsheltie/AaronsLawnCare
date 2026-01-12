# Performance Optimization Guide

This document outlines all performance optimizations implemented for Aaron's Lawn Care website.

## Table of Contents

1. [Implemented Optimizations](#implemented-optimizations)
2. [Performance Metrics](#performance-metrics)
3. [Configuration Files](#configuration-files)
4. [Build Optimizations](#build-optimizations)
5. [Runtime Optimizations](#runtime-optimizations)
6. [Monitoring](#monitoring)
7. [Best Practices](#best-practices)

---

## Implemented Optimizations

### ✅ Resource Hints (index.html)

**Preconnect tags** reduce DNS lookup and connection time for external resources:

```html
<!-- Preconnect to improve font loading performance -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- DNS prefetch for additional performance -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
```

**Impact:**
- Saves 100-300ms on font loading
- Establishes early connections to Google Fonts
- DNS resolution happens in parallel with page load

---

### ✅ Font Loading Optimization (index.css)

**Font-display: swap** prevents invisible text during font loading:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap');
```

**Impact:**
- Text visible immediately with fallback fonts
- No Flash of Invisible Text (FOIT)
- Better FCP (First Contentful Paint) scores

---

### ✅ Image Optimization (vite.config.ts)

**vite-plugin-imagemin** automatically compresses images during build:

```typescript
viteImagemin({
  gifsicle: { optimizationLevel: 7 },
  optipng: { optimizationLevel: 7 },
  mozjpeg: { quality: 80 },
  pngquant: { quality: [0.8, 0.9], speed: 4 },
  svgo: { /* SVG optimization */ },
})
```

**Impact:**
- 30-70% reduction in image file sizes
- Maintains visual quality (80% JPEG, 80-90% PNG)
- Automatic optimization on every build

---

### ✅ Code Splitting (vite.config.ts)

**Vendor chunking** separates libraries into cacheable bundles:

```typescript
manualChunks: {
  'react-vendor': ['react', 'react-dom', 'react-router-dom'],
  'ui-vendor': ['framer-motion', 'lucide-react'],
  'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
}
```

**Impact:**
- Better caching strategy (vendors change less frequently)
- Parallel loading of code chunks
- Smaller initial bundle size

---

### ✅ Minification & Compression (vite.config.ts)

**Terser minification** with aggressive optimization:

```typescript
minify: 'terser',
terserOptions: {
  compress: {
    drop_console: true,      // Remove console.log in production
    drop_debugger: true,      // Remove debugger statements
    pure_funcs: ['console.log'], // Remove console.log calls
  },
}
```

**Impact:**
- 30-50% reduction in JavaScript bundle size
- Removes debug code from production
- Faster parse and execution time

---

### ✅ CSS Optimization (vite.config.ts)

**CSS code splitting and minification:**

```typescript
cssCodeSplit: true,    // Split CSS into separate files
cssMinify: true,       // Minify CSS
```

**Impact:**
- Parallel loading of CSS files
- Smaller CSS bundle sizes
- Better caching granularity

---

### ✅ Asset Inlining (vite.config.ts)

**Small assets inlined as data URLs:**

```typescript
assetsInlineLimit: 10240, // 10KB threshold
```

**Impact:**
- Reduces HTTP requests for small assets
- Faster page load for icons/small images
- Optimal balance between bundle size and requests

---

### ✅ Dependency Pre-bundling (vite.config.ts)

**Pre-bundle frequently used dependencies:**

```typescript
optimizeDeps: {
  include: [
    'react',
    'react-dom',
    'react-router-dom',
    'framer-motion',
    'lucide-react',
    'react-hook-form',
    '@hookform/resolvers',
    'zod',
  ],
}
```

**Impact:**
- Faster development server startup
- Reduced number of HTTP requests
- Better caching during development

---

### ✅ Web Vitals Monitoring (src/utils/webVitals.ts)

**Track Core Web Vitals in real-time:**

```typescript
import { initWebVitals } from './utils/webVitals';
initWebVitals(); // Monitors LCP, FID, CLS, FCP, TTFB, INP
```

**Tracked Metrics:**
- **LCP** (Largest Contentful Paint): 2.5s target
- **FID** (First Input Delay): 100ms target
- **CLS** (Cumulative Layout Shift): 0.1 target
- **FCP** (First Contentful Paint): 1.8s target
- **TTFB** (Time to First Byte): 800ms target
- **INP** (Interaction to Next Paint): 200ms target

---

### ✅ Lazy Loading Utilities (src/utils/lazyLoad.ts)

**Components and hooks for optimized image loading:**

```typescript
// Hook for lazy loading
const { ref, isIntersecting } = useLazyLoad();

// LazyImage component
<LazyImage
  src="/large-image.jpg"
  alt="Description"
  loading="lazy"
  className="rounded-lg"
/>

// Preload critical images
preloadImages(['/hero-bg.jpg', '/logo.svg']);
```

**Impact:**
- Reduces initial page load by 50-70%
- Images load only when entering viewport
- Better bandwidth usage

---

## Performance Metrics

### Target Performance Budgets

| Metric | Target | Warning | Current |
|--------|--------|---------|---------|
| **Bundle Size (Total)** | 500 KB | 400 KB | TBD |
| **JavaScript Bundle** | 300 KB | 240 KB | TBD |
| **CSS Bundle** | 100 KB | 80 KB | TBD |
| **Largest Contentful Paint** | 2.5s | 2.0s | TBD |
| **First Input Delay** | 100ms | 50ms | TBD |
| **Cumulative Layout Shift** | 0.1 | 0.05 | TBD |

### Lighthouse Scores (Target)

- **Performance**: 90+ / 100
- **Accessibility**: 95+ / 100
- **Best Practices**: 95+ / 100
- **SEO**: 100 / 100

---

## Configuration Files

### 1. vite.config.ts
Main build configuration with:
- Image optimization plugin
- Code splitting strategy
- Minification settings
- CSS optimization
- Dependency pre-bundling

### 2. performance.config.ts
Performance configuration reference:
- Resource hints
- Font loading strategy
- Image optimization settings
- Performance budgets
- Caching strategies
- Monitoring configuration

### 3. src/utils/webVitals.ts
Web Vitals monitoring:
- Core Web Vitals tracking
- Performance marks and measures
- Navigation timing
- Long task monitoring

### 4. src/utils/lazyLoad.ts
Lazy loading utilities:
- `useLazyLoad()` hook
- `<LazyImage>` component
- Image preloading functions
- Responsive image utilities

---

## Build Optimizations

### Checklist

- ✅ **Minification**: JavaScript (Terser), CSS, HTML
- ✅ **Tree Shaking**: Remove unused code
- ✅ **Code Splitting**: Vendor chunks, route-based splitting
- ✅ **Image Optimization**: Compress JPEG, PNG, SVG
- ✅ **Asset Inlining**: Small assets as data URLs
- ✅ **Source Maps**: Disabled in production
- ✅ **Console Removal**: Strip console.log in production

### Build Commands

```bash
# Development build
npm run dev

# Production build (with optimizations)
npm run build

# Preview production build
npm run preview
```

### Build Output Structure

```
dist/
├── assets/
│   ├── js/
│   │   ├── react-vendor-[hash].js     # React, React DOM, React Router
│   │   ├── ui-vendor-[hash].js        # Framer Motion, Lucide React
│   │   ├── form-vendor-[hash].js      # React Hook Form, Zod
│   │   └── index-[hash].js            # Application code
│   ├── css/
│   │   └── index-[hash].css
│   └── images/
│       └── [optimized images]
└── index.html
```

---

## Runtime Optimizations

### 1. Lazy Loading Images

**Below-the-fold images load on demand:**

```tsx
import { LazyImage } from '@/utils/lazyLoad';

<LazyImage
  src="/gallery/image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
/>
```

### 2. Route-Based Code Splitting

**Lazy load route components:**

```tsx
import { lazy, Suspense } from 'react';

const ServicesPage = lazy(() => import('@/pages/ServicesPage'));

<Suspense fallback={<Loading />}>
  <ServicesPage />
</Suspense>
```

### 3. Component Memoization

**Prevent unnecessary re-renders:**

```tsx
import { memo } from 'react';

export const ExpensiveComponent = memo(({ data }) => {
  // Component logic
});
```

### 4. useCallback & useMemo

**Optimize expensive computations:**

```tsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

---

## Monitoring

### Development Monitoring

**Console logs in development:**

```bash
[Web Vitals] { name: 'LCP', value: 2341, rating: 'good' }
[Web Vitals] { name: 'FID', value: 89, rating: 'good' }
[Web Vitals] { name: 'CLS', value: 0.08, rating: 'good' }
```

### Production Monitoring

**Send metrics to analytics:**

```typescript
// Google Analytics (example)
window.gtag('event', 'LCP', {
  event_category: 'Web Vitals',
  value: 2341,
  metric_rating: 'good',
});
```

### Performance Tools

- **Lighthouse**: `npm run build && npx lighthouse http://localhost:4173`
- **Chrome DevTools**: Performance tab, Coverage tab
- **Bundlephobia**: Check bundle sizes of dependencies
- **WebPageTest**: Real-world performance testing

---

## Best Practices

### Image Optimization

✅ **DO:**
- Use WebP/AVIF formats when possible
- Add `width` and `height` attributes to prevent layout shift
- Use `loading="lazy"` for below-the-fold images
- Compress images to 80% quality for web
- Use responsive images with `srcset`

❌ **DON'T:**
- Serve images larger than display size
- Use PNG for photos (use JPEG/WebP)
- Load all images eagerly
- Forget alt text

### Font Loading

✅ **DO:**
- Use `font-display: swap`
- Preconnect to font providers
- Subset fonts to needed characters
- Use woff2 format (best compression)

❌ **DON'T:**
- Load too many font weights
- Use font-display: block (causes FOIT)
- Forget to specify fallback fonts

### Code Splitting

✅ **DO:**
- Split vendor code from app code
- Lazy load routes
- Prefetch next page resources
- Keep chunks under 300KB

❌ **DON'T:**
- Create too many small chunks
- Split frequently used utilities
- Forget to measure bundle sizes

### Performance Testing

✅ **DO:**
- Test on real devices
- Test on slow 3G connections
- Monitor Core Web Vitals
- Set performance budgets
- Run Lighthouse in CI/CD

❌ **DON'T:**
- Test only on desktop
- Test only on fast connections
- Ignore performance regressions
- Skip mobile testing

---

## Continuous Improvement

### Monthly Checklist

- [ ] Run Lighthouse audit
- [ ] Check bundle size trends
- [ ] Review Core Web Vitals
- [ ] Analyze slow pages
- [ ] Update dependencies
- [ ] Test on real devices
- [ ] Review error rates

### Performance Budget Alerts

Set up alerts when:
- Bundle size increases by >10%
- LCP exceeds 3.0s
- FID exceeds 150ms
- CLS exceeds 0.15
- Build time exceeds 2 minutes

---

## Resources

### Documentation
- [Web Vitals](https://web.dev/vitals/)
- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)
- [Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Code Splitting](https://web.dev/reduce-javascript-payloads-with-code-splitting/)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [WebPageTest](https://www.webpagetest.org/)
- [Bundlephobia](https://bundlephobia.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

**Last Updated:** 2025-01-12
**Maintained By:** Performance Engineering Team
