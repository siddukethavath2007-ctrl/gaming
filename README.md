# 🍎 Fruit Crush 3D

A 3D match-3 game built with **Three.js** + **Vite**. Instead of flat candies, the
board is full of little 3D **fruits** (apple, orange, lemon, pear, blueberry,
grapes) — and you have **unlimited moves** to play as long as you like.

![grid](https://img.shields.io/badge/grid-8x8-purple) ![fruits](https://img.shields.io/badge/fruit%20types-6-critical) ![moves](https://img.shields.io/badge/moves-unlimited-success)

## ▶️ Run

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default **http://localhost:5173/**).

To create a production build:

```bash
npm run build
npm run preview
```

## 📱 Play on your phone

The game is touch-friendly. To play from a phone on the same Wi-Fi as the
computer running the dev server:

1. Start the server: `npm run dev` (it prints a **Network** URL like
   `http://172.16.x.x:5173/`).
2. Make sure the **phone is on the same Wi-Fi network** as this computer.
3. Open that Network URL in the phone's browser.

**Controls on mobile:**
- **Tap** a fruit, then tap an adjacent fruit to swap.
- **Drag one finger** to orbit the 3D board.
- **Pinch with two fingers** to zoom.

Tap-vs-drag is detected automatically — a quick tap never orbits the camera,
and a deliberate drag never triggers a swap, so the two never conflict.

**If the page won't load on the phone**, the macOS firewall is likely blocking
incoming connections. Either click **Allow** when macOS prompts about `node`,
or check **System Settings → Network → Firewall**. As a last resort you can
tunnel the port to the phone with `lt --port 5173` (the `localtunnel` tool).

**Tip — add to Home Screen:** In Safari, tap the Share button → *Add to Home
Screen*. The app is marked web-app-capable, so it launches full-screen without
the browser chrome (notch and home indicator are respected via safe-area insets).

## 🎮 How to play

- **Click** a fruit to select it (it lifts up).
- **Click an adjacent fruit** to swap them.
- A swap only succeeds if it lines up **3+ of the same fruit** in a row or column — otherwise they swap back.
- Matched fruits **pop** (shrink + spin), fruits above **fall** to fill the gaps, and new fruits drop in. This can chain into combos!
- **Moves are unlimited** (∞) — play forever. Bigger groups score more (4-in-a-row = 2× per fruit, 5+ = 3×).
- **Drag with the mouse** to orbit the 3D board. **Scroll** to zoom.
- Hit **↻ Restart** to reset the score and board.

## 🍓 The fruits

Each of the 6 fruit types is built from multiple 3D meshes assembled into a `THREE.Group`:

| Type | Body shape | Extra details |
|------|-----------|---------------|
| 🍎 Apple | red sphere | brown stem + green leaf |
| 🍊 Orange | orange sphere | dimple on top, tiny leaf |
| 🍋 Lemon | elongated yellow sphere | little nubs at the poles |
| 🍐 Pear | tapered green body | neck sphere + stem + leaf |
| 🫐 Blueberry | indigo sphere | frosted cap + 5-point star calyx |
| 🍇 Grapes | cluster of 6 purple spheres | stem + leaf |

## 🧩 Tech

- `three` — 3D rendering (Group-based fruits, lighting, shadows, recursive raycasting for picking)
- `vite` — dev server + build
- All game logic (match detection, gravity, refill, animations) is vanilla JS in `main.js`.

## 🔧 Configuration

In `main.js`:

```js
const GRID_SIZE = 8;          // board size (8x8)
const NUM_TYPES = 6;          // number of fruit types
const UNLIMITED_MOVES = true; // set false to restore the 30-move limit + game-over
const STARTING_MOVES = 30;    // used only when UNLIMITED_MOVES = false
const SCORE_PER_CANDY = 10;
```

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Page shell + HUD (score, moves, restart, game-over modal) and styling |
| `main.js` | The whole game: scene, grid, fruit meshes, input, match-3 engine, animations |
| `package.json` / `vite.config.js` | Project + dev-server config |
