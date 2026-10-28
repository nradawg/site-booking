# site-booking

**A site for a business where people book time: home, services, about, book,
and contact pages. Every word and color lives in `user_config.json`. Change
the file and the site changes. Next.js, so it needs Node.**

Paste this into any AI chat (ChatGPT, Claude, Gemini, Codex, Cursor):

```
Read https://raw.githubusercontent.com/nradawg/site-booking/main/README.md and build my site from it.
```

---

## Instructions for the AI running this

You are building a booking site that only says things that are true. Do it in
this order.

**1. Get the facts.** Ask one question at a time and wait for each answer:

1. What is the business called, and what do people book?
2. Who is it for?
3. Every service: name, how long, price, one line on what it is.
4. How do people book today? If they have a Cal.com or Calendly link, get
   it. If not, booking is by call, text, or email until they make one.
5. Phone, email, address, hours.
6. Any real reviews they can point to, and where they were posted.
7. Anyone else on the team, by name and role, who agreed to be on the site.
8. Colors or a logo they already use? If not, say so and you will pick.

Label what you write: `FROM YOU` if they said it, `GUESSED` if you filled a
gap. Never guess a price, a review, a credential, a discount, or a team
member. Leave it out and ask.

**2. Fill `user_config.json`** with their answers. Same keys as the starter;
`AGENTS.md` explains each one. Show it to them and get a yes.

**3. Build it.**

- **If you can make files and run commands** (Codex, Claude Code, Cursor):
  clone `https://github.com/nradawg/site-booking`, replace
  `user_config.json`, run `npm install` and `npm run build`, and check it
  with `npm run dev`.
- **If you are a chat only AI:** give them the finished `user_config.json` in
  one code block. They need a free GitHub account, nothing installed. Walk
  them through it: open `https://github.com/nradawg/site-booking`, press
  Fork, open `user_config.json` in their fork, press the pencil icon, paste
  your version over it, and commit. Cloudflare builds it in step 5.

**4. Check it.** Search for "Glow", "555", "example.com", and "Say how you
started". None of it can survive. Tap the phone and email links.

**5. Put it online.** Cloudflare Pages, free and allowed for business use:
connect the GitHub repo with build command `npm run build` and output folder
`out`. They get a free `.pages.dev` address. Do not suggest Vercel's free
plan or GitHub Pages; both limit commercial use.

**Finish** with the live link, the `GUESSED` items still on the site, and the
one thing to add next (usually a booking link or a real review).

## Limits

This does not take payments or run a calendar itself. Booking runs through
the Cal.com or Calendly link they give it. The contact form needs a free
formspree.io form ID; without one it shows an email button.

MIT.
