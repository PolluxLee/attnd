// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // 添加 postcss-autoreset 设置
    // Add postcss-autoreset configs
    "postcss-autoreset": {
      reset: {
        // 这里的声明会应用于所有 WXSS 选择器
        // Styles apply to all WXSS selectors
        boxSizing: "border-box",
      },
    },
    "postcss-mpvue-wxss": {},
  }
}
