// Project Deuce site — renders every section from the canonical DATA module.
// No mock data: links that aren't live render as disabled "Soon" controls, never
// a dead href.
import { DATA } from "../data/gamedata.js";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const pct = (val, max) => `${Math.max(0, Math.min(100, Math.round((val / max) * 100)))}%`;
const bar = (val, max) => `<span class="bar"><i style="width:${pct(val, max)}"></i></span>`;

/* ---- links: activate when a URL exists, else disable as "Soon" ---- */
const links = DATA.links || {};
$$("[data-link]").forEach(node => {
  const key = node.dataset.link;
  const url = links[key];
  if (url) {
    node.setAttribute("href", url);
    if (key === "discord" || key === "github") { node.target = "_blank"; node.rel = "noopener"; }
  } else {
    node.removeAttribute("href");
    node.setAttribute("aria-disabled", "true");
    node.setAttribute("role", "link");
    node.setAttribute("title", "Coming soon");
    // append a small SOON tag after the label (once)
    if (!node.querySelector(".soon")) node.insertAdjacentHTML("beforeend", `<span class="soon">Soon</span>`);
  }
});

/* ---- features (bento) ---- */
const fg = $("#featureGrid");
DATA.features.forEach(f => {
  const c = el("div", "feat");
  c.innerHTML = `<div class="tick"><i></i></div><h3>${f.t}</h3><p>${f.d}</p>`;
  fg.append(c);
});

/* ---- procedural worlds ---- */
const proc = DATA.procedural;
if (proc) {
  $("#procIntro").textContent = proc.intro;
  const pg = $("#procGrid");
  proc.points.forEach((p, i) => {
    const item = el("div", "proc-item");
    item.innerHTML = `<span class="n">${String(i + 1).padStart(2, "0")}</span>
      <div><h3>${p.t}</h3><p>${p.d}</p></div>`;
    pg.append(item);
  });
}

/* ---- gallery (real screenshots only; hidden until shots exist) ---- */
const shots = Array.isArray(DATA.shots) ? DATA.shots : [];
if (shots.length) {
  const gallery = $("#gallery"), sgrid = $("#shotGrid");
  gallery.removeAttribute("hidden");
  shots.forEach(s => {
    const fig = el("figure", "shot");
    fig.innerHTML = `<img src="${s.src}" alt="${s.alt || "Project Deuce gameplay"}" loading="lazy">` +
      (s.caption ? `<figcaption>${s.caption}</figcaption>` : "");
    sgrid.append(fig);
  });
}

/* ---- classes ---- */
const cg = $("#classGrid");
DATA.classes.forEach(c => {
  const tag = c.classic ? `<span class="pill">Classic</span>` : c.special ? `<span class="pill">Special</span>` : "";
  const card = el("div", "cls");
  card.innerHTML = `
    <div class="cls-head"><h3>${c.name}</h3>${tag}</div>
    <p class="role">${c.role}</p>
    <div class="stat"><span>Stamina</span>${bar(c.stamina, 200)}<span class="num">${c.stamina}</span></div>
    <div class="stat"><span>Jump</span>${bar(c.jump, 4)}<span class="num">${c.jump}/4</span></div>
    <div class="stat"><span>Mobility</span>${bar(c.mobility, 4)}<span class="num">${c.mobility}/4</span></div>
    <div class="stat"><span>Blocks</span><span class="chip" style="grid-column:2/4;justify-self:start">${c.blocks}</span></div>
    <div class="loadout">${c.loadout.map(w => `<span class="chip">${w}</span>`).join("")}</div>`;
  cg.append(card);
});

/* ---- weapons table ---- */
const wtb = $("#weaponTable tbody");
DATA.weapons.forEach(w => {
  const tr = el("tr");
  const cls = w.classic ? `${w.cls}<span class="tag-classic">Classic</span>` : w.cls;
  tr.innerHTML = `<td><b>${w.name}</b></td><td>${cls}</td>
    <td class="num">${w.head}</td><td class="num">${w.body}</td><td class="num">${w.limb}</td>
    <td>${w.rate}</td><td class="num">${w.mag}</td><td>${w.reload}</td>`;
  wtb.append(tr);
});

/* ---- modes ---- */
const mg = $("#modeGrid");
DATA.modes.forEach(m => {
  const c = el("div", "mode");
  c.append(el("h3", null, m.name), el("p", "obj", m.obj));
  mg.append(c);
});

/* ---- maps ---- */
const mw = $("#mapWrap");
DATA.maps.forEach(grp => {
  const g = el("div", "mapgroup");
  g.append(el("h4", null, `${grp.group} · ${grp.list.length}`));
  const list = el("div", "maplist");
  grp.list.forEach(n => list.append(el("span", "maptile", n)));
  g.append(list);
  mw.append(g);
});

/* ---- structures table ---- */
const stb = $("#structTable tbody");
DATA.structures.forEach(s => {
  const tr = el("tr");
  tr.innerHTML = `<td><b>${s.name}</b></td><td>${s.cls}</td><td class="num">${s.cost}</td><td>${s.strength}</td>`;
  stb.append(tr);
});

/* ---- scoring ---- */
const sg = $("#scoreGrid");
DATA.scoring.forEach(s => {
  const c = el("div", "scorecard");
  const neg = String(s.p).startsWith("−");
  c.innerHTML = `<b style="color:${neg ? "var(--danger)" : "var(--brass-bright)"}">${s.p}</b><span>${s.a}</span>`;
  sg.append(c);
});

/* ---- play / download cards ---- */
const dg = $("#downloadGrid");
DATA.download.forEach(d => {
  const c = el("div", "dl-card");
  const cta = d.href
    ? `<a class="btn sm" href="${d.href}">Play</a>`
    : `<span class="btn sm" aria-disabled="true">Soon</span>`;
  c.innerHTML = `
    <div class="body">
      <div class="dl-head"><h3>${d.name}</h3><span class="pill">${d.tag}</span></div>
      <p>${d.blurb}</p>
      <span class="meta">${d.meta}</span>
    </div>
    ${cta}`;
  dg.append(c);
});

/* ---- official servers note ---- */
if (DATA.servers?.note) $("#serverNote").textContent = DATA.servers.note;

/* ---- credits (CC-BY attribution must stay visible) ---- */
const credits = Array.isArray(DATA.credits) ? DATA.credits : [];
if (credits.length) {
  $("#footCredits").innerHTML = credits.map(c => {
    const name = c.href ? `<a href="${c.href}" target="_blank" rel="noopener">${c.what}</a>` : c.what;
    return `${name} by ${c.by} — ${c.license}`;
  }).join(" · ");
}

/* ---- wiki tabs ---- */
const TABS = [
  ["classes", "Classes"], ["weapons", "Weapons"], ["modes", "Modes"],
  ["maps", "Maps"], ["structures", "Structures"], ["scoring", "Scoring"],
];
const tabbar = $("#tabs");
TABS.forEach(([key, label], i) => {
  const b = el("button", "tab", label);
  b.setAttribute("role", "tab");
  b.setAttribute("aria-selected", i === 0 ? "true" : "false");
  b.addEventListener("click", () => {
    $$(".tab", tabbar).forEach(t => t.setAttribute("aria-selected", "false"));
    b.setAttribute("aria-selected", "true");
    $$("#panels .panel").forEach(p => p.classList.toggle("active", p.dataset.panel === key));
  });
  tabbar.append(b);
});

/* ---- year ---- */
const y = $("#year"); if (y) y.textContent = String(new Date().getFullYear());
