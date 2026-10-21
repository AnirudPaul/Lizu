// =====================================================================
//  ✏️  EDIT HERE: every word on the site lives in this block.
//  These are placeholder lines. Rewrite them in your own words.
// =====================================================================

const NAME = "Lizu";

// the notes that pop up during the walk (in order)
const WALK_NOTES = [
  "Hi you. Before anything else: I'm really, really glad you exist.",
  "I love our walks. Your little steps next to mine are one of my favourite things in the world.",
  "And those cute little legs trying to keep up… I'd slow down for you every single time.",
  "Your voice is my favourite sound. Especially when you laugh.",
  "Even on the bad days, you still try to put a smile on your face. I see it, and I see how hard you try.",
  "But here's a secret: you don't have to smile here. This is a place where you can just be.",
  "Your mind isn't always kind to you. Mine is always kind about you.",
  "Sometimes I say things you don't want to hear. It's never because I think less of you. It's because I want the best for you, always.",
  "I don't need you to be okay all the time. I just want to be next to you while you figure it out.",
  "If you ever forget what you're worth, ask me. I'll remind you as many times as you need.",
  "You gave me dark chocolate in this box. I'm giving you back a little piece of my heart in it. Fair trade? 🍫",
  "Whatever is going on in that head of yours, I'm here. Today, tomorrow, and on all the boring days in between. 🐾",
];

// the "open when…" cards she can flip (front = when, back = the note)
const OPEN_WHEN = [
  { when: "you can't sleep", icon: "🌙",
    note: "Close your eyes and imagine we're on one of our walks. Slow steps, cool air, nowhere to be. I'm right there next to you." },
  { when: "your mind is being mean to you", icon: "🌧️",
    note: "It's lying. You are kind, you are trying, and you are so much more than your worst thoughts. You told me \"I won't, don't worry.\" I'm still worrying. So text me anyway." },
  { when: "you feel alone", icon: "🫂",
    note: "You're not. Not even a little bit. Text me \"oi\". That's all you have to type, I'll do the rest." },
  { when: "you need to laugh", icon: "🧮",
    note: "Remember that you bought a PINK calculator just to make me jealous. Who even does that? (…it worked.)" },
  { when: "you're proud of something", icon: "⭐",
    note: "Tell me first. I want to hear all about it in that cute voice of yours." },
  { when: "you miss our walks", icon: "🐾",
    note: "Then let's go on one. Just say the word and I'll be there, little legs and all." },
];

// the day I'm back (used for the countdown)
const RETURN_DATE = "2026-11-17";

// one card unlocks each day while I'm away (YYYY-MM-DD: note)
// tip: open the site with ?preview at the end of the link to see all of them
const DAILY = {
  "2026-10-22": "Yesterday I asked your favourite colour and you said you don't have one. That's okay, I picked one for you. (It's pink. Obviously. Because of a certain calculator.)",
  "2026-10-23": "You sent me 🧿 to keep me safe on the train. Here's one back for you: 🧿 Now we're both protected.",
  "2026-10-24": "Have you eaten properly today? Real food, not just chocolate. (Okay, a little chocolate is allowed.)",
  "2026-10-25": "It might be extra quiet around there. Quiet is okay. Put on a song you like and just listen, no overthinking allowed.",
  "2026-10-26": "Fun fact: puppies sleep 12–14 hours a day. Consider this official permission to nap.",
  "2026-10-27": "Go for a little walk today, even a short one. I'll be walking somewhere too, so technically we're walking together. 🐾",
  "2026-10-28": "Reminder: you're allowed to have a bad day. It doesn't undo all the good ones.",
  "2026-10-29": "One week down! Text me one tiny good thing that happened this week. Yes, I'm making you.",
  "2026-10-30": "Drink some water. Stretch. Unclench your jaw. Okay, now you can go back to being cute.",
  "2026-10-31": "Last day of October. Whatever this month was, you made it through. That counts.",
  "2026-11-01": "New month. You don't have to become a new you. The current one is pretty great.",
  "2026-11-02": "If your mind tells you you're a burden, it's wrong. Texting me is never bothering me.",
  "2026-11-03": "Do something today just because it's fun. Not useful, not productive. Just fun.",
  "2026-11-04": "I bet you smiled at something today and didn't even notice. I always notice those.",
  "2026-11-05": "More than halfway there. The walks are waiting for us.",
  "2026-11-06": "Happy Dhanteras 🪔 May your room be full of light and your head be a little quieter.",
  "2026-11-07": "Light a diya tonight, even a tiny one. One small light is enough to beat a whole lot of dark.",
  "2026-11-08": "Happy Diwali, Lizu 🪔✨ I know it's quieter this year, but you are not forgotten, not even for a second. I'm thinking of you while the lights go up. Now go eat sweets. Lots of them.",
  "2026-11-09": "Post-Diwali sugar crash? Totally valid. Rest day.",
  "2026-11-10": "I know you're brave. But even brave people need a backbone sometimes. So lean on me, okay?",
  "2026-11-11": "Things I miss right now: our walks, and your voice. That's it, that's the note.",
  "2026-11-12": "Five days left. Start planning our walk route. You get to pick.",
  "2026-11-13": "Take a second to be proud of yourself for getting through these weeks. Seriously. I'm proud of you.",
  "2026-11-14": "Small challenge: say one nice thing about yourself out loud. I'll wait. …See? True.",
  "2026-11-15": "Two more sleeps. Then I'm back to annoy you in person.",
  "2026-11-16": "Tomorrow! Get your walking shoes ready. And those little legs. 🐾",
  "2026-11-17": "I'm back 🩷 Thank you for opening these. Now put the phone down, we have a walk to go on.",
};

