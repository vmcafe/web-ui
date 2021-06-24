<template>
  <div class="keranjang">
    <Navbar />
    <b-container class="keranjang__utama">
      <b-row>
        <b-col md="6" sm="12">
          <h1 class="tittle__tas__belanja h1 font-weight-medium mb-4">
            TAS BELANJA
          </h1>
          <div class="isi__tas__belanja mb-3"></div>
          <div>
            <b-card class="product_belanja">
              <b-row v-for="item in dataSource" :key="item.id">
                <b-col>
                  <img class="foto_product" src="~/assets/cookie.jpg" alt="" />
                </b-col>
                <b-col class="tas_product">
                  <div class="nama_product font-weight-bold">
                    <p>{{ item.products.name }}</p>
                  </div>
                  <div class="harga_product">
                    <p>Rp {{ item.cost }}</p>
                  </div>
                  <b-row>
                    <img
                      class="icon_trash"
                      src="~/assets/icons/ic_trashcan.svg"
                      alt=""
                    />
                  </b-row>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
        <b-col v-for="item in dataOrder" :key="item.id">
          <b-container class="card__rincian__belanja">
            <h1 class="tittle__rincian__belanja h1 font-weight-medium mb-4">
              RINCIAN BELANJA
            </h1>
            <div class="rincian__pembayaran">
              <div class="rincian_pembayaran_barang">
                <b-row>
                  <b-col cols="8" class="rincian_pembayaranbarang_kiri">
                    <p>Total Harga (barang)</p>
                  </b-col>
                  <b-col cols="4" class="rincian_pembayaranbarang_kanan">
                    <p>Rp {{ item.total }}</p>
                  </b-col>
                </b-row>
              </div>
              <div class="total__pembayaran">
                <b-row>
                  <b-col cols="6" class="total_pembayaran_kiri">
                    <p>Total Harga</p>
                  </b-col>
                  <b-col cols="6" class="total_pembayaran_kanan">
                    <p>Rp {{ item.total }}</p>
                  </b-col>
                </b-row>
                <b-row>
                  <!-- <form class="mail__form" @click="buyHandler()">
                    <Button
                      align="center"
                      class="form__submit w-full mt-1 mb-4 w-100"
                      >MASUK</Button
                    >
                  </form> -->
                </b-row>
                <router-link class="w-100 mt-2" :to="'/detailpengiriman'">
                  <b-button
                    type="submit"
                    class="button_bayar_content w-100 mt-2"
                    @click="buyHandler()"
                  >
                    Beli
                  </b-button>
                </router-link>
              </div>
            </div>
          </b-container>
        </b-col>
      </b-row>
      <b-row>
        <div class="slide__wishlist"></div>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      dataSource: null,
      dataOrder: null,
      dataCart: null,
      isLoading: false,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          this.$cookies.get('__vmctHarimau').access_token
        }`,
      },
    }
  },
  created() {
    this.fetchData()
    this.listTotal()
  },
  methods: {
    async fetchData() {
      try {
        const resp = await this.$axios.$get(`/api/cart`, {
          headers: this.headers,
        })
        this.dataSource = resp.data
      } catch (error) {
        console.log(error)
      }
    },
    async listTotal() {
      this.isLoading = true
      try {
        const resp = await this.$axios.$get(`/api/cart/total`, {
          headers: this.headers,
        })
        this.dataOrder = resp.data
        this.isLoading = false
      } catch (error) {
        this.$toast.error('Gagal mendapatkan data order').goAway(3000) // if user need to know
        this.isLoading = false
      }
    },
    async buyHandler() {
      try {
        const resp = await this.$axios.$post(`/api/order/pivot`, null, {
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
@import '../styles/imports';

.keranjang__utama {
  background: #FFFFFF;
  box-shadow: 0px 0px 15px #00000024;
  opacit: 1;
}

.tittle__tas__belanja {
  margin-top: 40px;
  margin-left: 20px;
  font-size: 30px;
  letter-spacing: 4.5px;
  font-color: #000000;
  opacity: 0.75;
}

.tittle__rincian__belanja {
  padding-top: 40px;
  margin-left: 20px;
  font-size: 30px;
  letter-spacing: 4.5px;
  font-color: #000000;
  opacity: 0.75;
}

.isi__tas__belanja {
  margin-top: -15px;
  margin-left: 15px;
  margin-right: 50px;
  border-top: 3px solid #262626;
  opacity: 0.35;
}

.product_belanja {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 50px;
  height: 120px;
  border: 3px solid #F6F7F8;
  border-radius: 4px;
  opacity: 1;
}

.tas_product {
  margin-right: 80px;
}

.foto_product {
  width: 120px;
}

.nama_product {
  margin-bottom: 10px;
  normal: normal medium 24px / 15px Futura PT;
}

.harga_product {
  margin-bottom: 10px;
  text-align: left;
  font: normal normal normal 15px / 11px Proxima Nova;
  letter-spacing: 0.38px;
  color: #4AB4A2;
  opacity: 1;
}

.icon_trash {
  margin-left: 10px;
  margin-right: 10px;
}

.counter {
  width: 80px;
  overflow: hidden;
  border-radius: 10px;
  height: 18px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #2D4957;

  &__minus {
    background: #2D4957;
    width: 27%;
    color: #FFF;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  &__plus {
    background: #2D4957;
    width: 27%;
    color: #FFF;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  &__content {
    font-size: 15px;
    display: flex;
    align-items: center;
  }
}

.isi__rincian__belanja {
  margin-top: -15px;
  margin-left: 15px;
  margin-right: 30px;
  line-height: 40px;
  border-top: 3px solid #262626;
  opacity: 0.35;
}

.card__rincian__belanja {
  background: #FFFFFF;
  box-shadow: 0px 0px 15px #00000024;
  opacity: 1;
}

.diskon__icon {
  margin-top: 10px;
  margin-left: 40px;
}

.input_kode_diskon {
  margin-left: -90px;
  margin-top: 10px;
  font-size: 15px;
  font: normal normal Segoe UI;
  letter-spacing: 0.8px;
  padding-left: 8px;
}

.button__terapkan {
  margin-right: 60px;
}

.button_kode_diskon {
  margin-top: 10px;
  background-color: #2D4957;
  font-size: 15px;
  font: normal normal Segoe UI;
  letter-spacing: 0.8px;
  padding-left: 8px;
}

.rincian_pembayaranbarang_kiri {
  margin-left: 40px;
  margin-top: 20px;
  text-align: left;
  font: normal normal normal 15px / 17px Segoe UI;
  padding-bottom: 18px;
  letter-spacing: 2px;
  opacity: 1;
}

.rincian_pembayaranbarang_kanan {
  margin-top: 20px;
  margin-left: -100px;
  text-align: right;
  font: normal normal normal 15px / 17px Segoe UI;
  letter-spacing: 2px;
  opacity: 1;
}

.total__pembayaran {
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 60px;
  border-top: 2px solid #262626;
  padding-top: 19px;
}

.total_pembayaran_kiri {
  margin-bottom: 50px;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  font: normal normal Segoe UI;
  letter-spacing: 2px;
  opacity: 1;
}

.total_pembayaran_kanan {
  margin-bottom: 50px;
  text-align: right;
  font-weight: bold;
  font-size: 18px;
  font: normal normal Segoe UI;
  letter-spacing: 2px;
  opacity: 1;
}

.button_bayar_content {
  margin-bottom: 20px;
  background-color: #2D4957;
}

.slide__wishlist {
  font-size: 18px;
  margin-left: 40px;
  margin-top: 100px;
  margin-bottom: 50px;
}

.detail__slide__label {
  color: #000000;
  font-size: 18px;
  letter-spacing: 5px;
  opacity: 0.75;
}
</style>
