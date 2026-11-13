/* ===== EDIT YOUR PERSONAL DATA HERE ===== */
const D = {
  name: "Autumn",
  met: "21 June 2026",
  dating: "16 July 2026",
  gf: "1 August",
  bday: "10 July",
  photo: "14 October 2026"
};

const NOTES = [
  {
    s: "s0",
    t: `21 June 2026

Oh my my i can never forget this date my love the day we met for the first time You were helping Simon with her stuff and sh and I joined that server to troll creatures LOL see that's why I call you an angel and devil myself LMAOO but still this is lwk surprising af like out of every possible way we could've met we somehow met in Soulmate Color 😭 who would've thought that a random game would be where our story started`
  },
  {
    s: "s1",
    a: "bad",
    t: `

yk autumn I know how much you love playing badminton nd sh and I genuinely hope you achieve your dream of playing internationally one day and yk what I lwk have this silly little wish of playing badminton with you in a peaceful silent place in a lucid dream LOL just you and me playing for hours nonstop with no worries and nothing else to think about idk gng that sh lwk sounds SO FUN FOR SOME REASON 😭`
  },
  {
    s: "s2",
    a: "orb",
    t: `16 July 2026

OHHH YAYAYAYAY THS DATE OH MY MY IDK HOW LONG WE WERE TALKIN WITH EACH OTHER ON THAT DAY BUT FINALLY OH MY GOD AT THE END AT THE END OF THAT DAY AT NIGHT I TOLD U WHAT I TRULY FEEL ABT U AUTUMN DAT WAS LWK MA BEST DECISION OF MA LIFE MAN I LOVE YOU SO SO MUCH

yk i sometimes do dat typa sh rowan x autumn or chlorophyll BUT YK WHAT FK THOSE NGAS LMAOO U R MA FINE SHYT ONLY MA SHYT U R MY AUTUMN idc if ths sh sounds obsessed or whatever BUT U R MA AUTUMN ONLY MINEE U R YERESHHH'S AUTUMN YAYAYAYAYAYY

in every life i want u autumn only u i love you so much shaivi ridhhi autumn i love youu soo soo much`
  },
  {
    s: "s3",
    t: `14 October 2026

oh idk i lwk wanna add this date the date u got selected for ur photography sh YK I WAS HAPPY AF DAT DAY YAYAYAYAYAYAY yk i don't really like taking pics and sh way too much like i didn't even have a single pic of myself in ma phone it's not like i hate myself or hate how i look it's just idk gng for me sh is like instead of capturing the moment u should live that moment to the fullest kinda lame ik I HAVE DEMENTIA BUT STILL SEE I DON'T WANNA CAPTURE MEMORIES AND SH HAHAHAHAHA idk why i laughed but yea i think am gay 💔`
  },
  {
    s: "s4",
    t: `10 July 2026

SOOO THIS IS THE DATE WHEN MA FINE SHYT CAME INTO THIS WORLD AHH MB MB I MEAN U FELL FROM HEAVEN GNG U FELL FROM HEAVEN WITH PEONIES FLOWERS AROUND U OH MY MY GNG I CANT DESCRIBE THAT SH UR NATURE UR EYES UR VOICE EVERYTHING IS PERFECT AF MA CHOICE LWK GOATED YK THNX TO UR MAMA AND DADA FOR CREATING A CHINESE CREATURE LIKE YOU YAYAYAYA yk I LWK WANNA YAP A LOT IN THIS SH BUT NAAH I WILL SAVE THIS SH FOR LATER ONCE AGAIN THANK YOU SO MUCH FOR COMING INTO MA LIFE BABY`
  },
  {
    s: "s5",
    t: `1 August

ths is the last sh yk autumn here i wanna chismis with u see ik u have a lot of sh going on in yo life u lwk skip ur meals and sh too see autumn i cant do sh but deadass if i was there i would obliterate ur lil ass u appetite is fked a 15 yr old creature has to go into a coma nd sh see ik ur past sh was fked BUT HEY DUMBO see i know telling someone to change smthn is lwk fked cuz u never live sh from their own perspective everyone has different types of experiences and sh in their life and telling someone to change smthn is obv illogical nd U LWK ALREADY SMART GNG ik u tryna fix ur sh but these comas panic attacks and all those medicines aint good ml like taking essential sh is good WHY TF AM I SOO BAD AT EXPLAINING MYSELF AND SH HEY DUMBO ITS ALL UR FAULT YK WHAT TRY TO READ MAA MIND YK ME VERY WELL u lwk cute af gng i will fs eat u alive YK I WILL UNLEASH ALL MA YEARS OF DEMONS ON YOU YAYAYAYAYAY FK DAT ASEXUAL SH PRAY FOR UR WHOLE BODY AND SOUL GNG mb idk why tf i get freaky outta nowhere ths is also ur fault`
  }
];
/* ======================================== */