// a song for each day (opens a YouTube search, so any song name works)
const DAILY_SONGS = {
  "2026-10-22": "Yellow – Coldplay",
  "2026-10-23": "Nazar Na Lag Jaaye – Stree",
  "2026-10-24": "Banana Pancakes – Jack Johnson",
  "2026-10-25": "Clair de Lune – Debussy",
  "2026-10-26": "Weightless – Marconi Union",
  "2026-10-27": "Ilahi – Yeh Jawaani Hai Deewani",
  "2026-10-28": "Here Comes the Sun – The Beatles",
  "2026-10-29": "Three Little Birds – Bob Marley",
  "2026-10-30": "Put Your Records On – Corinne Bailey Rae",
  "2026-10-31": "Rise Up – Andra Day",
  "2026-11-01": "Phir Se Ud Chala – Rockstar",
  "2026-11-02": "Count on Me – Bruno Mars",
  "2026-11-03": "Badtameez Dil – Yeh Jawaani Hai Deewani",
  "2026-11-04": "Smile – Nat King Cole",
  "2026-11-05": "Safarnama – Tamasha",
  "2026-11-06": "Raag Yaman – Hariprasad Chaurasia flute",
  "2026-11-07": "Canon in D – Pachelbel",
  "2026-11-08": "Deepawali Manayi Suhani – Shirdi Ke Sai Baba",
  "2026-11-09": "Gymnopédie No. 1 – Erik Satie",
  "2026-11-10": "Lean on Me – Bill Withers",
  "2026-11-11": "Kho Gaye Hum Kahan – Baar Baar Dekho",
  "2026-11-12": "Yun Hi Chala Chal – Swades",
  "2026-11-13": "Kar Har Maidaan Fateh – Sanju",
  "2026-11-14": "Beautiful – Christina Aguilera",
  "2026-11-15": "Almost There – The Princess and the Frog",
  "2026-11-16": "Walking on Sunshine – Katrina and the Waves",
  "2026-11-17": "Matargashti – Tamasha",
};

// a message unlocks every 5 treats in the game (cycles when it runs out)
const GAME_MESSAGES = [
  "5 treats! puppy is very proud of you.",
  "you're doing amazing. (at the game, and in general.)",
  "fun fact: your voice is officially cute. it's been scientifically proven.",
  "puppy says you deserve a nap and a snack.",
  "reminder: being gentle with yourself counts as progress.",
  "you've caught so many treats. you deserve every single one.",
  "still here. still on your side. 🐶",
];

// what the cat says when you catch it 🐱
const CAT_MESSAGES = [
  "a wild cat appeared! the cat approves of you.",
  "the cat says hi. (it's jealous you like dogs more.)",
];

// the pink calculator's commentary after "="
const CALC_LINES = [
  "…but you're still worth more than that 🩷",
  "calculated on a pink calculator. obviously.",
  "result checked and approved by puppy ✅",
  "math is hard. you're doing fine.",
  "the calculator is pink and I'm still not over it.",
];

