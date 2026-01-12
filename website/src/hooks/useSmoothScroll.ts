import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook for smooth scrolling to sections based on hash in URL
 * Supports both in-page hash navigation and cross-page hash navigation
 */
export const useSmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle hash navigation
    if (location.hash) {
      // Small delay to ensure DOM is fully loaded
      const timeout = setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);

        if (element) {
          const headerOffset = 80; // Account for sticky header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [location]);

  // Scroll to section by ID
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection };
};
