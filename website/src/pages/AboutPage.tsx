import { Helmet } from 'react-helmet-async';
import { Shield, Award, MapPin, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Aaron's Lawn Care - 20+ Years Serving Louisville KY</title>
        <meta
          name="description"
          content="Learn about Aaron's Lawn Care - a family-owned business with 20+ years of professional lawn care experience in Louisville, Kentucky. Fully insured and committed to quality."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green-900">
              20+ Years of Excellence in Lawn Care
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              A locally-owned business dedicated to making Louisville properties beautiful, one lawn at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                For over 20 years, Aaron's Lawn Care has been proudly serving the greater Louisville area
                with professional, reliable lawn care and landscaping services. What started as a one-person
                operation with a single mower has grown into a trusted name in the community, known for
                quality work and exceptional customer service.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                As a solo operator, Aaron brings personal attention to every property. You're not just
                another job number—you're a neighbor. This hands-on approach means consistent quality,
                direct communication, and lawn care that's done right the first time, every time.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our business is built on the simple principle that your lawn should be something you're
                proud of. Whether it's weekly mowing, seasonal cleanups, or complete landscape transformations,
                we treat every property as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence goes beyond just cutting grass
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Experience */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">20+ Years Experience</h3>
              <p className="text-gray-600">
                Two decades of professional lawn care expertise serving Louisville homeowners.
              </p>
            </div>

            {/* Local */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Locally Owned</h3>
              <p className="text-gray-600">
                A family-owned business deeply rooted in the Louisville community.
              </p>
            </div>

            {/* Insured */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Insured</h3>
              <p className="text-gray-600">
                Comprehensive insurance coverage for your peace of mind and property protection.
              </p>
            </div>

            {/* Personal Service */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Attention</h3>
              <p className="text-gray-600">
                Direct communication with Aaron—no middlemen, just quality service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Commitment to You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Workmanship</h3>
                  <p className="text-gray-600">
                    Every job is completed to the highest standards. If you're not satisfied, we'll make it right.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Service</h3>
                  <p className="text-gray-600">
                    We show up when we say we will, and we communicate clearly throughout every project.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Pricing</h3>
                  <p className="text-gray-600">
                    Honest, transparent pricing with no hidden fees. You'll know exactly what to expect.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Respect for Property</h3>
                  <p className="text-gray-600">
                    We treat every lawn and landscape as if it were our own, with care and attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proudly Serving Greater Louisville
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We provide professional lawn care services throughout the Louisville area, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                'St. Matthews',
                'Highlands',
                'Okolona',
                'Jeffersontown',
                'Middletown',
                'Prospect',
                'Downtown',
                'East End',
              ].map((area) => (
                <div key={area} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <p className="font-semibold text-gray-900">{area}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              Don't see your area listed? Give us a call—we may still be able to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-green-100 max-w-3xl mx-auto">
            Join hundreds of satisfied Louisville homeowners who trust Aaron's Lawn Care
            with their outdoor spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-green-800 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-green-50 transform hover:scale-105 transition-all"
            >
              Get Your Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:5029268524"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-900 bg-opacity-50 text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-opacity-70 transform hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (502) 926-8524
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
