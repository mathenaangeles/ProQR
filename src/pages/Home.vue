<template>
  <div class="home">
    <b-container fluid class="p-0">
      <Map></Map>
      <Search></Search>
      <div
        id="supply-list"
        class="row flex-row flex-wrap align-content-around justify-content-center"
      >
        <Supply
          v-for="supply in supplies"
          :key="supply.id"
          :supply="supply"
          :supplier="getSupplier(supply.supplier_id)"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
import Map from "../components/Map.vue";
import Search from "../components/Search.vue";
import Supply from "../components/Supply.vue";
export default {
  name: "home",
  components: { Map, Search, Supply },
  data() {
    return {
      supplies: null,
    };
  },
  methods: {
    getSupplier(supplier_id) {
      var supplier = this.$store.state.users.filter(
        (user) => user.id == supplier_id
      )[0];
      return supplier;
    },
  },
  created() {
    this.supplies = this.$store.state.supplies;
  },
};
</script>
<style scoped>
.container-fluid {
  height: 400px !important;
  border-top: 5px solid #7395ae;
}
#supply-list {
  background-color: #b1a296;
  margin: auto;
}
</style>
