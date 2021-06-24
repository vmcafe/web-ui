<template>
  <!-- <router-link :to="link"> -->
  <a :href="link">
    <div class="art-card">
      <b-img class="art-card__img" :src="image" />
      <div class="art-card__content p-2">
        <div class="art-card__content__title mb-1">
          {{ name }}
        </div>
        <div class="art-card__content__des">
          {{ description }}
        </div>
      </div>
    </div>
  </a>
  <!-- </router-link> -->
</template>

<script>
export default {
  props: ['src', 'name', 'description', 'image', 'link'],
}
</script>

<style lang="stylus" scoped>
.art-card {
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 1px 6px #00000061;
  background: #FFFFFF;
  overflow: hidden;
  margin-bottom: 18px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    box-shadow: 0px 1px 6px #00000032;
  }

  &__img {
    width: 150px;
    height: 150px;
  }

  &__content {
    &__title {
      line-height: 26px;
      font-size: 22px;
      font-weight: 900;
      font-style: italic;
    }

    &__des {
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
