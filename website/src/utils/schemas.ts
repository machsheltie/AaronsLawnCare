/**
 * Schema.org Structured Data Generators
 * Implements JSON-LD schemas for SEO and Rich Results eligibility
 * @see https://schema.org/
 * @see https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface SchemaConfig {
  /** Business name */
  businessName: string;
  /** Business phone number */
  phone: string;
  /** Business email */
  email: string;
  /** Business website URL */
  websiteUrl: string;
  /** Business location - city */
  city: string;
  /** Business location - state */
  state: string;
  /** Business location - country */
  country: string;
  /** Business latitude */
  latitude: string;
  /** Business longitude */
  longitude: string;
  /** Service radius in meters */
  serviceRadius: number;
  /** Opening hours specification */
  openingHours: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  /** Aggregate rating */
  aggregateRating?: {
    ratingValue: string;
    reviewCount: number;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ReviewItem {
  author: string;
  ratingValue: 4 | 5;
  reviewBody: string;
  datePublished: string;
  serviceType?: string;
  location?: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  url?: string;
  areaServed?: {
    city: string;
    state: string;
  };
  priceRange?: string;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: number;
  };
}

// ============================================================================
// BUSINESS CONFIGURATION
// ============================================================================

export const BUSINESS_CONFIG: SchemaConfig = {
  businessName: "Aaron's Lawn Care",
  phone: "+15029268524",
  email: "gnaua429@gmail.com",
  websiteUrl: "https://aaronslawncare502.com",
  city: "Louisville",
  state: "KY",
  country: "US",
  latitude: "38.2527",
  longitude: "-85.7585",
  serviceRadius: 50000, // meters (~31 miles)
  openingHours: {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  aggregateRating: {
    ratingValue: "5.0",
    reviewCount: 10,
  },
};

// ============================================================================
// LOCAL BUSINESS SCHEMA
// ============================================================================

/**
 * Generate LocalBusiness Schema for homepage and footer
 * Rich Results: Knowledge Panel, Local Business Rich Results
 * @param config Business configuration
 * @returns JSON-LD LocalBusiness schema
 */
export function generateLocalBusinessSchema(config: SchemaConfig = BUSINESS_CONFIG) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": config.websiteUrl,
    "name": config.businessName,
    "image": `${config.websiteUrl}/og-image.jpg`,
    "description": "Professional lawn care and landscaping services serving the greater Louisville, Kentucky area for over 20 years.",
    "url": config.websiteUrl,
    "telephone": config.phone,
    "email": config.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": config.city,
      "addressRegion": config.state,
      "addressCountry": config.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": config.latitude,
      "longitude": config.longitude,
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Louisville",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Louisville",
          "addressRegion": "KY",
          "addressCountry": "US",
        },
      },
      {
        "@type": "City",
        "name": "Jeffersontown",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jeffersontown",
          "addressRegion": "KY",
          "addressCountry": "US",
        },
      },
      {
        "@type": "City",
        "name": "St. Matthews",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "St. Matthews",
          "addressRegion": "KY",
          "addressCountry": "US",
        },
      },
      {
        "@type": "City",
        "name": "Highlands",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Highlands",
          "addressRegion": "KY",
          "addressCountry": "US",
        },
      },
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": config.openingHours.dayOfWeek,
      "opens": config.openingHours.opens,
      "closes": config.openingHours.closes,
    },
    "sameAs": [
      // Placeholder for social media profiles (to be added by business owner)
      // "https://www.facebook.com/aaronslawncare",
      // "https://www.instagram.com/aaronslawncare",
      // "https://www.linkedin.com/company/aaronslawncare",
    ],
    ...(config.aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": config.aggregateRating.ratingValue,
        "reviewCount": config.aggregateRating.reviewCount,
      },
    }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lawn Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lawn Mowing & Edging",
            "description": "Professional lawn mowing and edging services",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscaping Design & Installation",
            "description": "Custom landscape design and installation",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscape Maintenance",
            "description": "Ongoing landscape maintenance services",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mulching Services",
            "description": "Professional mulching and bed maintenance",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leaf Removal",
            "description": "Fall leaf removal and cleanup",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seasonal Cleanup",
            "description": "Spring and fall seasonal cleanup services",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lawn Aeration",
            "description": "Core aeration for healthier lawns",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hedge & Shrub Trimming",
            "description": "Professional hedge and shrub trimming",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree Removal",
            "description": "Safe tree removal services",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pressure Washing",
            "description": "Exterior pressure washing services",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Snow Removal",
            "description": "Winter snow removal services",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gutter Cleaning",
            "description": "Professional gutter cleaning services",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lawn Treatment & Fertilization",
            "description": "Lawn care treatment and fertilization",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Debris Removal",
            "description": "Yard debris and waste removal",
          },
        },
      ],
    },
  };
}

