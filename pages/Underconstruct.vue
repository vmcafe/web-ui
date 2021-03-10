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
          <h1 class="judul">WE'RE LAUNCHING SOON</h1>
          <p class="desc1">
            Please kindly wait for us. We're doing a super great job here and we
            need time to construct it :(
          </p>
          <p class="desc2">
            Don't leave us pwis, we will provide you something exciting nyaa :3
          </p>
          <p class="desc3">Stay connected</p>
          <p class="desc4">©2020. All right reserved</p>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
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
.underconstruct
  position relative

.judul
  position absolute
  top 0
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
  top 80px
  left 100px
  right 100px
  bottom 0
  height 100vh
  display flex
  align-items center
  justify-content center
  font-size 50px
  font 18px/17px segoe-ui
  letter-spacing 1.8px
  color #2D4957
  opacity 1

.desc2
  position absolute
  top 110px
  left 100px
  right 100px
  bottom 0
  height 100vh
  display flex
  align-items center
  justify-content center
  font-size 50px
  font 18px/17px segoe-ui
  letter-spacing 1.8px
  color #2D4957
  opacity 1

.desc3
  position absolute
  top 260px
  left 100px
  right 100px
  bottom 0
  height 100vh
  display flex
  align-items center
  justify-content center
  font-size 50px
  font 18px/17px segoe-ui
  letter-spacing 1.8px
  color #2D4957
  opacity 1

.desc4
  position absolute
  top 450px
  left 100px
  right 100px
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
</style>
