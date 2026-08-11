/**
 * LevelComplete — Victory overlay shown when a level is completed.
 * Shows stars earned, score breakdown, and next level option.
 */
import gameEvents from '../core/EventBus.js';

class LevelComplete {
  constructor() {
    this.element = null;
    this._created = false;
  }

  create() {
    if (this._created) return;
    this._created = true;
    this._injectStyles();

    this.element = document.createElement('div');
    this.element.id = 'level-complete-overlay';
    this.element.className = 'lc-overlay';
    this.element.innerHTML = `
      <div class="lc-backdrop"></div>
      <div class="lc-modal ui-panel">
        <div class="lc-confetti" id="lc-confetti"></div>
        <div class="lc-badge">🎉 GREAT JOB!</div>
        <h2 class="lc-title" id="lc-title">You're Done!</h2>
        <div class="lc-subtitle" id="lc-subtitle">Level Completed</div>
        <div class="lc-stars" id="lc-stars"></div>
        <div class="lc-score-section">
          <div class="lc-score-row">
            <span class="lc-score-label">Score</span>
            <span class="lc-score-value" id="lc-score">0</span>
          </div>
          <div class="lc-score-row">
            <span class="lc-score-label">Best Combo</span>
            <span class="lc-score-value" id="lc-combo">x1</span>
          </div>
          <div class="lc-score-row highlight">
            <span class="lc-score-label">High Score</span>
            <span class="lc-score-value" id="lc-highscore">0</span>
          </div>
        </div>
        <div class="lc-new-best" id="lc-new-best">🏆 New Best Score!</div>
        <div class="lc-buttons">
          <button class="ui-btn ui-btn-ghost lc-btn" id="lc-replay-btn">↻ Replay</button>
          <button class="ui-btn ui-btn-primary lc-btn" id="lc-next-btn">Next Level ▶</button>
        </div>
        <button class="lc-map-btn" id="lc-map-btn">Back to Map</button>
      </div>
    `;

    document.body.appendChild(this.element);
    this._bindEvents();
  }

  /**
   * Show the level complete overlay.
   * @param {object} params
   * @param {number} params.levelId
   * @param {number} params.score
   * @param {number} params.stars Stars earned (1-3)
   * @param {number} params.highScore
   * @param {boolean} params.isNewBest
   * @param {number} params.bestCombo
   * @param {boolean} params.hasNextLevel
   */
  show({ levelId, score = 0, stars = 3, highScore = 0, isNewBest = false, bestCombo = 1, hasNextLevel = true }) {
    if (!this.element) this.create();

    const displayScore = (score ?? 0).toLocaleString();
    const displayHighScore = (highScore || score || 0).toLocaleString();

    // Set score values
    document.getElementById('lc-subtitle').textContent = `Level ${levelId || 1} Completed!`;
    document.getElementById('lc-score').textContent = displayScore;
    document.getElementById('lc-combo').textContent = `x${bestCombo || 1}`;
    document.getElementById('lc-highscore').textContent = displayHighScore;

    // New best indicator
    const newBestEl = document.getElementById('lc-new-best');
    newBestEl.style.display = isNewBest ? 'block' : 'none';

    // Next level button
    const nextBtn = document.getElementById('lc-next-btn');
    if (hasNextLevel) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.dataset.nextLevel = levelId + 1;
      nextBtn.innerHTML = `Next Level ${levelId + 1} ▶`;
    } else {
      nextBtn.style.display = 'none';
    }

    // Replay button stores current level
    const replayBtn = document.getElementById('lc-replay-btn');
    if (replayBtn) {
      replayBtn.dataset.levelId = levelId;
      replayBtn.innerHTML = `↻ Replay`;
    }

    // Show overlay
    this.element.classList.add('visible');

    // Animate stars with delay
    this._animateStars(stars);

    // Generate confetti
    this._generateConfetti();

