/**
 * Lazy Loading Utilities
 *
 * Utilities for optimizing image and component loading performance
 */

import { useEffect, useRef, useState } from 'react';

/**
 * Hook for lazy loading images using Intersection Observer
 *
 * @param options - Intersection Observer options
 * @returns Object with ref and isIntersecting state
 *
 * @example
 * const { ref, isIntersecting } = useLazyLoad();
 *
 * return (
 *   <div ref={ref}>
 *     {isIntersecting && <img src="large-image.jpg" alt="..." />}
 *   </div>
 * );
 */
export function useLazyLoad<T extends HTMLElement>(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isIntersecting };
}

/**
 * Props for LazyImage component
 */
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  threshold?: number;
  rootMargin?: string;
}

/**
 * LazyImage component with built-in lazy loading
 *
 * @example
 * <LazyImage
 *   src="/images/large-image.jpg"
 *   alt="Description"
 *   width={800}
 *   height={600}
 *   className="rounded-lg"
 * />
 */
export function LazyImage({
  src,
  alt,
  placeholderSrc,
  threshold = 0.1,
  rootMargin = '50px',
  className = '',
  ...props
}: LazyImageProps) {
  const { ref, isIntersecting } = useLazyLoad<HTMLImageElement>({
    threshold,
    rootMargin,
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc || '');

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      setCurrentSrc(src);
    }
  }, [isIntersecting, isLoaded, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      ref={ref}
      src={currentSrc}
      alt={alt}
      loading="lazy"
      onLoad={handleLoad}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      {...props}
    />
  );
}

/**
 * Preload critical images
 *
 * @param urls - Array of image URLs to preload
 *
 * @example
 * preloadImages(['/hero-bg.jpg', '/logo.svg']);
 */
export function preloadImages(urls: string[]): Promise<void[]> {
  return Promise.all(
    urls.map((url) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = url;
      });
    })
  );
}

/**
 * Generate srcset for responsive images
 *
 * @param basePath - Base path of image (without size suffix)
 * @param sizes - Array of sizes to generate
 * @param extension - Image extension (default: 'jpg')
 * @returns srcset string
 *
 * @example
 * const srcset = generateSrcSet('/images/hero', [400, 800, 1200], 'webp');
 * // Returns: "/images/hero-400w.webp 400w, /images/hero-800w.webp 800w, /images/hero-1200w.webp 1200w"
 */
export function generateSrcSet(
  basePath: string,
  sizes: number[],
  extension: string = 'jpg'
): string {
  return sizes
    .map((size) => `${basePath}-${size}w.${extension} ${size}w`)
    .join(', ');
}

/**
 * Image loading priority types
 */
export type ImagePriority = 'high' | 'low' | 'auto';

/**
 * Get optimal loading strategy for image based on position
 *
 * @param isAboveFold - Whether image is above the fold
 * @returns Object with loading and fetchpriority attributes
 *
 * @example
 * const { loading, fetchpriority } = getImageLoadingStrategy(true);
 * <img src="..." loading={loading} fetchpriority={fetchpriority} />
 */
export function getImageLoadingStrategy(isAboveFold: boolean) {
  return {
    loading: isAboveFold ? ('eager' as const) : ('lazy' as const),
    fetchpriority: isAboveFold ? ('high' as const) : ('low' as const),
  };
}

/**
 * Calculate optimal image dimensions to prevent layout shift
 *
 * @param naturalWidth - Natural width of image
 * @param naturalHeight - Natural height of image
 * @param maxWidth - Maximum display width
 * @returns Object with width and height
 */
export function calculateImageDimensions(
  naturalWidth: number,
  naturalHeight: number,
  maxWidth: number
): { width: number; height: number } {
  const aspectRatio = naturalHeight / naturalWidth;

  if (naturalWidth <= maxWidth) {
    return { width: naturalWidth, height: naturalHeight };
  }

  return {
    width: maxWidth,
    height: Math.round(maxWidth * aspectRatio),
  };
}

/**
 * Create blur placeholder data URL
 *
 * @param width - Width of placeholder
 * @param height - Height of placeholder
 * @param color - Background color (default: '#f3f4f6')
 * @returns Data URL for blur placeholder
 *
 * @example
 * <img src="..." placeholder={createBlurPlaceholder(800, 600)} />
 */
export function createBlurPlaceholder(
  width: number,
  height: number,
  color: string = '#f3f4f6'
): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <rect width="${width}" height="${height}" fill="${color}"/>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export default {
  useLazyLoad,
  LazyImage,
  preloadImages,
  generateSrcSet,
  getImageLoadingStrategy,
  calculateImageDimensions,
  createBlurPlaceholder,
};
