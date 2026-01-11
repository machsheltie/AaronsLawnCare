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
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

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

          // Catch-all 404
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
