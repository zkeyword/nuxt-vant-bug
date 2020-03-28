<template>
  <div class="page page-home">
    <Calendar
      :min-date="minDate"
      :default-date="defaultDate"
      @onCalendar="onCalendar"
    />
  </div>
</template>

<script>
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
  methods: {
    onCalendar() {}
  }
}
</script>

<style lang="stylus" scoped>
@import './home.styl'
</style>
