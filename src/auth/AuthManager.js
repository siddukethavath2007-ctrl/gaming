/**
 * AuthManager — Player Authentication & Cloud/Local Progress Sync Service
 * Manages user registration, login, password verification, session state,
 * and isolated progress storage per user.
 */
import gameEvents from '../core/EventBus.js';

class AuthManager {
  constructor() {
    this.currentUser = this.loadSession();
  }

  /**
   * Read stored active session from localStorage.
   * @returns {{ username: string, uid: string } | null}
   */
  loadSession() {
    try {
      const data = localStorage.getItem('fc3d_active_session');
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.warn('Could not read active auth session', e);
      return null;
    }
  }

  /**
   * Save active session to localStorage.
   * @param {{ username: string, uid: string }} user
   */
  saveSession(user) {
    try {
      localStorage.setItem('fc3d_active_session', JSON.stringify(user));
    } catch (e) {
      console.warn('Could not save auth session', e);
    }
  }

  /**
   * Get all registered accounts database from localStorage.
   * @returns {Object.<string, { uid: string, username: string, passwordHash: string, createdAt: number }>}
   */
  getAccountsDB() {
    try {
      const data = localStorage.getItem('fc3d_accounts_db');
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  /**
   * Save accounts database to localStorage.
   * @param {Object} db
   */
  saveAccountsDB(db) {
    try {
      localStorage.setItem('fc3d_accounts_db', JSON.stringify(db));
    } catch (e) {
      console.warn('Could not save accounts DB', e);
    }
  }

  /**
   * Simple hash utility for storing passwords securely in client storage.
   * @param {string} str
   * @returns {string}
   */
  hashPassword(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
    }
    return 'h_' + Math.abs(hash).toString(16) + '_' + str.length;
  }

  /**
   * Register a new user account.
   * @param {string} username
   * @param {string} password
   * @returns {{ success: boolean, message?: string, user?: object }}
   */
  signUp(username, password) {
    if (!username || !username.trim()) {
      return { success: false, message: 'Please enter a valid User ID / Username.' };
    }
    if (!password || password.length < 4) {
      return { success: false, message: 'Password must be at least 4 characters long.' };
    }

    const cleanUser = username.trim();
    const userKey = cleanUser.toLowerCase();
    const db = this.getAccountsDB();

    if (db[userKey]) {
      return { success: false, message: `Username "${cleanUser}" is already registered. Please login or choose another ID.` };
    }

    const uid = 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const newUser = {
      uid,
      username: cleanUser,
      passwordHash: this.hashPassword(password),
      createdAt: Date.now()
    };

    db[userKey] = newUser;
    this.saveAccountsDB(db);

    // Set active session
    const sessionUser = { uid, username: cleanUser };
    this.currentUser = sessionUser;
    this.saveSession(sessionUser);

    // Initialize fresh save for new user starting at Level 1 (0 stars, 0 score, level 1 unlocked)
    const freshProgress = { completedLevels: {}, unlockedLevels: [1] };
    this.saveUserProgress(freshProgress);

    gameEvents.emit('auth:success', { user: sessionUser });
    return { success: true, user: sessionUser };
  }

  /**
   * Sign in an existing user account.
   * @param {string} username
   * @param {string} password
   * @returns {{ success: boolean, message?: string, user?: object }}
   */
  signIn(username, password) {
    if (!username || !username.trim()) {
      return { success: false, message: 'Please enter your User ID / Username.' };
    }
    if (!password) {
      return { success: false, message: 'Please enter your password.' };
    }

    const cleanUser = username.trim();
    const userKey = cleanUser.toLowerCase();
    const db = this.getAccountsDB();
    const account = db[userKey];

    if (!account) {
      return { success: false, message: `User ID "${cleanUser}" not found. Please register first.` };
    }

    if (account.passwordHash !== this.hashPassword(password)) {
      return { success: false, message: 'Incorrect password. Please try again.' };
    }

    const sessionUser = { uid: account.uid, username: account.username };
    this.currentUser = sessionUser;
    this.saveSession(sessionUser);

    gameEvents.emit('auth:success', { user: sessionUser });
    return { success: true, user: sessionUser };
  }

  /**
   * Log out the current user.
   */
  signOut() {
    this.currentUser = null;
    try {
      localStorage.removeItem('fc3d_active_session');
    } catch (e) {
      console.warn('Could not clear session', e);
    }
    gameEvents.emit('auth:logout');
  }

  /**
   * Get the active logged in user profile.
   * @returns {{ uid: string, username: string } | null}
   */
  getCurrentUser() {
    return this.currentUser;
  }

  /**
   * Save game progress for current user under gameProgress_<userId>.
   * @param {object} progress
   */
  saveUserProgress(progress) {
    if (!this.currentUser) return;
    try {
      const userKey = this.currentUser.username.toLowerCase();
      const storageKey = `gameProgress_${userKey}`;
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not save user progress to storage', e);
    }
  }

  /**
   * Load game progress for current user.
   * If no progress exists for this user, returns fresh save starting at Level 1.
   * @returns {{ completedLevels: object, unlockedLevels: number[] }}
   */
  loadUserProgress() {
    if (!this.currentUser) return { completedLevels: {}, unlockedLevels: [1] };
    try {
      const userKey = this.currentUser.username.toLowerCase();
      const storageKey = `gameProgress_${userKey}`;
      const data = localStorage.getItem(storageKey);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn('Could not load user progress', e);
    }
    
    // Fresh new account save starting at Level 1
    const initialProgress = { completedLevels: {}, unlockedLevels: [1] };
    this.saveUserProgress(initialProgress);
    return initialProgress;
  }
}

/** Singleton instance */
const authManager = new AuthManager();

export { AuthManager };
export default authManager;
