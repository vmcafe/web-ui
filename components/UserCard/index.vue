<template>
  <b-spinner v-if="isLoading" variant="primary" label="Spinning"></b-spinner>
  <b-dropdown
    v-else
    class="dropdownku px-2"
    no-caret
    right
    toggle-class="text-decoration-none"
    variant="link"
  >
    <template #button-content>
      <div class="usercard usercard__bordered d-flex align-items-center">
        <Avatar
          :username="(userData && userData.name) || 'defaultNama'"
          :size="24"
          alt=""
          class="usercard__img mr-2"
        />
        <div class="usercard__text">
          {{ (userData && userData.name) || 'defaultNama' }}
        </div>
      </div>
    </template>
    <b-dropdown-item class="usercard__extended">
      <nuxt-link to="/me">
        <div class="usercard__extended__item my-2">Profil</div>
      </nuxt-link>
    </b-dropdown-item>
    <b-dropdown-item class="usercard__extended">
      <nuxt-link to="/favorite">
        <div class="usercard__extended__item my-2">Pesanan Saya</div>
      </nuxt-link>
    </b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item class="usercard__extended my-2" @click="showModal">
      <div class="usercard__extended__item text-danger">Keluar</div>
      <b-modal ref="my-modal" class="modal" hide-header hide-footer size="sm">
        <div class="d-block text-center">
          <h1 class="content mt-2">Apakah Anda yakin</h1>
          <h1 class="content mb-2">ingin keluar ?</h1>
        </div>
        <div class="btn_modal text-center mb-3 mt-2">
          <b-button class="btn_keluar_modal" @click="logout()">Keluar</b-button>
          <b-button class="btn_batal_modal" @click="hideModal">Batal</b-button>
        </div>
      </b-modal>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  components: {
    Avatar,
  },
  data() {
    return {
      isLoading: false,
      userData: null,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          this.$cookies.get('__vmctHarimau').access_token
        }`,
      },
    }
  },
  mounted() {
    this.fetchUser()
  },
  methods: {
    async fetchUser() {
      // console.log(this.headers)
      try {
        const resp = await this.$axios.$get('/api/user/me', {
          headers: this.headers,
        })
        this.userData = resp.data
      } catch (error) {
        this.$toast.error('Gagal mendapatkan data user')
      }
    },
    logout() {
      this.isLoading = true
      setTimeout(() => {
        this.$cookies.remove('__vmctHarimau')
        this.isLoading = false
        window.location.reload(true)
      }, 2000)
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
@import '../../styles/imports';

.usercard {
  display: flex;
  max-height: 35px;
  background: none;

  &__img {
    padding: 0;
  }

  &__text {
    font-size: 14px;
    line-height: 19px;
    color: blackBlur;
  }
}

.dropdownku {
  border-left: 2px solid blackBlur;

  .btn-secondary {
    background: none;
  }
}

.usercard__extended {
  background-color: skinPrimary !important
}

.content {
  font-size 30px
  font normal normal Proxima Nova
  letter-spacing 0.7px
  color #2D4957
}

.btn_keluar_modal
  background #B14141
  border-radius: 5px;
  opacity 1
  font-size 20px
  font normal normal Proxima Nova
  letter-spacing 1.8px
  color  #FFFFFF

.btn_batal_modal
  background #F6F6F6
  font-size 20px
  border-radius: 5px;
  font normal normal Proxima Nova
  letter-spacing 1.8px
  color #2D4957
</style>
