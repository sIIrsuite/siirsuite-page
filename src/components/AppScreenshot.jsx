import { useTheme } from './ThemeProvider.jsx';
import { screenshots } from '../screenshots.js';

export default function AppScreenshot({ name, alt, ...props }) {
  const { theme } = useTheme();
  const images = screenshots[name];
  // Deliberately contrast the app screenshot with the website theme.
  const screenshotTheme = theme === 'light' ? 'dark' : 'light';
  // Keep the available original visible until a missing counterpart is supplied.
  const actualTheme = images[screenshotTheme] ? screenshotTheme : 'dark';
  return <img {...props} src={images[actualTheme]} alt={alt} data-screenshot-theme={actualTheme} />;
}
