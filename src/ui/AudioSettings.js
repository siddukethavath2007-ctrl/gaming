import audioManager from '../audio/AudioManager.js';

/**
 * Audio Settings UI Component for Fruit Crush 3D
 */
export class AudioSettings {
  constructor() {
    this.container = null;
    this.isVisible = false;
    this.changeCallback = null;
  }

  create() {
    if (this.container) return;

    // Create container
    this.container = document.createElement('div');
    this.container.className = 'audio-settings-container';
    this.container.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -40%);
      width: 320px;
      background: rgba(40, 18, 78, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 2px solid rgba(255, 255, 255, 0.15);
      border-radius: 20px;
      padding: 24px;
      color: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      z-index: 1000;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Audio Settings';
    title.style.cssText = `
      margin: 0 0 20px 0;
      text-align: center;
      font-size: 24px;
      text-transform: uppercase;
      letter-spacing: 2px;
      background: linear-gradient(90deg, #ff6ec7, #ffd166);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `;
    this.container.appendChild(title);

    const settings = audioManager.getSettings();

    // Controls
    this._createSlider('Master Volume', 'master', settings.masterVolume * 100, (v) => {
      audioManager.setMasterVolume(v / 100);
      this._notifyChange();
    });

    this._createSlider('Music Volume', 'music', settings.musicVolume * 100, (v) => {
      audioManager.setMusicVolume(v / 100);
      this._notifyChange();
    });

    this._createSlider('SFX Volume', 'sfx', settings.sfxVolume * 100, (v) => {
      audioManager.setSFXVolume(v / 100);
      this._notifyChange();
    });

    // Mute Toggle
    const muteBtn = document.createElement('button');
    muteBtn.textContent = settings.muted ? 'Unmute All' : 'Mute All';
    muteBtn.style.cssText = `
      width: 100%;
      padding: 12px;
      margin-top: 20px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
    `;
    muteBtn.onmouseover = () => muteBtn.style.background = 'rgba(255, 255, 255, 0.2)';
    muteBtn.onmouseout = () => muteBtn.style.background = 'rgba(255, 255, 255, 0.1)';
    muteBtn.onclick = () => {
      const isMuted = audioManager.toggleMute();
      muteBtn.textContent = isMuted ? 'Unmute All' : 'Mute All';
      this._notifyChange();
      audioManager.playSFX('buttonClick');
    };
    this.container.appendChild(muteBtn);

    // Close Button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.cssText = `
      width: 100%;
      padding: 12px;
      margin-top: 10px;
      background: linear-gradient(90deg, #ff6ec7, #ffd166);
      border: none;
      border-radius: 10px;
      color: #1a0b2e;
      font-weight: bold;
      cursor: pointer;
      transition: opacity 0.2s;
    `;
    closeBtn.onmouseover = () => closeBtn.style.opacity = '0.9';
    closeBtn.onmouseout = () => closeBtn.style.opacity = '1';
    closeBtn.onclick = () => {
      this.hide();
      audioManager.playSFX('buttonClick');
    };
    this.container.appendChild(closeBtn);

    document.body.appendChild(this.container);

    // Inject custom slider CSS
    if (!document.getElementById('audio-settings-styles')) {
      const style = document.createElement('style');
      style.id = 'audio-settings-styles';
      style.textContent = `
        .audio-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.2);
          outline: none;
        }
        .audio-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6effc7;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(110, 255, 199, 0.5);
        }
        .audio-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6effc7;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(110, 255, 199, 0.5);
        }
      `;
      document.head.appendChild(style);
    }
  }

  _createSlider(label, id, value, onChange) {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'margin-bottom: 15px;';

    const lbl = document.createElement('div');
    lbl.textContent = label;
    lbl.style.cssText = 'margin-bottom: 8px; font-size: 14px; color: #e0e0e0;';
    wrap.appendChild(lbl);

    const input = document.createElement('input');
    input.type = 'range';
    input.min = '0';
    input.max = '100';
    input.value = value;
    input.className = 'audio-slider';
    
    input.oninput = (e) => {
      onChange(e.target.value);
    };
    
    input.onchange = () => {
      audioManager.playSFX('select');
    };

    wrap.appendChild(input);
    this.container.appendChild(wrap);
  }

  show() {
    if (!this.container) this.create();
    this.container.style.visibility = 'visible';
    this.container.style.opacity = '1';
    this.container.style.transform = 'translate(-50%, -50%)';
    this.isVisible = true;
  }

  hide() {
    if (!this.container) return;
    this.container.style.opacity = '0';
    this.container.style.transform = 'translate(-50%, -40%)';
    
    setTimeout(() => {
      if (!this.isVisible) {
        this.container.style.visibility = 'hidden';
      }
    }, 300);
    this.isVisible = false;
  }

  toggle() {
    if (this.isVisible) this.hide();
    else this.show();
  }

  onSettingsChange(callback) {
    this.changeCallback = callback;
  }

  _notifyChange() {
    if (this.changeCallback) {
      this.changeCallback(audioManager.getSettings());
    }
  }
}

const audioSettings = new AudioSettings();
export default audioSettings;
