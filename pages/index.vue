<template>
  <div class="home">
    <b-carousel
      id="carousel-banner"
      v-model="slide"
      :interval="5000"
      controls
      indicators
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
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="require(`~/assets/banner${item}.jpg`)"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <b-container>
      <div class="product-list mt-5">
        <client-only>
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="item in dataSource" :key="item">
              <ProductCard
                :id="item.id"
                :name="item.name"
                :price="item.price"
                :image="item.photo"
                @click="count += 1"
              />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </client-only>
      </div>
      <div class="carousel_bawah mt-5">
        <b-carousel
          id="carousel-banner"
          v-model="slide"
          :interval="5000"
          controls
          indicators
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
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                :src="require(`~/assets/banner${item}.jpg`)"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <!-- <div class="article-top">
        <client-only>
          <swiper class="swiper" :options="swiperOption2">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            <swiper-slide>Slide 10</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>
      </div> -->
      <div class="article mt-5 mb-5">
        <div class="article__heading py-4 pl-2">ARTIKEL TERBARU</div>
        <b-row class="article__content px-5">
          <b-col v-for="item in dataArticle" :key="item" sm="12" md="6">
            <ArticleCard
              :image="item.photo"
              :name="item.name"
              :description="item.description"
              :link="item.link"
            />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ProductCard from '@/components/Cards/ProductCard'
import ArticleCard from '@/components/Cards/ArticleCard'

export default {
  components: {
    ProductCard,
    Swiper,
    SwiperSlide,
    ArticleCard,
  },
  layout: 'Main',
  data() {
    return {
      count: 0,
      dataSource: null,
      dataArticle: null,
      searchData: null,
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
          },
        },
      },
      swiperOption2: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      sliding: null,
      slide: 0,
    }
  },
  created() {
    this.fetchData()
    this.fetchArticle()
    this.fetchSearch()
  },

  methods: {
    async fetchSearch() {
      try {
        const resp = await this.$axios.$get(`/api/search`)
        this.dataSource = resp.data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchData() {
      try {
        const resp = await this.$axios.$get(`/api/product`)
        this.dataSource = resp.data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchArticle() {
      try {
        const resp = await this.$axios.$get(`/api/article`)
        this.dataArticle = resp.data
      } catch (error) {
        console.log(error)
      }
    },

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
@import '../styles/imports';

.product-list {
  .swiper {
    height: 644px;
    margin-left: 124px;
    margin-right: 124px;

    @media (max-width: 1023px) {
      margin-left: auto;
      margin-right: auto;
      height: 300px;
    }

    .swiper-slide {
      height: 288px;
    }
  }
}

.article {
  background: url('~/assets/bg.svg') no-repeat;
  background-size: contain;

  @media (max-width: 1920px) {
    background: skinPrimary;
  }

  &__heading {
    color: #fff;
    font-weight: 700;
    background: url('~/assets/bg2.svg') no-repeat;

    @media (max-width: 1024px) {
      background: #2D4957;
      max-width: 200px;
      border-radius: 0 30px 30px 0;
    }
  }

  &__content {
    padding-top: 60px;
    padding-bottom: 100px;
  }
}
</style>
