<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BSscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";

export default {
  name: "CityList",
  props: {
    cities: Object,
    hot: Array,
    letter: String,
  },
  methods: {
    __initScroll() {
      this.$nextTick(() => {
        if (!this.BSscroll) {
          this.BSscroll = new BSscroll(this.$refs.wrapper, {
            click: true,
            probeType: 1,
          });
        } else {
          this.BSscroll.refresh();
        }
      });
    },

    // 获取兄弟组件的字母数据
    handleLetterChange(letter) {
      if (letter) {
        // 获取每个城市列表的节点,letter是变量
        // const cityNode = this.$refs[letter]
        const cityNode = this.$refs[letter][0];
        // console.log(cityNode)
        this.BSscroll.scrollToElement(cityNode);
      }
    },

    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"]),
  },
  mounted() {
    this.__initScroll();
  },
  watch: {
    // 监视数据，最后一次刷新
    hotCities() {
      this.__initScroll();
    },
    cities() {
      this.__initScroll();
    },
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.BSscroll.scrollToElement(element);
      }
    },
  },
  computed: {
    ...mapState(["city"]),
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
