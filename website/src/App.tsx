import Router from './router.tsx';
import { ToastProvider } from './contexts/ToastContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ToastProvider>
          <Router />
        </ToastProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
