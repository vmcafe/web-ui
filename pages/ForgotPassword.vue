<template>
  <div>
    <b-spinner v-if="isLoading" variant="primary" label="Spinning"></b-spinner>
    <div v-else class="login mr-5">
      <div v-if="isSuccess" class="forget d-flex flex-colum">
        <div
          class="container p-4"
          style="color: #ffffff; background: #5b617b; max-width: 692px"
        >
          <Heading class="text_after_input_email" style="color: #ffffff"
            >Silahkan Cek Email Kamu! ^_^</Heading
          >
          <div
            class="text_after_input_email_content mt-4"
            style="letter-spacing: -0.15px; line-height: 28px; font-size: 18px"
          >
            Kami telah mengirimkan tautan untuk mengubah password Anda melalui
            email. Klik tautan yang ada di email untuk lanjut ke prosedur
            selanjutnya. Jika ada masalah atau keluhan silahkan hubungi
            support@vmcafe.id
          </div>
        </div>
      </div>
      <div v-else class="login__container container">
        <div class="login__container__mail mail">
          <Heading class="mail__heading">Lupa kata kunci?</Heading>
          <form class="mail__form" @submit.stop.prevent="onSubmit()">
            <div
              class="text_lupa_kata_kunci mb-4"
              style="
                letter-spacing: -0.15px;
                line-height: 28px;
                font-size: 18px;
              "
            >
              Kami akan mengirimkan tautan untuk mengubah password Anda melalui
              email. Silahkan masukkan alamat email Anda dan klik tautan yang
              ada di dalam email untuk prosedur selanjutnya.
            </div>
            <Field
              class="input__email w-100 mb-1"
              type="email"
              placeholder="EMAIL"
              :value="$v.form.email.$model"
              :error="$v.form.email.$dirty && $v.form.email.$error"
              @model="$v.form.email.$model = $event"
            />
            <Button
              type="submit"
              align="center"
              class="form__submit mt-1 h-16 mb-5 mr-2 w-100"
              >LUPA KATA KUNCI</Button
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Headings/Heading'
import Field from '@/components/Fields/FieldInput'
import Button from '@/components/Buttons/RightIconBtn'
import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {
    Heading,
    Field,
    Button,
  },
  layout: 'Auth',
  data() {
    return {
      isSuccess: false,
      isLoading: false,
      form: {
        email: '',
      },
    }
  },
  validations: {
    form: {
      email: {
        email,
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
          const resp = await this.$axios.$post('/api/auth/forget', this.form)
          console.log(resp)
          this.isLoading = false
          this.isSuccess = true
          this.$toast.success('Kode telah dikirim').goAway(3000)
        } catch (error) {
          this.isLoading = false
          this.isSuccess = false
          this.$toast.error('Gagal mengirim kode ke email').goAway(3000)
        }
      } else {
        this.$toast.error('Harap mengisi email yang valid').goAway(3000)
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
        margin-bottom 56px

.text_after_input_email
  text-align center
  font-size 32px
  font-weight bold
  font normal normal Futura PT
  letter-spacing -0.21px
  color #FCFCFC

.text_after_input_email_content
  font-size 22px
  font: normal normal Proxima Nova
  text-align justify
  letter-spacing -0.15px
  color #FCFCFC

.mail__heading
  text-align center
  font-size 22px
  font-weight bold
  font normal normal Futura PT
  letter-spacing 0.21px
  color #000000

.text_lupa_kata_kunci
  font-size 22px
  font normal normal normal Proxima Nova
  text-align justify
  letter-spacing -0.15px
  color #000000

.input__email
  text-align left
  font normal normal Futura PT
  letter-spacing 3px
  color #000000

.form__submit
  text-align center
  font normal normal  Futura PT
  letter-spacing 3px
  color #FFFFFF
</style>
