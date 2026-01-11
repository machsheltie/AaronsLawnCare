import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Aaron's Lawn Care</title>
        <meta
          name="description"
          content="Aaron's Lawn Care terms of service. Read our terms and conditions for using our website and lawn care services."
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms of Service | Aaron's Lawn Care" />
        <meta property="og:description" content="Aaron's Lawn Care terms of service. Read our terms and conditions for using our website and lawn care services." />
        <meta property="og:url" content="https://aaronslawncare.com/terms" />
        <meta property="og:site_name" content="Aaron's Lawn Care" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms of Service | Aaron's Lawn Care" />
        <meta name="twitter:description" content="Aaron's Lawn Care terms of service. Read our terms and conditions for using our website and lawn care services." />
      </Helmet>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> January 11, 2026
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Aaron's Lawn Care. By accessing or using our website (aaronslawncare.com) or engaging our
                  lawn care services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to
                  these Terms, please do not use our website or services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Your continued use of our services after any
                  changes indicates your acceptance of the new Terms.
                </p>
              </section>

              {/* Services Provided */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aaron's Lawn Care provides professional lawn care and landscaping services in the greater Louisville,
                  Kentucky area, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Lawn mowing and edging</li>
                  <li>Leaf removal and seasonal cleanup</li>
                  <li>Mulching and garden bed maintenance</li>
                  <li>Hedge and shrub trimming</li>
                  <li>Landscape design and installation</li>
                  <li>Snow removal (seasonal)</li>
                  <li>Other lawn care and landscaping services as agreed upon</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  All services are subject to availability, weather conditions, and mutual agreement between Aaron's Lawn
                  Care and the customer.
                </p>
              </section>

              {/* Quote and Pricing */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Quotes and Pricing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>3.1 Free Quotes:</strong> All quotes provided through our website or via phone/email are free of
                  charge and non-binding until confirmed by both parties.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>3.2 Quote Validity:</strong> Quotes are valid for 30 days from the date of issue. After 30 days,
                  prices may be subject to change based on market conditions, property changes, or other factors.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>3.3 On-Site Assessment:</strong> Final pricing may be adjusted after an on-site property assessment.
                  We will notify you of any price changes before beginning work.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>3.4 Payment Terms:</strong> Payment is due upon completion of services unless otherwise agreed upon
                  in writing. We accept cash, check, and electronic payment methods.
                </p>
              </section>

              {/* Service Scheduling */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Scheduling and Cancellation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>4.1 Scheduling:</strong> Services are scheduled by appointment. We will make reasonable efforts to
                  accommodate your preferred service dates and times.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>4.2 Weather Delays:</strong> Lawn care services are weather-dependent. We reserve the right to
                  reschedule services due to inclement weather, unsafe working conditions, or other factors beyond our control.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>4.3 Customer Cancellation:</strong> If you need to cancel or reschedule a service, please notify us
                  at least 24 hours in advance. Late cancellations may be subject to a cancellation fee.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>4.4 Recurring Services:</strong> For recurring service agreements (weekly, bi-weekly, monthly), either
                  party may terminate the agreement with 7 days written notice.
                </p>
              </section>

              {/* Property Access */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Property Access and Preparation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>5.1 Access:</strong> By engaging our services, you grant Aaron's Lawn Care permission to access your
                  property for the purpose of providing the agreed-upon services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>5.2 Gates and Obstacles:</strong> Please ensure gates are unlocked and the work area is clear of
                  obstacles (toys, hoses, furniture, etc.) before our arrival. We are not responsible for delays or incomplete
                  work due to inaccessible areas.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>5.3 Pets:</strong> Please secure pets indoors or in a separate area during service. We cannot be held
                  liable for pets that escape or are injured due to unsecured access.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>5.4 Underground Utilities:</strong> Customer is responsible for marking underground utilities,
                  sprinkler systems, invisible fences, or other buried infrastructure. We are not liable for damage to unmarked
                  underground items.
                </p>
              </section>

              {/* Liability and Insurance */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liability and Insurance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>6.1 Insurance:</strong> Aaron's Lawn Care is fully insured for general liability. We take all
                  reasonable precautions to protect your property during service.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>6.2 Property Damage:</strong> In the unlikely event of property damage caused by our negligence, we
                  will make reasonable efforts to repair or compensate for the damage. Customer must report any damage within
                  48 hours of service completion.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>6.3 Limitations:</strong> Aaron's Lawn Care is not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Pre-existing damage to lawns, plants, or property</li>
                  <li>Damage to unmarked underground utilities, sprinklers, or invisible fences</li>
                  <li>Natural plant death or disease unrelated to our services</li>
                  <li>Damage caused by weather, pests, or other acts of nature</li>
                  <li>Indirect or consequential damages</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>6.4 Maximum Liability:</strong> Our total liability for any claim shall not exceed the amount paid
                  for the specific service that gave rise to the claim.
                </p>
              </section>

              {/* Service Quality */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Quality and Satisfaction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>7.1 Quality Commitment:</strong> We are committed to providing high-quality lawn care services. If
                  you are not satisfied with our work, please contact us within 48 hours of service completion.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>7.2 Re-Service:</strong> If there is a legitimate quality concern with our work, we will return to
                  address the issue at no additional charge.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>7.3 Natural Variations:</strong> Lawn appearance may vary due to soil conditions, weather, grass
                  type, and other natural factors beyond our control. We cannot guarantee specific aesthetic outcomes.
                </p>
              </section>

              {/* Website Use */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Website Use and Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>8.1 Website Content:</strong> All content on aaronslawncare.com, including text, images, logos, and
                  design, is the property of Aaron's Lawn Care and is protected by copyright laws.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>8.2 Permitted Use:</strong> You may view and print pages from our website for personal, non-commercial
                  use only. You may not reproduce, distribute, or modify our content without written permission.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>8.3 Quote Form Submissions:</strong> By submitting a quote request through our website, you consent
                  to being contacted by Aaron's Lawn Care via phone, email, or text message regarding your request.
                </p>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy and Data Collection</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our{' '}
                  <Link to="/privacy" className="text-green-600 hover:underline font-semibold">
                    Privacy Policy
                  </Link>{' '}
                  to understand how we collect, use, and protect your personal information.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>10.1 Good Faith Efforts:</strong> In the event of a dispute, both parties agree to make good faith
                  efforts to resolve the matter through direct communication.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>10.2 Mediation:</strong> If a dispute cannot be resolved through direct communication, both parties
                  agree to attempt mediation before pursuing legal action.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>10.3 Governing Law:</strong> These Terms are governed by the laws of the Commonwealth of Kentucky.
                  Any legal action must be brought in the courts of Jefferson County, Kentucky.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless Aaron's Lawn Care, its owner, employees, and contractors from any
                  claims, damages, or expenses arising from your failure to comply with these Terms, your failure to properly
                  mark underground utilities, or your provision of inaccurate information.
                </p>
              </section>

              {/* Severability */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall
                  continue in full force and effect.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-gray-900 font-bold mb-2">Aaron's Lawn Care</p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> <a href="mailto:gnaua429@gmail.com" className="text-green-600 hover:underline">gnaua429@gmail.com</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> <a href="tel:5029268524" className="text-green-600 hover:underline">(502) 926-8524</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Location:</strong> Louisville, Kentucky
                  </p>
                </div>
              </section>

              {/* Agreement */}
              <section className="bg-gray-100 rounded-lg p-6 mt-8">
                <p className="text-gray-700 leading-relaxed">
                  By using our website or engaging our services, you acknowledge that you have read, understood, and agree to
                  be bound by these Terms of Service. These Terms, together with our Privacy Policy, constitute the entire
                  agreement between you and Aaron's Lawn Care.
                </p>
              </section>
            </div>

            {/* Back to Home Link */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
