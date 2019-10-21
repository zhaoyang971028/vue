  <template>
  <div>
    <topbar></topbar>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in dataimg" :key="item.value">
        <div class="carousel-explain">
          <img :src="item.src" />
          <i class="vedio"></i>
          <div class="text clearfix">
            <div class="word">
              <h2>{{item.h}}</h2>
              <div class="px">
                <p>{{item.p1}}</p>
                <p>
                  {{item.dao}}
                  <a
                    href="http://people.mtime.com/904583/"
                    target="_blank"
                  >{{item.daon}}</a>
                </p>
                <p>
                  {{item.zhu}}
                  <a
                    href="http://people.mtime.com/1176638/"
                    target="_blank"
                  >{{item.zhun}}</a>&nbsp;
                  <a href="http://people.mtime.com/2107247/" target="_blank">{{item.zhun1}}</a>
                </p>
              </div>
              <div class="textinfo">{{item.text}}</div>

              <div class="mt">
                <span class="icon-add">
                  <!-- <em>+</em> -->
                  +
                </span>
                <p>{{item.mt}}</p>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="body">
      <div class="one">
        <div class="dis_navtab">
          <a href="#" class="nav1">全球新片</a>
          <em>|</em>
          <a href="#" class="nav2">典藏佳片</a>
        </div>

        <div class="dis_search">
          <!-- <a href="#">电影查询</a>   -->
          <!-- <div class="img"> -->
          <img
            src="../../src/assets/up.png"
            v-show="showUpImg"
            v-popover:VideoPopover
            @click="changeImg"
          />
          <img
            src="../../src/assets/down.png"
            v-show="!showUpImg"
            v-popover:VideoPopover
            @click="changeImg"
          />
          <div>
            <el-popover placement="right" width="400" ref="Popover" trigger="click">
              <el-table :data="gridData">
                <!-- <el-table-column width="150" property="date" label="日期"></el-table-column>
                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                <el-table-column width="300" property="address" label="地址"></el-table-column>-->
              </el-table>
              <el-button slot="reference" class="movie">电影查询</el-button>
            </el-popover>
          </div>
        </div>
      </div>

      <div class="content1">
        <div class="left">
          <!-- <div class="pic1"> -->
          <img
            class="pic_img"
            src="http://img5.mtime.cn/mg/2019/05/28/173842.83292501.jpg"
            alt="我们/Us(2019)"
          />
          <!-- </div> -->
          <div class="dt_text">
            <!-- <div class="p"></div> -->
            <div class="pic2">
              <img
                class="pic2_img"
                src="http://img5.mtime.cn/mt/2019/02/13/143753.52867571_100X150X4.jpg"
                alt="我们/Us(2019)"
              />
            </div>
            <div class="ff clearfix">
              <h3 class="fl">
                <a href="http://movie.mtime.com/257512/" target="_blank">我们(2019)</a>
              </h3>

              <span objid="257512" objtype="1" class="db_point fl ml10 _rating">7.1</span>
            </div>

            <p class="f11">
              <i></i>当你发现自己追杀自己
            </p>
          </div>
        </div>
        <div class="main">
          <div class="right" v-for="(movies,index) in movie" :key="index" @:click="fun">
            <div class="m1">
              <img class="m2" :src="movies.src" />
            </div>
            <div class="m3" @mouseenter="onMouseOver" @mouseleave="onMouseOut">
              <p class="m4">{{ movies.name}}</p>
              <p class="m5">{{ movies.score }}</p>

              <div class="m6" v-show="seen">
                <p class="mm">{{movies.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="one">
        <div class="dis_navtab">
          <a href="#" class="nav1">热播剧集</a>
        </div>

        <div class="dis_search">
          <!-- <a href="#">电影查询</a>   -->
          <!-- <div class="img"> -->
          <img src="../assets/up.png" v-show="showUpImg" v-popover:VideoPopover @click="changeImg" />
          <img src="../assets/up.png" v-show="!showUpImg" v-popover:VideoPopover @click="changeImg" />
          <div>
            <el-popover placement="right" width="400" ref="Popover" trigger="click">
              <el-table :data="gridData">
                <!-- <el-table-column width="150" property="date" label="日期"></el-table-column>
                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                <el-table-column width="300" property="address" label="地址"></el-table-column>-->
              </el-table>
              <el-button slot="reference" class="movie">电视查询</el-button>
            </el-popover>
          </div>
        </div>
      </div>
      <div class="main1">
        <div class="content2" v-for="(watches,index) in watch" :key="index" @:click="fun">
          <img class="w2" :src="watches.src" />
          <h3>
            <a href="http://movie.mtime.com/265842/" target="_blank">{{ watches.name}}</a>
          </h3>
          <div class="wb">{{ watches.score }}</div>
        </div>
      </div>

      <div class="one">
        <div class="dis_navtab">
          <a href="#" class="nav1">今日寿星</a>
        </div>

        <div class="dis_search">
          <!-- <a href="#">电影查询</a>   -->
          <!-- <div class="img"> -->
          <img
            src="../../src/assets/up.png"
            v-show="showUpImg"
            v-popover:VideoPopover
            @click="changeImg"
          />
          <img
            src="../../src/assets/down.png"
            v-show="!showUpImg"
            v-popover:VideoPopover
            @click="changeImg"
          />
          <div>
            <el-popover placement="right" width="400" ref="Popover" trigger="click">
              <el-table :data="gridData">
                <!-- <el-table-column width="150" property="date" label="日期"></el-table-column>
                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                <el-table-column width="300" property="address" label="地址"></el-table-column>-->
              </el-table>
              <el-button slot="reference" class="movie">人物查询</el-button>
            </el-popover>
          </div>
        </div>
      </div>

      <div class="content3">
        <div class="left1">
          <div>
            <img
              style="width:242px;height:362px"
              src="http://img31.mtime.cn/ph/2014/02/22/202708.86009042_242X362X4.jpg"
              alt="葛丽泰·嘉宝"
              title="葛丽泰·嘉宝"
              class="img"
            />
          </div>
          <div class="intro clearfix">
            <div class="intro1 clearfix">
              <h3 class="fi clearfix">
                <a href="#" target="_blank" title="葛丽泰·嘉宝">葛丽泰·嘉宝</a>
              </h3>
              <div class="db_perpoint">
                <i></i>
                <span class="fi1">94%</span>
              </div>
            </div>
            <div class="ip">
              <p>1905年9月18日出生于瑞典</p>
              <p>演员</p>
              <p>她神秘而独特的表演不仅受到了影迷的疯狂追捧，也影响了很多电影演员，包括她的后辈英格丽·褒曼等。</p>
            </div>

            <div class="mainTop">
              <h4>主要作品</h4>
              <p>2012</p>
              <p>2010</p>
              <p>1998</p>
              <div class="line">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div class="mainBottom">
              <div class="ma" v-for="(bottoms,index) in bottom" :key="index" @:click="fun">
                <div>
                  <img class="mma" :src="bottoms.src" alt />
                </div>
                <div class="btn-s">{{bottoms.score}}</div>
                <div class="btn-t">{{bottoms.text}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="right1">
          <p>更多今日寿星</p>
          <div class="more">
            <div class="more1" v-for="(mores,index) in more" :key="index" @:click="fun">
              <img style="width:100px;height:100px" :src="mores.src" alt />
            </div>
          </div>
        </div>
      </div>

      <div class="one">
        <div class="dis_navtab">
          <a href="#" class="nav1">热门电影</a>
          <em>|</em>
          <a href="#" class="nav2">热门电视</a>
          <em>|</em>
          <a href="#" class="nav2">热门人物</a>
        </div>
      </div>

      <div class="main1">
        <div class="content2" v-for="(hots,index) in hot" :key="index" @:click="fun">
          <img class="w2" :src="hots.src" />
          <em class="num_on">{{hots.index }}</em>
          <h3>
            <a href="http://movie.mtime.com/265842/" target="_blank">{{ hots.name}}</a>
          </h3>
          <div class="wb">{{ hots.score }}</div>
        </div>
      </div>
      <bottom></bottom>
    </div>
  </div>
</template>
<script >
import topbar from "./topbar.vue";
import bottom from "./bottom.vue";
export default {
  name: "HelloWorld",
  components: {
    topbar,
    bottom
  },
  methods: {
    changeImg: function() {
      this.showUpImg = !this.showUpImg;
    },
    fun: function(ser) {
      console.log(ser);
    },
    onMouseOver: function() {
      this.seen = true;
    },
    onMouseOut: function() {
      this.seen = false;
    }
  },
  data() {
    return {
      seen: false,
      showUpImg: true,
      more: [
        {
          src:
            "http://img5.mtime.cn/ph/2019/07/08/105022.66568949_100X100X4.jpg"
        },
        {
          src:
            "http://img31.mtime.cn/ph/2014/03/16/154835.20203349_100X100X4.jpg"
        },
        {
          src:
            "http://img31.mtime.cn/mg/2015/03/04/095049.68977345_100X100X4.jpg"
        },
        {
          src:
            "http://img31.mtime.cn/mg/2016/09/02/175158.65089234_100X100X4.jpg"
        }
      ],
      bottom: [
        {
          src:
            "http://img31.mtime.cn/mt/2013/12/25/120045.63251194_70X93X4.jpg",
          score: "11",
          text: "爱情最终剪：女士们先生们"
        },
        {
          src:
            "http://img31.mtime.cn/mt/2012/06/30/193917.44236188_70X93X4.jpg",
          score: "56",
          text: "维托"
        },
        {
          src:
            "http://img31.mtime.cn/mt/2014/02/22/230204.38226096_70X93X4.jpg",
          score: "34",
          text: " 天堂电影院"
        }
      ],
      hot: [
        {
          index: "1",
          src:
            "http://img5.mtime.cn/mt/2019/09/26/092513.45212756_175X262X4.jpg",
          name: "我和我的祖国(2019)",
          score: "12"
        },
        {
          index: "2",
          src:
            "http://img5.mtime.cn/mt/2019/09/26/114536.37789206_175X262X4.jpg",
          name: "攀登者(2019)",
          score: "7"
        },
        {
          index: "3",
          src:
            "http://img5.mtime.cn/mt/2019/09/18/095839.16473700_175X262X4.jpg",
          name: "中国机长n(2019)",
          score: "5"
        },
        {
          index: "4",
          src:
            "http://img5.mtime.cn/mt/2019/09/18/101615.44107208_175X262X4.jpg",
          name: "决胜时刻(2019)",
          score: "9"
        },
        {
          index: "5",
          src:
            "http://img5.mtime.cn/mt/2019/07/31/110048.94153693_175X262X4.jpg",
          name: "哪吒之魔童降世",
          score: "4"
        }
      ],
      watch: [
        {
          src:
            "http://img5.mtime.cn/mt/2019/09/20/105019.31128170_175X262X4.jpg",
          name: "外交风云(2019)",
          score: "8.8"
        },
        {
          src:
            "http://img5.mtime.cn/mt/2019/07/25/173412.98620855_175X262X4.jpg",
          name: "致命女人(2019)",
          score: "7.8"
        },
        {
          src:
            "http://img5.mtime.cn/mt/2019/09/10/143409.74225474_175X262X4.jpg",
          name: "老酒馆(2019)",
          score: "8.9"
        },
        {
          src:
            "http://img5.mtime.cn/mt/2019/08/01/113740.29866403_175X262X4.jpg",
          name: "浪漫的体质(2019)",
          score: "9.1"
        },
        {
          src:
            "http://img5.mtime.cn/mt/2019/08/12/171056.10564648_175X262X4.jpg",
          name: "小欢喜(2019)",
          score: "7.7"
        }
      ],
      movie: [
        {
          src: "http://img5.mtime.cn/mg/2018/12/25/141459.52011192.jpg",
          name: "罗马（2018）",
          score: "8.0",
          text: "大时代背景下的家庭史"
        },
        {
          src: "http://img5.mtime.cn/mg/2018/12/04/150123.59460547.jpg",
          name: "巴斯特的歌谣（2018）",
          score: "7.8",
          text: "短小精悍的西部蛮荒史"
        },
        {
          src: "http://img5.mtime.cn/mg/2018/10/17/152225.66637716.jpg",
          name: "喜欢，轻吻，快跑（2018）",
          score: "7.7",
          text: "“ 在错的时间遇见对的人"
        },
        {
          src: "http://img5.mtime.cn/mg/2018/10/17/153023.74783719.jpg",
          name: "解除好友2：暗网(2018)",
          score: "7.5",
          text: "互联网，深如海"
        }
      ],

      dataimg: [
        {
          src: "http://img5.mtime.cn/mg/2019/07/10/105738.99761363.jpg",
          h: "刘亦菲领衔迪士尼《花木兰》预告",
          p1: "上映日期：2020年3月27日(美国)",
          dao: "导演：",
          daon: "妮基·卡罗",
          zhu: "主演：",
          zhun: "刘亦菲",
          zhun1: "安佑森",
          text:
            "改编自迪士尼1998年上映同名经典动画，刘亦菲饰演的花木兰替父从军走向战场，骑马射箭飞檐走壁。",
          mt: "查看详情"
        },
        {
          src: "http://img5.mtime.cn/mg/2019/02/15/101603.62458746.jpg",
          h: "《冰雪奇缘2》先行版预告",
          p1: "上映日期：2019年11月22日(美国)",
          dao: "导演：",
          daon: "珍妮弗·李",
          zhu: "主演：",
          zhun: "伊迪娜·门泽尔",
          zhun1: "克里斯汀·贝尔",
          text:
            "莎公主发大招冻住大海，安娜公主、克里斯托弗、雪宝、驯鹿等主角齐亮相。故事将继续聚焦艾莎和安娜姐妹，两位主角也将远走阿伦戴尔王国。",
          mt: "查看详情"
        },
        {
          src: "http://img5.mtime.cn/mg/2019/02/03/104816.41586321.jpg",
          h: "《速度与激情外传》中文预告",
          p1: "上映日期：2019年8月23日(中国)",
          dao: "导演：",
          daon: "大卫.雷奇",
          zhu: "主演：",
          zhun: "道格.强森",
          zhun1: "杰森.斯坦森",
          text:
            "当伊德瑞斯·艾尔巴饰演的刀枪不入、力大无穷的人造人企图毁灭世界之时，道恩·强森饰演的霍布斯和杰森·斯坦森饰演的肖大展身手的时候到了！",
          mt: "查看详情"
        },
        {
          src: "http://img5.mtime.cn/mg/2019/01/16/095722.34245236.jpg",
          h: "《蜘蛛侠：英雄远征》中文预告",
          p1: "上映日期：2019年6月28日(中国)",
          dao: "导演：",
          daon: "乔.沃兹",
          zhu: "主演：",
          zhun: "汤姆·赫兰德",
          zhun1: "杰克.吉伦哈尔",
          text:
            "大反派“元素众”分别在预告中现身，当然最最最最最最惊喜的，当属杰克·吉伦哈尔饰演的神秘客！",
          mt: "查看详情"
        }
      ]
    };
  }
};
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.0.11/lib/theme-chalk/index.css");
* {
  margin: 0;
  padding: 0;
}
body {
  font: 12px/150% helvetica, "微软雅黑", "microsoft yahei", verdana, lucida,
    arial, sans-serif, "黑体";
}
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}

img {
  width: 100%;
  height: 500px;
}
.el-carousel {
  width: 100%;
  height: 500px;
}
.el-carousel__item {
  margin: 0 auto;
  height: 500px;
}
.text {
  position: absolute;
  left: 187px;
  top: 117px;
  width: 1000px;
  height: 360px;
  display: block;
  box-shadow: 0px 0px 8px 2px rgba(40, 47, 55, 0.5);
}
.word {
  width: 540px;
  position: absolute;
  left: 40px;
  top: 100px;
  color: #fff;
  text-shadow: 0 0 1px #000;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
h2 {
  display: block;
  font-size: 36px;
  font-weight: bold;
}
.word .px {
  margin-top: 23px;
  line-height: 1.7em;
  float: left;
  font-size: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 20px;
}
p {
  /* display: block; */
  color: #fff;
  text-shadow: 0 0 1px #000;
  font-size: 14px;
}
a {
  color: #fff;
  text-decoration: none;
}
.textinfo {
  width: 540px;
  height: 50px;
  /* border: 1px solid blue; */
  font-size: 16px;
  margin-top: 22px;
  line-height: 1.8em;
  text-align: left;
  margin-left: 14px;
}
.mt {
  display: flex;
  margin-top: 32px;
  margin-left: 27px;
}
.mt p {
  margin-left: 5px;
  margin-top: -7px;
}
.icon-add {
  float: left;
  width: 16px;
  height: 16px;
  border: 3px solid white;
  border-radius: 100%;
  color: #fff;
  line-height: 15px;
  margin-top: -9px;
  outline-offset: -35px;
  cursor: pointer;
  font-weight: 700;
}

.el-carousel__indicators {
  position: absolute;
  list-style: none;
  bottom: 31px;
  left: 81%;
  /* -webkit-transform: translateX(-50%); */
  transform: translateX(-50%);
  margin: 0;
  padding: 0;
  z-index: 2;
}
.el-carousel__button {
  width: 14px;
  height: 14px;
  border: 1px solid #333;
  border-radius: 12px;
  background: #fff;
  display: inline-block;
  opacity: 0.5;
  outline: 0;
  padding: 0;
  margin-right: 15px;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.body {
  width: 1000px;
  height: 1820px;
  /* background-color: #F1F1F1; */
  margin: 0 auto;
  position: absolute;
  z-index: 1000;
  margin-top: -30px;
  margin-left: 187px;
}
.one {
  width: 964px;
  height: 60.5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #f1f1f1;
  text-align: center;
  margin: 0 auto;
  margin-top: 9px;
}
.dis_navtab {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;
}
.nav1 {
  display: inline-block;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 20px;
}
.nav2 {
  display: inline-block;
  color: #656565;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 20px;
}
.dis_navtab em {
  margin: 0 21px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #656565;
}

.dis_search {
  width: 102px;
  height: 34px;
  margin-left: 644px;
  margin-top: 12px;
  /* background-color: green; */
}
.dis_search img {
  width: 20px;
  height: 20px;
  position: absolute;

  z-index: 2000;
  margin-left: -39px;
  margin-top: 11px;
}
.el-popover {
  padding: 0px;
  width: 80px;
  height: 34px;
  /* background-color: rebeccapurple; */
  border: 0px solid transparent;
  line-height: 34px;
}
.el-button {
  width: 80px;
  height: 34px;
  padding: 0 px;
  background-color: transparent;
  border: 0px solid transparent;
}
.el-button:focus,
.el-button:hover {
  width: 80px;
  height: 34px;

  border: 0px solid transparent;
  /* background-color: #1a74db; */
}
span:focus,
span:hover {
  /* color: rgb(211, 193, 29) !important; */
  background-color: #fff;
  color: #333;
}
.movie {
  background: transparent;
  display: inline-block;
  color: #333;
  margin: 10px 0;
}
span {
  position: absolute;
  width: 58px;
  height: 0px;
  background: transparent;
  display: inline-block;
  padding: 0px;
  color: #333;
  margin: -8px -38px;
}
.content1 {
  width: 977px;
  height: 356px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background-color: #f1f1f1;
}

.left {
  width: 477px;
  height: 342px;
}
/* .pic {
  width: 470px;
  height: 265px;
} */
.pic2 {
  width: 100px;
  height: 150px;
  position: absolute;
  left: 0;
  left: 27px;
  box-shadow: 0px 5px 8px 2px #4c4c4c;
  margin-top: -99px;
  border: 3px solid #fff;
}
.pic_img {
  width: 470px;
  height: 265px;
}
.pic2_img {
  width: 100px;
  height: 150px;
}
.dt_text {
  position: relative;
  padding-left: 135px;
  padding-top: 10px;
}
/* .clearfix {
  display: block;

} */
.ff {
  display: flex;
  flex-direction: row;
}
.fl {
  color: #333;
  margin-top: 3px;
  margin-left: 14px;
}
h3 a {
  font-size: 18px;
  line-height: 1em;
  color: #333;
  font-weight: normal;
}
.db_point {
  background: #679c21;
  display: inline-block;
  width: 36px;
  height: 24px;
  position: relative;
  zoom: 1;
  margin-top: -2px;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  color: #fff;
  overflow: hidden;
}
.f11 {
  font-size: 16px;
  color: #ff960f;
  line-height: 1em;
  margin-top: -6px;
  margin-left: -128px;
}
.f11 i {
  background: url(//static1.mtime.cn/library/20190416135220/images/dis_icon24.png)
    no-repeat -135px 0;
  width: 18px;
  height: 18px;
  display: inline-block;
  /* *display: inline; */
  position: relative;
  zoom: 1;
  overflow: hidden;
  vertical-align: baseline;
  margin-right: 5px;
}
h3 {
  display: block;
  /* font-size: 1.17em; */
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.main {
  width: 600px;
  height: 356px;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.right {
  width: 230px;
  height: 163px;
  background-color: #fff;
}
.m2 {
  width: 223px;
  height: 125px;
}
.m3 {
  width: 223px;
  height: 34px;
  position: relative;
  /* overflow: hidden; */
  transition: all 0.5s;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
.m4 {
  font-size: 14px;
  color: #333;
  font-weight: normal;
}
.m5 {
  width: 30px;
  height: 22px;
  background: #679c21;
  position: relative;
  zoom: 1;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  color: #fff;
  overflow: hidden;
}
.m6 {
  position: absolute;
  width: 223px;
  height: 60px;

  left: 4px;
  bottom: 1px;
  transition: all 0.5s;
}

.m6 p {
  color: #ff960f;
  margin-top: 6px;
  background-color: #fff;
  font-weight: 400;
  font-style: normal;
}
.mm {
  font-weight: 100;
}
/* 
.m3:hover .m6 {
  bottom: 1px;
} */
.main1 {
  width: 977px;
  height: 360px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
}
.content2 {
  width: 182px;
  height: 360px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.w2 {
  width: 175px;
  height: 262px;
  margin: 0 auto;
}
.content2 h3 {
  text-align: left;
  margin-left: 10px;
}
.wb {
  background: #679c21;
  width: 36px;
  height: 24px;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  color: #fff;
  overflow: hidden;
  margin-left: 10px;
  text-align: center;
}
.content3 {
  display: flex;
  width: 964px;
  height: 369px;
  /* background-color: rgb(214, 195, 22); */
  margin: 0 auto;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
}
.left1 {
  width: 700px;
  height: 368px;
  /* background-color: #1a74db; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.intro1 {
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  /* align-items: baseline; */
  margin-top: 180px;
}
.fi {
  margin-right: 272px;
  margin-top: -153px;
  float: left;
}
.fi a {
  font-size: 24px;
  color: #333;
  line-height: 1em;
}
.db_perpoint {
  font-size: 14px;
  color: #d11438;
  /* margin-left: 15px; */
  display: flex;
  flex-direction: row;
  margin-top: -153px;
}
.fi1 {
  margin-left: -62px;
}
.db_perpoint i {
  background: url(//static1.mtime.cn/20190320160733/images/2014/allicon24.png)
    no-repeat -155px -33px;
  width: 17px;
  height: 15px;
  display: inline-block;
  /* *display: inline; */
  position: relative;
  zoom: 1;
  vertical-align: middle;
  margin-right: 3px;
  margin-top: -5px;
}
.db_perpoint {
  font-size: 14px;
  color: #d11438;
  margin-left: 15px;
}
.ip {
  margin-top: -108px;
  text-align: left;
  margin-left: 19px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.ip p {
  margin-top: 4px;
  line-height: 1.6em;
  font-size: 14px;
  color: #666;
}
.mainTop {
  position: relative;
  zoom: 1;
  border-top: 1px dashed #ccc;
  margin-top: 10px;
  padding-top: 12px;
}
.mainTop p {
  float: left;
  padding-left: 20px;
  margin-left: 20px;
}
.mainTop h4 {
  float: left;
  margin-left: 5px;
}
.right1 {
  width: 244px;
  height: 368px;
  /* background-color: rgb(80, 19, 192); */
}
.right1 p {
  color: #333333;
  font-size: 16px;
  padding: 0px 0px 15px;
  margin-left: 24px;
  margin-top: 10px;
  font-weight: normal;
}
.more {
  widows: 209px;
  height: 209px;
  /* background-color: green; */
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.line {
  background: #7b8eaf;
  height: 4px;
  width: 54%;
  position: absolute;
  left: 83px;
  top: 36px;
  z-index: 1;
}
.line i {
  float: left;
  left: 88px;
  padding: 2px;
  top: -1px;
  position: relative;
  background: url(//static1.mtime.cn/library/20190416135220/images/dis_icon24.png)
    no-repeat -155px 0;
  width: 14px;
  height: 14px;
  display: block;
  margin-top: -4px;
}
.mainBottom {
  width: 270px;
  height: 160px;
  /* background-color: #d11438; */
  margin-top: 42px;
  margin-left: 69px;
  display: flex;
  flex-direction: row;
}
.ma {
  width: 72px;
  height: 180px;
  /* background-color: #ff960f; */
  margin: 0 auto;
}
.mma {
  width: 70px;
  height: 93px;
  /* background-color: aqua; */
}
.btn-s {
  width: 30px;
  height: 22px;
  background: #679c21;
  position: relative;
  zoom: 1;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  color: #fff;
  overflow: hidden;
  margin-left: 20px;
}
.btn-t {
  color: #08c;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 12px;
}

.content4 {
  width: 977px;
  height: 360px;
  /* background-color: rgb(160, 20, 66); */
  margin: 0 auto;
}
.num_on {
  background: #ff6e00;
  position: absolute;
  width: 30px;
  height: 27px;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  color: #fff;
}
.el-icon-arrow-left {
  background: url(//static1.mtime.cn/library/20190416135220/images/allicon24.png)
    no-repeat 0 -290px;
  width: 49px;
  height: 104px;
  position: absolute;
  top: 50%;
  margin-top: -12px;
  left: 50%;
  z-index: 4;
  opacity: 0.8;
  left: 148px;
}
.el-carousel__arrow:hover {
  background-color: transparent;
}
.el-icon-arrow-right {
  background: url(//static1.mtime.cn/library/20190416135220/images/allicon24.png)
    no-repeat 0 -290px;
  width: 49px;
  height: 104px;
  position: absolute;
  top: 50%;
  margin-top: -12px;
  left: 50%;
  z-index: 4;
  opacity: 0.8;
  background-position: -49px -290px;
  margin-left: -156px;
}
.el-carousel__arrow {
  background-color: transparent;
}
.el-icon-arrow-right:before {
  display: none;
}
.el-icon-arrow-left:before {
  display: none;
}
.vedio {
  background: url(//static1.mtime.cn/library/20190416135220/images/allicon24.png)
    no-repeat -119px -52px;
  width: 119px;
  height: 119px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -60px;
  margin-top: -80px;
  opacity: 0.8;
}
#app {
  margin-top: 0px;
  background-color: #f1f1f1;
}
.week-img a img {
  width: 172px;
  height: 81.06px;
}
</style>