const $ = i => document.getElementById(i), C = $("sky"), X = C.getContext("2d");
const music = $("bg-music"), musicToggle = $("music-toggle");
music.volume = .34;
function syncMusicToggle() { const playing = !music.paused; musicToggle.textContent = playing ? "♫ music on" : "♫ music off"; musicToggle.setAttribute("aria-pressed", String(playing)); musicToggle.setAttribute("aria-label", playing ? "Pause background music" : "Play background music"); }
function startMusic() { music.play().catch(() => { musicToggle.textContent = "♫ tap for music"; musicToggle.setAttribute("aria-label", "Play background music"); }); }
music.addEventListener("play", syncMusicToggle); music.addEventListener("pause", syncMusicToggle);
music.addEventListener("error", () => { musicToggle.textContent = "♫ music unavailable"; musicToggle.setAttribute("aria-label", "Background music unavailable"); });
musicToggle.addEventListener("click", () => { if (music.paused) startMusic(); else music.pause(); });
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches, K = RM ? .3 : 1, TS = RM ? 2.5 : 1;
const COL = { w: "251,241,225", p: "196,119,135", g: "216,180,111", r: "121,25,48", b: "145,126,139", i: "243,231,210" };
const R = Math.random, PI = Math.PI, cl = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v)), ez = e => e * e * (3 - 2 * e);
let W, H, DP = Math.min(devicePixelRatio || 1, 2), mx = 0, my = 0, T = 0, last = performance.now(), formStars = [], messageLength = 0, settleAt = 0, thanksShown = false;
function rs() { const oldW = W || innerWidth, oldH = H || innerHeight; W = innerWidth; H = innerHeight; C.width = W * DP; C.height = H * DP; X.setTransform(DP, 0, 0, DP, 0, 0); if (formStars.length) retargetMessage(oldW, oldH); }
addEventListener("resize", rs); rs();
addEventListener("pointermove", e => { mx = e.clientX / W - .5; my = e.clientY / H - .5; });

const bg = [...Array(175)].map(() => ({ x: R(), y: R(), s: R() < .08 ? 2 : R() < .16 ? 1.5 : .8, p: R() * 6.3, z: R() * .9 + .1, c: ["w", "w", "w", "p", "b"][R() * 5 | 0], drift: R() < .22 ? (R() - .5) * 2.4 : 0, tw: .15 + R() * .85 }));
const dust = [...Array(RM ? 10 : 42)].map(() => ({ x: R(), y: R(), z: R() < .3 ? 2 : 1, p: R() * 6.3 }));
const P = [[.2, .68], [.3, .3], [.5, .55], [.62, .22], [.8, .42], [.72, .76]];
const FROM = ["scale(.4)", "rotate(180deg) scale(0)", "scale(3)", "translateY(-70px)", "translateX(-70px)", "translateY(60px) rotate(40deg)"];
const HP = [[-10.4, 11.5], [0, 5], [10.4, 11.5], [12, -3.9], [0, -17], [-12, -3.9]];
const ST = [[-.15, .3], [.5, -.15], [1.15, .2], [1.15, .85], [.5, 1.15], [-.15, .8]], AMP = [90, -130, 70, -80, 150, -100];
const EAS = [ez, e => 1 - Math.pow(1 - e, 3), e => 1 - Math.pow(1 - e, 4), e => e * e * e * (e * (6 * e - 15) + 10), e => 1 - Math.pow(1 - e, 2), e => Math.sin(e * 1.5708)];

let phase = "intro", taps = 0, glow = 0, idx = 0, got = [], st = [], paths = [], ripples = [], parts = [], strm = [], act = null, pa = null;
let busy = false, open = false, dim = 0, dimT = 0, zm = 1.15, zt = 1, bw = .15, pul = 1, hT = 0, hA = 0, heartOn = false, dis = false, noteOn = false, noteT = 0, fT = 0, hoff = 0, pb = 0;
const messagePath = $("message-path");
let messageShape = null; try { messageShape = new Path2D(messagePath.getAttribute("d")); } catch {}
function messagePoint(q) { const svg = $("letter"), rect = svg.getBoundingClientRect(), p = messagePath.getPointAtLength(messageLength * q); return [rect.left + p.x / 1600 * rect.width, rect.top + p.y / 280 * rect.height]; }
function retargetMessage(oldW = W, oldH = H) {
  if (!messagePath || !formStars.length) return;
  const sx = W / oldW, sy = H / oldH, n = formStars.length;
  formStars.forEach((p, i) => { const t = messagePoint((i + .5) / n); p.sx = (p.x ?? p.sx) * sx; p.sy = (p.y ?? p.sy) * sy; p.x = p.sx; p.y = p.sy; p.tx = t[0]; p.ty = t[1]; p.start = fT; p.duration = Math.max(.45, p.duration * (1 - p.progress)); p.curveX *= sx; p.curveY *= sy; });
  settleAt = fT + Math.max(...formStars.map(p => p.duration));
}
function beginFinal() {
  phase = "final"; fT = 0; hoff = 0; zm = 1; zt = 1; formStars = []; thanksShown = false;
  messageLength = messagePath.getTotalLength(); const count = Math.min(980, Math.max(480, Math.ceil(messageLength / 12)));
  const edge = () => { const side = R() * 4 | 0; return side === 0 ? [R()*W, -20] : side === 1 ? [W+20, R()*H] : side === 2 ? [R()*W, H+20] : [-20, R()*H]; };
  for (let i = 0; i < count; i++) {
    const [tx,ty] = messagePoint((i+.5)/count); let sx,sy;
    if (i < bg.length) { sx = bg[i].x * W - mx * 34 * bg[i].z; sy = ((bg[i].y * H + T * bg[i].drift) % H + H) % H - my * 30 * bg[i].z; }
    else if (i < bg.length + got.length) { [sx,sy] = pos(got[i-bg.length]); }
    else if (R() < .34) [sx,sy] = edge(); else if (R() < .22) { sx=W/2+(R()-.5)*80; sy=H/2+(R()-.5)*80; } else { sx=R()*W; sy=R()*H; }
    const bright = R() < .11;
    formStars.push({sx,sy,x:sx,y:sy,tx,ty,start:RM?0:.7+R()*3.6,duration:RM?.55:(bright?1.7:2.4)+R()*1.8,curveX:RM?0:(R()-.5)*Math.min(W,H)*.32,curveY:RM?0:(R()-.5)*Math.min(W,H)*.32,r:bright?1.5+R():.55+R()*.8,c:R()<.12?"r":R()<.52?"g":"i",bright,tw:R()*6.28,progress:0});
  }
  settleAt = Math.max(...formStars.map(p => p.start + p.duration));
  $("final").className = "";
}

