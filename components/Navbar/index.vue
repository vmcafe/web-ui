<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="navbar">
      <b-navbar-brand href="#">
        <img src="~/assets/Logo.png" alt="VMC" style="height: 64px" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div
            v-if="!openSearch"
            class="my-auto mx-2"
            @click="openSearch = true"
          >
            <img src="~/assets/icons/ic_search.svg" alt="" />
          </div>
          <b-nav-form v-else class="mx-2">
            <!-- <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Cari"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Cari</b-button
            > -->

            <div class="input-group md-form form-sm form-1 pl-0">
              <div class="input-group-prepend">
                <span
                  id="search"
                  class="input-group-text"
                  style="background: #fff"
                >
                  <img src="~/assets/icons/ic_search.svg" alt="" />
                </span>
              </div>
              <input
                v-model="search"
                class="form-control my-0 py-1"
                type="text"
                placeholder="Ingin cari apa?"
                aria-label="search"
                @keyup="searchFood"
              />
            </div>
          </b-nav-form>

          <NavbarItemCart :withBorder="true" icon="cart"></NavbarItemCart>
          <client-only>
            <nuxt-link v-if="!isLoggedIn" to="/login">
              <NavbarItem class="my-auto" :withBorder="true" icon="person"
                >Login</NavbarItem
              >
            </nuxt-link>

            <UserCard v-else class="my-auto" />
          </client-only>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
import NavbarItemCart from './NavbarItemCart'
export default {
  components: {
    NavbarItemCart,
    UserCard,
  },
  data() {
    return {
      openSearch: false,
      search: '',
      listProduct: [],
    }
  },
  methods: {
    async searchFood() {
      try {
        const resp = await this.$axios.$get(`/api/search`)
        this.dataArticle = resp.data
      } catch (error) {
        console.log(error)
      }
    },
  },

  computed: {
    isLoggedIn() {
      return this.$cookies.get('__vmctHarimau')
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';

.navbar {
  background: skinPrimary !important;
}
</style>
