// Project Deuce site — renders every section from the canonical DATA module.
import { DATA } from "../data/gamedata.js";

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const bar = (val, max) => `<span class="bar"><i style="width:${Math.round((val / max) * 100)}%"></i></span>`;

/* ---- features ---- */
const fg = $("#featureGrid");
DATA.features.forEach(f => {
  const c = el("div", "card feature");
  c.append(el("h3", null, f.t), el("p", null, f.d));
  fg.append(c);
});

/* ---- classes ---- */
const cg = $("#classGrid");
DATA.classes.forEach(c => {
  const tag = c.classic ? `<span class="pill">Classic</span>` : c.special ? `<span class="pill">Special</span>` : "";
  const card = el("div", "card cls");
  card.innerHTML = `
    <div class="cls-head"><h3>${c.name}</h3>${tag}</div>
    <p class="role">${c.role}</p>
    <div class="stat"><span>Stamina</span>${bar(c.stamina, 200)}<span class="num">${c.stamina}</span></div>
    <div class="stat"><span>Jump</span>${bar(c.jump, 4)}<span class="num">${c.jump}/4</span></div>
    <div class="stat"><span>Mobility</span>${bar(c.mobility, 4)}<span class="num">${c.mobility}/4</span></div>
    <div class="stat"><span>Blocks</span><span class="chip" style="grid-column:2/4">${c.blocks}</span></div>
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
  const c = el("div", "card mode");
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
  const c = el("div", "card mode");
  const neg = String(s.p).startsWith("−");
  c.innerHTML = `<h3 style="color:${neg ? "var(--blood)" : "var(--brass-bright)"}">${s.p}</h3><p class="obj">${s.a}</p>`;
  sg.append(c);
});

/* ---- download / get it ---- */
const dg = $("#downloadGrid");
DATA.download.forEach(d => {
  const c = el("div", "card dl");
  // No real download link → render a disabled "coming soon" button, never a dead "#".
  const cta = d.href
    ? `<a class="btn" href="${d.href}">Get it</a>`
    : `<span class="btn disabled" aria-disabled="true">Coming soon</span>`;
  const label = d.href ? "Play now" : "Coming soon";
  const cta2 = d.href ? `<a class="btn" href="${d.href}">${label}</a>` : cta;
  c.innerHTML = `
    <div class="dl-head"><h3>${d.name}</h3><span class="pill">${d.tag}</span></div>
    <p>${d.blurb}</p>
    <span class="meta">${d.meta}</span>
    ${cta2}`;
  dg.append(c);
});

/* ---- procedural worlds ---- */
const proc = DATA.procedural;
if (proc) {
  $("#procIntro").textContent = proc.intro;
  const pg = $("#procGrid");
  proc.points.forEach(p => {
    const c = el("div", "card proc");
    c.append(el("h3", null, p.t), el("p", null, p.d));
    pg.append(c);
  });
}

/* ---- official servers note ---- */
if (DATA.servers?.note) $("#serverNote").textContent = DATA.servers.note;

/* ---- credits (CC-BY attribution must stay visible) ---- */
const credits = Array.isArray(DATA.credits) ? DATA.credits : [];
if (credits.length) {
  const cl = $("#creditList");
  credits.forEach(c => {
    const li = el("li");
    const name = c.href ? `<a href="${c.href}" target="_blank" rel="noopener">${c.what}</a>` : c.what;
    li.innerHTML = `${name} by <b>${c.by}</b><span class="lic">${c.license}</span>`;
    cl.append(li);
  });
  // compact footer line too
  $("#footCredits").textContent = credits
    .map(c => `${c.what} by ${c.by} — ${c.license}`).join(" · ");
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
    tabbar.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", "false"));
    b.setAttribute("aria-selected", "true");
    document.querySelectorAll("#panels .panel").forEach(p =>
      p.classList.toggle("active", p.dataset.panel === key));
  });
  tabbar.append(b);
});