// ============================================================================
// SERVICE SCHEMA
// ============================================================================

/**
 * Generate Service Schema for individual service pages
 * Rich Results: Service Rich Results
 * @param serviceName The name of the service
 * @param description Service description
 * @param url Service page URL
 * @param config Business configuration
 * @returns JSON-LD Service schema
 */
export function generateServiceSchema(
  serviceName: string,
  description: string,
  url: string,
  config: SchemaConfig = BUSINESS_CONFIG
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "url": `${config.websiteUrl}${url}`,
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": config.businessName,
      "telephone": config.phone,
      "email": config.email,
      "url": config.websiteUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": config.city,
        "addressRegion": config.state,
        "addressCountry": config.country,
      },
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": config.latitude,
        "longitude": config.longitude,
      },
      "geoRadius": config.serviceRadius,
    },
  };
}

/**
 * Generate comprehensive Service schema with pricing and aggregate rating
 * @param service Service details
 * @param config Business configuration
 * @returns JSON-LD Service schema with extended properties
 */
export function generateServiceSchemaExtended(
  service: ServiceItem,
  config: SchemaConfig = BUSINESS_CONFIG
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    ...(service.url && { "url": `${config.websiteUrl}${service.url}` }),
    "serviceType": service.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": config.businessName,
      "telephone": config.phone,
      "email": config.email,
      "url": config.websiteUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": config.city,
        "addressRegion": config.state,
        "addressCountry": config.country,
      },
    },
    "areaServed": service.areaServed
      ? {
          "@type": "Place",
          "name": `${service.areaServed.city}, ${service.areaServed.state}`,
        }
      : {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": config.latitude,
            "longitude": config.longitude,
          },
          "geoRadius": config.serviceRadius,
        },
    ...(service.priceRange && { "priceRange": service.priceRange }),
    ...(service.aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": service.aggregateRating.ratingValue,
        "reviewCount": service.aggregateRating.reviewCount,
      },
    }),
  };
}

// ============================================================================
// FAQ SCHEMA
// ============================================================================

/**
 * Generate FAQ Schema for FAQ sections
 * Rich Results: FAQ Rich Results
 * @param faqs Array of FAQ items
 * @returns JSON-LD FAQPage schema
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

// ============================================================================
// BREADCRUMB SCHEMA
// ============================================================================

/**
 * Generate Breadcrumb Schema for navigation
 * Rich Results: Breadcrumb Rich Results
 * @param items Array of breadcrumb items
 * @returns JSON-LD BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

/**
 * Helper: Generate breadcrumb items for service pages
 * @param serviceName Service name
 * @param serviceUrl Service page URL
 * @returns Array of breadcrumb items
 */
export function getBreadcrumbsForService(
  serviceName: string,
  serviceUrl: string
): BreadcrumbItem[] {
  return [
    { name: "Home", url: "https://aaronslawncare502.com" },
    { name: "Services", url: "https://aaronslawncare502.com/services" },
    { name: serviceName, url: `https://aaronslawncare502.com${serviceUrl}` },
  ];
}

// ============================================================================
// REVIEW SCHEMA
// ============================================================================

/**
 * Generate Review Schema for individual reviews
 * Rich Results: Review Rich Results
 * @param review Review details
 * @param config Business configuration
 * @returns JSON-LD Review schema
 */
export function generateReviewSchema(
  review: ReviewItem,
  config: SchemaConfig = BUSINESS_CONFIG
) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author,
      ...(review.location && { "address": review.location }),
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.ratingValue,
      "bestRating": "5",
      "worstRating": "1",
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished,
    ...(review.serviceType && { "about": review.serviceType }),
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": config.businessName,
      "url": config.websiteUrl,
    },
  };
}

/**
 * Generate AggregateRating Schema from review array
 * Rich Results: Aggregate Rating in Knowledge Panel
 * @param reviews Array of reviews
 * @param config Business configuration
 * @returns JSON-LD AggregateRating schema
 */
export function generateAggregateRatingSchema(
  reviews: ReviewItem[],
  config: SchemaConfig = BUSINESS_CONFIG
) {
  const ratingSum = reviews.reduce((sum, review) => sum + review.ratingValue, 0);
  const averageRating = (ratingSum / reviews.length).toFixed(1);

  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": averageRating,
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": reviews.length,
  };
}

// ============================================================================
// ARTICLE/BLOG POST SCHEMA
// ============================================================================

/**
 * Generate Article/BlogPosting Schema for blog posts
 * Rich Results: Article Rich Results
 * @param title Article title
 * @param description Article description
 * @param body Article body content
 * @param publishDate Publication date (YYYY-MM-DD format)
 * @param modifyDate Last modified date (YYYY-MM-DD format)
 * @param url Article URL
 * @param config Business configuration
 * @returns JSON-LD BlogPosting schema
 */
