import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';
import { getFAQPageSEO } from '@/utils/seo-meta';
import { generateFAQSchema, schemaToJsonLd } from '../utils/schemas';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  icon: string;
  questions: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    category: "Pricing & Quotes",
    icon: "💰",
    questions: [
      {
        question: "How much does lawn mowing cost in Louisville?",
        answer: "Average lawn mowing costs $35-$75 per visit depending on lawn size. Small lawns (under 5,000 sq ft) typically cost $35-45, medium lawns (5,000-10,000 sq ft) cost $45-60, and larger lawns (10,000+ sq ft) cost $60-75 or more. We provide free quotes to give you accurate pricing."
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes! We provide free, no-obligation quotes for all services. We can often provide estimates over the phone for standard services, or we'll schedule an on-site visit to assess your property and provide accurate pricing."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, checks, and all major credit cards. Payment is typically due upon completion of service unless you have a recurring service agreement with different terms."
      },
      {
        question: "Is professional lawn care worth the cost?",
        answer: "Professional lawn care saves you time, provides consistent quality results, and often prevents costly problems like disease, pests, or poor growth. Most homeowners find that the time saved and quality improvement make professional service well worth the investment."
      },
      {
        question: "Do you charge more during peak season?",
        answer: "Our pricing remains consistent throughout the year for recurring customers. However, one-time services during peak spring/summer demand may have slightly higher rates due to scheduling constraints."
      },
      {
        question: "Are there discounts for bundled services?",
        answer: "Yes! We offer package discounts when you combine multiple services. For example, bundling lawn mowing with edging, trimming, and leaf removal can save you 10-15% compared to ordering services individually."
      },
      {
        question: "What's included in your full-service lawn care package?",
        answer: "Our full-service package includes weekly or bi-weekly mowing, edging, string trimming, blowing off hard surfaces, seasonal cleanup (spring/fall), and basic weed control. We'll customize the package to fit your property's needs."
      },
      {
        question: "Do you require a contract for service?",
        answer: "We offer both one-time services and seasonal contracts. Many customers prefer seasonal contracts (April-November) for better pricing and guaranteed scheduling, but we never require long-term commitments."
      }
    ]
  },
  {
    category: "Scheduling & Service",
    icon: "📅",
    questions: [
      {
        question: "How often should I have my lawn mowed?",
        answer: "Most Louisville lawns need weekly mowing during peak growing season (April-June) and bi-weekly mowing in late summer and fall. Growth rate depends on grass type, weather, and fertilization. We'll recommend the best schedule for your lawn."
      },
      {
        question: "What if it rains on my scheduled mowing day?",
        answer: "We monitor weather closely and will reschedule if conditions are unsafe or would damage your lawn. We'll contact you to arrange the next available time slot, typically within 1-2 days."
      },
      {
        question: "Do I need to be home when you service my lawn?",
        answer: "No, you don't need to be home. Most of our customers provide access instructions (unlocked gate, code, etc.) and we handle everything. We'll contact you if we need anything or encounter any issues."
      },
      {
        question: "How far in advance do I need to schedule service?",
        answer: "For one-time services, we recommend calling 3-5 days in advance, especially during peak season. For recurring service, we can usually start within a week. Emergency or urgent services may be accommodated based on availability."
      },
      {
        question: "Can I cancel or reschedule my service?",
        answer: "Yes, we just ask for 24 hours notice. Late cancellations (less than 24 hours) may incur a fee. You can call, text, or email us to reschedule."
      },
      {
        question: "What hours do you operate?",
        answer: "We typically work Monday through Saturday, 8:00 AM to 6:00 PM. We avoid early morning or late evening service to respect neighborhood quiet hours."
      },
      {
        question: "Do you work on holidays?",
        answer: "We're closed on major holidays (Christmas, New Year's, Thanksgiving). Service scheduled on a holiday will be rescheduled to the nearest available day."
      },
      {
        question: "Can you work around my schedule?",
        answer: "We do our best to accommodate special requests. While we can't guarantee specific times for all customers, we can work with you on scheduling preferences, especially for recurring customers."
      },
      {
        question: "Do you provide service in winter?",
        answer: "Yes! While lawn mowing is seasonal (March-November), we offer winter services including snow removal, ice treatment, debris cleanup, and winterization services."
      }
    ]
  },
  {
    category: "Services Offered",
    icon: "🛠️",
    questions: [
      {
        question: "What services do you offer besides lawn mowing?",
        answer: "We offer comprehensive lawn care including: edging, trimming, mulching, leaf removal, spring/fall cleanup, aeration, hedge trimming, tree removal, pressure washing, snow removal, gutter cleaning, and lawn treatment/fertilization."
      },
      {
        question: "Do you offer landscaping design?",
        answer: "Yes! We provide complete landscaping design and installation services, including garden beds, plant selection, hardscaping, drainage solutions, and more. We'll work with you to create a custom design that fits your budget and vision."
      },
      {
        question: "Can you remove leaves in the fall?",
        answer: "Absolutely! Fall leaf removal is one of our most popular services. We can do one-time cleanups or schedule multiple visits throughout fall to keep your lawn leaf-free."
      },
      {
        question: "Do you provide fertilization and weed control?",
        answer: "Yes, we offer lawn treatment programs including fertilization, weed control, pre-emergent applications, and pest control. We'll create a custom treatment plan based on your lawn's specific needs."
      },
      {
        question: "Do you offer one-time service or only recurring?",
        answer: "We offer both! Whether you need a one-time cleanup, seasonal help, or year-round recurring service, we can accommodate your needs."
      },
      {
        question: "Can you handle overgrown lawns?",
        answer: "Yes! We specialize in overgrown lawn reclamation. Severely overgrown lawns may require multiple passes and will be priced accordingly, but we can restore any lawn to beautiful condition."
      },
      {
        question: "Do you do tree trimming and removal?",
        answer: "Yes, we provide tree trimming and removal services for small to medium-sized trees. For very large trees (over 30 feet), we may refer you to a specialized arborist."
      },
      {
        question: "Do you offer commercial property maintenance?",
        answer: "Yes! We service commercial properties including office buildings, apartments, HOAs, and retail centers. We offer customized maintenance plans for commercial clients."
      }
    ]
  },
  {
    category: "Service Area",
    icon: "📍",
    questions: [
      {
        question: "What areas of Louisville do you service?",
        answer: "We service all of greater Louisville including Jeffersontown, St. Matthews, Highlands, Middletown, Prospect, Anchorage, Okolona, Lyndon, Shively, and surrounding areas within approximately 30 miles of Louisville."
      },
      {
        question: "Do you service properties outside of Louisville?",
        answer: "We primarily focus on the Louisville metro area, but we may be able to accommodate nearby locations. Give us a call and we'll let you know if we can service your area."
      },
      {
        question: "Is there a minimum property size?",
        answer: "No minimum property size! We service everything from small urban lots to large multi-acre properties."
      },
      {
        question: "Do you service residential and commercial properties?",
        answer: "Yes, we service both residential homes and commercial properties including apartments, offices, retail centers, and HOA common areas."
      }
    ]
  },
  {
    category: "Company & Experience",
    icon: "🏢",
    questions: [
      {
        question: "How long have you been in business?",
        answer: "Aaron's Lawn Care has been serving the Louisville area for over 20 years. Our experience and local knowledge help us provide exceptional service tailored to Kentucky's unique climate and soil conditions."
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, we are fully licensed and insured. We carry general liability insurance to protect your property and our team."
      },
      {
        question: "Do you guarantee your work?",
        answer: "Yes! We stand behind our work. If you're not satisfied with our service, contact us within 48 hours and we'll make it right."
      },
      {
        question: "What makes you different from other lawn care companies?",
        answer: "Our 20+ years of local experience, commitment to quality, reliable scheduling, fair pricing, and personalized service set us apart. We treat every property like it's our own and build long-term relationships with our customers."
      },
      {
        question: "How can I contact you?",
        answer: "You can reach us by phone at (502) 926-8524, email at gnaua429@gmail.com, or through our website contact form. We typically respond within a few hours during business hours."
      }
    ]
  }
];

// Flatten all FAQs for schema markup
const allFAQs: FAQItem[] = faqCategories.flatMap(cat => cat.questions);

function FAQAccordion({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-8">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const faqSchema = generateFAQSchema(allFAQs);

  return (
    <>
      <SEOHead {...getFAQPageSEO()} schemaMarkup={schemaToJsonLd(faqSchema)} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-green-100">
              Everything you need to know about Aaron's Lawn Care services in Louisville, KY
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <FAQAccordion
                      key={faqIndex}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Didn't Find Answer CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Didn't Find Your Answer?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help! Contact us directly and we'll answer any questions you have about our lawn care services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-green-800 transform hover:scale-105 transition-all"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:5029268524"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-800 font-bold text-lg rounded-lg border-2 border-green-700 hover:bg-green-50 transform hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (502) 926-8524
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-green-100 max-w-3xl mx-auto">
            Get your free, no-obligation quote today. We'll assess your property and provide accurate pricing for all services.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-green-800 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-green-50 transform hover:scale-105 transition-all"
          >
            Get Your Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
