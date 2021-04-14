<template>
  <div class="detail__pengiriman">
    <Navbar />
    <b-container class="detail__pengiriman__border">
      <b-row>
        <b-col md="4" class="mx-auto">
          <!-- judul -->
          <h1 class="detail_pengiriman__judul">DETAIL PENGIRIMAN</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="5" class="mx-auto">
          <!-- alamat -->
          <div class="alamat">
            <h1 class="alamat__judul text-center">ALAMAT</h1>
            <div class="alamat_content">
              <client-only>
                <swiper class="swiper" :options="swiperOption">
                  <swiper-slide
                    v-for="item in dataAddress"
                    :key="item"
                    class="swiper_slide px-auto"
                  >
                    <AlamatCard :street="item.street" />
                  </swiper-slide>
                  <div slot="button-prev" class="swiper-button-prev"></div>
                  <div slot="button-next" class="swiper-button-next"></div>
                </swiper>
              </client-only>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" class="mx-auto">
          <!-- tambah alamat -->
          <div class="tambah_alamat text-right">
            <b-link id="show-link" @click="showModal"
              >+ Tambah alamat baru</b-link
            >
            <b-modal
              ref="my-modal"
              class="modal_tambah_alamat"
              hide-header
              hide-footer
              size="sm"
            >
              <div class="icon_close text-right">
                <b-img
                  src="~/assets/icons/ic_exit.svg"
                  alt=""
                  width="25px"
                  @click="hideModal"
                ></b-img>
              </div>
              <div class="d-block text-center">
                <h1 class="judul_tambah_alamat mt-2">Tambah Alamat Baru</h1>
              </div>
              <form
                class="form_modal pt-4 pb-2 px-2"
                @submit.stop.prevent="onSubmit"
              >
                <div class="row">
                  <div class="col-12">
                    <label
                      for="nama_penerimma"
                      class="label_modal col-12 mb-1 pt-2"
                      >Nama penerima</label
                    >
                    <Field
                      class="col-12 mb-2 field_input"
                      type="text"
                      placeholder="Yudistryan Izhar"
                      :value="$v.form.receiver.$model"
                      :error="
                        $v.form.receiver.$dirty && $v.form.receiver.$error
                      "
                      @model="$v.form.receiver.$model = $event"
                    />
                  </div>
                  <div class="col-12">
                    <label for="no_hp" class="label_modal col-12 mb-1 pt-2"
                      >No HP</label
                    >
                    <Field
                      class="col-12 mb-2 field_input"
                      type="text"
                      placeholder="+6283848467748"
                      :value="$v.form.phone.$model"
                      :error="$v.form.phone.$dirty && $v.form.phone.$error"
                      @model="$v.form.phone.$model = $event"
                    />
                  </div>
                  <div class="col-12">
                    <label for="district" class="label_modal col-12 mb-1 pt-2"
                      >Kecamatan/Kota</label
                    >
                    <Field
                      class="col-12 mb-2 field_input"
                      type="text"
                      placeholder="Kandangan, kab. Kediri, Jawa Timur"
                      :value="$v.form.district.$model"
                      :error="
                        $v.form.district.$dirty && $v.form.district.$error
                      "
                      @model="$v.form.district.$model = $event"
                    />
                  </div>
                  <div class="col-12">
                    <label for="portal_pos" class="label_modal col-12 mb-1 pt-2"
                      >Kode Pos</label
                    >
                    <Field
                      class="col-12 mb-2 ml-auto field_input"
                      type="text"
                      placeholder="642942"
                      :value="$v.form.portal_pos.$model"
                      :error="
                        $v.form.portal_pos.$dirty && $v.form.portal_pos.$error
                      "
                      @model="$v.form.portal_pos.$model = $event"
                    />
                  </div>
                  <div class="col-12">
                    <label for="street" class="label_modal col-12 mb-1 pt-2"
                      >Alamat</label
                    >
                    <Field
                      class="col-12 mb-4 field_input"
                      type="text"
                      placeholder="Jl. Karang kitri no. 52, Kandangan"
                      :value="$v.form.street.$model"
                      :error="$v.form.street.$dirty && $v.form.street.$error"
                      @model="$v.form.street.$model = $event"
                    />
                  </div>
                </div>

                <div class="btn_modal text-center mb-3 mt-2">
                  <b-button class="btn_tambah_modal" type="submit"
                    >+ Tambah</b-button
                  >
                  <b-button class="btn_batal_modal" @click="hideModal"
                    >Batal</b-button
                  >
                </div>
              </form>
            </b-modal>
          </div>

          <!-- jasa pengiriman -->
          <div class="pengiriman">
            <h1 class="jasa_pengiriman">JASA PENGIRIMAN</h1>
            <b-button-group vertical class="button_logistik">
              <b-button
                squared
                variant="outline-secondary"
                class="button_logistik_pilihan"
                @click="logistik = !logistik"
                >Logistik</b-button
              >

              <b-button
                v-for="item in [1]"
                :key="item"
                v-show="logistik"
                squared
                variant="outline-secondary"
                class="button_logistik_pilihan2"
              >
                <Delivery>JNE 24.000</Delivery>
              </b-button>
            </b-button-group>
            <!-- <b-button-group vertical class="button_instan">
              <b-button
                squared
                variant="outline-secondary"
                class="button_instan_pilihan"
                @click="instan = !instan"
                >Pengiriman Instan</b-button
              >
              <b-button
                v-show="instan"
                squared
                variant="outline-secondary"
                class="button_instan_pilihan"
                >Go-send</b-button
              >
              <b-button
                v-show="instan"
                squared
                variant="outline-secondary"
                class="button_instan_pilihan"
                >Grab express</b-button
              >
              <b-button
                v-show="instan"
                squared
                variant="outline-secondary"
                class="button_instan_pilihan"
                >Maxim</b-button
              >
            </b-button-group> -->
          </div>

          <!-- tagihan -->
          <div>
            <TagihanCard
              kode=""
              jumlah="3"
              harga="135000"
              diskon="0"
              ongkir="25000"
              total=""
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import AlamatCard from '@/components/Cards/AlamatCard'
import TagihanCard from '@/components/Cards/TagihanCard'
import Field from '@/components/Fields/FieldAdd'
import Delivery from '@/components/Buttons/DeliveryBtn'
import { required } from 'vuelidate/lib/validators'

