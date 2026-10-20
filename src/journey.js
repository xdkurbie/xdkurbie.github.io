import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
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
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
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

const glassMats = [];
function glassMaterial(roughness, color, transmissive) {
  const transmit = transmissive && !low;
  const mat = new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0,
    roughness,
    transmission: transmit ? 1 : 0,
    thickness: transmit ? 1.15 : 0.35,
    ior: 1.5,
    transparent: !transmit,
    opacity: transmit ? 1 : 0.2,
    envMapIntensity: transmit ? 1.8 : 2.5,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    iridescence: transmit ? 0.22 : 0.55,
    iridescenceIOR: 1.35,
    attenuationColor: new THREE.Color("#d7ffe0"),
    attenuationDistance: 2.4
  });
  glassMats.push(mat);
  return mat;
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

const fishGroup = new THREE.Group();
fishGroup.position.copy(b2t(0.95, 16, 0));
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
fishGroup.visible = false;
scene.add(fishGroup);
const fishLight = new THREE.PointLight(0xd2ff66, low ? 4 : 8, 14);
fishLight.position.set(0, 1.4, fishGroup.position.z + 1.2);
scene.add(fishLight);

const sakuraPanel = makePanel({
  key: "sakura",
  poster: "/img/clips/sakura-poster.webp",
  src: "/img/clips/sakura.mp4",
  srcSm: "/img/clips/sakura-sm.mp4",
  w: 1.15,
  h: 1.15 * (800 / 1920),
  position: b2t(3.9, 16.2, 0.55),
  allowVideo: false
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
room.visible = false;
scene.add(room);
const forestLight = new THREE.PointLight(0xd0ddff, low ? 3 : 6, 16);
forestLight.position.set(0, 1.3, forestZ + 2);
scene.add(forestLight);

const treePanel = makePanel({
  key: "tree",
  poster: "/img/clips/tree-poster.webp",
  src: "/img/clips/tree.mp4",
  srcSm: "/img/clips/tree-sm.mp4",
  w: 1.05,
  h: 1.05 * (950 / 1920),
  position: b2t(3.7, 33.2, 0.45),
  allowVideo: false
});
scene.add(treePanel.group);

const portal = new THREE.Group();
portal.position.copy(b2t(0, 48, 0));
const ring = limeMesh(new THREE.TorusGeometry(1.6, 0.018, 12, 64), 1.5);
portal.add(ring);
const glassRing = new THREE.Mesh(new THREE.TorusGeometry(1.88, 0.09, 16, 48), glassMaterial(0.08, 0xe9fff4, true));
portal.add(glassRing);
portal.visible = false;
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

const rockRand = mulberry32(21);
const rockCount = low ? 11 : 32;
const rockGeo = new THREE.IcosahedronGeometry(1, 0);
{
  const pos = rockGeo.attributes.position;
  const rv = new THREE.Vector3();
  for (let i = 0; i < pos.count; i += 1) {
    rv.fromBufferAttribute(pos, i);
    const len = rv.length() || 1;
    const ny = Math.abs(rv.y / len);
    rv.multiplyScalar((0.58 + rockRand() * 0.9 + ny * 0.62) / len);
    pos.setXYZ(i, rv.x, rv.y, rv.z);
  }
  rockGeo.computeVertexNormals();
}
const rockFade = new Float32Array(rockCount);
rockFade.fill(1);
rockGeo.setAttribute("aFade", new THREE.InstancedBufferAttribute(rockFade, 1));
const rockMat = new THREE.MeshPhysicalMaterial({
  color: 0x101618,
  metalness: 0.06,
  roughness: 0.04,
  transmission: 0,
  thickness: 0.35,
  transparent: true,
  opacity: 0.4,
  envMapIntensity: 1.15,
  clearcoat: 1,
  clearcoatRoughness: 0.015,
  iridescence: 0.22,
  iridescenceIOR: 1.45,
  iridescenceThicknessRange: [180, 360],
  depthWrite: true
});
rockMat.customProgramCacheKey = () => "rock-fade-thin";
rockMat.onBeforeCompile = (shader) => {
  shader.uniforms.uAccent = { value: signalColor };
  shader.uniforms.uPacket = { value: packetColor };
  shader.vertexShader = shader.vertexShader
    .replace("#include <common>", "#include <common>\nattribute float aFade;\nvarying float vFade;")
    .replace("#include <begin_vertex>", "#include <begin_vertex>\nvFade = aFade;");
  shader.fragmentShader = shader.fragmentShader
    .replace("#include <common>", "#include <common>\nuniform vec3 uAccent;\nuniform vec3 uPacket;\nvarying float vFade;")
    .replace("#include <output_fragment>", "#include <output_fragment>\nfloat ndv = clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);\nfloat fres = pow(1.0 - ndv, 4.8);\ngl_FragColor.rgb += uAccent * fres * 0.72;\ngl_FragColor.r += uPacket.r * pow(1.0 - ndv, 3.4) * 0.1;\ngl_FragColor.b += uPacket.b * pow(1.0 - ndv, 2.6) * 0.16;\ngl_FragColor.a = min(0.78, gl_FragColor.a + fres * 0.28) * vFade;");
};
const rocks = new THREE.InstancedMesh(rockGeo, rockMat, rockCount);
rocks.frustumCulled = false;
const rockData = [];
const upAxis = new THREE.Vector3(0, 1, 0);
const rockRight = new THREE.Vector3();
const rockForward = new THREE.Vector3();
const rockLook = new THREE.Vector3();
const heroCam = camCurve.getPointAt(0);
const heroRay = new THREE.Vector3();
function clearsHeroSphere(pos) {
  heroRay.copy(pos).sub(heroCam);
  const dist = heroRay.length();
  if (dist < 1e-3) return false;
  heroRay.multiplyScalar(1 / dist);
  const t = -heroCam.dot(heroRay);
  if (t < 0.35) return true;
  const alongRay = Math.min(t, dist);
  const cx = heroCam.x + heroRay.x * alongRay;
  const cy = heroCam.y + heroRay.y * alongRay;
  const cz = heroCam.z + heroRay.z * alongRay;
  return cx * cx + cy * cy + cz * cz > 8.4;
}
for (let i = 0; i < rockCount; i += 1) {
  const u = Math.min(0.985, (i + rockRand() * 0.65) / rockCount);
  const p = camCurve.getPointAt(u);
  rockLook.copy(lookCurve.getPointAt(u));
  rockForward.copy(rockLook).sub(p);
  if (rockForward.lengthSq() < 1e-4) rockForward.set(0, 0, -1);
  rockForward.normalize();
  rockRight.crossVectors(rockForward, upAxis);
  if (rockRight.lengthSq() < 1e-4) rockRight.set(1, 0, 0);
  rockRight.normalize();
  const near = rockRand() < 0.22;
  const sideSign = rockRand() < 0.82 ? 1 : -1;
  const side = (near ? 0.85 + rockRand() * 0.7 : 1.15 + rockRand() * 2.6) * sideSign;
  const lift = (near ? -0.15 : 0.15) + rockRand() * (near ? 1.1 : 2.3);
  const along = (rockRand() - 0.5) * (near ? 1.6 : 4.2);
  const base = p.clone()
    .addScaledVector(rockRight, side)
    .addScaledVector(upAxis, lift)
    .addScaledVector(rockForward, along);
  if (u < 0.16) {
    let guard = 0;
    while (guard < 6 && !clearsHeroSphere(base)) {
      base.addScaledVector(rockRight, sideSign * 0.7);
      guard += 1;
    }
  }
  const sx = (0.16 + rockRand() * (near ? 0.34 : 0.72)) * (near ? 0.7 : 1);
  const sy = sx * (0.45 + rockRand() * 1.35);
  const sz = sx * (0.7 + rockRand() * 1.5);
  rockData.push({
    base,
    sx,
    sy,
    sz,
    spin: 0.15 + rockRand() * 0.45,
    phase: rockRand() * Math.PI * 2,
    drift: 0.08 + rockRand() * 0.22,
    axis: rockRand() * Math.PI
  });
}
scene.add(rocks);

const heroRocks = [];
if (!low) {
  const heroLook = lookCurve.getPointAt(0);
  rockForward.copy(heroLook).sub(heroCam).normalize();
  rockRight.crossVectors(rockForward, upAxis);
  if (rockRight.lengthSq() < 1e-4) rockRight.set(1, 0, 0);
  rockRight.normalize();
  [
    { side: 3.35, lift: 0.95, along: 5.35, s: 0.34 },
    { side: 2.9, lift: -1.12, along: 4.25, s: 0.45 }
  ].forEach((spot, i) => {
    const mat = glassMaterial(0.03, 0x8aa0a6, true);
    mat.opacity = 1;
    mat.thickness = 0.4;
    mat.attenuationDistance = 8;
    mat.iridescence = 0.18;
    mat.iridescenceIOR = 1.5;
    mat.iridescenceThicknessRange = [160, 340];
    mat.envMapIntensity = 1.15;
    mat.clearcoatRoughness = 0.02;
    mat.customProgramCacheKey = () => "hero-rock-thin";
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uAccent = { value: signalColor };
      shader.uniforms.uPacket = { value: packetColor };
      shader.fragmentShader = shader.fragmentShader
        .replace("#include <common>", "#include <common>\nuniform vec3 uAccent;\nuniform vec3 uPacket;")
        .replace("#include <output_fragment>", "#include <output_fragment>\nfloat ndv = clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);\nfloat fres = pow(1.0 - ndv, 4.8);\ngl_FragColor.rgb += uAccent * fres * 0.62;\ngl_FragColor.r += uPacket.r * pow(1.0 - ndv, 3.2) * 0.08;\ngl_FragColor.b += uPacket.b * pow(1.0 - ndv, 2.5) * 0.14;");
    };
    const mesh = new THREE.Mesh(rockGeo, mat);
    mesh.position.copy(heroCam)
      .addScaledVector(rockRight, spot.side)
      .addScaledVector(upAxis, spot.lift)
      .addScaledVector(rockForward, spot.along);
    let guard = 0;
    while (guard < 4 && !clearsHeroSphere(mesh.position)) {
      mesh.position.addScaledVector(rockRight, 0.55);
      guard += 1;
    }
    const s = spot.s;
    mesh.userData.base = mesh.position.clone();
    mesh.userData.sx = s;
    mesh.userData.sy = s * (0.72 + i * 0.18);
    mesh.userData.sz = s * 1.12;
    mesh.userData.spin = 0.22 + i * 0.07;
    mesh.userData.phase = i * 1.7;
    mesh.scale.set(mesh.userData.sx, mesh.userData.sy, mesh.userData.sz);
    scene.add(mesh);
    heroRocks.push(mesh);
  });
}
const rockLight = new THREE.PointLight(0xd2ff00, low ? 2.6 : 5.2, 18, 1.15);
scene.add(rockLight);
let rockU = 0;
let rockVel = 0;
const rockDummy = new THREE.Object3D();
const rockNdc = new THREE.Vector3();

function rockTextFade(world, travel) {
  rockNdc.copy(world).project(camera);
  if (rockNdc.z > 1) return 1;
  let zone = 0;
  if (rockNdc.x < 0.08 && rockNdc.y < 0.22) {
    zone = Math.max(zone, smoothstep((0.08 - rockNdc.x) / 0.6) * smoothstep((0.22 - rockNdc.y) / 0.75));
  }
  if (travel > 0.82 && Math.abs(rockNdc.x) < 0.52 && rockNdc.y > -0.4 && rockNdc.y < 0.62) {
    const dx = 1 - smoothstep((Math.abs(rockNdc.x) - 0.16) / 0.36);
    const dy = 1 - smoothstep((Math.abs(rockNdc.y - 0.08) - 0.18) / 0.32);
    zone = Math.max(zone, dx * dy);
  }
  return 1 - zone;
}

const panels = [fishPanel, forestPanel];
const sidePanels = [sakuraPanel, treePanel];
const stageKeys = {
  0: [],
  1: ["fish"],
  2: ["forest"],
  3: []
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
  const ids = ["hero", "krystall", "prosjekter", "om-meg", "kontakt"];
  const starts = ids.map((id) => {
    const el = document.getElementById(id);
    if (!el) return 0;
    return Math.min(0.995, Math.max(0, (el.getBoundingClientRect().top + window.scrollY) / max));
  });
  return starts.concat([1]);
}

const curveSpan = [
  [0.02, 0.2],
  [0.26, 0.5],
  [0.5, 0.64],
  [0.64, 0.86],
  [0.86, 1]
];

function heroEase(t) {
  if (t < 0.7) return (t / 0.7) * 0.18;
  return 0.18 + smoothstep((t - 0.7) / 0.3) * 0.82;
}

function showpiece(t) {
  if (t < 0.16) return smoothstep(t / 0.16) * 0.58;
  if (t < 0.74) return 0.58 + ((t - 0.16) / 0.58) * 0.12;
  return 0.7 + smoothstep((t - 0.74) / 0.26) * 0.3;
}

function travel(t) {
  return smoothstep(t);
}

function portalEase(t) {
  if (t < 0.2) return smoothstep(t / 0.2) * 0.78;
  return 0.78 + ((t - 0.2) / 0.8) * 0.22;
}

let starts = [0, 0.18, 0.34, 0.62, 0.84, 1];
function measureStarts() {
  starts = sectionStarts();
}

function pageMap(p) {
  let i = 0;
  while (i < starts.length - 2 && p >= starts[i + 1] - 0.001) i += 1;
  const span = Math.max(0.0001, starts[i + 1] - starts[i]);
  const local = Math.min(1, Math.max(0, (p - starts[i]) / span));
  const eased = i === 0 ? heroEase(local) : i === 2 ? travel(local) : i === 4 ? portalEase(local) : showpiece(local);
  const a = curveSpan[i][0];
  const b = curveSpan[i][1];
  return { u: a + (b - a) * eased, i, local };
}

const scrollState = { p: 0 };
const lenis = new Lenis({
  lerp: 0.06,
  smoothWheel: true,
  syncTouch: false,
  autoRaf: false
});
lenis.on("scroll", ScrollTrigger.update);
ScrollTrigger.create({
  trigger: "#innhold",
  start: "top top",
  end: "bottom bottom",
  scrub: 1.2,
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
    strength: { value: low ? 0.28 : 0.62 },
    tint: { value: new THREE.Color("#d2ff00") }
  },
  vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",
  fragmentShader: "uniform sampler2D tBeauty; uniform sampler2D tBloom; uniform float strength; uniform vec3 tint; varying vec2 vUv; void main(){ vec3 base = texture2D(tBeauty, vUv).rgb; vec3 glow = texture2D(tBloom, vUv).rgb; float lum = max(glow.r, max(glow.g, glow.b)); vec3 tinted = mix(glow, tint * lum, 0.72); gl_FragColor = vec4(base + tinted * strength, 1.0); }"
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

const veil = document.getElementById("journey-veil");
const pointer = { x: 0, y: 0 };
const sway = { x: 0, y: 0 };
const mobileQuery = matchMedia("(max-width: 760px)");
const ndc = new THREE.Vector3();
const copyNodes = {
  0: document.querySelector("#hero .hero-sticky"),
  1: document.querySelector("#krystall .beat-copy"),
  3: document.querySelector("#skog .beat-copy"),
  4: document.querySelector("#kontakt .wrap")
};
window.addEventListener("pointermove", (event) => {
  pointer.x = (event.clientX / Math.max(1, window.innerWidth)) * 2 - 1;
  pointer.y = (event.clientY / Math.max(1, window.innerHeight)) * 2 - 1;
}, { passive: true });

function copyFade(index, local) {
  if (index === 2) return 1;
  if (index === 0) {
    if (local < 0.58) return 1;
    return 1 - smoothstep((local - 0.58) / 0.3);
  }
  if (local < 0.12) return smoothstep(local / 0.12);
  if (local < 0.66) return 1;
  return 1 - smoothstep((local - 0.66) / 0.24);
}

function frame() {
  if (stopped || root.getAttribute("data-motion") !== "on") return;
  const t = clock.getElapsedTime();
  const page = scrollState.p;
  const mapped = pageMap(page);
  const u = Math.min(0.999, Math.max(0.001, mapped.u));
  root.style.setProperty("--page", page.toFixed(4));
  const pos = camCurve.getPointAt(u);
  const look = lookCurve.getPointAt(u);
  const showFish = u > 0.28 && u < 0.52;
  const showForest = u > 0.66 && u < 0.84;
  if (showFish || showForest) {
    const dir = look.clone().sub(pos);
    if (dir.length() > 0.5) {
      dir.normalize();
      pos.addScaledVector(dir, showFish ? 0.85 : 0.5);
    }
  }
  camera.position.copy(pos);
  camera.lookAt(look);
  if (!mobileQuery.matches && !low) {
    sway.x += (pointer.x - sway.x) * 0.045;
    sway.y += (pointer.y - sway.y) * 0.045;
    camera.position.x += sway.x * 0.14;
    camera.position.y += -sway.y * 0.07;
  }
  let fade = 0;
  if (mapped.i !== 2) {
    const enter = mapped.i === 0 ? 0 : 1 - smoothstep(mapped.local / 0.14);
    const exit = smoothstep((mapped.local - 0.82) / 0.18);
    fade = Math.max(enter, exit);
  }
  if (veil) veil.style.opacity = String(fade);
  Object.keys(copyNodes).forEach((key) => {
    const node = copyNodes[key];
    if (!node) return;
    const on = Number(key) === mapped.i;
    node.style.opacity = on ? String(copyFade(mapped.i, mapped.local)) : "0";
    node.classList.toggle("is-on", on && mapped.local > 0.04 && mapped.local < 0.8);
  });
  const stage = u < 0.24 ? 0 : u < 0.56 ? 1 : u < 0.86 ? 2 : 3;
  fishGroup.visible = u > 0.22 && u < 0.62;
  room.visible = u > 0.48;
  portal.visible = u > 0.7;
  if (performance.now() < paletteFollowUntil) applySceneColors();
  sidePanels.forEach((panel) => {
    const want = (panel.key === "sakura" && stage === 1) || (panel.key === "tree" && stage === 2);
    if (!want || mobileQuery.matches || fade > 0.35) {
      panel.group.visible = false;
      return;
    }
    panel.group.getWorldPosition(ndc).project(camera);
    panel.group.visible = ndc.z < 1 && ndc.x > 0.46;
  });
  net.rotation.y = t * 0.12;
  net.rotation.x = 0.18;
  core.rotation.x = t * 0.18;
  core.rotation.y = t * 0.27;
  heart.scale.setScalar(1 + Math.sin(t * 2.2) * 0.04);
  glassRing.rotation.z = t * 0.45;
  const du = Math.abs(u - rockU);
  rockU = u;
  rockVel += (Math.min(1, du * 28) - rockVel) * 0.12;
  const boost = 1 + rockVel * 5;
  const stretch = 1 + rockVel * 0.22;
  key.position.set(Math.cos(t * 0.31) * 7.5, 5.4 + Math.sin(t * 0.22) * 2.1, Math.sin(t * 0.31) * 7.5);
  rockLight.position.copy(camera.position);
  rockLight.position.x += Math.cos(t * 0.72) * 1.7;
  rockLight.position.y += 0.85 + Math.sin(t * 0.58) * 0.55;
  rockLight.position.z += Math.sin(t * 0.72) * 1.25;
  for (let i = 0; i < rockCount; i += 1) {
    const rock = rockData[i];
    const wobble = Math.sin(t * rock.drift + rock.phase);
    rockDummy.position.copy(rock.base);
    rockDummy.position.y += wobble * 0.28;
    rockDummy.position.x += Math.cos(t * rock.drift * 0.7 + rock.phase) * 0.16;
    const fade = rockTextFade(rockDummy.position, u);
    rockFade[i] = fade;
    const live = Math.max(0.001, fade);
    rockDummy.scale.set(rock.sx * live, rock.sy * stretch * live, rock.sz * live);
    rockDummy.rotation.set(
      rock.axis + t * rock.spin * boost,
      rock.phase + t * rock.spin * 0.73 * boost,
      rock.phase * 0.4 + t * rock.spin * 0.35 * boost
    );
    rockDummy.updateMatrix();
    rocks.setMatrixAt(i, rockDummy.matrix);
  }
  rocks.instanceMatrix.needsUpdate = true;
  rockGeo.attributes.aFade.needsUpdate = true;
  heroRocks.forEach((mesh) => {
    mesh.visible = u < 0.2;
    if (!mesh.visible) return;
    const fade = rockTextFade(mesh.userData.base, u);
    const live = Math.max(0.001, fade);
    mesh.position.copy(mesh.userData.base);
    mesh.position.y += Math.sin(t * 0.32 + mesh.userData.phase) * 0.14;
    mesh.rotation.x = mesh.userData.phase + t * mesh.userData.spin * boost;
    mesh.rotation.y = t * mesh.userData.spin * 0.66 * boost;
    mesh.scale.set(mesh.userData.sx * live, mesh.userData.sy * stretch * live, mesh.userData.sz * live);
  });
  cubes.forEach((cube) => {
    cube.position.y = cube.userData.baseY + Math.sin(t * 0.8 + cube.userData.bob) * 0.12;
    cube.rotation.y = t * 0.4;
  });
  dust.position.y = Math.sin(t * 0.15) * 0.15;
  dust.position.z = Math.sin(t * 0.08) * 0.2 - fade * 2.4;
  dustMat.size = (low ? 0.035 : 0.028) * (1 + fade * 2.4);
  const lift = smoothstep((u - 0.845) / 0.06);
  forestPanel.group.position.y = 0.35 + lift * 3.15;
  setStage(stage);
  const label = document.getElementById("progress-label");
  if (label) {
    const names = root.lang === "en"
      ? ["01 NETWORK", "02 CRYSTAL", "02 PROJECTS", "03 FOREST", "04 CONTACT"]
      : ["01 NETTVERK", "02 KRYSTALL", "02 PROSJEKTER", "03 SKOG", "04 KONTAKT"];
    label.textContent = names[mapped.i] || names[0];
  }
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

const colorProbe = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
const glassTint = new THREE.Color();
const glassWhite = new THREE.Color("#ffffff");
const signalColor = new THREE.Color("#d2ff00");
const packetColor = new THREE.Color("#5cf2ff");
let paletteFollowUntil = 0;

function cssColor(raw, fallback, out) {
  const value = (raw || "").trim();
  colorProbe.fillStyle = "#000000";
  if (value) colorProbe.fillStyle = value;
  const painted = colorProbe.fillStyle;
  if (typeof painted === "string" && painted.charAt(0) === "#") out.set(painted);
  else out.set(fallback);
  return out;
}

function applySceneColors() {
  const cs = getComputedStyle(root);
  cssColor(cs.getPropertyValue("--signal"), "#d2ff00", signalColor);
  cssColor(cs.getPropertyValue("--packet"), "#5cf2ff", packetColor);
  cssColor(cs.getPropertyValue("--bg"), "#07090a", BG);
  LIME.copy(signalColor);
  nodes.material.color.copy(signalColor);
  edges.material.color.copy(packetColor);
  heart.material.color.copy(signalColor);
  dustMat.color.copy(signalColor);
  emissive.forEach((mesh) => {
    if (mesh.material && mesh.material.color) mesh.material.color.copy(signalColor);
  });
  glassTint.copy(packetColor).lerp(glassWhite, 0.58);
  glassMats.forEach((mat) => {
    mat.color.copy(glassTint);
    mat.attenuationColor.copy(signalColor);
  });
  key.color.copy(signalColor);
  fill.color.copy(packetColor);
  fishLight.color.copy(signalColor);
  forestLight.color.copy(packetColor);
  rockLight.color.copy(signalColor);
  rockMat.color.copy(packetColor).multiplyScalar(0.2);
  rockMat.emissive.copy(signalColor);
  rockMat.emissiveIntensity = 0.012;
  heroRocks.forEach((mesh) => {
    const mat = mesh.material;
    mat.color.copy(packetColor).lerp(glassWhite, 0.22).multiplyScalar(0.62);
    mat.attenuationColor.copy(packetColor).lerp(BG, 0.72);
    mat.emissive.copy(signalColor);
    mat.emissiveIntensity = 0.012;
  });
  if (scene.fog) scene.fog.color.copy(BG);
  composite.uniforms.tint.value.copy(signalColor);
  scene.background = BG;
  renderer.setClearColor(BG, 1);
}

function notePalette() {
  paletteFollowUntil = performance.now() + 700;
  applySceneColors();
}

applySceneColors();
new MutationObserver(notePalette).observe(root, { attributes: true, attributeFilter: ["data-palette", "data-theme"] });

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
