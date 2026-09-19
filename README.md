# projectdeuce-web

Public website for **Project Deuce**, a free-to-play voxel build-and-shoot FPS with fully
destructible terrain and structural collapse. Windows only. Alpha.

Static site, zero build step, zero dependencies. All page content is data-driven from
[`data/gamedata.js`](data/gamedata.js) and rendered by [`js/site.js`](js/site.js).

> The game lives in a separate, currently private repository. This repo is the public
> site only — no game code, no live data.

## Run locally

```bash
npm run serve     # node serve.mjs → http://localhost:5182
npm run build     # validates the static files exist
```

## Content policy

The site says only what is true in the game code right now. Concretely:

- **No numbers that change between builds.** No damage tables, reload times, kill times,
  class stats, structure costs, scoring values, hardware requirements. They rot into lies
  within a week.
- **No dead controls.** A link is either a real URL that was opened and verified, or it is
  not on the page. Nothing renders as a disabled "Soon" button. If a destination does not
  exist yet (Steam page, Discord, public repo) the page says so in plain text.
- **No fake imagery.** The gallery renders only real captures from the *current* build.
  No key art, no generated images, no old reference views presented as gameplay. While
  `DATA.shots` is empty the gallery section stays hidden.
- **Alpha is stated, not hidden.** Progress can be wiped and the game changes often; the
  page says so.

Every fact in `data/gamedata.js` was verified against the game repository on the date in
its header comment. When the game changes, change the data file — nothing else.

### Adding real gameplay screenshots

Capture from the current public build, save into `img/shots/`, then add entries to
`DATA.shots` in `data/gamedata.js`:

```js
shots: [
  { src: "img/shots/red_basin-1.webp", alt: "Red Basin, mid-match", caption: "Red Basin" },
],
```

The gallery section and its nav link activate automatically.

## Deploy

Hosted on Vercel as a static site (no framework). `vercel.json` sets clean URLs and basic
security headers. Domain: **projectdeuce.com**.
