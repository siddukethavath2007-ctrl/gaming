/**
 * LevelHUD — In-game heads-up display showing level info, moves/time, objective progress.
 * Overlays on top of the 3D game during gameplay.
 */
import gameEvents from '../core/EventBus.js';

class LevelHUD {
  constructor() {
    this.element = null;
    this._created = false;
    this._comboTimeout = null;
    this._scorePopups = [];
  }

  /**
   * Create and inject the HUD into the DOM.
   */
  create() {
    if (this._created) return;
    this._created = true;
    this._injectStyles();

    this.element = document.createElement('div');
    this.element.id = 'level-hud';
    this.element.innerHTML = `
      <div class="hud-top">
        <div class="hud-panel hud-score-panel">
          <div class="hud-label">SCORE</div>
          <div class="hud-value" id="hud-score">0</div>
          <div class="hud-target" id="hud-target"></div>
        </div>
        <div class="hud-center">
          <div class="hud-level-name" id="hud-level-name"></div>
          <div class="hud-objective" id="hud-objective"></div>
        </div>
        <div class="hud-panel hud-moves-panel">
          <div class="hud-label" id="hud-moves-label">MOVES</div>
          <div class="hud-value" id="hud-moves">30</div>
        </div>
      </div>
      <div class="hud-combo" id="hud-combo"></div>
      <div class="hud-progress-bar" id="hud-progress-container">
        <div class="hud-progress-fill" id="hud-progress-fill"></div>
        <div class="hud-progress-stars" id="hud-progress-stars"></div>
      </div>
      <button class="hud-pause-btn" id="hud-pause-btn">⏸</button>
      <div class="hud-score-popups" id="hud-score-popups"></div>

      <!-- Pause Menu Overlay -->
      <div class="hud-pause-overlay" id="hud-pause-overlay">
        <div class="hud-pause-modal ui-panel">
          <h2>Paused</h2>
          <button class="ui-btn ui-btn-primary hud-pause-action" data-action="resume">▶ Resume</button>
          <button class="ui-btn ui-btn-ghost hud-pause-action" data-action="restart">↻ Restart</button>
          <button class="ui-btn ui-btn-ghost hud-pause-action" data-action="quit">✕ Quit to Map</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.element);
    this._bindEvents();
  }

  /**
   * Show the HUD for a level.
   * @param {object} levelConfig Level configuration
   */
  show(levelConfig) {
    if (!this.element) this.create();
    this.element.classList.add('visible');
    this._updateForLevel(levelConfig);
  }

  /**
   * Show the HUD in endless mode.
   */
  showEndless() {
    if (!this.element) this.create();
    this.element.classList.add('visible');
    this._setLevelName('Endless Mode');
    this._setObjective('Get the highest score!');
    this._setMoves('∞', 'MOVES');
    this._setScore(0);
    this._hideProgressBar();
  }

  /**
   * Hide the HUD.
   */
  hide() {
    if (!this.element) return;
    this.element.classList.remove('visible');
    this._hidePauseMenu();
  }

  /**
   * Update the score display.
   * @param {number} score
   * @param {number} [delta] Score delta for popup
   */
  updateScore(score, delta) {
    const el = document.getElementById('hud-score');
    if (el) {
      el.textContent = score.toLocaleString();
      el.classList.add('score-bump');
      setTimeout(() => el.classList.remove('score-bump'), 200);
    }
    if (delta && delta > 0) {
      this._showScorePopup(delta);
    }
  }

  /**
   * Update moves display.
   * @param {number|string} moves
   */
  updateMoves(moves) {
    const el = document.getElementById('hud-moves');
    if (el) {
      el.textContent = typeof moves === 'number' ? moves : moves;
      if (typeof moves === 'number' && moves <= 5) {
        el.classList.add('low');
      } else {
        el.classList.remove('low');
      }
    }
  }

  /**
   * Update time display (for timed modes).
   * @param {number} seconds
   */
  updateTime(seconds) {
    const el = document.getElementById('hud-moves');
    const label = document.getElementById('hud-moves-label');
    if (label) label.textContent = 'TIME';
    if (el) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      el.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
      if (seconds <= 10) {
        el.classList.add('low');
      } else {
        el.classList.remove('low');
      }
    }
  }

  /**
   * Show combo indicator.
   * @param {number} level Combo level (2+)
   */
  showCombo(level) {
    const el = document.getElementById('hud-combo');
    if (!el) return;
    if (this._comboTimeout) clearTimeout(this._comboTimeout);

    const comboTexts = ['', '', 'Nice!', 'Great!', 'Awesome!', 'Amazing!', 'Incredible!', 'LEGENDARY!'];
    const text = level >= comboTexts.length ? 'GODLIKE!! 🔥' : comboTexts[level];
    const multiplier = Math.min(level, 5);

    el.innerHTML = `
      <span class="combo-text">${text}</span>
      <span class="combo-multi">x${multiplier}</span>
    `;
    el.classList.add('visible');

    this._comboTimeout = setTimeout(() => {
      el.classList.remove('visible');
    }, 1500);
  }

  /**
   * Update objective progress bar.
   * @param {number} current Current progress
   * @param {number} target Target value
   * @param {number[]} starThresholds Star threshold values
   */
  updateProgress(current, target, starThresholds) {
    const fill = document.getElementById('hud-progress-fill');
    const starsContainer = document.getElementById('hud-progress-stars');
    const container = document.getElementById('hud-progress-container');
    if (!fill || !container) return;

    container.style.display = 'flex';
    const maxTarget = starThresholds ? starThresholds[2] : target;
    const pct = Math.min(100, (current / maxTarget) * 100);
    fill.style.width = `${pct}%`;

    // Star markers on progress bar
    if (starThresholds && starsContainer) {
      starsContainer.innerHTML = starThresholds.map((threshold, i) => {
        const pos = (threshold / maxTarget) * 100;
        const earned = current >= threshold;
        return `<div class="hud-star-marker ${earned ? 'earned' : ''}" style="left:${pos}%">⭐</div>`;
      }).join('');
    }
  }

  _updateForLevel(config) {
    this._setLevelName(`Level ${config.id}: ${config.name}`);
    this._setObjective(this._formatObjective(config.objective));

    if (config.timeLimit) {
      this._setMoves(config.timeLimit, 'TIME');
    } else if (config.moves) {
      this._setMoves(config.moves, 'MOVES');
    } else {
      this._setMoves('∞', 'MOVES');
    }

    this._setScore(0);
    this._setTarget(config.objective.target);

    if (config.stars) {
      this.updateProgress(0, config.objective.target, config.stars);
    } else {
      this._hideProgressBar();
    }
  }

  _formatObjective(objective) {
    switch (objective.type) {
      case 'score': return `🎯 Score ${objective.target.toLocaleString()} points`;
      case 'collect': return `🧺 Collect ${objective.target} ${objective.fruitType || 'fruits'}`;
      case 'clearIce': return '🧊 Clear all ice blocks';
      case 'timed': return `⏱️ Score ${objective.target.toLocaleString()} in time`;
      default: return `🎯 Score ${objective.target || 0}`;
    }
  }

  _setLevelName(name) {
    const el = document.getElementById('hud-level-name');
    if (el) el.textContent = name;
  }

  _setObjective(text) {
    const el = document.getElementById('hud-objective');
    if (el) el.textContent = text;
  }

  _setMoves(value, label) {
    const el = document.getElementById('hud-moves');
    const labelEl = document.getElementById('hud-moves-label');
    if (el) el.textContent = value;
    if (labelEl) labelEl.textContent = label;
  }

  _setScore(score) {
    const el = document.getElementById('hud-score');
    if (el) el.textContent = score.toLocaleString();
  }

  _setTarget(target) {
    const el = document.getElementById('hud-target');
    if (el) el.textContent = target ? `/ ${target.toLocaleString()}` : '';
  }

  _hideProgressBar() {
    const container = document.getElementById('hud-progress-container');
    if (container) container.style.display = 'none';
  }

  _showScorePopup(delta) {
    const container = document.getElementById('hud-score-popups');
    if (!container) return;
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.textContent = `+${delta}`;
    popup.style.left = `${40 + Math.random() * 20}%`;
    container.appendChild(popup);
    setTimeout(() => popup.remove(), 900);
  }

  _showPauseMenu() {
    const overlay = document.getElementById('hud-pause-overlay');
    if (overlay) overlay.classList.add('visible');
    gameEvents.emit('game:pause');
  }

  _hidePauseMenu() {
    const overlay = document.getElementById('hud-pause-overlay');
    if (overlay) overlay.classList.remove('visible');
  }

  _bindEvents() {
    // Pause button
    const pauseBtn = document.getElementById('hud-pause-btn');
    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        gameEvents.emit('audio:play', { sound: 'buttonClick' });
        this._showPauseMenu();
      });
    }

    // Pause menu actions
    const pauseActions = this.element.querySelectorAll('.hud-pause-action');
    pauseActions.forEach(btn => {
      btn.addEventListener('click', () => {
        gameEvents.emit('audio:play', { sound: 'buttonClick' });
        const action = btn.dataset.action;
        this._hidePauseMenu();
        if (action === 'resume') {
          gameEvents.emit('game:resume');
        } else if (action === 'restart') {
          gameEvents.emit('game:restart');
        } else if (action === 'quit') {
          gameEvents.emit('game:quit');
        }
      });
    });

    // Listen for game events
    gameEvents.on('score:update', ({ score, delta }) => this.updateScore(score, delta));
    gameEvents.on('moves:update', ({ remaining }) => this.updateMoves(remaining));
    gameEvents.on('time:update', ({ remaining }) => this.updateTime(remaining));
    gameEvents.on('game:combo', ({ level }) => this.showCombo(level));
  }

  _injectStyles() {
    if (document.getElementById('level-hud-styles')) return;
    const style = document.createElement('style');
    style.id = 'level-hud-styles';
    style.textContent = `
      #level-hud {
        position: fixed; inset: 0; z-index: 15;
        pointer-events: none;
        display: none;
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      #level-hud.visible { display: block; }

      .hud-top {
        position: absolute; top: 0; left: 0; right: 0;
        display: flex; justify-content: space-between; align-items: flex-start;
        padding: 14px 16px;
        padding-top: calc(14px + env(safe-area-inset-top, 0px));
        pointer-events: auto;
      }

      .hud-panel {
        background: rgba(40, 18, 78, 0.7);
        backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 14px;
        padding: 8px 16px;
        text-align: center;
        min-width: 80px;
      }
      .hud-label {
        font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
        color: #c9a6ff; font-weight: 700;
      }
      .hud-value {
        font-size: 24px; font-weight: 800;
        background: linear-gradient(180deg, #fff, #ffd6f5);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: transform 0.15s ease;
      }
      .hud-value.score-bump { transform: scale(1.2); }
      .hud-value.low {
        background: linear-gradient(180deg, #ff5e87, #ff2d2d);
        -webkit-background-clip: text; background-clip: text;
        animation: pulse 0.8s ease infinite;
      }
      .hud-target {
        font-size: 11px; color: rgba(255,255,255,0.4); font-weight: 600;
      }

      .hud-center {
        text-align: center; flex: 1; padding: 4px 8px;
      }
      .hud-level-name {
        font-size: 13px; font-weight: 700; color: #ffd166;
        text-shadow: 0 1px 4px rgba(0,0,0,0.5);
      }
      .hud-objective {
        font-size: 11px; color: rgba(255,255,255,0.7); margin-top: 2px;
      }

      /* Combo indicator */
      .hud-combo {
        position: fixed; top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        text-align: center; pointer-events: none;
        opacity: 0; transition: opacity 0.2s ease;
        z-index: 25;
      }
      .hud-combo.visible {
        opacity: 1;
        animation: comboAppear 0.4s ease;
      }
      .combo-text {
        display: block;
        font-size: 36px; font-weight: 900;
        background: linear-gradient(90deg, #ff6ec7, #ffd166, #6effc7);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: none;
        filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
      }
      .combo-multi {
        display: block;
        font-size: 22px; font-weight: 800; color: #ffd166;
        text-shadow: 0 2px 6px rgba(255,209,102,0.5);
      }

      @keyframes comboAppear {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        60% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      }

      /* Progress bar */
      .hud-progress-bar {
        position: fixed; bottom: 60px; left: 16px; right: 16px;
        height: 8px;
        background: rgba(40, 18, 78, 0.6);
        border-radius: 4px; overflow: visible;
        pointer-events: none;
        bottom: calc(60px + env(safe-area-inset-bottom, 0px));
      }
      .hud-progress-fill {
        height: 100%; width: 0%;
        background: linear-gradient(90deg, #6effc7, #34d399);
        border-radius: 4px;
        transition: width 0.5s ease;
        box-shadow: 0 0 8px rgba(52,211,153,0.5);
      }
      .hud-progress-stars {
        position: absolute; top: -10px; left: 0; right: 0;
        height: 24px;
      }
      .hud-star-marker {
        position: absolute; transform: translateX(-50%);
        font-size: 14px; filter: grayscale(1) brightness(0.5);
        transition: filter 0.3s ease, transform 0.3s ease;
      }
      .hud-star-marker.earned {
        filter: none;
        transform: translateX(-50%) scale(1.3);
      }

      /* Pause button */
      .hud-pause-btn {
        position: fixed; bottom: 16px; right: 16px;
        width: 44px; height: 44px;
        border-radius: 50%;
        background: rgba(40, 18, 78, 0.7);
        backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        border: 1.5px solid rgba(255,255,255,0.15);
        color: #fff; font-size: 18px;
        cursor: pointer; pointer-events: auto;
        transition: transform 0.15s ease;
        bottom: calc(16px + env(safe-area-inset-bottom, 0px));
        display: flex; align-items: center; justify-content: center;
      }
      .hud-pause-btn:hover { transform: scale(1.1); }

      /* Pause menu */
      .hud-pause-overlay {
        position: fixed; inset: 0;
        background: rgba(10, 4, 20, 0.7);
        backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        display: none; align-items: center; justify-content: center;
        z-index: 30; pointer-events: auto;
      }
      .hud-pause-overlay.visible { display: flex; }
      .hud-pause-modal {
        padding: 32px 40px; text-align: center;
        display: flex; flex-direction: column; gap: 12px;
      }
      .hud-pause-modal h2 {
        font-size: 28px; font-weight: 800; color: #fff;
        margin-bottom: 8px;
      }

      /* Score popups */
      .hud-score-popups {
        position: fixed; inset: 0; pointer-events: none; z-index: 20;
      }
      .score-popup {
        position: absolute; top: 40%;
        font-size: 22px; font-weight: 800; color: #ffd166;
        text-shadow: 0 2px 6px rgba(255,209,102,0.5);
        animation: scorePopup 0.9s ease forwards;
        pointer-events: none;
      }
      @keyframes scorePopup {
        0% { transform: translateY(0) scale(0.5); opacity: 0; }
        20% { transform: translateY(-10px) scale(1.2); opacity: 1; }
        100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
      }

      @media (max-width: 640px) {
        .hud-panel { padding: 6px 10px; min-width: 65px; border-radius: 10px; }
        .hud-label { font-size: 9px; letter-spacing: 1px; }
        .hud-value { font-size: 20px; }
        .hud-level-name { font-size: 11px; }
        .hud-objective { font-size: 10px; }
        .combo-text { font-size: 28px; }
        .combo-multi { font-size: 18px; }
      }
    `;
    document.head.appendChild(style);
  }
}

export { LevelHUD };
export default LevelHUD;
