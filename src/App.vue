<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // console.log('app created and cache logs by setStorageSync')
    wx.authorize({
      scope: 'scope.userLocation',
      success () {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        // wx.startRecord()
      }
    })
    console.log("启动")
  }
}
</script>

<style>
/* .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
} */
/* this rule will be remove */
/* * {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
} */
/* page {
  width: 100%;
  height: 100%;
  background-color: #FF4B00;
} */
</style>
