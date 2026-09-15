# MARKET ME — Website

A premium, single-page marketing site for MARKET ME, built as a lightweight static website that can be uploaded directly to GitHub Pages, Netlify, Vercel, etc.

## Files
- `index.html` — page structure/content
- `styles.css` — responsive visual system and animations
- `script.js` — mobile navigation, contact form handling and subtle motion

## Contact form
The form is ready for Formspree, but the endpoint is intentionally a placeholder.

1. Create a form at https://formspree.io/
2. Copy your endpoint, for example `https://formspree.io/f/xxxxx`
3. In `index.html`, replace:
   `https://formspree.io/f/YOUR_FORM_ID`
   with your real endpoint.
4. Replace `hello@marketme.agency` with your real business email if needed.

## Deploy on GitHub
1. Create/open your GitHub repository.
2. Upload `index.html`, `styles.css`, and `script.js` to the root.
3. Go to Settings → Pages.
4. Under Build and deployment, select `Deploy from a branch`.
5. Choose your main branch and `/ (root)`.
6. Save.

The site is fully responsive and does not require a build step.
