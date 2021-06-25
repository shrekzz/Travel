<template>
  <div>
    <detail-banner />
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
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三馆联票",
              children: [
                {
                  title: "成人八馆联票",
                },
              ],
            },
          ],
        },
        {
          title: "学生票",
        },
        {
          title: "儿童票",
        },
        {
          title: "特惠票",
        },
      ],
    };
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
