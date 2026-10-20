import * as THREE from "three";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const root = document.documentElement;
const tier = (document.querySelector("script[data-tier]") || {}).dataset?.tier || "full";
const low = tier === "low";
const LIME = new THREE.Color("#d2ff00");
const BG = new THREE.Color("#07090a");

function mulberry32(seed) {
  let a = seed >>> 0;
  return function rand() {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function b2t(x, y, z) {
  return new THREE.Vector3(x, z, -y);
}

function smoothstep(t) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

const camPts = [
  [-1.8, -6.5, 0.9],
  [1.6, -5.2, 0.3],
  [3.3, 6.0, 0.6],
  [0.8, 11.6, 0.15],
  [-0.6, 12.4, -0.1],
  [-2.6, 19.0, 0.4],
  [0, 28.2, 0.1],
  [0.35, 30.6, 0.0],
  [0.6, 41.0, 0.2],
  [0, 43.4, 0.05]
].map((p) => b2t(p[0], p[1], p[2]));

const lookPts = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 12, 0],
  [0, 16, 0],
  [0, 16, 0],
  [0, 30, 0],
  [0, 35.5, 0.2],
  [0, 35.5, 0.3],
  [0, 48, 0],
  [0, 48, 0]
].map((p) => b2t(p[0], p[1], p[2]));

const canvas = document.getElementById("journey-gl");
if (!canvas || root.getAttribute("data-motion") !== "on") {
  throw new Error("journey skipped");
}

gsap.registerPlugin(ScrollTrigger);
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: !low,
  alpha: false,
  powerPreference: low ? "low-power" : "high-performance"
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.setClearColor(BG, 1);
renderer.shadowMap.enabled = false;
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.15 : 1.5));

const scene = new THREE.Scene();
scene.background = BG;
scene.fog = new THREE.Fog(BG, 12, 62);
const camera = new THREE.PerspectiveCamera(35, 1, 0.08, 90);
const camCurve = new THREE.CatmullRomCurve3(camPts, false, "centripetal", 0.5);
const lookCurve = new THREE.CatmullRomCurve3(lookPts, false, "centripetal", 0.5);

function makeEnv() {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 64;
  const g = c.getContext("2d");
  const sky = g.createLinearGradient(0, 0, 0, 64);
  sky.addColorStop(0, "#24300c");
  sky.addColorStop(0.45, "#10140c");
  sky.addColorStop(1, "#050607");
  g.fillStyle = sky;
  g.fillRect(0, 0, 128, 64);
  g.fillStyle = "#d2ff00";
  g.globalAlpha = 0.9;
  g.beginPath();
  g.ellipse(64, 16, 10, 6, 0, 0, Math.PI * 2);
  g.fill();
  g.globalAlpha = 0.35;
  g.fillStyle = "#5cf2ff";
  g.fillRect(18, 40, 22, 4);
  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromEquirectangular(tex).texture;
  pmrem.dispose();
  tex.dispose();
  return env;
}

scene.environment = makeEnv();

scene.add(new THREE.AmbientLight(0x9eb0c4, 0.38));
const key = new THREE.DirectionalLight(0xe7ff9a, 1.55);
key.position.set(5, 7, 8);
scene.add(key);
const fill = new THREE.DirectionalLight(0x5cf2ff, 0.35);
fill.position.set(-6, 2, -4);
scene.add(fill);

function glassMaterial(roughness, color, transmissive) {
  const transmit = transmissive && !low;
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0,
    roughness,
    transmission: transmit ? 1 : 0,
    thickness: transmit ? 0.65 : 0.2,
    ior: 1.45,
    transparent: !transmit,
    opacity: transmit ? 1 : 0.28,
    envMapIntensity: 1.15,
    clearcoat: 0.55,
    clearcoatRoughness: 0.18,
    attenuationColor: new THREE.Color("#d7ffe0"),
    attenuationDistance: 2.4
  });
}

