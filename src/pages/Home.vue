<template>
  <div class="home">
    <b-container fluid class="p-0">
      <Map></Map>
      <Search @emitSearch="emitSearch" type="home"></Search>
      <div id="supply-list">
        <div class="supply-info row flex-row-reverse pt-3">
          <b-pagination class="pr-4" v-model="currentPage" :total-rows="rows"></b-pagination>
          <b v-if="filteredList.length==0" class="count mr-3">No Supplies Found</b>
          <b
            v-else-if="filteredList.length==1"
            class="count mr-3"
          >{{filteredList.length}} Supply Found</b>
          <b v-else class="count mr-3">{{filteredList.length}} Supplies Found</b>
        </div>
        <div class="row flex-row flex-wrap align-content-around justify-content-center">
          <Supply
            v-for="supply in filteredList"
            :key="supply.id"
            :supply="supply"
            :supplier="getSupplier(supply.supplier_id)"
          />
        </div>
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
      keyword: "",
      location: "",
      category: "",
      supplies: null,
      rows: 3,
      currentPage: 1,
    };
  },
  methods: {
    getSupplier(supplier_id) {
      var supplier = this.$store.state.users.filter(
        (user) => user.id == supplier_id
      )[0];
      return supplier;
    },
    emitSearch(keyword, location, category) {
      this.keyword = keyword;
      this.location = location;
      this.category = category;
    },
  },
  created() {
    this.supplies = this.$store.state.supplies;
  },
  computed: {
    filteredList() {
      console.log(this.keyword);
      console.log(this.location);
      console.log(this.category);
      return this.supplies.filter((supply) => {
        if (
          this.keyword != null &&
          this.location == null &&
          this.category == null
        ) {
          return supply.title
            .toLowerCase()
            .includes(this.keyword.toLowerCase());
        } else if (
          this.keyword == null &&
          this.location != null &&
          this.category == null
        ) {
          return supply.location
            .toLowerCase()
            .includes(this.location.toLowerCase());
        } else if (
          this.keyword == null &&
          this.location == null &&
          this.category != null
        ) {
          console.log(this.category);
          return supply.category == this.category;
        } else if (
          this.keyword != null &&
          this.location != null &&
          this.category == null
        ) {
          return (
            supply.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
            supply.location.toLowerCase().includes(this.location.toLowerCase())
          );
        } else if (
          this.keyword != null &&
          this.location == null &&
          this.category != null
        ) {
          return (
            supply.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
            supply.category == this.category
          );
        } else if (
          this.keyword == null &&
          this.location != null &&
          this.category != null
        ) {
          return (
            supply.location
              .toLowerCase()
              .includes(this.location.toLowerCase()) ||
            supply.category == this.category
          );
        } else {
          return (
            supply.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
            supply.location
              .toLowerCase()
              .includes(this.location.toLowerCase()) ||
            supply.category == this.category
          );
        }
      });
    },
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
}
.row {
  margin: auto;
}
.supply-info {
  align-items: center;
  color: white;
}
.count {
  font-size: 20px;
}
</style>
