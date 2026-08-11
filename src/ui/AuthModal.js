/**
 * AuthModal — Modern Glassmorphic Login & Register Screen
 * Handles Player Authentication (Sign In & Register) before game starts.
 */
import uiManager from './UIManager.js';
import authManager from '../auth/AuthManager.js';

class AuthModal {
  constructor() {
    this.element = null;
    this._created = false;
    this.mode = 'signin'; // 'signin' | 'signup'
  }

  create() {
    if (this._created) return;
    this._created = true;
    this._injectStyles();

    this.element = document.createElement('div');
    this.element.id = 'auth-modal-screen';
    this.element.className = 'ui-screen';
    this.element.innerHTML = this._buildHTML();

    uiManager.registerScreen('auth', this.element);
    this._bindEvents();
  }

  show(defaultMode = 'signin') {
    if (!this.element) this.create();
    this.setMode(defaultMode);
    this._clearAlert();
    uiManager.showScreen('auth');
  }

  setMode(mode) {
    this.mode = mode;
    const tabSignin = this.element.querySelector('#auth-tab-signin');
    const tabSignup = this.element.querySelector('#auth-tab-signup');
    const titleEl = this.element.querySelector('#auth-card-title');
    const submitBtn = this.element.querySelector('#auth-submit-btn');

    if (mode === 'signin') {
      tabSignin?.classList.add('active');
      tabSignup?.classList.remove('active');
      if (titleEl) titleEl.textContent = 'Welcome Back!';
      if (submitBtn) submitBtn.innerHTML = '🔑 Sign In ▶';
    } else {
      tabSignup?.classList.add('active');
      tabSignin?.classList.remove('active');
      if (titleEl) titleEl.textContent = 'Create Player Account';
      if (submitBtn) submitBtn.innerHTML = '✨ Register Account ▶';
    }
  }

  _showAlert(msg, type = 'error') {
    const banner = this.element.querySelector('#auth-alert-banner');
    if (banner) {
      banner.textContent = msg;
      banner.className = `auth-alert ${type}`;
      banner.style.display = 'block';
    }
  }

  _clearAlert() {
    const banner = this.element.querySelector('#auth-alert-banner');
    if (banner) {
      banner.style.display = 'none';
      banner.textContent = '';
    }
  }

  _buildHTML() {
    return `
      <div class="auth-modal-backdrop">
        <div class="auth-modal-card ui-panel">
          <div class="auth-brand">
            <span class="auth-brand-icon">🍎🍊🍇</span>
            <h1 class="auth-brand-title">Fruit Crush 3D</h1>
          </div>

          <div class="auth-tabs">
            <button type="button" class="auth-tab active" id="auth-tab-signin">🔑 Sign In</button>
            <button type="button" class="auth-tab" id="auth-tab-signup">✨ Register</button>
          </div>

          <h2 class="auth-card-title" id="auth-card-title">Welcome Back!</h2>
          <div id="auth-alert-banner" class="auth-alert" style="display:none;"></div>

          <form id="auth-form" class="auth-form-body">
            <div class="auth-field">
              <label for="auth-username-input">User ID / Username</label>
              <input 
                type="text" 
                id="auth-username-input" 
                class="auth-input" 
                placeholder="e.g. Alex123" 
                maxlength="20" 
                required 
                autocomplete="username" 
              />
            </div>

            <div class="auth-field">
              <label for="auth-password-input">Password</label>
              <div class="auth-password-wrapper">
                <input 
                  type="password" 
                  id="auth-password-input" 
                  class="auth-input" 
                  placeholder="At least 4 characters" 
                  minlength="4" 
                  required 
                  autocomplete="current-password" 
                />
                <button type="button" id="auth-toggle-pwd" class="auth-pwd-toggle" title="Toggle password visibility">👁️</button>
              </div>
            </div>

            <button type="submit" id="auth-submit-btn" class="ui-btn ui-btn-primary auth-btn">
              🔑 Sign In ▶
            </button>
          </form>
        </div>
      </div>
    `;
  }

