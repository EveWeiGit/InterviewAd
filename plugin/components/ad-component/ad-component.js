Component({
  properties: {
    unitId: {
      type: String,
      value: ''
    },
    // bindload: {
    //   type: Function,
    //   value: () => {}
    // },
    // binderror: {
    //   type: Function,
    //   value: () => {}
    // }
  },
  methods: {
    onAdLoad(e) {
      console.log('onAdLoad00', e)
      this.triggerEvent('load', e.detail);
    //   this.properties.bindload(e)
    },
    onAdError(e) {
      console.log('onAdError00', e)
      this.triggerEvent('error', e.detail);
      // this.triggerEvent('onAdError')
    //   this.properties.binderror(e)
    }
  }
})
