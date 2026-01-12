import { useState, FormEvent } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      // Netlify Forms submission
      const formData = new FormData();
      formData.append('form-name', 'newsletter');
      formData.append('email', email);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-green-100" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Stay Updated with Lawn Care Tips
            </h3>
          </div>
          <p className="text-green-100 mb-8 text-lg">
            Join our email list for seasonal lawn care advice, special offers, and exclusive promotions. No spam, just helpful tips!
          </p>

          {status === 'success' ? (
            <div className="flex items-center justify-center gap-3 bg-green-900/50 border-2 border-green-400 text-white py-4 px-6 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <p className="text-lg font-semibold">
                Thanks for subscribing! Check your email to confirm.
              </p>
            </div>
          ) : (
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              {/* Netlify Forms hidden fields */}
              <input type="hidden" name="form-name" value="newsletter" />
              <input type="hidden" name="bot-field" />

              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={status === 'loading'}
                  className="w-full px-6 py-4 rounded-lg border-2 border-green-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-white text-green-800 font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-green-50 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <div className="flex items-center justify-center gap-3 bg-red-900/50 border-2 border-red-400 text-white py-3 px-6 rounded-lg mt-4 max-w-xl mx-auto">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="font-medium">{errorMessage}</p>
            </div>
          )}

          <p className="text-green-200 text-sm mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