const emissive = [];
function limeMesh(geo, intensity) {
  const mat = new THREE.MeshBasicMaterial({ color: LIME });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.bloom = intensity || 1;
  emissive.push(mesh);
  return mesh;
}

const rand = mulberry32(7);
const net = new THREE.Group();
const nodeCount = 90;
const radius = 2;
const pts = [];
for (let i = 0; i < nodeCount; i += 1) {
  const y = 1 - (2 * (i + 0.5)) / nodeCount;
  const rr = Math.sqrt(Math.max(0, 1 - y * y));
  const th = Math.PI * (3 - Math.sqrt(5)) * i;
  pts.push(new THREE.Vector3(Math.cos(th) * rr, y, Math.sin(th) * rr).multiplyScalar(radius));
}
const nodeGeo = new THREE.IcosahedronGeometry(0.045, 1);
const nodes = new THREE.InstancedMesh(nodeGeo, new THREE.MeshBasicMaterial({ color: LIME }), nodeCount);
const dummy = new THREE.Object3D();
pts.forEach((p, i) => {
  dummy.position.copy(p);
  dummy.updateMatrix();
  nodes.setMatrixAt(i, dummy.matrix);
});
nodes.userData.bloom = 1;
emissive.push(nodes);
net.add(nodes);
const edgePos = [];
pts.forEach((p, i) => {
  const near = pts
    .map((q, j) => ({ j, d: q.distanceTo(p) }))
    .filter((item) => item.j !== i)
    .sort((a, b) => a.d - b.d)
    .slice(0, 3);
  near.forEach((item) => {
    if (item.j > i || rand() < 0.3) {
      edgePos.push(p.x, p.y, p.z, pts[item.j].x, pts[item.j].y, pts[item.j].z);
    }
  });
});
const edgeGeo = new THREE.BufferGeometry();
edgeGeo.setAttribute("position", new THREE.Float32BufferAttribute(edgePos, 3));
const edges = new THREE.LineSegments(edgeGeo, new THREE.LineBasicMaterial({ color: LIME, transparent: true, opacity: 0.45 }));
net.add(edges);
const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.05, 1), glassMaterial(0.05, 0xd5f4ff, true));
net.add(core);
const heart = limeMesh(new THREE.IcosahedronGeometry(0.35, 2), 1.4);
net.add(heart);
scene.add(net);

const holo = makePanel({
  key: "holo",
  poster: "/img/holo-poster.webp",
  src: "/video/holo-card.mp4",
  srcSm: "/video/holo-card.mp4",
  w: 1.28,
  h: 0.72,
  position: new THREE.Vector3(1.15, -0.05, 1.28),
  allowVideo: !low
});
scene.add(holo.group);

const fishGroup = new THREE.Group();
fishGroup.position.copy(b2t(0, 16, 0));
const fishAspect = 1920 / 612;
const fishH = 1.28;
const fishW = fishH * fishAspect;
const fishPanel = makePanel({
  key: "fish",
  poster: "/img/clips/fish-poster.webp",
  src: "/img/clips/fish.mp4",
  srcSm: "/img/clips/fish-sm.mp4",
  w: fishW,
  h: fishH,
  position: new THREE.Vector3(0, 0, 0),
  allowVideo: true,
  parent: fishGroup
});
const slab = new THREE.Mesh(
  new THREE.BoxGeometry(fishW + 0.28, fishH + 0.22, 0.16),
  glassMaterial(0.02, 0xe7fff2, true)
);
slab.position.z = 0.08;
fishGroup.add(slab);
[-1, 1].forEach((side) => {
  const rail = limeMesh(new THREE.BoxGeometry(fishW + 0.36, 0.025, 0.03), 1.2);
  rail.position.set(0, side * (fishH / 2 + 0.16), 0.16);
  fishGroup.add(rail);
});
const shardMat = glassMaterial(0.04, 0xc8ffd4, false);
const shards = [];
for (let i = 0; i < (low ? 7 : 12); i += 1) {
  const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.08 + rand() * 0.16, 0), shardMat);
  const side = rand() < 0.5 ? -1 : 1;
  mesh.position.set(side * (2.2 + rand() * 1.5), (rand() - 0.5) * 2.4, (rand() - 0.5) * 2.2);
  mesh.scale.set(1, 0.35 + rand() * 0.8, 1.4 + rand());
  mesh.userData.spin = 0.3 + rand() * 0.6;
  fishGroup.add(mesh);
  shards.push(mesh);
}
scene.add(fishGroup);
scene.add(new THREE.PointLight(0xd2ff66, low ? 4 : 8, 14).translateX(0).translateY(1.4).translateZ(fishGroup.position.z + 1.2));

