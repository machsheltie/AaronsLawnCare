import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/common/SEOHead';
import { getNotFoundPageSEO } from '@/utils/seo-meta';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead {...getNotFoundPageSEO()} />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">Page not found</p>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    </>
  );
}
