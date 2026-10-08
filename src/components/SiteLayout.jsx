import { ThemeToggle } from './ThemeProvider.jsx';
import siirLogo from '../../assets/siir.svg';

export function SiteLink({ site, children, ...props }) {
  const base = import.meta.env.BASE_URL;
  const rootBase = base.endsWith('siir/') ? base.slice(0, -5) : base;
  let href = `${rootBase}${site === 'siir' ? 'siir/' : ''}`;
  if (import.meta.env.DEV || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)) {
    const local = new URL(location.href);
    const preview = location.port === '4173' || location.port === '4174';
    local.port = String((preview ? 4173 : 5173) + (site === 'siir' ? 1 : 0));
    local.pathname = site === 'siir' ? '/siir/' : '/'; local.search = ''; local.hash = '';
    href = local.href;
  }
  return <a {...props} href={href}>{children}</a>;
}

export function SiteHeader({ site, detail = false }) {
  const isApp = site === 'siir';
  return <header>
    <SiteLink className="brand" site="root" aria-label="Siirsuite home">
      <img className="mark" src={siirLogo} alt="" aria-hidden="true" width="76" height="50" />
      <span>suite</span>
    </SiteLink>
    <nav aria-label="Main navigation">
      <a href={detail ? `${import.meta.env.BASE_URL}#explore` : isApp ? '#explore' : '#projects'}>{isApp ? 'Explore' : 'Projects'}</a>
      <a href={`https://github.com/siirsuite${isApp ? '/siir' : ''}`}>GitHub</a>
      <ThemeToggle />
    </nav>
  </header>;
}

export function SiteLayout({ site, children }) {
  const isApp = site === 'siir';
  return <>
    <a href="#main" className="skip">Skip to content</a>
    <div className="wrap">
      <SiteHeader site={site} />
      {children}
      <footer className="footer">
        <p>© 2026 Sahil Raj · {isApp ? 'A Siirsuite project' : 'Siirsuite'}</p>
        {isApp && <a href={`${import.meta.env.BASE_URL}privacy-policy/`}>Privacy policy</a>}
        <SiteLink site={isApp ? 'root' : 'siir'}>{isApp ? 'Back to Siirsuite' : 'Siir for Android'}</SiteLink>
      </footer>
    </div>
  </>;
}
