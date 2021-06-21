<template>
  <div>
    <home-header />
    <home-swiper :list="swiperList" />
    <home-icons :list="iconList" />
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script>
import HomeHeader from "@/components/Home/Header";
import HomeSwiper from "@/components/Home/Swiper";
import HomeIcons from "@/components/Home/Icons";
import HomeRecommend from "@/components/Home/Recommend";
import HomeWeekend from "@/components/Home/Weekend";
import axios from "axios";

export default {
  naem: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/mock/index.json").then(this.getHomeInfoSucc);
    },

    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;
      }
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>

<style></style>
