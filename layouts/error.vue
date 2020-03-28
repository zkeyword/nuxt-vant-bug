<template>
  <div class="error">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '系统出现错误'
    }
  }
}
</script>

<style lang="stylus" scoped>
.error {
  text-align center
  background-color #F7F8FB
  height 100vh
  padding-top 50%
  color #47494e
  font-size 20px
  img {
    width 30%
    margin-bottom 20px
  }
  .van-button {
    margin-top 10px
  }
}
</style>
