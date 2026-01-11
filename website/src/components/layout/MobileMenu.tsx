import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainNavigation, businessInfo } from '../../data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    onClose();
    setServicesExpanded(false);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="text-xl font-bold text-primary-600">
              {businessInfo.name}
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-primary-600"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const active = isActive(item.path);

              if (hasChildren) {
                return (
                  <div key={item.path} className="border-b border-gray-100">
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className={`w-full flex items-center justify-between px-4 py-3 font-medium transition-colors ${
                        active
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          servicesExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {servicesExpanded && (
                      <div className="bg-gray-50">
                        <Link
                          to={item.path}
                          onClick={handleLinkClick}
                          className="block px-8 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                        >
                          All Services
                        </Link>
                        {item.children?.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={handleLinkClick}
                            className="block px-8 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`block px-4 py-3 font-medium transition-colors border-b border-gray-100 ${
                    active
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Info */}
          <div className="p-4 border-t border-gray-200 space-y-3">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {businessInfo.phone}
            </a>

            <Link
              to="/quote"
              onClick={handleLinkClick}
              className="block w-full btn-primary text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
