import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n/config';
import { CartAbandonmentProvider } from './contexts/CartAbandonmentContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartAbandonmentProvider>
      <App />
    </CartAbandonmentProvider>
  </StrictMode>
);
