import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

function initialTheme() {
  try {
    const saved = localStorage.getItem('siir-theme');
    if (saved === 'dark' || saved === 'light') return saved;
  } catch { /* Preferences remain usable when storage is unavailable. */ }
  return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#000000' : '#fcfcfa');
    try { localStorage.setItem('siir-theme', theme); } catch { /* Storage is optional. */ }
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(current => current === 'dark' ? 'light' : 'dark') }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${next} theme`}>{next === 'light' ? 'Light mode' : 'Dark mode'}</button>;
}
