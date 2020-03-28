<template>
  <div class="page page-home">
    sss
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TabItem from './tabItem'
export default {
  scrollToTop: true,
  components: { TabItem },
  async asyncData({ store, params }) {
    await store.dispatch('common/getCommonIndex')
  },
  data() {
    return {
      tabIndex: 1
    }
  },
  computed: {
    ...mapState({
      common: 'common'
    })
  },
  mounted() {
    if (!this.common.commonIndex.newArticle) {
      this.getCommonIndex()
    }
  },
  methods: {
    ...mapActions({
      getCommonIndex: 'common/getCommonIndex'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import './home.styl'
</style>
