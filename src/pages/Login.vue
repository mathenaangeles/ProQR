<template>
  <b-container fluid id="login" class="d-flex justify-content-center">
    <b-card class="mt-5" no-body>
      <b-card-body title="Login">
        <b-form-group label="Email">
          <b-form-input
            v-model="email"
            required
            type="email"
            placeholder="Enter your email"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input
            v-model="password"
            type="password"
            required
            placeholder="Enter your password"
          ></b-form-input>
        </b-form-group>
        <b-button
          block
          class="mt-3"
          variant="primary"
          @click="
            authenticate();
            $router.push('/');
          "
          >Sign In</b-button
        >
        <hr />
        <p class="mt-2">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    authenticate() {
      this.$store.dispatch("authenticate");
    },
  },
};
</script>
<style scoped>
#login {
  background-color: #b1a296 !important;
  min-height: 100vh;
}
.card {
  min-width: 500px !important;
  max-height: 350px !important;
}
.card-title {
  font-family: "Raleway", sans-serif !important;
  font-weight: bold;
  padding-bottom: 5px;
  color: #557a95;
  border-bottom: 2px solid #557a95;
}
</style>
