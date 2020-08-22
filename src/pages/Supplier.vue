<template>
  <div class="supplier">
    <b-container fluid class="p-0">
      <b-row>
        <b-col cols="7" class="basic-info m-4">
          <img :src="require(`../assets/images/` + supplier.image_url)" class="profile-picture rounded-0"/>
          <table>
            <tr>
              <td>Name:</td>
              <td>{{supplier.name}}</td>
            </tr>
            <tr>
              <td>Contact Person:</td>
              <td>{{supplier.contact_person}}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{{supplier.email}}</td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td>{{supplier.mobile}}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td><a :href="supplier.website">{{supplier.website}}</a></td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{{supplier.address}}</td>
            </tr>
          </table>
        </b-col>
        <b-col cols="4" class="m-4">
          <b-card header-tag="header" class="h-100 overflow-auto network">
            <template v-slot:header>
              <p class="mb-0">Network</p>
            </template>
            <b-card-text v-if="supplier.network.length">
              <ul>
                <li v-for="connection in supplier.network" :key="connection">
                  <b-link @click="gotoUser(connection)">{{ connection }}</b-link>
                </li>
              </ul>
            </b-card-text>
            <b-card-text v-else class="textCenter">
              <p>No connections found.</p>
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
              <tr class="listing-data">
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
              <tr class="listing-data">
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
          <b-card header-tag="header" class="h-100 overflow-auto supply-list">
            <template v-slot:header>
              <p class="mb-0">Supply List</p>
            </template>
            <table class="table">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Location</th>
              </tr>
              <tr v-for="supply in supplies" :key="supply.id" class="listing-data">
                <td>{{supply.title}}</td>
                <td>{{supply.description}}</td>
                <td>{{supply.category}}</td>
                <td>{{supply.price}}</td>
                <td>{{supply.quantity}}</td>
                <td>{{supply.unit}}</td>
                <td>{{supply.location}}</td>
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
  name: "supplier",
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
    supplier() {
      var supplier = this.$store.state.users.filter(
        (user) => user.id == this.$route.params.id
      )[0];
      return supplier;
    },
    supplies() {
      var supplies = this.$store.state.supplies.filter(
        (supply) => supply.supplier_id == this.$route.params.id
      );
      return supplies;
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

  .basic-info table td {
    font-size: 15px;
  }

  .card-header {
    background-color: #557a95 !important;
    color: #FFF;
    font-weight: bold;
  }

  .textCenter {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .transaction-history .card-body,
  .supply-list .card-body {
    padding: 0px;
  }

  .transaction-history table tr th,
  .supply-list table tr th {
    color: #557a95;
    font-weight: bold;
    font-size: 12px;
  }

  .listing-data td {
    font-size: 11px;
  }
</style>
