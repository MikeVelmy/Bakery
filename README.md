# The Good Baker · Landing Page

A single page, animated landing site for **The Good Baker**, a popular artisan bakery and coffee bar on Garden Street, East Legon, Accra (also serving Oyarifa and Lashibi).

Plain HTML/CSS/JS, no build step, no framework, no dependencies. Open `index.html` directly or deploy the folder as is to any static host.

## Structure

```
.
├── index.html      markup + content
├── style.css       all styling, design tokens at the top (:root)
├── main.js         scroll effects, mobile nav, open/closed status, image fallbacks
├── images/
│   ├── logo.jpeg    the shop's real logo mark, used as favicon, header and footer brand
│   └── images.jpeg  a real photo of the East Legon shop interior, used in the Story section
└── README.md
```

## Where this content came from

Name, phone number, address, Google rating and menu items were pulled together from the client's provided details plus a public search of the shop's listings (Google, delivery apps, review sites) to keep the demo realistic. A few things still need confirming with the owner before this goes live:

- **Menu prices.** Item names on the menu (sourdough, cinnamon rolls, wild salmon scramble, and so on) are real, but prices were not published anywhere public, so they were left off. Add real prices once confirmed, or keep pointing people to the in store board and delivery apps.
- **Exact hours.** Public listings show every day, 7am to midnight, at the Garden Street location. Confirm hours per branch (East Legon, Oyarifa, Lashibi) if they differ.
- **Reviews.** The four review quotes in the Reviews section are paraphrased from real public review summaries, without attributing them to a specific named person, since no individual reviewer names were available. Swap in real, attributed quotes once you have permission to use them.
- **More photography.** Only two real photos were provided so far (the logo and one interior shot, now used in the header, footer and Story section). Every other photo on the site (hero background, menu photos, gallery filmstrip) is high resolution stock from Unsplash chosen to match the bakery's look. Replace those `src` values in `index.html` with real shop photos as they come in, either by hotlinking or by dropping more files into `images/` and updating the paths.
- **Google Maps embed / directions link.** Currently a name based Maps search (`The Good Baker, Garden Street, East Legon, Accra`). Swap in the exact Google Maps place link or coordinates for a pinpoint accurate embed.
- **Social links.** The shop is active on Instagram (@thegoodbaker.gh) and Facebook (thegoodbakergh); add links in the footer once confirmed with the client.

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

This is a static site, any static host works with zero configuration:

- **GitHub Pages**: push this folder to a repo, enable Pages on the `main` branch (root), done.
- **Netlify / Vercel**: drag and drop the folder, or connect the repo, no build command needed, publish directory is `/`.

### Git

```bash
git init
git add .
git commit -m "Initial commit: The Good Baker landing page"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Notes on the build

- **Fonts**: Fraunces (display/serif), Caveat (handwritten accents), Work Sans (body), loaded from Google Fonts via CDN link in `<head>`.
- **Images**: the logo and one interior shot are real client photos in `images/`; everything else is hotlinked from Unsplash's CDN (`images.unsplash.com`). Hotlinked images require an internet connection to load; there's a JS fallback (`main.js`) that swaps in a plain gradient if an image fails to load.
- **Colors**: all design tokens live at the top of `style.css` under `:root`, change one value there to retheme the whole site. The amber, gold and near black accent palette is pulled directly from the shop's yellow and black logo mark.
- **Live "Open / Closed" badge**: computed client side in `main.js` against Africa/Accra time (UTC+0, no DST) from the real posted hours (every day, 7am to midnight).