const ENDING = {
  title: "that's the end of the walk 🐾",
  text: "but I'm not going anywhere. Whenever your mind is being mean to you, come back here. The puppies will be waiting, and so will I. Always.",
  sign: "— your favourite walking partner 🩷",
};

// =====================================================================
//  (you don't need to touch anything below this line)
// =====================================================================

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// ---------- puppy drawings ----------
function puppySVG({ fur, ear, muzzle, bow }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 124">
    <path d="M86 96 q20 -4 18 -26" stroke="${ear}" stroke-width="7" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="96" rx="30" ry="20" fill="${fur}"/>
    <ellipse cx="45" cy="114" rx="8" ry="6" fill="${ear}"/>
    <ellipse cx="75" cy="114" rx="8" ry="6" fill="${ear}"/>
    <ellipse cx="33" cy="52" rx="11" ry="21" fill="${ear}" transform="rotate(20 33 52)"/>
    <ellipse cx="87" cy="52" rx="11" ry="21" fill="${ear}" transform="rotate(-20 87 52)"/>
    <circle cx="60" cy="57" r="29" fill="${fur}"/>
    <ellipse cx="60" cy="68" rx="14" ry="10" fill="${muzzle}"/>
    <circle cx="49" cy="54" r="4.3" fill="#3b2a2a"/>
    <circle cx="71" cy="54" r="4.3" fill="#3b2a2a"/>
    <circle cx="50.6" cy="52.4" r="1.5" fill="#fff"/>
    <circle cx="72.6" cy="52.4" r="1.5" fill="#fff"/>
    <ellipse cx="60" cy="64" rx="5" ry="3.6" fill="#3b2a2a"/>
    <path d="M54 70 Q60 75 66 70" stroke="#3b2a2a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="41" cy="65" r="4.5" fill="#ff9fbf" opacity=".65"/>
    <circle cx="79" cy="65" r="4.5" fill="#ff9fbf" opacity=".65"/>
    ${bow ? `<g transform="translate(78 30) rotate(15)">
      <path d="M0 0 L-12 -8 L-12 8 Z" fill="#ff7aa8"/>
      <path d="M0 0 L12 -8 L12 8 Z" fill="#ff7aa8"/>
      <circle r="4" fill="#e85a8c"/></g>` : ""}
  </svg>`;
}

const SVGS = {
  lizu: puppySVG({ fur: "#f2c28b", ear: "#c98d57", muzzle: "#fbe3c4", bow: true }),
  me:   puppySVG({ fur: "#ece6e1", ear: "#8f7e72", muzzle: "#ffffff", bow: false }),
};

$$("[data-svg]").forEach((el) => (el.innerHTML = SVGS[el.dataset.svg]));
$$(".name").forEach((el) => (el.textContent = NAME));
document.title = `for ${NAME} 🍫`;

// ---------- fx: fireworks, bursts, sparkles ----------
const fx = $("#fx");
const fctx = fx.getContext("2d");
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FX_COLORS = ["#ff7aa8", "#ffc857", "#ffa36c", "#e85a8c", "#ffb3cb", "#ffd86b"];
let particles = [];
let rockets = [];
let fxRunning = false;
let fxLast = 0;

function resizeFx() {
  const dpr = window.devicePixelRatio || 1;
  fx.width = innerWidth * dpr;
  fx.height = innerHeight * dpr;
  fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resizeFx();
addEventListener("resize", resizeFx);

const pickColor = () => FX_COLORS[Math.floor(Math.random() * FX_COLORS.length)];

function burst(x, y, { count = 24, speed = 4, glyphs = null, gravity = 0.08, size = 3, color = null } = {}) {
  if (REDUCED) return;
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = speed * (0.4 + Math.random() * 0.8);
    particles.push({
      x, y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      life: 1,
      decay: 0.012 + Math.random() * 0.012,
      color: color || pickColor(),
      glyph: glyphs ? glyphs[i % glyphs.length] : null,
      size: size * (0.6 + Math.random() * 0.8),
      gravity,
    });
  }
  kickFx();
}

// a heart-shaped explosion (the classic heart curve, used as velocities)
function heartBurst(x, y, color) {
  const n = 46;
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const hx = 16 * Math.sin(t) ** 3;
    const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    particles.push({ x, y, vx: hx * 0.32, vy: hy * 0.32, life: 1, decay: 0.014, color, size: 2.6, gravity: 0.03 });
  }
}

function firework(x = innerWidth * (0.2 + Math.random() * 0.6), targetY = innerHeight * (0.15 + Math.random() * 0.3)) {
  if (REDUCED) return;
  rockets.push({ x, y: innerHeight + 10, vy: -Math.sqrt(2 * 0.12 * (innerHeight - targetY)), color: pickColor() });
  kickFx();
}

function fireworkShow(n = 8, over = 3000) {
  for (let i = 0; i < n; i++) setTimeout(() => firework(), (i / n) * over + Math.random() * 300);
}

function explode(r) {
  if (Math.random() < 0.5) heartBurst(r.x, r.y, r.color);
  else burst(r.x, r.y, { count: 60, speed: 5.5, gravity: 0.05, size: 2.6, color: r.color });
  burst(r.x, r.y, { count: 14, speed: 2.5, gravity: 0.04, size: 2, color: "#fff7d6" });
}

function kickFx() {
  if (fxRunning) return;
  fxRunning = true;
  fxLast = performance.now();
  requestAnimationFrame(fxLoop);
}

function fxLoop(t) {
  const dt = Math.min((t - fxLast) / 16.67, 3);
  fxLast = t;
  fctx.clearRect(0, 0, innerWidth, innerHeight);

  rockets = rockets.filter((r) => {
    r.y += r.vy * dt;
    r.vy += 0.12 * dt;
    particles.push({ x: r.x + (Math.random() - 0.5) * 3, y: r.y, vx: 0, vy: 0.6, life: 0.7, decay: 0.05, color: "#ffc857", size: 2, gravity: 0 });
    if (r.vy >= -1) {
      explode(r);
      return false;
    }
    return true;
  });

  fctx.textAlign = "center";
  fctx.textBaseline = "middle";
  particles = particles.filter((p) => {
    p.vx *= 0.98;
    p.vy = p.vy * 0.98 + p.gravity * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.life -= p.decay * dt;
    if (p.life <= 0) return false;
    fctx.globalAlpha = p.life;
    if (p.glyph) {
      fctx.font = `${Math.round(p.size * 6)}px system-ui, "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
      fctx.fillText(p.glyph, p.x, p.y);
    } else {
      fctx.fillStyle = p.color;
      fctx.beginPath();
      fctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      fctx.fill();
    }
    return true;
  });
  fctx.globalAlpha = 1;

  if (particles.length || rockets.length) requestAnimationFrame(fxLoop);
  else {
    fxRunning = false;
    fctx.clearRect(0, 0, innerWidth, innerHeight);
  }
}

