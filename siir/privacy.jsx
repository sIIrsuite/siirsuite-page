import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '../src/components/ThemeProvider.jsx';
import { SiteHeader } from '../src/components/SiteLayout.jsx';

// Policy content is already present in HTML; React only enhances the header.
createRoot(document.getElementById('policy-header')).render(
  <StrictMode><ThemeProvider><SiteHeader site="siir" detail /></ThemeProvider></StrictMode>
);
