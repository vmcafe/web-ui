<template>
  <button type="button" class="dbtn">
    <div class="rbtn__text w-100">
      <slot />
    </div>
  </button>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';
.rbtn
  font normal normal medium 10px Futura PT
  letter-spacing 0.7px
  color #2D4957
  border 3px solid #ACB3BB
</style>
