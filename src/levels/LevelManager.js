import levelsData from './levelsData.js';
import authManager from '../auth/AuthManager.js';

class SimpleEventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }
  
  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }
  
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(...args));
  }
}

export class LevelManager extends SimpleEventEmitter {
  constructor() {
    super();
    this.levels = Array.isArray(levelsData) ? levelsData : [];
    this.progress = this.loadProgress();
    this.currentLevelId = null;
    this.currentLevelConfig = null;
    this.state = null;
  }

  async loadLevels() {
    return this.levels;
  }

  loadProgress() {
    return authManager.loadUserProgress();
  }

  saveProgress() {
    authManager.saveUserProgress(this.progress);
  }

  reloadUserProgress() {
    this.progress = this.loadProgress();
  }

  getCurrentLevel() {
    return this.currentLevelConfig;
  }

  startLevel(id) {
    const config = this.levels.find(l => l.id === id);
    if (!config) throw new Error(`Level ${id} not found`);
    
    if (!this.isLevelUnlocked(id)) {
      throw new Error(`Level ${id} is not unlocked`);
    }

    this.currentLevelId = id;
    this.currentLevelConfig = config;
    this.state = {
      score: 0,
      movesUsed: 0,
      timeUsed: 0,
      collected: {},
      obstaclesCleared: 0,
      startTime: Date.now()
    };
    
    this.emit('levelStart', config);
    return config;
  }

  completeLevel(score, movesUsed, timeUsed) {
    if (!this.currentLevelConfig) return null;
    
    const config = this.currentLevelConfig;
    const isSuccess = this.checkObjectiveCompletion(score, timeUsed);
    
    if (isSuccess) {
      const stars = this.getStars(score, config);
      
      const prevData = this.progress.completedLevels[config.id] || { stars: 0, highscore: 0 };
      const newHighscore = Math.max(prevData.highscore, score);
      const isNewBest = score > prevData.highscore;
      const newStars = Math.max(prevData.stars, stars);
      
      this.progress.completedLevels[config.id] = {
        stars: newStars,
        score: score,
        highscore: newHighscore
      };
      
      if (stars > prevData.stars) {
        this.emit('starEarned', stars);
      }
      
      // Unlock next level
      const nextLevel = this.levels.find(l => l.id === config.id + 1);
      if (nextLevel && !this.progress.unlockedLevels.includes(nextLevel.id)) {
        this.progress.unlockedLevels.push(nextLevel.id);
      }
      
      this.saveProgress();
      this.emit('levelComplete', {
        id: config.id,
        score,
        stars,
        highscore: newHighscore,
        movesUsed,
        timeUsed
      });
      
      return { success: true, stars, highScore: newHighscore, newHighscore, isNewBest };
    } else {
      this.emit('levelFailed', {
        id: config.id,
        score,
        movesUsed,
        timeUsed
      });
      return { success: false, stars: 0 };
    }
  }

  checkObjectiveCompletion(score, timeUsed) {
    const obj = this.currentLevelConfig.objective;
    
    if (this.currentLevelConfig.timeLimit && timeUsed > this.currentLevelConfig.timeLimit) {
      return false;
    }
    
    if (this.currentLevelConfig.moves && this.state.movesUsed > this.currentLevelConfig.moves) {
      return false;
    }

    switch (obj.type) {
      case 'score':
        return score >= obj.target;
      case 'collect':
        return (this.state.collected[obj.fruitType] || 0) >= obj.target;
      case 'clearIce':
        // Assuming obstacles logic updates this.state.obstaclesCleared
        return this.state.obstaclesCleared >= obj.target;
      case 'timed':
        return score >= obj.target && timeUsed <= this.currentLevelConfig.timeLimit;
      default:
        return true;
    }
  }
  
  updateState(updates) {
    if (!this.state) return;
    if (updates.score) this.state.score += updates.score;
    if (updates.moves) this.state.movesUsed += updates.moves;
    if (updates.collected) {
      const type = updates.collected;
      this.state.collected[type] = (this.state.collected[type] || 0) + 1;
    }
    if (updates.obstacleCleared) {
      this.state.obstaclesCleared += 1;
    }
  }

  getStars(score, levelConfig) {
    let stars = 0;
    for (let i = 0; i < levelConfig.stars.length; i++) {
      if (score >= levelConfig.stars[i]) {
        stars = i + 1;
      }
    }
    return Math.min(stars, 3);
  }

  /**
   * Calculate total stars earned in a specific 5-level group (groupIndex 1-based).
   * Group 1: Levels 1-5, Group 2: Levels 6-10, Group 3: Levels 11-15...
   * @param {number} groupIndex
   * @returns {number}
   */
  getGroupStars(groupIndex) {
    const startLevel = (groupIndex - 1) * 5 + 1;
    const endLevel = groupIndex * 5;
    let total = 0;
    for (let id = startLevel; id <= endLevel; id++) {
      if (this.progress && this.progress.completedLevels && this.progress.completedLevels[id]) {
        total += (this.progress.completedLevels[id].stars || 0);
      }
    }
    return total;
  }

  /**
   * Check if a 5-level group is unlocked.
   * Group 1 is unlocked by default.
   * Group G (G > 1) is unlocked if all preceding groups (1 to G-1) earned >= 10 stars each.
   * @param {number} groupIndex
   * @returns {boolean}
   */
  isGroupUnlocked(groupIndex) {
    if (groupIndex <= 1) return true;
    for (let g = 1; g < groupIndex; g++) {
      if (this.getGroupStars(g) < 10) {
        return false;
      }
    }
    return true;
  }

  /**
   * Check if a specific level is unlocked.
   * Level is unlocked if its group is unlocked AND (it is first in group OR in unlockedLevels).
   * @param {number} id
   * @returns {boolean}
   */
  isLevelUnlocked(id) {
    const groupIndex = Math.ceil(id / 5);
    if (!this.isGroupUnlocked(groupIndex)) {
      return false;
    }
    if ((id - 1) % 5 === 0) {
      return true;
    }
    return this.progress && this.progress.unlockedLevels ? this.progress.unlockedLevels.includes(id) : false;
  }

  getProgress() {
    return this.progress;
  }

  getTotalStars() {
    let total = 0;
    for (const key in this.progress.completedLevels) {
      total += this.progress.completedLevels[key].stars;
    }
    return total;
  }
}

export default LevelManager;
