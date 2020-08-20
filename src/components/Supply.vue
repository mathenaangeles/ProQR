<template>
  <b-card no-body class="overflow-hidden m-3 p-0">
    <b-row no-gutters>
      <b-col md="4">
        <b-card-img
          :src="require(`../assets/images/default.jpg`)"
          class="rounded-0"
        ></b-card-img>
      </b-col>
      <b-col md="8">
        <b-card-body>
          <b-row>
            <b-col>
              <p>{{ supply.title }}</p>
            </b-col>
            <b-col class="price">
              <p>PHP {{ supply.price }}/{{ supply.unit }}</p>
            </b-col>
          </b-row>
          <p>{{ supplier.name }}</p>
          <b-card-text>
            {{ supply.description }}
            {{ supply.location }}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
const Supply = {
  name: "Supply",
  props: {
    supplier: Object,
    supply: Object,
  },
  created() {},
  methods: {},
};
export default Supply;
</script>

<style scoped>
.card {
  width: 600px;
  max-height: 200px;
}
.price {
  text-align: right !important;
}
</style>
