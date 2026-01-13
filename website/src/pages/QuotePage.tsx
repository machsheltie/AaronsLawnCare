import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Loader2 } from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';
import { getQuotePageSEO } from '@/utils/seo-meta';
import { generateBreadcrumbSchema, schemaToJsonLd } from '@/utils/schemas';
import { FloatingLabelInput } from '@/components/ui/FloatingLabelInput';
import { FloatingLabelTextarea } from '@/components/ui/FloatingLabelTextarea';
import { Toast, ToastContainer } from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';

// Validation schema
const quoteFormSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  propertyAddress: z.string().min(5, 'Please enter your property address'),
  phone: z.string().regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  serviceTypes: z.array(z.string()).min(1, 'Please select at least one service'),
  propertySize: z.string().min(1, 'Please select a property size'),
  preferredContact: z.enum(['phone', 'email', 'either']),
  urgency: z.string().min(1, 'Please select urgency level'),
  additionalDetails: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const SERVICES = [
  { id: 'mowing', label: 'Lawn Mowing' },
  { id: 'edging', label: 'Edging' },
  { id: 'leaf-removal', label: 'Leaf Removal' },
  { id: 'aeration', label: 'Aeration' },
  { id: 'landscaping', label: 'General Landscaping' },
  { id: 'garden-bed-design', label: 'Garden Bed Design' },
  { id: 'hedge-trimming', label: 'Hedge Trimming' },
  { id: 'tree-removal', label: 'Tree Removal' },
  { id: 'tilling', label: 'Tilling' },
  { id: 'snow-removal', label: 'Snow Removal' },
];

const PROPERTY_SIZES = [
  { value: '', label: 'Select property size' },
  { value: 'small', label: 'Small (< 5,000 sq ft)' },
  { value: 'medium', label: 'Medium (5,000 - 10,000 sq ft)' },
  { value: 'large', label: 'Large (10,000 - 20,000 sq ft)' },
  { value: 'extra-large', label: 'Extra Large (> 20,000 sq ft)' },
  { value: 'not-sure', label: 'Not Sure' },
];

