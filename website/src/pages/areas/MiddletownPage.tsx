import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function MiddletownPage() {
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
        name: 'Middletown',
        item: 'https://aaronslawncare502.com/areas/middletown',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aaronslawncare502.com/areas/middletown',
    name: "Aaron's Lawn Care - Middletown",
    image: 'https://aaronslawncare502.com/og-image.jpg',
    description:
      'Professional lawn care services in Middletown, Louisville, Kentucky. Serving Middletown residents with expert lawn maintenance for over 20 years.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Serving Middletown',
      addressLocality: 'Louisville',
      addressRegion: 'KY',
      postalCode: '40243',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.2439,
      longitude: -85.5297,
    },
    url: 'https://aaronslawncare502.com/areas/middletown',
    telephone: '+1-502-926-8524',
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Middletown',
      containedIn: {
        '@type': 'City',
        name: 'Louisville',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Lawn Care in Middletown, Louisville KY | Aaron's Lawn Care</title>
        <meta
          name="description"
          content="Professional lawn care services in Middletown, Louisville, Kentucky. Mowing, edging, landscaping & more. 20+ years serving Middletown residents. Free quotes!"
        />
        <link rel="canonical" href="https://aaronslawncare502.com/areas/middletown" />
        <script type="application/ld+json">
          {JSON.stringify([breadcrumbSchema, localBusinessSchema])}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">
                Lawn Care Services in Middletown, Louisville KY
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                Professional Lawn Maintenance Serving Middletown Since 2004
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/quote"
                  className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:5029268524"
                  className="inline-block bg-white text-green-800 border-2 border-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Call Now: (502) 926-8524
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
                  When it comes to maintaining beautiful lawns in Middletown, Louisville, Aaron's Lawn Care has been the trusted choice for over 20 years. From the upscale neighborhoods along Shelbyville Road to the family-friendly communities near English Station, we've helped countless homeowners achieve the lush, healthy lawns they deserve.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Middletown is known for its spacious properties, well-established neighborhoods like Worthington and Hunting Creek, and residents who take pride in their home's appearance. Our team understands the unique needs of Middletown lawns, from managing the larger lot sizes common in the area to maintaining the fescue and bluegrass blends that thrive here. We're familiar with every part of the community, from Middletown Elementary to Eastwood Community Park, and we bring that local knowledge to every property we service.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Our Middletown customers appreciate our reliability, attention to detail, and commitment to excellence. Whether you live near The Parklands, off English Station Road, or anywhere in the Middletown area, we treat your lawn with the professional care it deserves. We understand that your lawn is an investment in your property's value, and we take pride in helping you maintain a yard that stands out in this prestigious community.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  From routine mowing and edging to seasonal cleanups and landscape maintenance, Aaron's Lawn Care delivers comprehensive services that keep Middletown lawns looking their best year-round. Our experienced team uses professional-grade equipment and proven techniques to ensure superior results with every visit. Contact us today for a free estimate and discover why Middletown residents have trusted us for over two decades.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Our Middletown Lawn Care Services
                </h2>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">
                      <strong>Weekly & Bi-Weekly Lawn Mowing:</strong> Professional cutting with precise edging along driveways and walkways
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">
                      <strong>String Trimming & Edging:</strong> Clean, crisp edges for a manicured appearance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">
                      <strong>Leaf Removal & Fall Cleanup:</strong> Complete yard cleanup for Middletown's large properties
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">
                      <strong>Mulching & Bed Maintenance:</strong> Fresh mulch installation and landscape bed care
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">
                      <strong>Shrub Trimming & Pruning:</strong> Keep your landscaping neat and healthy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">
                      <strong>Spring & Fall Cleanup:</strong> Seasonal services to prepare your lawn for changing weather
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">
                      <strong>Debris Removal & Cleanup:</strong> Complete cleanup after every service
                    </span>
                  </li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Why Middletown Homeowners Choose Aaron's Lawn Care
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Over 20 years serving the Middletown community</li>
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
                  Ready for a Beautiful Lawn in Middletown?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Get your free, no-obligation quote today. We'll assess your property and provide a detailed estimate for our services.
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
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Middletown Residents Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Aaron's team does an excellent job with our large property in Middletown. Always professional, always on time, and our lawn looks amazing. Couldn't ask for better service!"
                </p>
                <p className="text-gray-900 font-semibold">- David T., Middletown</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "We've used Aaron's Lawn Care for 3 years now. They handle everything from weekly mowing to seasonal cleanup. Reliable, affordable, and our yard is the envy of the neighborhood!"
                </p>
                <p className="text-gray-900 font-semibold">- Lisa M., Middletown</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
