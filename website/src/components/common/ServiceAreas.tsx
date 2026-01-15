import { MapPin } from 'lucide-react';
import { serviceAreas, type ServiceArea } from '@/data/serviceAreas';

interface ServiceAreasProps {
  /**
   * Variant style of the service areas display
   * - "grid": Simple grid layout
   * - "cards": Cards with icons (default)
   * - "compact": Compact list for footer
   */
  variant?: 'grid' | 'cards' | 'compact';

  /**
   * Custom title for the section
   */
  title?: string;

  /**
   * Custom subtitle/description
   */
  subtitle?: string;

  /**
   * Show "Don't see your area?" message
   */
  showCallout?: boolean;

  /**
   * Custom CSS classes for the container
   */
  className?: string;

  /**
   * Number of columns for grid layout
   */
  columns?: 2 | 3 | 4;

  /**
   * Show map pin icons
   */
  showIcons?: boolean;
}

export function ServiceAreas({
  variant = 'cards',
  title = 'We Serve the Greater Louisville Area',
  subtitle = 'Professional lawn care services for residential and commercial properties',
  showCallout = true,
  className = '',
  columns = 4,
  showIcons = true,
}: ServiceAreasProps) {
  const gridColsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  }[columns];

  if (variant === 'compact') {
    return (
      <div className={`space-y-2 ${className}`}>
        {serviceAreas.map((area) => (
          <div key={area.slug} className="flex items-center gap-2 text-sm text-gray-300">
            <MapPin className="w-3 h-3 text-green-400 flex-shrink-0" />
            <span>{area.name}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={className}>
        {title && (
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${gridColsClass} gap-4 mb-8`}>
          {serviceAreas.map((area) => (
            <div
              key={area.slug}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="font-semibold text-gray-900 text-center">{area.name}</p>
            </div>
          ))}
        </div>

        {showCallout && (
          <p className="text-center text-gray-600">
            Don't see your area listed?{' '}
            <a href="/contact" className="text-green-600 font-bold hover:underline">
              Give us a call
            </a>{' '}
            - we may still be able to help!
          </p>
        )}
      </div>
    );
  }

  // Default: cards variant
  return (
    <div className={className}>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
        <div className={`grid ${gridColsClass} gap-6`}>
          {serviceAreas.map((area) => (
            <div
              key={area.slug}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              {showIcons && (
                <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
              )}
              <p className="font-semibold text-gray-900">{area.name}</p>
            </div>
          ))}
        </div>

        {showCallout && (
          <p className="text-center text-gray-600 mt-8">
            Don't see your area?{' '}
            <a href="tel:5029268524" className="text-green-600 font-bold hover:underline">
              Give us a call
            </a>{' '}
            - we may still be able to help!
          </p>
        )}
      </div>
    </div>
  );
}
