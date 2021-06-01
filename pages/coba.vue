<template>
  <b-container class="pembayaran__border">
    <b-row>
      <b-col md="4" class="mx-auto mt-3">
        <h1 class="pembayaran__judul">PEMBAYARAN</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="pilih__metode pb-3">
          <div>
            <h1 class="pilih__metode__judul">Metode Pembayaran</h1>
          </div>
          <div>
            <b-button class="pilih__metode__bayar" @click="showModal"
              >Pilih</b-button
            >
            <strong class="selected__bayar">{{ selected }}</strong>
          </div>
          <b-modal
            id="modal-prevent-closing"
            ref="my-modal"
            title="Pilih Metode Pembayaran"
            hide-header
            size="md"
            button-size="sm"
          >
            <div class="icon_close text-right">
              <b-img
                src="~/assets/icons/ic_exit.svg"
                alt=""
                width="25px"
                @click="hideModal"
                sizes="sm"
              ></b-img>
            </div>
            <div class="d-block text-center">
              <h1 class="modal__bayar mt-2">Tambah Alamat Baru</h1>
            </div>
            <form ref="form" @submit.stop.prevent="onSubmit">
              <b-form-group
                label="E-money"
                v-slot="{ ariaDescribedby }"
                class="modal__bayar"
              >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="GoPay"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/gopay.png"
                    alt=""
                    width="50px"
                    style="margin-right: 10px"
                  ></b-img>
                  GoPay
                </b-form-radio>
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Qris"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/qris.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  Qris</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="ShopeePay"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/shopeepay.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  ShopeePay</b-form-radio
                >
              </b-form-group>
              <!-- <b-form-group
                label="Pembayaran dengan kartu"
                v-slot="{ ariaDescribedby }"
                class="modal__bayar"
              >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Visa"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/visa.jpg"
                    alt=""
                    width="50px"
                  ></b-img>
                  VISA</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Mastercard"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/mastercard.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  Mastercard</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="JCB"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/jcb.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  JCB</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="American Express"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/americanexpress.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  American Express</b-form-radio
                >
              </b-form-group> -->
              <b-form-group
                label="Bank Transfer"
                v-slot="{ ariaDescribedby }"
                class="modal__bayar"
              >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="BCA"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/bca.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  BCA Virtual Account</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="BRIVA"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/briva.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  BRIVA</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="BNI"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/bni.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  BNI</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Mandiri"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/mandiri.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  Mandiri</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Permata Bank"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/permata.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  Permata Bank</b-form-radio
                >
              </b-form-group>
              <!-- <b-form-group
                label="Over the counter"
                v-slot="{ ariaDescribedby }"
                class="modal__bayar"
              >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="indomaret"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/indomaret.jpg"
                    alt=""
                    width="50px"
                  ></b-img>
                  Indomaret</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="alfamart"
                  class="modal__bayar"
                >
                  <b-img
                    src="~/assets/pembayaran/alfamart.png"
                    alt=""
                    width="50px"
                  ></b-img>
                  Alfamart</b-form-radio
                >
              </b-form-group> -->
            </form>

            <template #modal-footer="{ ok, cancel }">
              <b-button size="sm" variant="dark" @click="ok()"> OK </b-button>
              <b-button size="sm" variant="outline-dark" @click="cancel()">
                Cancel
              </b-button>
            </template>
          </b-modal>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card class="card__rincian">
          <div class="rincian__bayar">
            <div>
              <h1 class="rincian__judul">Rincian Pembayaran</h1>
            </div>
            <b-row>
              <b-col md="3">
                <p class="content__rincian">Total bayar</p>
              </b-col>
              <b-col md="9">
                <p class="content__rincian">Rp 25.000</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="content__rincian">Biaya layanan</p>
              </b-col>
              <b-col md="9">
                <p class="content__rincian">Rp 1.000</p>
              </b-col>
            </b-row>
          </div>
        </b-card>

        <div>
          <b-button
            block
            type="submit"
            class="button__bayar mt-5"
            variant="dark"
          >
            Bayar
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
    }
  },
  methods: {
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

.pembayaran__border
    margin-top 40px
    background #FFFFFF
    box-shadow 0px 0px 15px #00000024
    opacity 1

.pembayaran__judul
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

  .pilih__metode__judul, .rincian__judul, .content__rincian, .modal__bayar
    margin-top 30px
    margin-bottom 7px
    margin-left 20px
    padding-bottom 6px
    font-size 14px
    font-weight bold
    font: normal normal Futura PT
    letter-spacing: 1.5px
    color #000000
    opacity 0.75

  .pilih__metode__bayar
    margin-left 20px
    font-size 12px
    font-weight bold
    font: normal normal Futura PT
    letter-spacing: 1.5px
    opacity 0.75

  .selected__bayar
    margin-left 20px
    font-size 12px
    font-weight bold
    font: normal normal Futura PT
    letter-spacing: 1.5px
    opacity 0.75

  .button__bayar
    margin-right 20px
    margin-bottom 20px
    font-size 12px
    font-weight bold
    font: normal normal Futura PT
    letter-spacing: 1.5px
    opacity 0.75

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
</style>
