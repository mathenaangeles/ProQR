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
                class="title"
              >{{ listing.title }} </b>
            </b-col>
            <b-col class="pb-0 pt-1 price">
              <b-button :variant='interested? "success":"outline-success"'
              @click="interested = !interested">
                PHP {{ formatPrice(listing.budget) }} |<b> Interested </b> &nbsp;
                <b-icon icon="star-fill" variant="warning" v-show="interested" ></b-icon>
                <b-icon icon="star" variant="warning" v-show="!interested"></b-icon>
              </b-button>

              <!-- <b-icon class="mr-2" icon="calendar-fill"></b-icon>
            {{listing.start_date}} - {{listing.end_date}} -->
            </b-col>
          </b-row>
          <b-row class="supplier">
            <b-col>
              <b-link @click="gotoSupplier('agency',agency.id)">{{ agency.name }}</b-link>
            </b-col>
          </b-row>

          <hr>
          <!-- <b-row> -->

          <b-list-group flush>
          <b-list-group-item class="pb-2">
            Start Date: {{ listing.start_date }}
          </b-list-group-item>
          <b-list-group-item class="pb-2">
            End Date: {{listing.end_date}}
          </b-list-group-item>
          <b-list-group-item class="pb-2">
            <b-icon icon="geo-alt"></b-icon>
            {{ listing.location }}
          </b-list-group-item>
           <b-list-group-item>
              <b-card-text class="p-3 description">{{listing.description}}</b-card-text>
           </b-list-group-item>
           
        </b-list-group>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
const Listing = {
  name: "ListingPage",
  props: ['id'],
  data() {
    return {
      rating: 0,
      listing: null,
      agency: null,
      interested: false,
    };
  },
  created() {
    this.listing = this.$store.state.listings.filter(listing => listing.id == this.id)[0];
    this.agency = this.$store.state.users.filter(user => user.id == this.listing.agency)[0];
  },
  methods: {
    gotoAgency(path, id) {
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
  /* width: 600px;
  max-height: 200px; */
  background-color: #b1a296,
}
.title {
  font-family: "Raleway", sans-serif !important;
}
.price {
  text-align: right !important;

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
