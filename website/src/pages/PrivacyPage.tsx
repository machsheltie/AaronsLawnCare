import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/common/SEOHead';
import { getPrivacyPageSEO } from '@/utils/seo-meta';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead {...getPrivacyPageSEO()} />

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> January 11, 2026
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Aaron's Lawn Care ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website
                  aaronslawncare502.com (the "Site") or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                  please do not access the Site.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

                <h3 className="text-xl font-bold text-gray-800 mb-3">2.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Request a quote for our lawn care services</li>
                  <li>Contact us through our contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us by phone or email</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This personal information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Property address</li>
                  <li>Service preferences and property details</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our Site, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Respond to your quote requests and inquiries</li>
                  <li>Schedule lawn care services and appointments</li>
                  <li>Provide customer service and support</li>
                  <li>Send you service updates, promotions, and marketing communications (if you've opted in)</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraudulent transactions and protect against security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              {/* Disclosure of Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Service Providers:</strong> We may share your information with third-party service providers
                    who perform services on our behalf, such as email service providers, payment processors, and website
                    hosting.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or
                    in response to valid requests by public authorities.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets,
                    your information may be transferred as part of that transaction.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>We do not sell your personal information to third parties.</strong>
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may use cookies and similar tracking technologies to collect information about your browsing
                  activities. Cookies are small data files stored on your device. You can instruct your browser to refuse
                  all cookies or to indicate when a cookie is being sent.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We may use the following types of cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer
                  need your information, we will securely delete or anonymize it.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Privacy Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request that we delete your personal information</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:gnaua429@gmail.com" className="text-green-600 hover:underline font-semibold">gnaua429@gmail.com</a> or call{' '}
                  <a href="tel:5029268524" className="text-green-600 hover:underline font-semibold">(502) 926-8524</a>.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our Site may contain links to third-party websites. We are not responsible for the privacy practices or
                  content of these third-party sites. We encourage you to review the privacy policies of any third-party
                  sites you visit.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                  information from children. If we become aware that we have collected personal information from a child
                  without parental consent, we will take steps to delete that information.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                  Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
                  Policy periodically for any changes.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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

              {/* Consent */}
              <section className="bg-gray-100 rounded-lg p-6 mt-8">
                <p className="text-gray-700 leading-relaxed">
                  By using our Site or services, you acknowledge that you have read and understood this Privacy Policy and
                  agree to its terms. If you do not agree with this Privacy Policy, please discontinue use of our Site and
                  services.
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
