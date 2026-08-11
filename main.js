import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Core & Events
import gameEvents from './src/core/EventBus.js';

// Levels & Obstacles
import { LevelManager } from './src/levels/LevelManager.js';
import ObstacleManager from './src/levels/Obstacles.js';

// VFX & Power-ups
import { ParticleSystem } from './src/vfx/ParticleSystem.js';
import { screenShake, flashEffect, comboGlow, victoryEffect } from './src/vfx/ScreenEffects.js';
import { PowerUpTypes, detectPowerUp, createPowerUpMesh, activatePowerUp } from './src/game/PowerUps.js';

// Audio
import audioManager from './src/audio/AudioManager.js';

// UI
import uiManager from './src/ui/UIManager.js';
import LevelMap from './src/ui/LevelMap.js';
import LevelHUD from './src/ui/LevelHUD.js';
import LevelComplete from './src/ui/LevelComplete.js';
import LevelFailed from './src/ui/LevelFailed.js';
import { AudioSettings } from './src/ui/AudioSettings.js';
import AuthModal from './src/ui/AuthModal.js';
import authManager from './src/auth/AuthManager.js';

// ============================================================================
// CONFIG & CONSTANTS
// ============================================================================
const GRID_SIZE = 8;
const CELL = 1.0;
const SCORE_PER_CANDY = 10;

const CANDY_TYPES = [
  { fruit: 'apple',     body: 0xe53935, accent: 0x2e7d32 },
  { fruit: 'orange',    body: 0xfb8c00, accent: 0x2e7d32 },
  { fruit: 'lemon',     body: 0xfdd835, accent: 0x558b2f },
  { fruit: 'pear',      body: 0x9ccc65, accent: 0x33691e },
  { fruit: 'blueberry', body: 0x5c6bc0, accent: 0x1a237e },
  { fruit: 'grapes',    body: 0x8e24aa, accent: 0x33691e },
];

const FRUIT_COLORS = [0xe53935, 0xfb8c00, 0xfdd835, 0x9ccc65, 0x5c6bc0, 0x8e24aa];

// ============================================================================
// THREE.JS SCENE SETUP
// ============================================================================
const container = document.getElementById('app');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a0b2e);
scene.fog = new THREE.Fog(0x1a0b2e, 14, 26);

const camera = new THREE.PerspectiveCamera(
  50, window.innerWidth / window.innerHeight, 0.1, 100
);
camera.position.set(0, 11, 9);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
container.appendChild(renderer.domElement);

// Lights
const ambient = new THREE.AmbientLight(0xb39ddb, 0.65);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
keyLight.position.set(6, 14, 8);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -8;
keyLight.shadow.camera.right = 8;
keyLight.shadow.camera.top = 8;
keyLight.shadow.camera.bottom = -8;
keyLight.shadow.camera.near = 1;
keyLight.shadow.camera.far = 40;
keyLight.shadow.bias = -0.0004;
scene.add(keyLight);

const rimLight = new THREE.PointLight(0xff6ec7, 0.8, 30);
rimLight.position.set(-6, 5, -5);
scene.add(rimLight);

const fillLight = new THREE.PointLight(0x6effc7, 0.5, 30);
fillLight.position.set(6, 4, -4);
scene.add(fillLight);

// Board Platform Base
const boardSize = GRID_SIZE * CELL;
const baseGeo = new THREE.BoxGeometry(boardSize + 1.2, 0.6, boardSize + 1.2);
const baseMat = new THREE.MeshStandardMaterial({
  color: 0x2a1554, roughness: 0.4, metalness: 0.3,
});
const base = new THREE.Mesh(baseGeo, baseMat);
base.position.y = -0.85;
base.receiveShadow = true;
scene.add(base);

// Checkerboard Grid
const tileGroup = new THREE.Group();
const tileGeo = new THREE.BoxGeometry(CELL * 0.94, 0.12, CELL * 0.94);
for (let r = 0; r < GRID_SIZE; r++) {
  for (let c = 0; c < GRID_SIZE; c++) {
    const dark = (r + c) % 2 === 0;
    const tileMat = new THREE.MeshStandardMaterial({
      color: dark ? 0x3a1f6b : 0x472482,
      roughness: 0.6, metalness: 0.1,
    });
    const tile = new THREE.Mesh(tileGeo, tileMat);
    tile.position.copy(gridToWorld(r, c));
    tile.position.y = -0.45;
    tile.receiveShadow = true;
    tileGroup.add(tile);
  }
}
scene.add(tileGroup);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 8;
controls.maxDistance = 24;
controls.minPolarAngle = 0.2;
controls.maxPolarAngle = Math.PI / 2.15;
controls.target.set(0, 0, 0);
controls.enablePan = false;

