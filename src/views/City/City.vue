<template>
  <div>
    <city-header />
    <city-search />
    <city-list />
  </div>
</template>

<script>
import CityHeader from "@/components/City/Header";
import CitySearch from "@/components/City/Search";
import CityList from "@/components/City/List";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
};
</script>

<style lang="stylus" scoped></style>