const eyePanel = makePanel({
  key: "eye",
  poster: "/img/clips/eye-poster.webp",
  src: "/img/clips/eye.mp4",
  srcSm: "/img/clips/eye-sm.mp4",
  w: 1.7,
  h: 1.7 * (888 / 1920),
  position: b2t(-2.4, 8.5, 0.35),
  allowVideo: !low
});
scene.add(eyePanel.group);
const sakuraPanel = makePanel({
  key: "sakura",
  poster: "/img/clips/sakura-poster.webp",
  src: "/img/clips/sakura.mp4",
  srcSm: "/img/clips/sakura-sm.mp4",
  w: 1.55,
  h: 1.55 * (800 / 1920),
  position: b2t(2.5, 22, 0.2),
  allowVideo: !low
});
scene.add(sakuraPanel.group);

const room = new THREE.Group();
const forestZ = -35.5;
room.position.set(0, 0, forestZ);
const forestAspect = 1600 / 544;
const forestH = 2.15;
const forestW = forestH * forestAspect;
const forestPanel = makePanel({
  key: "forest",
  poster: "/img/clips/forest-poster.webp",
  src: "/img/clips/forest.mp4",
  srcSm: "/img/clips/forest-sm.mp4",
  w: forestW,
  h: forestH,
  position: new THREE.Vector3(0, 0.35, 0),
  allowVideo: true,
  parent: room
});
const frostMat = glassMaterial(0.35, 0xd5e4f2, true);
[-1, 1].forEach((side) => {
  const pane = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.8, 7.2), frostMat);
  pane.position.set(side * 3.35, 0.35, 1.6);
  room.add(pane);
  const strip = limeMesh(new THREE.BoxGeometry(0.025, 0.02, 7.4), 1);
  strip.position.set(side * 3.05, -1.22, 1.6);
  room.add(strip);
});
const floor = new THREE.Mesh(
  new THREE.BoxGeometry(8, 0.08, 9),
  new THREE.MeshStandardMaterial({ color: 0x0c1012, roughness: 0.35, metalness: 0.25 })
);
floor.position.set(0, -1.32, 1.4);
room.add(floor);
const ceil = new THREE.Mesh(
  new THREE.BoxGeometry(8, 0.08, 9),
  new THREE.MeshStandardMaterial({ color: 0x070809, roughness: 0.7, metalness: 0 })
);
ceil.position.set(0, 1.85, 1.4);
room.add(ceil);
scene.add(room);
scene.add(new THREE.PointLight(0xd0ddff, low ? 3 : 6, 16).translateY(1.3).translateZ(forestZ + 2));

const treePanel = makePanel({
  key: "tree",
  poster: "/img/clips/tree-poster.webp",
  src: "/img/clips/tree.mp4",
  srcSm: "/img/clips/tree-sm.mp4",
  w: 1.35,
  h: 1.35 * (950 / 1920),
  position: b2t(-2.7, 31.2, 0.15),
  allowVideo: !low
});
scene.add(treePanel.group);
const smilePanel = makePanel({
  key: "smile",
  poster: "/img/clips/smile-poster.webp",
  src: "/img/clips/smile.mp4",
  srcSm: "/img/clips/smile-sm.mp4",
  w: 1.25,
  h: 1.25 * (1080 / 1920),
  position: b2t(2.15, 44.2, -0.15),
  allowVideo: !low
});
scene.add(smilePanel.group);

