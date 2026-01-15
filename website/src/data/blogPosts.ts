/**
 * Blog Post Metadata
 * Central registry for all blog posts with metadata for SEO and Article schema
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  publishDate: string;
  lastModified: string;
  category: 'Seasonal' | 'Evergreen' | 'How-To' | 'Guides';
  tags: string[];
  featuredImage: string;
  readTime: number; // minutes
  excerpt: string;
}

/**
 * Blog post registry
 * Add new blog posts here - they will automatically appear on the blog listing page
 */
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'when-to-aerate-lawn-kentucky',
    title: 'When to Aerate Your Lawn in Kentucky: Complete Timing Guide',
    description: 'Learn the best times to aerate your Kentucky lawn for optimal grass health. Expert advice from Louisville lawn care professionals with 20+ years experience.',
    author: "Aaron's Lawn Care",
    publishDate: '2026-01-15',
    lastModified: '2026-01-15',
    category: 'Seasonal',
    tags: ['Aeration', 'Kentucky Lawn Care', 'Lawn Maintenance', 'Seasonal Tips'],
    featuredImage: '/images/blog/aeration-kentucky.jpg',
    readTime: 8,
    excerpt: 'Aeration is one of the most important lawn care practices for Kentucky homeowners. Learn when and how to aerate your lawn for the healthiest grass possible.',
  },
  {
    id: '2',
    slug: 'best-grass-types-louisville-climate',
    title: 'Best Grass Types for Louisville Climate: Kentucky Bluegrass vs Fescue',
    description: 'Compare the best grass types for Louisville\'s climate. Learn which grass varieties thrive in Kentucky and which one is right for your lawn.',
    author: "Aaron's Lawn Care",
    publishDate: '2026-01-20',
    lastModified: '2026-01-20',
    category: 'Evergreen',
    tags: ['Grass Types', 'Kentucky Bluegrass', 'Fescue', 'Louisville Lawns'],
    featuredImage: '/images/blog/grass-types-louisville.jpg',
    readTime: 10,
    excerpt: 'Choosing the right grass type is critical for a healthy Louisville lawn. Discover which grass varieties perform best in Kentucky\'s unique climate.',
  },
  {
    id: '3',
    slug: 'fall-cleanup-checklist-louisville',
    title: 'Fall Cleanup Checklist for Louisville Homeowners: Complete Guide',
    description: 'Complete fall lawn cleanup checklist for Louisville homeowners. Prepare your lawn for winter with this step-by-step guide from local experts.',
    author: "Aaron's Lawn Care",
    publishDate: '2026-09-01',
    lastModified: '2026-09-01',
    category: 'Seasonal',
    tags: ['Fall Cleanup', 'Leaf Removal', 'Seasonal Maintenance', 'Louisville'],
    featuredImage: '/images/blog/fall-cleanup-checklist.jpg',
    readTime: 12,
    excerpt: 'Fall is the perfect time to prepare your lawn for winter. Follow this comprehensive checklist to ensure your Louisville lawn stays healthy through the cold months.',
  },
  {
    id: '4',
    slug: 'prepare-lawn-kentucky-winter',
    title: 'How to Prepare Your Lawn for Kentucky Winters: Expert Tips',
    description: 'Essential winter lawn preparation tips for Kentucky homeowners. Protect your grass from freezing temperatures and ensure spring green-up.',
    author: "Aaron's Lawn Care",
    publishDate: '2026-10-15',
    lastModified: '2026-10-15',
    category: 'Seasonal',
    tags: ['Winter Preparation', 'Lawn Winterization', 'Kentucky Climate', 'Cold Weather Care'],
    featuredImage: '/images/blog/winter-lawn-prep.jpg',
    readTime: 9,
    excerpt: 'Winter preparation is crucial for Kentucky lawns. Learn the essential steps to protect your grass from harsh winter conditions and ensure beautiful spring growth.',
  },
];

/**
 * Get blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

/**
 * Get related blog posts (by shared tags, excluding current post)
 */
export function getRelatedBlogPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentPost.id)
    .map(post => ({
      post,
      score: post.tags.filter(tag => currentPost.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}
