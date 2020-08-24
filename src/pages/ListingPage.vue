<template>
  <b-container fluid id="listing-page">
    <br />
    <b-card no-body class="overflow-hidden mb-5 p-0">
      <b-row>
        <b-col md="4">
          <b-card-img :src="require(`../assets/images/default.jpg`)" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="8">
          <b-card-body class="pb-0">
            <b-row>
              <b-col md="8">
                <b class="title">{{ listing.title }}</b>
              </b-col>
              <b-col class="pb-0 pt-1 price" nd="4">
                <b-button
                  :variant="interested? 'light':'outline-light'"
                  @click="interested = !interested"
                >
                  PHP {{ formatPrice(listing.budget) }} |
                  <b>Interested</b> &nbsp;
                  <b-icon icon="star-fill" variant="warning" v-show="interested"></b-icon>
                  <b-icon icon="star" variant="warning" v-show="!interested"></b-icon>
                </b-button>
                <!-- <b-icon class="mr-2" icon="calendar-fill"></b-icon>
                {{listing.start_date}} - {{listing.end_date}}-->
              </b-col>
            </b-row>
            <b-row class="supplier">
              <b-col>
                <b-link @click="gotoPath('agency',agency.id)">{{ agency.name }}</b-link>
              </b-col>
              <b-col class="supplier pr-4 price">
                <b
                  class="gray"
                >Interested Suppliers: {{interested ? listing.interested_suppliers + 1 : listing.interested_suppliers}}</b>
              </b-col>
            </b-row>

            <hr />
            <!-- <b-row> -->

            <b-list-group flush>
              <b-list-group-item class="pb-2">
                <b-icon class="mr-2" icon="house-fill"></b-icon>
                {{ listing.category }}
              </b-list-group-item>
              <b-list-group-item class="pb-2">
                <b-icon class="mr-2" icon="calendar-fill"></b-icon>
                {{ listing.start_date }} - {{listing.end_date}}
              </b-list-group-item>
              <!-- <b-list-group-item class="pb-2">End Date: {{listing.end_date}}</b-list-group-item> -->
              <b-list-group-item class="pb-2">
                <b-icon class="mr-2" icon="geo-alt"></b-icon>
                {{ listing.location }}
              </b-list-group-item>
              <b-list-group-item>
                <b-card-text class="description">{{listing.description}}</b-card-text>
              </b-list-group-item>
            </b-list-group>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="mb-5">
      <b-row>
        <b-col>
          <b-img class="pic" :src="require(`../assets/images/demand_growth.png`)" fluid></b-img>
        </b-col>
        <b-col>
          <b class="statistics-head">PRIME PREMIUM</b>
          <br />
          <b class="statistics">21.0% Below Retail Price</b>
          <hr />
          <b class="statistics-head">AVERAGE SALE PRICE</b>
          <br />
          <b class="statistics">PHP 8,000</b>
          <hr />
          <b class="statistics-head">NUMBER OF SUPPLIES</b>
          <br />
          <b class="statistics">~ 50 Units</b>
          <hr />
          <b class="statistics-head">NUMBER OF SALES</b>
          <br />
          <b class="statistics">~ 130 Units</b>
        </b-col>
      </b-row>
      <br />
      <!-- <b-row>
        <b-col>
          <b-img class="pic" :src="require(`../assets/images/item_stock.png`)" fluid></b-img>
        </b-col>
        <b-col>
          <b-img class="pic" :src="require(`../assets/images/contract_percentage.png`)" fluid></b-img>
        </b-col>
      </b-row>-->
    </b-card>
    <br />
  </b-container>
</template>

<script>
const Listing = {
  name: "ListingPage",
  props: ["id"],
  data() {
    return {
      rating: 0,
      listing: null,
      agency: null,
      interested: false,
    };
  },
  created() {
    this.listing = this.$store.state.listings.filter(
      (listing) => listing.id == this.id
    )[0];
    this.agency = this.$store.state.users.filter(
      (user) => user.id == this.listing.agency
    )[0];
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
#listing-page {
  /* width: 600px;
  max-height: 200px; */
  background-color: #b1a296;
  height: auto !important; /* cross-browser */
  height: 100%; /* cross-browser */
}
.title {
  font-family: "Raleway", sans-serif !important;
  font-size: 20px;
}
.price {
  text-align: right !important;
}
.supplier {
  align-items: center !important;
  font-size: 16px;
}
.b-rating {
  border: 0px;
  float: right !important;
}
.description,
.list-group-item {
  font-size: 16px;
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
.statistics {
  font-size: 20px;
  color: #5d5c61;
}
.statistics-head {
  font-size: 20px;
  color: #557a95;
}
.gray {
  color: #5d5c61;
}
</style>
