/**
 * SEO Head Component
 * Reusable component for managing all page meta tags with Helmet
 * Simplifies adding SEO tags to any page in the application
 *
 * Usage:
 * ```tsx
 * <SEOHead
 *   title="Service Title"
 *   description="Service description"
 *   canonical="https://aaronslawncare502.com/services/example"
 *   ogImage="https://aaronslawncare502.com/images/og.jpg"
 * />
 * ```
 */

import { Helmet } from "react-helmet-async";
import type { SEOConfig } from "../../utils/seo-meta";
import { generateCompleteSEOTags, BASE_URL, IMAGE_PATH } from "../../utils/seo-meta";

interface SEOHeadProps extends Partial<SEOConfig> {
  /** Optional structured data (JSON-LD) */
  schemaMarkup?: Record<string, any>;
  /** Optional children for additional Helmet content */
  children?: React.ReactNode;
}

/**
 * SEO Head Component
 *
 * Renders all necessary SEO meta tags for optimal search engine visibility
 * and social media sharing. Supports:
 * - Canonical URLs (duplicate content prevention)
 * - Robots directives (indexing control)
 * - Open Graph tags (Facebook, LinkedIn, Pinterest sharing)
 * - Twitter Card tags (Twitter/X sharing)
 * - Geo location tags (Local SEO)
 * - Article metadata (publishing dates, author)
 *
 * @param props Component props
 * @returns React element with Helmet meta tags
 */
export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogImageType,
  ogImageAlt,
  twitterImage,
  robots,
  geoRegion,
  geoPlacename,
  geoPosition,
  locale,
  ogType,
  publishedTime,
  modifiedTime,
  author,
  keywords,
  schemaMarkup,
  children,
}: SEOHeadProps) {
  // Validate required fields
  if (!title || !description || !canonical) {
    console.warn(
      "SEOHead: Missing required props (title, description, canonical). Some SEO functionality may be incomplete."
    );
  }

  // Generate complete SEO tags
  const seoConfig: SEOConfig = {
    canonical: canonical || `${BASE_URL}/`,
    title: title || "Aaron's Lawn Care",
    description: description || "Professional lawn care services in Louisville, KY",
    ogImage: ogImage || `${BASE_URL}/og-image.jpg`,
    ogImageWidth: ogImageWidth || 1200,
    ogImageHeight: ogImageHeight || 630,
    ogImageType: ogImageType || "image/jpeg",
    ogImageAlt: ogImageAlt || "Aaron's Lawn Care - Professional Lawn Services in Louisville, KY",
    twitterImage: twitterImage || `${BASE_URL}/og-image.jpg`,
    robots,
    geoRegion,
    geoPlacename,
    geoPosition,
    locale,
    ogType,
    publishedTime,
    modifiedTime,
    author,
    keywords,
  };

  const tags = generateCompleteSEOTags(seoConfig);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{tags.title}</title>
      <meta name="title" content={tags.title} />
      <meta name="description" content={tags.description} />
      {tags.keywords && <meta name="keywords" content={tags.keywords} />}

      {/* Canonical URL - Prevents duplicate content */}
      <link rel="canonical" href={tags.canonical} />

      {/* Robots Meta Tag - Controls search engine behavior */}
      <meta name="robots" content={tags.robots} />
      <meta name="googlebot" content={tags.robots} />
      <meta name="bingbot" content={tags.robots} />

      {/* Geo Location Tags - Improves local SEO */}
      {tags.geo && (
        <>
          <meta name="geo.region" content={tags.geo.region} />
          <meta name="geo.placename" content={tags.geo.placename} />
          <meta name="geo.position" content={tags.geo.position} />
        </>
      )}

      {/* Locale */}
      <meta property="og:locale" content={tags.locale} />

      {/* Open Graph Tags - Improves social media sharing */}
      <meta property="og:type" content={tags.ogType} />
      <meta property="og:title" content={tags.ogTitle} />
      <meta property="og:description" content={tags.ogDescription} />
      <meta property="og:url" content={tags.ogUrl} />
      <meta property="og:site_name" content={tags.ogSiteName} />

      {tags.ogImage && (
        <>
          <meta property="og:image" content={tags.ogImage.url} />
          {tags.ogImage.width && <meta property="og:image:width" content={tags.ogImage.width.toString()} />}
          {tags.ogImage.height && <meta property="og:image:height" content={tags.ogImage.height.toString()} />}
          {tags.ogImage.type && <meta property="og:image:type" content={tags.ogImage.type} />}
          {tags.ogImage.alt && <meta property="og:image:alt" content={tags.ogImage.alt} />}
        </>
      )}

      {/* Article-specific Open Graph Tags */}
      {tags.publishedTime && <meta property="article:published_time" content={tags.publishedTime} />}
      {tags.modifiedTime && <meta property="article:modified_time" content={tags.modifiedTime} />}
      {tags.author && <meta property="article:author" content={tags.author} />}

      {/* Twitter Card Tags - Improves Twitter/X sharing */}
      <meta name="twitter:card" content={tags.twitterCard} />
      <meta name="twitter:title" content={tags.twitterTitle} />
      <meta name="twitter:description" content={tags.twitterDescription} />
      {tags.twitterImage && <meta name="twitter:image" content={tags.twitterImage} />}

      {/* Additional Meta Tags for Better SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#15803d" />
      <meta name="color-scheme" content="light" />

      {/* Mobile Web App Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Aaron's Lawn Care" />

      {/* Structured Data (JSON-LD) */}
      {schemaMarkup && (
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      )}

      {/* Additional custom Helmet content */}
      {children}
    </Helmet>
  );
}

/**
 * Quick SEO Head for basic page configuration
 * Useful for pages with minimal SEO requirements
 *
 * Usage:
 * ```tsx
 * <QuickSEOHead
 *   title="Page Title"
 *   description="Page description"
 *   path="/page-path"
 * />
 * ```
 */
export function QuickSEOHead({
  title,
  description,
  path = "/",
  imageUrl,
}: {
  title: string;
  description: string;
  path?: string;
  imageUrl?: string;
}) {
  return (
    <SEOHead
      title={title}
      description={description}
      canonical={`${BASE_URL}${path}`}
      ogImage={imageUrl}
    />
  );
}

export default SEOHead;
