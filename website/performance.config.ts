/**
 * Performance Optimization Configuration
 *
 * This file contains performance optimization settings and best practices
 * for the Aaron's Lawn Care website.
 */

export const PerformanceConfig = {
  // Resource Hints
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ],
  dnsPrefetch: [
    'https://fonts.googleapis.com',
  ],

  // Font Loading Strategy
  fonts: {
    display: 'swap', // Use font-display: swap for all fonts
    families: [
      'Inter:wght@300;400;500;600;700',
      'Outfit:wght@400;500;600;700;800',
    ],
  },

  // Image Optimization
  images: {
    formats: ['webp', 'avif', 'jpg', 'png'],
    quality: {
      webp: 80,
      avif: 75,
      jpg: 80,
      png: 90,
    },
    lazyLoading: {
      enabled: true,
      threshold: '50px', // Load images 50px before they enter viewport
      rootMargin: '50px',
    },
  },

  // Code Splitting
  codeSplitting: {
    vendors: {
      react: ['react', 'react-dom', 'react-router-dom'],
      ui: ['framer-motion', 'lucide-react'],
      forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
    },
    chunkSizeLimit: 1000, // KB
  },

  // Build Optimization
  build: {
    target: 'es2015',
    minify: true,
    removeConsole: true,
    removeDebugger: true,
    cssCodeSplit: true,
    assetsInlineLimit: 10240, // 10KB - inline assets smaller than this
  },

  // Performance Budgets (Core Web Vitals)
  budgets: {
    // Largest Contentful Paint
    lcp: {
      target: 2500, // ms
      warning: 2000, // ms
    },
    // First Input Delay
    fid: {
      target: 100, // ms
      warning: 50, // ms
    },
    // Cumulative Layout Shift
    cls: {
      target: 0.1,
      warning: 0.05,
    },
    // First Contentful Paint
    fcp: {
      target: 1800, // ms
      warning: 1500, // ms
    },
    // Time to Interactive
    tti: {
      target: 3800, // ms
      warning: 3000, // ms
    },
    // Total Blocking Time
    tbt: {
      target: 300, // ms
      warning: 200, // ms
    },
    // Bundle Size
    bundleSize: {
      total: 500, // KB
      js: 300, // KB
      css: 100, // KB
      warning: 0.8, // Warn at 80% of target
    },
  },

  // Caching Strategy
  caching: {
    static: {
      // Cache static assets for 1 year
      maxAge: 31536000,
      immutable: true,
    },
    dynamic: {
      // Cache dynamic content for 1 hour
      maxAge: 3600,
      staleWhileRevalidate: 86400, // 1 day
    },
    api: {
      // Cache API responses for 5 minutes
      maxAge: 300,
      staleWhileRevalidate: 600, // 10 minutes
    },
  },

  // Compression
  compression: {
    enabled: true,
    algorithms: ['brotli', 'gzip'],
    level: 9, // Maximum compression
  },

  // Prefetch/Preload Strategy
  resourceHints: {
    // Preload critical resources
    preload: [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
      { href: '/fonts/outfit.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
    ],
    // Prefetch next page resources
    prefetch: [
      '/services',
      '/contact',
      '/gallery',
    ],
  },

  // Runtime Performance
  runtime: {
    // Debounce/Throttle settings
    debounce: {
      scroll: 100, // ms
      resize: 150, // ms
      input: 300, // ms
    },
    // Intersection Observer settings
    observer: {
      rootMargin: '50px',
      threshold: 0.1,
    },
    // Animation frame rate
    animation: {
      targetFPS: 60,
      useRAF: true, // Use requestAnimationFrame
    },
  },

  // Monitoring & Analytics
  monitoring: {
    enabled: true,
    reportWebVitals: true,
    errorTracking: true,
    performanceMarks: [
      'app-init',
      'route-change',
      'api-call',
      'render-complete',
    ],
  },
} as const;

export type PerformanceConfig = typeof PerformanceConfig;

/**
 * Performance Best Practices Checklist
 *
 * ✅ Resource Hints:
 *    - Preconnect to external domains (fonts, APIs)
 *    - DNS-prefetch for third-party resources
 *
 * ✅ Font Loading:
 *    - Use font-display: swap
 *    - Subset fonts to include only needed characters
 *    - Use woff2 format for better compression
 *
 * ✅ Image Optimization:
 *    - Use modern formats (WebP, AVIF)
 *    - Implement lazy loading for below-the-fold images
 *    - Add width/height attributes to prevent layout shift
 *    - Use responsive images with srcset
 *
 * ✅ Code Splitting:
 *    - Split vendor chunks (React, UI libraries, forms)
 *    - Route-based code splitting
 *    - Dynamic imports for heavy components
 *
 * ✅ Build Optimization:
 *    - Minify JS, CSS, HTML
 *    - Remove console.log in production
 *    - Tree-shaking to remove unused code
 *    - CSS code splitting
 *
 * ✅ Caching:
 *    - Long-term caching for static assets
 *    - Stale-while-revalidate for dynamic content
 *    - Service Worker for offline support (optional)
 *
 * ✅ Compression:
 *    - Enable Brotli/Gzip compression
 *    - Compress all text-based assets
 *
 * ✅ Runtime Performance:
 *    - Debounce scroll/resize handlers
 *    - Use Intersection Observer for lazy loading
 *    - Virtualize long lists
 *    - Memoize expensive computations
 *
 * ✅ Monitoring:
 *    - Track Core Web Vitals (LCP, FID, CLS)
 *    - Monitor bundle size
 *    - Set performance budgets
 *    - Use Lighthouse CI in build pipeline
 */

export default PerformanceConfig;
