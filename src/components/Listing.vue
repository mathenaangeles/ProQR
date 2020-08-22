<template>
  <b-card no-body class="overflow-hidden m-3 p-0">
    <b-row no-gutters>
      <b-col md="4">
        <b-card-img :src="require(`../assets/images/default.jpg`)" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8">
        <b-card-body class="pb-0">
          <b-row>
            <b-col>
              <b
                class="title listing-title"
                @click="gotoPath('listing',listing.id)"
              >{{ listing.title }} </b>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="pb-0 pt-1 price">
              <b>PHP {{ formatPrice(listing.budget) }}</b> <br>
              <!-- <b-icon class="mr-2" icon="calendar-fill"></b-icon>
            {{listing.start_date}} - {{listing.end_date}} -->
            </b-col>
          </b-row>
          <b-row class="supplier">
            <b-col>
              <b-link @click="gotoPath('agency',agency.id)">{{ agency.name }}</b-link>
            </b-col>
          </b-row>
        </b-card-body>
        <b-list-group flush>
          <b-list-group-item class="pb-2">
            <b-icon class="mr-2" icon="geo-alt"></b-icon>
            {{ listing.location }}
          </b-list-group-item>
          <b-list-group-item class="pb-0">
            <b-icon class="mr-2" icon="bookshelf"></b-icon>
            {{listing.category}}
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
const Listing = {
  name: "Listing",
  props: {
    listing: Object,
    agency: Object,
  },
  data() {
    return {
      rating: 0,
    };
  },
  created() {
    // this.rating = this.supplier.rating;
  },
  methods: {
    gotoPath(path, id) {
      this.$router.push("/" + path + "/" + id);
    },
    formatPrice(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
export default Listing;
</script>

<style scoped>
.card {
  width: 600px;
  max-height: 200px;
}
.title {
  font-family: "Raleway", sans-serif !important;
}
.price {
  text-align: left !important;

}
.supplier {
  align-items: center !important;
  font-size: 13px;
}
.b-rating {
  border: 0px;
  float: right !important;
}
.description,
.list-group-item {
  font-size: 15px;
}
.unit {
  font-size: 13px;
  color: #5d5c61;
}
svg {
  color: #5d5c61;
}

.listing-title:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
