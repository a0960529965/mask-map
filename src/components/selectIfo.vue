<template>
  <div class="select-ifo">
    <div class="toolbox">
      <div class="sticky-top bg-white shadow-sm p-2">
        <div class="form-group d-flex">
          <label for="cityName" class="mr-2 col-form-label text-right"
            >縣市</label
          >
          <div class="flex-fill">
            <select id="cityName" class="form-control" v-model="select.city">
              <option value="">-- Select One --</option>
              <option
                :value="c.CityName"
                v-for="(c, index) in cityName"
                :key="index"
                >{{ c.CityName }}</option
              >
            </select>
          </div>
        </div>
        <div class="form-group d-flex">
          <label for="area" class="mr-2 col-form-label text-right">地區</label>
          <div class="flex-fill">
            <select id="area" class="form-control">
              <option value="">-- Select One --</option>
            </select>
          </div>
        </div>
        <p class="mb-0 small text-muted text-right ">
          請先選擇區域查看（綠色表示還有口罩）
        </p>
      </div>
      <ul class="list-group">
        <template>
          <a class="list-group-item text-left ">
            <h3>藥局名稱</h3>
            <p class="mb-0">
              成人口罩：1 | 兒童口罩：2
            </p>
            <p class="mb-0">
              地址：<a
                href="https://www.google.com.tw/maps/place/..."
                target="_blank"
                title="Google Map"
              >
                地址</a
              >
            </p>
          </a>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
//引入
import cityName from "../assets/CityCountyData.json";
export default {
  name: "selectIfo",
  data() {
    return {
      cityName,
      select: {
        city: "臺北市"
      }
    };
  },
  methods: {
    // updateMap() {
    //   const pharmacies = this.data.fliter(
    //     pharmacy => pharmacy.properties.county === this.select.city
    //   );
    //   pharmacies.forEach(pharmacy => {
    //     const { properties, gecmetry } = pharmacy;
    //     L.marker([geometry.coordinates[1], geometry.coordinates[0]]);
    //     console.log(properties);
    //   });
  }
};
</script>

<style lang="scss">
.select-ifo {
  .highlight {
    background: #e9ffe3;
  }
  .toolbox {
    height: 100vh;
    overflow-y: auto;
    a {
      cursor: pointer;
    }
  }
}
</style>
