# Guantian Huang Academic Homepage

Static GitHub Pages source for the academic homepage.

## Local preview

Use any static HTTP server from this folder, then open `http://127.0.0.1:4173`.

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

## Published homepage

[Guantian Huang — Academic Homepage](https://guantianhuangg.github.io/)

GitHub Pages publishes this repository from the `main` branch and repository root. Commit changes to `main`, then check the Pages deployment in the Actions tab.

## Updating content

- Edit `index.html` for the biography, education, publications, and academic activities.
- Edit `styles.css` for appearance and `script.js` for interactions.
- Keep the canonical URL, social metadata, and ProfilePage/Person JSON-LD consistent with the visible profile. Do not add unverified credentials or placeholder profile images to the structured data.
- Update the homepage's `lastmod` in `sitemap.xml` when its content changes. List only canonical public pages, not section anchors or the 404 page.

## Search discovery

The homepage includes a descriptive title, meta description, canonical URL, social metadata, and ProfilePage/Person structured data. `robots.txt` allows crawling and points to `sitemap.xml`. These signals help discovery and interpretation; they do not guarantee indexing, rankings, or an exact search-result snippet.

The root-level IndexNow verification text file enables update notifications to Bing and other participating search engines. Preserve the file while using that key. An accepted notification means receipt, not guaranteed indexing; Google Search Console remains a separate process.

To inspect actual search-engine status:

1. Add `https://guantianhuangg.github.io/` to [Bing Webmaster Tools](https://www.bing.com/webmasters/) and [Google Search Console](https://search.google.com/search-console/). For Google, use a URL-prefix property on this GitHub-hosted subdomain.
2. Verify ownership with the exact HTML file or meta tag supplied by the service. Keep verification in place; do not invent verification codes.
3. Submit `https://guantianhuangg.github.io/sitemap.xml` and inspect the homepage URL. Request indexing if available.
4. Link the homepage from academic profiles you control. Check URL Inspection for discovery, crawl, canonical, and indexing status rather than relying solely on a public `site:` query.
