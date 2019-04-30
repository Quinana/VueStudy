<template>
  <div class="search">
    <div class="search-wrapper">
      <div class="input-wrapper">
        <input v-model="searchKeyword" class="input" />
        <img
          src="@/assets/search.png"
          alt=""
          class="icon-wrapper"
          @click="entirSearch(searchKeyword)"
        />
        <!-- <button

          title="全文搜索"
          class="icon-wrapper"
          @click="entirSearch(searchKeyword)"
        >
          搜索
        </button> -->
      </div>

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
  </div>
</template>

<script>
// import '@/assets/search.ico'
export default {
  data () {
    return {
      // keyword: '',
      // results: this.searchResult,
      // 双向绑定更新该关键词 并通过emit传回给父组件
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
    // 展示搜索结果，子组件中只对搜索结果做替换
    searhReslt (text) {
      return text.replace(this.searchKeyword, `<span class="keyword"> ${this.searchKeyword} </span>`)
    },
    gotoCfi (cfi) {
      this.$emit('gotoCfi', cfi)
    },
    entirSearch (searchKeyword) {
      this.$emit('entirSearch', searchKeyword)
    }
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
  .search-wrapper {
    width: 100%;
    height: 95%;
    overflow: auto;
    .input-wrapper {
      width: 95%;
      display: flex;
      justify-content: flex-end;
      img {
        width: px2rem(20);
        height: px2rem(20);
      }
      .icon-wrapper {
        flex-direction: column;
        @include center;
        flex: 0 0 px2rem(20);
      }
      .input {
        flex-direction: column;
        @include center;
        flex: 1;
      }
    }
    // font-size: px2rem(1);
    // background: #333;
    .result-list {
      // width: 100%;
      // height: 100%;
      // overflow: auto;
      font-size: px2rem(14);
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
            color: yellow;
            font-weight: bold;
          }
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
