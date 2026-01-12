/**
 * SEO Meta Tags Generator
 * Provides utilities for generating canonical URLs, robots tags, geo tags,
 * Open Graph, and Twitter card meta tags with best practices for SEO optimization.
 * @see https://developers.google.com/search/docs/beginner/meta-tags
 * @see https://ogp.me/
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
 */

// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

export const BASE_URL = "https://aaronslawncare.com";
export const IMAGE_PATH = "/images";

export interface SEOConfig {
  /** Canonical URL for the page */
  canonical: string;
  /** Page title (50-60 characters recommended) */
  title: string;
  /** Meta description (150-160 characters recommended) */
  description: string;
  /** Open Graph image URL (1200x630px recommended) */
  ogImage?: string;
  /** Open Graph image width (default: 1200) */
  ogImageWidth?: number;
  /** Open Graph image height (default: 630) */
  ogImageHeight?: number;
  /** Open Graph image type (e.g., "image/jpeg", "image/png") */
  ogImageType?: string;
  /** Open Graph image alt text */
  ogImageAlt?: string;
  /** Twitter image URL (1200x675px recommended) */
  twitterImage?: string;
  /** Page robots directives */
  robots?: string;
  /** Geo location region (e.g., "US-KY") */
  geoRegion?: string;
  /** Geo location city name */
  geoPlacename?: string;
  /** Geo coordinates (latitude;longitude) */
  geoPosition?: string;
  /** Page locale (default: "en_US") */
  locale?: string;
  /** Open Graph type (default: "website") */
  ogType?: "website" | "article" | "business.business" | "product" | "video.movie" | "video.tv_show";
  /** Publication date for articles (ISO format) */
  publishedTime?: string;
  /** Modification date for articles (ISO format) */
  modifiedTime?: string;
  /** Article author */
  author?: string;
  /** Keywords (for reference, less important for modern SEO) */
  keywords?: string;
}

export interface MetaTags {
  canonical: string;
  robots: string;
  title: string;
  description: string;
  keywords?: string;
  locale: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogSiteName: string;
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    type?: string;
    alt?: string;
  };
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage?: string;
  geo?: {
    region: string;
    placename: string;
    position: string;
  };
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

// ============================================================================
// CANONICAL URL GENERATION
// ============================================================================

/**
 * Generate canonical URL for a page
 * Prevents duplicate content issues
 * @param pathname Page path (e.g., "/services/lawn-mowing")
 * @param baseUrl Base URL (default: BASE_URL)
 * @returns Full canonical URL
 */
export function generateCanonicalUrl(pathname: string, baseUrl = BASE_URL): string {
  // Remove trailing slash except for root
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return `${baseUrl}${cleanPath}`;
}

// ============================================================================
// ROBOTS META TAG GENERATION
// ============================================================================

export const ROBOTS_PRESETS = {
  /** Index and follow, allow image preview and snippets */
  default: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  /** Full access for Google */
  googleFull: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  /** No indexing (for staging/private pages) */
  noIndex: "noindex, nofollow",
  /** Allow indexing but restrict snippets */
  restrictSnippets: "index, follow, max-snippet:120",
  /** Allow indexing but no image preview */
  noImagePreview: "index, follow, noimageindex",
  /** Archive access only */
  archive: "index, follow, archive",
} as const;

/**
 * Generate robots meta tag content
 * @param preset Robots preset or custom string
 * @returns Robots meta content string
 */
export function generateRobotsMeta(preset: keyof typeof ROBOTS_PRESETS | string = "default"): string {
  return preset in ROBOTS_PRESETS ? ROBOTS_PRESETS[preset as keyof typeof ROBOTS_PRESETS] : preset;
}

// ============================================================================
// GEO LOCATION META TAGS
// ============================================================================

