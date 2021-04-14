<template>
  <div class="alamat py-5 mx-auto">
    <div class="alamat__detail text-left">
      {{ street }}
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['street'],
}
</script>

<style lang="stylus" scoped>
.alamat
  margin-top 10px
  margin-bottom 5px
  padding-left 20px
  padding-right 20px
  max-width 345px
  text-align left
  line-height 16px
  border 3px solid #ACB3BB
  border-radius 4px
  color #2D4957

  &__tujuan
    font-size 14px
    font-weight bold
    text-align left
    font normal normal normal Proxima Nova
    margin-bottom 10px
    letter-spacing 0.45px

  &__detail
    font-size 14px
    text-align left
    font normal normal normal Proxima Nova
    letter-spacing 0.45px
</style>
