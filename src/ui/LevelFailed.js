/**
 * LevelFailed — Defeat overlay shown when player runs out of moves or time.
 * Offers retry, watch ad for extra moves (placeholder), and quit options.
 */
import gameEvents from '../core/EventBus.js';

class LevelFailed {
  constructor() {
    this.element = null;
    this._created = false;
  }

  create() {
    if (this._created) return;
    this._created = true;
    this._injectStyles();

    this.element = document.createElement('div');
    this.element.id = 'level-failed-overlay';
    this.element.className = 'lf-overlay';
    this.element.innerHTML = `
      <div class="lf-backdrop"></div>
      <div class="lf-modal ui-panel">
        <div class="lf-emoji">😔</div>
        <h2 class="lf-title" id="lf-title">Out of Moves!</h2>
        <p class="lf-subtitle" id="lf-subtitle">You were so close!</p>
        <div class="lf-score-section">
          <div class="lf-score-row">
            <span class="lf-label">Your Score</span>
            <span class="lf-value" id="lf-score">0</span>
          </div>
          <div class="lf-score-row">
            <span class="lf-label">Target</span>
            <span class="lf-value" id="lf-target">0</span>
          </div>
        </div>
        <div class="lf-extra-moves" id="lf-extra-moves">
          <button class="ui-btn lf-ad-btn" id="lf-ad-btn">
            <span class="lf-ad-icon">🎬</span>
            <span class="lf-ad-text">Watch Ad for +5 Moves</span>
          </button>
        </div>
        <div class="lf-buttons">
          <button class="ui-btn ui-btn-secondary lf-btn" id="lf-retry-btn">↻ Try Again</button>
          <button class="ui-btn ui-btn-ghost lf-btn" id="lf-quit-btn">Back to Map</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.element);
    this._bindEvents();
  }

  /**
   * Show the level failed overlay.
   * @param {object} params
   * @param {number} params.levelId
   * @param {number} params.score
   * @param {number} params.target
   * @param {string} params.reason 'moves'|'time'|'objective'
   */
  show({ levelId, score, target, reason }) {
    if (!this.element) this.create();

    const titles = {
      moves: 'Out of Moves!',
      time: 'Time\'s Up!',
      objective: 'Objective Failed!'
    };
    const subtitles = {
      moves: 'You were so close!',
      time: 'Better luck next time!',
      objective: 'Try a different strategy!'
    };

    document.getElementById('lf-title').textContent = titles[reason] || 'Level Failed!';
    document.getElementById('lf-subtitle').textContent = subtitles[reason] || 'Keep trying!';
    document.getElementById('lf-score').textContent = score.toLocaleString();
    document.getElementById('lf-target').textContent = target.toLocaleString();
    document.getElementById('lf-retry-btn').dataset.levelId = levelId;

    // Show/hide extra moves button based on reason
    const extraMovesEl = document.getElementById('lf-extra-moves');
    extraMovesEl.style.display = reason === 'moves' ? 'block' : 'none';

    this.element.classList.add('visible');
    gameEvents.emit('audio:play', { sound: 'levelFailed' });
  }

  hide() {
    if (!this.element) return;
    this.element.classList.remove('visible');
  }

  _bindEvents() {
    document.getElementById('lf-retry-btn').addEventListener('click', () => {
      gameEvents.emit('audio:play', { sound: 'buttonClick' });
      const levelId = parseInt(document.getElementById('lf-retry-btn').dataset.levelId);
      this.hide();
      gameEvents.emit('level:restart', { levelId });
    });

    document.getElementById('lf-quit-btn').addEventListener('click', () => {
      gameEvents.emit('audio:play', { sound: 'buttonClick' });
      this.hide();
      gameEvents.emit('game:quit');
    });

    document.getElementById('lf-ad-btn').addEventListener('click', () => {
      gameEvents.emit('audio:play', { sound: 'buttonClick' });
      // Placeholder for ad integration — for now, just grant extra moves
      this.hide();
      gameEvents.emit('game:extraMoves', { count: 5 });
    });
  }

  _injectStyles() {
    if (document.getElementById('level-failed-styles')) return;
    const style = document.createElement('style');
    style.id = 'level-failed-styles';
    style.textContent = `
      .lf-overlay {
        position: fixed; inset: 0; z-index: 1000;
        display: none; align-items: center; justify-content: center;
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      .lf-overlay.visible { display: flex; }

      .lf-backdrop {
        position: absolute; inset: 0;
        background: rgba(10, 4, 20, 0.8);
        backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        animation: fadeIn 0.3s ease;
      }

      .lf-modal {
        position: relative; z-index: 1;
        padding: 32px 40px; text-align: center;
        max-width: 360px; width: 90%;
        animation: slideUp 0.5s ease;
      }

      .lf-emoji {
        font-size: 48px; margin-bottom: 8px;
        animation: lf-shake 0.5s ease 0.3s;
      }
      @keyframes lf-shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-8px); }
        75% { transform: translateX(8px); }
      }

      .lf-title {
        font-size: 26px; font-weight: 900;
        color: #ff5e87; margin-bottom: 4px;
      }
      .lf-subtitle {
        font-size: 14px; color: #c9a6ff; margin-bottom: 20px;
      }

      .lf-score-section { margin-bottom: 20px; }
      .lf-score-row {
        display: flex; justify-content: space-between;
        padding: 6px 0;
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .lf-label { color: #c9a6ff; font-size: 14px; font-weight: 600; }
      .lf-value { color: #fff; font-size: 14px; font-weight: 800; }

      .lf-extra-moves { margin-bottom: 16px; }
      .lf-ad-btn {
        width: 100%;
        background: linear-gradient(135deg, #ffd166, #ff9800);
        color: #4a2800;
        display: flex; align-items: center; justify-content: center; gap: 8px;
        box-shadow: 0 6px 18px rgba(255,152,0,0.4);
        padding: 14px 20px;
      }
      .lf-ad-icon { font-size: 20px; }
      .lf-ad-text { font-weight: 700; }

      .lf-buttons {
        display: flex; flex-direction: column; gap: 10px;
      }
      .lf-btn { width: 100%; }

      @media (max-width: 480px) {
        .lf-modal { padding: 24px 20px; }
        .lf-title { font-size: 22px; }
        .lf-emoji { font-size: 40px; }
      }
    `;
    document.head.appendChild(style);
  }
}

export { LevelFailed };
export default LevelFailed;