export interface GeoLocation {
  /** ISO 3166-1 alpha-2 country code (e.g., "US") */
  country: string;
  /** ISO 3166-2 region code (e.g., "US-KY") */
  region: string;
  /** City name */
  city: string;
  /** Latitude and longitude (e.g., "38.2527;-85.7585") */
  position: string;
}

export const LOUISVILLE_GEO: GeoLocation = {
  country: "US",
  region: "US-KY",
  city: "Louisville",
  position: "38.2527;-85.7585",
};

/**
 * Generate geo location meta tags
 * Signals to search engines where your business operates
 * @param geo Geo location object
 * @returns Object with geo meta tag names and content
 */
export function generateGeoTags(geo: GeoLocation = LOUISVILLE_GEO): Record<string, string> {
  return {
    "geo.region": geo.region,
    "geo.placename": geo.city,
    "geo.position": geo.position,
  };
}

// ============================================================================
// OPEN GRAPH META TAGS
// ============================================================================

/**
 * Generate Open Graph image meta tags
 * Improves sharing appearance on social media
 * @param imageUrl Image URL
 * @param width Image width (default: 1200)
 * @param height Image height (default: 630)
 * @param type Image MIME type
 * @param alt Image alt text
 * @returns Object with OG image meta tags
 */
export function generateOpenGraphImage(
  imageUrl: string,
  width: number = 1200,
  height: number = 630,
  type?: string,
  alt?: string
): Record<string, string> {
  const tags: Record<string, string> = {
    "og:image": imageUrl,
    "og:image:width": width.toString(),
    "og:image:height": height.toString(),
  };

  if (type) tags["og:image:type"] = type;
  if (alt) tags["og:image:alt"] = alt;

  return tags;
}

/**
 * Generate complete Open Graph meta tags
 * @param config SEO configuration
 * @returns Object with all OG meta tags
 */
export function generateOpenGraphTags(config: SEOConfig): Record<string, string> {
  const ogType = config.ogType || "website";
  const siteName = "Aaron's Lawn Care";

  const tags: Record<string, string> = {
    "og:type": ogType,
    "og:title": config.title,
    "og:description": config.description,
    "og:url": config.canonical,
    "og:site_name": siteName,
    "og:locale": config.locale || "en_US",
  };

  // Add OG image tags if provided
  if (config.ogImage) {
    const imageTags = generateOpenGraphImage(
      config.ogImage,
      config.ogImageWidth || 1200,
      config.ogImageHeight || 630,
      config.ogImageType,
      config.ogImageAlt
    );
    Object.assign(tags, imageTags);
  }

  // Add article-specific tags
  if (config.ogType === "article") {
    if (config.publishedTime) tags["article:published_time"] = config.publishedTime;
    if (config.modifiedTime) tags["article:modified_time"] = config.modifiedTime;
    if (config.author) tags["article:author"] = config.author;
  }

  return tags;
}

// ============================================================================
// TWITTER CARD META TAGS
// ============================================================================

export const TWITTER_CARD_TYPES = {
  /** Large image card (recommended for most content) */
  summaryLarge: "summary_large_image",
  /** Standard summary card */
  summary: "summary",
  /** Video card (for video content) */
  player: "player",
  /** App card (for mobile apps) */
  app: "app",
} as const;

/**
 * Generate Twitter Card meta tags
 * Improves sharing appearance on Twitter/X
 * @param config SEO configuration
 * @param cardType Twitter card type (default: "summary_large_image")
 * @returns Object with Twitter meta tags
 */
export function generateTwitterCardTags(
  config: SEOConfig,
  cardType: keyof typeof TWITTER_CARD_TYPES = "summaryLarge"
): Record<string, string> {
  const tags: Record<string, string> = {
    "twitter:card": TWITTER_CARD_TYPES[cardType],
    "twitter:title": config.title,
    "twitter:description": config.description,
  };

  if (config.twitterImage) {
    tags["twitter:image"] = config.twitterImage;
  } else if (config.ogImage) {
    tags["twitter:image"] = config.ogImage;
  }

  // Optional: Add Twitter creator handle when available
  // tags["twitter:creator"] = "@YourTwitterHandle";

  return tags;
}

