/**
 * Web Vitals Monitoring
 *
 * Track and report Core Web Vitals performance metrics
 */

/**
 * Metric types from web-vitals library
 */
export interface Metric {
  name: 'CLS' | 'FCP' | 'FID' | 'LCP' | 'TTFB' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: 'navigate' | 'reload' | 'back-forward' | 'prerender';
}

/**
 * Performance thresholds for Core Web Vitals
 */
export const WEB_VITALS_THRESHOLDS = {
  // Largest Contentful Paint (LCP)
  LCP: {
    good: 2500,
    needsImprovement: 4000,
  },
  // First Input Delay (FID)
  FID: {
    good: 100,
    needsImprovement: 300,
  },
  // Cumulative Layout Shift (CLS)
  CLS: {
    good: 0.1,
    needsImprovement: 0.25,
  },
  // First Contentful Paint (FCP)
  FCP: {
    good: 1800,
    needsImprovement: 3000,
  },
  // Time to First Byte (TTFB)
  TTFB: {
    good: 800,
    needsImprovement: 1800,
  },
  // Interaction to Next Paint (INP)
  INP: {
    good: 200,
    needsImprovement: 500,
  },
} as const;

/**
 * Get rating for a metric value
 */
export function getRating(
  name: Metric['name'],
  value: number
): Metric['rating'] {
  const thresholds = WEB_VITALS_THRESHOLDS[name];
  if (!thresholds) return 'good';

  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.needsImprovement) return 'needs-improvement';
  return 'poor';
}

/**
 * Report Web Vitals to analytics
 */
export function reportWebVitals(metric: Metric): void {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log('[Web Vitals]', {
      name: metric.name,
      value: Math.round(metric.value),
      rating: metric.rating,
      navigationType: metric.navigationType,
    });
  }

  // Send to analytics service in production
  if (import.meta.env.PROD) {
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.value),
        metric_rating: metric.rating,
        non_interaction: true,
      });
    }

    // Example: Send to custom analytics endpoint
    // fetch('/api/analytics/vitals', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(metric),
    // });
  }
}

/**
 * Initialize Web Vitals monitoring
 *
 * Dynamically imports web-vitals library and reports metrics
 */
export async function initWebVitals(): Promise<void> {
  try {
    const { onCLS, onFCP, onFID, onLCP, onTTFB, onINP } = await import(
      'web-vitals'
    );

    onCLS(reportWebVitals);
    onFCP(reportWebVitals);
    onFID(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
    onINP(reportWebVitals);
  } catch (error) {
    console.error('Failed to load web-vitals:', error);
  }
}

/**
 * Performance marks for custom metrics
 */
export const PerformanceMarks = {
  APP_INIT: 'app-init',
  ROUTE_CHANGE: 'route-change',
  API_CALL: 'api-call',
  RENDER_COMPLETE: 'render-complete',
} as const;

/**
 * Mark performance timing
 */
export function markPerformance(name: string): void {
  if ('performance' in window && 'mark' in performance) {
    performance.mark(name);
  }
}

/**
 * Measure performance between marks
 */
export function measurePerformance(
  name: string,
  startMark: string,
  endMark: string
): number | null {
  if ('performance' in window && 'measure' in performance) {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      return measure ? measure.duration : null;
    } catch (error) {
      console.error('Performance measurement failed:', error);
      return null;
    }
  }
  return null;
}

/**
 * Get all performance entries
 */
export function getPerformanceEntries(): PerformanceEntryList {
  if ('performance' in window && 'getEntries' in performance) {
    return performance.getEntries();
  }
  return [];
}

/**
 * Clear performance marks and measures
 */
export function clearPerformance(): void {
  if ('performance' in window) {
    if ('clearMarks' in performance) {
      performance.clearMarks();
    }
    if ('clearMeasures' in performance) {
      performance.clearMeasures();
    }
  }
}

/**
 * Get navigation timing
 */
export function getNavigationTiming(): PerformanceNavigationTiming | null {
  if ('performance' in window && 'getEntriesByType' in performance) {
    const [entry] = performance.getEntriesByType(
      'navigation'
    ) as PerformanceNavigationTiming[];
    return entry || null;
  }
  return null;
}

/**
 * Calculate page load metrics
 */
export function getPageLoadMetrics() {
  const timing = getNavigationTiming();
  if (!timing) return null;

  return {
    // DNS lookup time
    dns: timing.domainLookupEnd - timing.domainLookupStart,
    // TCP connection time
    tcp: timing.connectEnd - timing.connectStart,
    // Time to first byte
    ttfb: timing.responseStart - timing.requestStart,
    // Response download time
    download: timing.responseEnd - timing.responseStart,
    // DOM processing time
    domProcessing: timing.domComplete - timing.domInteractive,
    // Total load time
    total: timing.loadEventEnd - timing.fetchStart,
  };
}

/**
 * Log performance summary
 */
export function logPerformanceSummary(): void {
  const metrics = getPageLoadMetrics();
  if (!metrics) {
    console.log('[Performance] Metrics not available');
    return;
  }

  console.group('[Performance Summary]');
  console.log('DNS Lookup:', `${Math.round(metrics.dns)}ms`);
  console.log('TCP Connection:', `${Math.round(metrics.tcp)}ms`);
  console.log('Time to First Byte:', `${Math.round(metrics.ttfb)}ms`);
  console.log('Response Download:', `${Math.round(metrics.download)}ms`);
  console.log('DOM Processing:', `${Math.round(metrics.domProcessing)}ms`);
  console.log('Total Load Time:', `${Math.round(metrics.total)}ms`);
  console.groupEnd();
}

/**
 * Monitor long tasks (tasks taking >50ms)
 */
export function monitorLongTasks(
  callback: (entries: PerformanceEntryList) => void
): void {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      console.error('Long task monitoring not supported:', error);
    }
  }
}

/**
 * Global gtag interface for TypeScript
 */
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventParams: Record<string, unknown>
    ) => void;
  }
}

export default {
  reportWebVitals,
  initWebVitals,
  markPerformance,
  measurePerformance,
  getPerformanceEntries,
  clearPerformance,
  getNavigationTiming,
  getPageLoadMetrics,
  logPerformanceSummary,
  monitorLongTasks,
  PerformanceMarks,
  WEB_VITALS_THRESHOLDS,
};
