<template>
    <b-container fluid class="p-0">
      <Search @emitSearch="emitSearch" type="listing"></Search>
      <div id="supply-list">
        <div class="supply-info row flex-row-reverse pt-3">
          <b-pagination class="pr-4" v-model="currentPage" :total-rows="rows"></b-pagination>
          <b v-if="filteredList.length==0" class="count mr-3">No Listings Found</b>
          <b
            v-else-if="filteredList.length==1"
            class="count mr-3"
          >{{filteredList.length}} Listing Found</b>
          <b v-else class="count mr-3">{{filteredList.length}} Listing Found</b>
        </div>
        <div class="row flex-row flex-wrap align-content-around justify-content-center">
          <Listing
            v-for="listing in filteredList"
            :key="listing.id"
            :listing="listing"
            :agency="getAgency(listing.agency)"
          />
        </div>
      </div>
    </b-container>
</template>

<script>
import Search from "../components/Search.vue";
import Listing from "../components/Listing.vue";
export default {
  name: "Listings",
  components: { Listing, Search },
  data() {
    return {
      keyword: "",
      location: "",
      category: "",
      listings: null,
      rows: 3,
      currentPage: 1,
    };
  },
  methods: {
    getAgency(agency_id) {
      var agency = this.$store.state.users.filter(
        (user) => user.id == agency_id
      )[0];
      return agency;
    },
    emitSearch(keyword, location, category) {
      this.keyword = keyword;
      this.location = location;
      this.category = category;
    },
  },
  created() {
    this.listings = this.$store.state.listings;
  },
  computed: {
    filteredList() {
      console.log(this.keyword);
      console.log(this.location);
      console.log(this.category);
      console.log(this.listings);
      return this.listings.filter((supply) => {
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
