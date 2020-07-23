const VueEventBus = {
  // 今回は特にオプションは受け取らないのでVueのみの受け取り
  install(Vue) {
    const bus = new Vue()

    // Vue.$eventBusで使えるようにプロトタイプに追加
    Object.defineProperty(Vue.prototype, '$eventBus', {
      get() {
        return bus
      }
    })

    // beforeMountとbeforeDestroyにフックしてemitとoffを管理
    Vue.mixin({
      beforeCreate() {
        if(typeof this.$options.events !== 'object') return
        
        let eventObj = {}
        for (let key in this.$options.events) {
          eventObj[key] = this.$options.events[key].bind(this)
        }

        this.$once('hook:beforeMount', () => {
          for (let key in eventObj) {
            bus.$on(key, eventObj[key])
          }
        })
        this.$once('hook:beforeDestroy', () => {
          for (let key in eventObj) {
            bus.$off(key, eventObj[key])
          }
          eventObj = null
        })
      },
    })
  }
}

import Vue from "vue";
Vue.use(VueEventBus);
