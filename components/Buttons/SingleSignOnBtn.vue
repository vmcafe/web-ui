<template>
  <button squared :type="type" class="ssobtn">
    <div
      class="ssobtn__text"
      :class="align === 'center' && 'w-100 text-center'"
    >
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: ['type', 'align'],
}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';

.ssobtn
    height 48px
    background #fcfcfc
    box-shadow 0px 1px 6px #00000029
    border #fff solid 1px
    font-size 11px
    font normal normal Futura PT
    letter-spacing 2px
    color #000000
    max-width 286px

.ssobtn__text
    margin-top 7px
    margin-bottom 5px
</style>