const pos = i => [P[i][0] * W, P[i][1] * H];
const U = () => Math.min(W * .03, H * .019);
const hpos = i => { const u = U(); return [W / 2 + HP[i][0] * u * pul, H / 2 + hoff * H - (HP[i][1] + 2.5) * u * pul]; };
const fpos = i => { const e = ez(cl((fT - i * .5) / 2.4)), a = pos(i), b = hpos(i); return [a[0] + (b[0] - a[0]) * e, a[1] + (b[1] - a[1]) * e]; };
function hstar(i) {
  const dl = .4 + i * .55, du = 2.2 + (i % 3) * .4, e0 = cl((hT - dl) / du), e = EAS[i](e0), t = hpos(i), sx = ST[i][0] * W, sy = ST[i][1] * H;
  const dx = t[0] - sx, dy = t[1] - sy, n = Math.hypot(dx, dy) || 1, w = Math.sin(e0 * PI) * AMP[i];
  return { x: sx + dx * e - dy / n * w, y: sy + dy * e + dx / n * w, a: cl((hT - dl) / .8), e: e0 };
}

function burst(x, y, n, sp, cs = ["w", "p", "g"]) {
  for (let i = 0; i < n * K && parts.length < 800; i++) { const a = R() * 6.283, v = R() * sp; parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 1, d: .3 + R() * .6, s: R() < .2 ? 2 : 1, c: COL[cs[R() * cs.length | 0]] }); }
}
const mk = (sx, sy, tx, ty, c, t0 = 0) => ({ sx, sy, tx, ty, t: -t0, d: 1.2 + R() * .8, sw: (R() - .5) * 180, c: COL[c] });
function stream(sx, sy, tx, ty, n, c) { for (let i = 0; i < n * K; i++) strm.push(mk(sx, sy, tx, ty, c, R() * .8)); }
function star(x, y, r, a = 1, c = COL.w, g = c) {
  const gr = X.createRadialGradient(x, y, 0, x, y, r * 5); gr.addColorStop(0, `rgba(${g},${.5 * a})`); gr.addColorStop(1, `rgba(${g},0)`);
  X.fillStyle = gr; X.fillRect(x - r * 5, y - r * 5, r * 10, r * 10);
  X.save(); X.translate(x, y); X.rotate(.12 * Math.sin(T + x * .02)); X.strokeStyle = `rgba(${c},${a})`; X.lineWidth = Math.max(.7, r * .12); X.lineCap = "round";
  X.beginPath(); X.moveTo(0, -r * 1.5); X.quadraticCurveTo(-r * .12, -r * .25, -r * .85, 0); X.quadraticCurveTo(-r * .16, r * .12, 0, r * 1.15); X.quadraticCurveTo(r * .12, r * .2, r * .82, 0); X.quadraticCurveTo(r * .15, -r * .12, 0, -r * 1.5); X.stroke();
  X.beginPath(); X.moveTo(-r * .55, -r * .58); X.lineTo(-r * .36, -r * .36); X.moveTo(r * .48, r * .35); X.lineTo(r * .66, r * .55); X.stroke(); X.restore();
}
function wing(cx, cy, L, p, d) {
  for (let k = 0; k < 2; k++) {
    X.save(); X.beginPath();
    for (let i = 0; i < 22; i++) {
      const u = i / 21, th = -1.57 + (-.18 + u * 2.1) * p, len = L * (k ? .6 : 1) * (.45 + .55 * Math.sin(PI * cl(u * .9 + .12))) * (.3 + .7 * p);
      const tx = cx + d * Math.cos(th) * len, ty = cy + Math.sin(th) * len;
      X.moveTo(cx, cy); X.quadraticCurveTo((cx + tx) / 2 - (ty - cy) * .15 * d, (cy + ty) / 2 + (tx - cx) * .15 * d, tx, ty);
    }
    X.strokeStyle = `rgba(246,236,217,${(k ? .35 : .75) * p})`; X.lineWidth = k ? 1 : 1.3; X.shadowColor = "rgba(243,201,105,.9)"; X.shadowBlur = 10; X.stroke(); X.restore();
  }
}
function peony(x, y, r0, b, a) {
  const open = ez(cl(b)), size = r0 * (.28 + .72 * open);
  X.save(); X.translate(x, y + size * .64); X.rotate(-.2);
  X.strokeStyle = `rgba(102,119,70,${a * .72})`; X.lineWidth = Math.max(1, r0 * .012); X.beginPath(); X.moveTo(0, size * .12); X.quadraticCurveTo(-size * .12, size * .72, -size * .28, size * 1.3); X.stroke();
  for (let j = 0; j < 2; j++) { X.save(); X.translate(j ? -size * .08 : -size * .12, size * (.52 + j * .28)); X.rotate(j ? -2.1 : .72); X.beginPath(); X.moveTo(0, 0); X.bezierCurveTo(size * .1, -size * .16, size * .48, -size * .17, size * .6, 0); X.bezierCurveTo(size * .4, size * .11, size * .15, size * .1, 0, 0); X.fillStyle = `rgba(63,91,57,${a * .3})`; X.fill(); X.strokeStyle = `rgba(166,163,112,${a * .55})`; X.stroke(); X.beginPath(); X.moveTo(0, 0); X.quadraticCurveTo(size * .3, -size * .02, size * .56, 0); X.stroke(); X.restore(); }
  X.restore();
  const layers = [
    {n:8, r:.67, len:.72, wid:.31, rot:.04, fill:[91,19,39]},
    {n:7, r:.5, len:.66, wid:.3, rot:.39, fill:[145,38,62]},
    {n:6, r:.32, len:.58, wid:.29, rot:.12, fill:[187,91,108]},
    {n:5, r:.16, len:.48, wid:.27, rot:.48, fill:[222,157,160]}
  ];
  layers.forEach((L, layer) => {
    const phase = ez(cl((open - layer * .17) / .66));
    if (phase <= 0) return;
    for (let i = 0; i < L.n; i++) {
      const wobble = Math.sin((i + 1) * 12.73 + layer * 2.1), ang = i * 6.283 / L.n + L.rot + wobble * .085;
      const reach = size * L.r * phase, len = size * L.len * (.88 + .12 * Math.sin(i * 5.1 + layer));
      X.save(); X.translate(x + Math.cos(ang) * reach * .28, y + Math.sin(ang) * reach * .28); X.rotate(ang + Math.PI / 2 + (1 - phase) * (.7 + layer * .13));
      X.scale(1, .25 + .75 * phase); X.beginPath(); X.moveTo(0, 0);
      X.bezierCurveTo(-len * L.wid * .75, -len * .36, -len * L.wid * 1.35, -len * .79, wobble * len * .05, -len);
      X.bezierCurveTo(len * L.wid * .78, -len * .84, len * L.wid * 1.08, -len * .34, 0, 0);
      const [cr,cg,cb] = L.fill, shade = X.createLinearGradient(-len * L.wid, 0, len * L.wid, -len);
      shade.addColorStop(0, `rgba(${Math.max(cr-35,35)},${Math.max(cg-22,8)},${Math.max(cb-15,18)},${a*.92})`); shade.addColorStop(.48, `rgba(${cr},${cg},${cb},${a*.94})`); shade.addColorStop(1, `rgba(${Math.min(cr+48,255)},${Math.min(cg+35,235)},${Math.min(cb+31,230)},${a*.9})`);
      X.fillStyle = shade; X.fill(); X.strokeStyle = `rgba(246,220,205,${a * (.22 + layer * .025)})`; X.lineWidth = Math.max(.65, r0 * .009); X.stroke();
      X.beginPath(); X.moveTo(0, -len * .06); X.quadraticCurveTo(wobble * len * .06, -len * .47, wobble * len * .035, -len * .94); X.strokeStyle = `rgba(255,225,210,${a*.35})`; X.lineWidth = Math.max(.55, r0*.007); X.stroke();
      for (let v = 0; v < 2; v++) { X.beginPath(); X.moveTo(wobble * len * .025, -len * (.35 + v*.18)); X.quadraticCurveTo((v ? 1 : -1) * len * .08, -len * (.45 + v*.18), (v ? 1 : -1) * len * L.wid * .72, -len * (.51 + v*.18)); X.strokeStyle = `rgba(255,222,207,${a*.19})`; X.stroke(); }
      X.restore();
    }
  });
  X.fillStyle = `rgba(83,35,39,${a*.9})`; X.beginPath(); X.ellipse(x, y, size*.14, size*.105, -.3, 0, 6.283); X.fill();
  for (let i = 0; i < 19; i++) { const t = i * 2.4, d = size * (.035 + i%4*.012), ex = x + Math.cos(t)*d, ey = y + Math.sin(t)*d*.72; X.strokeStyle = `rgba(232,191,116,${a*.74})`; X.lineWidth = Math.max(.7,r0*.009); X.beginPath(); X.moveTo(ex,ey); X.lineTo(ex+Math.cos(t)*size*.055,ey+Math.sin(t)*size*.055); X.stroke(); X.fillStyle=`rgba(246,221,160,${a*.85})`; X.beginPath(); X.arc(ex+Math.cos(t)*size*.055,ey+Math.sin(t)*size*.055,Math.max(.8,r0*.012),0,6.283); X.fill(); }
}
function reveal(el, t) { const w = t.split(" "); el.innerHTML = w.map((s, i) => `<span class="w" style="--i:${i}">${s}</span>`).join(" "); return w.length; }
/* ---- heart scene ---- */
function startHeart() { phase = "heart"; hT = 0; hA = 1; heartOn = true; dis = false; noteOn = false; hoff = 0; }

