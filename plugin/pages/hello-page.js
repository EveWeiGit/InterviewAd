// plugin/pages/hello-page.js
Page({
  data: {},
  onLoad() {
    console.log('This is a plugin page11111!')
    // 若在开发者工具中无法预览广告，请切换开发者工具中的基础库版本
// 在页面中定义激励视频广告
let videoAd = null

// 在页面onLoad回调事件中创建激励视频广告实例
if (wx.createRewardedVideoAd) {
  videoAd = wx.createRewardedVideoAd({
    adUnitId: 'adunit-8ba268d100360565'
  })
  videoAd.onLoad(() => {})
  videoAd.onError((err) => {
    console.error('激励视频光告加载失败', err)
  })
  videoAd.onClose((res) => {})
}

// 用户触发广告后，显示激励视频广告
if (videoAd) {
  videoAd.show().catch(() => {
    // 失败重试
    videoAd.load()
      .then(() => videoAd.show())
      .catch(err => {
        console.error('激励视频 广告显示失败', err)
      })
  })
}
  },
  onShow:function(option){ this.setData({showad:1,}); }
})
