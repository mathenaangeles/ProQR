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
              <b class="title">{{ supply.title }}</b>
            </b-col>
            <b-col class="pl-0 price">
              <b>PHP {{ supply.price }}</b>
              <span class="unit">&nbsp;/ {{ supply.unit }}</span>
            </b-col>
          </b-row>
          <b-row class="supplier">
            <b-col>
              <b-link @click="gotoSupplier('supplier',supplier.id)">{{ supplier.name }}</b-link>
            </b-col>
            <b-col class="p-0">
              <b-form-rating v-model="rating" variant="warning" readonly></b-form-rating>
            </b-col>
          </b-row>
          <b-card-text class="description">{{ supply.description }}</b-card-text>
        </b-card-body>
        <b-list-group flush>
          <b-list-group-item class="pb-2">
            <b-icon class="mr-2" icon="geo-alt"></b-icon>
            {{ supply.location }}
          </b-list-group-item>
          <b-list-group-item class="pb-0">
            <b-icon class="mr-2" icon="house-fill"></b-icon>
            {{supply.category}}
          </b-list-group-item>
        </b-list-group>
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
  data() {
    return {
      rating: 0,
    };
  },
  created() {
    this.rating = this.supplier.rating;
  },
  methods: {
    gotoSupplier(path, id) {
      this.$router.push("/" + path + "/" + id);
    },
  },
};
export default Supply;
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
</style>
