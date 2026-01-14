import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';
import { getServicePageSEO } from '@/utils/seo-meta';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  getBreadcrumbsForService,
  generateSchemaGraph,
  schemaToJsonLd,
} from '@/utils/schemas';

interface Benefit {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageTemplateProps {
  serviceName: string;
  pageTitle: string;
  metaDescription: string;
  description: string;
  benefits: Benefit[];
  processSteps: string[];
  faqs: FAQ[];
  seasonalNote?: string;
  serviceUrl: string;
}

export default function ServicePageTemplate({
  serviceName,
  pageTitle,
  metaDescription,
  description,
  benefits,
  processSteps,
  faqs,
  seasonalNote,
  serviceUrl,
}: ServicePageTemplateProps) {
  // Extract slug from serviceUrl (e.g., "/services/lawn-mowing" -> "lawn-mowing")
  const slug = serviceUrl.replace('/services/', '');

  // Generate SEO config using centralized function
  const seoConfig = getServicePageSEO(serviceName, metaDescription, slug);

  // Generate structured data schemas for SEO
  const breadcrumbSchema = generateBreadcrumbSchema(getBreadcrumbsForService(serviceName, serviceUrl));
  const serviceSchema = generateServiceSchema(serviceName, metaDescription, serviceUrl);
  const faqSchema = generateFAQSchema(faqs);

  // Combine all schemas into a single graph
  const schemaMarkup = generateSchemaGraph([breadcrumbSchema, serviceSchema, faqSchema]);

  return (
    <>
      {/* Service, FAQ, and Breadcrumb Schema for SEO - Rich Results eligible */}
      <SEOHead {...seoConfig} schemaMarkup={schemaToJsonLd(schemaMarkup)} />

      {/* Hero Section */}
      <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        {/* Animated Background Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">{serviceName}</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">{description}</p>
            {seasonalNote && (
              <div className="inline-block bg-green-100 border border-green-200 rounded-lg px-6 py-3 mb-8">
                <p className="text-green-800">{seasonalNote}</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-green-800 transform hover:scale-105 transition-all"
              >
                Get Your Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:5029268524"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-green-800 font-bold text-lg rounded-lg border-2 border-green-700 hover:bg-green-50 transform hover:scale-105 transition-all"
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our {serviceName}?
              </h2>
              <p className="text-xl text-gray-600">
                Experience the difference that 20+ years of expertise makes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What to Expect
              </h2>
              <p className="text-xl text-gray-600">
                Our proven process ensures exceptional results every time
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-green-100 max-w-3xl mx-auto">
            Get your free, no-obligation quote today. We'll schedule an on-site visit to assess your property and provide accurate pricing.
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
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-900 bg-opacity-50 text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-opacity-70 transform hover:scale-105 transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
