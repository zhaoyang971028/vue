<template>
  <div id="new1">
    <topbar></topbar>
    <communityRegin></communityRegin>
    <mainbody></mainbody>
    <img
      src="http://ubmcmm.baidustatic.com/media/v1/0f000n1TzQXjmGeIm1-X0f.jpg"
      title
      alt
      border="0"
      height="90"
      width="1000"
    />
    <bootom></bootom>
  </div>
</template>
<script>
import topbar from "./topbar.vue";
import communityRegin from "./communityHeadImgRegion.vue";
import mainbody from "./mainbody.vue";
import bootom from "./bottom.vue";
export default {
  name: "new1",
  components: {
    topbar,
    communityRegin,
    mainbody,
    bootom
  },
  mounted() {
    window.console.log(this.$route.params.id);
  }
};
</script>
<style  scoped>
.new1 {
  height: 100vh;
}
img {
  display: block;
  margin: 40px auto;
}
</style>