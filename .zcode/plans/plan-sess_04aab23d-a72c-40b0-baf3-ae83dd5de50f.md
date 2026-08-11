## Problem
The old link (`calm-capybara-930e8a.netlify.app`) stopped working because it was an **anonymous** Netlify deploy — those auto-expire after 60 minutes if not claimed to an account. You never claimed it, so it died. The game code and build are fine.

## Fix: redeploy with authentication → permanent URL that never expires
You've confirmed you can log in to a free host. I'll use the Netlify CLI with interactive login so the site is tied to your account and won't expire.

### Steps I'll run
1. **Verify the build still exists** — confirm `dist/` is present (it was built earlier today). If anything's missing, rebuild with `npm run build`.
2. **Authenticate once** — run `npx netlify-cli@latest login`. This opens a browser tab; you click **Authorize** and log in (Google/email, ~20 seconds). This stores a permanent auth token on your Mac so future deploys don't need re-login.
3. **Create a permanent site + deploy** — run `npx netlify-cli@latest deploy --dir=dist --prod`. Since you're now logged in, this creates a new permanent site linked to your account and publishes the build. It prints the final URL (e.g. `https://something.netlify.app`).
4. **Confirm the URL works** — `curl` it to verify HTTP 200 and that the game assets load.
5. **(Optional) Friendly name** — after it's live I can rename the subdomain to something nicer like `fruit-crush-3d.netlify.app` via `netlify domains:set` if that name is free.

### What you do
- One browser login/authorize click during step 2. Nothing else — I run everything from the terminal and hand you the URL.

### Result
- A **permanent public URL** that works on any phone, any network, forever.
- To update the game later: `npm run build` then re-run the deploy command (no re-login needed).

### No code changes
This touches only deployment — `main.js`, `index.html`, and all the mobile/touch/fruit work stays exactly as-is.

### Note on "tokens"
The Netlify login stores a **Personal Access Token** in your Mac's config (`~/.netlify/config`) after you authorize, which is how the CLI authenticates future deploys without asking again. That's the only "token" involved — no cost, no quota, free tier.