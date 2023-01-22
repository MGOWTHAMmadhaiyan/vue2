<template>
  <el-row id="videoDiv2">
    <video autoplay loop muted plays-inline id="video2">
      <source src="../assets/Pexels Videos 2324166.mp4" type="video/mp4" />
    </video>
    <div id="videoMessage2" class="styling">
      <el-button @click="call">CLICK ME</el-button>
    </div>
  </el-row>
</template>

<script>
export default {
  name: "backGround",
  methods: {
    call() {
      this.$router.push("/more");
    },
  },
};
</script>

<style scoped>
#videoDiv2 {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: block;
  position: relative;
} /* This has been changed */
#video2 {
  width: 100%;
  height: 100%;
} /* This has been changed */
#videoMessage2 {
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
/* .back-video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
#channelname {
  font-size: 60px;
  color: chartreuse;
  font-family: Lucida Handwriting;
  margin-top: -40px;
}
@media (min-aspect-ratio: 9 / 3) {
  .back-video {
    width: 100%;
    height: auto;
  }
}
@media (max-aspect-ratio: 9 / 3) {
  .back-video {
    height: auto;
    width: 100%;
  }
}
#button {
  left: 490px;
  top: 560px;
  position: fixed;
  z-index: 1;
} */
</style>
