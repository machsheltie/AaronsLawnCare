import { useState, type FormEvent } from 'react';
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
    <div className="bg-primary-950 border-t border-primary-900 py-6 md:py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Text Section */}
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Mail className="w-4 h-4 text-green-400" />
                <h3 className="text-lg font-bold text-white">
                  Stay Updated
                </h3>
              </div>
              <p className="text-primary-300 text-sm max-w-md">
                Get seasonal tips and special offers. No spam, ever.
              </p>
            </div>

            {/* Form Section */}
            <div className="w-full md:w-auto flex-1 max-w-lg">
              {status === 'success' ? (
                <div className="flex items-center justify-center md:justify-end gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-sm font-semibold">
                    Thanks for subscribing!
                  </p>
                </div>
              ) : (
                <form
                  name="newsletter"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  {/* Netlify Forms hidden fields */}
                  <input type="hidden" name="form-name" value="newsletter" />
                  <input type="hidden" name="bot-field" />

                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2 text-sm rounded-md border border-primary-700 bg-primary-900/50 focus:border-green-400 focus:outline-none text-white placeholder:text-primary-400 disabled:opacity-50"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-2 bg-green-600 text-white text-sm font-bold rounded-md hover:bg-green-500 transition-colors disabled:opacity-50 whitespace-nowrap flex items-center justify-center"
                  >
                    {status === 'loading' ? '...' : 'Subscribe'}
                  </button>
                </form>
              )}
               {status === 'error' && (
                <p className="text-red-400 text-xs mt-1 text-center md:text-right">{errorMessage}</p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
