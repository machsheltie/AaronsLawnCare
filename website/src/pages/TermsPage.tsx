/**
 * TermsPage Component
 *
 * Terms of Service page.
 *
 * TODO: Add actual terms of service content
 */
export default function TermsPage() {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-h1 text-primary-600 mb-6">Terms of Service</h1>
          <div className="prose max-w-none">
            <p className="text-secondary-700">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <div className="mt-8 p-8 bg-secondary-50 rounded-lg text-center">
              <p className="text-secondary-600">🚧 Terms of Service Content Coming Soon 🚧</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
