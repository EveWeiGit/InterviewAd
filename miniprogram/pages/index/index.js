const plugin = requirePlugin('hello-plugin')
Page({
  data: {
    items: [],
    currentItem: 0,
    showad: false,
    videoAd: null
  },
  onLoad() {
    plugin.sayHello()
    const world = plugin.answer

        // 若在开发者工具中无法预览广告，请切换开发者工具中的基础库版本
// 在页面中定义激励视频广告
  // let videoAd = null

// 在页面onLoad回调事件中创建激励视频广告实例
if (wx.createRewardedVideoAd) {
  this.videoAd = wx.createRewardedVideoAd({
    adUnitId: 'adunit-8ba268d100360565'
  })
  this.videoAd.onLoad(() => {})
  this.videoAd.onError((err) => {
    console.error('激励视频光告加载失败11', err)
  })
  this.videoAd.onClose((res) => {
    console.log('激励视频光告关闭11', res)
    this.setData({
      showad: false
    })
  })
}

// 用户触发广告后，显示激励视频广告
  // if (this.videoAd) {
  //   this.videoAd.show().catch(() => {
  //     // 失败重试
  //     this.videoAd.load()
  //       .then(() => this.videoAd.show())
  //       .catch(err => {
  //         console.error('激励视频 广告显示失败11', err)
  //       })
  //   })
  // }
  },
  addItem() {
    this.data.items.push(this.data.currentItem++)
    this.setData({
      items: this.data.items,
      currentItem: this.data.currentItem
    })
  },
  toggleAd() {
    this.setData({
      showad: !this.data.showad
    })
    if (this.data.showad) {
      // 用户触发广告后，显示激励视频广告
      if (this.videoAd) {
        this.videoAd.show().catch(() => {
          // 失败重试
          this.videoAd.load()
            .then(() => this.videoAd.show())
            .catch(err => {
              console.error('激励视频 广告显示失败22', err)
            })
        })
      }
    }
  },
  onAdLoad(e) {
    console.log('onAdLoad1', e)
  },
  onAdError(e) {
    console.log('onAdError2', e)
    this.setData({
      showad: false
    })
   
  }
})
