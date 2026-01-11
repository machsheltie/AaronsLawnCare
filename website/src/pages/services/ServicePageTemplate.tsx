import { Link } from 'react-router-dom';

interface ServicePageTemplateProps {
  serviceName: string;
  description: string;
}

/**
 * ServicePageTemplate Component
 *
 * Reusable template for service detail pages.
 * Provides consistent structure across all service pages.
 *
 * TODO: Implement full service page with:
 * - Service hero image
 * - Detailed description
 * - Benefits list
 * - Pricing information
 * - Before/after gallery
 * - FAQ section
 * - Quote CTA
 * - Related services
 * - LocalBusiness + Service schema markup
 */
export default function ServicePageTemplate({
  serviceName,
  description,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero text-primary-600 mb-6">{serviceName}</h1>
            <p className="text-xl text-secondary-700 mb-8">{description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/quote" className="btn-primary">
                Get Free Quote
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8 text-center">
              <p className="text-secondary-600 mb-4">
                🚧 Full Service Details Coming Soon 🚧
              </p>
              <p className="text-sm text-secondary-500">
                For now, please{' '}
                <Link to="/quote" className="text-primary-600 hover:text-primary-700 font-medium">
                  request a quote
                </Link>{' '}
                or{' '}
                <Link
                  to="/contact"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  contact us
                </Link>{' '}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 text-secondary-900 mb-4">Other Services</h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
