<template>
  <b-container fluid id="register" class="d-flex justify-content-center">
    <b-card no-body class="my-5">
      <b-card-body title="Register">
        <b-form-group label="User Type">
          <b-form-select v-model="type" :options="options"></b-form-select>
        </b-form-group>
        <b-form-group label="Company Name">
          <b-form-input
            v-model="name"
            type="text"
            required
            placeholder="Enter your company name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Contact Person Name">
          <b-form-input
            v-model="contact_person"
            type="text"
            required
            placeholder="Enter your full name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input
            v-model="email"
            type="email"
            required
            placeholder="Enter your email"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Mobile Number">
          <b-input-group prepend="+63">
            <b-form-input
              v-model="mobile"
              required
              placeholder="000000000"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group label="Address">
          <b-form-input
            v-model="address"
            type="text"
            placeholder="Enter your address"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Website">
          <b-form-input
            v-model="website"
            type="text"
            placeholder="Enter your website"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input
            v-model="password"
            type="password"
            required
            placeholder="At least 8 characters"
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox v-model="check" value="true" unchecked-value="false"
          >I agree to the <a href="#">Terms of Service</a> and
          <a href="#">Privacy Policy</a>.</b-form-checkbox
        >
        <b-button
          block
          class="mt-3"
          variant="primary"
          @click="
            authenticate();
            $router.push('/');
          "
          >Sign Up</b-button
        >
        <hr />
        <p class="mt-2">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      type: null,
      name: "",
      contact_person: "",
      email: "",
      address: "",
      password: "",
      website: "",
      mobile: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "supplier", text: "Supplier" },
        { value: "agency", text: "Agency" },
      ],
      check: "false",
    };
  },
  methods: {
    authenticate() {
      this.$store.dispatch("authenticate");
    },
    profile() {},
  },
};
</script>
<style scoped>
#register {
  background-color: #b1a296 !important;
}
.card {
  min-width: 600px !important;
}
.card-title {
  font-family: "Raleway", sans-serif !important;
  font-weight: bold;
  padding-bottom: 5px;
  color: #557a95;
  border-bottom: 2px solid #557a95;
}
</style>
