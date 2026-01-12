import React from 'react';
import { SEOHead } from '../../components/common/SEOHead';

const JeffersontownPage: React.FC = () => {
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
        name: 'Jeffersontown',
        item: 'https://aaronslawncare502.com/areas/jeffersontown',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aaronslawncare502.com/areas/jeffersontown',
    name: "Aaron's Lawn Care - Jeffersontown",
    image: 'https://aaronslawncare502.com/images/logo.png',
    description:
      'Professional lawn care services in Jeffersontown, Louisville, Kentucky. Serving Jeffersontown residents for over 20 years.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Serving Jeffersontown',
      addressLocality: 'Louisville',
      addressRegion: 'KY',
      postalCode: '40299',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.1942,
      longitude: -85.5644,
    },
    url: 'https://aaronslawncare502.com/areas/jeffersontown',
    telephone: '+1-502-123-4567',
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Jeffersontown',
      containedIn: {
        '@type': 'City',
        name: 'Louisville',
      },
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 38.1942,
        longitude: -85.5644,
      },
      geoRadius: '8000',
    },
  };

  return (
    <>
      <SEOHead
        title="Lawn Care in Jeffersontown, Louisville KY | Aaron's Lawn Care"
        description="Professional lawn care services in Jeffersontown, Louisville, Kentucky. Mowing, edging, landscaping & more. 20+ years serving Jeffersontown residents. Free quotes!"
        canonicalUrl="https://aaronslawncare502.com/areas/jeffersontown"
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
                Lawn Care Services in Jeffersontown, Louisville KY
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                Trusted Lawn Maintenance for Jeffersontown Homes Since 2004
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
                  Jeffersontown, affectionately known as "J-Town" by locals, is a thriving suburban
                  community with a strong sense of pride in homeownership and property maintenance.
                  For over 20 years, Aaron's Lawn Care has been the trusted choice for Jeffersontown
                  residents who want beautiful, healthy lawns without the time and effort required
                  to maintain them. From the established neighborhoods along Watterson Trail to the
                  newer developments off Taylorsville Road, we've built a reputation for reliable,
                  high-quality lawn care service throughout J-Town.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Jeffersontown properties range from cozy starter homes to spacious estates with
                  extensive landscaping, and we have the experience and equipment to handle them
                  all. Whether you're near Veteran's Memorial Park, in one of the neighborhoods off
                  Bluegrass Parkway, or anywhere in the Jeffersontown area, our team understands the
                  local soil conditions, grass types, and seasonal challenges that come with
                  maintaining lawns in this part of Jefferson County. We know that J-Town homeowners
                  take pride in their properties, and we're committed to helping you maintain a lawn
                  that reflects that pride.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  What sets Aaron's Lawn Care apart in Jeffersontown is our consistency and
                  reliability. We show up when scheduled, deliver the same high-quality results with
                  every visit, and treat your property with the respect it deserves. Our customers
                  along Indian Springs Drive, Ruckriegel Parkway, and throughout J-Town appreciate
                  that they can count on us week after week, season after season. We're not just
                  another lawn service—we're your neighbors, invested in keeping Jeffersontown
                  looking its best.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  From regular mowing and edging to seasonal cleanups and landscape bed maintenance,
                  Aaron's Lawn Care provides comprehensive services designed to keep Jeffersontown
                  lawns healthy and beautiful throughout the year. Our professional crew uses
                  commercial-grade equipment and proven techniques to deliver superior results. We
                  understand the unique needs of J-Town properties, from managing the region's clay
                  soil to dealing with hot Kentucky summers. Contact us today for a free estimate
                  and discover why Jeffersontown residents have trusted us for over two decades.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Our Jeffersontown Lawn Care Services
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
                      <strong>Weekly & Bi-Weekly Mowing:</strong> Consistent, professional cutting
                      with precise height adjustment for healthy grass
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
                      <strong>String Trimming & Edging:</strong> Sharp, clean edges along
                      driveways, sidewalks, and beds
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
                      <strong>Blowing & Cleanup:</strong> Complete debris removal from hard
                      surfaces after every service
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
                      <strong>Fall Leaf Removal:</strong> Comprehensive leaf cleanup to protect
                      your lawn through winter
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
                      landscape bed care to enhance curb appeal
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
                      <strong>Shrub Trimming:</strong> Professional pruning to keep bushes and
                      hedges neat and healthy
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
                      property for changing weather
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
                      <strong>Large Property Services:</strong> Equipment and expertise to handle
                      J-Town's larger suburban lots
                    </span>
                  </li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Why Jeffersontown Homeowners Choose Aaron's Lawn Care
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Over 20 years serving the Jeffersontown community</li>
                    <li>✓ Locally owned and operated in Jefferson County</li>
                    <li>✓ Professional equipment for properties of all sizes</li>
                    <li>✓ Consistent, reliable service you can count on</li>
                    <li>✓ Licensed and fully insured for your protection</li>
                    <li>✓ Free estimates with transparent, competitive pricing</li>
                    <li>✓ 100% satisfaction guaranteed on every service</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Serving All of Jeffersontown
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  We're proud to serve the entire Jeffersontown community, from long-established
                  neighborhoods to newer developments. Whether you're located near Watterson Trail,
                  off Taylorsville Road, around Bluegrass Parkway, or anywhere else in J-Town, Aaron's
                  Lawn Care brings the same dedication and expertise to every property. We know the
                  area well—from the shopping centers along Hurstbourne Parkway to the peaceful
                  residential streets throughout the community.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Jeffersontown homeowners have specific expectations for their properties, and we
                  meet them consistently. Our familiarity with local conditions, combined with our
                  professional approach and reliable service, makes us the preferred choice for lawn
                  care in J-Town. We understand that your home is your biggest investment, and we're
                  committed to helping you protect and enhance that investment with beautiful,
                  well-maintained landscaping.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready for Beautiful Lawn Care in Jeffersontown?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Get your free, no-obligation quote today. We'll visit your J-Town property and
                  provide a detailed estimate customized to your lawn's needs.
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
              What Jeffersontown Residents Say
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
                  "Aaron's team has maintained our lawn off Watterson Trail for 8 years. They're
                  always on time, professional, and do an excellent job. Our yard is the envy of the
                  neighborhood!"
                </p>
                <p className="text-gray-900 font-semibold">- David L., Jeffersontown</p>
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
                  "Best lawn service in J-Town! We've used several companies over the years, but
                  Aaron's is the only one that's been consistently reliable. Great quality at a fair
                  price."
                </p>
                <p className="text-gray-900 font-semibold">- Karen W., Jeffersontown</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JeffersontownPage;
