import * as THREE from 'three';

export class BaseObstacle {
  constructor(row, col, config = {}) {
    this.row = row;
    this.col = col;
    this.hp = config.hp || 1;
    this.maxHp = this.hp;
    this.mesh = null;
    this.type = 'BASE';
  }

  createMesh() {
    // Override in subclasses
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(this.col, this.row, 0.5);
    return this.mesh;
  }

  canSwap() {
    return true; // Default can be swapped if it overlays a fruit
  }
  
  canMatch() {
    return true; // Can participate in matches
  }
  
  canFall() {
    return true;
  }

  onAdjacentMatch() {
    this.hp--;
    this.updateAppearance();
    return this.isDestroyed();
  }
  
  onDirectMatch() {
    this.hp--;
    this.updateAppearance();
    return this.isDestroyed();
  }

  isDestroyed() {
    return this.hp <= 0;
  }

  updateAppearance() {
    // Visual update based on HP
  }
  
  dispose() {
    if (this.mesh) {
      if (this.mesh.geometry) this.mesh.geometry.dispose();
      if (this.mesh.material) {
        if (Array.isArray(this.mesh.material)) {
          this.mesh.material.forEach(m => m.dispose());
        } else {
          this.mesh.material.dispose();
        }
      }
      if (this.mesh.parent) {
        this.mesh.parent.remove(this.mesh);
      }
    }
  }
}

export class IceObstacle extends BaseObstacle {
  constructor(row, col) {
    super(row, col, { hp: 2 });
    this.type = 'ICE';
  }

  createMesh() {
    const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x88ccff,
      transparent: true,
      opacity: 0.6,
      transmission: 0.8,
      roughness: 0.2,
      metalness: 0.1,
      thickness: 0.5
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(this.col, this.row, 0); // Z=0 since it overlays
    return this.mesh;
  }
  
  canSwap() {
    return true;
  }
  
  updateAppearance() {
    if (this.mesh && this.mesh.material) {
      if (this.hp === 1) {
        this.mesh.material.opacity = 0.3;
        // Could also add cracks texture here
      }
    }
  }
}

export class LockedObstacle extends BaseObstacle {
  constructor(row, col) {
    super(row, col, { hp: 1 });
    this.type = 'LOCKED';
  }

  createMesh() {
    // Simple representation of a lock/chain
    const geometry = new THREE.TorusGeometry(0.4, 0.1, 16, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.8,
      roughness: 0.2
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(this.col, this.row, 0.5);
    return this.mesh;
  }

  canSwap() {
    return false; // Cannot swap locked fruits
  }
  
  onAdjacentMatch() {
    // Locked fruits only unlock if they are part of the match or adjacent match unlocks them
    this.hp--;
    return this.isDestroyed();
  }
}

export class BarrierObstacle extends BaseObstacle {
  constructor(row, col) {
    super(row, col, { hp: 9999 }); // Indestructible
    this.type = 'BARRIER';
  }

  createMesh() {
    const geometry = new THREE.BoxGeometry(0.95, 0.95, 0.95);
    const material = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.9,
      metalness: 0.1
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(this.col, this.row, 0);
    return this.mesh;
  }

  canSwap() { return false; }
  canMatch() { return false; }
  canFall() { return false; }
  onAdjacentMatch() { return false; }
}

export class StoneObstacle extends BaseObstacle {
  constructor(row, col) {
    super(row, col, { hp: 2 });
    this.type = 'STONE';
  }

  createMesh() {
    const geometry = new THREE.DodecahedronGeometry(0.45);
    const material = new THREE.MeshStandardMaterial({
      color: 0x777777,
      roughness: 0.8,
      metalness: 0.2
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(this.col, this.row, 0);
    return this.mesh;
  }

  canSwap() { return false; }
  canMatch() { return false; }
  canFall() { return true; } // Stones might fall depending on game rules
  
  updateAppearance() {
    if (this.mesh && this.hp === 1) {
      // Simulate crack by changing color or scaling slightly
      this.mesh.scale.set(0.8, 0.8, 0.8);
      this.mesh.material.color.setHex(0x555555);
    }
  }
}

export const ObstacleTypes = {
  ICE: IceObstacle,
  LOCKED: LockedObstacle,
  BARRIER: BarrierObstacle,
  STONE: StoneObstacle
};

export class ObstacleManager {
  constructor(scene) {
    this.scene = scene;
    this.obstacles = [];
  }
  
  createObstacle(type, row, col) {
    const ObstacleClass = ObstacleTypes[type];
    if (!ObstacleClass) {
      console.warn(`Unknown obstacle type: ${type}`);
      return null;
    }
    
    const obstacle = new ObstacleClass(row, col);
    const mesh = obstacle.createMesh();
    if (this.scene) {
      this.scene.add(mesh);
    }
    this.obstacles.push(obstacle);
    return obstacle;
  }
  
  placeObstaclesFromConfig(config) {
    if (!config || !config.obstacles) return;
    
    config.obstacles.forEach(obs => {
      this.createObstacle(obs.type, obs.row, obs.col);
    });
  }
  
  getObstacleAt(row, col) {
    return this.obstacles.find(o => o.row === row && o.col === col);
  }
  
  handleAdjacentMatch(row, col) {
    const adjacentPositions = [
      {r: row-1, c: col},
      {r: row+1, c: col},
      {r: row, c: col-1},
      {r: row, c: col+1}
    ];
    
    let destroyedCount = 0;
    
    adjacentPositions.forEach(pos => {
      const obstacle = this.getObstacleAt(pos.r, pos.c);
      if (obstacle) {
        const destroyed = obstacle.onAdjacentMatch();
        if (destroyed) {
          this.removeObstacle(obstacle);
          destroyedCount++;
        }
      }
    });
    
    return destroyedCount;
  }
  
  removeObstacle(obstacle) {
    obstacle.dispose();
    this.obstacles = this.obstacles.filter(o => o !== obstacle);
  }
  
  clearAll() {
    this.obstacles.forEach(o => o.dispose());
    this.obstacles = [];
  }
}

export default ObstacleManager;
