import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Scissors,
  Leaf,
  Droplets,
  TreeDeciduous,
  Shovel,
  Sprout,
  Wind,
  Snowflake,
  Grid2x2,
  Brush
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  path: string;
  seasonal?: string;
}

const services: Service[] = [
  {
    id: 'lawn-mowing',
    title: 'Lawn Mowing',
    description: 'Professional mowing services with precision edging and trimming for a perfectly manicured lawn every time.',
    icon: Grid2x2,
    path: '/services/lawn-mowing',
    seasonal: 'Spring, Summer, Fall',
  },
  {
    id: 'edging',
    title: 'Edging & Trimming',
    description: 'Clean, crisp edges along walkways, driveways, and garden beds for a polished, professional look.',
    icon: Scissors,
    path: '/services/edging',
    seasonal: 'Spring, Summer, Fall',
  },
  {
    id: 'leaf-removal',
    title: 'Leaf Removal',
    description: 'Thorough leaf cleanup to keep your lawn healthy and your property looking its best throughout fall.',
    icon: Leaf,
    path: '/services/leaf-removal',
    seasonal: 'Fall',
  },
  {
    id: 'mulching',
    title: 'Mulching',
    description: 'Premium mulch installation to protect your plants, retain moisture, and enhance your landscape\'s appearance.',
    icon: Shovel,
    path: '/services/mulching',
    seasonal: 'Spring, Summer',
  },
  {
    id: 'spring-cleanup',
    title: 'Spring Cleanup',
    description: 'Comprehensive spring cleanup to prepare your lawn and landscape for the growing season ahead.',
    icon: Sprout,
    path: '/services/spring-cleanup',
    seasonal: 'Spring',
  },
  {
    id: 'fall-cleanup',
    title: 'Fall Cleanup',
    description: 'Complete fall cleanup services to prepare your property for winter and ensure a healthy spring lawn.',
    icon: Wind,
    path: '/services/fall-cleanup',
    seasonal: 'Fall',
  },
  {
    id: 'hedge-trimming',
    title: 'Hedge Trimming',
    description: 'Professional hedge and shrub trimming to maintain shape, promote healthy growth, and enhance curb appeal.',
    icon: Scissors,
    path: '/services/hedge-trimming',
    seasonal: 'Spring, Summer, Fall',
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design',
    description: 'Custom landscape design services to transform your outdoor space into a beautiful, functional oasis.',
    icon: TreeDeciduous,
    path: '/services/landscape-design',
    seasonal: 'Year-round',
  },
  {
    id: 'landscape-maintenance',
    title: 'Landscape Maintenance',
    description: 'Ongoing landscape maintenance to keep your gardens, beds, and outdoor spaces looking their absolute best.',
    icon: Droplets,
    path: '/services/landscape-maintenance',
    seasonal: 'Year-round',
  },
  {
    id: 'snow-removal',
    title: 'Snow Removal',
    description: 'Reliable snow removal services to keep your property safe and accessible throughout the winter months.',
    icon: Snowflake,
    path: '/services/snow-removal',
    seasonal: 'Winter',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Lawn Care Services | Aaron's Lawn Care Louisville KY</title>
        <meta
          name="description"
          content="Professional lawn care and landscaping services in Louisville, KY. Mowing, edging, landscaping, snow removal, and more. 20+ years of experience. Get your free quote today!"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Lawn Care Services
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              From routine maintenance to complete landscaping transformations, we've got your lawn covered.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-800 font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-green-50 transform hover:scale-105 transition-all"
            >
              Get Your Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive lawn care and landscaping solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-8 group hover:scale-105 transform duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <service.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                {service.seasonal && (
                  <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded-full mb-4">
                    {service.seasonal}
                  </div>
                )}
                <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Year-Round Care
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide services tailored to each season's unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Spring */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sprout className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Spring</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Spring Cleanup</li>
                  <li>Lawn Mowing</li>
                  <li>Mulching</li>
                  <li>Landscape Design</li>
                </ul>
              </div>

              {/* Summer */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TreeDeciduous className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Summer</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Weekly Mowing</li>
                  <li>Edging & Trimming</li>
                  <li>Hedge Trimming</li>
                  <li>Landscape Maintenance</li>
                </ul>
              </div>

              {/* Fall */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fall</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Leaf Removal</li>
                  <li>Fall Cleanup</li>
                  <li>Lawn Mowing</li>
                  <li>Hedge Trimming</li>
                </ul>
              </div>

              {/* Winter */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Snowflake className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Winter</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Snow Removal</li>
                  <li>Winter Prep</li>
                  <li>Planning & Design</li>
                  <li>Consultations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Aaron's Lawn Care?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-5xl font-bold text-green-600 mb-2">20+</div>
                <p className="text-gray-700 font-semibold">Years of Experience</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-gray-700 font-semibold">Customer Satisfaction</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-600 mb-2">500+</div>
                <p className="text-gray-700 font-semibold">Happy Customers</p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Learn More About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Lawn?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-green-100 max-w-3xl mx-auto">
            Get your free quote today and discover why Louisville homeowners trust us with their outdoor spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-green-800 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-green-50 transform hover:scale-105 transition-all"
            >
              Get Your Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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
