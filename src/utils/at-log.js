const isShow = true;

export const atLog = {
  log: (componentName, msg) => {
    if (!isShow) return;
    console.log(`【${componentName}】`, msg);
  },
  warn: (componentName, msg) => {
    if (!isShow) return;
    console.warn(`【${componentName}】`, msg);
  },
  error: (componentName, msg) => {
    if (!isShow) return;
    console.error(`【${componentName}】`, msg);
  }
}