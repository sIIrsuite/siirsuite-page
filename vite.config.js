import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(({ mode }) => {
  const site = mode === 'siir' ? 'siir' : 'root';
  const prefix = `/${(process.env.SITE_BASE_PATH || '').replace(/^\/+|\/+$/g, '')}`.replace(/\/$/, '') + '/';
  const canonical = `https://siirsuite.online/${site === 'siir' ? 'siir/' : ''}`;
  return {
    root: `${projectRoot}${site}`,
    base: `${prefix}${site === 'siir' ? 'siir/' : ''}`,
    publicDir: `${projectRoot}public`,
    plugins: [react(), {
      name: 'site-search-metadata',
      generateBundle() {
        if (site === 'root') this.emitFile({ type: 'asset', fileName: 'robots.txt', source: 'User-agent: *\nAllow: /\nSitemap: https://siirsuite.online/sitemap.xml\n' });
        const urls = site === 'root' ? ['https://siirsuite.online/', 'https://siirsuite.online/siir/'] : [canonical];
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>${url}</loc></url>`).join('')}</urlset>\n` });
      },
    }],
    server: { port: site === 'siir' ? 5174 : 5173, strictPort: true, fs: { allow: [projectRoot] } },
    preview: { port: site === 'siir' ? 4174 : 4173, strictPort: true },
    build: { outDir: `${projectRoot}dist/${site}`, emptyOutDir: true },
  };
});
