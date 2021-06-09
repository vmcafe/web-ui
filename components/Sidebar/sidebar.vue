<template>
  <div class="sidebar-admin col-md-2 mt-2 bg-white pr-3 pt-4">
    <b-nav vertical class="w-10">
      <b-nav-item active>
        <router-link :to="'/'"> Dashboard</router-link>
        <hr class="bg-secondary" />
      </b-nav-item>
      <b-nav-item>
        <router-link :to="'/article'"> Article</router-link>
        <hr class="bg-secondary" />
      </b-nav-item>
      <b-nav-item>
        <router-link :to="'/product'"> Product</router-link>
        <hr class="bg-secondary" />
      </b-nav-item>
      <b-nav-item>
        <router-link :to="'/category'"> Category</router-link>
        <hr class="bg-secondary" />
      </b-nav-item>
      <b-nav-item>
        <router-link :to="'/cart'"> Cart</router-link>
        <hr class="bg-secondary" />
      </b-nav-item>
      <b-nav-item>
        <router-link :to="'/order'"> Order</router-link>
        <hr class="bg-secondary" />
      </b-nav-item>
      <b-nav-item>
        <router-link :to="'/voucher'"> Voucher</router-link>
        <hr class="bg-secondary" />
      </b-nav-item>
      <b-nav-item>
        <router-link :to="'/address'"> Address Customer</router-link>
        <hr class="bg-secondary" />
      </b-nav-item>
      <b-nav-item>
        <router-link :to="'/profile'"> Profile</router-link>
        <hr class="bg-secondary" />
      </b-nav-item>
      <b-nav-item>
        <router-link :to="'/user'"> User</router-link>
        <hr class="bg-secondary" />
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