const portal = new THREE.Group();
portal.position.copy(b2t(0, 48, 0));
const ring = limeMesh(new THREE.TorusGeometry(1.6, 0.018, 12, 64), 1.5);
portal.add(ring);
const glassRing = new THREE.Mesh(new THREE.TorusGeometry(1.88, 0.09, 16, 48), glassMaterial(0.08, 0xe9fff4, true));
portal.add(glassRing);
scene.add(portal);

const cubes = [];
for (let i = 0; i < (low ? 8 : 16); i += 1) {
  const cube = limeMesh(new THREE.BoxGeometry(0.07, 0.07, 0.07), 0.8);
  cube.position.set((rand() - 0.5) * 8, (rand() - 0.5) * 3, -4 - rand() * 46);
  cube.userData.bob = rand() * Math.PI * 2;
  cube.userData.baseY = cube.position.y;
  scene.add(cube);
  cubes.push(cube);
}

const dustCount = low ? 700 : 1400;
const dustArr = new Float32Array(dustCount * 3);
for (let i = 0; i < dustCount; i += 1) {
  dustArr[i * 3] = (rand() - 0.5) * 12;
  dustArr[i * 3 + 1] = (rand() - 0.5) * 5;
  dustArr[i * 3 + 2] = 8 - rand() * 58;
}
const dustGeo = new THREE.BufferGeometry();
dustGeo.setAttribute("position", new THREE.BufferAttribute(dustArr, 3));
const dustMat = new THREE.PointsMaterial({
  color: LIME,
  size: low ? 0.035 : 0.028,
  transparent: true,
  opacity: 0.75,
  depthWrite: false,
  sizeAttenuation: true
});
const dust = new THREE.Points(dustGeo, dustMat);
scene.add(dust);

const panels = [holo, fishPanel, eyePanel, sakuraPanel, forestPanel, treePanel, smilePanel];
const stageKeys = {
  0: low ? [] : ["holo", "eye"],
  1: low ? ["fish"] : ["fish", "sakura"],
  2: low ? ["forest"] : ["forest", "tree"],
  3: low ? [] : ["smile"]
};

function makePanel(opts) {
  const group = new THREE.Group();
  group.position.copy(opts.position || new THREE.Vector3());
  const frame = limeMesh(new THREE.BoxGeometry(opts.w + 0.08, opts.h + 0.08, 0.03), 0.7);
  group.add(frame);
  const posterTex = new THREE.TextureLoader().load(opts.poster);
  posterTex.colorSpace = THREE.SRGBColorSpace;
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(opts.w, opts.h),
    new THREE.MeshBasicMaterial({ map: posterTex })
  );
  screen.position.z = 0.03;
  group.add(screen);
  const glass = new THREE.Mesh(
    new THREE.BoxGeometry(opts.w + 0.05, opts.h + 0.05, 0.04),
    glassMaterial(0.08, 0xf4fbff, false)
  );
  glass.position.z = 0.05;
  group.add(glass);
  if (opts.parent) opts.parent.add(group);
  return {
    key: opts.key,
    group,
    screen,
    posterTex,
    src: opts.src,
    srcSm: opts.srcSm,
    allowVideo: opts.allowVideo,
    video: null,
    texture: null
  };
}

let running = true;
let decoded = 0;
const decodeCap = low ? 2 : 4;

function narrowSrc(panel) {
  return matchMedia("(max-width: 720px)").matches && panel.srcSm ? panel.srcSm : panel.src;
}