export function generateBlogPostSchema(
  title: string,
  description: string,
  body: string,
  publishDate: string,
  modifyDate: string,
  url: string,
  config: SchemaConfig = BUSINESS_CONFIG
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "articleBody": body,
    "datePublished": publishDate,
    "dateModified": modifyDate,
    "url": `${config.websiteUrl}${url}`,
    "author": {
      "@type": "Organization",
      "name": config.businessName,
      "url": config.websiteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${config.websiteUrl}/logo.png`,
        "width": "200",
        "height": "100",
      },
    },
    "publisher": {
      "@type": "Organization",
      "name": config.businessName,
      "logo": {
        "@type": "ImageObject",
        "url": `${config.websiteUrl}/logo.png`,
        "width": "200",
        "height": "100",
      },
    },
  };
}

// ============================================================================
// HOWTO SCHEMA
// ============================================================================

export interface HowToStep {
  name: string;
  text: string;
  imageUrl?: string;
}

/**
 * Generate HowTo Schema for process/step content
 * Rich Results: HowTo Rich Results
 * @param title HowTo title
 * @param description HowTo description
 * @param steps Array of HowTo steps
 * @param totalTime Total time in ISO 8601 format (e.g., "PT2H30M")
 * @param imageUrl Main image URL
 * @returns JSON-LD HowTo schema
 */
export function generateHowToSchema(
  title: string,
  description: string,
  steps: HowToStep[],
  totalTime: string,
  imageUrl?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    ...(imageUrl && {
      "image": {
        "@type": "ImageObject",
        "url": imageUrl,
      },
    }),
    "totalTime": totalTime,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.imageUrl && {
        "image": {
          "@type": "ImageObject",
          "url": step.imageUrl,
        },
      }),
    })),
  };
}

// ============================================================================
// ORGANIZATION SCHEMA
// ============================================================================

/**
 * Generate Organization Schema
 * Rich Results: Knowledge Panel, featured snippet
 * @param config Business configuration
 * @returns JSON-LD Organization schema
 */
export function generateOrganizationSchema(config: SchemaConfig = BUSINESS_CONFIG) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": config.businessName,
    "url": config.websiteUrl,
    "logo": `${config.websiteUrl}/logo.png`,
    "description": "Professional lawn care and landscaping services in Louisville, Kentucky",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": config.city,
      "addressRegion": config.state,
      "addressCountry": config.country,
    },
    "telephone": config.phone,
    "email": config.email,
    "sameAs": [
      // Add your social media URLs here when available
      // "https://www.facebook.com/aaronslawncare",
      // "https://www.instagram.com/aaronslawncare",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": config.phone,
      "email": config.email,
    },
  };
}

// ============================================================================
// CONTACT PAGE SCHEMA
// ============================================================================

/**
 * Generate Contact Point Schema
 * Rich Results: Contact information in Knowledge Panel
 * @param config Business configuration
 * @returns JSON-LD ContactPoint schema
 */
export function generateContactPointSchema(config: SchemaConfig = BUSINESS_CONFIG) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": config.phone,
    "email": config.email,
    "contactOption": ["TollFree", "HearingImpairedSupported"],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": config.latitude,
        "longitude": config.longitude,
      },
      "geoRadius": config.serviceRadius,
    },
  };
}

// ============================================================================
// JSON-LD HELPER UTILITIES
// ============================================================================

/**
 * Convert schema object to JSON-LD script string
 * Safe for use in React Helmet
 * @param schema Schema object
 * @returns JSON string
 */
export function schemaToJsonLd(schema: Record<string, any>): string {
  return JSON.stringify(schema);
}

/**
 * Generate schema with graph context for multiple related schemas
 * Useful when multiple schemas should be associated on a page
 * @param schemas Array of schema objects
 * @returns JSON-LD Graph schema
 */
export function generateSchemaGraph(schemas: Record<string, any>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}

/**
 * Validate schema has required fields
 * @param schema Schema to validate
 * @param requiredFields Fields that must be present
 * @returns true if valid, false otherwise
 */
export function validateSchema(
  schema: Record<string, any>,
  requiredFields: string[]
): boolean {
  return requiredFields.every((field) => field in schema && schema[field] !== null);
}

// ============================================================================
// EXPORT SUMMARY FOR EASY IMPORT
// ============================================================================

export const SchemaGenerators = {
  localBusiness: generateLocalBusinessSchema,
  service: generateServiceSchema,
  serviceExtended: generateServiceSchemaExtended,
  faq: generateFAQSchema,
  breadcrumb: generateBreadcrumbSchema,
  review: generateReviewSchema,
  aggregateRating: generateAggregateRatingSchema,
  blogPost: generateBlogPostSchema,
  howTo: generateHowToSchema,
  organization: generateOrganizationSchema,
  contactPoint: generateContactPointSchema,
};
