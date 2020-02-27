<template>
    <div id="app">
        <div class="row no-gutters">
            <div class="col-sm-3">
                <div class="select-ifo">
                    <div class="toolbox" v-if="cityName.length">
                        <div class="sticky-top bg-white shadow-sm p-2">
                            <div class="form-group d-flex">
                                <label for="cityName" class="mr-2 col-form-label text-right">縣市</label>
                                <div class="flex-fill">
                                    <select id="cityName" class="form-control" v-model="select.city" @change='select.area=""'>
                                        <option value="">-- Select One --</option>
                                        <option :value="c.CityName" v-for="(c, index) in cityName" :key="index">{{ c.CityName }}</option>
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
                                        地址：<a href="https://www.google.com.tw/maps/place/..." target="_blank" title="Google Map">
                                            地址</a>
                                    </p>
                                </a>
                            </template>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-9">
                <div id="map">
                    <l-map class="map" :zoom="zoom" :center="center" :attribution="attribution" @updateMap='updateMap'>
                        <l-tile-layer :url="url"></l-tile-layer>
                        <l-marker :icon="icon">
                            <l-popup>Hello!</l-popup>
                        </l-marker>
                    </l-map>
                    <v-marker-cluster></v-marker-cluster>
                </div>
                <!-- <infoPopup></infoPopup> -->
            </div>
        </div>
    </div>
</template>

<script>
    // import VueLeaflet from "./components/VueLeaflet.vue";
    // import infoPopup from "./components/infoPopup.vue";
    // import selectIfo from "./components/selectIfo.vue";
    //引入
    import cityName from "./assets/CityCountyData.json";
    // 引入地圖
    import L from "leaflet";
    console.log(L);
    //使用變數
    let osmMap = {};
    export default {
        name: "app",
        // components: {
        //     VueLeaflet,
        //     selectIfo,
        //     infoPopup
        // },
        data() {
            return {
                isPopupShow: false,
                data: [],
                cityName,
                select: {
                    city: '臺北市',
                    area: '大安區',
                },
            };
        },
        methods: {
            updateMap() {
                //1--取遠端程式碼,將台北市跑出來,使用filter將資料列出
                const pharmacies = this.data.filter(
                    (pharmacy) => (pharmacy.properties.county === this.select.city)
                );
                // console.log(pharmacies);
                //2-- 確保台北市圖資加到畫面上
                pharmacies.forEach((pharmacy) => {
                    //解構寫法
                    const { properties, geometry } = pharmacy;
                    //marker座標位置[0][1]放入
                    L.marker([geometry.coordinates[1], geometry.coordinates[0]]).addTo(osmMap);
                    console.log(properties);
                });
            }
        },
        mounted() {
            const url =
                "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";
            this.$http.get(url)
                .then(response => {
                    this.data = response.data.features;
                });
            osmMap = L.map('map', {
                center: [25.03, 121.55],// 台北市區的經緯度（地圖中心）
                zoom: 15,// 地圖預設尺度
            });
            // 新增圖資圖層（OSM 圖資）
            const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            L.tileLayer(osmUrl, {                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
            }).addTo(osmMap);

            // L.marker([25.03, 121.55]).addTo(osmMap);
        },
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
    }
</style>
