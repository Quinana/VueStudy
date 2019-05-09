<template>
  <div class="about">
    <div class="cideodiv" v-for="(src, index) in videoSrc" :key="index">
      <video-player ref="playerObj" v-bind:fsrc="src"> </video-player>
      <!-- <a @click="playVideo(index)">播放视频</a> -->
    </div>
    <!-- <a @click="playVideo">播放视频</a> -->
  </div>
</template>
<script>
import VideoPlayer from '../components/VideoPlayer'
export default {
  name: 'about',
  components: {
    VideoPlayer
  },
  data () {
    return {
      videoSrc: [
        'rtmp://live.hkstv.hk.lxdns.com/live/hks1',
        'rtmp://live.hkstv.hk.lxdns.com/live/hks2',
        // 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8',
        // 'rtmp://vod.ahbbtv.com:1935/live/shpd1',
        // 'rtmp://live5.cqnews.net:1935/live/TVFLV15',
        'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
        'https://vjs.zencdn.net/v/oceans.mp4'
        // 'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8'
      ]
      // CCTV1高清：
      // http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8
      // CCTV3高清：
      // http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.about {
  width: 100%;
  height: 100%;
  // display: flex;
  column-count: 2;
  // column-gap: 0;
  // flex-flow: column wrap;
  .cideodiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: auto;
  }
}
</style>
