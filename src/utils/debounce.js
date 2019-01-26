export const debounce = (func, wait, immediate) => {
  var timeId = null;

  return function (...args) {
    
    clearTimeout(timeId);
    // 立即执行
    if (immediate) {
      if (!timeId) func.apply(this, [...args]);
      timeId = setTimeout(() => {
        timeId = null;
      }, wait);
    }
    // 停止后执行
    else {
      timeId = setTimeout(() => {
        func.apply(this, arguments);
      }, wait);
    }
  }
};