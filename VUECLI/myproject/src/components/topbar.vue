<template>
  <div id="topbar">
    <ul class="topbarnav">
      <li
        v-for="(item,index) in title"
        :key="index"
        :class="istap == index ? 'tapclick' : '' "
        v-on:click="fn(index)"
        @click="toindex(index)"
      >
        {{item}}
        <i :class="istap == index ? 'tapclick' : '' "></i>
      </li>
    </ul>
    <div>
      <a href="#" class="timeIcon"></a>
    </div>
    <div class="topright">
      <i class="el-icon-search icon icon2"></i>
      <div class="download" @mouseover="fn1" @mouseleave="fn2">
        <i class="el-icon-mobile-phone icon"></i>
        <span>App下载</span>
        <a href="#" :class="ishover ?'twocode myhover':'twocode mynohover'">
          <img src="http://img5.mtime.cn/mg/2018/01/22/200851.63552497.jpg" alt />
        </a>
      </div>
      <div class="logReg">
        <span @click="tologin()">{{login}}</span>
        |
        <span>{{register}}</span>
      </div>
      <div class="buycar">
        <i class="el-icon-shopping-cart-2 icon1"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topbar",
  data() {
    return {
      title: [
        "首页",
        "购票",
        "正版商城",
        "新闻",
        "视频",
        "直播",
        "发现",
        "社区",
        "会员"
      ],
      login: "登录",
      register: "注册",
      istap: false,
      ishover: false
    };
  },
  methods: {
    fn(index) {
      return (this.istap = index);
    },
    fn1() {
      return (this.ishover = true);
    },
    fn2() {
      return (this.ishover = false);
    },
    tologin() {
      this.$router.push("/login");
    },
    toindex(index) {
      if (index == 0) {
        this.$router.push("/homeView");
      } else if (index == 6) {
        this.$router.push("/About");
      } else if (index == 7) {
        this.$router.push("/new1");
      }
    }
  }
};
</script>
<style scoped>
#topbar {
  background: #192332;
  min-width: 100%;
  height: 55px;
  padding: 0 20px 0 20px;

  z-index: 5;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #c8c8c8;
}
.topbarnav {
  display: flex;
  align-items: center;
}
.topbarnav li {
  margin-right: 30px;
  position: relative;
  cursor: pointer;
}
.topbarnav li i {
  width: 0;
  height: 0;
  overflow: hidden;
  border-bottom: 5px solid #fff;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  position: absolute;
  left: 50%;
  bottom: -20px;
  margin-left: -7px;
  display: none;
}
.tapclick {
  color: white;
  font-weight: 800;
  display: block !important;
}
#topbar .timeIcon {
  background: url(http://static1.mtime.cn/20190320160733/images/2014/head.png)
    no-repeat 0 -315px;
  width: 117px;
  height: 36px;
  display: block;
  flex: 1;
}
.icon {
  font-size: 16px;
  margin-left: 20px;
}
.icon1 {
  font-size: 24px;
  margin-right: 20px;
}
.icon2 {
  margin-right: 20px;
}
.topright {
  display: flex;
  align-items: center;
  height: 100%;
}
.topright:nth-child(n) :hover {
  color: white;
  cursor: pointer;
}
.topright span {
  margin-right: 20px;
}
.download {
  position: relative;
  height: 100%;
  border-right: 1px solid #303947;
  border-left: 1px solid #303947;
  display: flex;
  align-items: center;
  color: white;
}
.logReg {
  margin-right: 30px;
}
.logReg span {
  margin-right: 25px;
  margin-left: 25px;
}
.buycar {
  width: 62px;
  height: 100%;
  background: #e83729;
  display: flex;
  align-items: center;
}
.buycar i {
  color: #fbdfdc;
  margin: 0 auto;
}
.twocode {
  position: absolute;
  top: 52px;
  right: -5px;
}
.mynohover {
  visibility: hidden;
}
.myhover {
  visibility: visible;
  z-index: 100;
}
</style>