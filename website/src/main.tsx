import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initWebVitals, markPerformance, PerformanceMarks } from './utils/webVitals'

// Mark app initialization
markPerformance(PerformanceMarks.APP_INIT)

// Initialize Web Vitals monitoring
initWebVitals()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
