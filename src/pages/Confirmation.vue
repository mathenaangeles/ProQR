<template>
  <b-container fluid id="confirmation" class="d-flex justify-content-center">
    <b-card no-body class="my-5">
      <b-card-body>
        <h2 class="supplier-name">{{supplier.name}}</h2>
        <b-form-rating variant="warning" v-model="rating"></b-form-rating>
        <label for="range-timeliness">Timeliness Score</label>
        <span class="range-value ml-2">{{timeliness}}/5</span>
        <b-form-input id="range-1" v-model="timeliness" type="range" min="0" max="5"></b-form-input>
        <label for="range-consistency">Consistency Score</label>
        <span class="range-value ml-2">{{consistency}}/5</span>
        <b-form-input id="range-consistency" v-model="consistency" type="range" min="0" max="5"></b-form-input>
        <label for="range-completeness">Completeness Score</label>
        <span class="range-value ml-2">{{completeness}}/5</span>
        <b-form-input id="range-completeness" v-model="completeness" type="range" min="0" max="5"></b-form-input>
        <b-form-group label="Supplier Review">
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter text"
            rows="6"
            max-rows="12"
          ></b-form-textarea>
        </b-form-group>
        <b-button block class="mt-3" variant="primary" @click="$router.push('/')">Submit</b-button>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "confirmation",
  data() {
    return {
      id: null,
      supplier: null,
      rating: 0,
      timeliness: 0,
      consistency: 0,
      completeness: 0,
      text: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.supplier = this.$store.state.users.filter(
      (user) => user.id == this.id
    )[0];
  },
};
</script>
<style scoped>
#confirmation {
  background-color: #b1a296 !important;
}
.b-rating {
  border: 0px;
}
.supplier-name {
  font-family: "Raleway", sans-serif !important;
  font-weight: bold;
  padding-bottom: 5px;
  color: #557a95;
  border-bottom: 2px solid #557a95;
}
.range-value {
  font-weight: bold;
  font-size: 20px;
  color: #938d94;
}
</style>