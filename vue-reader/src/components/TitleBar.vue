<template>
  <div class="title-bar">
    <transition name="slide-down">
      <div class="title-wrapper" v-show="ifTitleAndMenuShow">
        <div class="left">
          <span class="icon-back icon"></span>
        </div>
        <div class="right">
          <!-- 全文搜索 -->
          <div class="icon-wrapper">
            <span class="icon-cart icon" @click="ShowSearch"> </span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-person icon"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-more icon"></span>
          </div>
        </div>
      </div>
    </transition>
    <search-view
      :ifShowSearch="ifShowSearch"
      v-show="ifShowSearch"
      :keyword="keyword"
      :searchResult="searchResult"
      @entirSearch="entirSearch"
      @gotoCfi="gotoCfi"
    ></search-view>
    <transition name="fade">
      <div class="content-mask" v-show="ifShowSearch" @click="hideSearch"></div>
    </transition>
  </div>
</template>

<script>
import SearchView from '@/components/SearchResult'
export default {
  components: { SearchView },
  props: {
    ifTitleAndMenuShow: Boolean,
    keyword:
    {
      type: String
      // default: ''
    },
    searchResult:
    {
      type: Array
      // default: null
    }
  },
  data () {
    return {
      ifShowSearch: false
    }
  },
  methods: {
    // 显示搜索栏
    ShowSearch () {
      // this.ifTitleAndMenuShow = false
      this.ifShowSearch = true
    },
    // 隐藏搜索栏
    hideSearch () {
      this.ifShowSearch = false
    },
    // 跳转方法，调用父组件方法
    jumpTo (target) {
      this.$emit('jumpTo', target)
    },
    entirSearch (keyword) {
      this.$emit('entirSearch', keyword)
    },

    gotoCfi (cfi) {
      this.$emit('gotoCfi', cfi)
      // this.book.goto(cfi)
      // this.hideTitleAndMenu()
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
.title-wrapper {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  height: px2rem(40);
  background: white;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  .left {
    flex: 0 0 px2rem(60);
    @include center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      @include center;
      flex: 0 0 px2rem(40);
    }
  }
}
.content-mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.8);
}
</style>
