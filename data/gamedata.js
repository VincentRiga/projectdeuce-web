// Project Deuce — canonical site data. Single source of truth for the website.
//
// Every value here was verified against the game repository on 2026-09-19.
// Rules for this file:
//   - Nothing goes here that is not in the game code right now.
//   - No numbers that change between builds (damage, reload, RPM, kill times,
//     weapon counts per channel, hardware requirements). They rot into lies.
//   - A link is either a real URL that was opened and checked, or it is not here.
//     Missing links are not rendered as disabled buttons — they are not rendered.

export const DATA = {
  // One-line description used in <title>, meta and the hero.
  tagline: "Dig in · Build up · Take the hill",
  summary:
    "A free-to-play voxel build-and-shoot FPS. Fully destructible terrain with structural collapse — cut the supports and the structure comes down. The declared successor to Ace of Spades Classic 0.75.",

  // Platform / status strip under the hero. Text only: there is no link yet.
  status: {
    platform: "Windows",
    install: "Installed client",
    stage: "Alpha",
    distribution: "Coming to Steam",
  },

  features: [
    { t: "Fully destructible terrain",
      d: "Every block can be dug, placed or blown apart. The map is your weapon, your cover and your way through." },
    { t: "Structural collapse",
      d: "Structures need support. Cut the supports and whatever is above them falls." },
    { t: "Build and shoot",
      d: "Dig in, build up, then fight over what you built." },
    { t: "Authoritative server",
      d: "The server decides what happened. Clients can only ask." },
    { t: "Community servers",
      d: "Host your own. One port to open — 8080 by default. A hosting guide lives in the game repository." },
    { t: "34 weapons defined",
      d: "Not all of them are on the public channel yet. The roster changes; we don't publish a count of what's live." },
  ],

  // The 7 maps currently in the playable rotation, by registry id.
  // (10 maps are registered; the other 3 are procedural and belong to a separate mode.)
  // Descriptions and images are intentionally empty until real captures exist.
  maps: [
    { id: "workshop_yard",  name: "Repair Yard" },
    { id: "urban_static",   name: "Urban Static" },
    { id: "flightline",     name: "Flightline" },
    { id: "spillway",       name: "Spillway" },
    { id: "red_basin",      name: "Red Basin" },
    { id: "crossline",      name: "Crossline" },
    { id: "split_cloister", name: "Split Cloister" },
  ],
  mapsNote: "Seven maps in the current rotation.",

  // Game modes that exist in the code. Names only — rules change during alpha.
  modes: [
    "Capture the Flag",
    "Team Deathmatch",
    "Occupation",
    "Multi-Hill",
    "Search & Destroy",
    "Domination",
    "Zombie",
    "Babel",
  ],

  servers: {
    title: "Run your own server",
    body: "Project Deuce servers are self-hosted by the community. You open a single port — 8080 by default — and run the server. A step-by-step hosting guide exists in the game repository; it will be linked here if and when it is published.",
  },

  alpha: {
    title: "This is an alpha",
    points: [
      "Progress can be wiped. Anything you earn may be reset between builds without notice.",
      "The game changes often. Maps, modes, weapons and rules on this page describe the current build and will move.",
      "Hardware requirements have not been measured yet. They will be published when they are.",
    ],
  },

  // Real gameplay screenshots only. The gallery section renders only when this
  // array is non-empty. No key art, no generated images, no old reference views.
  // Format: { src: "img/shots/<map_id>-<n>.webp", alt: "...", caption: "..." }
  shots: [],
};
