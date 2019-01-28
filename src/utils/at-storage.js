/**
 * userInfo: { name: '', stuId: '' }
 * email: ''
 */

export const atStorage = {
  get: (key) => {
    try {
      const value = wx.getStorageSync(key);
      if (!value) return null;
      return value;
    } catch (e) {
      return null;
    }
  },
  set: (key, value) => {
    try {
      wx.setStorageSync(key, value);
    } catch (e) {}
  },
  clearAll: () => {
    try {
      wx.clearStorageSync();
    } catch (e) {}
  },
  remove: (key) => {
    try {
      wx.removeStorageSync(key);
    } catch (e) {}
  }
}