function ensureVideo(panel) {
  if (!panel.allowVideo || panel.video) return;
  if (decoded >= decodeCap) return;
  const video = document.createElement("video");
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "auto";
  video.crossOrigin = "anonymous";
  video.setAttribute("playsinline", "");
  video.src = narrowSrc(panel);
  const texture = new THREE.VideoTexture(video);
  texture.colorSpace = THREE.SRGBColorSpace;
  panel.video = video;
  panel.texture = texture;
  decoded += 1;
}

function playPanel(panel) {
  ensureVideo(panel);
  if (!panel.video) return;
  if (panel.screen.material.map !== panel.texture) {
    panel.screen.material.map = panel.texture;
    panel.screen.material.needsUpdate = true;
  }
  const pending = panel.video.play();
  if (pending && pending.catch) pending.catch(function () {});
}

function pausePanel(panel) {
  if (!panel.video) return;
  panel.video.pause();
}

function releasePanel(panel) {
  if (!panel.video) return;
  panel.video.pause();
  panel.video.removeAttribute("src");
  panel.video.load();
  if (panel.texture) panel.texture.dispose();
  panel.video = null;
  panel.texture = null;
  decoded = Math.max(0, decoded - 1);
  panel.screen.material.map = panel.posterTex;
  panel.screen.material.needsUpdate = true;
}

let activeStage = -1;
function setStage(index) {
  if (index === activeStage) return;
  activeStage = index;
  const want = new Set(stageKeys[index] || []);
  panels.forEach((panel) => {
    if (!want.has(panel.key)) releasePanel(panel);
  });
  panels.forEach((panel) => {
    if (want.has(panel.key)) playPanel(panel);
  });
  const label = document.getElementById("progress-label");
  if (label) {
    const names = root.lang === "en"
      ? ["01 NETWORK", "02 CRYSTAL", "03 FOREST", "04 CONTACT"]
      : ["01 NETTVERK", "02 KRYSTALL", "03 SKOG", "04 KONTAKT"];
    label.textContent = names[index] || names[0];
  }
}

function sectionStarts() {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const ids = ["hero", "prosjekter", "om-meg", "kontakt"];
  const starts = ids.map((id) => {
    const el = document.getElementById(id);
    if (!el) return 0;
    return Math.min(0.98, Math.max(0, (el.getBoundingClientRect().top + window.scrollY) / max));
  });
  return starts.concat([1]);
}

const curveSpan = [
  [0.0, 0.30],
  [0.30, 0.56],
  [0.56, 0.84],
  [0.84, 1.0]
];

function heroEase(t) {
  if (t < 0.58) return (t / 0.58) * 0.16;
  return 0.16 + smoothstep((t - 0.58) / 0.42) * 0.84;
}

function arriveHold(t) {
  if (t < 0.2) return smoothstep(t / 0.2) * 0.76;
  if (t < 0.78) return 0.76 + ((t - 0.2) / 0.58) * 0.06;
  return 0.82 + smoothstep((t - 0.78) / 0.22) * 0.18;
}

let starts = [0, 0.28, 0.58, 0.86, 1];
function measureStarts() {
  starts = sectionStarts();
}

function pageToU(p) {
  let i = 0;
  while (i < 3 && p >= starts[i + 1] - 0.001) i += 1;
  const span = Math.max(0.0001, starts[i + 1] - starts[i]);
  const local = Math.min(1, Math.max(0, (p - starts[i]) / span));
  const eased = i === 0 ? heroEase(local) : arriveHold(local);
  const a = curveSpan[i][0];
  const b = curveSpan[i][1];
  return a + (b - a) * eased;
}

const scrollState = { p: 0 };
const lenis = new Lenis({
  lerp: 0.085,
  smoothWheel: true,
  syncTouch: false,
  autoRaf: false
});
lenis.on("scroll", ScrollTrigger.update);
ScrollTrigger.create({
  trigger: "#innhold",
  start: "top top",
  end: "bottom bottom",
  scrub: 0.65,
  onUpdate: (self) => {
    scrollState.p = self.progress;
  }
});

