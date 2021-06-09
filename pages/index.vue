<template>
  <div>
    <NavbarAdmin />

    <div class="row no-gutters mt-5" style="height: 100vh">
      <Sidebar />

      <div class="col-md-10 p-5 bg-light">
        <h5>Dashboard</h5>

        <div class="row justify-content-center mt-4">
          <b-card class="text-center col-12 col-md-3 mb-3 mr-3">
            <div class="text-dark text-left">
              <h5 class="card-title1">Kunjungan</h5>
              <div class="card-number">10</div>
            </div>
          </b-card>
          <b-card class="text-center col-12 col-md-3 mb-3 mr-3">
            <div class="text-dark text-left">
              <h5 class="card-title1">User Terdaftar</h5>
              <div class="card-number">10</div>
            </div>
          </b-card>
          <b-card class="text-center col-12 col-md-3 mb-3">
            <div class="text-dark text-left">
              <h5 class="card-title1">User Online</h5>
              <div class="card-number">10</div>
            </div>
          </b-card>
          <b-card class="text-center col-12 col-md-4 mb-3 mr-3">
            <div class="text-dark text-left">
              <h5 class="card-title1">Produk Masuk Keranjang</h5>
              <div class="card-number">10</div>
            </div>
          </b-card>
          <b-card class="text-center col-12 col-md-4 mb-3">
            <div class="text-dark text-left">
              <h5 class="card-title1">Produk Masuk Favorit</h5>
              <div class="card-number">10</div>
            </div>
          </b-card>
          <b-card class="text-center col-12 col-md-4 mb-3 mr-3">
            <div class="text-dark text-left">
              <h5 class="card-title1">Pesanan On Progress</h5>
              <div class="card-number">10</div>
            </div>
          </b-card>
          <b-card class="text-center col-12 col-md-4 mb-3">
            <div class="text-dark text-left">
              <h5 class="card-title1">Pesanan Selesai</h5>
              <div class="card-number">10</div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarAdmin from '@/components/Navbar/navbar_admin'
import Sidebar from '@/components/Sidebar/sidebar'
export default {
  component: {
    NavbarAdmin,
    Sidebar,
  },
  data() {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          this.$cookies.get('__vmctSinga').access_token
        }`,
      },
    }
  },
}
</script>

<style></style>
