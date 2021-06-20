<template>
  <div>
    <city-header />
    <city-search />
    <city-list v-if="cities.length !== 0" :cities="cities" :hot="hotCities" />
    <city-alphabet :cities="cities" />
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "@/components/City/Header";
import CitySearch from "@/components/City/Search";
import CityList from "@/components/City/List";
import CityAlphabet from "@/components/City/Alphabet";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/mock/city.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        this.cities = res.data.cities;
        this.hotCities = res.data.hotCities;
      }
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style lang="stylus" scoped></style>
