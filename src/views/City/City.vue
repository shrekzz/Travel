<template>
  <div>
    <city-header />
    <city-search />
  </div>
</template>

<script>
import CityHeader from "@/components/City/Header";
import CitySearch from "@/components/City/Search";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch
  },
};
</script>

<style lang="stylus" scoped></style>
