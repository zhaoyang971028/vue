<template>
  <div class="homeView">
    <topbar></topbar>
    <div class="tophead">
      <div class="th-input">
        <div class="th-input1">
          <div class="th-inputlist">
            <div class="inputlist" v-for="(arr,index) in arr[1]" :key="index">
              <div class="i-list">{{arr}}</div>
            </div>
          </div>
          <div class="all">
            <a href>{{this.arr[0].content1}}</a>
            <div class="down"></div>
            <div class="s-line">|</div>
          </div>
        </div>
        <div class="th-input2">
          <input
            type="text"
            id="searchinput"
            class="text c_a5"
            value
            autocomplete="off"
            data-default
            data-showkeyword
            placeholder="超级无敌掌门狗:人兔的诅咒"
          />
        </div>
        <div class="th-input3">
          <a href class="iconfont icon-sousuo"></a>
        </div>
      </div>
    </div>
    <div id="slider">
      <div class="window" @mouseover="stop" @mouseleave="play">
        <ul class="container" :style="containerStyle">
          <li>
            <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt />
          </li>
          <li v-for="(item, index) in sliders" :key="index">
            <img :style="{width:imgWidth+'px'}" :src="item.img" alt />
          </li>
          <li>
            <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt />
          </li>
        </ul>
        <ul class="direction">
          <li class="left" @click="move(1200, 1, speed)">
            <svg
              class="icon"
              width="40px"
              height="47.00px"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
              />
            </svg>
          </li>
          <li class="right" @click="move(1200, -1, speed)">
            <svg
              class="icon"
              width="40px"
              height="47.00px"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"
              />
            </svg>
          </li>
        </ul>
      </div>
      <ul class="dots">
        <li
          v-for="(dot, i) in sliders"
          :key="i"
          :class="{dotted: i === (currentIndex-1)}"
          @click="jump(i+1)"
        ></li>
      </ul>
    </div>
    <div class="adv-todayhot">
      <a href>
        <img :src="this.arr[0].content2" alt />
      </a>
    </div>
    <div class="todayhot">
      <div class="hotnews">
        <div class="customtitle">
          <div class="today-hot">{{this.arr[0].content9}}</div>
          <div class="hot-list">
            <div class="h-list1">
              <a href>{{this.arr[0].content10}}</a>
            </div>
            <div class="h-list1">
              <a href>{{this.arr[0].content11}}</a>
            </div>
            <div class="h-list1">
              <a href>{{this.arr[0].content12}}</a>
            </div>
            <div class="h-list2">
              <a href>{{this.arr[0].content13}}</a>
            </div>
          </div>
          <div class="hot-more">
            <a href>{{this.arr[0].content14}}</a>
          </div>
        </div>
        <div class="todayhot-imgs">
          <div class="td-imgs" v-for="(item,index) in item4" :key="index">
            <div class="todayhot-img">
              <a href>
                <img :src="item.src" alt />
              </a>
            </div>
            <div class="todayhot-title">
              <a href>{{item.content1}}</a>
            </div>
            <div class="todayhot-content">
              <a href>{{item.content2}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="todayrecmd">
        <div class="todayrecmd-title">{{this.arr[0].content15}}</div>
        <div class="todayrecmd-img">
          <div class="todayrecmd-play">
            <div class="iconfont icon-bofang" style="font-size:40px"></div>
          </div>
          <a href>
            <img :src="this.arr[0].content16" alt />
          </a>
        </div>
        <div class="todayrecmd-content1">
          {{this.arr[0].content17}}
          <div class="todayrecmd-score">{{this.arr[0].content18}}</div>
        </div>
        <div class="todayrecmd-content2">{{this.arr[0].content19}}</div>
        <div class="todayrecmd-content3">
          <div class="todayrecmd-content3-1"></div>
          {{this.arr[0].content20}}
        </div>
        <div class="todayrecmd-content4">{{this.arr[0].content21}}</div>
      </div>
    </div>
    <div class="adv-theaterhot">
      <a href>
        <img :src="this.arr[0].content3" alt />
      </a>
    </div>
    <div class="ticketregin">
      <div class="ticketmenu">
        <div class="ticketmenu1">{{this.arr[0].content22}}</div>
        <div class="ticketmenu2">
          <a href>{{this.arr[0].content23}}</a>
          <div class="iconfont icon-sanjiaoxing" style="margin:10px 0 0 15px;color:#333"></div>
        </div>
        <div class="ticketmenu3">
          {{this.arr[0].content24}}
          <div class="ticketmenu3-1">{{this.arr[0].content25}}</div>
          {{this.arr[0].content26}}
        </div>
        <div class="ticketmenu4">
          {{this.arr[0].content27}}
          <div class="ticketmenu4-1">{{this.arr[0].content28}}</div>
          {{this.arr[0].content26}}
        </div>
        <div class="ticketmenu5">
          <a href>{{this.arr[0].content29}}</a>
        </div>
      </div>
      <div class="ticketlist">
        <div class="tk-list" v-for="(item,index) in item5" :key="index" @mouseover="showbox(index)" @mouseleave="unshowbox(index)">
          <div class="tk-introduce" v-show="index == i">
            <div class="tk-video">
              <video src="../../public/190927155106260531.mp4" autoplay="autoplay" width="220px" height="124px"></video>
            </div>
            <div class="tk-content">
              <div class="tk-title">{{item.content1}}</div>
            </div>
            <div class="tk-buy"></div>
          </div>
          <a href>
            <img :src="item.src" alt />
          </a>
          <div class="ticketlist1">
            <a href>{{item.content1}}</a>
          </div>
          <div class="ticketlist2">
            <a href>{{item.content2}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="internet">
      <div class="ticketmenu">
        <div class="ticketmenu1">{{this.arr[0].content30}}</div>
        <div class="ticketmenu2"></div>
        <div class="ticketmenu3">{{this.arr[0].content31}}</div>
        <div class="ticketmenu4">{{this.arr[0].content32}}</div>
        <div class="ticketmenu5">
          <a href>{{this.arr[0].content29}}</a>
        </div>
      </div>
      <div class="ticketlist">
        <div class="tk-list" v-for="(item,index) in item6" :key="index">
          <a href>
            <img :src="item.src" alt />
          </a>
          <div class="ticketlist1">
            <a href>{{item.content1}}</a>
          </div>
          <div class="ticketlist21">
            <a href>{{item.content2}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="adv-newrecmd">
      <a href>
        <img :src="this.arr[0].content4" alt />
      </a>
    </div>
    <div class="selectionregin">
      <div class="seltrailer">
        <div class="notice">
          <h4>新片预告</h4>
          <div class="notice-more">
            <a href>更多></a>
          </div>
        </div>
        <div class="se-fix">
          <div class="se-fixleft">
            <div class="left-play">
              <div class="iconfont icon-bofang" style="font-size:56px; color:#ffffff"></div>
            </div>
            <a href>
              <img :src="this.arr[0].content5" alt />
            </a>
            <div class="se-interduce">
              <a href>"82年生金智英"首支预告 孔侑改编女性小说</a>
            </div>
            <p>2019.10韩国 上映</p>
          </div>
          <div class="se-fixright">
            <div class v-for="(item,index) in item2" :key="index" style="position:relative">
              <a href>
                <img :src="item.src" alt />
              </a>
              <div class="right-intro">
                <div class="right-play">
                  <div class="iconfont icon-bofang" style="font-size:32px"></div>
                </div>
                <div class="right-font">
                  <div class="right-title">{{item.content1}}</div>
                  <div class="right-content">{{item.content2}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="movieguide">
        <div class="guide-title">最后期待新片</div>
        <div class="guide-img">
          <a href>
            <img :src="this.arr[0].content7" alt />
          </a>
        </div>
        <dl class="movie-guide">
          <dt>
            <span>影片名</span>
            <span>时光热度排名</span>
          </dt>
          <dd class="dd1" v-for="(item,index) in item3" :key="index">
            <div class="movie-name">
              <a href>{{item.content1}}</a>
            </div>
            <div class="movie-rank">
              {{item.content2}}
              <i>-</i>
            </div>
            <div class="movie-ctrl">
              <a href>预售</a>
            </div>
          </dd>
          <dt class="guide-more">
            <a href>更多></a>
          </dt>
        </dl>
      </div>
    </div>
    <div class="movielist">
      <div class="ml-title"></div>
      <div class="ml-content">
        <div class="ml-bigimg">
          <a href>
            <img :src="this.arr[0].content8" alt />
          </a>
          <div class="comment">
            <div class="comment1">12</div>
            <div class="comment2">部</div>
            <div class="comment3">日刊评90年代最佳海外片</div>
          </div>
        </div>
        <div class="ml-smallimg">
          <div v-for="(item,index) in item1" :key="index" class="smimg">
            <a href>
              <img :src="item.src" alt />
            </a>
            <div class="comment-small">
              <div class="comment-small1">{{item.content1}}</div>
              <div class="comment-small2">部</div>
              <div class="comment-small3">{{item.content2}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import topbar from "./topbar.vue";
import bottom from "./bottom.vue";
export default {
  name: "homeView",
  components: {
    topbar,
    bottom
  },
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      i:null,
      arr: [],
      item1: [
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" }
      ],
      item2: [
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" }
      ],
      item3: [
        { content1: "", content2: "" },
        { content1: "", content2: "" },
        { content1: "", content2: "" },
        { content1: "", content2: "" }
      ],
      item4: [
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" }
      ],
      item5: [
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" }
      ],
      item6: [
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" },
        { src: "", content1: "", content2: "" }
      ],
      sliders: [
        {
          img: "http://img5.mtime.cn/mg/2019/09/28/095023.57279055.jpg"
        },
        {
          img: "http://img5.mtime.cn/mg/2019/09/26/092859.45212624.jpg"
        },
        {
          img: "http://img5.mtime.cn/mg/2019/09/27/120505.31843638.jpg"
        },
        {
          img: "http://img5.mtime.cn/mg/2019/09/25/093548.26584879.jpg"
        },
        {
          img: "http://img5.mtime.cn/mg/2019/09/23/151357.16857926.jpg"
        }
      ],
      imgWidth: 1200,
      currentIndex: 1,
      distance: -1200,
      transitionEnd: true,
      speed: this.initialSpeed
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      };
    },
    interval() {
      return this.initialInterval * 1000;
    }
  },
  mounted() {
    window.console.log(this.$route.params.id);
    this.init();
    this.axios.get("http://localhost:8888/vuedata").then(res => {
      this.arr = res.data;
      console.log(this.arr);
      this.item1[0].src = this.arr[2].content1;
      this.item1[1].src = this.arr[2].content2;
      this.item1[2].src = this.arr[2].content3;
      this.item1[3].src = this.arr[2].content4;
      this.item1[0].content1 = this.arr[2].content5;
      this.item1[1].content1 = this.arr[2].content6;
      this.item1[2].content1 = this.arr[2].content7;
      this.item1[3].content1 = this.arr[2].content8;
      this.item1[0].content2 = this.arr[2].content9;
      this.item1[1].content2 = this.arr[2].content10;
      this.item1[2].content2 = this.arr[2].content11;
      this.item1[3].content2 = this.arr[2].content12;

      this.item2[0].src = this.arr[3].content1;
      this.item2[1].src = this.arr[3].content2;
      this.item2[2].src = this.arr[3].content3;
      this.item2[0].content1 = this.arr[3].content4;
      this.item2[1].content1 = this.arr[3].content5;
      this.item2[2].content1 = this.arr[3].content6;
      this.item2[0].content2 = this.arr[3].content7;
      this.item2[1].content2 = this.arr[3].content8;
      this.item2[2].content2 = this.arr[3].content9;

      this.item3[0].content1 = this.arr[4].content1;
      this.item3[1].content1 = this.arr[4].content2;
      this.item3[2].content1 = this.arr[4].content3;
      this.item3[3].content1 = this.arr[4].content4;
      this.item3[0].content2 = this.arr[4].content5;
      this.item3[1].content2 = this.arr[4].content6;
      this.item3[2].content2 = this.arr[4].content7;
      this.item3[3].content2 = this.arr[4].content8;

      this.item4[0].src = this.arr[5].content1;
      this.item4[1].src = this.arr[5].content2;
      this.item4[2].src = this.arr[5].content3;
      this.item4[3].src = this.arr[5].content4;
      this.item4[4].src = this.arr[5].content5;
      this.item4[5].src = this.arr[5].content6;
      this.item4[0].content1 = this.arr[5].content7;
      this.item4[1].content1 = this.arr[5].content8;
      this.item4[2].content1 = this.arr[5].content9;
      this.item4[3].content1 = this.arr[5].content10;
      this.item4[4].content1 = this.arr[5].content11;
      this.item4[5].content1 = this.arr[5].content12;
      this.item4[0].content2 = this.arr[5].content13;
      this.item4[1].content2 = this.arr[5].content14;
      this.item4[2].content2 = this.arr[5].content15;
      this.item4[3].content2 = this.arr[5].content16;
      this.item4[4].content2 = this.arr[5].content17;
      this.item4[5].content2 = this.arr[5].content18;

      this.item5[0].src = this.arr[6].content1;
      this.item5[1].src = this.arr[6].content2;
      this.item5[2].src = this.arr[6].content3;
      this.item5[3].src = this.arr[6].content4;
      this.item5[4].src = this.arr[6].content5;
      this.item5[5].src = this.arr[6].content6;
      this.item5[0].content1 = this.arr[6].content7;
      this.item5[1].content1 = this.arr[6].content8;
      this.item5[2].content1 = this.arr[6].content9;
      this.item5[3].content1 = this.arr[6].content10;
      this.item5[4].content1 = this.arr[6].content11;
      this.item5[5].content1 = this.arr[6].content12;
      this.item5[0].content2 = this.arr[6].content13;
      this.item5[1].content2 = this.arr[6].content14;
      this.item5[2].content2 = this.arr[6].content15;
      this.item5[3].content2 = this.arr[6].content16;
      this.item5[4].content2 = this.arr[6].content17;
      this.item5[5].content2 = this.arr[6].content18;
      console.log(this.item5);
      this.item6[0].src = this.arr[7].content1;
      this.item6[1].src = this.arr[7].content2;
      this.item6[2].src = this.arr[7].content3;
      this.item6[3].src = this.arr[7].content4;
      this.item6[4].src = this.arr[7].content5;
      this.item6[5].src = this.arr[7].content6;
      this.item6[0].content1 = this.arr[7].content7;
      this.item6[1].content1 = this.arr[7].content8;
      this.item6[2].content1 = this.arr[7].content9;
      this.item6[3].content1 = this.arr[7].content10;
      this.item6[4].content1 = this.arr[7].content11;
      this.item6[5].content1 = this.arr[7].content12;
      this.item6[0].content2 = this.arr[7].content13;
      this.item6[1].content2 = this.arr[7].content14;
      this.item6[2].content2 = this.arr[7].content15;
      this.item6[3].content2 = this.arr[7].content16;
      this.item6[4].content2 = this.arr[7].content17;
      this.item6[5].content2 = this.arr[7].content18;
    });
  },
  methods: {
    showbox(index) {
      this.i = index;
    },
    unshowbox(index) {
      this.i = null;
    },
    init() {
      this.play();
      window.onblur = function() {
        this.stop();
      }.bind(this);
      window.onfocus = function() {
        this.play();
      }.bind(this);
    },
    move(offset, direction, speed) {
      console.log(speed);
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / 1200)
        : (this.currentIndex -= offset / 1200);
      if (this.currentIndex > 5) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 5;

      const destination = this.distance + offset * direction;
      this.animate(destination, direction, speed);
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          if (des < -3000) this.distance = -1200;
          if (des > -600) this.distance = -6000;
        }
      }, 20);
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 1200;
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(1200, -1, this.speed);
      }, this.interval);
    },
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>
<style scoped>
.homeView {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.th-input {
  width: 502px;
  height: 40px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.tophead {
  width: 1200px;
  height: 90px;
  background: url(http://img5.mtime.cn/mg/2019/09/28/102349.98167819.jpg) center
    center no-repeat;
  z-index: 5;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
#slider {
  text-align: center;
}
.window {
  position: relative;
  width: 1200px;
  height: 360px;
  margin: 0 auto;
  overflow: hidden;
}
.container {
  display: flex;
  position: absolute;
}
.left,
.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 102px;
  background-color: rgba(0, 0, 0, 0.3);

  cursor: pointer;
}
.left svg {
  position: relative;
  top: 15px;
}
.right svg {
  position: relative;
  top: 15px;
}
.left {
  padding-left: 12px;
  padding-top: 10px;
}
.right {
  right: 0%;
  padding-right: 12px;
  padding-top: 10px;
}
img {
  user-select: none;
}
.dots {
  position: relative;
  top: 10px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.dots li {
  display: inline-block;
  width: 9px;
  height: 9px;
  margin: 0 3px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: #333;
  cursor: pointer;
}
.dots .dotted {
  background-color: #267fd4;
}
.adv-todayhot {
  width: 1200px;
  height: 90px;
  margin-top: 50px;
}
.todayhot {
  width: 1200px;
  height: 490px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.hotnews {
  width: 895px;
  height: 490px;
  display: flex;
  flex-direction: column;
}
.todayrecmd {
  width: 290px;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px 1px #ddd;
}
.adv-theaterhot {
  margin-top: 70px;
  border-top: 1px solid #d9d9d9;
  width: 1200px;
  height: 117px;
  display: flex;
  align-items: center;
}
.adv-theaterhot a img {
  width: 1200px;
  height: 90px;
}
.internet {
  margin-top: 50px;
  width: 1200px;
  height: 472.8px;
}
.adv-newrecmd {
  border-top: 1px solid #d9d9d9;
  width: 1200px;
  height: 117px;
  display: flex;
  align-items: center;
}
.adv-newrecmd a img {
  width: 1200px;
  height: 90px;
}
.selectionregin {
  width: 100%;
  height: 560.6px;
  background-color: #282828;
  display: flex;
  align-items: center;
  justify-content: center;
}
.seltrailer {
  width: 860px;
  height: 484.6px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.notice {
  width: 860px;
  height: 24px;
  display: flex;
  justify-content: space-between;
}
.notice h4 {
  color: #fff;
  font-size: 24px;
}
.notice-more a {
  text-decoration: none;
  color: #fff;
}
.se-fix {
  margin-top: 20px;
  width: 860px;
  height: 444.6px;
  display: flex;
  justify-content: space-between;
}
.se-fixleft {
  width: 618px;
  height: 484.6;
  display: flex;
  flex-direction: column;
}
.se-fixleft a img {
  width: 618px;
  height: 376px;
}
.se-interduce {
  margin-top: 10px;
  width: 618px;
  height: 28.8px;
}
.se-interduce a {
  text-decoration: none;
  font-size: 24px;
  color: #fff;
}
.se-fixleft p {
  margin-top: 10px;
  width: 618px;
  height: 20.8px;
  font-size: 14px;
  color: #fff;
}
.se-fixright {
  width: 230px;
  height: 400.6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.se-fixright a img {
  width: 230px;
  height: 140px;
}
.movieguide {
  margin-left: 20px;
  width: 320px;
  height: 479px;
  display: flex;
  flex-direction: column;
}
.guide-title {
  width: 320px;
  height: 24px;
  color: #fff;
  font-size: 24px;
  line-height: 1;
  font-weight: 400;
  text-align: center;
  margin-bottom: 16px;
}
.guide-img {
  width: 320px;
  height: 175px;
}
.guide-img a img {
  width: 320px;
  height: 175px;
}
.movie-guide {
  background: #fff;
  position: relative;
}
.movie-guide dt {
  clear: both;
  overflow: hidden;
  position: relative;
  padding: 0 18px;
}
.movie-guide dt span {
  width: 122px;
  font-weight: 700;
  float: left;
  line-height: 45px;
  color: #333;
  font-size: 14px;
}
.dd1 {
  display: flex;
  background-color: #f5f5f5;
  align-items: center;
}
.movie-name {
  margin-left: 5px;
  width: 110px;
  height: 45px;
  line-height: 45px;
  display: flex;
  justify-content: center;
}
.movie-name a {
  font-size: 14px;
  text-decoration: none;
  color: #333;
}
.movie-rank {
  margin-left: 5px;
  font-size: 14px;
  width: 92px;
  height: 45px;
  line-height: 45px;
  color: #61ac36;
  display: flex;
  justify-content: center;
}
.movie-rank i {
  margin-left: 5px;
}
.movie-ctrl {
  width: 72px;
  height: 23.6px;
  line-height: 45px;
  border-radius: 20px;
  background-color: #61ac36;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.movie-ctrl a {
  text-decoration: none;
  color: #fff;
  font-size: 12px;
}
.guide-more {
  display: flex;
  justify-content: flex-end;
}
.guide-more a {
  text-decoration: none;
  color: #000;
  font-size: 14px;
}
.movielist {
  width: 1200px;
  height: 456ox;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ml-title {
  width: 1200px;
  height: 40px;
}
.ml-content {
  width: 1200px;
  height: 360px;
  display: flex;
  justify-content: space-between;
}
.ml-bigimg {
  width: 590px;
  height: 340px;
}
.ml-bigimg a img {
  width: 590px;
  height: 340px;
}
.comment {
  width: 590px;
  height: 97.6px;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
  top: -100px;
}
.comment-small {
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
  top: -60px;
}
.smimg {
  width: 280px;
  height: 160px;
}
.comment1 {
  margin-left: 20px;
  width: 78px;
  height: 78px;
  font-size: 70px;
}
.comment2 {
  margin-left: 10px;
  width: 25px;
  height: 25px;
  font-size: 24px;
  margin-bottom: -40px;
}
.comment3 {
  margin-left: 20px;
  font-size: 24px;
  margin-bottom: -40px;
}
.comment-small1 {
  margin-left: 20px;
  width: 50px;
  height: 50px;
  font-size: 43px;
}
.comment-small2 {
  margin-left: 30px;
  width: 25px;
  height: 25px;
  font-size: 14px;
  margin-bottom: -26px;
}
.comment-small3 {
  margin-left: 10px;
  font-size: 14px;
  margin-bottom: -20px;
}
.ml-smallimg {
  width: 590px;
  height: 340px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.ml-smallimg a img {
  width: 280px;
  height: 160px;
}
.down {
  background: url(http://static1.mtime.cn/nodewww/2019051313312/images/head.png) -152px
    0 no-repeat;
  width: 11px;
  height: 7px;
  margin-left: 10px;
}
.all {
  margin-left: 20px;
  width: 80px;
  height: 45px;
  display: flex;
  align-items: center;
}
.all a {
  text-decoration: none;
  color: #999999;
}
.s-line {
  width: 20px;
  text-align: center;
  color: #999999;
  font-size: 12px;
  font-weight: 100;
}
.th-input2 {
  width: 340px;
  height: 32px;
  margin-top: -5px;
}
input {
  outline: none;
}
input.text {
  background: 0 0;
  width: 80%;
  line-height: 24px;
  padding: 7px 0;
  border: none;
  font-size: 13px;
}
.th-input3 {
  width: 54px;
  height: 32px;
  text-align: center;
}
.th-input3 a {
  line-height: 32px;
  text-decoration: none;
  font-size: 20px;
}
.th-inputlist {
  position: absolute;
  top: 75px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 207.6px;
  overflow: hidden;
  display: none;
  z-index: 100;
}
.th-input1:hover .th-inputlist {
  display: block;
}
.inputlist {
  width: 95px;
  height: 34.6px;
  display: flex;
  text-align: center;
  line-height: 34.6px;
}
.i-list {
  width: 95px;
  height: 34.6px;
}
.inputlist:hover {
  background-color: #e5f2fc;
}
.right-intro {
  width: 230px;
  position: absolute;
  height: 32px;
  display: flex;
  top: 100px;
  left: 10px;
}
.right-play {
  width: 50px;
  height: 50px;
  color: #ffffff;
}
.right-font {
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 32px;
}
.right-title {
  width: 180px;
  height: 16.8px;
  font-size: 14px;
  color: #ffffff;
}
.right-content {
  margin-top: 5px;
  width: 180px;
  height: 16.8px;
  font-size: 12px;
  color: #c8c8c8;
}
.left-play {
  position: absolute;
  left: 20px;
  top: 340px;
}
.customtitle {
  width: 915px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 40px;
}
.today-hot {
  width: 106px;
  height: 40px;
  font-size: 24px;
  color: #6e6e6e;
}
.hot-list {
  color: #333333;
  font-size: 16px;
  width: 384px;
  height: 20.8px;
  display: flex;
}
.h-list1 {
  width: 97px;
  height: 17.6px;
  border-right: 1px solid #ccc;
  text-align: center;
}
.h-list2 {
  width: 97px;
  height: 17.6px;
  text-align: center;
}
.hot-more {
  width: 97px;
  height: 17.6px;
  text-align: center;
  position: absolute;
  right: 460px;
}
.hot-more:hover a {
  color: #1e7dd7;
}
.customtitle a {
  text-decoration: none;
  color: #333333;
}
.todayhot-imgs {
  width: 915px;
  height: 470px;
  display: flex;
  flex-wrap: wrap;
}
.td-imgs {
  width: 285px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.todayhot-img {
  width: 285px;
  height: 160px;
}
.todayhot-title {
  width: 285px;
  height: 20.8px;
}
.todayhot-title:hover a {
  color: #1e7dd7;
}
.todayhot-title a {
  color: #333;
  font-size: 16px;
  text-decoration: none;
}
.todayhot-content {
  width: 285px;
  height: 20.8px;
}
.todayhot-content a {
  color: #888888;
  font-size: 14px;
  text-decoration: none;
}
.todayrecmd-title {
  margin-top: 45px;
  width: 290px;
  height: 40px;
  font-size: 24px;
  color: #6e6e6e;
  text-align: center;
}
.todayrecmd-img {
  width: 290px;
  height: 240px;
  position: relative;
}
.todayrecmd-img a img {
  width: 290px;
  height: 240px;
}
.todayrecmd-content1 {
  margin-top: 20px;
  width: 260px;
  height: 22px;
  display: flex;
}
.todayrecmd-score {
  margin-left: 10px;
  width: 30px;
  height: 17px;
  background-color: #76aa3c;
  color: #fff;
  font-size: 14px;
}
.todayrecmd-content2 {
  width: 96px;
  height: 20px;
  color: #333333;
  font-size: 12px;
  position: relative;
  left: -82px;
  margin: 15px 30px;
}
.todayrecmd-content3 {
  width: 260px;
  height: 31px;
  color: #333333;
  font-size: 14px;
  display: flex;
}
.todayrecmd-content4 {
  color: #888888;
  font-size: 14px;
  position: relative;
  right: -80px;
}
.todayrecmd-content3-1 {
  background: url(http://static1.mtime.cn/nodewww/2019051313312/images/index24.png) -116px
    0 no-repeat;
  width: 28px;
  height: 20px;
  vertical-align: bottom;
  margin-right: 5px;
}
.todayrecmd-play {
  position: absolute;
  color: #fff;
  top: 190px;
  left: 10px;
}
.ticketmenu {
  margin-bottom: 20px;
  width: 1200px;
  height: 32px;
  display: flex;
  justify-content: space-between;
}
.ticketmenu1 {
  width: 150px;
  height: 32px;
  font-size: 24px;
  color: #6e6e6e;
}
.ticketmenu2 {
  margin-left: 10px;
  width: 80px;
  height: 24px;
  display: flex;
}
.ticketmenu2 a {
  text-decoration: none;
  font-size: 24px;
  color: #6e6e6e;
}
.ticketmenu3 {
  margin-left: 190px;
  width: 114px;
  height: 32px;
  display: flex;
  font-size: 16px;
  color: #fc6921;
  align-items: flex-end;
}
.ticketmenu3-1 {
  font-size: 26px;
  color: #fc6921;
}
.ticketmenu4 {
  margin-left: 20px;
  width: 114px;
  height: 32px;
  display: flex;
  font-size: 16px;
  align-items: flex-end;
}
.ticketmenu4-1 {
  font-size: 26px;
}
.ticketmenu5 {
  margin-left: 370px;
  width: 40px;
  height: 32px;
  display: flex;
  align-items: flex-end;
}
.ticketmenu5 a {
  text-decoration: none;
  font-size: 14px;
  color: #000000;
}
.ticketlist {
  position: relative;
  width: 1200px;
  height: 330px;
  display: flex;
  justify-content: space-between;
}
.ticketlist img {
  width: 170px;
  height: 256px;
}
.ticketlist1 {
  width: 170px;
  height: 31px;
  text-align: center;
}
.ticketlist1 a {
  font-size: 18px;
  color: #333333;
  text-decoration: none;
}
.ticketlist2 {
  position: relative;
  left: 30px;
  width: 120px;
  height: 28px;
  background-color: #1e7dd7;
  text-align: center;
  border-radius: 20px;
  line-height: 28px;
}
.ticketlist21 {
  position: relative;
  left: 30px;
  width: 120px;
  height: 28px;
  background-color: #74ab34;
  text-align: center;
  border-radius: 20px;
  line-height: 28px;
}
.ticketlist21 a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}
.ticketlist2 a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}
.ticketregin {
  margin-top: 20px;
}
.tk-introduce{
  position: absolute;
  top: -45px;
  left: -30px;
  width: 220px;
  height: 332px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  visibility: visible;
  box-shadow: 0 2px 8px 1px #ddd;
}
.tk-video{
  width: 220px;
  height: 124px;
}
.tk-list{
  position: relative;
}
</style>