const CAM_DIR = new THREE.Vector3(0, 11, 9).normalize();
const CAM_BASE_DIST = Math.sqrt(11 * 11 + 9 * 9);

function fitCameraToScreen() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const narrow = w < 640;
  let factor = 1.0;
  if (narrow) {
    factor = w < h ? 1.55 : 1.25;
  } else if (w < 900) {
    factor = 1.15;
  }
  const dist = CAM_BASE_DIST * factor;
  camera.position.copy(CAM_DIR).multiplyScalar(dist);
  camera.lookAt(0, 0, 0);
  camera.fov = narrow ? 58 : 50;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  controls.update();
}

// ============================================================================
// SYSTEM INSTANCES & MANAGERS
// ============================================================================
const levelManager = new LevelManager();
const obstacleManager = new ObstacleManager(scene);
const particleSystem = new ParticleSystem(scene);
const audioSettings = new AudioSettings();

// UI Screens
const levelMap = new LevelMap(levelManager);
const levelHUD = new LevelHUD();
const levelComplete = new LevelComplete();
const levelFailed = new LevelFailed();
const authModal = new AuthModal();

// ============================================================================
// HELPERS & CANDY BUILDER
// ============================================================================
function gridToWorld(row, col) {
  const offset = (GRID_SIZE - 1) / 2;
  return new THREE.Vector3(
    (col - offset) * CELL,
    0,
    (row - offset) * CELL
  );
}

function bodyMat(color, emissive = 0x000000) {
  return new THREE.MeshStandardMaterial({
    color, emissive, emissiveIntensity: 0.12,
    roughness: 0.28, metalness: 0.08,
  });
}
const leafMat = (color) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.05 });
const stemMat = new THREE.MeshStandardMaterial({ color: 0x6d4c41, roughness: 0.9 });

function makeStem(len = 0.22) {
  const g = new THREE.CylinderGeometry(0.035, 0.045, len, 8);
  const m = new THREE.Mesh(g, stemMat);
  m.castShadow = true;
  return m;
}

function makeLeaf(color, scale = 1) {
  const g = new THREE.SphereGeometry(0.13 * scale, 10, 8);
  const m = new THREE.Mesh(g, leafMat(color));
  m.scale.set(1, 0.32, 0.6);
  m.castShadow = true;
  return m;
}

