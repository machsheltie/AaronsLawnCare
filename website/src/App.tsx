import { HelmetProvider } from 'react-helmet-async';
import Router from './router';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  return (
    <HelmetProvider>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </HelmetProvider>
  );
}

export default App;
