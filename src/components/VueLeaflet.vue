<template>
  <div class="vue-leaflet">
    <l-map class="map" :zoom="zoom" :center="center" :attribution="attribution">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng">
        <l-popup>Hello!</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
//引入地圖套件相關
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
const L = window.L;

export default {
  name: "vueLeaflet",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 3,
      center: [47.31322, -1.319482],
      markerLatLng: [47.31322, -1.319482],
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