const centerOf = (el) => {
  const r = el.getBoundingClientRect();
  return [r.left + r.width / 2, r.top + r.height / 2];
};

// little hearts wherever she taps, sparkles wherever she drags
addEventListener("pointerdown", (e) => {
  if (e.target.closest("button, canvas, #ending")) return;
  burst(e.clientX, e.clientY, { count: 6, speed: 2.2, glyphs: ["💗", "🩷", "✨"], gravity: -0.02, size: 2.4 });
});
let lastSparkle = 0;
addEventListener("pointermove", (e) => {
  if (e.target.closest("canvas") || performance.now() - lastSparkle < 45) return;
  lastSparkle = performance.now();
  burst(e.clientX, e.clientY, { count: 1, speed: 0.6, gravity: -0.03, size: 2.2 });
});

// ---------- the chocolate box ----------
const gift = $("#gift");
$("#giftBox").addEventListener("click", () => {
  if (gift.classList.contains("opening")) return;
  gift.classList.add("opening");
  setTimeout(() => {
    gift.classList.add("open");
    const [x, y] = centerOf($("#giftBox"));
    burst(x, y, { count: 30, speed: 7, glyphs: ["💗", "🐾", "🍫", "🩷", "✨"], gravity: 0.12, size: 4 });
    burst(x, y, { count: 50, speed: 8, gravity: 0.1 });
    fireworkShow(3, 900);
  }, 650);
  setTimeout(() => {
    gift.classList.add("gone");
    document.body.classList.remove("locked");
    $("#intro").classList.add("reveal");
  }, 1300);
  setTimeout(() => gift.remove(), 2200);
});

