# projectdeuce-web

Public website for **Project Deuce** — a free, open-source, self-hostable class-based
voxel build-and-shoot FPS (TypeScript + Three.js).

Static site, zero build step, zero dependencies. All page content is data-driven from
[`data/gamedata.js`](data/gamedata.js) and rendered by [`js/site.js`](js/site.js).

> The game itself lives in a separate repository:
> [VincentRiga/ProjectDeuce](https://github.com/VincentRiga/ProjectDeuce). This repo is
> the marketing/landing site only — no game code, no fake/live data.

## Run locally

```bash
npm run serve     # node serve.mjs → http://localhost:5182
npm run build     # validates the static files exist
```

## Content policy

Only real, shipped content. No mock server lists, no fabricated stats/news, and no
download button for an unreleased build. Screenshots in the gallery must be **real**
captures from the engine — drop image files into `img/` and add entries to
`DATA.shots` in `data/gamedata.js`; the gallery section stays hidden while that array
is empty.

### Adding real gameplay screenshots

In the game repo ([ProjectDeuce](https://github.com/VincentRiga/ProjectDeuce)):

```bash
npm run play          # builds client + launches a local 10v10 bot server
# open the printed URL in a foreground browser tab, join, capture frames
```

Save the captures into this repo's `img/`, then in `data/gamedata.js`:

```js
shots: [
  { src: "img/bigpine-ctf.jpg", alt: "CTF on Big Pine", caption: "Capture the Flag — Big Pine" },
],
```

## Deploy

Hosted on Vercel as a static site (no framework). `vercel.json` sets clean URLs and
basic security headers. Custom domain: **projectdeuce.com**.