  _bindEvents() {
    const tabSignin = this.element.querySelector('#auth-tab-signin');
    const tabSignup = this.element.querySelector('#auth-tab-signup');
    const form = this.element.querySelector('#auth-form');
    const pwdInput = this.element.querySelector('#auth-password-input');
    const pwdToggle = this.element.querySelector('#auth-toggle-pwd');

    tabSignin?.addEventListener('click', () => this.setMode('signin'));
    tabSignup?.addEventListener('click', () => this.setMode('signup'));

    pwdToggle?.addEventListener('click', () => {
      if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        pwdToggle.textContent = '🔒';
      } else {
        pwdInput.type = 'password';
        pwdToggle.textContent = '👁️';
      }
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = this.element.querySelector('#auth-username-input').value;
      const password = pwdInput.value;

      this._clearAlert();

      let result;
      if (this.mode === 'signin') {
        result = authManager.signIn(username, password);
      } else {
        result = authManager.signUp(username, password);
      }

      if (result.success) {
        this._showAlert(`Welcome, ${result.user.username}! Loading your game...`, 'success');
      } else {
        this._showAlert(result.message, 'error');
      }
    });
  }

  _injectStyles() {
    if (document.getElementById('auth-modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'auth-modal-styles';
    style.textContent = `
      #auth-modal-screen {
        position: fixed; inset: 0; z-index: 2000;
        display: none; align-items: center; justify-content: center;
        background: radial-gradient(circle at center, #2e1052 0%, #0d0418 100%);
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      #auth-modal-screen.active {
        display: flex !important;
        opacity: 1 !important;
      }

      .auth-modal-backdrop {
        width: 100%; height: 100%;
        display: flex; align-items: center; justify-content: center;
        padding: 20px; box-sizing: border-box;
      }

      .auth-modal-card {
        width: 100%; max-width: 400px;
        padding: 32px 28px; text-align: center;
        position: relative; border-radius: 24px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.7);
        animation: slideUp 0.4s ease;
      }

      .auth-brand { margin-bottom: 16px; }
      .auth-brand-icon { font-size: 36px; display: block; margin-bottom: 4px; }
      .auth-brand-title {
        font-size: 26px; font-weight: 900; letter-spacing: 1px;
        background: linear-gradient(90deg, #ff6ec7, #ffd166, #6effc7);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .auth-tabs {
        display: flex; gap: 8px; background: rgba(255,255,255,0.06);
        padding: 4px; border-radius: 14px; margin-bottom: 20px;
      }
      .auth-tab {
        flex: 1; padding: 10px; border: none; background: none;
        color: rgba(255,255,255,0.6); font-size: 14px; font-weight: 700;
        border-radius: 10px; cursor: pointer; transition: all 0.2s ease;
        font-family: inherit;
      }
      .auth-tab:hover { color: #fff; }
      .auth-tab.active {
        background: linear-gradient(135deg, #c026d3, #ff5e87);
        color: #fff; box-shadow: 0 4px 12px rgba(192,38,211,0.4);
      }

      .auth-card-title {
        font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 16px;
      }

      .auth-alert {
        padding: 10px 14px; border-radius: 12px; font-size: 13px; font-weight: 700;
        margin-bottom: 16px; text-align: left; line-height: 1.4;
      }
      .auth-alert.error {
        background: rgba(255, 94, 135, 0.2); border: 1px solid rgba(255, 94, 135, 0.4);
        color: #ff8ca3;
      }
      .auth-alert.success {
        background: rgba(110, 255, 199, 0.2); border: 1px solid rgba(110, 255, 199, 0.4);
        color: #6effc7;
      }

      .auth-form-body {
        display: flex; flex-direction: column; gap: 14px; text-align: left;
      }
      .auth-field label {
        display: block; font-size: 12px; font-weight: 700; color: #ffd166;
        margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;
      }
      .auth-input {
        width: 100%; padding: 12px 14px;
        border-radius: 12px; border: 1.5px solid rgba(255,255,255,0.2);
        background: rgba(255,255,255,0.08); color: #fff;
        font-size: 15px; font-weight: 700; outline: none;
        transition: border-color 0.2s ease, background 0.2s ease;
        font-family: inherit; box-sizing: border-box;
      }
      .auth-input:focus {
        border-color: #6effc7; background: rgba(255,255,255,0.15);
      }

      .auth-password-wrapper {
        position: relative; display: flex; align-items: center;
      }
      .auth-pwd-toggle {
        position: absolute; right: 10px; background: none; border: none;
        font-size: 16px; cursor: pointer; opacity: 0.7; transition: opacity 0.2s ease;
      }
      .auth-pwd-toggle:hover { opacity: 1; }

      .auth-btn {
        width: 100%; padding: 14px; font-size: 16px; font-weight: 800;
        margin-top: 8px; border-radius: 14px;
      }
    `;
    document.head.appendChild(style);
  }
}

export { AuthModal };
export default AuthModal;
