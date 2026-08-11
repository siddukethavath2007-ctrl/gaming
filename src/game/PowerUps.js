import * as THREE from 'three';

export const PowerUpTypes = {
  ROW_BOMB: 'row_bomb',
  COL_BOMB: 'col_bomb',
  AREA_BOMB: 'area_bomb',
  RAINBOW: 'rainbow'
};

/**
 * Detects special match patterns to determine if a power-up should be created.
 * @param {Array} matchedCells - Array of {row, col} objects representing the match.
 * @param {Array} grid - The 2D grid of fruits.
 * @returns {string|null} The type of power-up, or null if no power-up.
 */
export function detectPowerUp(matchedCells, grid) {
  if (!matchedCells || matchedCells.length < 4) return null;

  const rows = matchedCells.map(c => c.row);
  const cols = matchedCells.map(c => c.col);
  
  const minRow = Math.min(...rows);
  const maxRow = Math.max(...rows);
  const minCol = Math.min(...cols);
  const maxCol = Math.max(...cols);
  
  const rowSpan = maxRow - minRow + 1;
  const colSpan = maxCol - minCol + 1;

  if (matchedCells.length >= 5) {
    if (rowSpan >= 5 || colSpan >= 5) {
      return PowerUpTypes.RAINBOW;
    }
  }

  // T or L shape
  if (rowSpan >= 3 && colSpan >= 3) {
    return PowerUpTypes.AREA_BOMB;
  }

  // Match 4
  if (rowSpan === 4) {
    return PowerUpTypes.COL_BOMB;
  }
  if (colSpan === 4) {
    return PowerUpTypes.ROW_BOMB;
  }

  return null;
}

/**
 * Creates a visually distinct mesh for a power-up fruit.
 * @param {string} type - The power-up type.
 * @param {string} fruitType - The base fruit type it corresponds to.
 * @returns {THREE.Mesh} The power-up mesh.
 */
export function createPowerUpMesh(type, fruitType) {
  const geometry = new THREE.SphereGeometry(0.4, 32, 32);
  let material;

  switch (type) {
    case PowerUpTypes.ROW_BOMB:
      // Fruit with horizontal glowing stripe
      material = new THREE.MeshPhongMaterial({ color: 0xff4444, emissive: 0xaa0000, shininess: 100 });
      break;
    case PowerUpTypes.COL_BOMB:
      // Vertical glowing stripe
      material = new THREE.MeshPhongMaterial({ color: 0x44ff44, emissive: 0x00aa00, shininess: 100 });
      break;
    case PowerUpTypes.AREA_BOMB:
      // Pulsing glow (visualized via emissive color)
      material = new THREE.MeshPhongMaterial({ color: 0x4444ff, emissive: 0x0000aa, shininess: 100 });
      break;
    case PowerUpTypes.RAINBOW:
      // White/rainbow shimmering sphere
      material = new THREE.MeshPhongMaterial({ 
        color: 0xffffff,
        emissive: 0xaaaaaa,
        transparent: true,
        opacity: 0.9,
        shininess: 150
      });
      break;
    default:
      material = new THREE.MeshPhongMaterial({ color: 0xcccccc });
  }

  const mesh = new THREE.Mesh(geometry, material);
  mesh.userData.powerUpType = type;
  mesh.userData.fruitType = fruitType;
  return mesh;
}

/**
 * Activates a power-up and calculates which cells to clear.
 * @param {string} powerUp - The power-up type.
 * @param {number} row - The row of the activated power-up.
 * @param {number} col - The column of the activated power-up.
 * @param {Array} grid - The 2D grid of fruits.
 * @param {THREE.Scene} scene - The Three.js scene (for visual effects if needed).
 * @returns {Array} Array of {row, col} to be cleared.
 */
export function activatePowerUp(powerUp, row, col, grid, scene) {
  const clearedCells = [];
  const rows = grid.length;
  const cols = grid[0].length;

  if (powerUp === PowerUpTypes.ROW_BOMB) {
    for (let c = 0; c < cols; c++) {
      clearedCells.push({ row, col: c });
    }
  } else if (powerUp === PowerUpTypes.COL_BOMB) {
    for (let r = 0; r < rows; r++) {
      clearedCells.push({ row: r, col });
    }
  } else if (powerUp === PowerUpTypes.AREA_BOMB) {
    for (let r = Math.max(0, row - 1); r <= Math.min(rows - 1, row + 1); r++) {
      for (let c = Math.max(0, col - 1); c <= Math.min(cols - 1, col + 1); c++) {
        clearedCells.push({ row: r, col: c });
      }
    }
  } else if (powerUp === PowerUpTypes.RAINBOW) {
    // Clear all fruits of a particular type (simulated here with the type at the origin)
    const targetType = grid[row][col]?.userData?.fruitType || grid[row][col]?.type;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = grid[r][c];
        if (cell && (cell.type === targetType || cell.userData?.fruitType === targetType)) {
          clearedCells.push({ row: r, col: c });
        }
      }
    }
  }

  return clearedCells;
}

export default {
  PowerUpTypes,
  detectPowerUp,
  createPowerUpMesh,
  activatePowerUp
};
