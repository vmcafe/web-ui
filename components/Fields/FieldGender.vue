<template>
  <div class="radio">
    <label v-for="item in options" :key="item.id" :for="`option${item.id}`">
      <input
        :id="`option${item.id}`"
        name="gender"
        type="radio"
        class="radio__field"
        @change="setRadio(item.value)"
      />
      <span class="radio__label text-truncate">{{ item.label }}</span>
      <div
        class="radio__line"
        :class="item.value === selected && 'radio__line__selected'"
      ></div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          id: 1,
          label: 'PEREMPUAN',
          value: 'p',
        },
        {
          id: 2,
          label: 'LAKI - LAKI',
          value: 'l',
        },
      ],
      selected: 'p',
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.selected
      },
      set() {
        return this.$emit('model', this.selected)
      },
    },
  },
  methods: {
    setRadio(val) {
      this.selected = val
      this.$emit('model', val)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';
.radio
  max-height 48px
  min-width 100px
  font-size 11px
  color blackText
  padding 20px
  border #fff solid 3px
  transition all 0.2s
  background whiteMustard
  display flex
  align-items center
  justify-content space-between
  font normal normal Futura PT
  letter-spacing 3.25px
  box-shadow 0px 1px 6px #00000029

  &__field
    display none

  &__label
    letter-spacing 3.25px
    color blackText
    cursor pointer

  &__line
    width 0
    height 2px
    background greyKilimanjaro
    transition all 0.2s
    margin-top 2px

    &__selected
      margin-top -2px
      width 100%
      height 6px

  &:focus
  &:active
    outline none
    border greyKilimanjaro solid 1px
</style>
