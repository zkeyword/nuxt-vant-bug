<template>
  <div class="page page-home">
    <Calendar
      :min-date="minDate"
      :default-date="ranking ? ranking.rankingParams.date : defaultDate"
      @onCalendar="onCalendar"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Calendar from '@/components/Calendar'
export default {
  scrollToTop: true,
  components: { Calendar },
  data() {
    return {
      minDate: new Date(),
      defaultDate: new Date(),
      isClient: false,
      list: []
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