function makeCandyMesh(type) {
  const def = CANDY_TYPES[type];
  const group = new THREE.Group();
  group.userData.fruit = def.fruit;

  switch (def.fruit) {
    case 'apple': {
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.42, 28, 22), bodyMat(0xe53935, 0x4a0000));
      body.scale.set(1, 0.95, 1);
      group.add(body);
      const stem = makeStem(0.2); stem.position.set(0, 0.42, 0); stem.rotation.z = 0.2; group.add(stem);
      const leaf = makeLeaf(def.accent, 1.15); leaf.position.set(0.16, 0.46, 0); leaf.rotation.z = -0.6; group.add(leaf);
      break;
    }
    case 'orange': {
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 30, 24), bodyMat(0xfb8c00, 0x4a2c00));
      group.add(body);
      const dimple = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 10), bodyMat(0xbf6a00));
      dimple.position.y = 0.38; group.add(dimple);
      const leaf = makeLeaf(def.accent, 1.0); leaf.position.set(0.13, 0.42, 0); leaf.rotation.z = -0.7; group.add(leaf);
      break;
    }
    case 'lemon': {
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.34, 24, 20), bodyMat(0xfdd835, 0x4a4100));
      body.scale.set(1, 1, 1.5); group.add(body);
      const nubGeo = new THREE.SphereGeometry(0.07, 10, 8);
      const nub1 = new THREE.Mesh(nubGeo, bodyMat(0xf9a825)); nub1.position.z = 0.5; group.add(nub1);
      const nub2 = new THREE.Mesh(nubGeo, bodyMat(0xf9a825)); nub2.position.z = -0.5; group.add(nub2);
      const leaf = makeLeaf(def.accent, 0.9); leaf.position.set(0.12, 0.28, 0); leaf.rotation.z = -0.7; group.add(leaf);
      break;
    }
    case 'pear': {
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.36, 24, 20), bodyMat(0x9ccc65, 0x1b3326));
      body.scale.set(1, 1.25, 1); group.add(body);
      const neck = new THREE.Mesh(new THREE.SphereGeometry(0.22, 18, 16), bodyMat(0xaed581, 0x1b3326));
      neck.position.y = 0.42; group.add(neck);
      const stem = makeStem(0.18); stem.position.set(0, 0.66, 0); group.add(stem);
      const leaf = makeLeaf(def.accent, 1.0); leaf.position.set(0.14, 0.66, 0); leaf.rotation.z = -0.6; group.add(leaf);
      break;
    }
    case 'blueberry': {
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 26, 20), bodyMat(0x5c6bc0, 0x0d1330));
      group.add(body);
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.32, 18, 14, 0, Math.PI * 2, 0, Math.PI / 2.4), bodyMat(0x7986cb));
      cap.position.y = 0.12; group.add(cap);
      const calyxMat = bodyMat(0x3949ab);
      for (let i = 0; i < 5; i++) {
        const petal = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.03, 0.16), calyxMat);
        petal.position.y = 0.39; petal.rotation.y = (i / 5) * Math.PI * 2; group.add(petal);
      }
      break;
    }
    case 'grapes': {
      const grapeGeo = new THREE.SphereGeometry(0.16, 14, 12);
      const grapeMat = bodyMat(0x8e24aa, 0x2a0033);
      const positions = [
        [0, 0.0, 0], [-0.18, 0.08, 0.05], [0.18, 0.08, 0.05],
        [-0.10, 0.16, -0.10], [0.10, 0.16, -0.10], [0, 0.26, 0.02],
      ];
      positions.forEach(([x, y, z]) => {
        const g = new THREE.Mesh(grapeGeo, grapeMat); g.position.set(x, y - 0.05, z); group.add(g);
      });
      const stem = makeStem(0.26); stem.position.set(0, 0.48, 0); group.add(stem);
      const leaf = makeLeaf(def.accent, 1.1); leaf.position.set(0.16, 0.52, 0); leaf.rotation.z = -0.5; group.add(leaf);
      break;
    }
    default: {
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 24, 20), bodyMat(def.body));
      group.add(body);
    }
  }

  group.scale.setScalar(1.0);
  group.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return group;
}

// ============================================================================
// GAME STATE
// ============================================================================
const grid = [];
let selected = null;
let isBusy = false;
let isPaused = false;
let score = 0;
let movesLeft = 30;
let timeRemaining = null;
let timerInterval = null;
let currentMode = 'level'; // 'level', 'endless', 'timeAttack'
let currentLevelConfig = null;
let maxFruitTypes = 6;
let comboLevel = 0;
let bestCombo = 1;
let collectedFruits = {};

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const hoverIndicator = createHoverIndicator();
scene.add(hoverIndicator);

function createHoverIndicator() {
  const geo = new THREE.RingGeometry(0.42, 0.5, 32);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff, side: THREE.DoubleSide,
    transparent: true, opacity: 0.0,
  });
  const ring = new THREE.Mesh(geo, mat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.05;
  return ring;
}

// Build initial grid
function initGrid(config = null) {
  // Clear existing
  for (let r = 0; r < grid.length; r++) {
    if (grid[r]) for (let c = 0; c < grid[r].length; c++) {
      const cell = grid[r][c];
      if (cell && cell.mesh) scene.remove(cell.mesh);
    }
  }
  grid.length = 0;
  obstacleManager.clearAll();

  maxFruitTypes = config?.fruitTypes || 6;

  // Place obstacles from level config
  if (config) {
    obstacleManager.placeObstaclesFromConfig(config);
  }

  for (let r = 0; r < GRID_SIZE; r++) {
    grid[r] = [];
    for (let c = 0; c < GRID_SIZE; c++) {
      // If there's a barrier obstacle at (r, c), don't put a fruit
      const obs = obstacleManager.getObstacleAt(r, c);
      if (obs && !obs.canSwap()) {
        grid[r][c] = null;
        continue;
      }

      let type;
      do {
        type = Math.floor(Math.random() * maxFruitTypes);
      } while (createsImmediateMatch(r, c, type));
      grid[r][c] = createCandy(type, r, c);
    }
  }
}

