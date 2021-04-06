<template>
  <div>
    <b-spinner v-if="isLoading" variant="primary" label="Spinning"></b-spinner>
    <div v-else class="register">
      <div class="register__container container">
        <div class="register__container__mail mail">
          <Heading class="sso__heading">Daftar dengan</Heading>
          <div class="container w-100">
            <div class="row">
              <SingleSignOn
                type="button"
                align="center"
                class="btn_sso col-12 col-md-6 mb-1 mx-auto"
              >
                <b-img
                  left
                  class="sso_btn_icon my-auto"
                  src="~/assets/icons/ic_facebook.svg"
                  alt="icon facebook"
                ></b-img>
                FACEBOOK</SingleSignOn
              >
              <SingleSignOn
                type="button"
                align="center"
                class="btn_sso col-12 col-md-6 mb-1 mx-auto"
              >
                <b-img
                  left
                  class="sso_btn_icon"
                  src="~/assets/icons/ic_google.svg"
                  alt="icon google"
                ></b-img>
                GOOGLE</SingleSignOn
              >
            </div>
          </div>
          <div class="atau__heading">ATAU</div>
          <Heading class="mail__heading">Daftar dengan email</Heading>
          <form class="mail__form" @submit.stop.prevent="onSubmit">
            <div class="container w-100">
              <div class="row">
                <Field
                  class="col-12 col-md-6 mb-1 field_input_mail mx-auto"
                  type="email"
                  placeholder="EMAIL"
                  :value="$v.form.email.$model"
                  :error="$v.form.email.$dirty && $v.form.email.$error"
                  @model="$v.form.email.$model = $event"
                />
                <Field
                  class="col-12 col-md-6 mb-1 field_input_mail mx-auto"
                  type="text"
                  placeholder="NAMA"
                  :value="$v.form.name.$model"
                  :error="$v.form.name.$dirty && $v.form.name.$error"
                  @model="$v.form.name.$model = $event"
                />
                <Field
                  class="col-12 col-md-6 mb-1 field_input_mail mx-auto"
                  type="password"
                  placeholder="PASSWORD"
                  :value="$v.form.password.$model"
                  :error="$v.form.password.$dirty && $v.form.password.$error"
                  @model="$v.form.password.$model = $event"
                />
                <Field
                  class="col-12 col-md-6 mb-1 field_input_mail mx-auto"
                  type="password"
                  placeholder="KONFIRMASI PASSWORD"
                  :value="$v.form.confirm_password.$model"
                  :error="
                    $v.form.confirm_password.$dirty &&
                    $v.form.confirm_password.$error
                  "
                  @model="$v.form.confirm_password.$model = $event"
                />
                <Gender
                  class="col-12 col-md-6 mb-1 field_input_mail mx-auto"
                  @model="$v.form.gender.$model = $event"
                />
                <Button
                  type="submit"
                  align="left"
                  class="form__submit w-full col-12 col-md-6 h-16 mb-1 field_input_mail mx-auto"
                  >DAFTAR</Button
                >
              </div>
            </div>
          </form>
          <Heading class="mb-2 mt-4">Sudah memiliki akun?</Heading>
          <nuxt-link to="/login">
            <TextLink class="mb-5">MASUK</TextLink>
          </nuxt-link>
        </div>
      </div>
    </div>
    <b-modal
      ref="modal-status"
      size="sm"
      class="register__modal"
      title="Status"
      hide-header
      hide-footer
    >
      <div class="d-flex flex-column align-items-center justify-content-center">
        <img
          v-if="isSuccess"
          style="width: 124px"
          src="~/assets/success.png"
          alt=""
        />
        <img v-else src="~/assets/failed.png" style="width: 124px" alt="" />
        <Heading class="mt-2">
          {{ isSuccess ? 'Berhasil Daftar!' : 'Gagal Daftar!' }}
        </Heading>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Heading from '@/components/Headings/Heading'
import Field from '@/components/Fields/FieldInput'
import Gender from '@/components/Fields/FieldGender'
import Button from '@/components/Buttons/RightIconBtn'
import SingleSignOn from '@/components/Buttons/SingleSignOnBtn'
import TextLink from '@/components/TextLink'
import { required, email } from 'vuelidate/lib/validators'
export default {
  components: {
    Heading,
    Field,
    Button,
    TextLink,
    Gender,
    SingleSignOn,
  },
  layout: 'Auth',
  data() {
    return {
      isSuccess: true,
      isLoading: false,
      form: {
        email: '',
        name: '',
        password: '',
        confirm_password: '',
        gender: 'p',
      },
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      name: {
        required,
      },
      password: {
        required,
      },
      confirm_password: {
        required,
      },
      gender: {
        required,
      },
    },
  },
  methods: {
    async onSubmit() {
      this.$v.$touch()
      if (!this.$v.form.$invalid) {
        this.isLoading = true
        try {
          const resp = await this.$axios.$post('/api/auth/register', this.form)
          console.log(resp)
          this.isSuccess = true
          this.$refs['modal-status'].show()
          setTimeout(() => {
            this.$router.push('/login')
            this.isLoading = false
          }, 3000)
        } catch (error) {
          this.isLoading = false
          this.isSuccess = false
          this.$refs['modal-status'].show()
        }
      } else {
        this.$toast.error('Ada yang salah dalam pengisian form').goAway(3000)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.register
  &__container
    &__mail
    .mail
      &__heading
        margin-bottom 20px

.sso__heading, .atau__heading
  margin-bottom 20px
  margin-top 20px

.atau__heading
  text-align center
  font-size 11px
  font normal normal Futura PT
  letter-spacing 3.25px
  color #000000
  opacity 1

.sso_btn_icon
  width 20px
  height 20px
  margin-left 10px
  margin-top -7px !important

.field_input_mail
  max-width 286px
</style>
