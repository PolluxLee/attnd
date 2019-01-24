const isShow = true;

export const atLog = {
  log: (ref, msg) => {
    if (!isShow) return;
    let componentName = ref.$vnode.componentOptions.tag;
    console.log(`【${componentName}】`, msg);
  },
  warn: (ref, msg) => {
    if (!isShow) return;
    let componentName = ref.$vnode.componentOptions.tag;
    console.warn(`【${componentName}】`, msg);
  },
  error: (ref, msg) => {
    if (!isShow) return;
    let componentName = ref.$vnode.componentOptions.tag;
    console.error(`【${componentName}】`, msg);
  }
}