import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from '../src/HomePage.jsx';
import { ThemeProvider } from '../src/components/ThemeProvider.jsx';
import '../assets/site.css';

createRoot(document.getElementById('root')).render(
  <StrictMode><ThemeProvider><HomePage /></ThemeProvider></StrictMode>
);
