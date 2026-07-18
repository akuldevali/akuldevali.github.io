# Akul Devali — Portfolio

Personal portfolio site for Akul Gopal Devali, DevOps Engineer.

**Live at [akuldevali.fyi](https://akuldevali.fyi)** — hosted on GitHub Pages with the custom domain served through Cloudflare.

## Stack

Plain, dependency-free static site:

- `index.html` — page markup and content
- `style.css` — styles, theming, and animations
- `script.js` — interactivity (theme toggle, nav, scroll reveals)
- `assets/` — images and other static files
- `Akul-Resume.pdf` — downloadable resume

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Pushing to `main` publishes automatically via GitHub Pages. DNS and CDN for
`akuldevali.fyi` are managed through Cloudflare.
