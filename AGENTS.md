<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes: APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Rules for the AI editing this site

`user_config.json` is the source of truth. Every page reads it through
`src/config.ts`, so changing the config changes the site. Edit the config
first. Touch the code only for layout changes the config cannot express.

## What each key does

- **site_name, tagline, description, intro, location_label:** nav, tab
  title, home hero, footer.
- **colors:** set as CSS variables in `src/app/layout.tsx`, used everywhere
  as `var(--primary)`, `var(--secondary)`, `var(--accent)`.
- **services:** the Services page, grouped by `category`. Entries with
  `"featured": true` also show on the home page.
- **booking_url:** a Cal.com, Calendly, or similar booking link. The Book page
  embeds it. Empty means the Book page says call, text, or email.
- **about, values:** the About page.
- **team, reviews, offers:** each section shows only when its list has
  entries. They start empty on purpose.
- **formspree_id:** the ID from a free formspree.io form. Empty means the
  contact page shows an email button instead of a form.

## Never

- Never write a review, team member, credential, discount, award, "since
  20XX", or customer count the owner did not give you. Reviews need a first
  name, the words, and where they were posted.
- Never leave sample text live. Before you call it done, search for "Glow",
  "555", "example.com", and "Say how you started".
- Never paste someone else's Formspree ID or booking link.

## Check before you call it done

Run `npm install` and `npm run build`. It must build with no errors. Check it
at 375px wide and at 1440px wide.

## Hosting

`next.config.ts` sets `output: "export"`, so `npm run build` writes a plain
static site to `out/`. Host it on **Cloudflare Pages**, free, commercial use
allowed: connect the GitHub repo with build command `npm run build` and
output folder `out`. They get a free `.pages.dev` address.

Do not use Vercel's free Hobby plan or GitHub Pages for a business. Both
limit commercial use in their own terms.
