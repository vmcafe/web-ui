<template>
  <div class="hapus_alamat">
    <b-modal
      class="modal_edit_alamat"
      v-model="modalShow1"
      id="modal-2"
      ref="my-modal"
      hide-header
      hide-footer
      size="md"
    >
      <div class="icon_close text-right">
        <b-img
          src="~/assets/Exit_icon.svg"
          alt=""
          width="25px"
          @click="hideModal"
        >
        </b-img>
      </div>
      <div class="d-block text-center">
        <h1 class="judul_edit_alamat mt-2">Edit Alamat?</h1>
      </div>
      <div class="form_modal pt-4 pb-2 px-2">
        <form class="form_modal pt-4 pb-2 px-2" @submit.stop.prevent="onSubmit">
          <div class="row">
            <div class="col-12">
              <label for="nama_penerimma" class="label_modal col-12 mb-1 pt-2"
                >Nama penerima</label
              >
              <Field
                class="col-12 mb-2 field_input"
                type="text"
                placeholder="Yudistryan Izhar"
                :value="$v.form.receiver.$model"
                :error="$v.form.receiver.$dirty && $v.form.receiver.$error"
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
                :error="$v.form.district.$dirty && $v.form.district.$error"
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
                :value="$v.form.postal_code.$model"
                :error="
                  $v.form.postal_code.$dirty && $v.form.postal_code.$error
                "
                @model="$v.form.postal_code.$model = $event"
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
            <b-button class="btn_tambah_modal" type="submit">+ Edit</b-button>
            <b-button class="btn_batal_modal" @click="hideModal"
              >Batal</b-button
            >
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Field from '@/components/Fields/FieldAdd'
import { required } from 'vuelidate/lib/validators'
export default {
  components: {
    Field,
  },
  data() {
    return {
      dataAddress: null,
      dataAddress1: null,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          this.$cookies.get('__vmctHarimau').access_token
        }`,
      },
      form: {
        receiver: '',
        phone: '',
        district: '',
        postal_code: '',
        street: '',
      },
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
      postal_code: {
        required,
      },
      street: {
        required,
      },
    },
  },
  created() {
    this.fetchData()
    this.editData()
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    async fetchData() {
      this.isLoading = true
      try {
        const resp = await this.$axios.$get(`/api/address/get`, {
          headers: this.headers,
        })
        this.dataAddress1 = resp.data
        this.isLoading = false
      } catch (error) {
        this.$toast.error('Gagal mendapatkan data user').goAway(3000) // if user need to know
        this.isLoading = false
      }
    },
    async onSubmit() {
      this.$v.$touch()
      if (!this.$v.form.$invalid) {
        this.isLoading = true
        try {
          const resp = await this.$axios.$put('/api/address/edit/', this.form, {
            headers: this.headers,
          })
          this.dataAddress = resp.data
          setTimeout(() => {
            location.reload()
          }, 3000)
        } catch (error) {
          this.isLoading = false
          console.log(error)
        }
      } else {
        this.$toast.error('Ada yang salah dalam pengisian form').goAway(3000)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../styles/imports';
</style>
