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

Content is static HTML. Update experience, education, and the Activity posts
directly in `linkedin/index.html`. The profile uses the supplied portrait and cat cover. Activity includes graduation,
AWS re:Invent, and the FlexGen internship, with photographs and two-image galleries.
Post copy is drafted from the supplied milestones. No connection, follower, reaction, or endorsement counts are fabricated.

Preview from the repository root with `python -m http.server 8000`, then open
`http://localhost:8000/linkedin/`. Both `/linkedin` (redirect) and `/linkedin/`
work with directory-index hosting. Merging into `main` triggers publication.

Official organization logos are stored in `linkedin/assets/`; see
`linkedin/assets/SOURCES.md` for provenance. They retain their native aspect ratios.

The profile’s navigation includes a light/dark toggle. `linkedin/theme.js` applies
a stored choice before styles load, otherwise follows the system color scheme.
The choice is saved in localStorage under `akul-profile-theme`; the toggle also
works for the current tab if storage is blocked. Print output keeps the light palette.

Photo assets live in `linkedin/assets/photos/`; source filenames and placements are
listed in `linkedin/assets/SOURCES.md`. The FlexGen gallery shows the complete official
wordmark first and the internship group second. The re:Invent gallery starts with
Akul’s signature-wall portrait. Galleries support buttons, horizontal swiping, and
left/right arrow keys; click an image to open the full photograph. Print output
includes all gallery images.
