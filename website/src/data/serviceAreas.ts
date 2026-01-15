/**
 * Service Areas Data
 *
 * Centralized list of Louisville metro areas served by Aaron's Lawn Care.
 * Used across AboutPage, ContactPage, Footer, and ServiceAreas component.
 */

export interface ServiceArea {
  name: string;
  slug: string;
  description?: string;
}

/**
 * Primary service areas in greater Louisville, KY
 */
export const serviceAreas: ServiceArea[] = [
  {
    name: 'St. Matthews',
    slug: 'st-matthews',
    description: 'Professional lawn care in St. Matthews, KY'
  },
  {
    name: 'Highlands',
    slug: 'highlands',
    description: 'Expert landscaping services in the Highlands'
  },
  {
    name: 'Okolona',
    slug: 'okolona',
    description: 'Reliable lawn maintenance in Okolona'
  },
  {
    name: 'Jeffersontown',
    slug: 'jeffersontown',
    description: 'Lawn care specialists serving Jeffersontown'
  },
  {
    name: 'Middletown',
    slug: 'middletown',
    description: 'Quality lawn services in Middletown, KY'
  },
  {
    name: 'Prospect',
    slug: 'prospect',
    description: 'Premium lawn care in Prospect'
  },
  {
    name: 'Downtown Louisville',
    slug: 'downtown-louisville',
    description: 'Urban lawn care in Downtown Louisville'
  },
  {
    name: 'East End',
    slug: 'east-end',
    description: 'Professional services in Louisville\'s East End'
  },
  {
    name: 'Anchorage',
    slug: 'anchorage',
    description: 'Expert lawn care in Anchorage, KY'
  },
  {
    name: 'Lyndon',
    slug: 'lyndon',
    description: 'Trusted lawn services in Lyndon'
  },
  {
    name: 'Hurstbourne',
    slug: 'hurstbourne',
    description: 'Quality landscaping in Hurstbourne'
  },
  {
    name: 'Fern Creek',
    slug: 'fern-creek',
    description: 'Reliable lawn care in Fern Creek'
  },
  {
    name: 'Shively',
    slug: 'shively',
    description: 'Professional lawn services in Shively'
  }
];

/**
 * Get area names as simple string array for quick lists
 */
export const getAreaNames = (): string[] => {
  return serviceAreas.map(area => area.name);
};

/**
 * Get area by slug
 */
export const getAreaBySlug = (slug: string): ServiceArea | undefined => {
  return serviceAreas.find(area => area.slug === slug);
};

/**
 * Service area count for marketing
 */
export const SERVICE_AREA_COUNT = serviceAreas.length;
