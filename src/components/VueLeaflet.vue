<template>
    <div class="vue-leaflet">
        <l-map class="map" :zoom="zoom" :center="center" :attribution="attribution">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker :icon="icon">
                <l-popup>Hello!</l-popup>
            </l-marker>
        </l-map>
        <v-marker-cluster></v-marker-cluster>
    </div>
</template>

<script>

    //引入地圖套件相關
    // import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
    // import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
    // 引入地圖
    import L from "leaflet";
    console.log(L);
    export default {
        name: "vueLeaflet",
        components: {

            LMap,
            LTileLayer,
            LMarker,
            LPopup,
            "v-marker-cluster": Vue2LeafletMarkerCluster
        },
        data() {
            return {
                zoom: 17,
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                // 上面一樣 下面開始替換 Marker Icon
                icon_hasAllMask: L.icon({
                    iconUrl: require("@/assets/images/Icon_location_green.svg"),
                    iconSize: [70, 100],
                    iconAnchor: [22, 94]
                }),
                icon_onlyOneMask: L.icon({
                    iconUrl: require("@/assets/images/Icon_location_orange.svg"),
                    iconSize: [70, 100],
                    iconAnchor: [22, 94]
                }),
                icon_noMask: L.icon({
                    iconUrl: require("@/assets/images/Icon_location_red.svg"),
                    iconSize: [70, 100],
                    iconAnchor: [22, 94]
                }),
            }
        },
        mounted() {
            // osmMap = L.map('map', {
            //     center: [25.03, 121.55],// 台北市區的經緯度（地圖中心）
            //     zoom: 15,// 地圖預設尺度
            // });
            // // 新增圖資圖層（OSM 圖資）
            // const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            // L.tileLayer(osmUrl, {                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
            // }).addTo(osmMap);
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
