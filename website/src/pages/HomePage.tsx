import { Helmet } from 'react-helmet-async';
import { Gallery } from '../components/home/Gallery';
import { Hero } from '../components/home/Hero';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { Testimonials } from '../components/home/Testimonials';
import { Features } from '../components/home/Features';
import { CallToAction } from '../components/home/CTA';
import { generateLocalBusinessSchema } from '../utils/schemas';

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* Enhanced LocalBusiness Schema for SEO - Rich Results eligible */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <ServicesPreview />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="cta">
          <CallToAction />
        </section>
      </main>
    </>
  );
}