// ============================================================================
// COMPREHENSIVE SEO META TAGS
// ============================================================================

/**
 * Generate all SEO meta tags
 * Comprehensive function for all metadata in one call
 * @param config SEO configuration
 * @returns Complete meta tags object
 */
export function generateCompleteSEOTags(config: SEOConfig): MetaTags {
  const locale = config.locale || "en_US";
  const ogType = config.ogType || "website";
  const robots = config.robots || generateRobotsMeta("default");

  const metaTags: MetaTags = {
    canonical: config.canonical,
    robots,
    title: config.title,
    description: config.description,
    locale,
    ogType,
    ogTitle: config.title,
    ogDescription: config.description,
    ogUrl: config.canonical,
    ogSiteName: "Aaron's Lawn Care",
    twitterCard: "summary_large_image",
    twitterTitle: config.title,
    twitterDescription: config.description,
  };

  // Add optional fields
  if (config.keywords) metaTags.keywords = config.keywords;
  if (config.ogImage) {
    metaTags.ogImage = {
      url: config.ogImage,
      width: config.ogImageWidth || 1200,
      height: config.ogImageHeight || 630,
      type: config.ogImageType,
      alt: config.ogImageAlt,
    };
  }
  if (config.twitterImage) metaTags.twitterImage = config.twitterImage;
  if (config.geoRegion && config.geoPlacename && config.geoPosition) {
    metaTags.geo = {
      region: config.geoRegion,
      placename: config.geoPlacename,
      position: config.geoPosition,
    };
  }
  if (config.publishedTime) metaTags.publishedTime = config.publishedTime;
  if (config.modifiedTime) metaTags.modifiedTime = config.modifiedTime;
  if (config.author) metaTags.author = config.author;

  return metaTags;
}

// ============================================================================
// PAGE-SPECIFIC SEO CONFIG GENERATORS
// ============================================================================

/**
 * Generate SEO config for homepage
 */
export function getHomePageSEO(): SEOConfig {
  return {
    canonical: generateCanonicalUrl("/"),
    title: "Aaron's Lawn Care | Professional Lawn Services in Louisville, KY",
    description:
      "20+ years of professional lawn care services in Louisville, KY. Mowing, treatment, landscaping, and more. Get your free quote today!",
    ogImage: `${BASE_URL}${IMAGE_PATH}/og-home.jpg`,
    ogImageAlt: "Aaron's Lawn Care - Professional Lawn Services",
    twitterImage: `${BASE_URL}${IMAGE_PATH}/twitter-home.jpg`,
    robots: generateRobotsMeta("default"),
    geoRegion: LOUISVILLE_GEO.region,
    geoPlacename: LOUISVILLE_GEO.city,
    geoPosition: LOUISVILLE_GEO.position,
    locale: "en_US",
    ogType: "website",
  };
}

/**
 * Generate SEO config for service pages
 */
export function getServicePageSEO(
  serviceName: string,
  description: string,
  slug: string
): SEOConfig {
  return {
    canonical: generateCanonicalUrl(`/services/${slug}`),
    title: `${serviceName} | Aaron's Lawn Care in Louisville, KY`,
    description: `Professional ${serviceName.toLowerCase()} services in Louisville, KY. ${description}. Contact us for a free quote!`,
    ogImage: `${BASE_URL}${IMAGE_PATH}/og-service-${slug}.jpg`,
    ogImageAlt: `${serviceName} - Aaron's Lawn Care`,
    twitterImage: `${BASE_URL}${IMAGE_PATH}/twitter-service-${slug}.jpg`,
    robots: generateRobotsMeta("default"),
    geoRegion: LOUISVILLE_GEO.region,
    geoPlacename: LOUISVILLE_GEO.city,
    geoPosition: LOUISVILLE_GEO.position,
    locale: "en_US",
    ogType: "website",
  };
}

