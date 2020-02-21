import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "leaflet/dist/leaflet.css";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";

Vue.use(VueRouter, Vue2LeafletMarkerCluster);
Vue.config.productionTip = false;

import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
new Vue({
  render: h => h(App)
}).$mount("#app");
