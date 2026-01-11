import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainNavigation } from '../../data/navigation';

export default function Navigation() {
  const location = useLocation();
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="flex items-center gap-8">
      {mainNavigation.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const active = isActive(item.path);

        if (hasChildren) {
          return (
            <div
              key={item.path}
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-1 py-2 font-semibold transition-all hover:scale-105 ${
                  active
                    ? 'text-green-100'
                    : 'text-white hover:text-green-100'
                }`}
              >
                {item.label}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    servicesDropdownOpen ? 'rotate-180' : ''
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
              </Link>

              {/* Dropdown Menu with hover bridge */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 z-50">
                  <div className="w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    {item.children?.map((child, index) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-800 transition-all hover:pl-5 ${
                          index !== 0 ? 'border-t border-gray-100' : ''
                        }`}
                      >
                        <span className="font-medium">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`py-2 font-semibold transition-all hover:scale-105 ${
              active
                ? 'text-green-100'
                : 'text-white hover:text-green-100'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