/* ---- journey flow ---- */
function spawn() {
  busy = true; const n = $("note"), s = NOTES[idx].s, p = idx ? P[idx] : [.5, .5];
  n.style.left = p[0] * 100 + "%"; n.style.top = p[1] * 100 + "%"; n.style.setProperty("--f", FROM[idx]);
  n.className = s; void n.offsetWidth; n.className = s + " in";
  setTimeout(() => busy = false, 1700);
}
$("note").onclick = () => {
  if (busy || open) return; busy = true; open = true;
  const n = $("note"), r = n.getBoundingClientRect(), c = $("card"), s = NOTES[idx].s;
  c.style.transition = "none"; c.className = s + " hidden";
  c.style.setProperty("--dx", r.left + r.width / 2 - W / 2 + "px"); c.style.setProperty("--dy", r.top + r.height / 2 - H / 2 + "px");
  void c.offsetWidth; c.style.transition = "";
  n.className = s + " out"; dimT = .55; zt = 1.07; c.className = s;
  $("num").textContent = "Sh Happens" + (idx + 1);
  const cnt = reveal($("text"), NOTES[idx].t); $("next").className = "hidden";
  setTimeout(() => $("next").className = "", cnt * 70 / TS + 1300);
};
$("next").onclick = () => {
  if (!open) return; open = false; dimT = 0; zt = 1; $("next").className = "hidden";
  $("card").className = NOTES[idx].s + " hidden";
  setTimeout(() => { const a = NOTES[idx].a; if (a) act = ACT[a](); else done(); }, 1200);
};
function finish() { act.fin = true; setTimeout(() => { act = null; done(); }, 1600); }
function done() {
  const p = pos(idx); stream(W / 2, H / 2, p[0], p[1], 45, "g"); burst(W / 2, H / 2, 40, 3, ["g", "w"]);
  if (idx === 0) { dis = true; for (let i = 0; i < 6; i++) { const s = hstar(i); for (let k = 0; k < 8 * K; k++) strm.push(mk(s.x, s.y, p[0], p[1], "g", R() * .6)); } phase = "journey"; }
  st[idx] = T + 1.1; got.push(idx);
  if (idx < 5) setTimeout(() => pa = { f: idx, t: idx + 1, p: 0 }, 1400);
  else setTimeout(beginFinal, 2000);
}
$("restart").onclick = () => {
  $("final").className = "hidden";
  setTimeout(() => {
    got = []; st = []; paths = []; idx = 0; taps = 0; glow = 0; phase = "intro"; parts = []; strm = []; formStars = []; pa = null; act = null;
    fT = 0; hoff = 0; heartOn = false; busy = false; open = false; zm = 1.15; zt = 1;
  }, 2600);
};

