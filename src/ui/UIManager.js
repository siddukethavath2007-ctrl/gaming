/**
 * UIManager — Central coordinator for all game UI screens.
 * Handles screen transitions, navigation, and overlay management.
 */

/** @typedef {'menu'|'levelMap'|'gameplay'|'levelComplete'|'levelFailed'|'settings'} ScreenName */

class UIManager {
  constructor() {
    /** @type {ScreenName} */
    this.currentScreen = 'menu';
    this.previousScreen = null;
    this.screens = {};
    this.overlays = {};
    this._listeners = {};
    this._container = null;
  }

  /**
   * Initialize the UI manager — call once after DOM is ready.
   */
  init() {
    this._container = document.getElementById('ui-layer') || this._createContainer();
    this._injectBaseStyles();
  }

  _createContainer() {
    const el = document.createElement('div');
    el.id = 'ui-layer';
    document.body.appendChild(el);
    return el;
  }

  _injectBaseStyles() {
    if (document.getElementById('ui-manager-styles')) return;
    const style = document.createElement('style');
    style.id = 'ui-manager-styles';
    style.textContent = `
      #ui-layer {
        position: fixed; inset: 0; z-index: 50;
        pointer-events: none;
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      #ui-layer > .ui-screen {
        position: absolute; inset: 0;
        display: none;
        pointer-events: auto;
        opacity: 0;
        transition: opacity 0.35s ease;
      }
      #ui-layer > .ui-screen.active {
        display: flex;
        opacity: 1;
      }
      #ui-layer > .ui-screen.fade-out {
        opacity: 0;
      }
      #ui-layer > .ui-overlay {
        position: absolute; inset: 0;
        display: none;
        pointer-events: auto;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 60;
      }
      #ui-layer > .ui-overlay.visible {
        display: flex;
        opacity: 1;
      }

      /* Shared button styles */
      .ui-btn {
        border: none; cursor: pointer;
        border-radius: 14px;
        padding: 12px 28px;
        font-size: 16px; font-weight: 700;
        letter-spacing: 0.5px;
        transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
        position: relative; overflow: hidden;
        font-family: inherit;
      }
      .ui-btn:hover { transform: translateY(-2px); filter: brightness(1.1); }
      .ui-btn:active { transform: translateY(0); filter: brightness(0.95); }
      .ui-btn-primary {
        background: linear-gradient(135deg, #6effc7, #34d399);
        color: #063;
        box-shadow: 0 6px 18px rgba(52,211,153,0.4);
      }
      .ui-btn-secondary {
        background: linear-gradient(135deg, #ff5e87, #c026d3);
        color: #fff;
        box-shadow: 0 6px 18px rgba(192,38,211,0.4);
      }
      .ui-btn-ghost {
        background: rgba(255,255,255,0.1);
        color: #fff;
        border: 2px solid rgba(255,255,255,0.2);
        box-shadow: none;
      }
      .ui-btn-ghost:hover {
        background: rgba(255,255,255,0.2);
      }

      /* Shared panel/card styles */
      .ui-panel {
        background: rgba(40, 18, 78, 0.85);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 2px solid rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        color: #fff;
      }

      .ui-gradient-text {
        background: linear-gradient(90deg, #ff6ec7, #ffd166, #6effc7);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* Star display */
      .ui-stars { display: flex; gap: 4px; justify-content: center; }
      .ui-star {
        font-size: 28px; transition: transform 0.3s ease, filter 0.3s ease;
        filter: grayscale(1) brightness(0.4);
      }
      .ui-star.earned {
        filter: grayscale(0) brightness(1) drop-shadow(0 2px 6px rgba(255,209,102,0.6));
        animation: starPop 0.4s ease forwards;
      }

      @keyframes starPop {
        0% { transform: scale(0.3) rotate(-30deg); }
        50% { transform: scale(1.3) rotate(10deg); }
        100% { transform: scale(1) rotate(0); }
      }
      @keyframes slideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Register a screen element.
   * @param {ScreenName} name
   * @param {HTMLElement} element
   */
  registerScreen(name, element) {
    element.classList.add('ui-screen');
    this._container.appendChild(element);
    this.screens[name] = element;
  }

  /**
   * Register an overlay element.
   * @param {string} name
   * @param {HTMLElement} element
   */
  registerOverlay(name, element) {
    element.classList.add('ui-overlay');
    this._container.appendChild(element);
    this.overlays[name] = element;
  }

  /**
   * Navigate to a screen with fade transition.
   * @param {ScreenName} name
   * @param {object} [data] Data to pass to the screen
   */
  showScreen(name, data) {
    // Hide current screen
    if (this.currentScreen && this.screens[this.currentScreen]) {
      const current = this.screens[this.currentScreen];
      current.classList.add('fade-out');
      setTimeout(() => {
        current.classList.remove('active', 'fade-out');
      }, 350);
    }

    // Hide all screens if navigating to gameplay
    if (name === 'gameplay') {
      Object.values(this.screens).forEach(screenEl => {
        screenEl.classList.add('fade-out');
        screenEl.classList.remove('active');
      });
    }

    this.previousScreen = this.currentScreen;
    this.currentScreen = name;

    const screen = this.screens[name];
    if (screen) {
      requestAnimationFrame(() => {
        screen.classList.add('active');
        requestAnimationFrame(() => {
          screen.classList.remove('fade-out');
        });
      });
    }

    this.emit('screenChange', { screen: name, data });
  }

  /**
   * Show an overlay on top of current screen.
   * @param {string} name
   * @param {object} [data]
   */
  showOverlay(name, data) {
    const overlay = this.overlays[name];
    if (!overlay) return;
    requestAnimationFrame(() => {
      overlay.classList.add('visible');
    });
    this.emit('overlayShow', { overlay: name, data });
  }

  /**
   * Hide an overlay.
   * @param {string} name
   */
  hideOverlay(name) {
    const overlay = this.overlays[name];
    if (!overlay) return;
    overlay.classList.remove('visible');
    this.emit('overlayHide', { overlay: name });
  }

  /**
   * Hide all overlays.
   */
  hideAllOverlays() {
    Object.keys(this.overlays).forEach(name => this.hideOverlay(name));
  }

  /**
   * Go back to previous screen.
   */
  goBack() {
    if (this.previousScreen) {
      this.showScreen(this.previousScreen);
    }
  }

  // --- Simple event emitter ---
  on(event, callback) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(callback);
    return () => this.off(event, callback);
  }

  off(event, callback) {
    if (!this._listeners[event]) return;
    this._listeners[event] = this._listeners[event].filter(cb => cb !== callback);
  }

  emit(event, data) {
    if (!this._listeners[event]) return;
    this._listeners[event].forEach(cb => cb(data));
  }
}

/** Singleton instance */
const uiManager = new UIManager();

export { UIManager };
export default uiManager;
