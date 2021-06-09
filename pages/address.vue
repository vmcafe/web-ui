<template>
  <div>
    <NavbarAdmin />

    <div class="row no-gutters mt-5" style="height: 100vh">
      <Sidebar />

      <div class="col-md-10 p-5 bg-light">
        <h5>Addres Customer</h5>

        <div class="tambah-product">
          <b-button v-b-modal.modal-1 class="mt-4" variant="primary"
            >Add Address</b-button
          >
          <b-modal
            id="modal-1"
            ref="my-modal"
            class="modal_tambah_alamat"
            hide-header
            hide-footer
            size="md"
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
              <h1 class="judul_tambah_alamat mt-2">Add Address</h1>
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
                <b-button class="btn_tambah_modal" type="submit" variant="info"
                  >+ Add</b-button
                >
                <b-button
                  class="btn_batal_modal"
                  @click="hideModal"
                  variant="outline-info"
                  >Cancel</b-button
                >
              </div>
            </form>
          </b-modal>
        </div>

        <b-card class="col-md-12 mt-4">
          <div class="table-responsive">
            <table class="table table- table-hover">
              <thead>
                <tr>
                  <th scope="col">Nama Penerima</th>
                  <th scope="col">No Telepon</th>
                  <th scope="col">Kecamatan / Kota</th>
                  <th scope="col">Kode Pos</th>
                  <th scope="col">Alamat</th>
                  <th colspan="2" scope="col" class="text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fitria</td>
                  <td>088929383347</td>
                  <td>Malang</td>
                  <td>65145</td>
                  <td>Jl. Malang</td>
                  <td class="text-center">
                    <b-button v-b-modal.modal-2 variant="danger">Edit</b-button>
                    <b-modal
                      id="modal-2"
                      ref="my-modal"
                      class="modal_tambah"
                      hide-header
                      hide-footer
                      size="md"
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
                        <h1 class="judul_tambah mt-2">Edit Alamat</h1>
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
                                $v.form.receiver.$dirty &&
                                $v.form.receiver.$error
                              "
                              @model="$v.form.receiver.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="no_hp"
                              class="label_modal col-12 mb-1 pt-2"
                              >No HP</label
                            >
                            <Field
                              class="col-12 mb-2 field_input"
                              type="text"
                              placeholder="+6283848467748"
                              :value="$v.form.phone.$model"
                              :error="
                                $v.form.phone.$dirty && $v.form.phone.$error
                              "
                              @model="$v.form.phone.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="district"
                              class="label_modal col-12 mb-1 pt-2"
                              >Kecamatan/Kota</label
                            >
                            <Field
                              class="col-12 mb-2 field_input"
                              type="text"
                              placeholder="Kandangan, kab. Kediri, Jawa Timur"
                              :value="$v.form.district.$model"
                              :error="
                                $v.form.district.$dirty &&
                                $v.form.district.$error
                              "
                              @model="$v.form.district.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="portal_pos"
                              class="label_modal col-12 mb-1 pt-2"
                              >Kode Pos</label
                            >
                            <Field
                              class="col-12 mb-2 ml-auto field_input"
                              type="text"
                              placeholder="642942"
                              :value="$v.form.postal_code.$model"
                              :error="
                                $v.form.postal_code.$dirty &&
                                $v.form.postal_code.$error
                              "
                              @model="$v.form.postal_code.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="street"
                              class="label_modal col-12 mb-1 pt-2"
                              >Alamat</label
                            >
                            <Field
                              class="col-12 mb-4 field_input"
                              type="text"
                              placeholder="Jl. Karang kitri no. 52, Kandangan"
                              :value="$v.form.street.$model"
                              :error="
                                $v.form.street.$dirty && $v.form.street.$error
                              "
                              @model="$v.form.street.$model = $event"
                            />
                          </div>
                        </div>

                        <div class="btn_modal text-center mb-3 mt-2">
                          <b-button
                            class="btn_tambah_modal"
                            type="submit"
                            variant="info"
                            >Edit</b-button
                          >
                          <b-button
                            class="btn_batal_modal"
                            @click="hideModal"
                            variant="outline-info"
                            >Cancel</b-button
                          >
                        </div>
                      </form>
                    </b-modal>
                  </td>
                  <td class="text-center">
                    <b-button v-b-modal.modal-3 variant="warning"
                      >Delete</b-button
                    >
                    <b-modal
                      id="modal-3"
                      ref="my-modal"
                      class="modal_tambah"
                      hide-header
                      hide-footer
                      size="md"
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
                        <h1 class="judul_tambah mt-2">Delete Alamat</h1>
                      </div>
                      <form
                        class="form_modal pt-4 pb-2 px-2"
                        @submit.stop.prevent="onSubmit"
                      >
                        <div class="row">
                          <div class="col-12 mb-4">
                            <p>Apakah Anda yakin ingin menghapus alamat?</p>
                          </div>
                        </div>

                        <div class="btn_modal text-center mb-3 mt-2">
                          <b-button
                            class="btn_tambah_modal"
                            type="submit"
                            variant="info"
                            >Yes</b-button
                          >
                          <b-button
                            class="btn_batal_modal"
                            @click="hideModal"
                            variant="outline-info"
                            >No</b-button
                          >
                        </div>
                      </form>
                    </b-modal>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarAdmin from '@/components/Navbar/navbar_admin.vue'
import Sidebar from '@/components/Sidebar/sidebar.vue'
import Field from '@/components/Fields/FieldAdd'
import { required } from 'vuelidate/lib/validators'
export default {
  components: {
    NavbarAdmin,
    Sidebar,
    Field,
  },
  data() {
    return {
      dataAdress: null,
      form: {
        receiver: '',
        phone: '',
        district: '',
        postal_code: '',
        street: '',
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          this.$cookies.get('__vmctSinga').access_token
        }`,
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
  created() {},
  methods: {
    async onSubmit() {
      this.$v.$touch()
      if (!this.$v.form.$invalid) {
        this.isLoading = true
        try {
          const resp = await this.$axios.$post('/api/address/add', this.form, {
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

.judul_tambah
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
  opacity 1
  font-size 12px
  font normal normal Proxima Nova
  letter-spacing 1.8px
  color  #FFFFFF

.btn_batal_modal
  outline-color #F6F6F6
  font-size 12px
  font normal normal Proxima Nova
  letter-spacing 1.8px
  color #2D4957
</style>
