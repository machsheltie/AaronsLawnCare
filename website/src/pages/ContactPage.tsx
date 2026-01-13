import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';
// TEMPORARY: SEOHead commented out to fix OG tag issue
// import { SEOHead } from '@/components/common/SEOHead';
// import { getContactPageSEO } from '@/utils/seo-meta';
import { generateBreadcrumbSchema, generateContactPointSchema, schemaToJsonLd, generateSchemaGraph } from '@/utils/schemas';
import { businessInfo } from '../data/navigation';
import { FloatingLabelInput } from '@/components/ui/FloatingLabelInput';
import { FloatingLabelTextarea } from '@/components/ui/FloatingLabelTextarea';
import { Toast, ToastContainer } from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';

// Simple contact form validation
const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Please enter a valid phone number'),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(10, 'Please enter a message (at least 10 characters)'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toasts, removeToast, success: showSuccess, error: showError } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const formValues = watch();

  // Honeypot field for spam prevention
  const [honeypot, setHoneypot] = useState('');

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://aaronslawncare502.com' },
    { name: 'Contact', url: 'https://aaronslawncare502.com/contact' }
  ]);

  const contactPointSchema = generateContactPointSchema();

  const schemaMarkup = generateSchemaGraph([breadcrumbSchema, contactPointSchema]);

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot field for spam bots
    if (honeypot) {
      // Silently reject spam submissions
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for Netlify Forms
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      // Submit to Netlify Forms
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      setIsSuccess(true);
      showSuccess('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      // Error logging removed for production
      // TODO: Add proper error monitoring (Sentry)
      showError('There was an error sending your message. Please try again or call us directly at (502) 926-8524.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* <SEOHead {...getContactPageSEO()} schemaMarkup={schemaToJsonLd(schemaMarkup)} /> */}

      {/* Toast Notifications */}
      <ToastContainer>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
            duration={toast.duration}
            onClose={removeToast}
          />
        ))}
      </ToastContainer>

      {/* Hero Section */}
      <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green-900">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              We're here to help with all your lawn care needs. Reach out today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have a question or ready to get started? We'd love to hear from you!
                Contact us by phone, email, or use the form to send us a message.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                    <Phone className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-green-600 font-semibold text-lg">{businessInfo.phone}</p>
                    <p className="text-sm text-gray-500 mt-1">Call for immediate assistance</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                    <Mail className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-green-600 font-semibold break-all">{businessInfo.email}</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-700">Greater Louisville, Kentucky</p>
                    <p className="text-sm text-gray-500 mt-1">Serving all surrounding areas</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-700">By Appointment</p>
                    <p className="text-sm text-gray-500 mt-1">Flexible scheduling available</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="/quote"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all w-full justify-center"
                >
                  Request a Free Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and we'll get back to you shortly.
                  </p>

                  {/* Hidden Netlify Form */}
                  <form name="contact" data-netlify="true" hidden>
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <input type="tel" name="phone" />
                    <input type="text" name="subject" />
                    <textarea name="message" />
                  </form>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Honeypot field - hidden from users, visible to bots */}
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                      <input
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    {/* Name */}
                    <FloatingLabelInput
                      {...register('name')}
                      type="text"
                      id="name"
                      label="Your Name"
                      isRequired
                      value={formValues.name || ''}
                      error={errors.name?.message}
                      autoComplete="name"
                      inputMode="text"
                    />

                    {/* Email */}
                    <FloatingLabelInput
                      {...register('email')}
                      type="email"
                      id="email"
                      label="Email Address"
                      isRequired
                      value={formValues.email || ''}
                      error={errors.email?.message}
                      autoComplete="email"
                      inputMode="email"
                    />

                    {/* Phone */}
                    <FloatingLabelInput
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      label="Phone Number"
                      isRequired
                      value={formValues.phone || ''}
                      error={errors.phone?.message}
                      autoComplete="tel"
                      inputMode="tel"
                    />

                    {/* Subject */}
                    <FloatingLabelInput
                      {...register('subject')}
                      type="text"
                      id="subject"
                      label="Subject"
                      isRequired
                      value={formValues.subject || ''}
                      error={errors.subject?.message}
                      autoComplete="off"
                      inputMode="text"
                    />

                    {/* Message */}
                    <FloatingLabelTextarea
                      {...register('message')}
                      id="message"
                      rows={5}
                      label="Message"
                      isRequired
                      value={formValues.message || ''}
                      error={errors.message?.message}
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We Serve the Greater Louisville Area
              </h2>
              <p className="text-xl text-gray-600">
                Professional lawn care services for residential and commercial properties
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'St. Matthews',
                  'Highlands',
                  'Okolona',
                  'Jeffersontown',
                  'Middletown',
                  'Prospect',
                  'Downtown Louisville',
                  'East End',
                  'Anchorage',
                  'Lyndon',
                  'Hurstbourne',
                  'Fern Creek',
                ].map((area) => (
                  <div
                    key={area}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">{area}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-8">
                Don't see your area? <a href="tel:5029268524" className="text-green-600 font-bold hover:underline">Give us a call</a> - we may still be able to help!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
