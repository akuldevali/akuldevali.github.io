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

## Professional profile

`linkedin/index.html` serves a LinkedIn-inspired, independent professional profile
at `/linkedin/`. It shares the existing résumé and requires no build step, backend,
or DNS changes. The existing Pages workflow uploads the new directory automatically.

- `linkedin/profile.css` — responsive profile layout and print styles
- `linkedin/profile.js` — contact dialog, post filters, section search, and sharing

Content is static HTML. Update experience, education, and the two Activity posts
directly in `linkedin/index.html`. The current avatar uses initials; the post covers
are designed artwork, not event photographs. Post copy is drafted from the supplied
milestones. No connection, follower, reaction, or endorsement counts are fabricated.

Preview from the repository root with `python -m http.server 8000`, then open
`http://localhost:8000/linkedin/`. Both `/linkedin` (redirect) and `/linkedin/`
work with directory-index hosting. Merging into `main` triggers publication.

Official organization logos are stored in `linkedin/assets/`; see
`linkedin/assets/SOURCES.md` for provenance. They retain their native aspect ratios.
