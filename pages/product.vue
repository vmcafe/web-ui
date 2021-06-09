<template>
  <div>
    <NavbarAdmin />

    <div class="row no-gutters mt-5" style="height: 100vh">
      <Sidebar />

      <div class="col-md-10 p-5 bg-light">
        <h5>Product</h5>

        <div class="tambah-product">
          <b-button v-b-modal.modal-1 class="mt-4" variant="primary"
            >Add Product</b-button
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
              <h1 class="judul_tambah_alamat mt-2">Add Product</h1>
            </div>
            <form
              class="form_modal pt-4 pb-2 px-2"
              @submit.stop.prevent="onSubmit"
            >
              <div class="row">
                <div class="col-12">
                  <label for="name" class="label_modal col-12 mb-1 pt-2"
                    >Name</label
                  >
                  <Field
                    class="col-12 mb-2 field_input"
                    type="text"
                    placeholder=""
                    :value="$v.form.name.$model"
                    :error="$v.form.name.$dirty && $v.form.name.$error"
                    @model="$v.form.name.$model = $event"
                  />
                </div>
                <div class="col-12">
                  <label for="description" class="label_modal col-12 mb-1 pt-2"
                    >Description</label
                  >
                  <Field
                    class="col-12 mb-2 field_input"
                    type="text"
                    placeholder=""
                    :value="$v.form.description.$model"
                    :error="
                      $v.form.description.$dirty && $v.form.description.$error
                    "
                    @model="$v.form.description.$model = $event"
                  />
                </div>
                <div class="col-12">
                  <label for="stock" class="label_modal col-12 mb-1 pt-2"
                    >Stock</label
                  >
                  <Field
                    class="col-12 mb-2 field_input"
                    type="number"
                    placeholder=""
                    :value="$v.form.stock.$model"
                    :error="$v.form.stock.$dirty && $v.form.stock.$error"
                    @model="$v.form.stock.$model = $event"
                  />
                </div>
                <div class="col-12">
                  <label for="type" class="label_modal col-12 mb-1 pt-2"
                    >Type</label
                  >
                  <Field
                    class="col-12 mb-2 ml-auto field_input"
                    type="text"
                    placeholder=""
                    :value="$v.form.type.$model"
                    :error="$v.form.type.$dirty && $v.form.type.$error"
                    @model="$v.form.type.$model = $event"
                  />
                </div>
                <div class="col-12">
                  <label for="netto" class="label_modal col-12 mb-1 pt-2"
                    >Netto</label
                  >
                  <Field
                    class="col-12 mb-4 field_input"
                    type="number"
                    placeholder=""
                    :value="$v.form.netto.$model"
                    :error="$v.form.netto.$dirty && $v.form.netto.$error"
                    @model="$v.form.netto.$model = $event"
                  />
                </div>
                <div class="col-12">
                  <label for="price" class="label_modal col-12 mb-1 pt-2"
                    >Price</label
                  >
                  <Field
                    class="col-12 mb-4 field_input"
                    type="number"
                    placeholder=""
                    :value="$v.form.price.$model"
                    :error="$v.form.price.$dirty && $v.form.price.$error"
                    @model="$v.form.price.$model = $event"
                  />
                </div>
                <div class="col-12">
                  <label for="formFile" class="form-label col-12 mb-1 pt-2"
                    >Photo</label
                  >
                  <Field
                    class="col-12 mb-4 pt-2 field_input"
                    type="file"
                    placeholder=""
                    :value="$v.form.photo.$model"
                    :error="$v.form.photo.$dirty && $v.form.photo.$error"
                    @model="$v.form.photo.$model = $event"
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
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Type</th>
                  <th scope="col">Netto</th>
                  <th scope="col">Price</th>
                  <th scope="col">Photo</th>
                  <th colspan="2" scope="col" class="text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nastar1</td>
                  <td>Nastar</td>
                  <td>100</td>
                  <td>Medium</td>
                  <td>500</td>
                  <td>15000</td>
                  <td></td>
                  <td class="text-center">
                    <b-button v-b-modal.modal-2 variant="danger">Edit</b-button>
                    <b-modal
                      id="modal-2"
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
                        <h1 class="judul_tambah_alamat mt-2">Edit Product</h1>
                      </div>
                      <form
                        class="form_modal pt-4 pb-2 px-2"
                        @submit.stop.prevent="onSubmit"
                      >
                        <div class="row">
                          <div class="col-12">
                            <label
                              for="name"
                              class="label_modal col-12 mb-1 pt-2"
                              >Name</label
                            >
                            <Field
                              class="col-12 mb-2 field_input"
                              type="text"
                              placeholder=""
                              :value="$v.form.name.$model"
                              :error="
                                $v.form.name.$dirty && $v.form.name.$error
                              "
                              @model="$v.form.name.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="description"
                              class="label_modal col-12 mb-1 pt-2"
                              >Description</label
                            >
                            <Field
                              class="col-12 mb-2 field_input"
                              type="text"
                              placeholder=""
                              :value="$v.form.description.$model"
                              :error="
                                $v.form.description.$dirty &&
                                $v.form.description.$error
                              "
                              @model="$v.form.description.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="stock"
                              class="label_modal col-12 mb-1 pt-2"
                              >Stock</label
                            >
                            <Field
                              class="col-12 mb-2 field_input"
                              type="number"
                              placeholder=""
                              :value="$v.form.stock.$model"
                              :error="
                                $v.form.stock.$dirty && $v.form.stock.$error
                              "
                              @model="$v.form.stock.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="type"
                              class="label_modal col-12 mb-1 pt-2"
                              >Type</label
                            >
                            <Field
                              class="col-12 mb-2 ml-auto field_input"
                              type="text"
                              placeholder=""
                              :value="$v.form.type.$model"
                              :error="
                                $v.form.type.$dirty && $v.form.type.$error
                              "
                              @model="$v.form.type.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="netto"
                              class="label_modal col-12 mb-1 pt-2"
                              >Netto</label
                            >
                            <Field
                              class="col-12 mb-4 field_input"
                              type="number"
                              placeholder=""
                              :value="$v.form.netto.$model"
                              :error="
                                $v.form.netto.$dirty && $v.form.netto.$error
                              "
                              @model="$v.form.netto.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="price"
                              class="label_modal col-12 mb-1 pt-2"
                              >Price</label
                            >
                            <Field
                              class="col-12 mb-4 field_input"
                              type="number"
                              placeholder=""
                              :value="$v.form.price.$model"
                              :error="
                                $v.form.price.$dirty && $v.form.price.$error
                              "
                              @model="$v.form.price.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="formFile"
                              class="form-label col-12 mb-1 pt-2"
                              >Photo</label
                            >
                            <Field
                              class="col-12 mb-4 pt-2 field_input"
                              type="file"
                              placeholder=""
                              :value="$v.form.photo.$model"
                              :error="
                                $v.form.photo.$dirty && $v.form.photo.$error
                              "
                              @model="$v.form.photo.$model = $event"
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
                        <h1 class="judul_tambah_alamat mt-2">Delete Product</h1>
                      </div>
                      <form
                        class="form_modal pt-4 pb-2 px-2"
                        @submit.stop.prevent="onSubmit"
                      >
                        <div class="row">
                          <div class="col-12 mb-4">
                            <p>Apakah Anda yakin ingin menghapus produk?</p>
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
      dataProduct: null,
      form: {
        name: '',
        description: '',
        stock: '',
        type: '',
        netto: '',
        price: '',
        photo: '',
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
      name: {
        required,
      },
      description: {
        required,
      },
      stock: {
        required,
      },
      postal_code: {
        required,
      },
      type: {
        required,
      },
      netto: {
        required,
      },
      price: {
        required,
      },
      photo: {
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
          const resp = await this.$axios.$post('/api/product', this.form, {
            headers: this.headers,
          })
          this.dataProduct = resp.data
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
