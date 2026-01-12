import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  separator?: string;
  suffix?: string;
  prefix?: string;
  startOnView?: boolean;
}

/**
 * Custom hook for animated number counting
 * Counts from start to end value with easing animation
 *
 * @param end - Target number to count to
 * @param duration - Animation duration in milliseconds (default: 2000)
 * @param decimals - Number of decimal places (default: 0)
 * @param separator - Thousands separator (default: ',')
 * @param suffix - Text after number (e.g., '+', '%')
 * @param prefix - Text before number (e.g., '$')
 * @param startOnView - Start counting when element is in view (default: true)
 */
export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  decimals = 0,
  separator = ',',
  suffix = '',
  prefix = '',
  startOnView = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const elementRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  // Easing function for smooth animation
  const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  // Format number with separators and decimal places
  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split('.');

    // Add thousands separator
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    return prefix + parts.join('.') + suffix;
  };

  // Animation loop
  useEffect(() => {
    if (!hasStarted) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentCount = start + (end - start) * easedProgress;

      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [hasStarted, start, end, duration]);

  // Intersection Observer for startOnView
  useEffect(() => {
    if (!startOnView || hasStarted) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [startOnView, hasStarted]);

  return {
    value: formatNumber(count),
    elementRef,
  };
}
