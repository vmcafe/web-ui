<template>
  <div class="underconstruct">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="item in [1, 2, 3, 4]" :key="item">
        <template #img>
          <img
            class="logo__vmc d-block img-fluid mx-auto"
            src="~/assets/Logo2.png"
            alt=""
          />
          <h1 class="carousel__title text-center ml-2 mr-2">
            WE'RE LAUNCHING SOON
          </h1>
          <p class="carousel__content text-center mb-2 ml-2 mr-2">
            Please kindly wait for us. We're doing a super great job here and we
            need time to construct it :(
            <br />
            Don't leave us pwis, we will provide you something exciting nyaa :3
          </p>
          <p class="carousel__media">Stay connected</p>
          <div class="carousel__media__list">
            <a href="/" target="blank">
              <img src="~/assets/icons/ic_fb.svg" alt="" class="mr-2" />
            </a>
            <a href="/" target="blank">
              <img src="~/assets/icons/ic_ig.svg" alt="" class="mr-2" />
            </a>
            <a href="/" target="blank">
              <img src="~/assets/icons/linkedin.svg" alt="" class="mr-2" />
            </a>
          </div>
          <p class="carousel__copyright">©2021. All right reserved</p>
          <img
            class="carousel__img d-block img-fluid w-100"
            :src="require(`~/assets/undercontruct${item}.png`)"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../styles/imports'

.logo__vmc
  position absolute
  top 20px
  left 0
  right 0
  bottom 0
  height 150px
  width 150px
  display flex
  align-items center
  justify-content center

.carousel__img
  height 100vh

@media (min-width 256px)
  .carousel__title
    position absolute
    top -90px
    left 0
    right 0
    bottom 0
    height 100vh
    display flex
    align-items center
    justify-content center
    font-size 15px
    font oblique normal 600 15px/17px futura-pt
    letter-spacing 5px
    color #2D4957
    opacity 1

  .carousel__content
    position absolute
    top -30px
    left 0
    right 0
    bottom 0
    height 100vh
    display flex
    align-items center
    justify-content center
    font-size 11px
    font normal normal segoe-ui
    letter-spacing 1.8px
    color #2D4957
    opacity 1

  .carousel__media
    position absolute
    top 90px
    left 0
    right 0
    bottom 0
    height 100vh
    display flex
    align-items center
    justify-content center
    font-size 11px
    font normal normal segoe-ui
    letter-spacing 1.8px
    color #2D4957
    opacity 1

  .carousel__media__list
    position absolute
    top 120px
    left 50px
    right 50px
    height 100vh
    display flex
    align-items center
    justify-content center

  .carousel__copyright
    position absolute
    top 270px
    left 0
    right 0
    bottom 0
    height 100vh
    display flex
    align-items center
    justify-content center
    font-size 9px
    font normal normal futura-pt
    letter-spacing 1.2px
    color #000000
    opacity 1

@media (min-width 1024px)
  .carousel__title
    position absolute
    top -50px
    left 0
    right 0
    bottom 0
    height 100vh
    display flex
    align-items center
    justify-content center
    font-size 60px
    font oblique normal 600 60px/17px futura-pt
    letter-spacing 5px
    color #2D4957
    opacity 1

  .carousel__content
    position absolute
    top 30px
    left 50px
    right 50px
    bottom 0
    height 100vh
    display flex
    align-items center
    justify-content center
    font-size 18px
    font normal normal segoe-ui
    letter-spacing 1.8px
    line-height 30px
    color #2D4957
    opacity 1

  .carousel__media
    position absolute
    top 120px
    left 0
    right 0
    bottom 0
    height 100vh
    display flex
    align-items center
    justify-content center
    font-size 18px
    font normal normal segoe-ui
    letter-spacing 1.8px
    color #2D4957
    opacity 1

  .carousel__media__list
    position absolute
    top 150px
    left 50px
    right 50px
    height 100vh
    display flex
    align-items center
    justify-content center

  .carousel__copyright
    position absolute
    top 270px
    left 0
    right 0
    bottom 0
    height 100vh
    display flex
    align-items center
    justify-content center
    font-size 11px
    font normal normal futura-pt
    letter-spacing 1.2px
    color #262626
    opacity 1
</style>
