<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    />
    <detail-header />
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "@/components/Detail/Banner";
import DetailHeader from "@/components/Detail/Header";
import DetailList from "@/components/Detail/List";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: [],
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/mock/detail.json", {
          params: {
            id: this.$route.params.id,
          },
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    },
  },
  mounted() {
    this.getDetailInfo();
  },
  activated() {
    this.getDetailInfo();
  },
};
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  border-radius: .4rem
</style>
