import { useState } from 'react';
import { X } from 'lucide-react';
import { SEOHead } from '@/components/common/SEOHead';
import { getGalleryPageSEO } from '@/utils/seo-meta';
import { generateBreadcrumbSchema, schemaToJsonLd } from '@/utils/schemas';
import { Button } from '@/components/ui/Button';

interface GalleryItem {
  id: string;
  service: string;
  title: string;
  beforeAlt: string;
  afterAlt: string;
  // Note: Using placeholder image service for now
  // Replace with actual image paths when you have real photos
  beforeImage: string;
  afterImage: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    service: 'mowing',
    title: 'Residential Lawn Mowing',
    beforeAlt: 'Overgrown residential lawn before professional mowing service in Louisville Kentucky',
    afterAlt: 'Perfectly manicured residential lawn after professional mowing by Aaron\'s Lawn Care in Louisville KY',
    beforeImage: 'https://placehold.co/800x600/4a7d26/white?text=Before+Mowing',
    afterImage: 'https://placehold.co/800x600/2d5016/white?text=After+Mowing',
  },
  {
    id: '2',
    service: 'landscaping',
    title: 'Landscape Design & Installation',
    beforeAlt: 'Empty residential yard before professional landscaping in Louisville Kentucky',
    afterAlt: 'Beautiful landscaped garden after professional installation by Aaron\'s Lawn Care Louisville KY',
    beforeImage: 'https://placehold.co/800x600/8B7355/white?text=Before+Landscaping',
    afterImage: 'https://placehold.co/800x600/4a7d26/white?text=After+Landscaping',
  },
  {
    id: '3',
    service: 'mulching',
    title: 'Garden Bed Mulching',
    beforeAlt: 'Garden bed before professional mulching service in Louisville KY',
    afterAlt: 'Fresh premium mulch installed in garden bed by Aaron\'s Lawn Care Louisville Kentucky',
    beforeImage: 'https://placehold.co/800x600/8B7355/white?text=Before+Mulching',
    afterImage: 'https://placehold.co/800x600/4a7d26/white?text=After+Mulching',
  },
  {
    id: '4',
    service: 'cleanup',
    title: 'Fall Leaf Cleanup',
    beforeAlt: 'Residential yard covered with fall leaves before cleanup in Louisville Kentucky',
    afterAlt: 'Clean yard after professional fall leaf removal by Aaron\'s Lawn Care Louisville KY',
    beforeImage: 'https://placehold.co/800x600/d97706/white?text=Before+Cleanup',
    afterImage: 'https://placehold.co/800x600/4a7d26/white?text=After+Cleanup',
  },
  {
    id: '5',
    service: 'hedges',
    title: 'Hedge Trimming & Shaping',
    beforeAlt: 'Overgrown hedges before professional trimming service in Louisville KY',
    afterAlt: 'Neatly trimmed and shaped hedges by Aaron\'s Lawn Care Louisville Kentucky',
    beforeImage: 'https://placehold.co/800x600/059669/white?text=Before+Trimming',
    afterImage: 'https://placehold.co/800x600/10b981/white?text=After+Trimming',
  },
  {
    id: '6',
    service: 'edging',
    title: 'Professional Edging',
    beforeAlt: 'Undefined lawn edges before professional edging in Louisville Kentucky',
    afterAlt: 'Crisp clean edges along walkway by Aaron\'s Lawn Care Louisville KY',
    beforeImage: 'https://placehold.co/800x600/6b7280/white?text=Before+Edging',
    afterImage: 'https://placehold.co/800x600/4a7d26/white?text=After+Edging',
  },
];

const serviceFilters = [
  { id: 'all', label: 'All Services' },
  { id: 'mowing', label: 'Lawn Mowing' },
  { id: 'landscaping', label: 'Landscaping' },
  { id: 'mulching', label: 'Mulching' },
  { id: 'cleanup', label: 'Cleanups' },
  { id: 'hedges', label: 'Hedge Trimming' },
  { id: 'edging', label: 'Edging' },
];

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.service === selectedFilter);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://aaronslawncare502.com' },
    { name: 'Gallery', url: 'https://aaronslawncare502.com/gallery' }
  ]);

  return (
    <>
      <SEOHead {...getGalleryPageSEO()} schemaMarkup={schemaToJsonLd(breadcrumbSchema)} />

      {/* Hero Section */}
      <section className="relative bg-[#Fdfdfc] text-green-950 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green-900">
              Our Work Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              See the difference professional lawn care makes. Browse our before and after photos.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {serviceFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${selectedFilter === filter.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No items found for this filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>

                  {/* Before Image */}
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                      Before
                    </div>
                    <button
                      onClick={() => setSelectedImage({ src: item.beforeImage, alt: item.beforeAlt })}
                      className="w-full block"
                    >
                      <img
                        src={item.beforeImage}
                        alt={item.beforeAlt}
                        loading="lazy"
                        width="800"
                        height="600"
                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity cursor-pointer"
                      />
                    </button>
                  </div>

                  {/* After Image */}
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                      After
                    </div>
                    <button
                      onClick={() => setSelectedImage({ src: item.afterImage, alt: item.afterAlt })}
                      className="w-full block"
                    >
                      <img
                        src={item.afterImage}
                        alt={item.afterAlt}
                        loading="lazy"
                        width="800"
                        height="600"
                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Placeholder Notice */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              Gallery Coming Soon
            </h3>
            <p className="text-blue-800">
              We're currently compiling our best before and after photos. Check back soon to see examples of our work!
              In the meantime, <a href="/quote" className="font-bold underline">request a free quote</a> to get started.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Ready to Transform Your Lawn?
              </h2>
              <p className="text-lg text-primary-100 mb-10">
                Let's make your property our next success story
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" className="w-full sm:w-auto text-lg items-center h-14" asChild>
                  <a href="/contact">Get Your Free Quote</a>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white h-14">
                  Call (502) 926-8524
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            loading="eager"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
