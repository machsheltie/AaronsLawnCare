import { Helmet } from 'react-helmet-async';
import { Star, MapPin, Calendar } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  initials: string;
  location: string;
  date: string;
  rating: 5 | 4;
  service: string;
  review: string;
  featured?: boolean;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    initials: 'SM',
    location: 'St. Matthews',
    date: 'November 2025',
    rating: 5,
    service: 'Weekly Lawn Mowing',
    review: "Aaron's Lawn Care has been taking care of my property for over 5 years. They're always on time, professional, and my lawn has never looked better! I especially appreciate the consistent quality - every single week, my lawn looks like it belongs in a magazine. Aaron takes real pride in his work and it shows.",
    featured: true,
  },
  {
    id: '2',
    name: 'James Thompson',
    initials: 'JT',
    location: 'Highlands',
    date: 'October 2025',
    rating: 5,
    service: 'Landscaping & Design',
    review: "Best lawn service in Louisville! Fair prices, great communication, and they genuinely care about making your lawn look amazing. Aaron transformed our front yard with a beautiful landscape design that gets compliments from neighbors constantly. The quality of work exceeded our expectations.",
    featured: true,
  },
  {
    id: '3',
    name: 'Linda Rodriguez',
    initials: 'LR',
    location: 'Okolona',
    date: 'September 2025',
    rating: 5,
    service: 'Fall Cleanup',
    review: "I've tried several lawn services over the years, but Aaron's is the only one I trust. They're reliable, affordable, and do exceptional work every single time. The fall cleanup was thorough and efficient - they removed every leaf and left my property looking pristine. Highly recommend!",
    featured: true,
  },
  {
    id: '4',
    name: 'Michael Chen',
    initials: 'MC',
    location: 'Jeffersontown',
    date: 'August 2025',
    rating: 5,
    service: 'Mulching & Garden Beds',
    review: "Outstanding service from start to finish. Aaron is responsive, professional, and clearly knows his craft. The mulch installation transformed our garden beds - the color is vibrant and everything looks so well-maintained. Great value for the quality of work provided.",
  },
  {
    id: '5',
    name: 'Rebecca Turner',
    initials: 'RT',
    location: 'Middletown',
    date: 'July 2025',
    rating: 5,
    service: 'Weekly Mowing',
    review: "We've used Aaron's Lawn Care for two years now and couldn't be happier. They're punctual, meticulous, and always leave the property looking fantastic. The edging is crisp, the mowing pattern is perfect, and they clean up completely. Worth every penny!",
  },
  {
    id: '6',
    name: 'David Martinez',
    initials: 'DM',
    location: 'Prospect',
    date: 'June 2025',
    rating: 5,
    service: 'Hedge Trimming',
    review: "Aaron did an excellent job trimming our hedges and shrubs. They look professionally shaped and healthy. He's knowledgeable about plant care and gave us great advice on maintaining them between services. Will definitely hire again!",
  },
  {
    id: '7',
    name: 'Jessica Williams',
    initials: 'JW',
    location: 'East End',
    date: 'May 2025',
    rating: 5,
    service: 'Spring Cleanup',
    review: "The spring cleanup was exactly what our yard needed after winter. Aaron and his work were thorough and efficient. They cleared all the debris, edged perfectly, and even pointed out some drainage issues we weren't aware of. Great service!",
  },
  {
    id: '8',
    name: 'Robert Johnson',
    initials: 'RJ',
    location: 'Downtown Louisville',
    date: 'April 2025',
    rating: 5,
    service: 'General Landscaping',
    review: "Professional, reliable, and reasonably priced. Aaron transformed our neglected backyard into a space we actually want to spend time in. The attention to detail is impressive and the quality is consistently excellent.",
  },
  {
    id: '9',
    name: 'Amanda Foster',
    initials: 'AF',
    location: 'Anchorage',
    date: 'March 2025',
    rating: 4,
    service: 'Snow Removal',
    review: "Quick response for snow removal during last winter's storm. Aaron cleared our driveway and walkways promptly and thoroughly. Peace of mind knowing we have reliable service during harsh weather.",
  },
  {
    id: '10',
    name: 'Thomas Green',
    initials: 'TG',
    location: 'Lyndon',
    date: 'February 2025',
    rating: 5,
    service: 'Lawn Maintenance',
    review: "20+ years in business and it shows! The level of expertise and professionalism is unmatched. Aaron treats every property like it's his own. I've recommended him to all my neighbors and they're equally impressed.",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default function ReviewsPage() {
  const featuredReviews = reviews.filter(r => r.featured);
  const regularReviews = reviews.filter(r => !r.featured);
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <>
      <Helmet>
        <title>Customer Reviews | Aaron's Lawn Care Louisville KY</title>
        <meta
          name="description"
          content="Read reviews from our satisfied customers in Louisville, KY. 5-star rated lawn care service with 20+ years of experience. See why homeowners trust Aaron's Lawn Care."
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Customer Reviews | Aaron's Lawn Care Louisville KY" />
        <meta property="og:description" content="Read reviews from our satisfied customers in Louisville, KY. 5-star rated lawn care service with 20+ years of experience." />
        <meta property="og:url" content="https://aaronslawncare.com/reviews" />
        <meta property="og:site_name" content="Aaron's Lawn Care" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Customer Reviews | Aaron's Lawn Care Louisville KY" />
        <meta name="twitter:description" content="Read reviews from our satisfied customers in Louisville, KY. 5-star rated lawn care service with 20+ years of experience." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Don't just take our word for it. Here's what Louisville homeowners have to say about our services.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-4xl font-bold mb-1">{averageRating}</div>
                <div className="text-green-100 text-sm">Average Rating</div>
                <StarRating rating={5} />
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-4xl font-bold mb-1">{reviews.length}+</div>
                <div className="text-green-100 text-sm">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-4xl font-bold mb-1">20+</div>
                <div className="text-green-100 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our long-term customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-t-4 border-green-600"
              >
                <StarRating rating={review.rating} />

                <div className="mt-6 mb-4">
                  <p className="text-gray-700 leading-relaxed italic">
                    "{review.review}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {review.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {review.location}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-green-600">{review.service}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4" />
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Customer Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {regularReviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  "{review.review}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {review.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-sm font-semibold text-green-600">{review.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Summary */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Customers Choose Aaron's Lawn Care
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <p className="font-semibold text-gray-900">Customer Satisfaction</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-green-600 mb-2">5★</div>
                <p className="font-semibold text-gray-900">Average Rating</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
                <p className="font-semibold text-gray-900">Years Serving Louisville</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-green-100 max-w-3xl mx-auto">
            Experience the quality and professionalism that has earned us hundreds of 5-star reviews
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
