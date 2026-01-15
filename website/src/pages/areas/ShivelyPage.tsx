import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ShivelyPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aaronslawncare502.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://aaronslawncare502.com/areas' },
      { '@type': 'ListItem', position: 3, name: 'Shively', item: 'https://aaronslawncare502.com/areas/shively' },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aaronslawncare502.com/areas/shively',
    name: "Aaron's Lawn Care - Shively",
    image: 'https://aaronslawncare502.com/og-image.jpg',
    description: 'Professional lawn care services in Shively, Louisville, Kentucky. Serving Shively residents with expert lawn maintenance for over 20 years.',
    address: { '@type': 'PostalAddress', streetAddress: 'Serving Shively', addressLocality: 'Louisville', addressRegion: 'KY', postalCode: '40216', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 38.2009, longitude: -85.8227 },
    url: 'https://aaronslawncare502.com/areas/shively',
    telephone: '+1-502-926-8524',
    priceRange: '$$',
    areaServed: { '@type': 'City', name: 'Shively', containedIn: { '@type': 'City', name: 'Louisville' } },
  };

  return (
    <>
      <Helmet>
        <title>Lawn Care in Shively, Louisville KY | Aaron's Lawn Care</title>
        <meta name="description" content="Professional lawn care services in Shively, Louisville, Kentucky. Mowing, edging, landscaping & more. 20+ years serving Shively residents. Free quotes!" />
        <link rel="canonical" href="https://aaronslawncare502.com/areas/shively" />
        <script type="application/ld+json">{JSON.stringify([breadcrumbSchema, localBusinessSchema])}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">Lawn Care Services in Shively, Louisville KY</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">Professional Lawn Maintenance Serving Shively Since 2004</p>
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
                  When it comes to maintaining beautiful lawns in Shively, Louisville, Aaron's Lawn Care has been the trusted choice for over 20 years. From the neighborhoods along Dixie Highway to the residential streets throughout this close-knit community, we've helped countless homeowners achieve the healthy, attractive lawns they deserve.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Shively is known for its hardworking residents, strong community spirit, and families who take pride in their homes. Our team understands the unique needs of Shively lawns, from managing Kentucky's varying weather to maintaining grass that thrives in our local climate. We're familiar with every part of Shively and bring that neighborhood knowledge to every property we service.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Our Shively customers appreciate our reliability, honest pricing, and commitment to quality service. Whether you live near Shively Park, along Southside Drive, or anywhere in the Shively area, we treat your lawn with the professional care it deserves. We understand that your lawn is an investment in your home, and we take pride in helping you maintain a yard that looks great and enhances your property.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  From routine mowing and edging to seasonal cleanups and landscape maintenance, Aaron's Lawn Care delivers comprehensive services that keep Shively lawns looking their best year-round. Our experienced team uses professional equipment and proven techniques to ensure superior results with every visit. Contact us today for a free estimate and discover why Shively residents have trusted us for over two decades.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Shively Lawn Care Services</h2>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Weekly & Bi-Weekly Lawn Mowing:</strong> Professional cutting with precise edging</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>String Trimming & Edging:</strong> Clean, crisp edges for a well-maintained look</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Leaf Removal & Fall Cleanup:</strong> Complete yard cleanup for fall season</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Mulching & Bed Maintenance:</strong> Fresh mulch and landscape bed care</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg"><strong>Shrub Trimming & Pruning:</strong> Keep your landscaping neat and healthy</span>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Shively Homeowners Choose Aaron's Lawn Care</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Over 20 years serving the Shively community</li>
                    <li>✓ Licensed, insured, and locally owned</li>
                    <li>✓ Professional equipment and experienced crew</li>
                    <li>✓ Reliable service with consistent quality</li>
                    <li>✓ Free estimates and honest pricing</li>
                    <li>✓ Satisfaction guaranteed on every service</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for a Beautiful Lawn in Shively?</h3>
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Shively Residents Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (<svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"Aaron's team does great work at a fair price. They've been taking care of our lawn for years and we're always happy with the results. Reliable and professional!"</p>
                <p className="text-gray-900 font-semibold">- Thomas B., Shively</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (<svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"Best lawn service in Shively! They show up when they say they will, do excellent work, and always clean up after themselves. Highly recommend to all my neighbors!"</p>
                <p className="text-gray-900 font-semibold">- Maria G., Shively</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
