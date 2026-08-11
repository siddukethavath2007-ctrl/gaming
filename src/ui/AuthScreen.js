/**
 * AuthScreen — Player ID / Login Screen
 * Asks player for Login ID or select from previous accounts.
 */
import uiManager from './UIManager.js';
import gameEvents from '../core/EventBus.js';

class AuthScreen {
  constructor(levelManager) {
    /** @type {import('../levels/LevelManager.js').LevelManager} */
    this.levelManager = levelManager;
    this.element = null;
    this._created = false;
  }

  create() {
    if (this._created) return;
    this._created = true;
    this._injectStyles();

    this.element = document.createElement('div');
    this.element.id = 'auth-screen';
    this.element.className = 'ui-screen';
    this.element.innerHTML = this._buildHTML();

    uiManager.registerScreen('auth', this.element);
    this._bindEvents();
  }

  show() {
    if (!this.element) this.create();
    this.refresh();
    uiManager.showScreen('auth');
  }

  refresh() {
    const accounts = this.levelManager.getSavedAccounts();
    const lastId = this.levelManager.currentPlayerId || '';
    const input = document.getElementById('auth-input');
    if (input) input.value = lastId;

    const listEl = document.getElementById('auth-accounts-list');
    if (listEl) {
      if (accounts.length === 0) {
        listEl.style.display = 'none';
      } else {
        listEl.style.display = 'block';
        listEl.innerHTML = `
          <div class="auth-accounts-title">Saved Profiles:</div>
          <div class="auth-accounts-chips">
            ${accounts.map(acc => `
              <button class="auth-account-chip ${acc === lastId ? 'active' : ''}" data-player="${acc}">
                👤 ${acc}
              </button>
            `).join('')}
          </div>
        `;
      }
    }
  }

  _buildHTML() {
    return `
      <div class="auth-container">
        <div class="auth-card ui-panel">
          <div class="auth-icon">🍎🍊🍇</div>
          <h1 class="auth-title">Fruit Crush 3D</h1>
          <p class="auth-subtitle">Enter your Player ID / Name to save your levels and high scores!</p>
          
          <form id="auth-form" class="auth-form">
            <div class="auth-input-group">
              <label for="auth-input">Player Login ID / Name</label>
              <input type="text" id="auth-input" class="auth-input" placeholder="e.g. Player 1" maxlength="16" required autocomplete="off" />
            </div>
            
            <button type="submit" class="ui-btn ui-btn-primary auth-submit-btn">
              🚀 Start Playing
            </button>
          </form>

          <div id="auth-accounts-list" class="auth-accounts-list"></div>
        </div>
      </div>
    `;
  }

  _bindEvents() {
    const form = this.element.querySelector('#auth-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('auth-input');
        const playerId = input ? input.value.trim() : 'Player 1';
        if (!playerId) return;

        gameEvents.emit('audio:play', { sound: 'buttonClick' });
        this.levelManager.setPlayerId(playerId);
        gameEvents.emit('auth:success', { playerId });
      });
    }

    this.element.addEventListener('click', (e) => {
      const chip = e.target.closest('.auth-account-chip');
      if (chip) {
        const player = chip.dataset.player;
        if (player) {
          gameEvents.emit('audio:play', { sound: 'buttonClick' });
          const input = document.getElementById('auth-input');
          if (input) input.value = player;
          this.levelManager.setPlayerId(player);
          gameEvents.emit('auth:success', { playerId: player });
        }
      }
    });
  }

  _injectStyles() {
    if (document.getElementById('auth-screen-styles')) return;
    const style = document.createElement('style');
    style.id = 'auth-screen-styles';
    style.textContent = `
      #auth-screen {
        width: 100%; height: 100%;
        display: none; align-items: center; justify-content: center;
        background: radial-gradient(circle at center, #2e1052 0%, #110524 100%);
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      #auth-screen.active {
        display: flex !important;
        opacity: 1 !important;
      }
      .auth-container {
        width: 100%; max-width: 420px; padding: 20px;
      }
      .auth-card {
        padding: 36px 28px; text-align: center;
        position: relative; overflow: hidden;
      }
      .auth-icon { font-size: 42px; margin-bottom: 8px; }
      .auth-title {
        font-size: 28px; font-weight: 900; margin-bottom: 6px;
        background: linear-gradient(90deg, #ff6ec7, #ffd166, #6effc7);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .auth-subtitle {
        font-size: 13px; color: #c9a6ff; font-weight: 600; margin-bottom: 24px;
        line-height: 1.4;
      }
      .auth-form {
        display: flex; flex-direction: column; gap: 16px;
      }
      .auth-input-group {
        text-align: left;
      }
      .auth-input-group label {
        display: block; font-size: 12px; font-weight: 700; color: #ffd166;
        margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;
      }
      .auth-input {
        width: 100%; padding: 14px 16px;
        border-radius: 12px; border: 2px solid rgba(255,255,255,0.2);
        background: rgba(255,255,255,0.08); color: #fff;
        font-size: 16px; font-weight: 700; outline: none;
        transition: border-color 0.2s ease, background 0.2s ease;
        font-family: inherit;
      }
      .auth-input:focus {
        border-color: #6effc7; background: rgba(255,255,255,0.15);
      }
      .auth-submit-btn {
        width: 100%; padding: 14px; font-size: 16px; font-weight: 800;
        margin-top: 6px;
      }
      .auth-accounts-list {
        margin-top: 24px; padding-top: 18px;
        border-top: 1px solid rgba(255,255,255,0.1);
        text-align: left;
      }
      .auth-accounts-title {
        font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.5);
        margin-bottom: 10px;
      }
      .auth-accounts-chips {
        display: flex; flex-wrap: wrap; gap: 8px;
      }
      .auth-account-chip {
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        border-radius: 20px; padding: 6px 14px; color: #fff;
        font-size: 13px; font-weight: 700; cursor: pointer;
        transition: all 0.2s ease; font-family: inherit;
      }
      .auth-account-chip:hover {
        background: rgba(110,255,199,0.2); border-color: #6effc7;
      }
      .auth-account-chip.active {
        background: linear-gradient(135deg, #c026d3, #ff5e87);
        border-color: transparent;
      }
    `;
    document.head.appendChild(style);
  }
}

export { AuthScreen };
export default AuthScreen;
