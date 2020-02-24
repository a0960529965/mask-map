//外部
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
//內部
import App from "./App.vue";

Vue.use(VueAxios, axios, VueRouter);
Vue.config.productionTip = false;

// 載入 vue2-leaflet，依照自己需要載入組件
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "vue2-leaflet";
// 載入 css
import "leaflet/dist/leaflet.css";

// 啟用載入的各組件
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
Vue.component("l-icon", LIcon);

// 設定預設 icon
import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

// 載入 markercluster css
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
// 載入 markercluster 並啟用
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
Vue.component("v-marker-cluster", Vue2LeafletMarkerCluster);

new Vue({
  render: h => h(App)
}).$mount("#app");
