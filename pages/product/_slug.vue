<template>
  <b-container class="detail">
    <b-row :data="dataSource">
      <b-col md="5" sm="12">
        <b-img
          class="detail__img mx-auto mx-md-0"
          :src="dataSource && dataSource[0] && dataSource[0].photo"
          alt="Gambar"
        />
        <!-- <div class="detail__imgs mx-auto mx-md-0">
          <b-row>
            <b-col v-for="item in [1, 2, 3, 4]" :key="item" cols="3">
              <b-img
                thumbnail
                class="detail__imgs__item"
                src="https://maizo.com.au/imgs/product/m0258-sempio-gim-jaban-seasoned-seaweed-snack-50g.jpg"
                alt="gambar"
              />
            </b-col>
          </b-row>
        </div> -->
      </b-col>
      <b-col md="7" sm="12" class="pt-5">
        <h1 class="detail__title text-center h1 font-weight-medium mb-4">
          {{ dataSource && dataSource[0] && dataSource[0].name }}
        </h1>
        <b-row>
          <b-col md="9" sm="12">
            <div
              class="detail__description order-top border-bottom border-dark p-2 mb-3"
            >
              {{ dataSource && dataSource[0] && dataSource[0].description }}
            </div>
          </b-col>
          <b-col md="3" sm="12">
            <div class="nettoOrStock p-3 mb-3">
              <div class="nettoOrStock__label mb-1 pb-1">Netto</div>
              <div class="nettoOrStock__value font-italic font-weight-bold">
                {{ dataSource && dataSource[0] && dataSource[0].netto }}
              </div>
            </div>
            <div class="nettoOrStock p-3">
              <div class="nettoOrStock__label mb-1 pb-1">Stok</div>
              <div class="nettoOrStock__value font-italic font-weight-bold">
                {{ dataSource && dataSource[0] && dataSource[0].stock }}
              </div>
            </div>
          </b-col>
        </b-row>
        <div class="detail__price text-center font-weight-bold mb-4">
          <p>Rp {{ dataSource && dataSource[0] && dataSource[0].price }}</p>
        </div>
        <b-row>
          <b-col md="3" sm="12">
            <Counter class="mb-2" />
          </b-col>
          <b-col md="6" sm="6">
            <router-link class="w-100 mt-2" :to="'/keranjang'">
              <b-button
                type="submit"
                class="detail__button w-100 mb-2"
                @click="cartHandler()"
              >
                Beli
              </b-button>
            </router-link>
            <!-- <router-link class="w-100 mb-2" :to="'/keranjang'" @click="buyHandler()">
              <b-button type="button" class="detail__button w-100 mb-2">
                BELI LANGSUNG
              </b-button>
            </router-link> -->
          </b-col>
          <b-col md="3" sm="6">
            <div class="d-flex flex-row align-items">
              <b-button
                style="width: 72px"
                type="button"
                class="detail__button__outline"
              >
                <img src="~/assets/icons/ic_cart.svg" alt="" />
              </b-button>
              <b-button type="button" class="detail__button__outline ml-2">
                <img src="~/assets/icons/ic_heart.svg" alt="" />
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <div class="detail__s2 mt-5">
      <div class="detail__s2__label mb-3">RINCIAN</div>
      <div class="detail__s2__desc p-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
        illo rem obcaecati exercitationem pariatur commodi quam vero aspernatur
        similique illum, cum fugiat voluptates, blanditiis quaerat modi! Fugiat
        ad quo neque. lorem
      </div>
    </div>

    <div class="detail__slide mb-4">
      <div class="detail__slide__label mt-5 mb-2">Barangkali suka</div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in dataProduct" :key="item">
          <ProductCard
            :id="item.id"
            :name="item.name"
            :price="item.price"
            :image="item.photo"
          />
        </swiper-slide>
      </swiper>
    </div>
  </b-container>
</template>

<script>
import Counter from '@/components/CounterClick'
import ProductCard from '@/components/Cards/ProductCard'

export default {
  components: {
    ProductCard,
    Counter,
  },
  layout: 'Main',
  data() {
    return {
      dataSource: null,
      dataProduct: null,
      dataCart: null,
      swiperOption: {
        slidesPerView: 5,
        freeMode: true,
        breakpoints: {
          1024: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 2,
          },
        },
      },
    }
  },
  created() {
    this.fetchData()
    this.getdata()
  },
  methods: {
    async fetchData() {
      try {
        const resp = await this.$axios.$get(
          `/api/product/s/${this.$route.params.slug}`
        )
        this.dataSource = resp.data
      } catch (error) {
        console.log(error)
      }
    },
    async getdata() {
      try {
        const resp = await this.$axios.$get(`/api/product`)
        this.dataProduct = resp.data
      } catch (error) {
        console.log(error)
      }
    },
    async cartHandler() {
      try {
        const resp = await this.$axios.$post(`/api/cart`, null, {
          headers: this.headers,
        })
        this.dataCart = resp.data
      } catch (error) {
        console.log(error)
        this.isLoading = false
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.detail {
  &__img {
    max-width: 300px;
  }

  &__imgs {
    max-width: 300px;

    &__item {
      width: 80px;
      height: 60px;
      object-fit: cover;
      cursor: pointer;
      opacity: 0.5;
      transition: all 0.25s;

      &:hover {
        opacity: 1;
      }
    }
  }

  &__title {
    letter-spacing: -0.37px;
    font-weight: 500;
  }

  &__description {
    font-size: 18px;
    line-height: 40px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #2D4957;
  }

  &__price {
    font-size: 35px;
    line-height: 52px;
    letter-spacing: 7px;
    color: #2D4957;
  }

  &__button {
    height: 60px;
    background: #2D4957;
    border-radius: 10px;
    letter-spacing: 3.5px;
    color: #FFFFFF;
    font-size: 14px;

    &__outline {
      height: 60px;
      min-width: 60px;
      background: #FFF;
      border: 1px solid #2D4957;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__s2 {
    &__label {
      letter-spacing: 7.5px;
      color: #000000;
      opacity: 0.75;
      font-size: 30px;
    }

    &__desc {
      font-size: 19px;
      line-height: 40px;
      letter-spacing: 4.75px;
      color: #000000;
      border: 1px solid #000;
    }
  }

  &__slide {
    &__label {
      font-weight: 500;
      letter-spacing: 4.5px;
      text-transform: uppercase;
      font-size: 18px;
    }
  }
}

.nettoOrStock {
  background: #FCF5ED;
  border-radius: 20px 0 0 20px;
  text-align: center;

  &__label {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 4px;
    color: #2D4957;
    border-bottom: 1px solid #2D4957;
    text-transform: uppercase;
  }

  &__value {
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 4.75px;
    color: #2D4957;
  }
}
</style>
