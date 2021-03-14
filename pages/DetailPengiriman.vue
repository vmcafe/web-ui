<template>
  <div>
    <b-card class="text-center card-detail-pengiriman">
      <b-card-text>DETAIL PENGIRIMAN</b-card-text>
      <b-card-text>ALAMAT</b-card-text>
      <b-card class="alamat">
        <b-card-text>
          <p class="tujuan-alamat">Rumah</p>
          <p class="detail-alamat">
            Jl. Kenangan no.69, Kandangan Kec. Kandangan, Kabupaten Kediri 64294
          </p>
        </b-card-text>
      </b-card>
      <a href="/" target="" class="tambah-alamat">+ Tambah alamat baru</a>
      <b-card-text>
        <p>JASA PENGIRIMAN</p>
        <b-card>
          <a href="/" target="" class="jasa-pengiriman">Logistik</a>
        </b-card>
        <b-card>
          <a href="/" target="" class="jasa-pengiriman">Pengiriman Instan</a>
        </b-card>
      </b-card-text>
      <b-card class="tagihan">
        <b-card-text>
          <h1>TAGIHAN AKHIR</h1>
          <div>
            <b-input-group
              v-for="size in ['sm']"
              :key="size"
              :size="size"
              class="mb-3"
            >
              <b-form-input placeholder="Masukkan kode promo"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" text="Button" variant="primary"
                  >Terapkan</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </div>
          <b-container>
            <div class="row">
              <div class="section-left col-md-6">
                <p>Total Harga (3 Barang)</p>
                <p>Total Diskon</p>
                <p>Ongkos Kirim</p>
                <p>----------</p>
                <p>Total Harga</p>
              </div>
              <div class="section-right col-md-6">
                <p>Rp135.000</p>
                <p>Rp0</p>
                <p>Rp25.000</p>
                <p>----------</p>
                <p>Rp160.000</p>
              </div>
            </div>
          </b-container>
          <b-card>
            <b-card-text>-Pilih Metode Pembayaran-</b-card-text>
          </b-card>
          <b-button href="#" variant="primary">Bayar</b-button>
        </b-card-text>
      </b-card>
    </b-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '../styles/imports'

.card-detail-pengiriman
    margin-right 100px
    margin-left 100px
    background #FFFFFF 0% 0% no-repeat padding-box
    box-shadow 0px 0px 15px #00000024
    opacity 1

.alamat
    margin-right 260px
    margin-left 260px
    background #FFFFFF 0% 0% no-repeat padding-box
    border 3px solid #ACB3BB
    border-radius: 4px
    opacity 0.5

.tujuan-alamat
    font-size 20px
    font-weight bold
    text-align left
    font normal normal normal Proxima Nova
    margin-bottom 10px
    letter-spacing 0.45px
    color #2D4957
    opacity 1

.detail-alamat
    font-size 18px
    text-align left
    font normal normal normal Proxima Nova
    letter-spacing 0.45px
    color #2D4957
    opacity 1

.tambah-alamat
    padding-bottom 100px
    font-size 12px
    text-align right
    font normal normal normal Proxima Nova
    letter-spacing 0.3px
    color #2D4957
    opacity 1

.tagihan
    margin-right 283px
    margin-left 283px
    background #FFFFFF 0% 0% no-repeat padding-box
    box-shadow 0px 4px 10px #00000029
    opacity 1
</style>
