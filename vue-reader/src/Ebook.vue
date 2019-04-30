<template>
  <div class="ebook">
    <title-bar
      :ifTitleAndMenuShow="ifTitleAndMenuShow"
      :keyword="keyword"
      :searchResult="searchResult"
      @entirSearch="entirSearch"
      @gotoCfi="gotoCfi"
    ></title-bar>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <!-- <div class="left" @click="entirSearch"></div> -->
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
      :themeList="themeList"
      :defaultTheme="defaultTheme"
      @setTheme="setTheme"
      :bookAvailable="bookAvailable"
      @onProgressChange="onProgressChange"
      :navigation="navigation"
      :navigationAvailable="navigationAvailable"
      @jumpTo="jumpTo"
      ref="menuBar"
    ></menu-bar>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import MenuBar from '@/components/MenuBar'
import Epub from 'epubjs'
// const DOWNLOAD_URL = '/static/大王饶命.epub'
const DOWNLOAD_URL = '/static/山海经.epub'
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
      defaultFontSize: 20,
      // 主题列表 主题的数据格式是按照epub去查看得到的
      themeList: [
        {
          name: 'default',
          style: {
            body: {
              'color': '#000', 'background': '#fff'
            }
          }
        },
        {
          name: 'eye',
          style: {
            body: {
              'color': '#000', 'background': '#ceeaba'
            }
          }
        },
        {
          name: 'night',
          style: {
            body: {
              'color': '#fff', 'background': '#000'
            }
          }
        },
        {
          name: 'gold',
          style: {
            body: {
              'color': '#000', 'background': 'rgb(241, 236, 226)'
            }
          }
        }
      ],
      defaultTheme: 0,
      // 图书是否处于可用状态
      bookAvailable: false,
      navigation: {},
      navigationAvailable: false,
      // 保存全文搜索结果
      searchResult: null,
      // 搜索关键词
      keyword: '',
      // searchVisible: false,
      // keyword: '',
      results: null
    }
  },
  components: { TitleBar, MenuBar },
  methods: {
    // 设置主题
    setTheme (index) {
      this.themes.select(this.themeList[index].name)
      this.defaultTheme = index
    },
    // 注册主题
    registerTheme () {
      this.themeList.forEach(theme => {
        this.themes.register(theme.name, theme.style)
      })
    },
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
      // 注册主题
      this.registerTheme()
      // 设置默认主题
      this.setTheme(this.defaultTheme)
      // 生成进度条 在加载完毕后生成具体定位
      this.book.ready.then(() => {
        this.navigation = this.book.navigation
        // console.log(this.navigation)
        // 表示目录生成完成
        this.navigationAvailable = true
        // 生成Locations对象
        return this.book.locations.generate()
      }).then(result => {
        // 保存locations对象
        this.locations = this.book.locations
        // 标记电子书为解析完毕状态
        this.bookAvailable = true
        console.log(this.bookAvailable)
      })
    },
    // 全文搜索
    entirSearch (keyword) {
      // if (!keyword.length) {
      //   alert('请输入关键词')
      // }
      let book = this.book
      // let q = this.keyword
      let q = keyword
      return Promise.all(
        book.spine.spineItems.map(item =>
          item.load(book.load.bind(book))
            .then(item.find.bind(item, q))
            .finally(item.unload.bind(item)))
      ).then((results) => {
        console.log(results)
        return new Promise((resolve, reject) => {
          resolve(results)
          let mergedResults = [].concat.apply([], results)
          this.searchResult = mergedResults
        })
        // return Promise.resolve([].concat.apply([], results)
        // )
      })
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
    },
    onProgressChange (progress) {
      const percentage = progress / 100
      // epub自带的百分百获取页数
      const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      // epubjs展示指定页
      this.rendition.display(location)
    },
    // 根据链接跳转到指定位置 目录跳转
    jumpTo (href) {
      this.rendition.display(href)
      this.hideTitleAndMenu()
    },
    hideTitleAndMenu () {
      // 隐藏标题栏和菜单栏
      this.ifTitleAndMenuShow = false
      // 隐藏菜单栏弹出的设置栏
      this.$refs.menuBar.HideSetting()
      // 隐藏目录
      this.$refs.menuBar.hideContent()
    },
    // 根据搜索结果跳转
    gotoCfi (cfi) {
      this.rendition.display(cfi)
      this.hideTitleAndMenu()
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
