import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import NewsletterSignup from "../common/NewsletterSignup";

export const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Newsletter Signup Section */}
      <NewsletterSignup />

      <div className="pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Aaron's Lawn Care</h3>
            <p className="text-primary-200 mb-6">
              Professional, reliable, and affordable lawn care services for Louisville and surrounding areas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-900 rounded-full hover:bg-primary-800 transition-colors">
                <Facebook className="w-5 h-5 text-primary-200" />
              </a>
              <a href="#" className="p-2 bg-primary-900 rounded-full hover:bg-primary-800 transition-colors">
                <Instagram className="w-5 h-5 text-primary-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-100">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-primary-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-primary-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-primary-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-100">Services</h4>
            <ul className="space-y-4">
              <li className="text-primary-300">Lawn Mowing</li>
              <li className="text-primary-300">Trimming & Edging</li>
              <li className="text-primary-300">Mulching</li>
              <li className="text-primary-300">Seasonal Cleanups</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-100">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <span className="text-primary-200">(502) 555-0123</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1" />
                <span className="text-primary-200">hello@aaronlawn.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-primary-200">Louisville, KY</span>
              </li>
            </ul>
          </div>
        </div>

          <div className="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-400">
            <p>&copy; {new Date().getFullYear()} Aaron's Lawn Care. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
