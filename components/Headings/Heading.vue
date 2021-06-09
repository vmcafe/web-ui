<template>
  <h3 class="heading">
    <slot />
  </h3>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';
.heading
  text-align center
  letter-spacing -0.21px
  color #000
  font-weight bold
  font normal normal medium 32px/41px Futura PT
</style>
