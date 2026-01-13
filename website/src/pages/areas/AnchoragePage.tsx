import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AnchoragePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aaronslawncare502.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://aaronslawncare502.com/areas' },
      { '@type': 'ListItem', position: 3, name: 'Anchorage', item: 'https://aaronslawncare502.com/areas/anchorage' },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aaronslawncare502.com/areas/anchorage',
    name: "Aaron's Lawn Care - Anchorage",
    image: 'https://aaronslawncare502.com/og-image.jpg',
    description: 'Professional lawn care services in Anchorage, Louisville, Kentucky. Serving Anchorage residents with expert lawn maintenance for over 20 years.',
    address: { '@type': 'PostalAddress', streetAddress: 'Serving Anchorage', addressLocality: 'Louisville', addressRegion: 'KY', postalCode: '40223', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 38.2625, longitude: -85.5386 },
    url: 'https://aaronslawncare502.com/areas/anchorage',
    telephone: '+1-502-926-8524',
    priceRange: '$$',
    areaServed: { '@type': 'City', name: 'Anchorage', containedIn: { '@type': 'City', name: 'Louisville' } },
  };

  return (
    <>
      <Helmet>
        <title>Lawn Care in Anchorage, Louisville KY | Aaron's Lawn Care</title>
        <meta name="description" content="Professional lawn care services in Anchorage, Louisville, Kentucky. Mowing, edging, landscaping & more. 20+ years serving Anchorage residents. Free quotes!" />
        <link rel="canonical" href="https://aaronslawncare502.com/areas/anchorage" />
        <script type="application/ld+json">{JSON.stringify([breadcrumbSchema, localBusinessSchema])}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">Lawn Care Services in Anchorage, Louisville KY</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">Professional Lawn Maintenance Serving Anchorage Since 2004</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/quote" className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">Get Free Quote</Link>
                <a href="tel:5029268524" className="inline-block bg-white text-green-800 border-2 border-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">Call Now: (502) 926-8524</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  When it comes to maintaining beautiful lawns in Anchorage, Louisville, Aaron's Lawn Care has been the trusted choice for over 20 years. From the historic homes along Evergreen Road to the tree-lined streets throughout this charming small city, we've helped countless homeowners achieve the healthy, well-maintained lawns that reflect Anchorage's distinctive character.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Anchorage is known for its rich history, mature landscapes, small-town atmosphere, and residents who value quality and tradition. Our team understands the unique needs of Anchorage properties, from managing established lawns under mature tree canopies to maintaining the pristine appearance expected in this historic community. We're familiar with every street in Anchorage and bring that local expertise to every property we service.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Our Anchorage customers appreciate our professionalism, attention to detail, and respect for the community's heritage. Whether your home sits near the Anchorage Trail, along Transylvania Beach Road, or anywhere in this beautiful city, we treat your lawn with the care and precision it deserves. We understand that in Anchorage, your lawn is part of the community's legacy, and we take pride in helping you maintain a yard that honors that tradition.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  From routine mowing and edging to seasonal cleanups and specialized tree care, Aaron's Lawn Care delivers comprehensive services that keep Anchorage lawns looking their best year-round. Our experienced team uses professional equipment and time-tested techniques to ensure superior results with every visit. Contact us today for a free estimate and discover why Anchorage residents have trusted us for over two decades.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Anchorage Lawn Care Services</h2>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Weekly & Bi-Weekly Lawn Mowing:</strong> Professional cutting adapted to mature landscapes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>String Trimming & Edging:</strong> Precise edging to complement established landscaping</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Leaf Removal & Fall Cleanup:</strong> Complete cleanup of leaves from mature trees</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Mulching & Bed Maintenance:</strong> Fresh mulch and care for established landscape beds</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Tree & Shrub Care:</strong> Expert care for mature trees and historic landscaping</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Spring & Fall Cleanup:</strong> Seasonal services for Kentucky's changing weather</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Debris Removal & Cleanup:</strong> Complete cleanup after every service</span>
                  </li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Anchorage Homeowners Choose Aaron's Lawn Care</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Over 20 years serving the Anchorage community</li>
                    <li>✓ Licensed, insured, and locally owned</li>
                    <li>✓ Professional equipment and experienced crew</li>
                    <li>✓ Respect for historic properties and mature landscapes</li>
                    <li>✓ Free estimates and competitive pricing</li>
                    <li>✓ Satisfaction guaranteed on every service</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for a Beautiful Lawn in Anchorage?</h3>
                <p className="text-lg text-gray-700 mb-6">Get your free, no-obligation quote today. We'll assess your property and provide a detailed estimate for our services.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/quote" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">Request Free Quote</Link>
                  <a href="tel:5029268524" className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">Call (502) 926-8524</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Anchorage Residents Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (<svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"Aaron's team understands historic properties. They take great care around our mature trees and always leave the yard looking immaculate. Couldn't ask for better service!"</p>
                <p className="text-gray-900 font-semibold">- Robert M., Anchorage</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (<svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"Professional, reliable, and respectful of our property. They've been maintaining our lawn for years and it's never looked better. Highly recommend to all Anchorage neighbors!"</p>
                <p className="text-gray-900 font-semibold">- Elizabeth S., Anchorage</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
