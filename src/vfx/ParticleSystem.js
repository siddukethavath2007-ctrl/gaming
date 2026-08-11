import * as THREE from 'three';

export class ParticleSystem {
  /**
   * Initialize a particle system that supports multiple particle effects.
   * @param {THREE.Scene} scene - The Three.js scene to add the particle system to.
   * @param {number} maxParticles - The maximum number of simultaneous particles.
   */
  constructor(scene, maxParticles = 500) {
    this.scene = scene;
    this.maxParticles = maxParticles;
    this.particles = [];

    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(this.maxParticles * 3);
    this.colors = new Float32Array(this.maxParticles * 3);
    this.sizes = new Float32Array(this.maxParticles);
    this.alphas = new Float32Array(this.maxParticles);

    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));
    this.geometry.setAttribute('alpha', new THREE.BufferAttribute(this.alphas, 1));

    // Custom shader material for sizing and alpha blending per particle
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute float alpha;
        attribute vec3 color;
        varying vec4 vColor;
        void main() {
          vColor = vec4(color, alpha);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec4 vColor;
        void main() {
          // Circular particle shape
          vec2 xy = gl_PointCoord.xy - vec2(0.5);
          float ll = length(xy);
          if (ll > 0.5) discard;
          gl_FragColor = vColor;
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.points);
  }

  _spawnParticle(pos, vel, color, life, size) {
    if (this.particles.length >= this.maxParticles) return;
    this.particles.push({
      position: pos.clone(),
      velocity: vel.clone(),
      color: new THREE.Color(color),
      life,
      maxLife: life,
      size
    });
  }

  /**
   * Explosion of particles outward from a point.
   */
  burst(position, color, count = 20) {
    for (let i = 0; i < count; i++) {
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
      );
      this._spawnParticle(position, vel, color, 500 + Math.random() * 500, 0.1 + Math.random() * 0.1);
    }
  }

  /**
   * Particle trail between two points.
   */
  trail(startPos, endPos, color, duration = 500) {
    const dist = startPos.distanceTo(endPos);
    const count = Math.min(20, Math.floor(dist * 5));
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const pos = new THREE.Vector3().lerpVectors(startPos, endPos, t);
      const vel = new THREE.Vector3((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5));
      this._spawnParticle(pos, vel, color, duration * t, 0.05);
    }
  }

  /**
   * Confetti-like particles falling from top.
   */
  shower(color, duration = 2000) {
    for (let i = 0; i < 50; i++) {
      const pos = new THREE.Vector3((Math.random() - 0.5) * 10, 5 + Math.random() * 5, (Math.random() - 0.5) * 10);
      const vel = new THREE.Vector3((Math.random() - 0.5), -Math.random() * 3 - 1, (Math.random() - 0.5));
      this._spawnParticle(pos, vel, color, duration, 0.1);
    }
  }

  /**
   * Twinkling sparkles around a point.
   */
  sparkle(position, color, duration = 1000) {
    for (let i = 0; i < 15; i++) {
      const pos = position.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 0.8, 
        (Math.random() - 0.5) * 0.8, 
        (Math.random() - 0.5) * 0.8
      ));
      const vel = new THREE.Vector3(0, Math.random() * 0.5, 0);
      this._spawnParticle(pos, vel, color, duration, 0.08);
    }
  }

  /**
   * Expanding ring of particles.
   */
  shockwave(position, radius, color) {
    const count = 40;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      // Moving outwards
      const vel = new THREE.Vector3(Math.cos(angle) * 4, 0, Math.sin(angle) * 4);
      this._spawnParticle(position, vel, color, 600, 0.15);
    }
  }

  /**
   * Update all active particles.
   * @param {number} deltaTime - Time since last frame in milliseconds.
   */
  update(deltaTime) {
    let aliveCount = 0;
    const dt = deltaTime / 1000;

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= deltaTime;
      
      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      p.position.addScaledVector(p.velocity, dt);

      // Simple gravity effect
      p.velocity.y -= 2 * dt;

      this.positions[aliveCount * 3] = p.position.x;
      this.positions[aliveCount * 3 + 1] = p.position.y;
      this.positions[aliveCount * 3 + 2] = p.position.z;

      this.colors[aliveCount * 3] = p.color.r;
      this.colors[aliveCount * 3 + 1] = p.color.g;
      this.colors[aliveCount * 3 + 2] = p.color.b;

      this.sizes[aliveCount] = p.size;
      this.alphas[aliveCount] = p.life / p.maxLife;

      aliveCount++;
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
    this.geometry.attributes.size.needsUpdate = true;
    this.geometry.attributes.alpha.needsUpdate = true;
    
    this.geometry.setDrawRange(0, aliveCount);
  }
}

export default ParticleSystem;
