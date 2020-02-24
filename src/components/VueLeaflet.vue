<template>
  <div class="vue-leaflet">
    <l-map class="map" :zoom="zoom" :center="center" :attribution="attribution">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng">
        <l-popup>Hello!</l-popup>
      </l-marker>
    </l-map>
    <v-marker-cluster></v-marker-cluster>
  </div>
</template>

<script>
// 引入地圖
// import L from "leaflet";
//引入地圖套件相關
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";

export default {
  name: "vueLeaflet",
  components: {
    // L,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    "v-marker-cluster": Vue2LeafletMarkerCluster
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 16,
      center: [24.9836633, 121.5346939],
      markerLatLng: [24.9836633, 121.5346939],
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    };
  }
};
</script>

<style lang="scss">
// @import "~leaflet.markercluster/dist/MarkerCluster.css";
// @import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.vue-leaflet {
  position: absolute;
  width: 100%;
  height: 100%;
  .map {
    height: 100%;
  }
}
</style>
