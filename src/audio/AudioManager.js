/**
 * Audio Manager for Fruit Crush 3D
 * Handles Web Audio API setup, volume control, and saving/restoring settings.
 */
import { createSoundLibrary } from './SoundEffects.js';
import MusicManager from './MusicManager.js';

class AudioManager {
  constructor() {
    this.context = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.musicGain = null;
    
    this.sounds = {};
    this.music = new MusicManager();
    
    this.settings = {
      masterVolume: 1.0,
      sfxVolume: 1.0,
      musicVolume: 0.8,
      muted: false
    };
    
    this.initialized = false;
  }

  /**
   * Initialize audio context and nodes. Handles autoplay policy.
   */
  init() {
    if (this.initialized) return;

    this._loadSettings();

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext();

    // Master Gain
    this.masterGain = this.context.createGain();
    this.masterGain.connect(this.context.destination);

    // SFX Gain
    this.sfxGain = this.context.createGain();
    this.sfxGain.connect(this.masterGain);

    // Music Gain
    this.musicGain = this.context.createGain();
    this.musicGain.connect(this.masterGain);

    // Create sound library
    this.sounds = createSoundLibrary(this.context, this.sfxGain);

    this._applySettings();

    // Handle autoplay policy
    const resumeAudio = () => {
      if (this.context.state === 'suspended') {
        this.context.resume();
      }
      document.removeEventListener('click', resumeAudio);
      document.removeEventListener('touchstart', resumeAudio);
      document.removeEventListener('keydown', resumeAudio);
    };

    document.addEventListener('click', resumeAudio);
    document.addEventListener('touchstart', resumeAudio);
    document.addEventListener('keydown', resumeAudio);

    this.initialized = true;
  }

  _loadSettings() {
    try {
      const saved = localStorage.getItem('fruitCrush_audioSettings');
      if (saved) {
        this.settings = { ...this.settings, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Failed to load audio settings', e);
    }
  }

  _saveSettings() {
    try {
      localStorage.setItem('fruitCrush_audioSettings', JSON.stringify(this.settings));
    } catch (e) {
      console.warn('Failed to save audio settings', e);
    }
  }

  _applySettings() {
    if (!this.initialized) return;
    
    const masterMultiplier = this.settings.muted ? 0 : 1;
    
    // Use setValueAtTime to avoid clicks
    const now = this.context.currentTime;
    this.masterGain.gain.setValueAtTime(this.settings.masterVolume * masterMultiplier, now);
    this.sfxGain.gain.setValueAtTime(this.settings.sfxVolume, now);
    this.musicGain.gain.setValueAtTime(this.settings.musicVolume, now);
  }

  playSFX(name, options = {}) {
    if (!this.initialized) this.init();
    
    // Ensure context is running
    if (this.context && this.context.state === 'suspended') {
      this.context.resume();
    }

    if (this.sounds[name]) {
      this.sounds[name](options);
    } else {
      console.warn(`Sound effect '${name}' not found`);
    }
  }

  playMusic(name = 'bgm') {
    if (!this.initialized) this.init();
    
    if (this.context && this.context.state === 'suspended') {
      this.context.resume();
    }

    this.music.start(this.context, this.musicGain);
  }

  stopMusic() {
    if (this.music) {
      this.music.stop();
    }
  }

  setMasterVolume(v) {
    this.settings.masterVolume = Math.max(0, Math.min(1, v));
    this._applySettings();
    this._saveSettings();
  }

  setSFXVolume(v) {
    this.settings.sfxVolume = Math.max(0, Math.min(1, v));
    this._applySettings();
    this._saveSettings();
  }

  setMusicVolume(v) {
    this.settings.musicVolume = Math.max(0, Math.min(1, v));
    this._applySettings();
    this._saveSettings();
  }

  toggleMute() {
    this.settings.muted = !this.settings.muted;
    this._applySettings();
    this._saveSettings();
    return this.settings.muted;
  }

  isMuted() {
    return this.settings.muted;
  }

  getSettings() {
    return { ...this.settings };
  }
}

const audioManager = new AudioManager();
export default audioManager;
export { AudioManager };
