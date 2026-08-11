/**
 * Procedural Sound Effects Library using Web Audio API
 */

/**
 * Creates a library of sound playing functions.
 * @param {AudioContext} ctx 
 * @param {AudioNode} destination 
 * @returns {Object} Dictionary of sound playback functions
 */
export function createSoundLibrary(ctx, destination) {
  
  // Helper to create simple envelope
  const applyEnvelope = (param, now, attack, decay, sustain, release, level) => {
    param.setValueAtTime(0, now);
    param.linearRampToValueAtTime(level, now + attack);
    param.linearRampToValueAtTime(sustain * level, now + attack + decay);
    param.setValueAtTime(sustain * level, now + attack + decay); // Hold
    param.linearRampToValueAtTime(0, now + attack + decay + release);
  };

  // Helper for white noise
  const createNoise = (duration) => {
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    return noiseSource;
  };

  const playOsc = (type, freq1, freq2, attack, decay, sustain, release, level = 1) => {
    const now = ctx.currentTime;
    const duration = attack + decay + release;
    
    const osc = ctx.createOscillator();
    osc.type = type;
    
    osc.frequency.setValueAtTime(freq1, now);
    if (freq2 !== freq1) {
      osc.frequency.exponentialRampToValueAtTime(freq2, now + duration);
    }
    
    const gain = ctx.createGain();
    applyEnvelope(gain.gain, now, attack, decay, sustain, release, level);
    
    osc.connect(gain);
    gain.connect(destination);
    
    osc.start(now);
    osc.stop(now + duration);
  };

  const library = {
    swap: () => {
      const now = ctx.currentTime;
      const noise = createNoise(0.1);
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(2000, now + 0.1);
      
      const gain = ctx.createGain();
      applyEnvelope(gain.gain, now, 0.01, 0.05, 0.5, 0.04, 0.3);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(destination);
      
      noise.start(now);
    },
    
    match3: () => {
      playOsc('sine', 300, 600, 0.01, 0.05, 0.5, 0.09, 0.5);
    },
    
    match4: () => {
      const now = ctx.currentTime;
      playOsc('sine', 400, 800, 0.01, 0.1, 0.5, 0.09, 0.6);
      
      // Echo
      setTimeout(() => {
        playOsc('sine', 400, 800, 0.01, 0.1, 0.5, 0.09, 0.2);
      }, 100);
    },
    
    match5: () => {
      // Harmonic chord
      playOsc('sine', 440, 880, 0.02, 0.1, 0.6, 0.18, 0.4);
      playOsc('sine', 554.37, 1108.73, 0.02, 0.1, 0.6, 0.18, 0.4);
      playOsc('sine', 659.25, 1318.51, 0.02, 0.1, 0.6, 0.18, 0.4);
    },

    invalid: () => {
      playOsc('sine', 80, 60, 0.01, 0.05, 0.2, 0.04, 0.7);
    },

    select: () => {
      const now = ctx.currentTime;
      const noise = createNoise(0.05);
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 1500;
      
      const gain = ctx.createGain();
      applyEnvelope(gain.gain, now, 0.005, 0.02, 0.2, 0.025, 0.2);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(destination);
      
      noise.start(now);
    },

    powerup: () => {
      const now = ctx.currentTime;
      const duration = 0.5;
      
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(2000, now + duration);
      
      // LFO for vibrato
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 20;
      
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 50;
      
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      
      const gain = ctx.createGain();
      applyEnvelope(gain.gain, now, 0.1, 0.2, 0.8, 0.2, 0.3);
      
      osc.connect(gain);
      gain.connect(destination);
      
      osc.start(now);
      lfo.start(now);
      osc.stop(now + duration);
      lfo.stop(now + duration);
    },

    bomb: () => {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = 'square';
      osc.frequency.setValueAtTime(60, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.4);
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, now);
      filter.frequency.exponentialRampToValueAtTime(100, now + 0.4);

      const distortion = ctx.createWaveShaper();
      const amount = 40;
      const curve = new Float32Array(44100);
      for (let i = 0; i < 44100; ++i) {
        const x = i * 2 / 44100 - 1;
        curve[i] = (3 + amount) * x * 20 * (Math.PI / 180) / (Math.PI + amount * Math.abs(x));
      }
      distortion.curve = curve;
      distortion.oversample = '4x';
      
      const gain = ctx.createGain();
      applyEnvelope(gain.gain, now, 0.01, 0.1, 0.3, 0.29, 0.8);
      
      osc.connect(filter);
      filter.connect(distortion);
      distortion.connect(gain);
      gain.connect(destination);
      
      osc.start(now);
      osc.stop(now + 0.4);
    },

    levelComplete: () => {
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const dur = 0.2;
      
      notes.forEach((freq, i) => {
        const t = now + i * dur;
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        
        const gain = ctx.createGain();
        applyEnvelope(gain.gain, t, 0.05, 0.1, 0.5, 0.05, 0.4);
        
        osc.connect(gain);
        gain.connect(destination);
        
        osc.start(t);
        osc.stop(t + dur);
      });
    },

    levelFailed: () => {
      const now = ctx.currentTime;
      const notes = [659.25, 554.37, 493.88]; // E5, C#5, B4
      const dur = 0.2;
      
      notes.forEach((freq, i) => {
        const t = now + i * dur;
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        
        const gain = ctx.createGain();
        applyEnvelope(gain.gain, t, 0.05, 0.1, 0.5, 0.05, 0.4);
        
        osc.connect(gain);
        gain.connect(destination);
        
        osc.start(t);
        osc.stop(t + dur);
      });
    },

    starEarned: () => {
      playOsc('sine', 1200, 1200, 0.01, 0.05, 0.2, 0.14, 0.4);
    },

    buttonClick: () => {
      const now = ctx.currentTime;
      const noise = createNoise(0.03);
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1000;
      
      const gain = ctx.createGain();
      applyEnvelope(gain.gain, now, 0.005, 0.01, 0.5, 0.015, 0.3);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(destination);
      
      noise.start(now);
    }
  };

  // Generate combo1 through combo8
  for (let i = 1; i <= 8; i++) {
    library[`combo${i}`] = () => {
      const baseFreq = 300 + (i * 100);
      playOsc('sine', baseFreq, baseFreq * 2, 0.01, 0.05, 0.5, 0.09, 0.5);
    };
  }

  return library;
}

export default createSoundLibrary;