function createsImmediateMatch(r, c, type) {
  if (c >= 2 && grid[r][c - 1]?.type === type && grid[r][c - 2]?.type === type) return true;
  if (r >= 2 && grid[r - 1]?.[c]?.type === type && grid[r - 2]?.[c]?.type === type) return true;
  return false;
}

function createCandy(type, r, c, powerUpType = null) {
  let mesh;
  if (powerUpType) {
    mesh = createPowerUpMesh(powerUpType, CANDY_TYPES[type].fruit);
  } else {
    mesh = makeCandyMesh(type);
  }
  const pos = gridToWorld(r, c);
  mesh.position.set(pos.x, 0, pos.z);
  scene.add(mesh);
  return { type, mesh, row: r, col: c, powerUp: powerUpType };
}

// ============================================================================
// MATCH DETECTION
// ============================================================================
function findMatches() {
  const matched = new Set();

  for (let r = 0; r < GRID_SIZE; r++) {
    let runStart = 0;
    for (let c = 1; c <= GRID_SIZE; c++) {
      const prev = grid[r][c - 1];
      const curr = c < GRID_SIZE ? grid[r][c] : null;
      if (!curr || !prev || curr.type !== prev.type) {
        const runLen = c - runStart;
        if (runLen >= 3 && grid[r][runStart]) {
          for (let k = runStart; k < c; k++) matched.add(`${r},${k}`);
        }
        runStart = c;
      }
    }
  }

  for (let c = 0; c < GRID_SIZE; c++) {
    let runStart = 0;
    for (let r = 1; r <= GRID_SIZE; r++) {
      const prev = grid[r - 1][c];
      const curr = r < GRID_SIZE ? grid[r][c] : null;
      if (!curr || !prev || curr.type !== prev.type) {
        const runLen = r - runStart;
        if (runLen >= 3 && grid[runStart][c]) {
          for (let k = runStart; k < r; k++) matched.add(`${k},${c}`);
        }
        runStart = r;
      }
    }
  }

  return matched;
}

// ============================================================================
// INPUT & RAYCASTING
// ============================================================================
const DRAG_THRESHOLD = 10;
const tapGesture = { active: false, pointerId: -1, startX: 0, startY: 0, moved: false };

function onPointerDown(event) {
  event.preventDefault();
  audioManager.init(); // Ensure Web Audio context is un-muted on user interaction

  if (isBusy || isPaused) return;
  if (currentMode !== 'endless' && movesLeft <= 0) return;
  if (timeRemaining !== null && timeRemaining <= 0) return;

  if (tapGesture.active) return;
  tapGesture.active = true;
  tapGesture.pointerId = event.pointerId;
  tapGesture.startX = event.clientX;
  tapGesture.startY = event.clientY;
  tapGesture.moved = false;
}

function onPointerMove(event) {
  if (tapGesture.active && event.pointerId === tapGesture.pointerId) {
    const dx = event.clientX - tapGesture.startX;
    const dy = event.clientY - tapGesture.startY;
    if (dx * dx + dy * dy > DRAG_THRESHOLD * DRAG_THRESHOLD) {
      tapGesture.moved = true;
      hoverIndicator.material.opacity = 0.0;
      return;
    }
  }

  if (event.pointerType !== 'mouse' || event.buttons !== 0 || isBusy || isPaused) return;
  updatePointer(event);
  const candy = pickCandy();
  if (candy) {
    const p = gridToWorld(candy.row, candy.col);
    hoverIndicator.position.set(p.x, 0.05, p.z);
    hoverIndicator.material.opacity = 0.5;
  } else {
    hoverIndicator.material.opacity = 0.0;
  }
}

function onPointerUp(event) {
  if (!tapGesture.active || event.pointerId !== tapGesture.pointerId) return;
  const wasTap = !tapGesture.moved;
  tapGesture.active = false;
  tapGesture.pointerId = -1;

  if (!wasTap || isBusy || isPaused) return;
  if (currentMode !== 'endless' && movesLeft <= 0) return;

  updatePointer(event);
  const candy = pickCandy();
  if (!candy) return;
  handleSelect(candy);
}

function onPointerCancel(event) {
  if (tapGesture.pointerId === event.pointerId) {
    tapGesture.active = false;
    tapGesture.pointerId = -1;
  }
}

function updatePointer(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
}