const beauty = new THREE.WebGLRenderTarget(2, 2, { depthBuffer: true });
const bloomA = new THREE.WebGLRenderTarget(2, 2);
const bloomB = new THREE.WebGLRenderTarget(2, 2);
const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const quadGeo = new THREE.PlaneGeometry(2, 2);
const highPass = new THREE.ShaderMaterial({
  uniforms: { tDiffuse: { value: null }, threshold: { value: low ? 0.72 : 0.62 } },
  vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",
  fragmentShader: "uniform sampler2D tDiffuse; uniform float threshold; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); float b = max(c.r, max(c.g, c.b)); float k = smoothstep(threshold, threshold + 0.18, b); gl_FragColor = vec4(c.rgb * k, 1.0); }"
});
const blurMat = new THREE.ShaderMaterial({
  uniforms: {
    tDiffuse: { value: null },
    direction: { value: new THREE.Vector2(1, 0) },
    texel: { value: new THREE.Vector2(1, 1) }
  },
  vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",
  fragmentShader: "uniform sampler2D tDiffuse; uniform vec2 direction; uniform vec2 texel; varying vec2 vUv; void main(){ vec2 o = direction * texel; vec3 c = texture2D(tDiffuse, vUv).rgb * 0.227; c += texture2D(tDiffuse, vUv + o).rgb * 0.1946; c += texture2D(tDiffuse, vUv - o).rgb * 0.1946; c += texture2D(tDiffuse, vUv + o * 2.0).rgb * 0.1216; c += texture2D(tDiffuse, vUv - o * 2.0).rgb * 0.1216; c += texture2D(tDiffuse, vUv + o * 3.0).rgb * 0.07; c += texture2D(tDiffuse, vUv - o * 3.0).rgb * 0.07; gl_FragColor = vec4(c, 1.0); }"
});
const composite = new THREE.ShaderMaterial({
  uniforms: {
    tBeauty: { value: null },
    tBloom: { value: null },
    strength: { value: low ? 0.28 : 0.62 }
  },
  vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",
  fragmentShader: "uniform sampler2D tBeauty; uniform sampler2D tBloom; uniform float strength; varying vec2 vUv; void main(){ vec3 base = texture2D(tBeauty, vUv).rgb; vec3 glow = texture2D(tBloom, vUv).rgb; gl_FragColor = vec4(base + glow * strength, 1.0); }"
});
const quad = new THREE.Mesh(quadGeo, highPass);
const quadScene = new THREE.Scene();
quadScene.add(quad);

function resize() {
  const w = window.innerWidth;
  const h = Math.max(1, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.15 : 1.5));
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  const bw = Math.max(2, Math.floor(w * renderer.getPixelRatio()));
  const bh = Math.max(2, Math.floor(h * renderer.getPixelRatio()));
  beauty.setSize(bw, bh);
  const hw = Math.max(2, Math.floor(bw / 2));
  const hh = Math.max(2, Math.floor(bh / 2));
  bloomA.setSize(hw, hh);
  bloomB.setSize(hw, hh);
  blurMat.uniforms.texel.value.set(1 / hw, 1 / hh);
}
resize();
window.addEventListener("resize", () => {
  resize();
  ScrollTrigger.refresh();
});

function paint(material, target) {
  quad.material = material;
  renderer.setRenderTarget(target);
  renderer.render(quadScene, quadCam);
}

let stopped = false;
const clock = new THREE.Clock();
measureStarts();
ScrollTrigger.addEventListener("refresh", measureStarts);

