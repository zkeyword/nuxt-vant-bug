<template>
  <div>
    <Header class="lt-header" />
    <nuxt class="lt-main" />
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  },
  head() {
    return {
      script: [
        {
          src: '/highmaps.js',
          type: 'text/javascript',
          charset: 'utf-8'
        },
        {
          src: '/world.js',
          type: 'text/javascript',
          charset: 'utf-8'
        }
      ]
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/stylus/index.styl'
</style>