// ---------- intro hearts ----------
const hearts = $("#hearts");
const heartGlyphs = ["💗", "🩷", "🐾", "💕", "🍫"];
for (let i = 0; i < 16; i++) {
  const s = document.createElement("span");
  s.textContent = heartGlyphs[i % heartGlyphs.length];
  s.style.left = Math.random() * 100 + "%";
  s.style.fontSize = 14 + Math.random() * 20 + "px";
  s.style.animationDuration = 9 + Math.random() * 9 + "s";
  s.style.animationDelay = -Math.random() * 15 + "s";
  hearts.appendChild(s);
}

$("#startBtn").addEventListener("click", (e) => {
  burst(e.clientX, e.clientY, { count: 14, speed: 4, glyphs: ["🐾", "💗"], size: 3 });
  $("#walk").scrollIntoView({ behavior: "smooth" });
});

// ---------- the walk ----------
const notes = $("#notes");
WALK_NOTES.forEach((text) => {
  const n = document.createElement("div");
  n.className = "note";
  n.innerHTML = `<span class="paw">🐾</span>`;
  text.split(" ").forEach((word, i) => {
    const w = document.createElement("span");
    w.className = "w";
    w.textContent = word + " ";
    w.style.transitionDelay = 0.25 + i * 0.06 + "s";
    n.appendChild(w);
  });
  notes.appendChild(n);
});

const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
  { threshold: 0.4 }
);
$$(".note").forEach((n) => io.observe(n));

const walk = $("#walk");
const track = $(".track");
const walkers = $("#walkers");
let stopTimer;

function onScroll() {
  const r = walk.getBoundingClientRect();
  const total = r.height - innerHeight;
  const p = Math.min(1, Math.max(0, -r.top / total));
  const max = track.clientWidth - walkers.offsetWidth - 16;
  walkers.style.transform = `translateX(${8 + p * max}px)`;
  walkers.classList.toggle("arrived", p > 0.97);
  if (p > 0 && p < 1) {
    walkers.classList.add("moving");
    clearTimeout(stopTimer);
    stopTimer = setTimeout(() => walkers.classList.remove("moving"), 160);
  }
}
addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", onScroll);
onScroll();

// ---------- countdown ----------
const pad = (n) => String(n).padStart(2, "0");
const now = new Date();
const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const fmt = (iso) => {
  const [, m, d] = iso.split("-");
  return `${+d} ${MONTHS[m - 1]}`;
};

const [ry, rm, rd] = RETURN_DATE.split("-").map(Number);
const daysLeft = Math.round(
  (new Date(ry, rm - 1, rd) - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 86400000
);
$("#countdown").textContent =
  daysLeft > 1 ? `${daysLeft} days until our next walk 🐾`
  : daysLeft === 1 ? "our next walk is tomorrow 🐾"
  : daysLeft === 0 ? "our walk is today!! 🐾"
  : "walk soon? 🐾";

// ---------- one card a day ----------
const PREVIEW = new URLSearchParams(location.search).has("preview");

function loadOpened() {
  try { return JSON.parse(localStorage.getItem("opened") || "[]"); } catch { return []; }
}
function saveOpened(list) {
  try { localStorage.setItem("opened", JSON.stringify(list)); } catch {}
}
const opened = new Set(loadOpened());

const noteModal = $("#noteModal");
function openNote(title, text, song) {
  $("#noteTitle").textContent = title;
  $("#noteText").textContent = text;
  const s = $("#noteSong");
  s.hidden = !song;
  if (song) {
    s.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(song);
    $("#noteSongName").textContent = song;
  }
  noteModal.classList.remove("hidden");
}
$("#noteClose").addEventListener("click", () => noteModal.classList.add("hidden"));
noteModal.addEventListener("click", (e) => {
  if (e.target === noteModal) noteModal.classList.add("hidden");
});

addEventListener("keydown", (e) => {
  if (e.key === "Escape") $$(".modal").forEach((m) => m.classList.add("hidden"));
});

const dayGrid = $("#dayGrid");
Object.keys(DAILY).sort().forEach((iso, i) => {
  const unlocked = PREVIEW || iso <= today;
  const seen = opened.has(iso);
  const t = document.createElement("button");
  t.className = "day" + (unlocked ? "" : " locked") + (iso === today ? " today" : "") + (seen ? " opened" : "");
  const [, m, d] = iso.split("-");
  t.innerHTML = `<span class="d">${+d}</span><span class="m">${MONTHS[m - 1]}</span>
    <span class="tag">${unlocked ? (seen ? "🐾" : "💌") : "🔒"}</span>`;
  t.addEventListener("click", () => {
    if (!unlocked) {
      t.classList.remove("nope");
      void t.offsetWidth;
      t.classList.add("nope");
      $("#dayHint").textContent = `not yet! come back on ${fmt(iso)} 🙈`;
      return;
    }
    openNote(`day ${i + 1} · ${fmt(iso)}`, DAILY[iso], DAILY_SONGS[iso]);
    const [x, y] = centerOf(t);
    burst(x, y, { count: 22, speed: 5, glyphs: ["💌", "💗", "✨"], size: 3.2 });
    if (iso === "2026-11-08" || iso === RETURN_DATE) fireworkShow(10, 4000);
    opened.add(iso);
    saveOpened([...opened]);
    t.classList.add("opened");
    t.querySelector(".tag").textContent = "🐾";
  });
  dayGrid.appendChild(t);
});

// ---------- open when… cards ----------
const cardGrid = $("#cardGrid");
OPEN_WHEN.forEach(({ when, icon, note }) => {
  const c = document.createElement("button");
  c.className = "flip";
  c.innerHTML = `<div class="flip-inner">
    <div class="face front"><span class="icon">${icon}</span><small>open when</small><span class="when"></span></div>
    <div class="face back"><p></p></div>
  </div>`;
  c.querySelector(".when").textContent = when;
  c.querySelector(".back p").textContent = note;
  c.addEventListener("click", () => {
    c.classList.toggle("flipped");
    if (c.classList.contains("flipped")) {
      const [x, y] = centerOf(c);
      burst(x, y, { count: 18, speed: 4.5, size: 2.6 });
    }
  });
  cardGrid.appendChild(c);
});

// ---------- the game ----------
const canvas = $("#canvas");
const ctx = canvas.getContext("2d");
let W = 0, H = 0;

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  W = canvas.clientWidth;
  H = canvas.clientHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  player.x = Math.min(Math.max(player.x || W / 2, player.w / 2), W - player.w / 2);
}

