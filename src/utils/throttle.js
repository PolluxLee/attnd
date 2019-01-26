export const throttle = (func, wait) => {
  var now, previous = 0;

  return function (...args) {
    now = +new Date();
    if (now - previous > wait) {
      func.apply(this, [...args]);
      previous = now;
    }
  }
};