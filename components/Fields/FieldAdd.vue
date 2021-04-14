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
  height 35px
  min-width 150px
  border #707070 solid 1px
  border-radius 5px
  transition all 0.2s
  font-size 10px
  font normal normal Proxima Nova
  color #2D4957
  text-align left
  letter-spacing: 1.2px;


  &__error
    border-color red

  &::placeholder
    font-size 10px
    font normal normal Proxima Nova
    color #707070

  &:focus
  &:active
    outline none
    border #707070 solid 1px
</style>
