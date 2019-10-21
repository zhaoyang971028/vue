<template>
  <div class="bottom">
    <div class="topline"></div>
    <div class="bottomout">
      <div class="bottomfix">
        <div class="bottomlogo">
          <dl>
            <dt v-for="(item,index) in item1" :key="index">
              <a :href="item.src" title="Mtime时光网">{{item.content}}</a>
            </dt>
            <div class="fix1" v-for="(item,index) in item2" :key="index">
              <a :href="item.src1">{{item.content1}}</a>
              <a :href="item.src2" class="ml30">{{item.content2}}</a>
            </div>
          </dl>
        </div>
        <div class="line"></div>
        <div class="bottommap">
          <dl class="dl1">
            <dt>{{item[0]}}</dt>
            <dd v-for="(item,index) in item3" :key="index">
              <a :href="item.src">{{item.content}}</a>
            </dd>
          </dl>
          <dl class="dl2">
            <dt>{{item[1]}}</dt>
            <div v-for="(item,index) in item4" :key="index" class="fix2">
              <a :href="item.src1">{{item.content1}}</a>
              <a :href="item.src2" class="ml30">{{item.content2}}</a>
            </div>
          </dl>
          <dl class="dl3">
            <dt>{{item[2]}}</dt>
            <div v-for="(item,index) in item5" :key="index" class="fix3">
              <img :src="item.src" alt width="30px" height="30px" />
            </div>
          </dl>
        </div>
        <div class="line"></div>
        <div class="bottomweek">
          <div class="weekly">
            <div class="weekly1">{{item[3]}}</div>
            <div class="weekly2">{{item[4]}}</div>
          </div>
          <div class="week-img">
            <a href>
              <img :src="item[5]" alt />
            </a>
          </div>
          <div class="weekinput">
            <input type="text" value="邮箱地址" class="weekinput1" />
            <div class="subscribe">
              <a href>{{item[6]}}</a>
            </div>
          </div>
        </div>
        <div class="bottomthr">
          <div class="ticket">
            <div class="ticket1">{{item[7]}}</div>
            <div class="ticket2">{{item[8]}}</div>
            <div class="ticket3">{{item[9]}}</div>
          </div>
          <div class="ticketimg">
            <a href></a>
          </div>
          <div class="scan">
            <div class="scan1">{{item[10]}}</div>
            <div class="scan2">{{item[11]}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomfoot">
      <div class="bottomfoot1">
        <a href>{{item[12]}}</a>
      </div>
      <div class="bottomfoot2">
        <div class="bf2">
          <a href>{{item[13]}}</a>
        </div>
        <div class="bf2">
          <a href>{{item[14]}}</a>
        </div>
      </div>
      <div class="bottomfoot3">
        <div class="bf3">
          <a href>{{item[15]}}</a>
        </div>
        <div class="bf3">
          <a href>{{item[16]}}</a>
        </div>
        <div class="bf3">
          <a href>{{item[17]}}</a>
        </div>
        <div class="bf3">
          <a href>{{item[18]}}</a>
        </div>
        <div class="bf3-5">
          <a href></a>
        </div>
        <div class="bf3">
          <a href>{{item[19]}}</a>
        </div>
      </div>
      <div class="bottomfoot4">
        <div class="a1"></div>
        <div class="a2"></div>
        <div class="a3"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bottom",
  data() {
    return {
      item: [
        "栏目",
        "推荐",
        "关注我们",
        "时光周刊",
        "第214期",
        "http://img5.mtime.cn/mg/2019/03/05/170314.73206934.jpg",
        "订阅",
        "手机购票",
        "方便",
        "实惠",
        "扫描二维码",
        "下载客户端",
        "违法和不良信息举报电话：4006-118-118 举报邮箱：service@mtime.com",
        "北京动艺时光网络科技有限公司",
        "Copyright 2006-2019 Mtime.com Inc. All rights reserved.",
        "京ICP证050715号",
        "网络视听许可证0108265号",
        "网络文化经营许可证",
        "广播电视节目制作经营许可证(京)字第1435号",
        "京公网安备：11010502032542号"
      ],
      item1: [
        {
          src: "http://www.mtime.com",
          content: "Mtime时光网"
        }
      ],
      item2: [
        {
          src1: "https://app.mokahr.com/apply/mtime",
          src2: "https://app.mokahr.com/apply/mtime",
          content1: "加入我们",
          content2: "联系我们"
        },
        {
          src1: "https://app.mokahr.com/apply/mtime",
          src2: "http://feature.mtime.com/help/contact.htm",
          content1: "站务论坛",
          content2: "问题反馈"
        },
        {
          src1: "https://app.mokahr.com/apply/mtime",
          src2: "http://feature.mtime.com/help/contact.htm",
          content1: "社区准则",
          content2: "网站地图"
        },
        {
          src1: "https://app.mokahr.com/apply/mtime",
          src2: "http://feature.mtime.com/help/contact.htm",
          content1: "隐私政策",
          content2: "English"
        }
      ],
      item3: [
        {
          src: "http://news.mtime.com/",
          content: "新闻"
        },
        {
          src: "http://theater.mtime.com/",
          content: "影院"
        },
        {
          src: "http://mall.mtime.com",
          content: "商城"
        },
        {
          src: "http://www.mtime.com/community/",
          content: "社区"
        }
      ],
      item4: [
        {
          src1: "http://movie.mtime.com/recent/",
          src2: "http://movie.mtime.com/boxoffice/",
          content1: "观影指南",
          content2: "电影票房"
        },
        {
          src1: "http://news.mtime.com/conversation/",
          src2:
            "http://video.mtime.com/search/?h=video&s=2&t=%E9%A2%84%E5%91%8A%E7%89%87",
          content1: "时光对话",
          content2: "新片预告"
        },
        {
          src1: "http://movie.mtime.com/all/list/index.html",
          src2: "http://my.mtime.com/app/quiz/",
          content1: "特色榜单",
          content2: "电影猜猜猜"
        },
        {
          src1: "http://news.mtime.com/fun/",
          src2: "http://my.mtime.com/app/card/",
          content1: "全球拾趣",
          content2: "卡片大富翁"
        }
      ],
      item5: [
        /*         {
          src: require("../../static/imgs/微博.png"),
          content: "新闻"
        },
        {
          src: require("../../static/imgs/微信.png"),
          content: "影院"
        },
        {
          src: require("../../static/imgs/rss.png"),
          content: "商城"
        } */
      ]
    };
  }
};
</script>
<style scoped>
.bottom {
  background-color: #f7f7f7;
  width: 100%;
  display: flex;
  flex-direction: column;
  font: 14px/150% helvetica, "微软雅黑", "microsoft yahei", Verdana, Lucida,
    arial, sans-serif, "黑体";
  color: #333;
}
.bottomout {
  width: 100%;
  height: 204.6px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.topline {
  width: 100%;
  height: 4px;
  background: url(http://static1.mtime.cn/nodewww/2019051313312/images/foot.png)
    center 0 no-repeat #337fab;
}
.bottomfix {
  width: 1220px;
  height: 204px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 13px;
}
.bottomfix a:hover {
  color: #1f7dd7;
}
.bottomlogo {
  margin-right: -20px;
  width: 200px;
  height: 157px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.bottommap {
  width: 501px;
  height: 157px;
  display: flex;
}
.bottomweek {
  width: 280px;
  height: 157px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.bottomthr {
  width: 205px;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -20px;
}
.bottomlogo dt a {
  background: url(http://static1.mtime.cn/nodewww/2019051313312/images/head.png)
    no-repeat;
  width: 136px;
  height: 44px;
  display: block;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}
.bottomlogo dt {
  margin-bottom: 10px;
}
.bottomlogo a {
  text-decoration: none;
  color: #333;
}
.fix1 {
  width: 136px;
  display: flex;
  height: 23px;
  justify-content: space-between;
}
.line {
  background: url(http://static1.mtime.cn/nodewww/2019051313312/images/foot.png) -495px -9px
    no-repeat;
  width: 5px;
  height: 157px;
  overflow: hidden;
  display: block;
}
.dl1 dt {
  margin-left: 45px;
}
.bottommap dd {
  font-size: 16px;
  line-height: 2em;
  display: block;
  margin-inline-start: 40px;
}
.dl1 a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin-left: 10px;
}
.dl2 dt {
  margin-left: -95px;
}
.dl2 a {
  padding-left: 20px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin-left: 10px;
}
.dl3 dt {
  padding-left: 20px;
}
.dl3 {
  margin-left: 10px;
}
.fix2 {
  padding-left: 50px;
  width: 230px;
  display: flex;
  height: 32px;
  justify-content: start;
  align-items: center;
}
.fix3 {
  padding-left: 20px;
  width: 50px;
  display: flex;
  height: 42px;
  justify-content: start;
  align-items: center;
}
.weekly {
  width: 172px;
  height: 24px;
  display: flex;
  justify-content: space-between;
}
.weekly1 {
  font-size: 18px;
  font-weight: 400;
}
.weekly2 {
  color: #7d7d7d;
  padding-top: 3px;
}
.weekinput {
  background: url(http://static1.mtime.cn/nodewww/2019051313312/images/foot.png) -330px -34px
    no-repeat;
  width: 172px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  padding-top: 2px;
  padding-left: -50px;
}
.weekinput1 {
  background: 0 0;
  width: 90px;
  border: none;
  height: 22px;
  color: #a5a5a5;
  font-size: 12px;
  margin-left: 12px;
  outline: none;
}
.subscribe {
  width: 54px;
  height: 25px;
  background-color: #0081bc;
  border-radius: 20px;
  text-align: center;
  line-height: 25px;
}
.subscribe a {
  height: 25px;
  color: #ffffff;
  text-decoration: none;
}
.ticket {
  width: 205px;
  height: 20.8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ticket1 {
  font-size: 18px;
  font-weight: 400;
}
.ticket2 {
  color: #7d7d7d;
  margin-left: 3px;
}
.ticket3 {
  color: #7d7d7d;
  margin-left: 3px;
}
.ticketimg {
  background: url(http://static1.mtime.cn/nodewww/2019051313312/images/foot.png) -795px -9px
    no-repeat;
  width: 99px;
  height: 99px;
  margin: 0 auto;
  display: block;
}
.scan {
  width: 205px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.scan1 {
  margin-right: 3px;
}
.bottomfoot {
  margin-top: 15px;
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bottomfoot1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottomfoot2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottomfoot3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottomfoot a {
  color: #7e7e7f;
  font-size: 12px;
  text-decoration: none;
}
.bf3-5 {
  background: url(http://static1.mtime.cn/nodewww/2019051313312/images/foot.png) -233px -12px
    no-repeat;
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 0 !important;
  margin-left: 20px;
}
.bf2 {
  margin-left: 10px;
}
.bf3 {
  margin-left: 10px;
}
.bottomfoot4 {
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.a1 {
  background: url(http://static1.mtime.cn/nodewww/2019051313312/images/foot.png)
    0 -60px no-repeat;
  width: 68px;
  height: 25px;
  vertical-align: middle;
  margin-right: 15px;
  overflow: hidden;
}
.a2 {
  background: url(https://icon.cecdc.com/sf.png);
  background-size: 100% auto;
  vertical-align: middle;
  width: 68px;
  height: 25px;
  vertical-align: middle;
  margin-right: 15px;
}
.a3 {
  background: url(http://static1.mtime.cn/nodewww/2019051313312/images/aqLogo.png)
    no-repeat;
  background-size: 100% auto;
  width: 68px;
  height: 25px;
  vertical-align: middle;
  margin-right: 15px;
}
</style>