/**
 * Generate SEO config for article/blog pages
 */
export function getArticleSEO(
  title: string,
  description: string,
  slug: string,
  publishedDate: string,
  modifiedDate?: string,
  imageUrl?: string
): SEOConfig {
  return {
    canonical: generateCanonicalUrl(`/blog/${slug}`),
    title: `${title} | Aaron's Lawn Care Blog`,
    description,
    ogImage: imageUrl || `${BASE_URL}${IMAGE_PATH}/og-blog-${slug}.jpg`,
    ogImageAlt: title,
    twitterImage: imageUrl || `${BASE_URL}${IMAGE_PATH}/twitter-blog-${slug}.jpg`,
    robots: generateRobotsMeta("default"),
    locale: "en_US",
    ogType: "article",
    publishedTime: publishedDate,
    modifiedTime: modifiedDate,
    author: "Aaron's Lawn Care",
  };
}

/**
 * Generate SEO config for contact page
 */
export function getContactPageSEO(): SEOConfig {
  return {
    canonical: generateCanonicalUrl("/contact"),
    title: "Contact Aaron's Lawn Care | Free Quote Request",
    description:
      "Contact Aaron's Lawn Care in Louisville, KY. Call (502) 926-8524 or request a free quote. We're available Monday-Saturday, 8AM-6PM.",
    ogImage: `${BASE_URL}${IMAGE_PATH}/og-contact.jpg`,
    twitterImage: `${BASE_URL}${IMAGE_PATH}/twitter-contact.jpg`,
    robots: generateRobotsMeta("default"),
    geoRegion: LOUISVILLE_GEO.region,
    geoPlacename: LOUISVILLE_GEO.city,
    geoPosition: LOUISVILLE_GEO.position,
    locale: "en_US",
    ogType: "website",
  };
}

/**
 * Generate SEO config for about page
 */
export function getAboutPageSEO(): SEOConfig {
  return {
    canonical: generateCanonicalUrl("/about"),
    title: "About Aaron's Lawn Care | 20+ Years of Excellence",
    description:
      "Learn about Aaron's Lawn Care - 20+ years of professional lawn care services in Louisville, KY. Meet our team and discover our commitment to quality.",
    ogImage: `${BASE_URL}${IMAGE_PATH}/og-about.jpg`,
    twitterImage: `${BASE_URL}${IMAGE_PATH}/twitter-about.jpg`,
    robots: generateRobotsMeta("default"),
    geoRegion: LOUISVILLE_GEO.region,
    geoPlacename: LOUISVILLE_GEO.city,
    geoPosition: LOUISVILLE_GEO.position,
    locale: "en_US",
    ogType: "website",
  };
}

/**
 * Generate SEO config for gallery page
 */
export function getGalleryPageSEO(): SEOConfig {
  return {
    canonical: generateCanonicalUrl("/gallery"),
    title: "Gallery | Aaron's Lawn Care - Before & After Photos",
    description:
      "View our lawn care before and after photos in Louisville, KY. See the quality of our professional mowing, landscaping, cleanup services, and more.",
    ogImage: `${BASE_URL}${IMAGE_PATH}/og-gallery.jpg`,
    ogImageAlt: "Aaron's Lawn Care Before and After Gallery",
    twitterImage: `${BASE_URL}${IMAGE_PATH}/twitter-gallery.jpg`,
    robots: generateRobotsMeta("default"),
    geoRegion: LOUISVILLE_GEO.region,
    geoPlacename: LOUISVILLE_GEO.city,
    geoPosition: LOUISVILLE_GEO.position,
    locale: "en_US",
    ogType: "website",
  };
}

/**
 * Generate SEO config for quote page
 */
