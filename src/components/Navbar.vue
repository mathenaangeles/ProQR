<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand>proqr</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="mx-2" href="/">Home</b-nav-item>
        <b-nav-item class="mx-2" href="/listings">Listings</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="this.$store.state.is_authenticated" class="ml-auto">
        <b-nav-item class="mx-2" href="/">Profile</b-nav-item>
        <b-button
          size="sm"
          class="mx-2 my-2 my-sm-0"
          variant="primary"
          @click="authenticate()"
          >Logout</b-button
        >
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-button
          size="sm"
          class="mx-2 my-2"
          variant="primary"
          @click="$router.push('/register')"
          >Register</b-button
        >
        <b-button
          size="sm"
          class="mx-2 my-2"
          variant="outline-light"
          @click="$router.push('/login')"
          >Login</b-button
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {},
  methods: {
    authenticate() {
      this.$store.dispatch("authenticate");
    },
  },
};
</script>

<style scoped>
.navbar > .navbar-brand {
  font-family: "Raleway", sans-serif !important;
  font-weight: bold;
}

.navbar-nav .nav-item.active .nav-link,
.navbar-nav .nav-item:hover .nav-link {
  color: white;
  border-bottom: 2px solid white;
  padding-bottom: 1px;
}
</style>
