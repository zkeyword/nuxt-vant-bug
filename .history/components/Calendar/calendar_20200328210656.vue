<template>
  <div class="filter-item">
    <span class="bar" @click="show = true">
      <em>{{ date }}</em>
    </span>
    <van-calendar
      v-model="show"
      color="#307EFE"
      v-bind="$attrs"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
// import dayjs from '@/utils/date'
export default {
  props: {
    format: {
      type: String,
      default: 'MM-DD'
    }
  },
  data() {
    return {
      show: false,
      date: this.$attrs['default-date'] || new Date()
    }
  },
  mounted() {
    this.$emit('onCalendar', this.date)
  },
  methods: {
    onConfirm(date) {
      this.show = false
      this.date = date
      this.$emit('onCalendar', this.date, date)
    },
    getDate() {
      return this.date
    }
  }
}
</script>

<style lang="stylus">
@import './calendar.styl'
</style>