function pickCandy() {
  raycaster.setFromCamera(pointer, camera);
  const groups = [];
  for (let r = 0; r < GRID_SIZE; r++)
    for (let c = 0; c < GRID_SIZE; c++)
      if (grid[r][c]) groups.push(grid[r][c].mesh);
  const hits = raycaster.intersectObjects(groups, true);
  if (hits.length === 0) return null;
  let obj = hits[0].object;
  while (obj && !candyOwnerhas(obj)) obj = obj.parent;
  if (!obj) return null;
  for (let r = 0; r < GRID_SIZE; r++)
    for (let c = 0; c < GRID_SIZE; c++)
      if (grid[r][c] && grid[r][c].mesh === obj)
        return grid[r][c];
  return null;
}

function candyOwnerhas(obj) {
  for (let r = 0; r < GRID_SIZE; r++)
    for (let c = 0; c < GRID_SIZE; c++)
      if (grid[r][c] && grid[r][c].mesh === obj) return true;
  return false;
}

function handleSelect(candy) {
  // Check obstacle lock
  const obs = obstacleManager.getObstacleAt(candy.row, candy.col);
  if (obs && !obs.canSwap()) {
    audioManager.playSFX('invalid');
    return;
  }

  if (!selected) {
    selected = candy;
    liftCandy(candy, true);
    audioManager.playSFX('select');
    return;
  }

  if (selected === candy) {
    liftCandy(selected, false);
    selected = null;
    audioManager.playSFX('select');
    return;
  }

  const dr = Math.abs(selected.row - candy.row);
  const dc = Math.abs(selected.col - candy.col);
  const adjacent = (dr === 1 && dc === 0) || (dr === 0 && dc === 1);

  if (adjacent) {
    const a = selected;
    liftCandy(a, false);
    selected = null;
    trySwap(a, candy);
  } else {
    liftCandy(selected, false);
    selected = candy;
    liftCandy(candy, true);
    audioManager.playSFX('select');
  }
}

function liftCandy(candy, lifted) {
  if (!candy) return;
  const targetY = lifted ? 0.55 : 0;
  animateTo(candy.mesh, { y: targetY }, 160);
}

// ============================================================================
// SWAP & RESOLVE PIPELINE
// ============================================================================
async function trySwap(a, b) {
  isBusy = true;
  audioManager.playSFX('swap');
  await swapAnimation(a, b);
  swapInGrid(a, b);

  const initialMatches = findMatches();
  const isPowerUpSwap = a.powerUp || b.powerUp;

  if (initialMatches.size === 0 && !isPowerUpSwap) {
    // Invalid swap — animate back
    audioManager.playSFX('invalid');
    await swapAnimation(a, b);
    swapInGrid(a, b);
    isBusy = false;
    return;
  }

  // Deduct move if applicable
  if (currentMode !== 'endless' && movesLeft > 0) {
    movesLeft--;
    gameEvents.emit('moves:update', { remaining: movesLeft });
  }

  comboLevel = 0;
  await resolveBoard(initialMatches, a, b);

  isBusy = false;
  checkLevelStatus();
}

function swapInGrid(a, b) {
  grid[a.row][a.col] = b;
  grid[b.row][b.col] = a;
  const ar = a.row, ac = a.col;
  a.row = b.row; a.col = b.col;
  b.row = ar;  b.col = ac;
}

async function swapAnimation(a, b) {
  const pa = gridToWorld(a.row, a.col);
  const pb = gridToWorld(b.row, b.col);
  const lift = 0.7;
  await Promise.all([
    animateTo(a.mesh, { x: pa.x, z: pa.z, y: lift }, 150),
    animateTo(b.mesh, { x: pb.x, z: pb.z, y: lift }, 150),
  ]);
  await Promise.all([
    animateTo(a.mesh, { x: pb.x, z: pb.z, y: 0 }, 180),
    animateTo(b.mesh, { x: pa.x, z: pa.z, y: 0 }, 180),
  ]);
}

