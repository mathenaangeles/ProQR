<template>
  <div class="agency">
    <b-container fluid class="p-0">
      <b-row>
        <b-col cols="7" class="basic-info m-4">
          <b-row class="basic-information-row">
            <img
              :src="require(`../assets/images/` + agency.image_url)"
              class="profile-picture rounded-0 mx-5"
            />
            <b-card>
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
                  <td>
                    <a :href="agency.website">{{agency.website}}</a>
                  </td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>{{agency.address}}</td>
                </tr>
              </table>
            </b-card>
          </b-row>
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
              <tr class="listing-data">
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Supplier Awarded</th>
                <th>Location</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
              <tr class="listing-data odd">
                <td>Human Grade Disinfectant Solution And Face Mask For DOST-NCR Emergency Response</td>
                <td>For supplying the masses with disinfectants and face masks</td>
                <td>Medical and Dental Equipment</td>
                <td>PHP108,864</td>
                <td>Bauertek Corporation</td>
                <td>DPWH REGIONAL OFFICE IV-B</td>
                <td>2020-04-08</td>
                <td>2020-04-18</td>
              </tr>
              <tr class="listing-data">
                <td>Procurement Of Relief Goods</td>
                <td>Canned goods for those affected by the lock down</td>
                <td>Disaster Relief Items</td>
                <td>PHP686,000</td>
                <td>Tina's Dried Fish And Egg Dealer</td>
                <td>Local Government Unit Of Gamu, Isabela</td>
                <td>2020-04-16</td>
                <td>2020-04-23</td>
              </tr>
              <tr class="listing-data odd">
                <td>Purchase/Acquisition Of Food Supplies For Quick Response - COVID-19</td>
                <td>Assorted food for the families under quarantine</td>
                <td>Food Products</td>
                <td>PHP1,869,500</td>
                <td>RCV Enterprise</td>
                <td>Municipality Of Sibonga</td>
                <td>2020-03-24</td>
                <td>2020-04-02</td>
              </tr>
              <tr class="listing-data">
                <td>Delivery OF Rice Subsidies Amidst COVID-19 Lock Down</td>
                <td>Supplying rice to families under lock down</td>
                <td>Agricultural Products (Seeds, Seedlings, Plants..)</td>
                <td>PHP10,000,000</td>
                <td>JEWEL JADE ENTERPRISES</td>
                <td>LOCAL GOVERNMENT OF MARIA AURORA, AURORA</td>
                <td>2020-03-24</td>
                <td>2020-04-02</td>
              </tr>
            </table>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="m-4">
          <b-card header-tag="header" class="h-100 overflow-auto procurement-plan">
            <template v-slot:header>
              <p class="mb-0">Procurement Plan</p>
            </template>
            <table class="table">
              <tr>
                <th>Code</th>
                <th>Project Name</th>
                <th>Mode of Procurement</th>
                <th>Items Needed</th>
                <th>Estimated Budget</th>
                <th>Location</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
              <tr class="listing-data odd">
                <th>P01</th>
                <td>Countermeasures to COVID-19 Crisis</td>
                <td>Agency-to-agency</td>
                <td>Face masks and disinfectant solutions</td>
                <td>PHP10,000,000</td>
                <td>Quezon City, Metro Manila</td>
                <td>2020-08-17</td>
                <td>2020-08-21</td>
              </tr>
              <tr class="listing-data">
                <th>P02</th>
                <td>Relief Goods to Families on Lock Down</td>
                <td>Agency-to-agency</td>
                <td>Canned goods, cooking oil, rice</td>
                <td>PHP25,000,000</td>
                <td>Quezon City, Metro Manila</td>
                <td>2020-08-24</td>
                <td>2020-08-28</td>
              </tr>
              <tr class="listing-data odd">
                <th>P03</th>
                <td>Learning Materials & Equipment for Students</td>
                <td>Agency-to-agency</td>
                <td>Laptops, books, pad paper, pencils, pens</td>
                <td>PHP50,000,000</td>
                <td>Quezon City, Metro Manila</td>
                <td>2020-08-31</td>
                <td>2020-09-04</td>
              </tr>
            </table>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="listings">
          <!-- <h1>Listings</h1> -->
          <div class="row flex-row flex-wrap align-content-around justify-content-center">
            <Listing
              v-for="listing in listings"
              :key="listing.id"
              :listing="listing"
              :agency="getAgency(listing.agency)"
            />
          </div>
          <a href="/newlisting" class="btn btn-primary">Add Listing</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Listing from "../components/Listing.vue";
export default {
  name: "agency",
  components: { Listing },
  data() {
    return {};
  },
  methods: {
    gotoUser(name) {
      var user = this.$store.state.users.filter((user) => user.name == name)[0];
      this.$router.push("/" + user.type + "/" + user.id);
    },
    getAgency(agency_id) {
      var agency = this.$store.state.users.filter(
        (user) => user.id == agency_id
      )[0];
      return agency;
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
  },
};
</script>
<style scoped>
.agency {
  background-color: #c9b9ab;
}
.profile-picture {
  width: 200px;
  height: 200px;
  border: 5px solid #ffffff;
}

.basic-info table td:first-child {
  width: 150px;
  color: #557a95;
  font-weight: bold;
}

.card-header {
  background-color: #557a95 !important;
  color: #fff;
  font-weight: bold;
}

.transaction-history .card-body,
.procurement-plan .card-body {
  padding: 0px;
}

.transaction-history table tr th,
.procurement-plan table tr th {
  color: #557a95;
  font-weight: bold;
  font-size: 12px;
}

.listing-data td {
  font-size: 11px;
}

.listings {
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.listings h1 {
  font-size: 30px;
  font-weight: bold;
  color: #557a95;
  border-bottom: 5px solid #557a95;
}
.odd {
  background-color: #c3d5e0;
}
</style>
