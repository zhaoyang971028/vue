<template>
  <div class="mainbody">
    <div class="main">
      <div class="clearfix i_comtab">
        <ul>
          <li
            v-for="(item,index) in items"
            :key="index"
            :class="istapTitle==index?'titleActive':''"
            v-on:click="fn(index)"
          >{{item}}</li>
        </ul>
        <div class="writer">
          <a href="#">
            <i class="zhuanlan"></i>
            影评人专栏
          </a>
          <a href="#">
            <i class="zhuanlan"></i>
            主力说
          </a>
        </div>
      </div>
      <div class="advert">
        <img src="http://ubmcmm.baidustatic.com/media/v1/0f0005DL57cNbl8eEWzsjf.jpg" alt />
      </div>
      <div class="conList">
        <div class="conList-1">
          <p>有奖活动</p>
          <div class="conList-1-nr">
            <div class="c-1-nr-right">
              <h3>
                <a href="#">有哪些你喜欢不起来的高分电影？</a>
              </h3>
              <div class="c-1-nr-r-middle">
                <span>有奖活动</span>
                <a href="#">我参加</a>
              </div>
              <p class="pcont">快来说一说：哪部电影你不喜欢，却评分很高或者喜欢的人很多！限量电影周边等你拿呦！</p>
            </div>
            <div class="c-1-nr-left">
              <img
                width="160"
                height="160"
                alt="有哪些你喜欢不起来的高分电影？"
                src="http://img5.mtime.cn/mg/2019/09/20/175045.46023952.jpg"
              />
              <a href="#">查看更多活动 &gt;&gt;</a>
            </div>
          </div>
        </div>
      </div>
      <div class="pinglunArea">
        <ul>
          <li v-for="(item,index) in items" :key="index">
            <div class="pinglun-r">
              <a href="#">
                <img
                  src="http://img2.mtime.cn/u/190/228190/ddd173d3-be4c-49c2-bb4b-2658e60bd95d/64X64.jpg"
                />
              </a>
            </div>
            <div class="pinglun-m">
              <h3>
                <a href="#">他被塞入熊腔子里，成了祭品</a>
                <p class="mt12 px14">
                  <a href="#" class="mr12">youngh..</a>
                  评《
                  <a href="#" target="_blank">仲夏夜惊魂</a>》
                  <span class="db_point ml12">5.0</span>
                </p>
                <p class="pinglun-m-mp">
                  <i></i>
                  如果导演能控制好节奏，删光一些可有可无的符号堆砌，最后来个反转，那这部《仲夏》或许还有些看头。
                  <a href="#">查看全文</a>
                </p>
              </h3>
              <div class="clearfix com_usercom">
                <div class="ele_replay">
                  <div class="textarea">
                    <textarea class="c_a5" placeholder="发表评论"></textarea>
                    <i></i>
                  </div>
                </div>
                <a href="#" class="comnum">
                  <i></i>3
                </a>
              </div>
            </div>
            <div class="pinglun-l">
              <a href="#">
                <img src="http://img5.mtime.cn/mt/2019/05/09/113805.41496750_96X128.jpg" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="main-bottom">
        <a href="#" id="loadMoreRecommend" onclick="return false;">
          <i></i>加载更多
        </a>
      </div>
    </div>
    <div class="sieder">
      <div id="M14_B_CommunityIndex_HotGroupAboveTG">
        <div class="pb20">
          <iframe
            src="http://static1.mtime.cn/tg/2011/2014_community_group_square_300x250.html"
            width="300"
            height="250"
            frameborder="0"
            border="0"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            allowtransparency="true"
          ></iframe>
        </div>
      </div>
      <div class="com_mod">
        <h4>热门群组</h4>
        <dl class="com_hotgroup">
          <dt class="__r_c_" pan="Com-RecommendGroup1">
            <div>
              <a href="http://group.mtime.com/card/" target="_blank" title="卡片大富翁游戏交流">
                <img
                  src="http://img2.mtime.cn/gi/1808/13808/7f2154fc-b155-4193-a74e-274c64e36edc_72X48.jpg"
                  alt="卡片大富翁游戏交流"
                  height="48"
                  width="72"
                />
              </a>
              <h3>
                <a href="http://group.mtime.com/card/" target="_blank">卡片大富翁游戏交流</a>
              </h3>
              <p class="mt5">成员：43686</p>
            </div>
            <p class="mt9">游戏问题与建议征集：http://group.mtime.com/card/discussion/386806/</p>
          </dt>
          <dd class="__r_c_" pan="Com-RecommendGroup2">
            <h3>
              <a href="http://group.mtime.com/20860/" target="_blank">时光码字委员会</a>
            </h3>
            <p>成员：5869</p>
          </dd>
          <dd class="__r_c_" pan="Com-RecommendGroup3">
            <h3>
              <a href="http://group.mtime.com/11695/" target="_blank">拍电影</a>
            </h3>
            <p>成员：632</p>
          </dd>
          <dd class="__r_c_" pan="Com-RecommendGroup4">
            <h3>
              <a href="http://group.mtime.com/filmov/" target="_blank">天堂电影小组</a>
            </h3>
            <p>成员：511722</p>
          </dd>
          <dd class="__r_c_" pan="Com-RecommendGroup5">
            <h3>
              <a href="http://group.mtime.com/Akutagawa/" target="_blank">我鬼窟</a>
            </h3>
            <p>成员：39</p>
          </dd>
        </dl>
        <div class="com_hotgroup">
          <ul class="clearfix">
            <li>
              <a href="http://www.mtime.com/community/group/?categoryId=1" target="_blank">电影电视</a>
            </li>
            <li>
              <a href="http://www.mtime.com/community/group/?categoryId=2" target="_blank">影人明星</a>
            </li>
            <li>
              <a href="http://www.mtime.com/community/group/?categoryId=3" target="_blank">娱乐杂谈</a>
            </li>
            <li>
              <a href="http://www.mtime.com/community/group/?categoryId=4" target="_blank">生活时尚</a>
            </li>
            <li>
              <a href="http://www.mtime.com/community/group/?categoryId=5" target="_blank">文化艺术</a>
            </li>
            <li>
              <a href="http://www.mtime.com/community/group/?categoryId=7" target="_blank">本地同城</a>
            </li>
          </ul>
        </div>
        <p class="tr px14 mt15 mr3 __r_c_" pan="Com-RecommendGroupMore">
          <a href="http://www.mtime.com/community/group/">查看更多</a>
        </p>
      </div>
      <div id="M14_B_CommunityIndex_HotUserAboveTG"></div>
      <div class="com_mod">
        <h4 class="mt25">热门会员</h4>
        <div class="com_hotusertab">
          <ul class="clearfix" id="hotUser">
            <li
              id="hotUsersPerson"
              contentid="divHotUsersPerson"
              class="on __r_c_"
              pan="Com-HotPersonTag"
            >影人</li>
            <li
              id="hotUsersFilmCritic"
              contentid="divHotUsersFilmCritic"
              class="__r_c_"
              pan="Com-HotCommentTag"
            >影评人</li>
            <li
              id="hotUsersBlog"
              contentid="divHotUsersBlog"
              class="__r_c_"
              pan="Com-HotBlogTag"
            >主力博客</li>
          </ul>
        </div>
        <div id="divHotUsersPerson">
          <dl class="com_hotuser" id="divHotPerson">
            <dd class="__r_c_" pan="Com-HotPerson1">
              <a title="导演王小帅" target="_blank" href="http://my.mtime.com/6353427/">
                <img
                  userid="6353427"
                  method="useridcard"
                  width="52"
                  height="52"
                  alt="导演王小帅"
                  src="http://img32.mtime.cn/up/2014/04/01/113111.83980024_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/6353427/">导演王小帅</a>
              </h3>
              <p class="mt6"></p>
              <p class="mt5">粉丝数：83651</p>
            </dd>
            <dd class="__r_c_" pan="Com-HotPerson2">
              <a title="筷子兄弟肖央" target="_blank" href="http://my.mtime.com/5865502/">
                <img
                  userid="5865502"
                  method="useridcard"
                  width="52"
                  height="52"
                  alt="筷子兄弟肖央"
                  src="http://img22.mtime.cn/up/2011/12/31/132908.39776142_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/5865502/">筷子兄弟肖央</a>
                <a
                  class="m_svp10"
                  target="_blank"
                  href="http://feature.mtime.com/help/mvp.html"
                  title="时光网MVP认证会员"
                >影视</a>
              </h3>
              <p class="mt6">《老男孩》主创</p>
              <p class="mt5">粉丝数：14705</p>
            </dd>
            <dd class="__r_c_" pan="Com-HotPerson3">
              <a title="张译" target="_blank" href="http://my.mtime.com/6142317/">
                <img
                  userid="6142317"
                  method="useridcard"
                  width="52"
                  height="52"
                  alt="张译"
                  src="http://img32.mtime.cn/up/2012/06/20/172415.55112603_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/6142317/">张译</a>
              </h3>
              <p class="mt6">青年演员</p>
              <p class="mt5">粉丝数：78510</p>
            </dd>
            <dd class="__r_c_" pan="Com-HotPerson4">
              <a title="張榕容" target="_blank" href="http://my.mtime.com/7559427/">
                <img
                  userid="7559427"
                  method="useridcard"
                  width="52"
                  height="52"
                  alt="張榕容"
                  src="http://img32.mtime.cn/up/2013/01/14/232537.39479376_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/7559427/">張榕容</a>
              </h3>
              <p class="mt6">台湾演员</p>
              <p class="mt5">粉丝数：91773</p>
            </dd>
          </dl>
          <p class="px14 tr mt15 __r_c_" pan="Com-HotPersonMore">
            <a href="http://www.mtime.com/community/celebrity/">查看更多</a>
          </p>
        </div>
        <div id="divHotUsersFilmCritic" style="display:none">
          <dl class="com_hotuser" id="divHotFilmCritic">
            <dd>
              <a title="方聿南" target="_blank" href="http://my.mtime.com/1886654/">
                <img
                  userid="1886654"
                  method="useridcard"
                  width="52"
                  height="52"
                  alt="方聿南"
                  src="http://img22.mtime.cn/up/2010/07/08/092035.65057346_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/1886654/">方聿南</a>
                <a
                  class="m_svp3"
                  target="_blank"
                  href="http://feature.mtime.com/help/mvp.html"
                  title="时光网MVP认证会员"
                >其他行业</a>
              </h3>
              <p class="mt5">影评数：87527</p>
            </dd>
            <dd>
              <a title="Rhapsodes" target="_blank" href="http://my.mtime.com/yaosiyu/">
                <img
                  userid="4272960"
                  method="useridcard"
                  width="52"
                  height="52"
                  alt="Rhapsodes"
                  src="http://img22.mtime.cn/up/2011/01/29/175754.17442446_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/yaosiyu/">Rhapsodes</a>
                <a
                  class="m_svp3"
                  target="_blank"
                  href="http://feature.mtime.com/help/mvp.html"
                  title="时光网MVP认证会员"
                >其他行业</a>
              </h3>
              <p class="mt5">影评数：362</p>
            </dd>
            <dd>
              <a title="鸿爪" target="_blank" href="http://my.mtime.com/926069/">
                <img
                  userid="926069"
                  method="useridcard"
                  width="52"
                  height="52"
                  alt="鸿爪"
                  src="http://img32.mtime.cn/up/2013/02/05/145950.59245673_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/926069/">鸿爪</a>
                <a
                  class="m_svp3"
                  target="_blank"
                  href="http://feature.mtime.com/help/mvp.html"
                  title="时光网MVP认证会员"
                >其他行业</a>
              </h3>
              <p class="mt5">影评数：15751</p>
            </dd>
            <dd>
              <a title="韩影范小青" target="_blank" href="http://my.mtime.com/5975738/">
                <img
                  userid="5975738"
                  method="useridcard"
                  width="52"
                  height="52"
                  alt="韩影范小青"
                  src="http://img22.mtime.cn/up/2012/02/08/174813.88926294_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/5975738/">韩影范小青</a>
                <a
                  class="m_svp3"
                  target="_blank"
                  href="http://feature.mtime.com/help/mvp.html"
                  title="时光网MVP认证会员"
                >其他行业</a>
              </h3>
              <p class="mt5">影评数：332</p>
            </dd>
          </dl>
          <p class="px14 tr mt15">
            <a href="http://www.mtime.com/community/celebrity/">查看更多</a>
          </p>
        </div>
        <div id="divHotUsersBlog" style="display:none">
          <div id="divTimeBar" class="timebar" currentid="0">
            <a id="lnkNextRanking" onclick="return false" href="#" class="t_perv">&nbsp;</a>
            <a id="lnkPreRanking" onclick="return false" href="#" class="t_next">&nbsp;</a>
          </div>
          <dl class="com_hotuser" id="divHotBlogs">
            <dd class="__r_c_" pan="Com-HotBlog1">
              <a title="inside" target="_blank" href="http://my.mtime.com/inside/">
                <img
                  width="52"
                  height="52"
                  userid="1100779"
                  method="useridcard"
                  alt="inside"
                  src="http://img22.mtime.cn/up/2010/06/28/151242.31909281_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/inside/">inside</a>
                <a
                  class="m_svp2"
                  target="_blank"
                  href="http://feature.mtime.com/help/mvp.html"
                  title="时光网MVP认证会员"
                >传媒</a>
              </h3>
              <p class="mt5">粉丝数：69998</p>
            </dd>
            <dd class="__r_c_" pan="Com-HotBlog2">
              <a title="happy木易" target="_blank" href="http://my.mtime.com/happymuyi/">
                <img
                  width="52"
                  height="52"
                  userid="6246266"
                  method="useridcard"
                  alt="happy木易"
                  src="http://img22.mtime.cn/up/2012/04/11/231714.31323773_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/happymuyi/">happy木易</a>
              </h3>
              <p class="mt5">粉丝数：33423</p>
            </dd>
            <dd class="__r_c_" pan="Com-HotBlog3">
              <a title="银石qq" target="_blank" href="http://my.mtime.com/631628/">
                <img
                  width="52"
                  height="52"
                  userid="631628"
                  method="useridcard"
                  alt="银石qq"
                  src="http://img22.mtime.cn/up/2010/06/28/232931.28943030_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/631628/">银石qq</a>
              </h3>
              <p class="mt5">粉丝数：11763</p>
            </dd>
            <dd class="__r_c_" pan="Com-HotBlog4">
              <a title="忧郁的国王" target="_blank" href="http://my.mtime.com/jx2012/">
                <img
                  width="52"
                  height="52"
                  userid="4636112"
                  method="useridcard"
                  alt="忧郁的国王"
                  src="http://img22.mtime.cn/up/2011/04/18/165242.80891614_64X64.jpg"
                />
              </a>
              <h3>
                <a target="_blank" href="http://my.mtime.com/jx2012/">忧郁的国王</a>
              </h3>
              <p class="mt5">粉丝数：51710</p>
            </dd>
          </dl>
          <p class="px14 tr mt15 __r_c_" pan="Com-HotBlogMore">
            <a href="http://www.mtime.com/community/mainblogger/">查看更多</a>
          </p>
        </div>
      </div>
      <div id="M14_B_CommunityIndex_MovieGuessAboveTG"></div>
      <div id="guessDiv" class="com_mod __r_c_" pan="Com-GuessFilm">
        <h4 class="mt25">猜电影</h4>
        <form action="http://fun.mtime.com/api/gameprocessor" method="post" target="_blank">
          <input type="hidden" name="MtimeGameAPIGameMode" value="1" />
          <input type="hidden" name="MtimeGameAPIGameAction" value="1" />
          <input type="hidden" name="MtimeGameUserID" value="0" />
          <input type="hidden" name="MtimeGameAPIGameID" value="183185" />
          <ul class="com_guess">
            <li>
              <a
                href="http://my.mtime.com/app/quiz/?id=183185"
                title="唐僧为什么对悟空又搂又抱？"
                target="_blank"
              >
                <img
                  width="300"
                  alt="唐僧为什么对悟空又搂又抱？"
                  src="http://img5.mtime.cn/mg/2017/02/03/100205.88266457.jpg"
                />
              </a>
            </li>
            <li class="userli">
              <div class="i_bbsuser">
                <a href="http://my.mtime.com/bluebird007/" title="青鸟不飞回" target="_blank">
                  <img
                    userid="1923912"
                    method="useridcard"
                    width="73"
                    height="73"
                    alt="青鸟不飞回"
                    src="http://img22.mtime.cn/up/2010/12/10/163016.97409226_128X128.jpg"
                  />
                </a>
                <p>
                  <a
                    href="http://my.mtime.com/bluebird007/"
                    userid="1923912"
                    method="useridcard"
                    target="_blank"
                  >青鸟不飞回</a>
                </p>
                <p class="mt3">
                  来自：
                  <a href="http://my.mtime.com/app/quiz/" target="_blank">猜电影</a>
                </p>
              </div>
            </li>
            <li class="textli">
              <div class="i_guess">
                <div>唐僧为什么对悟空又搂又抱？</div>
                <div class="mt15 lh20">
                  <p>
                    <input type="radio" class="mr6" name="MtimeGameAPIOptionValue" value="667588" />
                    <label>悟空去而复返惊喜万分</label>
                  </p>
                  <p>
                    <input type="radio" class="mr6" name="MtimeGameAPIOptionValue" value="667589" />
                    <label>唐僧爱尚了悟空</label>
                  </p>
                  <p>
                    <input type="radio" class="mr6" name="MtimeGameAPIOptionValue" value="667590" />
                    <label>把悟空当成了段小姐</label>
                  </p>
                  <p class="tc mt25">
                    <input type="submit" class="i_bbsbtn" name="MTimeGamePlayButton" value="提 交" />
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </form>
      </div>
      <div id="M14_B_CommunityIndex_MovieGuessUnderTG"></div>
      <div class="com_mod __r_c_" pan="Com-Zillionaire">
        <h4 class="mt25">卡片大富翁</h4>
        <ul class="com_guess">
          <li>
            <a href="http://group.mtime.com/card/discussion/3962384/" target="_blank" title="活着">
              <img
                src="http://img5.mtime.cn/mg/2019/07/19/221258.14217017.jpg"
                width="300"
                alt="活着"
              />
            </a>
          </li>
          <li
            class="textli"
            style="padding:15px 13px;"
          >世界上只有一种真正的英雄主义，那就是在认识生活的真相后依然热爱生活。现实没有为人们怎样活着提供选择，而每一步前进的步伐都成了一种必须。</li>
          <li class="textli tc">
            <a
              href="http://group.mtime.com/card/discussion/3962384/"
              class="i_bbsbtn"
              target="_blank"
            >收 集</a>
          </li>
        </ul>
      </div>
      <div id="M14_B_CommunityIndex_HotReviewMovieAboveTG"></div>
      <div style="border-bottom:none;" class="com_mod">
        <h4 class="mt25">网友热评</h4>
        <dl class="com_hotmovie">
          <dd class="__r_c_" pan="Com-HotFilm1">
            <span style="margin-top:30px;">231</span>
            <h3>
              <img
                width="60"
                class="v_m mr6"
                alt="攀登者/The Climbers(2019)"
                src="http://img5.mtime.cn/mt/2019/09/26/114536.37789206_75X100.jpg"
              />
              <a href="http://movie.mtime.com/263126/" target="_blank">攀登者</a>
            </h3>
          </dd>
          <dd class="__r_c_" pan="Com-HotFilm2">
            <span>176</span>
            <h3>
              <a href="http://movie.mtime.com/261960/" target="_blank">中国机长</a>
            </h3>
          </dd>
          <dd class="__r_c_" pan="Com-HotFilm3">
            <span>150</span>
            <h3>
              <a href="http://movie.mtime.com/263717/" target="_blank">安娜</a>
            </h3>
          </dd>
          <dd class="__r_c_" pan="Com-HotFilm4">
            <span>131</span>
            <h3>
              <a href="http://movie.mtime.com/264539/" target="_blank">决胜时刻</a>
            </h3>
          </dd>
          <dd class="__r_c_" pan="Com-HotFilm5">
            <span>116</span>
            <h3>
              <a href="http://movie.mtime.com/262638/" target="_blank">使徒行者2：谍影行动</a>
            </h3>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ["推荐", "|", "影评", "|", "话题", "|", "活动"],
      istapTitle: 0
    };
  },
  methods: {
    fn(index) {
      window.console.log(index);
      return (this.istapTitle = index);
    }
  }
};
</script>
<style scoped>
.mainbody {
  width: 967px;
  margin: -80px auto 0;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 5px 0 10px -5px #d6d6d6, -5px 0 10px -5px #d6d6d6;
  border-top: 1px solid #d6d6d6;
  background: white;
}
.mainbody .main {
  float: left;
  width: 620px;
  padding-right: 20px;
  border-right: 1px solid #ccc;
  padding-bottom: 29767px;
  margin-bottom: -29767px;
}
.i_comtab {
  border-bottom: 4px solid #333;
  position: relative;
  overflow: hidden;
  zoom: 1;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.main ul li {
  float: left;
  font-weight: bold;
  padding: 0 10px;
  color: #333;
  font-size: 24px;
  line-height: 20px;
}
.titleActive {
  color: #e11a1f !important;
}
.writer {
  font-size: 16px;
}
.zhuanlan {
  background: url(http://static1.mtime.cn/channel/20190320173537/images/com_icon.png)
    no-repeat 0 0;
  width: 13px;
  height: 18px;
  display: inline-block;
  position: relative;
  zoom: 1;
  overflow: hidden;
  vertical-align: middle;
  margin: 0 5px 0 12px;
}
.writer a:first-child {
  border-right: 1px solid #ccc;
  padding-right: 12px;
}
.advert {
  margin-top: 15px;
}
.conList {
  margin-top: 12px;
  background: white;
}
.conList-1 {
  padding: 25px 0;
  border-top: 1px solid #e1e1e1;
}
.c-1-nr-right {
  margin-right: 30px;
}
.conList-1 > p {
  color: white;
  background: #e11a1f;
  width: 80px;
  height: 28px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 28px;
  border-radius: 5px;
}
.conList-1-nr {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  font-size: 14px;
}
h3 {
  font-size: 24px;
  line-height: 1.2em;
  font-weight: normal;
}
.c-1-nr-r-middle {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.c-1-nr-r-middle span {
  background: #e8e8e8;
  height: 30px;
  display: block;
  line-height: 30px;
  padding: 0 15px;
  border-radius: 5px;
}
.c-1-nr-r-middle a {
  background: #0087e2;
  width: 117px;
  height: 32px;
  border-radius: 20px;
  display: block;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
}
.pcont {
  font-size: 16px;
  color: #666;
  line-height: 1.7em;
  margin-top: 15px;
  word-break: break-all;
  word-wrap: break-word;
}
.c-1-nr-left {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.c-1-nr-left a {
  margin-top: 20px;
  color: #0087e2;
}
.pinglunArea ul li {
  width: 100%;
  border-top: 1px solid #e1e1e1;
  margin-top: -1px;
  padding: 25px 0;
  zoom: 1;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.pinglun-r a img {
  border-radius: 8px;
}
.pinglun-m {
  margin-left: 2px;
  width: 395px;
}
.pinglun-m p a {
  color: #0087e2;
}
.pinglun-m p a:hover {
  text-decoration: underline;
}
.px14 {
  font-size: 14px;
}
.mt12 {
  margin-top: 12px;
}
.mr12 {
  margin-right: 12px;
}
.db_point {
  background: #679c21;
  display: inline-block;
  zoom: 1;
  padding: 4px 5px 4px;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #fff;
  vertical-align: middle;
  overflow: hidden;
  margin-left: 10px;
}
.pinglun-m-mp i {
  background: url(http://static1.mtime.cn/channel/20190320173537/images/com_icon.png)
    no-repeat -210px 0;
  width: 34px;
  height: 28px;
  display: inline-block;
  zoom: 1;
  overflow: hidden;
  vertical-align: middle;
  margin-right: 20px;
}
.pinglun-m-mp {
  font-size: 16px;
  color: #666;
  line-height: 1.7em;
  margin-top: 15px;
  word-break: break-all;
  word-wrap: break-word;
}
.com_usercom {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.com_usercom .ele_replay {
  width: 335px;
}
.ele_replay .textarea {
  background: #fbfbfb;
  height: 40px;
  zoom: 1;
  border: 1px solid #d6d6d6;
  position: relative;
}
.ele_replay .textarea textarea {
  background: transparent;
  border: 0;
  font-size: 13px;
  line-height: 32px;
  resize: none;
  color: #878787;
  width: 100%;
  padding: 0;
  overflow: hidden;
  padding: 3px 10px;
}
.ele_replay .textarea i {
  background: url(http://static1.mtime.cn/20190320160733/images/2014/allicon24.png)
    no-repeat -110px 0;
  width: 12px;
  height: 13px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 2;
  font-size: 12px;
}
.comnum {
  font-size: 12px;
}
.com_usercom .comnum i {
  background: url(//static1.mtime.cn/channel/20190320173537/images/allicon24.png)
    no-repeat;
  width: 17px;
  height: 15px;
  display: inline-block;
  position: relative;
  zoom: 1;
  overflow: hidden;
  margin-right: 3px;
  vertical-align: text-bottom;
}
.ele_replay .textarea :focus {
  border: 0;
  background: #fbfbfb;
  height: 50px;
  zoom: 1;
  border: 2px solid #0087e2;
}
.main-bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.main-bottom a {
  margin-top: 20px;
}

.main-bottom a i {
  background: url(http://static1.mtime.cn/channel/20190320173537/images/com_icon.png)
    no-repeat -75px -23px;
  width: 45px;
  height: 45px;
  position: relative;
  zoom: 1;
  overflow: hidden;
  display: inline-block;
  margin-right: 12px;
  vertical-align: middle;
}

.sieder {
  float: right;
  width: 300px;
}
.com_mod {
  padding-bottom: 25px;
  border-bottom: 1px solid #e6e6e6;
}
.pb20 {
  padding-bottom: 20px;
}
.com_mod h4 {
  font-size: 18px;
  line-height: 1.2em;
}
.com_hotgroup {
  font-size: 13px;
  color: #666;
  width: 300px;
  overflow: hidden;
  position: relative;
  zoom: 1;
}
.com_hotgroup dt {
  border-bottom: 1px dotted #ccc;
  margin-top: 15px;
  padding-bottom: 12px;
}
.com_hotgroup dt div {
  position: relative;
  zoom: 1;
  padding-left: 85px;
  min-height: 50px;
}
.com_hotgroup dt div img {
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #ccc;
}
.com_hotgroup h3 a {
  color: #333;
  font-size: 16px;
  font-weight: normal;
}
.mt5 {
  margin-top: 5px;
}
.mt9 {
  margin-top: 9px;
}
.com_hotgroup dd {
  border-bottom: 1px dotted #ccc;
  padding: 12px 0;
}
.com_hotgroup {
  font-size: 13px;
  color: #666;
  width: 300px;
  overflow: hidden;
  position: relative;
  zoom: 1;
}
.com_hotgroup ul {
  width: 351px;
  margin-left: -25px;
  padding-top: 20px;
}
.com_hotgroup li {
  float: left;

  border-left: 2px solid #e6e6e6;
  font-size: 14px;
  width: 115px;
  text-align: center;
  margin: 3px 0;
}

.mt15 {
  margin-top: 15px;
}
.mr3 {
  margin-right: 3px;
}
.tr {
  text-align: right;
}
.com_mod {
  padding-bottom: 25px;
  border-bottom: 1px solid #e6e6e6;
}
.com_mod h4 {
  font-size: 18px;
  line-height: 1.2em;
}
.mt25 {
  margin-top: 25px;
}
.com_hotusertab {
  width: 300px;
  position: relative;
  overflow: hidden;
  zoom: 1;
  margin-top: 20px;
  padding-bottom: 12px;
}
.com_hotusertab ul {
  width: 451px;
  margin-left: -25px;
}
.com_hotusertab li.on {
  cursor: default;
  color: #e11a1f;
}
.com_hotusertab li {
  float: left;
  cursor: pointer;
  font-size: 16px;
  border-right: 2px solid #333;
  width: 115px;
  text-align: center;
}
.com_hotuser {
  position: relative;
  zoom: 1;
  overflow: hidden;
}
.com_hotuser dd {
  border-top: 1px dotted #ccc;
  padding: 12px 0 12px 65px;
  position: relative;
  zoom: 1;
  margin-top: -1px;
  min-height: 52px;
}
.com_hotuser img {
  position: absolute;
  left: 0;
  top: 15px;
  min-height: 52px;
  width: 52px;
  height: 52px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.com_hotuser h3 {
  font-size: 14px;
}
.mt6 {
  margin-top: 6px;
}
.__r_c_ > a {
  color: #08c;
  text-decoration: none;
  vertical-align: baseline;
}
a:hover {
  color: #08c !important;
}
.com_mod {
  padding-bottom: 25px;
  border-bottom: 1px solid #e6e6e6;
}
.com_mod h4 {
  font-size: 18px;
  line-height: 1.2em;
}
.com_guess {
  padding-top: 15px;
}
.com_guess li.userli {
  position: relative;
  z-index: 2;
  margin-top: -25px;
  padding: 0 10px;
}
.i_bbsuser {
  min-height: 50px;
  position: relative;
  zoom: 1;
  padding: 30px 0 0 85px;
}
.i_bbsuser img {
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 10px;
  padding: 3px;
}
.com_guess li.textli {
  padding: 15px;
  font-size: 16px;
  line-height: 1.5em;
  color: #323232;
}
.lh20 {
  line-height: 200%;
}
.mr6 {
  margin-right: 6px;
}
.tc {
  text-align: center;
}
.i_bbsbtn,
.i_bbsbtn:hover {
  background: #5eae2b;
  width: 162px;
  height: 32px;
  border-radius: 16px;
  position: relative;
  zoom: 1;
  overflow: hidden;
  display: inline-block;
  line-height: 32px;
  font-size: 18px;
  color: #fff;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  padding: 0;
}
.com_mod {
  padding-bottom: 25px;
}
.com_mod h4 {
  font-size: 18px;
  line-height: 1.2em;
}
.com_hotmovie {
  margin-top: 15px;
}
.com_hotmovie dd {
  border-bottom: 1px dotted #ccc;
  padding: 12px 0;
  clear: both;
  overflow: hidden;
  position: relative;
  zoom: 1;
  color: #666;
  font-size: 14px;
}
.com_hotmovie span {
  float: right;
}
.com_hotmovie h3 {
  float: left;
}
.com_hotmovie h3 a {
  color: #333;
  font-size: 16px;
  font-weight: bold;
}
</style>

