import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SiirPage from '../src/SiirPage.jsx';
import { ThemeProvider } from '../src/components/ThemeProvider.jsx';
import '../assets/site.css';

createRoot(document.getElementById('root')).render(
  <StrictMode><ThemeProvider><SiirPage /></ThemeProvider></StrictMode>
);
