import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Loading from './components/shared/Loading';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const QuotePage = lazy(() => import('./pages/QuotePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Service pages
const LawnMowingPage = lazy(() => import('./pages/services/LawnMowingPage'));
const EdgingPage = lazy(() => import('./pages/services/EdgingPage'));
const LeafRemovalPage = lazy(() => import('./pages/services/LeafRemovalPage'));
const HedgeTrimmingPage = lazy(() => import('./pages/services/HedgeTrimmingPage'));
const MulchingPage = lazy(() => import('./pages/services/MulchingPage'));
const SpringCleanupPage = lazy(() => import('./pages/services/SpringCleanupPage'));
const FallCleanupPage = lazy(() => import('./pages/services/FallCleanupPage'));
const SnowRemovalPage = lazy(() => import('./pages/services/SnowRemovalPage'));
const LandscapeDesignPage = lazy(() => import('./pages/services/LandscapeDesignPage'));
const LandscapeMaintenancePage = lazy(() => import('./pages/services/LandscapeMaintenancePage'));

// Wrapper component for suspense
const SuspenseWrapper = () => (
  <Suspense fallback={<Loading fullscreen />}>
    <Outlet />
  </Suspense>
);

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <SuspenseWrapper />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'about',
            element: <AboutPage />,
          },
          {
            path: 'services',
            element: <ServicesPage />,
          },
          {
            path: 'services/lawn-mowing',
            element: <LawnMowingPage />,
          },
          {
            path: 'services/edging',
            element: <EdgingPage />,
          },
          {
            path: 'services/leaf-removal',
            element: <LeafRemovalPage />,
          },
          {
            path: 'services/hedge-trimming',
            element: <HedgeTrimmingPage />,
          },
          {
            path: 'services/mulching',
            element: <MulchingPage />,
          },
          {
            path: 'services/spring-cleanup',
            element: <SpringCleanupPage />,
          },
          {
            path: 'services/fall-cleanup',
            element: <FallCleanupPage />,
          },
          {
            path: 'services/snow-removal',
            element: <SnowRemovalPage />,
          },
          {
            path: 'services/landscape-design',
            element: <LandscapeDesignPage />,
          },
          {
            path: 'services/landscape-maintenance',
            element: <LandscapeMaintenancePage />,
          },
          {
            path: 'gallery',
            element: <GalleryPage />,
          },
          {
            path: 'reviews',
            element: <ReviewsPage />,
          },
          {
            path: 'quote',
            element: <QuotePage />,
          },
          {
            path: 'contact',
            element: <ContactPage />,
          },
          {
            path: 'privacy',
            element: <PrivacyPage />,
          },
          {
            path: 'terms',
            element: <TermsPage />,
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);

// Router component
export default function Router() {
  return <RouterProvider router={router} />;
}
