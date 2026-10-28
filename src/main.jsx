import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// iOS Safari restores pages from the back/forward cache with stale layout; reload instead.
window.addEventListener('pageshow', (e) => {
  if (e.persisted) location.reload();
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
);