async function resolveBoard(initialMatches, swappedA = null, swappedB = null) {
  let matches = initialMatches || findMatches();

  while (matches.size > 0) {
    comboLevel++;
    if (comboLevel > bestCombo) bestCombo = comboLevel;

    if (comboLevel >= 2) {
      gameEvents.emit('game:combo', { level: comboLevel });
      audioManager.playSFX(`combo${Math.min(comboLevel, 8)}`);
      comboGlow(scene, comboLevel);
      if (comboLevel >= 3) screenShake(camera, 0.2 + comboLevel * 0.05, 250);
    } else {
      const matchCount = matches.size;
      const sfx = matchCount >= 5 ? 'match5' : matchCount >= 4 ? 'match4' : 'match3';
      audioManager.playSFX(sfx);
    }

    // Power-up creation check
    const matchedArray = Array.from(matches).map(key => {
      const [r, c] = key.split(',').map(Number);
      return { row: r, col: c };
    });

    const newPowerUpType = detectPowerUp(matchedArray, grid);
    let powerUpCell = null;

    if (newPowerUpType && swappedA) {
      powerUpCell = matchedArray.find(c => c.row === swappedA.row && c.col === swappedA.col)
                 || matchedArray.find(c => c.row === swappedB.row && c.col === swappedB.col)
                 || matchedArray[0];
    }

    await popMatches(matches, powerUpCell, newPowerUpType);
    applyGravity();
    await gravityAnimation();
    await refillBoard();
    await refillAnimation();

    matches = findMatches();
    swappedA = null; swappedB = null; // Clear swap refs for cascading steps
  }
}

async function popMatches(matches, powerUpCell = null, newPowerUpType = null) {
  const n = matches.size;
  const bonus = Math.min(comboLevel, 5);
  const earnedScore = n * SCORE_PER_CANDY * bonus;
  score += earnedScore;

  gameEvents.emit('score:update', { score, delta: earnedScore });
  if (currentLevelConfig?.stars) {
    levelHUD.updateProgress(score, currentLevelConfig.objective.target, currentLevelConfig.stars);
  }

  const pops = [];
  matches.forEach(key => {
    const [r, c] = key.split(',').map(Number);
    const candy = grid[r][c];

    if (candy) {
      // Collect fruit progress
      const fruitName = CANDY_TYPES[candy.type].fruit;
      collectedFruits[fruitName] = (collectedFruits[fruitName] || 0) + 1;

      // Check adjacent obstacles
      obstacleManager.handleAdjacentMatch(r, c);

      // VFX Particles
      const pos = gridToWorld(r, c);
      const color = FRUIT_COLORS[candy.type];
      particleSystem.burst(pos, color, 18);

      // Check if this cell should spawn a power-up instead of being cleared
      if (powerUpCell && r === powerUpCell.row && c === powerUpCell.col && newPowerUpType) {
        // Transform into powerup
        scene.remove(candy.mesh);
        grid[r][c] = createCandy(candy.type, r, c, newPowerUpType);
        particleSystem.sparkle(pos, 0xffd166, 25);
        audioManager.playSFX('powerup');
      } else {
        pops.push(popCandy(candy));
        grid[r][c] = null;
      }
    }
  });

  await Promise.all(pops);
}

function popCandy(candy) {
  const group = candy.mesh;
  const startScale = group.scale.x;
  return tween(240, (t) => {
    const k = 1 - t;
    group.scale.setScalar(startScale * k);
    group.rotation.y += 0.3;
    group.position.y = 0.55 * t;
  }).then(() => {
    scene.remove(group);
    group.traverse(o => {
      if (o.isMesh) {
        o.geometry.dispose();
        if (Array.isArray(o.material)) o.material.forEach(m => m.dispose());
        else o.material.dispose();
      }
    });
  });
}

function applyGravity() {
  for (let c = 0; c < GRID_SIZE; c++) {
    let writeRow = GRID_SIZE - 1;
    for (let r = GRID_SIZE - 1; r >= 0; r--) {
      if (grid[r][c]) {
        if (r !== writeRow) {
          const candy = grid[r][c];
          grid[writeRow][c] = candy;
          grid[r][c] = null;
          candy.row = writeRow;
        }
        writeRow--;
      }
    }
  }
}

async function gravityAnimation() {
  const movers = [];
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      const candy = grid[r][c];
      if (!candy) continue;
      const target = gridToWorld(r, c);
      if (Math.abs(candy.mesh.position.z - target.z) > 0.001 ||
          Math.abs(candy.mesh.position.x - target.x) > 0.001) {
        movers.push(animateTo(candy.mesh, { x: target.x, z: target.z }, 200));
      }
    }
  }
  if (movers.length) await Promise.all(movers);
}