/* ---- input (mouse + touch) ---- */
C.addEventListener("pointerdown", e => {
  const x = e.clientX, y = e.clientY;
  if (phase === "intro") {
    if (Math.hypot(x - W / 2, y - H / 2) > 55) return;
    if (music.paused) startMusic();
    taps++; glow = taps / 5; ripples.push({ x: W / 2, y: H / 2, r: 8, a: 1 }); burst(W / 2, H / 2, 14, 1.8, ["w", "r", "p"]);
    if (taps >= 5) {
      phase = "burst"; burst(W / 2, H / 2, 280, 6, ["w", "p", "g", "r"]); ripples.push({ x: W / 2, y: H / 2, r: 8, a: 1.5 });
      zm = 1.0; setTimeout(startHeart, 2800);
    }
  } else if (act && !act.fin) act.tap(x, y);
});

/* ---- little interactions ---- */
const ACT = {
  bad() {
    const o = { x: -30, y: H / 2, d: 1, n: 0, t: 0, fin: false };
    o.tap = (x, y) => { if (Math.hypot(x - o.x, y - o.y) > 60) return; o.d *= -1; o.n++; burst(o.x, o.y, 24, 2.5, ["w", "g"]); ripples.push({ x: o.x, y: o.y, r: 6, a: 1 }); if (o.n >= 3) finish(); };
    o.draw = dt => {
      o.t += dt; o.x += o.d * dt * W * .28; if (o.x > W + 30) o.d = -1; if (o.x < -30) o.d = 1;
      o.y = H * .5 + Math.sin(o.t * 1.6) * H * .18;
      const ang = Math.atan2(Math.cos(o.t * 1.6) * H * .18 * 1.6, o.d * W * .28);
      if (parts.length < 700) parts.push({ x: o.x, y: o.y, vx: 0, vy: 0, l: 1, d: 1.4, s: 1, c: COL.g });
      X.save(); X.translate(o.x, o.y); X.rotate(ang); X.shadowColor = "#f3c969"; X.shadowBlur = 12;
      X.fillStyle = "#f6ecd9"; X.beginPath(); X.arc(8, 0, 4, 0, 6.283); X.fill();
      X.strokeStyle = "rgba(246,236,217,.9)"; X.beginPath();
      for (let k = -3; k <= 3; k++) { X.moveTo(5, k * .9); X.lineTo(-16, k * 3.2); }
      X.moveTo(-16, -9.6); X.lineTo(-16, 9.6); X.stroke(); X.restore();
    };
    return o;
  },
  orb() {
    const cx = W / 2, cy = H / 2, Rr = Math.min(W, H) * .22, o = { a: 0, w: 1, n: 0, tr: [], fin: false };
    o.tap = () => { o.w = Math.min(o.w * 1.8, 6); o.n++; ripples.push({ x: cx, y: cy, r: 10, a: 1 }); if (o.n >= 3) finish(); };
    o.draw = dt => {
      o.w += (1 - o.w) * dt * .8; o.a += o.w * dt;
      const x = cx + Math.cos(o.a) * Rr, y = cy + Math.sin(o.a) * Rr * .6;
      X.save(); X.setLineDash([2, 7]); X.strokeStyle = "rgba(246,236,217,.4)"; X.beginPath(); X.ellipse(cx, cy, Rr, Rr * .6, 0, 0, 6.283); X.stroke(); X.restore();
      o.tr.push([x, y]); if (o.tr.length > 30) o.tr.shift();
      o.tr.forEach((t, i) => { X.fillStyle = `rgba(243,201,105,${i / 50})`; X.fillRect(t[0], t[1], 2, 2); });
      star(cx, cy, 9, 1, COL.i, COL.r);
      X.save(); X.shadowColor = "#7aa2ff"; X.shadowBlur = 14; X.fillStyle = "#9db8ff"; X.beginPath(); X.arc(x, y, 5, 0, 6.283); X.fill();
      X.strokeStyle = "#f6ecd9"; X.beginPath(); X.ellipse(x, y, 9, 2.5, -.4, 0, 6.283); X.stroke(); X.restore();
    };
    return o;
  }
};

