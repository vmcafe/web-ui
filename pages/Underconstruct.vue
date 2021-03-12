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
          <div class="logo-underconstruct">
            <img
              class="logo d-block mx-auto"
              width="170"
              height="170"
              src="~/assets/Logo2.png"
              alt=""
            />
          </div>

          <h1 class="judul mx-auto">WE'RE LAUNCHING SOON</h1>
          <p class="desc1 mx-auto">
            Please kindly wait for us. We're doing a super great job here and we
            need time to construct it :(
          </p>
          <p class="desc2 mx-auto">
            Don't leave us pwis, we will provide you something exciting nyaa :3
          </p>
          <p class="desc3 mx-auto">Stay connected</p>
          <p class="desc4 mx-auto">©2020. All right reserved</p>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="require(`~/assets/undercontruct${item}.png`)"
            alt="image slot"
          />
          <div class="footer_list_media">
            <a href="/" target="blank" class="footer_listmedia_item">
              <img src="~/assets/icons/ic_fb.svg" alt="" />
            </a>
            <a href="/" target="blank" class="footer_listmedia_item">
              <img src="~/assets/icons/ic_ig.svg" alt="" />
            </a>
            <a href="/" target="blank" class="footer_listmedia_item">
              <img src="~/assets/icons/linkedin.svg" alt="" />
            </a>
          </div>
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
.underconstruct
  position relative

.logo
  top 20px
  left 0
  right 0
  bottom 0
  display flex
  position absolute
  align-items center
  justify-content center

.judul
  position absolute
  top -40px
  left 0
  right 0
  bottom 0
  height 100vh
  display flex
  align-items center
  justify-content center
  font-size 60px
  font oblique normal 900 60px/17px futura-pt
  letter-spacing 15px
  color #2D4957
  opacity 1

.desc1
  position absolute
  top 20px
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

.desc2
  position absolute
  top 45px
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

.desc3
  position absolute
  top 160px
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

.desc4
  position absolute
  top 270px
  left 0
  right 0
  bottom 0
  height 100vh
  display flex
  align-items center
  justify-content center
  font-size 50px
  font 15px/17px futura-pt
  letter-spacing 1.2px
  color #000000
  opacity 1

.footer_listmedia_item
  position absolute
  top 190px
  left 0
  right 0
  bottom 0
  height 100vh
  display flex
  align-items center
  justify-content center
</style>
