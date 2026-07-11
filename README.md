# Le Bijou — Landing Page

A single-page, animated landing site for **Le Bijou**, a French pastry coffee shop on Palace Street, North Kaneshie, Accra.

Plain HTML/CSS/JS — no build step, no framework, no dependencies. Open `index.html` directly or deploy the folder as-is to any static host.

## Structure

```
.
├── index.html        # markup + content
├── css/
│   └── style.css      # all styling, design tokens at the top (:root)
├── js/
│   └── main.js         # scroll effects, mobile nav, open/closed status, image fallbacks
└── README.md
```

## Before you publish — real info still needed

A few things were placeholders or best-effort guesses pulled from limited source material (Google Business Profile screenshots) and should be swapped for the real thing before this goes live:

- **Phone / WhatsApp number** — `index.html`, in the "Visit Us" section, the `Call:` button currently points to `tel:+233000000000`. Replace with the real line (and consider adding a `wa.me/23...` WhatsApp link alongside or instead of `tel:`).
- **Menu prices** — all GH₵ prices in the Menu section are estimated placeholders. Confirm against the actual till/menu board.
- **Photography** — all photos are stock images (Unsplash, hotlinked by URL) chosen to match the shop's warm, French-pastry aesthetic. Swap in real shop photos as you get them — replace the `src` values in `index.html` (Story, Menu, Gallery sections) or drop files into a local `images/` folder and update the paths.
- **Google Maps embed / directions link** — currently a name-based Maps search (`Le Bijou Coffee Shop, Palace St, Accra, Ghana`). If you have the exact Google Maps place link or coordinates, swap them in for a pinpoint-accurate embed.

## Local preview

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative asset paths and the map embed behave exactly like production:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploying

This is a static site — any static host works with zero configuration:

- **GitHub Pages**: push this folder to a repo, enable Pages on the `main` branch (root), done.
- **Netlify / Vercel**: drag-and-drop the folder, or connect the repo — no build command needed, publish directory is `/`.

### Git

```bash
git init
git add .
git commit -m "Initial commit: Le Bijou landing page"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Notes on the build

- **Fonts**: Fraunces (display/serif), Caveat (handwritten accents), Work Sans (body) — loaded from Google Fonts via CDN link in `<head>`.
- **Images**: hotlinked from Unsplash's CDN (`images.unsplash.com`). These require an internet connection to load; there's a JS fallback (`js/main.js`) that swaps in a plain gradient if an image fails to load.
- **Colors**: all design tokens live at the top of `css/style.css` under `:root` — change one value there to retheme the whole site. The palette is intentionally unified: a single dark "espresso" tone is reused across every dark section (menu, marquee, reviews, footer) rather than mixing multiple dark hues, and forest green is used only as a small accent, never as a full section background.
- **Live "Open / Closed" badge**: computed client-side in `js/main.js` against Africa/Accra time (UTC+0, no DST) from the real posted hours (Mon–Sat 6am–9pm, closed Sunday).
