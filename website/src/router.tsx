import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Main Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const QuotePage = lazy(() => import('./pages/QuotePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostTemplate = lazy(() => import('./pages/BlogPostTemplate'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const HeroPreview = lazy(() => import('./pages/HeroPreview'));

// Service Detail Pages
const LawnMowingPage = lazy(() => import('./pages/services/LawnMowingPage'));
const EdgingPage = lazy(() => import('./pages/services/EdgingPage'));
const LeafRemovalPage = lazy(() => import('./pages/services/LeafRemovalPage'));
const MulchingPage = lazy(() => import('./pages/services/MulchingPage'));
const FallCleanupPage = lazy(() => import('./pages/services/FallCleanupPage'));
const SpringCleanupPage = lazy(() => import('./pages/services/SpringCleanupPage'));
const HedgeTrimmingPage = lazy(() => import('./pages/services/HedgeTrimmingPage'));
const LandscapeDesignPage = lazy(() => import('./pages/services/LandscapeDesignPage'));
const LandscapeMaintenancePage = lazy(() => import('./pages/services/LandscapeMaintenancePage'));
const SnowRemovalPage = lazy(() => import('./pages/services/SnowRemovalPage'));
const AerationPage = lazy(() => import('./pages/services/AerationPage'));
const LawnTreatmentPage = lazy(() => import('./pages/services/LawnTreatmentPage'));
const DebrisRemovalPage = lazy(() => import('./pages/services/DebrisRemovalPage'));
const GutterCleaningPage = lazy(() => import('./pages/services/GutterCleaningPage'));
const PressureWashingPage = lazy(() => import('./pages/services/PressureWashingPage'));
const TreeRemovalPage = lazy(() => import('./pages/services/TreeRemovalPage'));
const SeasonalCleanupPage = lazy(() => import('./pages/services/SeasonalCleanupPage'));

// Location Pages
const StMatthewsPage = lazy(() => import('./pages/areas/StMatthewsPage'));
const HighlandsPage = lazy(() => import('./pages/areas/HighlandsPage'));
const JeffersontownPage = lazy(() => import('./pages/areas/JeffersontownPage'));
const MiddletownPage = lazy(() => import('./pages/areas/MiddletownPage'));
const ProspectPage = lazy(() => import('./pages/areas/ProspectPage'));
const AnchoragePage = lazy(() => import('./pages/areas/AnchoragePage'));
const OkolonaPage = lazy(() => import('./pages/areas/OkolonaPage'));
const LyndonPage = lazy(() => import('./pages/areas/LyndonPage'));
const ShivelyPage = lazy(() => import('./pages/areas/ShivelyPage'));

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: (
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        ),
        children: [
          // Main Pages
          { index: true, element: <HomePage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'services', element: <ServicesPage /> },
          { path: 'quote', element: <QuotePage /> },
          { path: 'contact', element: <ContactPage /> },
          { path: 'gallery', element: <GalleryPage /> },
          { path: 'reviews', element: <ReviewsPage /> },
          { path: 'faq', element: <FAQPage /> },
          { path: 'blog', element: <BlogPage /> },
          { path: 'blog/:slug', element: <BlogPostTemplate /> },
          { path: 'privacy', element: <PrivacyPage /> },
          { path: 'terms', element: <TermsPage /> },

          // Service Detail Pages
          { path: 'services/lawn-mowing', element: <LawnMowingPage /> },
          { path: 'services/edging', element: <EdgingPage /> },
          { path: 'services/leaf-removal', element: <LeafRemovalPage /> },
          { path: 'services/mulching', element: <MulchingPage /> },
          { path: 'services/fall-cleanup', element: <FallCleanupPage /> },
          { path: 'services/spring-cleanup', element: <SpringCleanupPage /> },
          { path: 'services/hedge-trimming', element: <HedgeTrimmingPage /> },
          { path: 'services/landscape-design', element: <LandscapeDesignPage /> },
          { path: 'services/landscape-maintenance', element: <LandscapeMaintenancePage /> },
          { path: 'services/snow-removal', element: <SnowRemovalPage /> },
          { path: 'services/aeration', element: <AerationPage /> },
          { path: 'services/lawn-treatment', element: <LawnTreatmentPage /> },
          { path: 'services/debris-removal', element: <DebrisRemovalPage /> },
          { path: 'services/gutter-cleaning', element: <GutterCleaningPage /> },
          { path: 'services/pressure-washing', element: <PressureWashingPage /> },
          { path: 'services/tree-removal', element: <TreeRemovalPage /> },
          { path: 'services/seasonal-cleanup', element: <SeasonalCleanupPage /> },

          // Location Pages
          { path: 'areas/st-matthews', element: <StMatthewsPage /> },
          { path: 'areas/highlands', element: <HighlandsPage /> },
          { path: 'areas/jeffersontown', element: <JeffersontownPage /> },
          { path: 'areas/middletown', element: <MiddletownPage /> },
          { path: 'areas/prospect', element: <ProspectPage /> },
          { path: 'areas/anchorage', element: <AnchoragePage /> },
          { path: 'areas/okolona', element: <OkolonaPage /> },
          { path: 'areas/lyndon', element: <LyndonPage /> },
          { path: 'areas/shively', element: <ShivelyPage /> },

          // Catch-all 404
          { path: '*', element: <NotFoundPage /> },
          { path: 'hero-preview', element: <HeroPreview /> },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
