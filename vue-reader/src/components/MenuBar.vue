<template>
  <div class="menu-bar">
    <!-- 下滑动画 -->
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="ifTitleAndMenuShow">
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
        <div class="setting-font-size"></div>
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
    }
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
    .icon-wrapper {
      @include center;
      flex: 1;
    }
  }
}
</style>
