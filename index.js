module.exports = function (Vue, config) {
  Vue.mixin({
    created: function () {
      this.$config = config
    }
  })
}
