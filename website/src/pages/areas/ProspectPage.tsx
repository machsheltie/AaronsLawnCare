import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ProspectPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aaronslawncare502.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://aaronslawncare502.com/areas' },
      { '@type': 'ListItem', position: 3, name: 'Prospect', item: 'https://aaronslawncare502.com/areas/prospect' },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aaronslawncare502.com/areas/prospect',
    name: "Aaron's Lawn Care - Prospect",
    image: 'https://aaronslawncare502.com/og-image.jpg',
    description: 'Professional lawn care services in Prospect, Louisville, Kentucky. Serving Prospect residents with expert lawn maintenance for over 20 years.',
    address: { '@type': 'PostalAddress', streetAddress: 'Serving Prospect', addressLocality: 'Louisville', addressRegion: 'KY', postalCode: '40059', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 38.3489, longitude: -85.6153 },
    url: 'https://aaronslawncare502.com/areas/prospect',
    telephone: '+1-502-926-8524',
    priceRange: '$$',
    areaServed: { '@type': 'City', name: 'Prospect', containedIn: { '@type': 'City', name: 'Louisville' } },
  };

  return (
    <>
      <Helmet>
        <title>Lawn Care in Prospect, Louisville KY | Aaron's Lawn Care</title>
        <meta name="description" content="Professional lawn care services in Prospect, Louisville, Kentucky. Mowing, edging, landscaping & more. 20+ years serving Prospect residents. Free quotes!" />
        <link rel="canonical" href="https://aaronslawncare502.com/areas/prospect" />
        <script type="application/ld+json">{JSON.stringify([breadcrumbSchema, localBusinessSchema])}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">Lawn Care Services in Prospect, Louisville KY</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">Professional Lawn Maintenance Serving Prospect Since 2004</p>
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
                  When it comes to maintaining beautiful lawns in Prospect, Louisville, Aaron's Lawn Care has been the trusted choice for over 20 years. From the elegant estates along US Highway 42 to the charming neighborhoods near Harrods Creek, we've helped countless homeowners achieve the pristine, healthy lawns that reflect Prospect's upscale community standards.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Prospect is renowned for its luxury homes, expansive properties, and residents who demand excellence in every detail. Our team understands the unique needs of Prospect's premium lawns, from managing large acreages to maintaining the manicured appearance expected in neighborhoods like Norton Commons and Harmony Landing. We're familiar with the area's rolling terrain, from River Road to Old Brownsboro Road, and we bring specialized equipment and expertise to handle properties of any size.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Our Prospect customers appreciate our professionalism, discretion, and commitment to perfection. Whether your estate overlooks the Ohio River, borders Covered Bridge Golf Club, or sits in one of Prospect's exclusive subdivisions, we treat your property with the exceptional care it deserves. We understand that in Prospect, your lawn is a statement of pride and sophistication, and we're honored to help you maintain grounds that enhance your property's beauty and value.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  From weekly maintenance of extensive lawns to specialized landscape services, Aaron's Lawn Care delivers the premium results Prospect homeowners expect. Our experienced team uses commercial-grade equipment and refined techniques to ensure your property always looks its absolute best. Contact us today for a complimentary estimate and discover why Prospect's most discerning residents trust us with their lawn care.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Prospect Lawn Care Services</h2>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Estate Lawn Maintenance:</strong> Professional care for large properties and extensive grounds</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Precision Mowing & Edging:</strong> Immaculate cuts with crisp, defined edges</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Premium Landscaping Services:</strong> Custom design and meticulous maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Seasonal Property Care:</strong> Complete spring and fall cleanup services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Specialized Tree & Shrub Care:</strong> Expert pruning and health management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Mulch & Bed Installation:</strong> Fresh, professional landscape bed finishing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Year-Round Property Management:</strong> Consistent, reliable service in all seasons</span>
                  </li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Prospect Homeowners Choose Aaron's Lawn Care</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Over 20 years serving Prospect's premium properties</li>
                    <li>✓ Licensed, insured, and fully bonded</li>
                    <li>✓ Commercial-grade equipment and specialized expertise</li>
                    <li>✓ Discreet, professional service</li>
                    <li>✓ Customized maintenance programs</li>
                    <li>✓ 100% satisfaction guarantee</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Exceptional Lawn Care in Prospect?</h3>
                <p className="text-lg text-gray-700 mb-6">Get your complimentary, no-obligation consultation today. We'll assess your property and provide a detailed proposal for our services.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/quote" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">Request Free Consultation</Link>
                  <a href="tel:5029268524" className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">Call (502) 926-8524</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Prospect Residents Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (<svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"Aaron's team provides impeccable service for our 3-acre property. They understand the level of quality we expect in Prospect and consistently deliver. Absolutely top-notch!"</p>
                <p className="text-gray-900 font-semibold">- William H., Prospect</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (<svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"We've tried several lawn services over the years, but Aaron's is the only one that meets our standards. Professional, reliable, and our grounds have never looked better."</p>
                <p className="text-gray-900 font-semibold">- Katherine P., Prospect</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
