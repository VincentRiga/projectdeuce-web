// Project Deuce site — renders every section from the canonical DATA module.
// No mock data, no disabled placeholder buttons: if something has no real
// destination it is plain text or it is not rendered.
import { DATA } from "../data/gamedata.js";

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

/* ---- hero copy + status strip ---- */
$("#heroSummary").textContent = DATA.summary;
const st = DATA.status || {};
const strip = $("#statusStrip");
[st.platform, st.install, st.stage, st.distribution].filter(Boolean).forEach(s => {
  strip.append(el("span", "status-item", s));
});

/* ---- features ---- */
const fg = $("#featureGrid");
DATA.features.forEach(f => {
  const c = el("div", "feat");
  const tick = el("div", "tick"); tick.append(el("i"));
  c.append(tick, el("h3", null, f.t), el("p", null, f.d));
  fg.append(c);
});

/* ---- maps (names only until real captures exist) ---- */
const mg = $("#mapGrid");
DATA.maps.forEach(m => {
  const c = el("div", "map");
  c.append(el("h3", null, m.name), el("span", "map-id", m.id));
  if (m.d) c.append(el("p", null, m.d));
  mg.append(c);
});
if (DATA.mapsNote) $("#mapsNote").textContent = DATA.mapsNote;

/* ---- modes ---- */
const ml = $("#modeList");
DATA.modes.forEach(name => ml.append(el("li", "mode", name)));

/* ---- servers ---- */
if (DATA.servers) {
  $("#serversTitle").textContent = DATA.servers.title;
  $("#serversBody").textContent = DATA.servers.body;
}

/* ---- alpha notice ---- */
if (DATA.alpha) {
  $("#alphaTitle").textContent = DATA.alpha.title;
  const ul = $("#alphaPoints");
  DATA.alpha.points.forEach(p => ul.append(el("li", null, p)));
}

/* ---- gallery (real screenshots only; stays hidden while shots is empty) ---- */
const shots = Array.isArray(DATA.shots) ? DATA.shots : [];
if (shots.length) {
  const gallery = $("#gallery"), sgrid = $("#shotGrid");
  gallery.removeAttribute("hidden");
  $("[data-gallery-nav]")?.removeAttribute("hidden");
  shots.forEach(s => {
    const fig = el("figure", "shot");
    const img = el("img");
    img.src = s.src;
    img.alt = s.alt || "Project Deuce gameplay";
    img.loading = "lazy";
    fig.append(img);
    if (s.caption) fig.append(el("figcaption", null, s.caption));
    sgrid.append(fig);
  });
}

/* ---- year ---- */
const y = $("#year"); if (y) y.textContent = String(new Date().getFullYear());