const puppyImg = new Image();
puppyImg.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(SVGS.lizu);

const player = { x: 0, targetX: 0, w: 76, h: 79 };
const ITEMS = [
  { e: "🦴", weight: 4 },
  { e: "🍫", weight: 3 },
  { e: "💗", weight: 3 },
  { e: "🐾", weight: 2 },
  { e: "🐱", weight: 1, cat: true },
];
const totalWeight = ITEMS.reduce((a, b) => a + b.weight, 0);

let items = [];
let pops = [];
let score = 0;
let msgIndex = 0;
let catIndex = 0;
let playing = false;
let spawnIn = 0;
let last = 0;

function pickItem() {
  let r = Math.random() * totalWeight;
  for (const it of ITEMS) {
    if ((r -= it.weight) < 0) return it;
  }
  return ITEMS[0];
}

function spawn() {
  const it = pickItem();
  items.push({
    ...it,
    x: 24 + Math.random() * (W - 48),
    y: -30,
    vy: 1.6 + Math.random() * 1.2,
    spin: (Math.random() - 0.5) * 0.04,
    rot: 0,
  });
}

let toastTimer;
function toast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3400);
}

function catchItem(it) {
  score++;
  $("#score").textContent = score;
  pops.push({ x: it.x, y: H - player.h - 10, text: it.cat ? "🐱💗" : "+1", life: 1 });
  const r = canvas.getBoundingClientRect();
  burst(r.left + it.x, r.top + it.y, { count: 10, speed: 3, size: 2.2 });
  if (it.cat) {
    toast(CAT_MESSAGES[catIndex++ % CAT_MESSAGES.length]);
  } else if (score % 5 === 0) {
    toast(GAME_MESSAGES[msgIndex++ % GAME_MESSAGES.length]);
    firework(r.left + r.width / 2, Math.max(40, r.top + 60));
  }
}

function update(dt) {
  player.x += (player.targetX - player.x) * Math.min(1, 0.25 * dt);

  spawnIn -= dt;
  if (spawnIn <= 0) {
    spawn();
    spawnIn = 42 + Math.random() * 30;
  }

  const top = H - player.h;
  items = items.filter((it) => {
    it.y += it.vy * dt;
    it.rot += it.spin * dt;
    const caught = it.y > top + 8 && it.y < top + 40 && Math.abs(it.x - player.x) < player.w / 2 + 6;
    if (caught) {
      catchItem(it);
      return false;
    }
    return it.y < H + 40;
  });

  pops = pops.filter((p) => {
    p.y -= 1.2 * dt;
    p.life -= 0.02 * dt;
    return p.life > 0;
  });
}

