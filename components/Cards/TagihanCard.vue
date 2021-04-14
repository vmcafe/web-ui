<template>
  <div class="tagihan">
    <div class="judul__tagihan">
      <h1 class="judul__tagihan__content">TAGIHAN AKHIR</h1>
    </div>
    <div class="tagihan__content">
      <div class="kode__diskon">
        <b-row>
          <b-col cols="2">
            <b-img
              left
              src="~/assets/icons/ic_diskon.svg"
              alt=""
              width="34px"
              rounded="circle"
              class="diskon__icon"
            ></b-img>
          </b-col>
          <b-col cols="10">
            <b-input-group>
              <b-form-input
                id="form-input-kode-promo"
                size="lg"
                placeholder="Masukkan kode promo"
                class="input__kode__diskon"
                >{{ kode }}</b-form-input
              >
              <b-input-group-append>
                <b-button
                  text="Button"
                  size="lg"
                  variant="secondary"
                  class="input__kode__diskon"
                  >Terapkan</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </b-col>
        </b-row>
      </div>
      <div class="rincian__pembayaran">
        <div class="rincian__pembayaran__barang">
          <b-row>
            <b-col cols="8" class="rincian__pembayaran__barang__kiri">
              <p>Total Harga ({{ jumlah }} barang)</p>
              <p>Total Diskon</p>
              <p>Ongkos Kirim</p>
            </b-col>
            <b-col cols="4" class="rincian__pembayaran__barang__kanan">
              <p>Rp{{ harga }}</p>
              <p>Rp{{ diskon }}</p>
              <p>Rp{{ ongkir }}</p>
            </b-col>
          </b-row>
        </div>
        <div class="total__pembayaran">
          <b-row>
            <b-col cols="6" class="total__pembayaran__kiri">
              <p>Total Harga</p>
            </b-col>
            <b-col cols="6" class="total__pembayaran__kanan">
              <p>Rp{{ harga + diskon + ongkir }}</p>
            </b-col>
          </b-row>
        </div>
      </div>
      <div class="metode__pembayaran">
        <b-button-group vertical class="metode__pembayaran__group">
          <b-button
            block
            squared
            variant="outline-secondary"
            class="metode__pembayaran__pilihan"
            @click="pilih = !pilih"
            >-Pilih metode pembayaran-</b-button
          >
          <div>
            <b-button
              v-show="pilih"
              block
              squared
              variant="outline-secondary"
              class="metode__pembayaran__pilihan mt-1"
              @click="state = 1"
            >
              Transfer</b-button
            >
            <div v-if="state == 1">
              <b-button
                block
                squared
                variant="outline-secondary"
                class="pilih_bank mx-auto"
                @click="bank = !bank"
              >
                -Pilih Bank-</b-button
              >
              <b-button
                v-for="item in nama_bank"
                :key="item"
                v-show="bank"
                block
                variant="outline-secondary"
                class="pilih_bank_bank mx-auto"
              >
                {{ item }}</b-button
              >
            </div>
          </div>
          <div>
            <b-button
              v-show="pilih"
              block
              squared
              variant="outline-secondary"
              class="metode__pembayaran__pilihan mt-1"
              @click="state = 2"
            >
              COD</b-button
            >
            <div v-if="state == 2" class="text-center">
              <b-button squared variant="outline-secondary" class="pilih_bank">
                COD</b-button
              >
            </div>
          </div>
        </b-button-group>
      </div>
      <div class="button__bayar">
        <b-button href="/" block class="button__bayar__content mt-2"
          >Bayar</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['kode', 'jumlah', 'harga', 'diskon', 'ongkir'],
  data() {
    return {
      pilih: false,
      transfer: false,
      bank: false,
      state: 0,
      nama_bank: ['BRI', 'BNI', 'Mandiri'],
    }
  },
}
</script>

<style lang="stylus" scoped>
.tagihan
    margin-top 80px
    box-shadow 0px 4px 10px #00000029
    opacity 1

.judul__tagihan__content
    font normal normal medium 30px/41px Futura PT
    letter-spacing 2.5px
    font-weight bold
    ont-size 18px
    opacity 0.75
    border-bottom 2px solid #262626
    padding-top 30px
    padding-bottom 6px
    padding-left 17px
    margin-bottom 18px

.tagihan__content
    margin-left 33px
    margin-right 33px

.kode__diskon
    margin-bottom 15px

.input__kode__diskon
    font-size 10px
    font normal normal Segoe UI
    letter-spacing 0.8px
    padding-left 8px

.rincian__pembayaran__barang__kiri
    text-align left
    font normal normal normal 9px/17px Segoe UI
    padding-bottom 18px
    letter-spacing 2px
    opacity 1

.rincian__pembayaran__barang__kanan
    text-align right
    font normal normal normal 9px/17px Segoe UI
    letter-spacing 2px
    opacity 1

.total__pembayaran
    border-top 2px solid #262626
    padding-top 19px

.total__pembayaran__kiri
    text-align left
    font-weight bold
    font-size 12px
    font normal normal Segoe UI
    letter-spacing 2px
    opacity 1

.total__pembayaran__kanan
    text-align right
    font-weight bold
    font-size 12px
    font normal normal Segoe UI
    letter-spacing 2px
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

.pilih_bank
    border 2px solid #ACB3BB
    font-size 10px
    width 180px
    font normal normal Futura PT
    letter-spacing 1.5px

.pilih_bank_bank
    border 2px solid #ACB3BB
    font-size 10px
    font normal normal Futura PT
    letter-spacing 1.5px
    width 150px
    height 28px
    border-radius 5px
    margin-top -2px

.button__bayar
    padding-bottom 24px

.button__bayar__content
    font normal normal bold 9px/17px Segoe UI
    letter-spacing 2px
    background #2D4957
    font-color #FFFFFF
</style>
