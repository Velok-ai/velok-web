# velok.ai

The Velok marketing site. Next.js 14 (App Router), Tailwind 4, French and English, static pages plus one API route.

## Run it

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # what Vercel runs
npm run typecheck
```

Node 22. Copy `.env.example` to `.env.local` for the lead form; the pages render without it.

## Where things are

| What | Where |
|---|---|
| Pages | `app/(fr)/<route>/page.tsx and app/en/<route>/page.tsx` (one file per URL, plain JSX + CSS classes) |
| Shared header, footer, page frame | `components/site-shell.tsx` |
| The three forms (nurture, safety, prequalification) | `components/lead-forms.tsx` |
| Form submissions | `app/api/leads/route.ts` |
| All styling | `app/globals.css`, `app/museum.css`, `app/cohesion.css` (historical painted styles; current V2 uses app/globals.css) |
| Fonts | Manrope + Source Serif 4, bundled from `@fontsource-variable` |
| Brand SVG elements, hero images, OG image | `public/brand/`, `public/og.png` |
| Sitemap, robots | `app/sitemap.ts`, `app/robots.ts` (add a route to the list when you add a page) |
| Old English URLs | `next.config.mjs` redirects (`/contact` to `/commencer`, and so on) |

## Leads

Every form posts to `/api/leads`. The route emails the submission to `VELOK_LEAD_EMAIL` (comma-separated
for several people) through Resend. That email is the record: if it cannot be sent, the visitor gets an
error and can retry. With marketing consent the address is also added to the Resend segment
"Velok — Parcours IA". Nothing else stores the lead.

`RESEND_API_KEY` currently belongs to the Lemonbrand Resend account, so mail goes out as
`Velok via Lemonbrand <hello@lemonbrand.io>`. To send as `@velok.ai`, verify the domain in Resend and set
`VELOK_FROM_EMAIL`.

## Deploy

Vercel project `velok-web` builds `main` on every push and serves `velok.ai` and `www.velok.ai`.
Pull requests get a preview URL in the PR checks. Environment variables live in the Vercel project settings.

## Brand

The website V2 approved on 5 October 2026 uses ivory/navy/blue styling in app/globals.css
and the 3D workplace illustrations in public/brand/v2/. Shared brand rules and positioning
remain in github.com/Velok-ai/shared, folder 06-brand.

## Languages

French URLs are preserved. English pages use matching routes under /en.
The FR/EN control opens the matching page and preserves query parameters and the anchor.
Separate root layouts render the correct HTML language. Pages provide canonical URLs and
French/English alternates; both versions are in the sitemap. The English social card is
public/og-v2-en.png.

Forms in both languages use the existing /api/leads route. Their payload includes language
so the notification identifies the visitor’s language. Form success still depends on a successful
notification; an error never appears as a successful submission.

Additional upstream routes /ai-sherpa, /partenaires/agences and /secteurs/services-professionnels
are retained and have English counterparts.

## Adding a page

1. Create `app/(fr)/<route>/page.tsx and app/en/<route>/page.tsx`, wrap it in `SiteShell` like the others, export `metadata`.
2. Add the route to `app/sitemap.ts`.
3. Link it from `components/site-shell.tsx` if it belongs in the nav or footer.