function refillBoard() {
  for (let c = 0; c < GRID_SIZE; c++) {
    let emptyAbove = 0;
    for (let r = 0; r < GRID_SIZE; r++) {
      if (!grid[r][c]) emptyAbove++;
      else break;
    }
    let placed = 0;
    for (let r = 0; r < GRID_SIZE; r++) {
      if (!grid[r][c]) {
        // Skip filling if there's a barrier
        const obs = obstacleManager.getObstacleAt(r, c);
        if (obs && !obs.canSwap()) continue;

        const type = Math.floor(Math.random() * maxFruitTypes);
        const candy = createCandy(type, r, c);
        const fallStart = (GRID_SIZE - 1) / 2 + 1.5 + emptyAbove + placed;
        candy.mesh.position.z = fallStart * -CELL;
        grid[r][c] = candy;
        placed++;
      }
    }
  }
}

async function refillAnimation() {
  const movers = [];
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      const candy = grid[r][c];
      if (!candy) continue;
      const target = gridToWorld(r, c);
      movers.push(animateTo(candy.mesh, { x: target.x, z: target.z }, 220));
    }
  }
  if (movers.length) await Promise.all(movers);
}

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================
function animateTo(mesh, target, duration) {
  const start = { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z };
  return tween(duration, (t) => {
    const e = easeOutCubic(t);
    if (target.x !== undefined) mesh.position.x = start.x + (target.x - start.x) * e;
    if (target.y !== undefined) mesh.position.y = start.y + (target.y - start.y) * e;
    if (target.z !== undefined) mesh.position.z = start.z + (target.z - start.z) * e;
  });
}

function tween(duration, onUpdate) {
  return new Promise((resolve) => {
    const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      onUpdate(t);
      if (t < 1) requestAnimationFrame(step);
      else resolve();
    }
    requestAnimationFrame(step);
  });
}

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

// ============================================================================
// LEVEL LIFECYCLE & OBJECTIVES
// ============================================================================
function startLevel(levelId) {
  currentMode = 'level';
  const config = levelManager.startLevel(levelId);
  currentLevelConfig = config;

  score = 0;
  movesLeft = config.moves || 30;
  timeRemaining = config.timeLimit || null;
  comboLevel = 0;
  bestCombo = 1;
  collectedFruits = {};
  isPaused = false;

  initGrid(config);
  fitCameraToScreen();
  levelHUD.show(config);
  uiManager.showScreen('gameplay');

  if (timeRemaining) {
    startTimer();
  } else {
    stopTimer();
  }

  audioManager.playMusic('game');
}

function startEndless() {
  currentMode = 'endless';
  currentLevelConfig = null;
  score = 0;
  movesLeft = Infinity;
  timeRemaining = null;
  stopTimer();
  comboLevel = 0;
  bestCombo = 1;
  isPaused = false;

  initGrid();
  levelHUD.showEndless();
  uiManager.showScreen('gameplay');
  audioManager.playMusic('game');
}

function startTimeAttack() {
  currentMode = 'timeAttack';
  currentLevelConfig = { id: 0, name: 'Time Attack', objective: { type: 'score', target: 5000 }, stars: [2000, 3500, 5000] };
  score = 0;
  movesLeft = Infinity;
  timeRemaining = 60; // 60 seconds
  comboLevel = 0;
  bestCombo = 1;
  isPaused = false;

  initGrid();
  levelHUD.show(currentLevelConfig);
  levelHUD.updateTime(60);
  uiManager.showScreen('gameplay');
  startTimer();
  audioManager.playMusic('game');
}

