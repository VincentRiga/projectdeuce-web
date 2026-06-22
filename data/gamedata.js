// Project Deuce — canonical game data (from docs/Jagex_AoS_Clone_Reference.md).
// Single source of truth for the website. Numbers are faithful to the reference.

export const DATA = {
  features: [
    { t: "Fully destructible voxel FPS", d: "Every block breaks and builds — terrain is your weapon, your cover and your path." },
    { t: "Classes & loadouts", d: "Commando, Miner, Engineer, Marksman — distinct stats, weapons and equipment per class." },
    { t: "Ten real game modes", d: "CTF, Classic CTF, TDM, Territory Control, Babel, Diamond Mine, Demolition, Zombie, VIP, Occupation — full rules & win conditions." },
    { t: "Voxel arsenal", d: "Spades, rifles, SMGs, shotguns, snipers, RPGs, drill cannons — voxel weapons plus new modelled gun set." },
    { t: "Procedural worlds", d: "Each match world is generated from a seed: terrain, roads, districts, buildings, vehicles and vegetation." },
    { t: "Runs almost anywhere", d: "Plays in any modern browser on modest hardware. No install." },
  ],

  // stamina (0–200) · jump (1–4) · mobility (1–4)
  classes: [
    { name: "Commando", stamina: 100, jump: 2, mobility: 2, blocks: "200 / 1000",
      role: "Top anti-personnel powerhouse — can pack a minigun and an RPG.",
      loadout: ["Spade / Combat Knife", "Mini Gun", "RPG / Triple-RPG", "Grenade"] },
    { name: "Miner", stamina: 85, jump: 2, mobility: 2, blocks: "0 / 1000",
      role: "Excavator & close-quarters shotgunner; helmet halves head damage.",
      loadout: ["Super Spade / Pickaxe", "Shotgun / Double-Barrel", "Drill Cannon", "Dynamite"] },
    { name: "Engineer", stamina: 85, jump: 1, mobility: 2, blocks: "3000 / 3000",
      role: "Builder with a jetpack and by far the biggest block pool.",
      loadout: ["Pickaxe", "SMG (MP5)", "Rocket Turret / Block Cannon", "Jetpack"] },
    { name: "Marksman", stamina: 70, jump: 3, mobility: 3, blocks: "400 / 1000",
      role: "Fastest runner and highest jumper; a headshot threatens any class.",
      loadout: ["Pickaxe / Combat Knife", "Bolt-Action / Semi-Auto Rifle", "Pistol", "Landmine"] },
    { name: "Deuce", classic: true, stamina: 100, jump: 1, mobility: 1, blocks: "25 / 100",
      role: "The classic rifleman: minimal kit, one trusty rifle. Plays Classic CTF.",
      loadout: ["Spade", "Classic Rifle / SMG / Shotgun", "Grenade"] },
    { name: "Zombie", special: true, stamina: 200, jump: 4, mobility: 4, blocks: "2500",
      role: "The infected — only its hands, but fast, durable and relentless.",
      loadout: ["Zombie Hand", "Zombie structures"] },
    { name: "Gangster", special: true, stamina: 100, jump: 2, mobility: 2, blocks: "400 / 1200",
      role: "Mafia bruiser with a tommy gun, revolver and molotovs.",
      loadout: ["Crowbar", "Tommy Gun", "Snub Revolver", "Molotov"] },
  ],

  // head/body/limb · rate · mag/total · reload
  weapons: [
    { name: "SMG (MP5)", cls: "Engineer", head: 15, body: 10, limb: 10, rate: "400 RPM", mag: "25 / 100", reload: "1.25s" },
    { name: "Mini Gun", cls: "Commando", head: 30, body: 15, limb: 15, rate: "600 RPM", mag: "100", reload: "2.0s" },
    { name: "Tommy Gun", cls: "Gangster", head: "—", body: "—", limb: "—", rate: "300 RPM", mag: "30 / 150", reload: "2.0s" },
    { name: "Bolt-Action Rifle", cls: "Marksman", head: 100, body: 80, limb: 50, rate: "bolt", mag: "1 / 16", reload: "2.0s" },
    { name: "Semi-Auto Rifle", cls: "Marksman", head: 100, body: 50, limb: 35, rate: "semi", mag: "5 / 30", reload: "3.0s" },
    { name: "Pistol", cls: "Marksman", head: "—", body: "low", limb: "—", rate: "semi", mag: "5 / 40", reload: "0.5s" },
    { name: "Snub Revolver", cls: "Gangster", head: 50, body: 30, limb: 30, rate: "120 RPM", mag: "6 / 41", reload: "1.0s" },
    { name: "Shotgun (pump)", cls: "Miner", head: "high", body: "high", limb: "—", rate: "pump", mag: "shell", reload: "0.5s" },
    { name: "Double-Barrel", cls: "Miner", head: "v.high", body: "v.high", limb: "—", rate: "1.0s", mag: "2", reload: "1.0s" },
    { name: "Drill Cannon", cls: "Miner", head: 165, body: 165, limb: 165, rate: "bores 3×3", mag: "1 / 3", reload: "5.0s" },
    { name: "RPG", cls: "Commando", head: "splash", body: "splash", limb: "splash", rate: "45 RPM", mag: "1", reload: "3.0s" },
    { name: "Triple-RPG", cls: "Commando", head: "splash", body: "splash", limb: "splash", rate: "60 RPM", mag: "3", reload: "0.5s" },
    { name: "Block Cannon", cls: "Engineer", head: 14, body: 14, limb: 12, rate: "300 RPM", mag: "3000", reload: "—" },
    { name: "Classic Rifle", cls: "Deuce", classic: true, head: "high", body: "high", limb: "med", rate: "semi", mag: "10 / 60", reload: "—" },
    { name: "Classic SMG", cls: "Deuce", classic: true, head: "low", body: "low", limb: "low", rate: "auto", mag: "25 / 100", reload: "—" },
    { name: "Classic Shotgun", cls: "Deuce", classic: true, head: "high", body: "high", limb: "—", rate: "pump", mag: "shell", reload: "—" },
  ],

  modes: [
    { name: "Team Deathmatch", obj: "Most kills wins — instant win at 200." },
    { name: "Capture the Flag", obj: "Take the enemy intel home. Carriers are slowed and can't fight; intel returns after 60s." },
    { name: "Classic CTF", obj: "Deuce-only. Intel rides on your back; bases resupply from a command post." },
    { name: "Diamond Mine", obj: "Deliver 15 diamonds. Carrying one slows you and disables your weapons." },
    { name: "Babel", obj: "Build a team tower and land a living player on the heaven platform to win." },
    { name: "Demolition", obj: "Deplete the enemy base gauge by breaking its blocks; placing blocks repairs yours." },
    { name: "Zombie!", obj: "Survivors vs zombies. The infected win by turning everyone; survivors win if one lives." },
    { name: "Occupation", obj: "Carry a random bomb to the zone and hold it until it detonates. First to 50 points." },
    { name: "VIP", obj: "Protect your VIP — their death triggers your team's sudden-death." },
    { name: "Territory Control", obj: "Capture every zone, A→E→G. Just hold the ground." },
  ],

  // Real maps shipped in the repo. Static = handcrafted .vxl (showcase rotation);
  // procedural = in-engine generators kept as DEUCE_MAP options.
  maps: [
    { group: "Static — handcrafted", list: ["Big Pine", "2Fort CTF", "Snowfield"] },
    { group: "Procedural — generators", list: ["Arena", "Hallway", "Pinpoint", "Babel", "City", "Open"] },
  ],

  structures: [
    { name: "Flare Block", cls: "All", cost: 10, strength: "Low" },
    { name: "Caltrop", cls: "Engineer", cost: 10, strength: "Medium" },
    { name: "Super Small Wall", cls: "Commando", cost: 32, strength: "High" },
    { name: "Platform", cls: "Engineer", cost: 36, strength: "High" },
    { name: "Fort Wall", cls: "Engineer", cost: 39, strength: "High" },
    { name: "Super Mini-Bunker", cls: "Engineer / Marksman", cost: 68, strength: "High" },
    { name: "Super Barrier", cls: "Commando", cost: 96, strength: "High" },
    { name: "Zombie Hand", cls: "Zombie", cost: 115, strength: "High" },
    { name: "Super Pole", cls: "Miner", cost: 114, strength: "High" },
    { name: "Super Tower", cls: "Engineer / Marksman", cost: 120, strength: "High" },
    { name: "Zombie Bone", cls: "Zombie", cost: 130, strength: "High" },
    { name: "Super Bridge", cls: "Marksman", cost: 222, strength: "High" },
    { name: "Ultra Barrier", cls: "Engineer / Commando", cost: 256, strength: "Very High" },
    { name: "Safety Corridor", cls: "Miner", cost: 432, strength: "High" },
    { name: "Zombie Head", cls: "Zombie", cost: 445, strength: "High" },
    { name: "Super Dome", cls: "Miner / Engineer", cost: 446, strength: "High" },
  ],

  scoring: [
    { a: "Headshot kill", p: "+150" },
    { a: "Melee kill", p: "+150" },
    { a: "Kill", p: "+100" },
    { a: "Assist", p: "+50" },
    { a: "Revenge (kill your killer)", p: "+50" },
    { a: "Retaliation (avenge a teammate)", p: "+50" },
    { a: "Kill while reloading", p: "+50" },
    { a: "Protect a teammate", p: "+50" },
    { a: "Suicide / team-change", p: "−100" },
  ],

  tagline: "Dig in · Build up · Take the hill",

  // Links. null = not live yet → rendered as a disabled "Soon" control, never a
  // dead href. Set the url here the moment it goes live and the button activates.
  links: {
    play: null,                                       // browser client — not deployed yet
    discord: null,                                    // invite URL — pending
    github: "https://github.com/VincentRiga/ProjectDeuce",
  },

  // ---- Play. The browser client is not deployed yet → no fake link. ----
  download: [
    { name: "Browser client", tag: "Coming soon", href: null,
      blurb: "Play in the browser on the official servers. The client is being readied — not live yet.",
      meta: "WebGL · no install" },
    { name: "Standalone client", tag: "Coming soon", href: null,
      blurb: "A downloadable desktop client is in the works. Not public yet.",
      meta: "Windows / Linux / macOS" },
  ],

  // ---- Procedural worlds (worldgen pipeline: terrain → roads → POI → placement). ----
  procedural: {
    intro: "Most Project Deuce maps aren't hand-placed — they're generated. A seed drives the whole world, so a new seed means a brand-new battlefield, then every block of it is yours to dig, build and blow apart.",
    points: [
      { t: "Sculpted terrain", d: "Heightmap terrain with biomes — hills, water, cliffs and open ground." },
      { t: "Road networks", d: "Connected roads thread the map and link the districts together." },
      { t: "Districts & buildings", d: "Generated districts fill with enterable buildings, props and furniture." },
      { t: "Vehicles & decor", d: "Vehicles, street decor and striped awnings scatter the streets." },
      { t: "Vegetation", d: "Trees and vegetation dressed across the terrain by the placement phase." },
      { t: "Fully destructible", d: "Every generated block is real voxel terrain — break it, build on it, tunnel through it." },
    ],
  },

  // ---- Official servers (no user self-hosting yet; custom servers later). ----
  servers: {
    note: "Right now everyone plays together on the official servers we host. Custom and self-hosted servers are planned for later — for now, just hit Play.",
  },

  // ---- Credits (CC-BY 4.0 attribution is required and must stay visible). ----
  credits: [
    { what: "Voxel Gun Pack", by: "tatami11", license: "CC-BY 4.0",
      href: "https://sketchfab.com/3d-models/voxel-gun-pack-d616eb9d7d9a493e896cad226473f59d" },
  ],

  // Real gameplay screenshots. Drop files into web img/ and add entries here;
  // the gallery section renders only when this array is non-empty (no stock art).
  shots: [],
};
