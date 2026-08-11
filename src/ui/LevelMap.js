import uiManager from './UIManager.js';
import gameEvents from '../core/EventBus.js';
import authManager from '../auth/AuthManager.js';

class LevelMap {
  constructor(levelManager) {
    /** @type {import('../levels/LevelManager.js').default} */
    this.levelManager = levelManager;
    this.element = null;
    this.scrollContainer = null;
    this._created = false;
  }

  /**
   * Create and register the level map screen.
   */
  create() {
    if (this._created) return;
    this._created = true;

    this._injectStyles();
    this.element = document.createElement('div');
    this.element.id = 'level-map-screen';
    this.element.className = 'ui-screen';
    this.element.innerHTML = this._buildHTML();
    uiManager.registerScreen('levelMap', this.element);
    this._bindEvents();
  }

  /**
   * Refresh the map to reflect current progress.
   */
  refresh() {
    if (!this.scrollContainer) return;
    const progress = this.levelManager.getProgress() || { completedLevels: {}, unlockedLevels: [1] };
    const levels = Array.isArray(this.levelManager.levels) ? this.levelManager.levels : [];
    const completedLevels = progress.completedLevels || {};

    this.scrollContainer.innerHTML = '';

    // Create the winding path of level nodes
    const pathContainer = document.createElement('div');
    pathContainer.className = 'lm-path';

    levels.forEach((level, index) => {
      const groupIndex = Math.ceil(level.id / 5);
      
      // Inject Group Header Banner at the start of each 5-level group (Level 1, 6, 11, 16, 21...)
      if ((level.id - 1) % 5 === 0) {
        const groupStars = this.levelManager.getGroupStars ? this.levelManager.getGroupStars(groupIndex) : 0;
        const isGroupUnlocked = this.levelManager.isGroupUnlocked ? this.levelManager.isGroupUnlocked(groupIndex) : true;
        const prevGroupStars = groupIndex > 1 && this.levelManager.getGroupStars ? this.levelManager.getGroupStars(groupIndex - 1) : 0;
        const startLvl = (groupIndex - 1) * 5 + 1;
        const endLvl = Math.min(groupIndex * 5, levels.length);

        const banner = document.createElement('div');
        banner.className = `lm-group-banner ${isGroupUnlocked ? 'unlocked' : 'locked'}`;
        
        if (groupIndex === 1) {
          const unlockedTag = groupStars >= 10 ? ' — Next Group Unlocked!' : '';
          banner.innerHTML = `⭐ Group 1 (Levels 1–5): ${groupStars} / 15 Stars${unlockedTag}`;
        } else if (isGroupUnlocked) {
          const unlockedTag = groupStars >= 10 ? ' — Next Group Unlocked!' : '';
          banner.innerHTML = `🔓 Group ${groupIndex} (Levels ${startLvl}–${endLvl}): ${groupStars} / 15 Stars${unlockedTag}`;
        } else {
          banner.innerHTML = `🔒 Group ${groupIndex} (Levels ${startLvl}–${endLvl}) — Need 10 ⭐ in Group ${groupIndex - 1}! (${prevGroupStars}/15 Stars)`;
        }
        pathContainer.appendChild(banner);
      }

      const isUnlocked = this.levelManager.isLevelUnlocked(level.id);
      const levelProgress = completedLevels[level.id];
      const stars = levelProgress ? levelProgress.stars : 0;
      const isCompleted = !!levelProgress;
      const isCurrent = isUnlocked && !isCompleted;

      const node = document.createElement('div');
      node.className = `lm-node ${isUnlocked ? 'unlocked' : 'locked'} ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''}`;
      node.dataset.levelId = level.id;

      // Position nodes in a zigzag pattern
      const row = Math.floor(index / 4);
      const col = index % 4;
      const isReversed = row % 2 === 1;
      const actualCol = isReversed ? 3 - col : col;
      node.style.setProperty('--col', actualCol);
      node.style.setProperty('--row', row);

      const objectiveIcon = this._getObjectiveIcon(level.objective.type);

      node.innerHTML = `
        <div class="lm-node-circle">
          <span class="lm-node-num">${level.id}</span>
          ${!isUnlocked ? '<span class="lm-lock">🔒</span>' : ''}
          ${isCurrent ? '<div class="lm-pulse-ring"></div>' : ''}
        </div>
        <div class="lm-node-stars">
          ${this._renderStars(stars)}
        </div>
        <div class="lm-node-name">${level.name}</div>
        <div class="lm-node-objective">${objectiveIcon} ${this._getObjectiveText(level)}</div>
      `;

      if (isUnlocked) {
        node.addEventListener('click', () => this._onLevelSelect(level.id));
      } else {
        node.addEventListener('click', () => {
          gameEvents.emit('audio:play', { sound: 'invalid' });
          const gIndex = Math.ceil(level.id / 5);
          const isGrpUnlocked = this.levelManager.isGroupUnlocked ? this.levelManager.isGroupUnlocked(gIndex) : true;
          if (!isGrpUnlocked) {
            const reqGroup = gIndex - 1;
            const currentStars = this.levelManager.getGroupStars ? this.levelManager.getGroupStars(reqGroup) : 0;
            alert(`🔒 Group ${gIndex} is Locked!\n\nYou need at least 10 Stars in Group ${reqGroup} (Levels ${(reqGroup-1)*5+1}–${reqGroup*5}) to unlock this level group.\n\nCurrently earned in Group ${reqGroup}: ${currentStars} / 15 Stars.`);
          } else {
            alert(`🔒 Level ${level.id} is Locked!\nComplete Level ${level.id - 1} first to unlock this level.`);
          }
        });
      }

      pathContainer.appendChild(node);
    });

    this.scrollContainer.appendChild(pathContainer);

    // Update header stats
    const totalStars = this.levelManager.getTotalStars ? this.levelManager.getTotalStars() : 0;
    const completedCount = progress.completedLevels ? Object.keys(progress.completedLevels).length : 0;
    const user = authManager.getCurrentUser();
    const username = user ? user.username : 'Player';

    const statsEl = this.element.querySelector('.lm-stats');
    if (statsEl) {
      statsEl.innerHTML = `
        <div class="lm-user-badge">
          <span class="lm-user-icon">👤</span>
          <span class="lm-user-name">${username}</span>
        </div>
        <div class="lm-stat">
          <span class="lm-stat-icon">⭐</span>
          <span class="lm-stat-value">${totalStars}</span>
        </div>
        <div class="lm-stat">
          <span class="lm-stat-icon">✅</span>
          <span class="lm-stat-value">${completedCount}/${levels.length}</span>
        </div>
        <button id="lm-logout-btn" class="lm-logout-btn" title="Log Out">
          🚪 Logout
        </button>
      `;
    }

    // Scroll to current level
    requestAnimationFrame(() => {
      const currentNode = this.scrollContainer.querySelector('.lm-node.current');
      if (currentNode) {
        currentNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  _getObjectiveIcon(type) {
    const icons = {
      score: '🎯',
      collect: '🧺',
      clearIce: '🧊',
      timed: '⏱️'
    };
    return icons[type] || '🎯';
  }

  _getObjectiveText(level) {
    const objective = level.objective;
    const movesText = level.timeLimit ? `${level.timeLimit}s` : `${level.moves || 30} moves`;
    switch (objective.type) {
      case 'score': return `Score ${objective.target.toLocaleString()} • ${movesText}`;
      case 'collect': return `Collect ${objective.target} ${objective.fruitType || 'fruits'} • ${movesText}`;
      case 'clearIce': return `Clear all ice • ${movesText}`;
      case 'timed': return `Score ${objective.target.toLocaleString()} • ${movesText}`;
      default: return `Score ${objective.target || 0} • ${movesText}`;
    }
  }

  _renderStars(count) {
    let html = '';
    for (let i = 0; i < 3; i++) {
      html += `<span class="lm-star ${i < count ? 'earned' : ''}">${i < count ? '⭐' : '☆'}</span>`;
    }
    return html;
  }

  _onLevelSelect(levelId) {
    gameEvents.emit('audio:play', { sound: 'buttonClick' });
    gameEvents.emit('level:select', { levelId });
  }

  _bindEvents() {
    this.scrollContainer = this.element.querySelector('.lm-scroll');

    // Mode selection buttons
    const modeButtons = this.element.querySelectorAll('.lm-mode-btn');
    modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        gameEvents.emit('audio:play', { sound: 'buttonClick' });
        const mode = btn.dataset.mode;
        if (mode === 'endless') {
          gameEvents.emit('game:startEndless');
        } else if (mode === 'timeAttack') {
          gameEvents.emit('game:startTimeAttack');
        }
      });
    });

    // Logout button
    this.element.addEventListener('click', (e) => {
      const logoutBtn = e.target.closest('#lm-logout-btn');
      if (logoutBtn) {
        gameEvents.emit('audio:play', { sound: 'buttonClick' });
        authManager.signOut();
      }
    });

    // Listen for progress updates to refresh
    gameEvents.on('level:complete', () => this.refresh());
  }

