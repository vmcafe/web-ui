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
              <p>Total Harga ({{ barang }} barang)</p>
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
              <p>Rp{{ total }}</p>
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
          <b-button
            v-show="pilih"
            block
            squared
            variant="outline-secondary"
            class="metode__pembayaran__pilihan"
          >
            Transfer</b-button
          >
          <b-button
            v-show="pilih"
            block
            squared
            variant="outline-secondary"
            class="metode__pembayaran__pilihan"
          >
            COD</b-button
          >
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
  props: ['kode', 'barang', 'harga', 'diskon', 'ongkir', 'total'],
  data() {
    return {
      pilih: false,
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

.button__bayar
    padding-bottom 24px

.button__bayar__content
    font normal normal bold 9px/17px Segoe UI
    letter-spacing 2px
    background #2D4957
    font-color #FFFFFF
</style>
