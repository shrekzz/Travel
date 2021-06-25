<template>
  <div>
    <detail-banner />
    <detail-header />
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "@/components/Detail/Banner";
import DetailHeader from "@/components/Detail/Header";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
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