  _buildHTML() {
    return `
      <div class="lm-container">
        <div class="lm-header">
          <div class="lm-title-row">
            <h1 class="lm-title ui-gradient-text">FRUIT CRUSH 3D</h1>
            <button class="lm-settings-btn" aria-label="Settings">⚙️</button>
          </div>
          <div class="lm-stats"></div>
          <div class="lm-modes">
            <button class="lm-mode-btn" data-mode="endless">
              <span class="lm-mode-icon">♾️</span>
              <span class="lm-mode-label">Endless</span>
            </button>
            <button class="lm-mode-btn" data-mode="timeAttack">
              <span class="lm-mode-icon">⏱️</span>
              <span class="lm-mode-label">Time Attack</span>
            </button>
          </div>
        </div>
        <div class="lm-scroll"></div>
      </div>
    `;
  }

  _injectStyles() {
    if (document.getElementById('level-map-styles')) return;
    const style = document.createElement('style');
    style.id = 'level-map-styles';
    style.textContent = `
      .lm-container {
        width: 100%; height: 100%;
        display: flex; flex-direction: column;
        background: linear-gradient(180deg, #1a0b2e 0%, #0d0620 100%);
        overflow: hidden;
      }
      .lm-header {
        flex-shrink: 0;
        padding: 20px 24px 12px;
        padding-top: calc(20px + env(safe-area-inset-top, 0px));
        text-align: center;
      }
      .lm-title-row {
        display: flex; align-items: center; justify-content: center;
        gap: 12px; margin-bottom: 10px;
      }
      .lm-title {
        font-size: 28px; font-weight: 900;
        letter-spacing: 2px; margin: 0;
      }
      .lm-settings-btn {
        background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.15);
        border-radius: 12px; width: 42px; height: 42px;
        font-size: 20px; cursor: pointer;
        transition: transform 0.15s ease, background 0.15s ease;
        display: flex; align-items: center; justify-content: center;
      }
      .lm-settings-btn:hover { transform: scale(1.1); background: rgba(255,255,255,0.2); }
      
      .lm-stats {
        display: flex; gap: 10px; justify-content: center; align-items: center; margin-bottom: 12px;
        flex-wrap: wrap;
      }
      .lm-user-badge {
        display: flex; align-items: center; gap: 6px;
        background: linear-gradient(135deg, rgba(192,38,211,0.4), rgba(74,29,122,0.6));
        padding: 5px 14px; border-radius: 20px;
        border: 1.5px solid rgba(255,110,199,0.3);
        color: #fff; font-size: 13px; font-weight: 800;
      }
      .lm-user-icon { font-size: 14px; }
      .lm-user-name { color: #ffd166; max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

      .lm-logout-btn {
        background: rgba(255, 94, 135, 0.15); border: 1px solid rgba(255, 94, 135, 0.35);
        color: #ff8ca3; border-radius: 20px; padding: 5px 12px;
        font-size: 12px; font-weight: 700; cursor: pointer;
        transition: all 0.2s ease; font-family: inherit; outline: none;
      }
      .lm-logout-btn:hover {
        background: rgba(255, 94, 135, 0.35); color: #fff; border-color: #ff5e87;
        transform: translateY(-1px);
      }

      .lm-stat {
        display: flex; align-items: center; gap: 6px;
        background: rgba(40, 18, 78, 0.6);
        padding: 6px 14px; border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.1);
      }
      .lm-stat-icon { font-size: 16px; }
      .lm-stat-value { color: #fff; font-weight: 700; font-size: 15px; }

      .lm-modes {
        display: flex; gap: 10px; justify-content: center; margin-bottom: 6px;
      }
      .lm-mode-btn {
        display: flex; align-items: center; gap: 6px;
        background: rgba(255,255,255,0.08); border: 1.5px solid rgba(255,255,255,0.15);
        border-radius: 12px; padding: 8px 16px;
        color: #d9c7ff; font-size: 13px; font-weight: 600;
        cursor: pointer; transition: all 0.2s ease;
        font-family: inherit;
      }
      .lm-mode-btn:hover {
        background: rgba(255,255,255,0.15); color: #fff;
        transform: translateY(-1px);
      }
      .lm-mode-icon { font-size: 16px; }

      .lm-scroll {
        flex: 1; overflow-y: auto; overflow-x: hidden;
        padding: 20px 16px 100px;
        -webkit-overflow-scrolling: touch;
      }
      .lm-scroll::-webkit-scrollbar { width: 4px; }
      .lm-scroll::-webkit-scrollbar-track { background: transparent; }
      .lm-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }

      .lm-path {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px 10px;
        max-width: 420px; margin: 0 auto;
        padding: 0 8px;
      }

      .lm-group-banner {
        grid-column: 1 / -1;
        padding: 10px 14px;
        border-radius: 14px;
        margin: 12px 0 4px;
        text-align: center;
        font-size: 13px; font-weight: 800;
        box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        letter-spacing: 0.5px;
      }
      .lm-group-banner.unlocked {
        background: linear-gradient(135deg, rgba(74, 29, 122, 0.85), rgba(40, 18, 78, 0.95));
        border: 1.5px solid rgba(255, 209, 102, 0.45);
        color: #ffd166;
      }
      .lm-group-banner.locked {
        background: linear-gradient(135deg, rgba(60, 20, 35, 0.85), rgba(30, 10, 20, 0.95));
        border: 1.5px solid rgba(255, 94, 135, 0.45);
        color: #ff8ca3;
      }

      .lm-node {
        display: flex; flex-direction: column; align-items: center;
        cursor: pointer; transition: transform 0.2s ease;
        grid-column: calc(var(--col) + 1);
        animation: fadeIn 0.3s ease forwards;
      }
      .lm-node:hover { transform: scale(1.08); }
      .lm-node.locked { opacity: 0.45; cursor: not-allowed; pointer-events: none; }
      .lm-node.locked:hover { transform: none; }

      .lm-node-circle {
        width: 56px; height: 56px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 18px; font-weight: 800;
        position: relative;
        background: linear-gradient(145deg, #4a1d7a, #6b35a3);
        border: 3px solid rgba(255,255,255,0.2);
        box-shadow: 0 4px 16px rgba(106, 53, 163, 0.5);
        transition: all 0.3s ease;
      }
      .lm-node.completed .lm-node-circle {
        background: linear-gradient(145deg, #1a7a4a, #2ea368);
        border-color: rgba(110, 255, 199, 0.4);
        box-shadow: 0 4px 16px rgba(52, 211, 153, 0.4);
      }
      .lm-node.current .lm-node-circle {
        background: linear-gradient(145deg, #c026d3, #e855a0);
        border-color: rgba(255, 94, 135, 0.5);
        box-shadow: 0 4px 20px rgba(192, 38, 211, 0.6);
        animation: pulse 2s ease infinite;
      }

      .lm-node-num { color: #fff; z-index: 1; }
      .lm-lock {
        position: absolute; font-size: 20px;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
      }
      .lm-node.locked .lm-node-num { display: none; }

      .lm-pulse-ring {
        position: absolute; inset: -6px;
        border-radius: 50%;
        border: 2px solid rgba(255, 94, 135, 0.4);
        animation: pulse 2s ease infinite;
      }

      .lm-node-stars {
        display: flex; gap: 2px; margin-top: 4px;
      }
      .lm-star { font-size: 14px; transition: all 0.3s ease; }
      .lm-star.earned { filter: drop-shadow(0 1px 3px rgba(255,209,102,0.5)); }

      .lm-node-name {
        font-size: 10px; color: #c9a6ff;
        font-weight: 600; margin-top: 2px;
        text-align: center; max-width: 80px;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .lm-node-objective {
        font-size: 9px; color: rgba(255,255,255,0.5);
        margin-top: 1px;
      }

      .lm-connector { display: none; /* connectors are visual only, handled by grid layout */ }

      @media (max-width: 480px) {
        .lm-path { grid-template-columns: repeat(3, 1fr); gap: 12px 8px; }
        .lm-node { grid-column: auto; }
        .lm-title { font-size: 22px; }
        .lm-node-circle { width: 48px; height: 48px; font-size: 16px; }
        .lm-header { padding: 14px 16px 10px; }
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.06); }
      }
    `;
    document.head.appendChild(style);
  }
}

export { LevelMap };
export default LevelMap;
