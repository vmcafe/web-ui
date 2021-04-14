<template>
  <div
    class="nav-item p-2 align-items-center"
    :class="withBorder && 'nav-item__bordered'"
  >
    <img
      v-if="icon"
      :src="require(`~/assets/icons/ic_${icon}.svg`)"
      alt=""
      class="nav-item__img mr-2"
    />
    <div v-if="count > 0" class="cart__count">{{ count }}</div>
    <!-- <div class="nav-item__text"><slot /></div> -->
  </div>
</template>

<script>
export default {
  props: ['icon', 'withBorder'],
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';
.nav-item
  display flex

  &__bordered
    border-left 2px solid blackBlur

  &__img
    width 18px
    height 18px

  &__text
    font-size 14px
    line-height 19px
    color blackBlur
</style>
