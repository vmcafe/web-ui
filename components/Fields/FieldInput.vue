<template>
  <input
    v-model="model"
    :type="type"
    class="field"
    :class="error && 'field__error'"
  />
</template>

<script>
export default {
  props: ['type', 'value', 'error'],
  computed: {
    model: {
      get() {
        return this.value
      },
      set($event) {
        return this.$emit('model', $event)
      },
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';
.field
  max-height 48px
  min-width 100px
  font-size 11px
  color blackText
  padding 24px 19px 21px
  border #fff solid 1px
  transition all 0.2s
  font normal normal Futura PT
  letter-spacing 3.25px
  box-shadow 0px 1px 6px #00000029

  &__error
    border-color red

  &::placeholder
    letter-spacing 3.25px

  &:focus
  &:active
    outline none
    border greyKilimanjaro solid 1px
</style>
