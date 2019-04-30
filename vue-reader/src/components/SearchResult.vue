<template>
  <div class="search">
    <input v-model="searchKeyword" />
    <button title="全文搜索" @click="entirSearch(searchKeyword)">搜索</button>
    <!-- <button icon="search" title="全文搜索" @click="search">搜索</button> -->
    <div v-if="searchResult">
      <div v-if="!searchResult.length" class="result-list">搜索不到结果</div>
      <ul class="result-list">
        <li class="item" v-for="(result, index) in searchResult" :key="index">
          <a
            class="link"
            href="#"
            @click.prevent="gotoCfi(result.cfi)"
            v-html="searhReslt(result.excerpt)"
          >
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchVisible: false,
      // keyword: '',
      results: this.searchResult,
      searchKeyword: ''
    }
  },
  props: {
    // keyword:
    // {
    //   type: String
    //   // default: ''
    // },
    searchResult:
    {
      type: Array
      // default: null
    }
  },
  components: {

  },
  methods: {
    searhReslt (text) {
      return text.replace(this.searchKeyword, `<span class="keyword"> ${this.searchKeyword} </span>`)
    },
    gotoCfi (cfi) {
      this.$emit('gotoCfi', cfi)
      // this.book.goto(cfi)
      // this.hideTitleAndMenu()
    },
    entirSearch (searchKeyword) {
      this.$emit('entirSearch', searchKeyword)
    }
    // gotoCfi (cfi) {
    //   this.book.goto(cfi)
    // }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/styles/global";
.search {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 102;
  width: 50%;
  height: 100%;
  background: white;
  // .results {
  // width: 100%;
  // height: 100%;
  // overflow: auto;
  // font-size: px2rem(1);
  // background: #333;
  .result-list {
    width: 100%;
    height: 100%;
    overflow: auto;
    font-size: px2rem(10);
    // background: #333;
    .item {
      padding: px2rem(2) px2rem(5);
      border-bottom: px2rem(1) solid blueviolet;
      .link {
        text-decoration: none;
        color: #666;
        // 关键词的样式无效
        .keyword {
          // background: #333;
          color: blue;
          font-weight: bold;
        }
      }
    }
  }
  // }
  .empty {
    width: 100%;
    height: 100%;
    @include center;
    font-size: px2rem(16);
    color: #333;
  }
}
</style>
