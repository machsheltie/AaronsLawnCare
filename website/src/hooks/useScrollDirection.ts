import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;

interface UseScrollDirectionOptions {
  threshold?: number;
  initialDirection?: ScrollDirection;
}

/**
 * Custom hook to detect scroll direction
 * Returns 'up' when scrolling up, 'down' when scrolling down
 *
 * @param threshold - Minimum scroll distance to trigger direction change (default: 10px)
 * @param initialDirection - Initial scroll direction (default: null)
 */
export function useScrollDirection({
  threshold = 10,
  initialDirection = null,
}: UseScrollDirectionOptions = {}): ScrollDirection {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(initialDirection);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      const newDirection = scrollY > lastScrollY ? 'down' : 'up';

      if (newDirection !== scrollDirection) {
        setScrollDirection(newDirection);
      }

      setLastScrollY(scrollY > 0 ? scrollY : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [lastScrollY, scrollDirection, threshold]);

  return scrollDirection;
}