/* ---- main loop ---- */
function frame(now) {
  const dt = Math.min((now - last) / 1000, .05); last = now; T += dt;
  if (phase === "final") fT += dt * TS;
  zm += (zt - zm) * dt * .9; dim += (dimT - dim) * dt * 3; bw += ((phase === "final" ? 1 : heartOn ? .5 : .15) - bw) * dt * .4;
  pul = 1 + .025 * Math.sin(T * 2.4) * (phase === "final" ? cl((fT - 5) / 2) : heartOn ? cl((hT - 7) / 2) : 0);
  const u = U(), fg = phase === "final" ? cl((fT - 4) / 2) : 0;

  X.fillStyle = "#050103"; X.fillRect(0, 0, W, H);
  const g = X.createRadialGradient(W / 2, H * .6, 0, W / 2, H * .6, Math.max(W, H) * .75);
  g.addColorStop(0, `rgba(90,8,28,${.12 + .5 * bw})`); g.addColorStop(.55, `rgba(34,3,14,${.1 + .4 * bw})`); g.addColorStop(1, "rgba(0,0,0,0)");
  X.fillStyle = g; X.fillRect(0, 0, W, H);
  X.save(); X.translate(W / 2, H / 2); X.scale(zm, zm); X.translate(-W / 2, -H / 2);

  bg.forEach(s => {
    const tw = .5 + .5 * Math.sin(T * (1.05 + s.tw * 1.8) + s.p), fade = phase === "final" ? .12+.88*(1-cl(fT/1.8)) : 1;
    const yy = ((s.y * H + T * s.drift) % H + H) % H;
    X.fillStyle = `rgba(${COL[s.c]},${(.12 + .78 * tw) * s.z * fade})`; X.fillRect((s.x * W - mx * 34 * s.z) | 0, (yy - my * 30 * s.z) | 0, s.s, s.s);
  });
  dust.forEach(d => {
    X.fillStyle = `rgba(216,180,111,${(.1 + .2 * Math.sin(T * .8 + d.p) ** 2) * (phase === "final" ? .55 : 1)})`;
    X.fillRect(d.x * W + Math.sin(T * .3 + d.p) * 20 - mx * 30 * d.z, ((d.y * H - T * 6 * d.z) % H + H) % H, d.z, d.z);
  });

  if (phase === "intro") star(W / 2, H / 2, 6 + glow * 10 + Math.sin(T * 2.5) * 1.5, .75 + glow * .25, COL.i, COL.r);

  if (phase === "final") {
    const seed = cl(fT/1.35) * (1-cl((fT-1.35)/1.45)); if (seed > .01) star(W/2,H/2,5+seed*7,seed,COL.i,COL.r);
    const glowTime = fT - settleAt - .65;
    const goldGlow = cl(glowTime/2.3), overallGlow = cl((glowTime-.25)/2.1), ivoryGlow = cl((glowTime-.7)/1.8), garnetGlow = cl((glowTime-.9)/2.4), wave = cl((glowTime-1.55)/2.5);
    const heartbeatTime=fT-settleAt-.45, beatPhase=((heartbeatTime%3.4)+3.4)%3.4, heartbeat=heartbeatTime>0?cl(Math.exp(-Math.pow((beatPhase-.16)/.13,2))+.52*Math.exp(-Math.pow((beatPhase-.46)/.16,2))):0;
    const letterRect = $("letter").getBoundingClientRect();
    if (garnetGlow > 0) { const aura = X.createRadialGradient(W/2,H/2,Math.min(W,H)*.035,W/2,H/2,Math.min(W,H)*.58); aura.addColorStop(0,`rgba(120,24,48,${.16*garnetGlow})`); aura.addColorStop(.48,`rgba(92,15,36,${.1*garnetGlow})`); aura.addColorStop(1,"rgba(50,4,18,0)"); X.fillStyle=aura; X.fillRect(0,0,W,H); }
    if (messageShape && goldGlow > 0) { const blur=Math.min(12,Math.max(5,letterRect.width/100)); X.save(); X.translate(letterRect.left,letterRect.top); X.scale(letterRect.width/1600,letterRect.height/280); X.lineJoin="round"; X.lineWidth=9; X.strokeStyle=`rgba(226,181,101,${.12*goldGlow})`; X.shadowColor=`rgba(239,192,107,${.52*goldGlow})`; X.shadowBlur=blur; X.stroke(messageShape); X.lineWidth=3; X.strokeStyle=`rgba(246,226,191,${.08*goldGlow})`; X.shadowColor="transparent"; X.shadowBlur=0; X.stroke(messageShape); X.restore(); }
    formStars.forEach(p => {
      const e0 = cl((fT-p.start)/p.duration), e = ez(e0), arc = Math.sin(e0*PI);
      p.progress = e0; p.x = p.sx+(p.tx-p.sx)*e+p.curveX*arc; p.y = p.sy+(p.ty-p.sy)*e+p.curveY*arc;
      const nx=cl((p.tx-letterRect.left)/letterRect.width), front=-.04+wave*1.08, passed=wave>0?cl((front-nx+.045)/.09):0, waveBand=wave>0?Math.max(0,1-Math.abs(nx-front)/.06):0;
      const pulse=Math.sin(T*2.2+p.tw), tw=(.68+.32*pulse)*(1-overallGlow)+(.84+.16*pulse)*overallGlow+overallGlow*.025*Math.sin(T*.55+p.tw), alpha=cl((.16+.84*e)*tw*(.74+.17*overallGlow+.18*passed+.12*waveBand)*(1+.12*heartbeat)), color=COL[p.c];
      if (e0 >= 1) { X.fillStyle=`rgba(226,181,101,${.075+.025*Math.sin(T*.7+p.tw)+.03*heartbeat})`; X.beginPath(); X.arc(p.x,p.y,p.r+1.7+.24*heartbeat,0,6.283); X.fill(); }
      if (p.bright) star(p.x,p.y,p.r*(1+.08*goldGlow+.1*waveBand+.035*heartbeat),alpha,color,p.c === "r" ? COL.r : COL.g);
      else { X.fillStyle=`rgba(${color},${alpha})`; X.beginPath(); X.arc(p.x,p.y,p.r*(1+.07*goldGlow+.08*waveBand+.035*heartbeat),0,6.283); X.fill(); }
      const highlight=ivoryGlow*(.12+.11*passed+.32*waveBand); if (highlight>.01) { X.fillStyle=`rgba(255,248,231,${highlight})`; X.beginPath(); X.arc(p.x,p.y,Math.max(.42,p.r*.48),0,6.283); X.fill(); }
    });
    if (!thanksShown && fT >= settleAt + 1.1) { thanksShown = true; $("final").classList.add("thanks-visible"); }
  }

  pb += ((open && idx === 4 ? 1 : 0) - pb) * dt * .9; if (pb > .02) peony(W / 2, H / 2, Math.min(W, H) * .34, pb, pb * .9);

  if (heartOn) {
    hT += dt * TS; if (dis) hA = Math.max(0, hA - dt * .6); if (hA <= 0 && dis) heartOn = false;
    const s = [0, 1, 2, 3, 4, 5].map(hstar), ca = cl((hT - 8.5) / 2) * hA;
    if (ca > 0) { const c = X.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, u * 20); c.addColorStop(0, `rgba(243,201,105,${.3 * ca})`); c.addColorStop(.35, `rgba(176,30,60,${.3 * ca})`); c.addColorStop(1, "rgba(90,6,24,0)"); X.fillStyle = c; X.fillRect(0, 0, W, H); }
    const lp = cl((hT - 6.4) / 2.6) * 6;
    for (let i = 0; i < 6; i++) {
      const q = cl(lp - i); if (q <= 0) continue; const a = s[i], b = s[(i + 1) % 6];
      X.save(); X.setLineDash([2, 7]); X.strokeStyle = `rgba(243,201,105,${.75 * hA})`; X.shadowColor = "rgba(243,201,105,.9)"; X.shadowBlur = ca * 12;
      X.beginPath(); X.moveTo(a.x, a.y); X.lineTo(a.x + (b.x - a.x) * q, a.y + (b.y - a.y) * q); X.stroke(); X.restore();
    }
    s.forEach((p, i) => {
      if (p.a <= 0) return; star(p.x, p.y, 3 + p.a * 3 + ca * 2, p.a * hA, COL.i, i % 2 ? COL.p : COL.g);
      if (p.e > 0 && p.e < 1 && parts.length < 700) parts.push({ x: p.x, y: p.y, vx: (R() - .5) * .3, vy: (R() - .5) * .3, l: 1, d: 1.1, s: 1, c: i % 2 ? COL.p : COL.g });
    });
    if (hT > 9.5 && hT < 11.8 && !dis) for (let k = 0; k < 2 * K; k++) { const a = s[R() * 6 | 0], b = s[(R() * 6 | 0)], q = R(); strm.push(mk(a.x + (b.x - a.x) * q, a.y + (b.y - a.y) * q, W / 2, H / 2, "g")); }
    const gl = cl((hT - 9.5) / 2) * hA;
    if (gl > 0) { const c = X.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, u * 6); c.addColorStop(0, `rgba(255,236,170,${.55 * gl * (.8 + .2 * Math.sin(T * 3))})`); c.addColorStop(1, "rgba(255,236,170,0)"); X.fillStyle = c; X.fillRect(W / 2 - u * 6, H / 2 - u * 6, u * 12, u * 12); }
    if (hT > 11) {
      const na = noteOn ? cl(1 - (hT - noteT) / 1.2) : cl((hT - 11) / 2.5) * hA;
      if (na > 0) {
        const sc = .6 + .4 * cl((hT - 11) / 2.5); X.save(); X.translate(W / 2, H / 2); X.scale(sc, sc); X.globalAlpha = na; X.shadowColor = "#f3c969"; X.shadowBlur = 24;
        const g2 = X.createLinearGradient(-17, -21, 17, 21); g2.addColorStop(0, "#7a5517"); g2.addColorStop(.5, "#e8c36a"); g2.addColorStop(1, "#7a5517");
        X.fillStyle = g2; X.fillRect(-17, -21, 34, 42); X.strokeStyle = "#f3c969"; X.strokeRect(-17, -21, 34, 42); X.restore();
      }
    }
    if (hT > 12.2 && !noteOn && !dis && phase === "heart") { noteOn = true; noteT = hT; spawn(); }
  }

  const cp = i => phase === "final" ? fpos(i) : pos(i);
  const dl = (a, b, al) => { X.save(); X.setLineDash(fg > .5 ? [] : [2, 8]); X.lineWidth = 1; X.strokeStyle = `rgba(243,201,105,${al})`; X.shadowColor = "rgba(243,201,105,.9)"; X.shadowBlur = fg * 14; X.beginPath(); X.moveTo(a[0], a[1]); X.lineTo(b[0], b[1]); X.stroke(); X.restore(); };
  if (phase !== "final") paths.forEach(p => dl(cp(p[0]), cp(p[1]), .4 + .5 * fg));
  if (phase !== "final" && fg > 0 && got.length > 5) dl(cp(5), cp(0), fg * .9);
  if (pa) {
    pa.p += dt * .45; const a = pos(pa.f), b = pos(pa.t), p = Math.min(pa.p, 1);
    dl(a, [a[0] + (b[0] - a[0]) * p, a[1] + (b[1] - a[1]) * p], .6);
    for (let k = 0; k < 4; k++) { const q = p * 1.2 - k * .08; if (q < 0 || q > p || parts.length > 700) continue; parts.push({ x: a[0] + (b[0] - a[0]) * q, y: a[1] + (b[1] - a[1]) * q, vx: (R() - .5) * .4, vy: (R() - .5) * .4, l: 1, d: 1.2, s: 1, c: COL.g }); }
    if (pa.p >= 1) { paths.push([pa.f, pa.t]); idx = pa.t; pa = null; spawn(); }
  }
  if (phase !== "final") got.forEach(i => { const p = cp(i), a = cl((T - st[i]) / 1.2); if (a > 0) star(p[0], p[1], 5 + Math.sin(T * 2 + i) * 1.2 + fg * 2, a, COL.i, COL.g); });

  if (act) act.draw(dt);
  if (open && R() < .6 * K && parts.length < 700) parts.push({ x: W / 2 + (R() - .5) * Math.min(W * .9, 480), y: H / 2 + (R() - .5) * 280, vx: 0, vy: -.3, l: 1, d: .5, s: 1, c: COL[R() < .5 ? "g" : "p"] });

  ripples = ripples.filter(r => r.a > 0);
  ripples.forEach(r => { r.r += 1.6; r.a -= .02; X.strokeStyle = `rgba(246,236,217,${Math.max(r.a, 0)})`; X.beginPath(); X.arc(r.x, r.y, r.r, 0, 6.283); X.stroke(); });
  strm = strm.filter(p => p.t < p.d);
  strm.forEach(p => {
    p.t += dt; if (p.t < 0) return;
    const e = ez(cl(p.t / p.d)), dx = p.tx - p.sx, dy = p.ty - p.sy, n = Math.hypot(dx, dy) || 1, w = Math.sin(e * PI) * p.sw;
    X.fillStyle = `rgba(${p.c},${1 - cl((e - .85) * 6) * .6})`; X.fillRect(p.sx + dx * e - dy / n * w, p.sy + dy * e + dx / n * w, 2, 2);
  });
  parts = parts.filter(p => p.l > 0);
  parts.forEach(p => { p.x += p.vx; p.y += p.vy; p.vx *= .975; p.vy *= .975; p.l -= dt * p.d; X.fillStyle = `rgba(${p.c},${Math.max(p.l, 0)})`; X.fillRect(p.x, p.y, p.s, p.s); });
  X.restore();
  if (dim > .01) { X.fillStyle = `rgba(0,0,0,${dim})`; X.fillRect(0, 0, W, H); }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

