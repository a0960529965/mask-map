<template>
  <div id="app">
    <div class="info">
      <h1>口罩供需資訊地圖</h1>
      <i class="fas fa-info-circle"></i>
    </div>
    <VueLeaflet></VueLeaflet>
    <infoPopup></infoPopup>
  </div>
</template>

<script>
import VueLeaflet from "./components/VueLeaflet.vue";
import infoPopup from "./components/infoPopup.vue";

export default {
  name: "app",
  components: {
    VueLeaflet,
    infoPopup
  },
  data() {
    return {
      isPopupShow: false
    };
  }
};
</script>

<style lang="scss">
@import "./style/reset";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