export function getQuotePageSEO(): SEOConfig {
  return {
    canonical: generateCanonicalUrl("/quote"),
    title: "Request a Free Quote | Aaron's Lawn Care Louisville, KY",
    description:
      "Get a free quote for professional lawn care services in Louisville, KY. 20+ years of experience, fast response time. Request your quote today!",
    ogImage: `${BASE_URL}${IMAGE_PATH}/og-quote.jpg`,
    ogImageAlt: "Request a Free Lawn Care Quote",
    twitterImage: `${BASE_URL}${IMAGE_PATH}/twitter-quote.jpg`,
    robots: generateRobotsMeta("default"),
    geoRegion: LOUISVILLE_GEO.region,
    geoPlacename: LOUISVILLE_GEO.city,
    geoPosition: LOUISVILLE_GEO.position,
    locale: "en_US",
    ogType: "website",
  };
}

/**
 * Generate SEO config for services overview page
 */
export function getServicesPageSEO(): SEOConfig {
  return {
    canonical: generateCanonicalUrl("/services"),
    title: "Lawn Care Services | Aaron's Lawn Care Louisville, KY",
    description:
      "Professional lawn care and landscaping services in Louisville, KY. Mowing, edging, landscaping, snow removal, and more. 20+ years of experience. Get your free quote today!",
    ogImage: `${BASE_URL}${IMAGE_PATH}/og-services.jpg`,
    ogImageAlt: "Aaron's Lawn Care Services",
    twitterImage: `${BASE_URL}${IMAGE_PATH}/twitter-services.jpg`,
    robots: generateRobotsMeta("default"),
    geoRegion: LOUISVILLE_GEO.region,
    geoPlacename: LOUISVILLE_GEO.city,
    geoPosition: LOUISVILLE_GEO.position,
    locale: "en_US",
    ogType: "website",
  };
}

// ============================================================================
// CHARACTER COUNT VALIDATION HELPERS
// ============================================================================

/**
 * Validate meta description character count
 * Google typically shows 150-160 characters on desktop, 120 on mobile
 * @param description Meta description
 * @param ideal Target character count (default: 155)
 * @returns Object with validation result and suggestions
 */
export function validateMetaDescription(description: string, ideal = 155) {
  const length = description.length;
  const isOptimal = length >= 150 && length <= 160;
  const isTooShort = length < 120;
  const isTooLong = length > 160;

  return {
    length,
    isOptimal,
    isTooShort,
    isTooLong,
    message: isOptimal
      ? "Perfect length"
      : isTooShort
        ? `Too short (${length}). Aim for 150-160 characters.`
        : `Too long (${length}). Consider trimming to 150-160 characters.`,
  };
}

/**
 * Validate meta title character count
 * Google typically shows 50-60 characters on desktop, less on mobile
 * @param title Meta title
 * @param ideal Target character count (default: 55)
 * @returns Object with validation result and suggestions
 */
export function validateMetaTitle(title: string, ideal = 55) {
  const length = title.length;
  const isOptimal = length >= 50 && length <= 60;
  const isTooShort = length < 30;
  const isTooLong = length > 60;

  return {
    length,
    isOptimal,
    isTooShort,
    isTooLong,
    message: isOptimal
      ? "Perfect length"
      : isTooShort
        ? `Too short (${length}). Aim for 50-60 characters.`
        : `Too long (${length}). Consider trimming to 50-60 characters.`,
  };
}

// ============================================================================
// EXPORT SUMMARY
// ============================================================================

export const SEOHelpers = {
  generateCanonicalUrl,
  generateRobotsMeta,
  generateGeoTags,
  generateOpenGraphImage,
  generateOpenGraphTags,
  generateTwitterCardTags,
  generateCompleteSEOTags,
  getHomePageSEO,
  getServicePageSEO,
  getServicesPageSEO,
  getArticleSEO,
  getContactPageSEO,
  getAboutPageSEO,
  getGalleryPageSEO,
  getQuotePageSEO,
  validateMetaDescription,
  validateMetaTitle,
};
