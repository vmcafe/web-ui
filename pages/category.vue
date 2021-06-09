<template>
  <div>
    <NavbarAdmin />

    <div class="row no-gutters mt-5" style="height: 100vh">
      <Sidebar />

      <div class="col-md-10 p-5 bg-light">
        <h5>Category</h5>

        <div class="tambah-category">
          <b-button v-b-modal.modal-1 class="mt-4" variant="primary"
            >Add Category</b-button
          >
          <b-modal
            id="modal-1"
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
              <h1 class="judul_modal mt-2">Add Category</h1>
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
              </div>

              <div class="btn_modal text-center mb-3 mt-2">
                <b-button class="btn_tambah_modal" type="submit" variant="info"
                  >+ Add</b-button
                >
                <b-button
                  class="btn_batal_modal"
                  variant="outline-info"
                  @click="hideModal"
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
                  <th scope="col">Category</th>
                  <th colspan="2" scope="col" class="text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Salt</td>
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
                        <h1 class="judul_modal mt-2">Edit Category</h1>
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
                            variant="outline-info"
                            @click="hideModal"
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
                        <h1 class="judul_modal mt-2">Delete Category</h1>
                      </div>
                      <form
                        class="form_modal pt-4 pb-2 px-2"
                        @submit.stop.prevent="onSubmit"
                      >
                        <div class="row">
                          <div class="col-12 mb-4">
                            <p>Apakah Anda yakin ingin menghapus kategori?</p>
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
                            variant="outline-info"
                            @click="hideModal"
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
    },
  },
  created() {},
  methods: {
    async onSubmit() {
      this.$v.$touch()
      if (!this.$v.form.$invalid) {
        this.isLoading = true
        try {
          const resp = await this.$axios.$post('/api/category', this.form, {
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

.judul_modal
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
