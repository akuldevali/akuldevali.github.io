# Akul Devali — Professional profile and portfolio

A dependency-free static site, hosted on GitHub Pages at [akuldevali.fyi](https://akuldevali.fyi/).

## Routes

| URL | Page | Source |
| --- | --- | --- |
| `/` | LinkedIn-inspired professional profile | `index.html` |
| `/me/` | Original DevOps portfolio | `me/index.html` |
| `/linkedin/` | Redirect to the profile homepage, preserving query strings and anchors with JavaScript | `linkedin/index.html` |

The profile’s **Portfolio** navigation item and **Full portfolio** link open `/me/`.
The portfolio’s **LinkedIn** hero button and navigation link return to `/`.
GitHub Pages redirects `/me` to `/me/` through directory-index hosting.
FlexGen logos/names link to https://flexgen.com/; the LRL experience logo/name link to https://liquidrocketry.com/.

## Files

- `index.html` — professional profile content
- `linkedin/profile.css`, `linkedin/profile.js`, `linkedin/theme.js` — profile styles and interactions
- `linkedin/assets/` — logos and personal photos; provenance in `linkedin/assets/SOURCES.md`
- `me/index.html` — original portfolio content
- `style.css`, `script.js`, `favicon.svg` — shared root assets used by the portfolio
- `Akul-Resume.pdf` — résumé shared by both pages

The profile includes a saved light/dark theme preference, contact dialog, section
search, activity filters, and photo galleries. Gallery controls support buttons,
swiping, and arrow keys. Personal photos open full size; the FlexGen wordmark links
to the company website. Print output uses the light palette and includes all photos.

The theme follows the system until a visitor selects a theme. The preference is
saved under `akul-profile-theme` in localStorage, with an in-tab fallback when
storage is blocked. Photos are stored unchanged; avatar and cover framing use CSS.
No social counts or endorsements are fabricated.

## Preview and deployment

From the repository root, run `python -m http.server 8771`, then open
`http://localhost:8771/` or `http://localhost:8771/me/`.
Pushing to `main` publishes the entire repository through the existing GitHub Pages
workflow. No DNS changes or build dependencies are needed for the route changes.