function frame() {
  if (stopped || root.getAttribute("data-motion") !== "on") return;
  const t = clock.getElapsedTime();
  const page = scrollState.p;
  const u = pageToU(page);
  root.style.setProperty("--page", page.toFixed(4));
  camera.position.copy(camCurve.getPointAt(Math.min(0.999, Math.max(0.001, u))));
  camera.lookAt(lookCurve.getPointAt(Math.min(0.999, Math.max(0.001, u))));
  net.rotation.y = t * 0.22;
  net.rotation.x = 0.18;
  core.rotation.x = t * 0.18;
  core.rotation.y = t * 0.27;
  heart.scale.setScalar(1 + Math.sin(t * 2.2) * 0.04);
  glassRing.rotation.z = t * 0.45;
  shards.forEach((mesh, i) => {
    mesh.rotation.x = t * mesh.userData.spin + i;
    mesh.rotation.y = t * mesh.userData.spin * 0.7;
  });
  cubes.forEach((cube) => {
    cube.position.y = cube.userData.baseY + Math.sin(t * 0.8 + cube.userData.bob) * 0.12;
    cube.rotation.y = t * 0.4;
  });
  dust.position.y = Math.sin(t * 0.15) * 0.15;
  dust.position.z = Math.sin(t * 0.08) * 0.2;
  const lift = smoothstep((u - 0.74) / 0.12);
  forestPanel.group.position.y = 0.35 + lift * 3.15;
  const stage = u < 0.3 ? 0 : u < 0.56 ? 1 : u < 0.84 ? 2 : 3;
  setStage(stage);
  panels.forEach((panel) => {
    if (panel.texture) panel.texture.needsUpdate = true;
  });
  renderer.setRenderTarget(beauty);
  renderer.render(scene, camera);
  highPass.uniforms.tDiffuse.value = beauty.texture;
  paint(highPass, bloomA);
  blurMat.uniforms.tDiffuse.value = bloomA.texture;
  blurMat.uniforms.direction.value.set(1, 0);
  paint(blurMat, bloomB);
  if (!low) {
    blurMat.uniforms.tDiffuse.value = bloomB.texture;
    blurMat.uniforms.direction.value.set(0, 1);
    paint(blurMat, bloomA);
    composite.uniforms.tBloom.value = bloomA.texture;
  } else {
    composite.uniforms.tBloom.value = bloomB.texture;
  }
  composite.uniforms.tBeauty.value = beauty.texture;
  paint(composite, null);
}

function applyLime() {
  const raw = getComputedStyle(root).getPropertyValue("--signal").trim();
  if (!raw) return;
  LIME.set(raw);
  nodes.material.color.copy(LIME);
  edges.material.color.copy(LIME);
  heart.material.color.copy(LIME);
  dustMat.color.copy(LIME);
  emissive.forEach((mesh) => {
    if (mesh.material && mesh.material.color) mesh.material.color.copy(LIME);
  });
}
applyLime();
new MutationObserver(applyLime).observe(root, { attributes: true, attributeFilter: ["data-palette", "data-theme"] });

function stop() {
  stopped = true;
  running = false;
  root.removeAttribute("data-journey");
  lenis.stop();
  panels.forEach((panel) => pausePanel(panel));
}

function start() {
  if (root.getAttribute("data-motion") !== "on") return;
  stopped = false;
  running = true;
  root.setAttribute("data-journey", "3d");
  lenis.start();
  ScrollTrigger.refresh();
}

function tick(time) {
  if (stopped) return;
  lenis.raf(time * 1000);
  frame();
}

root.setAttribute("data-journey", "3d");
gsap.ticker.add(tick);
gsap.ticker.lagSmoothing(0);
requestAnimationFrame(() => ScrollTrigger.refresh());
window.__journey = { stop, start };

document.addEventListener("visibilitychange", () => {
  panels.forEach((panel) => {
    if (!panel.video) return;
    if (document.hidden) panel.video.pause();
  });
  if (!document.hidden) {
    const stage = activeStage < 0 ? 0 : activeStage;
    activeStage = -1;
    setStage(stage);
  }
});

window.addEventListener("load", () => ScrollTrigger.refresh());
void running;
