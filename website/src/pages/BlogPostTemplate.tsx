import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { getBlogPostBySlug, getRelatedBlogPosts, type BlogPost } from '../data/blogPosts';
import { generateBlogPostSchema, generateBreadcrumbSchema } from '../utils/schemas';

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/blog/${post.slug}`}>
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-green-700 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </article>
  );
}

export default function BlogPostTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  // If post not found, redirect to blog listing
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedBlogPosts(post, 3);

  // Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://aaronslawncare502.com' },
    { name: 'Blog', url: 'https://aaronslawncare502.com/blog' },
    { name: post.title, url: `https://aaronslawncare502.com/blog/${post.slug}` },
  ]);

  const blogPostSchema = generateBlogPostSchema(
    post.title,
    post.description,
    post.excerpt, // In production, this would be the full article body
    post.publishDate,
    post.lastModified,
    `/blog/${post.slug}`
  );

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Aaron's Lawn Care Blog</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://aaronslawncare502.com/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify([breadcrumbSchema, blogPostSchema])}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Back to Blog */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              to="/blog"
              className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime} min read</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold transition-colors"
                aria-label="Share article"
              >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-12">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {/* Introduction */}
              <p className="text-xl text-gray-700 leading-relaxed mb-8">{post.excerpt}</p>

              {/* Placeholder for full article content */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <p className="text-gray-800">
                  <strong>Content Placeholder:</strong> This is where the full blog post content would be displayed.
                  In production, this would include 2000+ words of expert lawn care advice, tips, and step-by-step guides.
                </p>
              </div>

              {/* Future Content Sections */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">
                [Main Content Section 1]
              </h2>
              <p className="text-gray-700 mb-6">
                Full article content would be inserted here with detailed information, expert advice, and actionable tips.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">
                [Main Content Section 2]
              </h2>
              <p className="text-gray-700 mb-6">
                Additional sections with comprehensive coverage of the topic, including local Louisville-specific insights.
              </p>
            </div>

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tagged:</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Tag className="h-4 w-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="bg-green-50 rounded-lg p-8 mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
                  <p className="text-gray-600">Professional Lawn Care Experts</p>
                </div>
              </div>
              <p className="text-gray-700">
                With over 20 years of experience serving Louisville and surrounding areas, Aaron's Lawn Care provides
                expert lawn maintenance, landscaping, and seasonal services to keep your property looking its best.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gray-900 text-white rounded-lg p-8 text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Need Professional Lawn Care?</h3>
              <p className="text-lg mb-6">
                Let our experienced team handle your lawn maintenance. Get a free quote today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/quote"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Request Free Quote
                </Link>
                <a
                  href="tel:5029268524"
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call (502) 926-8524
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <RelatedPostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