const URGENCY_LEVELS = [
  { value: '', label: 'Select urgency' },
  { value: 'routine', label: 'Routine (within 2 weeks)' },
  { value: 'soon', label: 'Soon (within 1 week)' },
  { value: 'urgent', label: 'Urgent (within 2-3 days)' },
];

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // Honeypot field for spam prevention
  const [honeypot, setHoneypot] = useState('');
  const { toasts, removeToast, success: showSuccess, error: showError } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      preferredContact: 'either',
      serviceTypes: [],
    },
  });

  const formValues = watch();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://aaronslawncare502.com' },
    { name: 'Request a Quote', url: 'https://aaronslawncare502.com/quote' }
  ]);

  const onSubmit = async (data: QuoteFormData) => {
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
      formData.append('form-name', 'quote-request');
      formData.append('fullName', data.fullName);
      formData.append('propertyAddress', data.propertyAddress);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('serviceTypes', data.serviceTypes.join(', '));
      formData.append('propertySize', data.propertySize);
      formData.append('preferredContact', data.preferredContact);
      formData.append('urgency', data.urgency);
      formData.append('additionalDetails', data.additionalDetails || '');

      // Submit to Netlify Forms
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      setIsSuccess(true);
      showSuccess('Quote request submitted successfully! We\'ll contact you soon.');
      reset();
    } catch (error) {
      // Error logging removed for production
      // TODO: Add proper error monitoring (Sentry)
      showError('There was an error submitting your request. Please try again or call us directly at (502) 926-8524.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <SEOHead
          title="Quote Request Sent | Aaron's Lawn Care"
          description="Thank you for your quote request! We'll get back to you as soon as possible."
          canonical="https://aaronslawncare502.com/quote"
          robots="noindex, nofollow"
        />

        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Thank You for Your Request!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We've received your quote request and will get back to you as soon as possible.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h2 className="font-bold text-green-900 mb-2">What Happens Next?</h2>
                <ol className="text-left text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">1.</span>
                    <span>We'll review your request within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">2.</span>
                    <span>We'll contact you via your preferred method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">3.</span>
                    <span>We'll schedule an on-site visit to provide an accurate quote</span>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit Another Request
                </button>
                <a
                  href="/"
                  className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors"
                >
                  Return to Home
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-8">
                Need immediate assistance? Call us at{' '}
                <a href="tel:5029268524" className="text-green-600 font-semibold hover:underline">
                  (502) 926-8524
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead {...getQuotePageSEO()} schemaMarkup={schemaToJsonLd(breadcrumbSchema)} />

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

      <div className="min-h-screen bg-[#Fdfdfc] text-green-950 pt-20 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-green-900 mb-4">
              Request Your Free Quote
            </h1>
            <p className="text-xl text-gray-600">
              Tell us about your property and we'll provide a personalized quote.
              Most requests receive a response within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Hidden Netlify Form */}
            <form name="quote-request" data-netlify="true" hidden>
              <input type="text" name="fullName" />
              <input type="text" name="propertyAddress" />
              <input type="tel" name="phone" />
              <input type="email" name="email" />
              <input type="text" name="serviceTypes" />
              <input type="text" name="propertySize" />
              <input type="text" name="preferredContact" />
              <input type="text" name="urgency" />
              <textarea name="additionalDetails" />
            </form>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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

              {/* Contact Information Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-600">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <FloatingLabelInput
                    {...register('fullName')}
                    type="text"
                    id="fullName"
                    label="Full Name"
                    isRequired
                    value={formValues.fullName || ''}
                    error={errors.fullName?.message}
                    autoComplete="name"
                    inputMode="text"
                  />

                  {/* Phone Number */}
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

                  {/* Property Address */}
                  <FloatingLabelInput
                    {...register('propertyAddress')}
                    type="text"
                    id="propertyAddress"
                    label="Property Address"
                    isRequired
                    value={formValues.propertyAddress || ''}
                    error={errors.propertyAddress?.message}
                    autoComplete="street-address"
                    inputMode="text"
                  />
                </div>
              </div>

              {/* Service Details Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-600">
                  Service Details
                </h2>

                {/* Service Types */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Services Needed <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SERVICES.map((service) => (
                      <label
                        key={service.id}
                        className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 cursor-pointer transition-colors"
                      >
                        <input
                          {...register('serviceTypes')}
                          type="checkbox"
                          value={service.id}
                          className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <span className="text-gray-700 font-medium">{service.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.serviceTypes && (
                    <p className="mt-2 text-sm text-red-500">{errors.serviceTypes.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Property Size */}
                  <div>
                    <label htmlFor="propertySize" className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('propertySize')}
                      id="propertySize"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.propertySize ? 'border-red-500' : 'border-gray-300'
                        }`}
                    >
                      {PROPERTY_SIZES.map((size) => (
                        <option key={size.value} value={size.value}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                    {errors.propertySize && (
                      <p className="mt-1 text-sm text-red-500">{errors.propertySize.message}</p>
                    )}
                  </div>

                  {/* Urgency */}
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                      Urgency <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('urgency')}
                      id="urgency"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.urgency ? 'border-red-500' : 'border-gray-300'
                        }`}
                    >
                      {URGENCY_LEVELS.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                    {errors.urgency && (
                      <p className="mt-1 text-sm text-red-500">{errors.urgency.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Preferences Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-600">
                  Contact Preferences
                </h2>

                {/* Preferred Contact Method */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    How would you like us to contact you? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 cursor-pointer transition-colors flex-1">
                      <input
                        {...register('preferredContact')}
                        type="radio"
                        value="phone"
                        className="w-5 h-5 text-green-600 border-gray-300 focus:ring-green-500"
                      />
                      <span className="text-gray-700 font-medium">Phone Call</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 cursor-pointer transition-colors flex-1">
                      <input
                        {...register('preferredContact')}
                        type="radio"
                        value="email"
                        className="w-5 h-5 text-green-600 border-gray-300 focus:ring-green-500"
                      />
                      <span className="text-gray-700 font-medium">Email</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 cursor-pointer transition-colors flex-1">
                      <input
                        {...register('preferredContact')}
                        type="radio"
                        value="either"
                        className="w-5 h-5 text-green-600 border-gray-300 focus:ring-green-500"
                      />
                      <span className="text-gray-700 font-medium">Either</span>
                    </label>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <FloatingLabelTextarea
                    {...register('additionalDetails')}
                    id="additionalDetails"
                    rows={5}
                    label="Additional Details (Optional)"
                    value={formValues.additionalDetails || ''}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Include any specific concerns, areas of focus, or questions you have.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-12 py-4 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-green-600 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-green-600 hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-gray-600">
              Prefer to talk? Call us directly at{' '}
              <a
                href="tel:5029268524"
                className="text-green-600 font-bold hover:text-green-700 hover:underline"
              >
                (502) 926-8524
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
