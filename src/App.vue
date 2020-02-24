<template>
  <div id="app">
    <div class="row no-gutters">
      <div class="col-sm-3">
        <selectIfo />
      </div>
      <div class="col-sm-9">
        <VueLeaflet id="map"></VueLeaflet>
        <infoPopup></infoPopup>
      </div>
    </div>
  </div>
</template>

<script>
import VueLeaflet from "./components/VueLeaflet.vue";
import infoPopup from "./components/infoPopup.vue";
import selectIfo from "./components/selectIfo.vue";

export default {
  name: "app",
  components: {
    VueLeaflet,
    selectIfo,
    infoPopup
  },
  data() {
    return {
      isPopupShow: false,
      data: []
    };
  },
  mounted() {
    const url =
      "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";
    this.$http.get(url).then(response => {
      this.data = response.data.features;
    });
  }
};
</script>

<style lang="scss">
@import "./style/reset";
@import "bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  #map {
    height: 100vh;
  }
}
</style>
