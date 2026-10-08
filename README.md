# Siirsuite websites

Two Vite + React websites sharing Siir's monochrome theme, bundled fonts, and branding:

- **Siirsuite** (`root/`) → **siirsuite.online** — project home with an interactive Lissajous curve.
- **Siir** (`siir/`) → **siirsuite.online/siir/** — Android app website with screenshots and GitHub release links.

## Development

Requires Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

The main site runs at `http://localhost:5173/`. In a second terminal, start the app site:

```sh
npm run dev:siir
```

The app site runs at `http://localhost:5174/siir/`. Cross-site links use these local ports during development. Vite provides React Fast Refresh.

## Build and preview

```sh
npm run build
```

Builds both sites independently into `dist/root/` and `dist/siir/`. Use `npm run build:root` or `npm run build:siir` to build just one.

Run `npm run preview` for the main site at `http://localhost:4173/` and, in another terminal, `npm run preview:siir` for the app site at `http://localhost:4174/siir/`.

## Hosting

Run `npm run build:pages` to assemble a single deployment in **dist/pages**. The homepage lives at **siirsuite.online/** and the Siir app page at **siirsuite.online/siir/**. Both pages share the same origin and theme preference.

The standalone builds remain in `dist/root` and `dist/siir`. The app build now expects the `/siir/` URL prefix. For a GitHub project URL before a custom domain is configured, set `SITE_BASE_PATH=/siirsuite-page` during the build. The deployment workflow automatically uses GitHub's configured base path.

Hosting and DNS are not yet configured.

## Source structure

- `root/index.html`, `root/main.jsx`: main-site entry and SEO metadata.
- `siir/index.html`, `siir/main.jsx`: app-site entry and SEO metadata.
- `src/HomePage.jsx`, `src/SiirPage.jsx`: React page components.
- `src/components/`: shared layout, theme context and controls, cross-site links, and the interactive canvas.
- `assets/site.css`: shared theme and responsive styles.
- `assets/fonts/`, `assets/*.svg`: locally bundled Siir fonts and branding.
- `siir/screenshots/`: dark and light app screenshots, imported and bundled by Vite.
- `public/licenses/`: asset and font licenses included in both builds.
- `vite.config.js`: development ports, independent builds, and search metadata.

Both sites support light and dark themes. Theme choice is stored locally; the initial choice follows the visitor's system setting. Fonts and branding were copied from `../siir/`, so builds do not require the neighboring checkout.

## Screenshot themes

App screenshots deliberately contrast with the site: dark screenshots appear in the light site theme, and light screenshots appear in the dark site theme. `src/screenshots.js` maps each view to its images; `AppScreenshot` selects the image using the shared React theme.

The updated dark analysis screenshots are mapped by their original filenames. The existing fluid and cellular-music screenshots are retained from `siir/screenshots/.bak/`.

The supplied light screenshots are explicitly paired with their corresponding dark views in `src/screenshots.js`, using their original filenames. The fluid visualizer has only its original screenshot, so it remains the same in both themes.

The header wordmark combines the sIIr SVG with “suite” set in Zain, the body font.

## GitHub deployment

The intended source repository is **siirsuite/siirsuite-page**, public. `.github/workflows/deploy-pages.yml` builds and publishes both pages to GitHub Pages on pushes to `main`, or when started manually.

After the public repository is created and the source is pushed:

1. In repository **Settings → Pages**, select **GitHub Actions** as the build source.
2. Run the **Build and deploy websites** workflow, or push to `main`.
3. Configure **siirsuite.online** as the custom domain. Follow GitHub's displayed DNS instructions, then enable **Enforce HTTPS** after the certificate is ready. Run the workflow again after changing the custom domain so the asset base path updates.

The source repository and the deployed website are public.

The app currently uses `/siir/` rather than a separate subdomain, as requested for this deployment.

No GitHub repository, Pages settings, or DNS records have been created or changed from this environment yet.

From a terminal with working GitHub access and permission to create repositories in the `siirsuite` organization, run:

```sh
bash scripts/publish-github.sh
```

The script checks access, builds the site, initializes and commits this checkout when needed, creates **siirsuite/siirsuite-page** as a public repository, pushes it, enables GitHub Pages, sets the custom domain, and starts the deployment workflow. It refuses to overwrite an existing repository or remote. Follow the workflow result and finish the domain's DNS and HTTPS configuration in GitHub Pages settings.
