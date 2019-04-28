<template>
  <div class="ebook">
    <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="middle" @click="toggleTitleandMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <!-- 通过ref属性，使下面可以直接通过refs来在dom树中选中该元素 -->
    <!-- 传递数据给子组件 -->
    <menu-bar
      :ifTitleAndMenuShow="ifTitleAndMenuShow"
      :fontSizeList="fontSizeList"
      :defaultFontSize="defaultFontSize"
      @setFontSize="setFontSize"
      ref="menuBar"
    ></menu-bar>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import MenuBar from '@/components/MenuBar'
import Epub from 'epubjs'
const DOWNLOAD_URL = '/static/大王饶命.epub'
export default {
  Epub,
  data () {
    return {
      ifTitleAndMenuShow: false,
      // 字体大小列表
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 18 },
        { fontSize: 20 },
        { fontSize: 22 },
        { fontSize: 24 }
      ],
      defaultFontSize: 16
    }
  },
  components: { TitleBar, MenuBar },
  methods: {
    // 解析电子书
    showEpub () {
      // 生成ebook 注意为了正确生成
      this.book = new Epub(DOWNLOAD_URL)
      // console.log(this.book)
      // 生成rendition
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      // 渲染电子书
      this.rendition.display()
      // 至此 渲染成功
      // 获取theme
      this.themes = this.rendition.themes
      // 设置默认字体
      this.setFontSize(this.defaultFontSize)
    },
    // 两个翻页功能，直接调用epubjs的内置方法
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
      }
    },
    // 菜单栏和标题栏显示
    toggleTitleandMenu () {
      // if (this.ifTitleandMenuShow) {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
      // }
      // 通过ref在dom树中选中该dom， 并调用其上的方法 以此实现两个滑动栏同时隐藏
      if (!this.ifTitleAndMenuShow) {
        this.$refs.menuBar.HideSetting()
      }
    },
    setFontSize (fontSize) {
      // 调用epubjs自带的themes属性中的fontsize方法，然后传入字体大小即可实现
      this.defaultFontSize = fontSize
      if (this.themes) {
        this.themes.fontSize(fontSize + 'px')
      }
    }
  },
  mounted () {
    // 挂载加载epub的方法
    this.showEpub()
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/styles/global.scss";
.ebook {
  position: relative;
  // .title-wrapper {
  //   position: absolute;
  //   display: flex;
  //   top: 0;
  //   left: 0;
  //   z-index: 101;
  //   width: 100%;
  //   height: px2rem(40);
  //   background: white;
  //   box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  //   .left {
  //     flex: 0 0 px2rem(60);
  //     @include center;
  //   }
  //   .right {
  //     flex: 1;
  //     display: flex;
  //     justify-content: flex-end;
  //     .icon-wrapper {
  //       @include center;
  //       flex: 0 0 px2rem(40);
  //     }
  //   }
  // }
  .read-wrapper {
    .mask {
      position: absolute;
      display: flex;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      // background: green;
      .left {
        flex: 0 0 px2rem(100);
        // background: red;
      }
      .middle {
        flex: 1;
        // background: white;
      }
      .right {
        flex: 0 0 px2rem(100);
        // background: green;
      }
    }
  }
  // .menu-wrapper {
  //   position: absolute;
  //   display: flex;
  //   bottom: 0;
  //   left: 0;
  //   z-index: 101;
  //   width: 100%;
  //   height: px2rem(40);
  //   background: white;
  //   box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  //   .icon-wrapper {
  //     @include center;
  //     flex: 1;
  //   }
  // }
}
</style>