export default {
  components: {
    Navbar,
    Swiper,
    SwiperSlide,
    AlamatCard,
    TagihanCard,
    Field,
    Delivery,
  },
  data() {
    return {
      dataAddress: null,
      logistik: false,
      instan: false,
      transfer: false,
      jasa: false,
      cod: false,
      text1: '',
      form: {
        receiver: '',
        phone: '',
        district: '',
        portal_pos: '',
        street: '',
      },
      swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        breakpoints: {
          1024: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
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
        direction: 'horizontal',
        slidesPerView: 1,
        mousewheel: true,
      },
      sliding: null,
      slide: 0,
    }
  },
  validations: {
    form: {
      receiver: {
        required,
      },
      phone: {
        required,
      },
      district: {
        required,
      },
      portal_pos: {
        required,
      },
      street: {
        required,
      },
    },
  },
  created() {
    this.fetchAddress()
  },
  methods: {
    async onSubmit() {
      this.$v.$touch()
      if (!this.$v.form.$invalid) {
        this.isLoading = true
        try {
          const resp = await this.$axios.$post('/api/address/add', this.form)
          console.log(resp)
          this.isSuccess = true
          setTimeout(() => {
            this.$router.push('/detailpengiriman')
            this.isLoading = false
          }, 3000)
        } catch (error) {
          this.isLoading = false
          this.isSuccess = false
        }
      } else {
        this.$toast.error('Ada yang salah dalam pengisian form').goAway(3000)
      }
    },
    async fetchAddress() {
      try {
        const resp = await this.$axios.$get(`/api/address/get`)
        this.dataAddress = resp.data
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
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../styles/imports'


.detail__pengiriman__border
    background #FFFFFF
    box-shadow 0px 0px 15px #00000024
    opacity 1

.detail_pengiriman__judul
    margin-top 10px
    margin-bottom 7px
    padding-bottom 6px
    font-size 18px
    font-weight bold
    text-align center
    font: normal normal Futura PT
    letter-spacing: 4.5px
    color #000000
    opacity 0.75
    border-bottom 2px solid #262626

.alamat__judul
  margin-top 50px
  font-size 18px
  font-weight bold
  font normal normal Futura PT
  letter-spacing 4.5px
  color #000000
  opacity 0.75

.swiper-button-prev, .swiper-button-next
  color #2D4957

.tambah_alamat
  margin-top 8px
  font-size 10px
  font normal Proxima Nova
  letter-spacing 0.3px
  color #2D4957

.judul_tambah_alamat
  font-size 18px
  font-weight bold
  font normal normal Proxima Nova
  letter-spacing 3px
  color #2D4957
  border-bottom 1px solid #2D4957
  padding-bottom 7px

.label_modal
  font-size 11px
  font normal normal Proxima Nova
  letter-spacing 0.7px
  color #2D4957


.btn_tambah_modal
  background #2D4957
  opacity 1
  font-size 12px
  font normal normal Proxima Nova
  letter-spacing 1.8px
  color  #FFFFFF

.btn_batal_modal
  background #F6F6F6
  outline-color #F6F6F6
  font-size 12px
  font normal normal Proxima Nova
  letter-spacing 1.8px
  color #2D4957

.jasa_pengiriman
  margin-top 80px
  margin-bottom 10px
  text-align center
  font-size 18px
  font-weight bold
  font normal normal Futura PT
  letter-spacing 4.5px
  color #000000
  opacity 0.75

.button_logistik
  display block
  margin-bottom 8px

.button_logistik_pilihan
  font normal normal medium 10px Futura PT
  letter-spacing 0.7px
  color #2D4957
  border 3px solid #ACB3BB
  opacity 1

.button_logistik_pilihan2
  font normal normal medium 10px Futura PT
  letter-spacing 0.7px
  color #2D4957
  border 3px solid #ACB3BB
  opacity 1
  width 300px

.button_instan
  display block

.button_instan_pilihan
  font normal normal medium 10px Futura PT
  letter-spacing 0.7px
  color #2D4957
  border 3px solid #ACB3BB
  opacity 1

.metode__pembayaran
    margin-top 30px
    margin-bottom 30px

.metode__pembayaran__group
    display block

.metode__pembayaran__pilihan
    border 3px solid #ACB3BB
    font-size 12px
    font normal normal Futura PT
    letter-spacing 1.5px
    opacity 1

.button__bayar
    padding-bottom 24px

.button__bayar__content
    font normal normal bold 9px/17px Segoe UI
    letter-spacing 2px
    background #2D4957
    font-color #FFFFFF
</style>
