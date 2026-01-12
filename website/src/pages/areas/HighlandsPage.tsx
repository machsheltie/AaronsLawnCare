import React from 'react';
import { SEOHead } from '../../components/common/SEOHead';

const HighlandsPage: React.FC = () => {
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
        name: 'Highlands',
        item: 'https://aaronslawncare502.com/areas/highlands',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aaronslawncare502.com/areas/highlands',
    name: "Aaron's Lawn Care - Highlands",
    image: 'https://aaronslawncare502.com/images/logo.png',
    description:
      'Professional lawn care services in the Highlands neighborhood, Louisville, Kentucky. Serving Highlands residents for over 20 years.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Serving Highlands',
      addressLocality: 'Louisville',
      addressRegion: 'KY',
      postalCode: '40204',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.2379,
      longitude: -85.7243,
    },
    url: 'https://aaronslawncare502.com/areas/highlands',
    telephone: '+1-502-123-4567',
    priceRange: '$$',
    areaServed: {
      '@type': 'Neighborhood',
      name: 'Highlands',
      containedIn: {
        '@type': 'City',
        name: 'Louisville',
      },
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 38.2379,
        longitude: -85.7243,
      },
      geoRadius: '3000',
    },
  };

  return (
    <>
      <SEOHead
        title="Lawn Care in Highlands, Louisville KY | Aaron's Lawn Care"
        description="Professional lawn care services in Highlands, Louisville, Kentucky. Mowing, edging, landscaping & more. 20+ years serving Highlands residents. Free quotes!"
        canonicalUrl="https://aaronslawncare502.com/areas/highlands"
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
                Lawn Care Services in Highlands, Louisville KY
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                Expert Lawn Maintenance for Highlands' Unique Urban Yards
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
                  The Highlands is one of Louisville's most beloved neighborhoods, known for its
                  vibrant Bardstown Road corridor, charming Victorian homes, and tree-lined streets.
                  For over 20 years, Aaron's Lawn Care has been the go-to choice for Highlands
                  residents who want their urban yards to look pristine without the hassle. Whether
                  you're on Cherokee Parkway, tucked away on Highland Avenue, or near the shops and
                  restaurants along Baxter Avenue, we bring professional lawn care expertise to
                  every property.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Highlands yards present unique challenges that require specialized knowledge and
                  care. Many properties feature smaller urban lots with mature trees, shade
                  gardens, and vintage landscaping that needs careful attention. From the historic
                  homes near Cherokee Park to the cozy bungalows throughout the Original Highlands
                  and Deer Park neighborhoods, we understand how to work with the area's distinct
                  character. Our team knows the importance of maintaining curb appeal in this
                  walkable community where neighbors take pride in their properties.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  We've built lasting relationships with Highlands homeowners who appreciate our
                  reliable service and attention to detail. Whether you need weekly mowing along
                  Longest Avenue, seasonal cleanup for the falling leaves from your established
                  trees, or landscape bed maintenance to complement your historic home, Aaron's Lawn
                  Care delivers consistent results. We work around the neighborhood's busy street
                  life and respect the community's character, ensuring minimal disruption while
                  maximizing your property's beauty.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  From routine maintenance to specialized services, we tailor our approach to fit
                  the Highlands' unique urban environment. Our experienced crew uses
                  professional-grade equipment sized appropriately for city lots, and we're careful
                  to protect the architectural details and mature landscaping that make Highlands
                  homes special. Contact us today for a free estimate and join the hundreds of
                  satisfied Highlands residents who trust Aaron's Lawn Care to keep their properties
                  looking beautiful year-round.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Our Highlands Lawn Care Services
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
                      <strong>Urban Lot Lawn Mowing:</strong> Specialized equipment for smaller
                      yards and tight spaces typical of Highlands properties
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
                      <strong>Shade Garden Maintenance:</strong> Expert care for lawns growing
                      under Highlands' mature tree canopy
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
                      <strong>Sidewalk & Curb Edging:</strong> Clean edges along sidewalks to
                      maintain that manicured urban look
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
                      <strong>Seasonal Leaf Removal:</strong> Complete fall cleanup for the
                      abundant leaves from mature street trees
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
                      <strong>Historic Property Landscaping:</strong> Careful maintenance that
                      respects and enhances vintage architecture
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
                      <strong>Mulching & Bed Care:</strong> Fresh mulch and bed maintenance to
                      enhance curb appeal
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
                      <strong>Spring & Fall Cleanup:</strong> Seasonal services to keep your yard
                      beautiful throughout the year
                    </span>
                  </li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Why Highlands Homeowners Choose Aaron's Lawn Care
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ 20+ years serving the Highlands community</li>
                    <li>✓ Specialized knowledge of urban yard maintenance</li>
                    <li>✓ Equipment sized for city lots and narrow access</li>
                    <li>✓ Respectful of historic properties and neighborhoods</li>
                    <li>✓ Flexible scheduling around street parking and events</li>
                    <li>✓ Licensed, insured, and locally owned business</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Highlands Lawn Care: Understanding Your Neighborhood
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  The Highlands isn't like other Louisville neighborhoods, and your lawn care
                  provider needs to understand that. With narrower lots, established trees creating
                  significant shade, on-street parking, and a pedestrian-friendly environment, lawn
                  care here requires a different approach. We've been navigating these unique
                  conditions for over two decades, from the Original Highlands to the Deer Park area
                  and everywhere in between.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Whether you're near the shops and restaurants on Bardstown Road, in the quiet
                  residential streets off Cherokee Parkway, or anywhere else in the Highlands
                  community, we bring the same level of professionalism and care to every property.
                  We understand the importance of maintaining the neighborhood's character while
                  keeping your yard looking its absolute best.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready for Expert Lawn Care in the Highlands?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Get your free, no-obligation quote today. We'll visit your property and provide a
                  detailed estimate tailored to your urban yard's unique needs.
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

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Highlands Residents Say
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
                  "Perfect for our smaller Highlands yard! Aaron's crew is careful around our
                  vintage landscaping and always leaves everything looking immaculate. They
                  understand urban properties."
                </p>
                <p className="text-gray-900 font-semibold">- Sarah P., Highlands</p>
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
                  "We've used Aaron's for years on Cherokee Parkway. They work around street parking
                  and foot traffic without any issues. Reliable, professional, and our lawn looks
                  great!"
                </p>
                <p className="text-gray-900 font-semibold">- Michael T., Highlands</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HighlandsPage;
