<template>
  <div class="product">
    <router-link :to="'/product/' + id">
      <b-img :src="image" alt="Gambar" class="product__img" />
      <div class="product__content">
        <div class="product__content__name text-center mb-1 text-truncate">
          {{ name }}
          <div class="product__content__price text-center">{{ price }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['src', 'id', 'name', 'price', 'hot', 'love', 'image'],
}
</script>

<style lang="stylus" scoped>
.product {
  position: relative;
  padding: 24px 12px;
  border: 3px solid #F6F7F8;
  border-radius: 4px;
  max-width: 183px;
  height: 272px;
  margin: 0 auto;

  &__img {
    width: 100%;
    height: 157px;
    max-width: 157px;
    object-fit: contain;
  }

  &__content {
    margin-top: 18px;

    &__name {
      line-height: 12px;
      font-size: 16px;
      font-family: 'futura-pt';
      font-weight: 500;
      letter-spacing: 0.25px;
      color: #000000;
    }

    &__price {
      font-size: 14px;
      letter-spacing: 0.25px;
      color: #4AB4A2;
    }
  }
}
</style>
