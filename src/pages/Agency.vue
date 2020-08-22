<template>
  <div class="agency">
    <b-container fluid class="p-0">
      <b-row>
        <b-col cols="7" class="basic-info m-4">
          <img :src="require(`../assets/images/` + agency.image_url)" class="profile-picture rounded-0"/>
          <table>
            <tr>
              <td>Name:</td>
              <td>{{agency.name}}</td>
            </tr>
            <tr>
              <td>Contact Person:</td>
              <td>{{agency.contact_person}}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{{agency.email}}</td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td>{{agency.mobile}}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td><a :href="agency.website">{{agency.website}}</a></td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{{agency.address}}</td>
            </tr>
          </table>
        </b-col>
        <b-col cols="4" class="m-4">
          <b-card header-tag="header" class="h-100 overflow-auto network">
            <template v-slot:header>
              <p class="mb-0">Network</p>
            </template>
            <b-card-text>
              <ul>
                <li v-for="connection in agency.network" :key="connection">
                  <b-link @click="gotoUser(connection)">{{ connection }}</b-link>
                </li>
              </ul>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="m-4">
          <b-card header-tag="header" class="h-100 overflow-auto transaction-history">
            <template v-slot:header>
              <p class="mb-0">Transaction History</p>
            </template>
            <table class="table">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Location</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
              <tr v-for="listing in listings" :key="listing.id" class="listing-data">
                <td>{{listing.title}}</td>
                <td>{{listing.description}}</td>
                <td>{{listing.category}}</td>
                <td>{{listing.budget}}</td>
                <td>{{listing.location}}</td>
                <td>{{listing.start_date}}</td>
                <td>{{listing.end_date}}</td>
              </tr>
            </table>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "agency",
  components: {},
  data() {
    return {};
  },
  methods: {
    gotoUser(name) {
      var user = this.$store.state.users.filter(
        (user) => user.name == name
      )[0];
      this.$router.push("/" + user.type + "/" + user.id);
    },
  },
  computed: {
    agency() {
      var agency = this.$store.state.users.filter(
        (user) => user.id == this.$route.params.id
      )[0];
      return agency;
    },
    listings() {
      var listings = this.$store.state.listings.filter(
        (listing) => listing.agency == this.$route.params.id
      );
      return listings;
    },
  }
};
</script>
<style scoped>
  .profile-picture {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }

  .basic-info table td:first-child {
    width: 150px;
    color: #557a95;
    font-weight: bold;
  }

  .card-header {
    background-color: #557a95 !important;
    color: #FFF;
    font-weight: bold;
  }

  .transaction-history .card-body {
    padding: 0px;
  }

  .transaction-history table tr th {
    color: #557a95;
    font-weight: bold;
    font-size: 12px;
  }

  .listing-data td {
    font-size: 11px;
  }
</style>
