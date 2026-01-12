/**
 * Skip to Content Link
 * Allows keyboard users to skip navigation and jump directly to main content
 * WCAG 2.1 Level A requirement for keyboard accessibility
 */

export const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        fixed top-4 left-4 z-[9999]
        bg-primary-600 text-white
        px-6 py-3 rounded-lg
        font-bold text-lg
        focus:outline-none focus:ring-4 focus:ring-primary-300
        transform transition-transform
        focus:translate-y-0 -translate-y-full
      "
    >
      Skip to main content
    </a>
  );
};