function draw() {
  ctx.clearRect(0, 0, W, H);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "30px system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif";
  for (const it of items) {
    ctx.save();
    ctx.translate(it.x, it.y);
    ctx.rotate(it.rot);
    ctx.fillText(it.e, 0, 0);
    ctx.restore();
  }

  const bounce = playing ? Math.sin(performance.now() / 120) * 2 : 0;
  ctx.drawImage(puppyImg, player.x - player.w / 2, H - player.h - 4 + bounce, player.w, player.h);

  ctx.font = "600 20px Fredoka, sans-serif";
  for (const p of pops) {
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = "#e85a8c";
    ctx.fillText(p.text, p.x, p.y);
  }
  ctx.globalAlpha = 1;
}

function loop(now) {
  const dt = Math.min((now - last) / 16.67, 3);
  last = now;
  if (playing) update(dt);
  draw();
  requestAnimationFrame(loop);
}

function moveTo(clientX) {
  const r = canvas.getBoundingClientRect();
  player.targetX = Math.min(Math.max(clientX - r.left, player.w / 2), W - player.w / 2);
}
canvas.addEventListener("pointerdown", (e) => moveTo(e.clientX));
canvas.addEventListener("pointermove", (e) => {
  if (e.pointerType === "mouse" || e.buttons) moveTo(e.clientX);
});
addEventListener("keydown", (e) => {
  if (!playing) return;
  if (e.key === "ArrowLeft") player.targetX = Math.max(player.w / 2, player.targetX - 40);
  if (e.key === "ArrowRight") player.targetX = Math.min(W - player.w / 2, player.targetX + 40);
});

$("#playBtn").addEventListener("click", () => {
  $("#overlay").classList.add("hidden");
  playing = true;
  toast(`go get 'em, ${NAME} 🐶`);
});

addEventListener("resize", resizeCanvas);
resizeCanvas();
player.x = player.targetX = W / 2;
requestAnimationFrame((t) => {
  last = t;
  loop(t);
});

// ---------- ending ----------
$("#endTitle").textContent = ENDING.title;
$("#endText").textContent = ENDING.text;
$("#endSign").textContent = ENDING.sign;

const ending = $("#ending");
let showDone = false;
new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !showDone) {
      showDone = true;
      fireworkShow(12, 5000);
    }
  },
  { threshold: 0.5 }
).observe(ending);
ending.addEventListener("pointerdown", (e) => firework(e.clientX, e.clientY));

// ---------- pink calculator ----------
const modal = $("#calcModal");
const display = $("#calcDisplay");
const line = $("#calcLine");
let expr = "";
let lineIndex = 0;

const KEYS = ["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "C", "0", "=", "+"];
KEYS.forEach((k) => {
  const b = document.createElement("button");
  b.textContent = k;
  if ("÷×−+".includes(k)) b.className = "op";
  if (k === "=") b.className = "eq";
  b.addEventListener("click", () => press(k));
  $("#calcKeys").appendChild(b);
});

function press(k) {
  if (k === "C") {
    expr = "";
    display.textContent = "0";
    line.textContent = "fresh start. those are allowed, you know.";
    return;
  }
  if (k === "=") {
    if (!expr) {
      display.textContent = "∞";
      line.textContent = `how much ${NAME} is appreciated`;
      return;
    }
    const js = expr.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
    let result;
    try {
      if (!/^[0-9+\-*/.]+$/.test(js)) throw 0;
      result = Function(`"use strict"; return (${js})`)();
      if (!isFinite(result)) throw 0;
      result = Math.round(result * 1e6) / 1e6;
      display.textContent = result;
      line.textContent = CALC_LINES[lineIndex++ % CALC_LINES.length];
    } catch {
      display.textContent = "oops 🙈";
      line.textContent = "even calculators get confused sometimes. that's okay.";
    }
    expr = "";
    return;
  }
  expr += k;
  display.textContent = expr;
}

$("#calcBtn").addEventListener("click", () => modal.classList.remove("hidden"));
$("#calcClose").addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});
