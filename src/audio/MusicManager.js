/**
 * Procedural Music Manager for Fruit Crush 3D
 */

export class MusicManager {
  constructor() {
    this.ctx = null;
    this.destination = null;
    this.isPlaying = false;
    this.tempo = 120;
    this.intensity = 1;
    this.schedulerTimer = null;
    this.nextNoteTime = 0;
    this.currentBeat = 0;
    
    // Pentatonic scale frequencies (C major pentatonic: C, D, E, G, A)
    // Octave 3 and 4
    this.scale = [130.81, 146.83, 164.81, 196.00, 220.00, 261.63, 293.66, 329.63, 392.00, 440.00];
    this.chordRoots = [130.81, 174.61, 196.00, 130.81]; // C3, F3, G3, C3
  }

  start(ctx, destination) {
    if (this.isPlaying) return;
    this.ctx = ctx;
    this.destination = destination;
    this.isPlaying = true;
    this.currentBeat = 0;
    this.nextNoteTime = this.ctx.currentTime + 0.1;
    this.schedule();
  }

  stop() {
    this.isPlaying = false;
    if (this.schedulerTimer) {
      clearTimeout(this.schedulerTimer);
      this.schedulerTimer = null;
    }
  }

  setIntensity(level) {
    this.intensity = Math.max(0, Math.min(3, level));
  }

  setTempo(bpm) {
    this.tempo = bpm;
  }

  schedule() {
    const secondsPerBeat = 60.0 / this.tempo;
    
    while (this.nextNoteTime < this.ctx.currentTime + 0.1) {
      this.playBeat(this.currentBeat, this.nextNoteTime, secondsPerBeat);
      this.nextNoteTime += secondsPerBeat * 0.5; // Eighth notes
      this.currentBeat = (this.currentBeat + 1) % 32; // 4 bars of 4/4
    }

    if (this.isPlaying) {
      this.schedulerTimer = setTimeout(() => this.schedule(), 25);
    }
  }

  playBeat(beat, time, beatDuration) {
    const measure = Math.floor(beat / 8);
    const root = this.chordRoots[measure % this.chordRoots.length];

    // Layer 0: Pad (Intensity >= 0)
    if (this.intensity >= 0 && beat % 8 === 0) {
      this.playPad(root, time, beatDuration * 4);
    }

    // Layer 1: Bass (Intensity >= 1)
    if (this.intensity >= 1) {
      if (beat % 2 === 0) { // On beat (quarter notes)
        this.playBass(root, time, beatDuration);
      } else if (Math.random() > 0.8) { // Syncopation
        this.playBass(root, time, beatDuration * 0.5);
      }
    }

    // Layer 2: Percussion (Intensity >= 2)
    if (this.intensity >= 2) {
      if (beat % 2 === 0) {
        this.playKick(time);
      }
      if (beat % 2 === 1) {
        this.playHiHat(time);
      }
    }

    // Layer 3: Melody (Intensity >= 3)
    if (this.intensity >= 3) {
      if (Math.random() > 0.4) {
        const noteFreq = this.scale[Math.floor(Math.random() * this.scale.length)];
        this.playMelody(noteFreq, time, beatDuration * 0.5);
      }
    }
  }

  playPad(rootFreq, time, duration) {
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    
    // Play root and fifth
    osc.frequency.value = rootFreq;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, time);
    filter.frequency.exponentialRampToValueAtTime(600, time + duration / 2);
    filter.frequency.exponentialRampToValueAtTime(200, time + duration);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.1, time + duration * 0.1);
    gain.gain.linearRampToValueAtTime(0.05, time + duration * 0.8);
    gain.gain.linearRampToValueAtTime(0, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  playBass(freq, time, duration) {
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq / 2; // Drop an octave

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.2, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration - 0.05);
    gain.gain.linearRampToValueAtTime(0, time + duration);

    osc.connect(gain);
    gain.connect(this.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  playMelody(freq, time, duration) {
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = freq;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.15, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration - 0.02);
    gain.gain.linearRampToValueAtTime(0, time + duration);

    osc.connect(gain);
    gain.connect(this.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  playKick(time) {
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.2);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.3, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

    osc.connect(gain);
    gain.connect(this.destination);

    osc.start(time);
    osc.stop(time + 0.2);
  }

  playHiHat(time) {
    const bufferSize = this.ctx.sampleRate * 0.1;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 7000;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.1, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.destination);

    noise.start(time);
  }
}

export default MusicManager;
