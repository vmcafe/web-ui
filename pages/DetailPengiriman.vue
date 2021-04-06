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
                    v-for="item in [1, 2, 3]"
                    :key="item"
                    class="swiper_slide px-auto"
                  >
                    <AlamatCard
                      tujuan="Rumah"
                      detail="Jl. Kenangan no.69,
                      Kandangan Kandangan, Kabupaten Kediri 64294"
                    />
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
              <div class="form_modal pt-4 pb-2 px-2">
                <b-form-group class="form_modal_content">
                  <b-row>
                    <b-col>
                      <label
                        for="nama_alamat"
                        invalid-feedback="Nama alamat is required"
                        class="label_modal mb-1"
                        >Nama alamat</label
                      >
                      <b-form-input
                        id="nama_alamat"
                        placeholder="Contoh: Rumah. Kosan, Kantor"
                        type="text"
                        class="input_modal"
                        required
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="6">
                      <label
                        for="nama_penerimma"
                        invalid-feedback="Nama alamat is required"
                        class="label_modal mb-1 pt-2"
                        >Nama penerima</label
                      >
                      <b-form-input
                        id="nama_penerima"
                        placeholder="Yudistryan Izhar"
                        type="text"
                        class="input_modal"
                        required
                      ></b-form-input>
                    </b-col>
                    <b-col cols="6">
                      <label
                        for="no_hp"
                        invalid-feedback="Nama alamat is required"
                        class="label_modal mb-1 pt-2"
                        >No HP</label
                      >
                      <b-form-input
                        id="no_hp"
                        placeholder="+628131151080"
                        type="text"
                        class="input_modal"
                        required
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="8">
                      <label
                        for="kec_kota"
                        invalid-feedback="Nama alamat is required"
                        class="label_modal mb-1 pt-2"
                        >Kecamatan / Kota</label
                      >
                      <b-form-input
                        id="kec_kota"
                        placeholder="Kandangan, Kab. Kediri, Jawa Timur"
                        type="text"
                        class="input_modal"
                        required
                      ></b-form-input>
                    </b-col>
                    <b-col cols="4">
                      <label
                        for="kode_pos"
                        invalid-feedback="Nama alamat is required"
                        class="label_modal mb-1 pt-2"
                        >Kode Pos</label
                      >
                      <b-form-input
                        id="kode_pos"
                        placeholder="642942"
                        type="text"
                        class="input_modal"
                        required
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <label
                        for="alamat"
                        invalid-feedback="Nama alamat is required"
                        class="label_modal mb-1 pt-2"
                        >Alamat</label
                      >
                      <b-form-textarea
                        id="alamat"
                        placeholder="Jl. Karang kitri no. 52, Kandangan"
                        type="text"
                        class="input_modal"
                        required
                      ></b-form-textarea>
                    </b-col>
                  </b-row>
                </b-form-group>
              </div>

              <div class="btn_modal text-center mb-3">
                <b-button class="btn_tambah_modal" @click="hideModal"
                  >+ Tambah</b-button
                >
                <b-button class="btn_batal_modal" @click="hideModal"
                  >Batal</b-button
                >
              </div>
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
                v-show="logistik"
                squared
                variant="outline-secondary"
                class="button_logistik_pilihan2"
              >
                J&T Regular</b-button
              >
              <b-button
                v-show="logistik"
                squared
                variant="outline-secondary"
                class="button_logistik_pilihan2"
              >
                JNE</b-button
              >
              <b-button
                v-show="logistik"
                squared
                variant="outline-secondary"
                class="button_logistik_pilihan2"
              >
                Sicepat</b-button
              >
            </b-button-group>
            <b-button-group vertical class="button_instan">
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
            </b-button-group>
          </div>

          <!-- tagihan -->
          <div>
            <TagihanCard
              kode=""
              barang="3"
              harga="135.000"
              diskon="0"
              ongkir="25.000"
              total="160.000"
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

export default {
  components: {
    Navbar,
    Swiper,
    SwiperSlide,
    AlamatCard,
    TagihanCard,
  },
  data() {
    return {
      logistik: false,
      instan: false,
      transfer: false,
      cod: false,
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
  methods: {
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

.detail__pengiriman

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
  font-size 12px
  font normal normal Proxima Nova
  letter-spacing 0.7px
  color #2D4957

.input_modal
  font-size 9px
  font normal normal Proxima Nova
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