    // Play sound
    gameEvents.emit('audio:play', { sound: 'levelComplete' });
  }

  hide() {
    if (!this.element) return;
    this.element.classList.remove('visible');
    // Clear confetti
    const confetti = document.getElementById('lc-confetti');
    if (confetti) confetti.innerHTML = '';
  }

  _animateStars(count) {
    const container = document.getElementById('lc-stars');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < 3; i++) {
      const star = document.createElement('div');
      star.className = 'lc-star';
      star.textContent = '⭐';
      if (i < count) {
        star.classList.add('earned');
        star.style.animationDelay = `${0.3 + i * 0.3}s`;
        // Play star sound with delay
        setTimeout(() => {
          gameEvents.emit('audio:play', { sound: 'starEarned' });
        }, 300 + i * 300);
      }
      container.appendChild(star);
    }
  }

  _generateConfetti() {
    const container = document.getElementById('lc-confetti');
    if (!container) return;
    container.innerHTML = '';

    const colors = ['#ff6ec7', '#ffd166', '#6effc7', '#ff5e87', '#c026d3', '#34d399'];
    const shapes = ['●', '■', '▲', '★', '◆'];

    for (let i = 0; i < 40; i++) {
      const piece = document.createElement('div');
      piece.className = 'lc-confetti-piece';
      piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
      piece.style.color = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.animationDelay = `${Math.random() * 1.5}s`;
      piece.style.animationDuration = `${1.5 + Math.random() * 2}s`;
      piece.style.fontSize = `${10 + Math.random() * 14}px`;
      container.appendChild(piece);
    }
  }

  _bindEvents() {
    document.getElementById('lc-replay-btn').addEventListener('click', () => {
      gameEvents.emit('audio:play', { sound: 'buttonClick' });
      const levelId = parseInt(document.getElementById('lc-replay-btn').dataset.levelId);
      this.hide();
      gameEvents.emit('level:restart', { levelId });
    });

    document.getElementById('lc-next-btn').addEventListener('click', () => {
      gameEvents.emit('audio:play', { sound: 'buttonClick' });
      const nextLevel = parseInt(document.getElementById('lc-next-btn').dataset.nextLevel);
      this.hide();
      gameEvents.emit('level:select', { levelId: nextLevel });
    });

    document.getElementById('lc-map-btn').addEventListener('click', () => {
      gameEvents.emit('audio:play', { sound: 'buttonClick' });
      this.hide();
      gameEvents.emit('game:quit');
    });
  }

  _injectStyles() {
    if (document.getElementById('level-complete-styles')) return;
    const style = document.createElement('style');
    style.id = 'level-complete-styles';
    style.textContent = `
      .lc-overlay {
        position: fixed; inset: 0; z-index: 1000;
        display: none; align-items: center; justify-content: center;
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      .lc-overlay.visible { display: flex; }

      .lc-backdrop {
        position: absolute; inset: 0;
        background: rgba(10, 4, 20, 0.75);
        backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        animation: fadeIn 0.3s ease;
      }

      .lc-modal {
        position: relative; z-index: 1;
        padding: 36px 44px; text-align: center;
        max-width: 380px; width: 90%;
        animation: slideUp 0.5s ease;
        overflow: hidden;
      }

      .lc-confetti {
        position: absolute; inset: 0;
        pointer-events: none; overflow: hidden;
      }
      .lc-confetti-piece {
        position: absolute; top: -20px;
        animation: confettiFall linear forwards;
        pointer-events: none; opacity: 0.8;
      }
      @keyframes confettiFall {
        0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
        10% { opacity: 0.8; }
        100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
      }

      .lc-badge {
        font-size: 14px; font-weight: 800; text-transform: uppercase;
        color: #6effc7; letter-spacing: 1.5px; margin-bottom: 4px;
        text-shadow: 0 0 12px rgba(110, 255, 199, 0.6);
        animation: pulse 1.5s ease infinite;
      }

      .lc-title {
        font-size: 32px; font-weight: 900; margin-bottom: 2px;
        background: linear-gradient(90deg, #ffd166, #ff6ec7, #6effc7);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .lc-subtitle {
        font-size: 14px; color: #c9a6ff; font-weight: 600;
        margin-bottom: 16px;
      }

      .lc-stars {
        display: flex; gap: 8px; justify-content: center;
        margin-bottom: 20px; height: 48px;
      }
      .lc-star {
        font-size: 40px;
        filter: grayscale(1) brightness(0.3);
        transition: filter 0.3s ease;
        transform: scale(0.5);
      }
      .lc-star.earned {
        filter: none;
        animation: starBounce 0.6s ease forwards;
      }
      @keyframes starBounce {
        0% { transform: scale(0.2) rotate(-45deg); filter: brightness(2); }
        50% { transform: scale(1.4) rotate(10deg); }
        70% { transform: scale(0.9) rotate(-5deg); }
        100% { transform: scale(1) rotate(0deg); filter: none; }
      }

      .lc-score-section {
        margin-bottom: 16px;
      }
      .lc-score-row {
        display: flex; justify-content: space-between;
        padding: 6px 0;
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .lc-score-row.highlight {
        border-bottom: none;
        margin-top: 4px; padding-top: 8px;
        border-top: 2px solid rgba(255,209,102,0.3);
      }
      .lc-score-label { color: #c9a6ff; font-size: 14px; font-weight: 600; }
      .lc-score-value { color: #fff; font-size: 14px; font-weight: 800; }
      .lc-score-row.highlight .lc-score-value { color: #ffd166; font-size: 16px; }

      .lc-new-best {
        display: none;
        font-size: 18px; font-weight: 800; color: #ffd166;
        margin-bottom: 12px;
        animation: pulse 1s ease infinite;
        text-shadow: 0 2px 8px rgba(255,209,102,0.5);
      }

      .lc-buttons {
        display: flex; gap: 12px; justify-content: center;
        margin-top: 18px; margin-bottom: 12px; width: 100%;
      }
      .lc-btn {
        flex: 1; padding: 14px 18px; font-size: 15px; font-weight: 800;
        border-radius: 14px; display: flex; align-items: center; justify-content: center;
        gap: 6px; box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }

      .lc-map-btn {
        background: none; border: none; color: rgba(255,255,255,0.6);
        font-size: 13px; font-weight: 600; cursor: pointer;
        transition: color 0.2s ease; margin-top: 4px;
        font-family: inherit;
      }
      .lc-map-btn:hover { color: #fff; text-decoration: underline; }

      @media (max-width: 480px) {
        .lc-modal { padding: 28px 20px; }
        .lc-title { font-size: 26px; }
        .lc-star { font-size: 34px; }
        .lc-buttons { flex-direction: column; gap: 10px; }
        .lc-btn { width: 100%; padding: 14px; }
      }
    `;
    document.head.appendChild(style);
  }
}

export { LevelComplete };
export default LevelComplete;
