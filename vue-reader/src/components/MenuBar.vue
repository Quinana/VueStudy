<template>
  <div class="menu-bar">
    <!-- 下滑动画 -->
    <transition name="slide-up">
      <!-- 如果设置栏弹出或标题栏隐藏，隐藏阴影效果 -->
      <div
        class="menu-wrapper"
        v-bind:class="{
          'hide-box-shadow': ifSettingShow || !ifTitleAndMenuShow
        }"
        v-show="ifTitleAndMenuShow"
      >
        <div class="icon-wrapper">
          <span class="icon-menu icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon"></span>
        </div>
        <!-- 直接自己输出一个A作为图标 -->
        <div class="icon-wrapper">
          <span class="icon-a icon" @click="ShowSetting">A</span>
        </div>
      </div>
    </transition>
    <!-- 菜单栏弹出的滑动窗口 -->

    <transition name="slide-up">
      <div class="setting-wrapper" v-show="ifSettingShow">
        <div class="setting-font-size">
          <!-- 自动设置style的字体大小为list的首尾元素 -->
          <div
            class="preview"
            :style="{ fontSize: fontSizeList[0].fontSize + 'px' }"
          >
            A
          </div>
          <div class="select">
            <!-- v-for实现根据字体列表数量自动生成对应的线段 -->
            <div
              class="select-wrapper"
              v-for="(item, index) in fontSizeList"
              :key="index"
              @click="setFontSize(item.fontSize)"
            >
              <div class="line"></div>
              <div class="point-wrapper">
                <div class="point" v-show="defaultFontSize == item.fontSize">
                  <div class="small-point"></div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>

          <div
            class="preview"
            :style="{
              fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px'
            }"
          >
            A
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    },
    fontSizeList: {
      type: Array
    },
    defaultFontSize: Number
  },
  data () {
    return {
      ifSettingShow: false
    }
  },
  methods: {
    toggleSettingShow () {
      this.ifSettingShow = !this.ifSettingShow
    },
    ShowSetting () {
      this.ifSettingShow = true
    },
    HideSetting () {
      this.ifSettingShow = false
    },
    setFontSize (fontSize) {
      this.$emit('setFontSize', fontSize)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
.menu-bar {
  .setting-wrapper {
    position: absolute;
    bottom: px2rem(40);
    left: 0;
    z-index: 101;
    width: 100%;
    height: px2rem(60);
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    .setting-font-size {
      display: flex;
      height: 100%;
      .preview {
        flex: 0 0 px2rem(40);
        @include center;
      }
      .select {
        display: flex;
        flex: 1;
        .select-wrapper {
          flex: 1;
          align-items: center;
          display: flex;
          // 实现左右第一个和最后一个线段不显示
          &:first-child {
            // background: red;
            .line {
              &:first-child {
                border-top: none;
              }
            }
            &:last-child {
              .line {
                &:last-child {
                  border-top: none;
                }
              }
            }
          }
          .line {
            flex: 1;
            height: 0;
            border-top: px2rem(1) solid #ccc;
          }
          .point-wrapper {
            position: relative;
            flex: 0 0 0;
            width: 0;
            height: px2rem(7);
            border-left: px2rem(1) solid #ccc;
            .point {
              position: absolute;
              top: px2rem(-8);
              left: px2rem(-8);
              width: px2rem(20);
              height: px2rem(20);
              border-radius: 50%;
              background: white;
              border: px2rem(1) solid #ccc;
              box-shadow: 0 0 px2rem(4) rgba(0, 0, 0, 0.15);
              @include center;
              .small-point {
                width: px2rem(5);
                height: px2rem(5);
                background: black;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
  .menu-wrapper {
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: px2rem(40);
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    &.hide-box-shadow {
      box-shadow: none;
    }
    .icon-wrapper {
      @include center;
      flex: 1;
    }
  }
}
</style>
