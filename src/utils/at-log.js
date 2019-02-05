const isShow = true;

export const atLog = {
  log: (hint, msg) => {
    if (!isShow) return;
    console.log(`【${hint}】`, msg);
  },
  warn: (hint, msg) => {
    if (!isShow) return;
    console.warn(`【${hint}】`, msg);
  },
  error: (hint, msg) => {
    if (!isShow) return;
    console.error(`【${hint}】`, msg);
  }
}