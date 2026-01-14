import React from 'react';
import { SEOHead } from '../../components/common/SEOHead';
import { Button } from '@/components/ui/Button';

const StMatthewsPage: React.FC = () => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aaronslawncare502.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Service Areas',
        item: 'https://aaronslawncare502.com/areas',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'St. Matthews',
        item: 'https://aaronslawncare502.com/areas/st-matthews',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aaronslawncare502.com/areas/st-matthews',
    name: "Aaron's Lawn Care - St. Matthews",
    image: 'https://aaronslawncare502.com/images/logo.png',
    description:
      'Professional lawn care services in St. Matthews, Louisville, Kentucky. Serving St. Matthews residents for over 20 years.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Serving St. Matthews',
      addressLocality: 'Louisville',
      addressRegion: 'KY',
      postalCode: '40207',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.2527,
      longitude: -85.6544,
    },
    url: 'https://aaronslawncare502.com/areas/st-matthews',
    telephone: '+1-502-123-4567',
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'St. Matthews',
      containedIn: {
        '@type': 'City',
        name: 'Louisville',
      },
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 38.2527,
        longitude: -85.6544,
      },
      geoRadius: '5000',
    },
  };

  return (
    <>
      <SEOHead
        title="Lawn Care in St. Matthews, Louisville KY | Aaron's Lawn Care"
        description="Professional lawn care services in St. Matthews, Louisville, Kentucky. Mowing, edging, landscaping & more. 20+ years serving St. Matthews residents. Free quotes!"
        canonicalUrl="https://aaronslawncare502.com/areas/st-matthews"
        schema={[breadcrumbSchema, localBusinessSchema]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          {/* Animated Background Blob */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">
                Lawn Care Services in St. Matthews, Louisville KY
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                Professional Lawn Maintenance Serving St. Matthews Since 2004
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  Get Free Quote
                </a>
                <a
                  href="tel:+15021234567"
                  className="inline-block bg-white text-green-800 border-2 border-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Call Now: (502) 123-4567
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  When it comes to maintaining beautiful lawns in St. Matthews, Louisville,
                  Aaron's Lawn Care has been the trusted choice for over 20 years. From the
                  historic neighborhoods along Shelbyville Road to the well-maintained properties
                  near Mall St. Matthews, we've helped countless homeowners achieve the lush,
                  healthy lawns they've always wanted.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  St. Matthews is known for its beautiful tree-lined streets, established
                  neighborhoods like Bellemeade and Northfield, and well-kept properties that
                  reflect community pride. Our team understands the unique needs of St. Matthews
                  lawns, from dealing with shade from mature trees to maintaining the Kentucky
                  bluegrass that thrives in this area. We're familiar with every corner of the
                  community, from Chenoweth Run to Westport Road, and we bring that local
                  expertise to every lawn we service.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Our St. Matthews customers appreciate our reliability, attention to detail, and
                  commitment to excellence. Whether you live near Brown Park, off Breckenridge
                  Lane, or anywhere in the St. Matthews area, we treat your lawn with the same
                  care we'd give our own. We understand that your lawn is an extension of your
                  home, and we take pride in helping you maintain a yard that enhances your
                  property's curb appeal and provides a beautiful outdoor space for your family.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  From routine mowing and edging to seasonal cleanups and landscape maintenance,
                  Aaron's Lawn Care delivers comprehensive services that keep St. Matthews lawns
                  looking their best year-round. Our experienced team uses professional-grade
                  equipment and proven techniques to ensure superior results with every visit.
                  Contact us today for a free estimate and discover why St. Matthews residents
                  have trusted us for over two decades.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Our St. Matthews Lawn Care Services
                </h2>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">
                      <strong>Weekly & Bi-Weekly Lawn Mowing:</strong> Professional cutting with
                      precise edging along driveways and walkways
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">
                      <strong>String Trimming & Edging:</strong> Clean, crisp edges for a
                      manicured appearance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">
                      <strong>Leaf Removal & Fall Cleanup:</strong> Complete yard cleanup for St.
                      Matthews' mature tree canopy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">
                      <strong>Mulching & Bed Maintenance:</strong> Fresh mulch installation and
                      landscape bed care
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">
                      <strong>Shrub Trimming & Pruning:</strong> Keep your landscaping neat and
                      healthy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">
                      <strong>Spring & Fall Cleanup:</strong> Seasonal services to prepare your
                      lawn for changing weather
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">
                      <strong>Debris Removal & Cleanup:</strong> Complete cleanup after every
                      service
                    </span>
                  </li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Why St. Matthews Homeowners Choose Aaron's Lawn Care
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Over 20 years serving the St. Matthews community</li>
                    <li>✓ Licensed, insured, and locally owned</li>
                    <li>✓ Professional equipment and experienced crew</li>
                    <li>✓ Reliable service with consistent quality</li>
                    <li>✓ Free estimates and competitive pricing</li>
                    <li>✓ Satisfaction guaranteed on every service</li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready for a Beautiful Lawn in St. Matthews?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Get your free, no-obligation quote today. We'll assess your property and provide
                  a detailed estimate for our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Request Free Quote
                  </a>
                  <a
                    href="tel:+15021234567"
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Call (502) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                  Ready for Professional Lawn Care in St. Matthews?
                </h2>
                <p className="text-lg text-primary-100 mb-10">
                  Get your free, no-obligation quote today. We'll visit your property and provide a detailed estimate tailored to your yard's unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto text-lg items-center h-14" asChild>
                    <a href="/contact">Get Your Free Quote</a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white h-14">
                    Call (502) 926-8524
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What St. Matthews Residents Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Aaron's crew has been taking care of our lawn on Breckenridge Lane for 5 years.
                  They're always on time, professional, and our yard looks fantastic. Highly
                  recommend!"
                </p>
                <p className="text-gray-900 font-semibold">- Jennifer M., St. Matthews</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Best lawn service in St. Matthews! They handle our fall leaf cleanup perfectly
                  every year. Worth every penny for the quality and reliability."
                </p>
                <p className="text-gray-900 font-semibold">- Robert K., St. Matthews</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StMatthewsPage;
