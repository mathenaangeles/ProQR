import Vue from "vue";
import Vuex from "vuex";
import { Users } from "@/assets/constants/users.js";
import { Supplies } from "@/assets/constants/supplies.js";
import { Listings } from "@/assets/constants/listings.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_authenticated: true,
    users: Users,
    supplies: Supplies,
    listings: Listings,
  },
  mutations: {
    authenticate(state) {
      state.is_authenticated = !state.is_authenticated;
    },
  },
  actions: {
    authenticate: ({ commit }) => {
      commit("authenticate");
    },
  },
});
