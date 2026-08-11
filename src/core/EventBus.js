/**
 * EventBus — Lightweight publish/subscribe event system.
 * Used across all game modules for decoupled communication.
 */
class EventBus {
  constructor() {
    /** @type {Map<string, Set<Function>>} */
    this._listeners = new Map();
  }

  /**
   * Subscribe to an event.
   * @param {string} event Event name
   * @param {Function} callback Handler function
   * @returns {Function} Unsubscribe function
   */
  on(event, callback) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set());
    }
    this._listeners.get(event).add(callback);
    return () => this.off(event, callback);
  }

  /**
   * Subscribe to an event once (auto-unsubscribe after first call).
   * @param {string} event Event name
   * @param {Function} callback Handler function
   * @returns {Function} Unsubscribe function
   */
  once(event, callback) {
    const wrapper = (...args) => {
      this.off(event, wrapper);
      callback(...args);
    };
    return this.on(event, wrapper);
  }

  /**
   * Unsubscribe from an event.
   * @param {string} event Event name
   * @param {Function} callback Handler function
   */
  off(event, callback) {
    const listeners = this._listeners.get(event);
    if (listeners) {
      listeners.delete(callback);
      if (listeners.size === 0) this._listeners.delete(event);
    }
  }

  /**
   * Emit an event to all subscribers.
   * @param {string} event Event name
   * @param {*} [data] Data to pass to handlers
   */
  emit(event, data) {
    const listeners = this._listeners.get(event);
    if (!listeners) return;
    // Iterate over a copy in case handlers modify the set
    for (const cb of [...listeners]) {
      try {
        cb(data);
      } catch (err) {
        console.error(`EventBus: Error in handler for '${event}':`, err);
      }
    }
  }

  /**
   * Remove all listeners for an event, or all events if no event specified.
   * @param {string} [event]
   */
  clear(event) {
    if (event) {
      this._listeners.delete(event);
    } else {
      this._listeners.clear();
    }
  }
}

/**
 * Global game event bus — singleton instance.
 *
 * Events:
 * - 'game:swap'         { a, b }
 * - 'game:match'        { cells, count, comboLevel }
 * - 'game:pop'          { row, col, type }
 * - 'game:combo'        { level, score }
 * - 'game:powerup'      { type, row, col }
 * - 'game:boardSettled'  {}
 * - 'game:noMoves'       {}
 * - 'level:start'       { levelId, config }
 * - 'level:complete'    { levelId, score, stars, movesUsed }
 * - 'level:failed'      { levelId, score, reason }
 * - 'level:objective'   { progress, target }
 * - 'score:update'      { score, delta }
 * - 'moves:update'      { remaining }
 * - 'time:update'       { remaining }
 * - 'ui:screenChange'   { from, to }
 * - 'audio:play'        { sound, options }
 * - 'audio:settingsChange' { settings }
 */
const gameEvents = new EventBus();

export { EventBus };
export default gameEvents;
