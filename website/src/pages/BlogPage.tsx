import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, Calendar, Tag } from 'lucide-react';
import { getAllBlogPosts, type BlogPost } from '../data/blogPosts';

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {/* Featured Image */}
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-64 bg-gray-200 overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-700 transition-colors">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors"
        >
          Read Full Article
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Helmet>
        <title>Lawn Care Blog | Tips & Guides for Louisville KY | Aaron's Lawn Care</title>
        <meta
          name="description"
          content="Expert lawn care tips, seasonal guides, and maintenance advice from Louisville's trusted lawn care professionals. Over 20 years of experience serving Kentucky homeowners."
        />
        <link rel="canonical" href="https://aaronslawncare502.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          ></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">
                Louisville Lawn Care Blog
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-600">
                Expert tips, seasonal guides, and lawn care advice from Louisville's most trusted professionals
              </p>
              <p className="text-lg text-gray-700">
                20+ years of lawn care expertise in Kentucky. Learn how to keep your lawn healthy and beautiful year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter - Future Enhancement */}
            {/* <div className="flex flex-wrap gap-3 mb-12 justify-center">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold">All Posts</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Seasonal</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Evergreen</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">How-To</button>
            </div> */}

            {/* Blog Posts Grid */}
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">No blog posts available yet.</p>
                <p className="text-gray-500">Check back soon for expert lawn care tips and guides!</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Professional Lawn Care in Louisville?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Put our 20+ years of expertise to work for you. Get a free quote today!
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
                className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Call (502) 926-8524
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
