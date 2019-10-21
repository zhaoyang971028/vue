<template>
  <div class="communityRegin">
    <div class="t-box">
      <div class="t-boxContent">
        <div class="t-boxTop">
          <a href="#">
            <img
              src="http://img32.mtime.cn/up/2013/01/08/081313.64016596_128X128.jpg"
              alt
              width="60px"
            />
          </a>
          <h3>
            <a href="http://i.mtime.com/cydenylau/blog/8197904/" target="_blank">抓住那只鬼，以为能抓住那个夏天</a>
          </h3>
          <p class="mt12">
            <span class="i_quto"></span>
            上部里，我们见到的是童年友谊和心理创伤，以孩童的眼光去反映成人世界；这部续集，故事则在忧伤中，讲述这群成年人，最终将如何摆脱内心最深的恐惧，找到自由与安宁
          </p>
          <p class="mt12 px14">
            <a
              href="http://my.mtime.com/cydenylau/"
              userid="2455334"
              method="useridcard"
              target="_blank"
              style="position: relative;"
            >Cydeny</a>
            <span>评</span> 《
            <a href="http://movie.mtime.com/251039/" target="_blank">小丑回魂2</a>》
            <strong class="db_point">7.0</strong>
          </p>
          <a
            href="http://movie.mtime.com/251039/"
            target="_blank"
            title="小丑回魂2/It: Chapter Two(2019)"
            class="movieimg"
          >
            <img
              src="http://img5.mtime.cn/mt/2019/08/16/165625.62514849_75X100.jpg"
              width="75"
              height="100"
              alt="小丑回魂2/It: Chapter Two(2019)"
            />
          </a>
        </div>
        <div class="t-boxBottom">
          <div class="t-boxBtt-1">
            <a href="#">
              <img src="http://img32.mtime.cn/up/2016/01/27/102938.61111475_48X48.jpg" width="35px" />
            </a>
            <div class="pinglun">
              <p>
                <a
                  href="http://my.mtime.com/2698862/"
                  target="_blank"
                  style="position: relative;"
                >kopmine</a> 说:
              </p>
              <p class="px14">小丑后面真正的邪恶化身是不会被消灭的</p>
            </div>
          </div>
          <div class="t-boxBtt-1" :style="{display:isnone}">
            <a href="#">
              <img
                src="http://img32.mtime.cn/up/2016/01/27/102938.61111475_48X48.jpg"
                alt
                width="35px"
              />
            </a>
            <div class="pinglun">
              <p>
                <a
                  href="http://my.mtime.com/2698862/"
                  target="_blank"
                  style="position: relative;"
                >kopmine</a> 说:
              </p>
              <p class="px14">长大之后依然抹不去的是儿时的桎梏和恐惧</p>
            </div>
          </div>
          <div class="placePL">
            <div class="textarea focus" style="height: 50px;">
              <textarea placeholder="发表评论" @focus="textareaClick" @blur="textareaBlur"></textarea>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topbar",
  data() {
    return {
      isnone: "true", //一定要字符串形式才能成功
      isShow: "false"
    };
  },
  methods: {
    textareaClick() {
     return this.isnone = "none";
    },
    textareaBlur(){
       window.console.log(111)
      return this.isnone='flex';
     
    }
  }
};
</script>
<style scoped>
.communityRegin {
  background: url(http://img5.mtime.cn/mg/2019/09/10/115058.13180209.jpg)
    repeat-x center 0;
  width: 100%;
  height: 565px;
  opacity: 1;
  z-index: 2;
  overflow: hidden;
}

.px14 {
  font-size: 14px;
}
.t-box {
  margin: 94px auto 0;
  padding: 25px 30px 10px;
  width: 565px;
  height: calc(100% - 179px);
  background: white;
  position: relative;
  left: -170px;
}
.t-boxContent {
  position: relative;
  zoom: 1;
  min-height: 60px;
  width: 565px;
}
.t-boxTop {
  border-bottom: 1px dotted #ccc;
  padding: 0 0 10px 80px;
}
.t-boxTop > a > img {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 8px;
}
.t-boxTop h3 {
  font-size: 34px;
  font-weight: normal;
  line-height: 1em;
}

.mt12 {
  margin-top: 12px;
  font-size: 16px;
  line-height: 160%;
}
.i_quto {
  background: url(http://static1.mtime.cn/channel/20190320173537/images/index.jpg)
    no-repeat -237px 0;
  width: 25px;
  height: 21px;
  position: relative;
  zoom: 1;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
}
.db_point {
  background: #679c21;
  display: inline-block;
  position: relative;
  zoom: 1;
  padding: 4px 5px 4px;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #fff;
}
.movieimg {
  position: absolute;
  right: 77px;
  top: 161px;
}
.t-boxBottom {
  padding-left: 80px;
  width: 365px;
}
.t-boxBtt-1 {
  display: flex;
  zoom: 1;
  min-height: 30px;
  color: #6c6c6c;
  margin-top: 6px;
  padding-top: 3px;
}
.t-boxBtt-1 a img {
  border-radius: 5px;
  margin-right: 10px;
}
.pinglun {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.placePL {
  margin-top: 12px;
}

.textarea textarea {
  background: transparent;
  font-size: 13px;
  line-height: 20px;
  resize: none;
  color: #878787;
  width: 100%;
  padding: 0;
}
textarea:focus {
  border: 0;
  background: #fbfbfb;
  height: 50px;
  position: relative;
  zoom: 1;
  padding: 3px 10px;
  border: 2px solid #0087e2;
}
</style>