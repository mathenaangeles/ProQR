import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "./assets/sass/custom.scss";
import x5GMaps from "x5-gmaps";

Vue.use(x5GMaps, "AIzaSyDvT1fCQX-rY-jN9gMy3zZ_nIfNEu2Pe_0");
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
