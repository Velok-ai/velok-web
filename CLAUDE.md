# velok-web: agent notes

`AGENTS.md` is a symlink to this file. Read `README.md` first; it is the map.

- This repo is the whole site. No monorepo, no design-system package, no database. Do not add a
  backend for the lead form; the notification email is the record (see `app/api/leads/route.ts`).
- Two owners: Simon Bergeron (`@SLBergeron`) and David Desbons Lauvaux (`@ddesbons`). Company canon,
  positioning and brand live in `github.com/Velok-ai/shared`; keep them there, not here.
- French first. Copy on the site is French; keep the accents and the typographic apostrophe (’).
- Every page is `SiteShell` + sections styled by classes in `app/globals.css`. Reuse a class before
  inventing one; the tokens at the top of that file are the design system.
- After any change to routes: update `app/sitemap.ts`, keep the redirects in `next.config.mjs` working.
- Verify before declaring done: `npm run typecheck && npm run build`, then look at the page in a
  browser at phone width and desktop width.
- Never commit `.env*` files or a client's data. Never put a lead's email in a commit.
