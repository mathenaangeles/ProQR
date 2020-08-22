import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";
import Listings from "./pages/Listings.vue";
import ListingPage from "./pages/ListingPage.vue";
import Agency from "./pages/Agency.vue";
import Supplier from "./pages/Supplier.vue";
import Confirmation from "./pages/Confirmation.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/listings",
      name: "listings",
      component: Listings,
    },
    {
      path: "/listing/:id",
      name: "listing",
      component: ListingPage,
      props: true,
    },
    {
      path: "/agency/:id",
      name: "agency",
      component: Agency,
    },
    {
      path: "/supplier/:id",
      name: "supplier",
      component: Supplier,
    },
    {
      path: "/confirmation/:id",
      name: "confirmation",
      component: Confirmation,
    },
  ],
});