function startTimer() {
  stopTimer();
  timerInterval = setInterval(() => {
    if (isPaused || isBusy) return;
    if (timeRemaining > 0) {
      timeRemaining--;
      gameEvents.emit('time:update', { remaining: timeRemaining });
      if (timeRemaining === 0) {
        stopTimer();
        checkLevelStatus();
      }
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function checkLevelStatus() {
  if (currentMode === 'endless') return;

  const obj = currentLevelConfig?.objective;
  let isObjectiveMet = false;

  if (obj) {
    switch (obj.type) {
      case 'score':
        isObjectiveMet = score >= obj.target;
        break;
      case 'collect':
        isObjectiveMet = (collectedFruits[obj.fruitType] || 0) >= obj.target;
        break;
      case 'clearIce':
        isObjectiveMet = obstacleManager.obstacles.filter(o => o.type === 'ICE').length === 0;
        break;
      case 'timed':
        isObjectiveMet = score >= obj.target;
        break;
    }
  }

  // Win condition
  if (isObjectiveMet) {
    stopTimer();
    const result = levelManager.completeLevel(score, currentLevelConfig.moves ? currentLevelConfig.moves - movesLeft : 0, 0);
    victoryEffect(scene, camera);
    particleSystem.shower(0xffd166, 2500);

    setTimeout(() => {
      levelHUD.hide();
      levelComplete.show({
        levelId: currentLevelConfig.id,
        score: score || 0,
        stars: result ? result.stars : 3,
        highScore: result ? (result.highScore || result.newHighscore || score) : score,
        isNewBest: result ? (result.isNewBest ?? true) : true,
        bestCombo: bestCombo || 1,
        hasNextLevel: currentLevelConfig.id < levelManager.levels.length
      });
    }, 600);
    return;
  }

  // Fail condition
  const outOfMoves = movesLeft <= 0;
  const outOfTime = timeRemaining !== null && timeRemaining <= 0;

  if (outOfMoves || outOfTime) {
    stopTimer();
    setTimeout(() => {
      levelHUD.hide();
      levelFailed.show({
        levelId: currentLevelConfig ? currentLevelConfig.id : 1,
        score,
        target: obj ? obj.target : 1000,
        reason: outOfTime ? 'time' : 'moves'
      });
    }, 600);
  }
}

// ============================================================================
// GLOBAL EVENT BINDINGS
// ============================================================================
gameEvents.on('auth:success', () => {
  levelManager.reloadUserProgress();
  levelMap.refresh();
  uiManager.showScreen('levelMap');
});
gameEvents.on('auth:logout', () => {
  authModal.show('signin');
});
gameEvents.on('level:select', ({ levelId }) => startLevel(levelId));
gameEvents.on('game:startEndless', () => startEndless());
gameEvents.on('game:startTimeAttack', () => startTimeAttack());
gameEvents.on('level:restart', ({ levelId }) => startLevel(levelId));
gameEvents.on('game:restart', () => {
  if (currentMode === 'level' && currentLevelConfig) startLevel(currentLevelConfig.id);
  else if (currentMode === 'endless') startEndless();
  else if (currentMode === 'timeAttack') startTimeAttack();
});
gameEvents.on('game:quit', () => {
  stopTimer();
  levelHUD.hide();
  levelComplete.hide();
  levelFailed.hide();
  levelMap.refresh();
  uiManager.showScreen('levelMap');
});
gameEvents.on('game:pause', () => { isPaused = true; });
gameEvents.on('game:resume', () => { isPaused = false; });
gameEvents.on('game:extraMoves', ({ count }) => {
  movesLeft += count;
  gameEvents.emit('moves:update', { remaining: movesLeft });
  levelHUD.show(currentLevelConfig);
});
gameEvents.on('ui:showSettings', () => audioSettings.show());
gameEvents.on('audio:play', ({ sound }) => audioManager.playSFX(sound));

// ============================================================================
// RENDER LOOP & RESIZE
// ============================================================================
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();
  const elapsed = clock.elapsedTime;

  // Fruit idle rotations
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      const candy = grid[r]?.[c];
      if (candy && candy.mesh) {
        candy.mesh.rotation.y += dt * 0.4;
      }
    }
  }

  // Update particles
  particleSystem.update(dt);

  // Ambient lighting pulse
  rimLight.intensity = 0.7 + Math.sin(elapsed * 1.5) * 0.2;
  fillLight.intensity = 0.45 + Math.cos(elapsed * 1.2) * 0.15;

  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  fitCameraToScreen();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ============================================================================
// INITIALIZATION
// ============================================================================
async function initApp() {
  try {
    uiManager.init();
    audioSettings.create();
    levelComplete.create();
    levelFailed.create();
    levelHUD.create();
    authModal.create();

    // Register screens with UIManager
    levelMap.create();

    // Load levels
    await levelManager.loadLevels();

    // Check player authentication state
    const currentUser = authManager.getCurrentUser();
    if (!currentUser) {
      authModal.show('signin');
    } else {
      levelManager.reloadUserProgress();
      levelMap.refresh();
      uiManager.showScreen('levelMap');
    }

    // Input listeners
    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointercancel', onPointerCancel);

    fitCameraToScreen();
    animate();
  } catch (err) {
    console.error('App init error', err);
    authModal.show('signin');
  }
}

initApp();
