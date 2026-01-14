import { Link } from 'react-router-dom';
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
  Brush,
  Trash2,
  Home,
  Sparkles,
  Axe,
  Calendar
} from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';
import { getServicesPageSEO } from '@/utils/seo-meta';
import { generateBreadcrumbSchema, schemaToJsonLd } from '@/utils/schemas';
import { Button } from '@/components/ui/Button';

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
  {
    id: 'aeration',
    title: 'Lawn Aeration',
    description: 'Professional core aeration to relieve soil compaction, improve nutrient absorption, and strengthen your lawn.',
    icon: Wind,
    path: '/services/aeration',
    seasonal: 'Spring, Fall',
  },
  {
    id: 'lawn-treatment',
    title: 'Lawn Treatment & Fertilization',
    description: 'Customized fertilization and weed control programs to keep your lawn healthy, green, and weed-free.',
    icon: Sprout,
    path: '/services/lawn-treatment',
    seasonal: 'Spring, Summer, Fall',
  },
  {
    id: 'debris-removal',
    title: 'Debris & Yard Waste Removal',
    description: 'Fast, reliable removal of storm debris, branches, and yard waste to keep your property clean and safe.',
    icon: Trash2,
    path: '/services/debris-removal',
    seasonal: 'Year-round',
  },
  {
    id: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    description: 'Thorough gutter cleaning to prevent water damage, protect your foundation, and maintain proper drainage.',
    icon: Home,
    path: '/services/gutter-cleaning',
    seasonal: 'Spring, Fall',
  },
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    description: 'Professional pressure washing for driveways, patios, decks, and siding to restore your property\'s beauty.',
    icon: Sparkles,
    path: '/services/pressure-washing',
    seasonal: 'Spring, Summer',
  },
  {
    id: 'tree-removal',
    title: 'Tree Removal',
    description: 'Safe, professional removal of dead, diseased, or hazardous trees with optional stump grinding.',
    icon: Axe,
    path: '/services/tree-removal',
    seasonal: 'Year-round',
  },
  {
    id: 'seasonal-cleanup',
    title: 'Seasonal Cleanup',
    description: 'Comprehensive spring and fall cleanup services to prepare your property for changing seasons.',
    icon: Calendar,
    path: '/services/seasonal-cleanup',
    seasonal: 'Spring, Fall',
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://aaronslawncare502.com' },
    { name: 'Services', url: 'https://aaronslawncare502.com/services' }
  ]);

  return (
    <>
      <SEOHead {...getServicesPageSEO()} schemaMarkup={schemaToJsonLd(breadcrumbSchema)} />

      {/* Hero Section */}
      <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green-900">
              Professional Lawn Care Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              From routine maintenance to complete landscaping transformations, we've got your lawn covered.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-green-700 transform hover:scale-105 transition-all"
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Ready to Transform Your Lawn?
              </h2>
              <p className="text-lg text-primary-100 mb-10">
                Get your free quote today and discover why Louisville homeowners trust us with their outdoor spaces.
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
    </>
  );
}
