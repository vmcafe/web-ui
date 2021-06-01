<template>
  <div>
    <b-spinner v-if="isLoading" variant="primary" label="Spinning"></b-spinner>
    <div v-else class="login">
      <div class="login__container container">
        <div class="login__container__mail mail">
          <!-- <Heading class="sso__heading">Masuk dengan</Heading>
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
          <div class="atau__heading">ATAU</div> -->
          <Heading class="mail__heading">Masuk dengan email</Heading>
          <form class="mail__form" @submit.prevent="onSubmit()">
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
                  type="password"
                  placeholder="PASSWORD"
                  :value="$v.form.password.$model"
                  :error="$v.form.password.$dirty && $v.form.password.$error"
                  @model="$v.form.password.$model = $event"
                />
              </div>
            </div>
            <Button
              type="submit"
              align="center"
              class="form__submit w-full mt-1 mb-4 w-100"
              >MASUK</Button
            >
          </form>
          <nuxt-link to="/forgotpassword">
            <TextLink class="lupa_kata_kunci mb-4">LUPA KATA KUNCI?</TextLink>
          </nuxt-link>
          <Heading class="mb-2">Belum punya akun?</Heading>
          <nuxt-link to="/register">
            <TextLink class="mb-5">DAFTAR</TextLink>
          </nuxt-link>
        </div>
      </div>
    </div>
    <b-modal
      class="modal__login my-auto"
      ref="modal-status"
      centered
      size="sm"
      title="Status"
      hide-header
      hide-footer
    >
      <div class="d-flex flex-column align-items-center justify-content-center">
        <b-img
          v-if="isSuccess"
          style="width: 124px"
          src="~/assets/success.png"
          alt=""
        />
        <b-img v-else src="~/assets/failed.png" style="width: 124px" alt="" />
        <Heading class="mt-2">
          {{ isSuccess ? 'Berhasil Masuk!' : 'Gagal Masuk!' }}
        </Heading>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Heading from '@/components/Headings/Heading'
import Field from '@/components/Fields/FieldInput'
import Button from '@/components/Buttons/RightIconBtn'
import TextLink from '@/components/TextLink'
import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {
    Heading,
    Field,
    Button,
    TextLink,
  },
  layout: 'Auth',
  data() {
    return {
      isSuccess: true,
      isLoading: false,
      form: {
        email: '',
        password: '',
      },
    }
  },
  validations: {
    form: {
      email: {
        email,
        required,
      },
      password: {
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
          const resp = await this.$axios.$post('/api/auth/login', this.form)

          this.$cookies.set(
            '__vmctHarimau',
            JSON.stringify(resp.data),
            resp.data.expires_in
          )
          this.isSuccess = true
          this.$refs['modal-status'].show()
          setTimeout(() => {
            this.isLoading = false
            this.$router.push('/')
          }, 2000)
        } catch (error) {
          console.log(error)
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
.login
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

.modal__login
  transform translate(0,-50%)
    top 50%
    margin 0 auto
</style>
