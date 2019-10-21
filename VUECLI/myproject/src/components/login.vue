<template>
  <div class="login">
    <topbar></topbar>
    <div class="regin_out">
      <div class="regin_line"></div>
      <div class="regin_inner fix">
        <div class="regin_left">
          <h5>新会员注册</h5>
          <dl>
            <dd>
              <div class="reg_txt">
                <input type="text" id="reg_mobile" placeholder="常用手机号" />
                <p class="reg_errtxt" id="reg_mobile_msg"></p>
              </div>
            </dd>
            <dd>
              <div class="reg_txt">
                <input
                  type="password"
                  id="reg_password"
                  maxlength="20"
                  placeholder="密码 (6-20位字母与数字、符号组合)"
                />
                <p class="reg_errtxt" id="reg_password_msg">密码强度太低，请使用6-20位字母与数字、符号的组合</p>
                <div id="levelDiv" class="password_box">
                  <p id="levelTip">密码强度</p>
                  <p>
                    <i class="ps1">&nbsp;</i>
                    <i class="ps2">&nbsp;</i>
                    <i class="ps3">&nbsp;</i>
                  </p>
                </div>
                <div class="password_tog" id="showPwdBtn"></div>
              </div>
            </dd>
            <dd>
              <div class="reg_txt reg_vcode">
                <input type="text" id="reg_vcode" placeholder="图片验证码" />
                <p class="reg_errtxt" id="reg_vcode_msg"></p>
              </div>
             
            </dd>
            <dd>
              <div class="reg_txt">
                <input type="text" id="reg_smscode" placeholder="短信验证码" />
                <p class="reg_errtxt" id="reg_smscode_msg"></p>
                <a id="reg_smscodeBtn" href="#" class="get_telcode">获取验证码</a>
              </div>
            </dd>
            <dd>
              <div class="reg_selsex" id="sexRegion">
                性别：
                <span class="checkend">
                  <i data-sex="1" data-selector="sex" class="reg_checkbox"></i>男
                  <em class="ico_female"></em>
                </span>
                <span>
                  <i data-sex="2" data-selector="sex" class="reg_checkbox"></i>女
                  <em class="ico_male"></em>
                </span>
                <p id="sexErrorMsg" style="display:none;">请选择性别!</p>
                <input type="hidden" id="hidSexValue" />
              </div>
            </dd>
            <dd>
              <div class="bind_pro">
                <span id="reg_policy" class="on"></span>
                <a href="http://feature.mtime.com/help/policy.htm" target="_blank">已同意《Mtime时光网服务条款》</a>
              </div>
            </dd>
            <dt class="reg_btn">
              <a id="mobileRegisterBtn" class="btn_blue">注 册</a>
            </dt>
          </dl>
        </div>
        <div class="regin_right">
          <h5>会员登录</h5>
          <form id="loginForm" method="post">
            <dl>
              <dd>
                <div class="reg_txt">
                  <input type="text" id="loginEmailText" name="email" placeholder="输入邮箱 / 手机号码" />
                  <p class="reg_errtxt" id="loginEmailText_msg">请使用邮箱 / 手机号或 万达电影 账号登录</p>
                </div>
              </dd>
              <dd>
                <div class="reg_txt">
                  <input type="password" id="hidepassword" class="c_a5" style="display:none;" />
                  <input
                    type="password"
                    id="loginPasswordText"
                    placeholder="请输入密码"
                    autocomplete="off"
                  />
                  <p class="reg_errtxt" id="hidepassword_msg">密码错误</p>
                </div>
              </dd>
              <dd id="login_vcode_hidden" style="display:none;">
                <div class="reg_txt reg_vcode">
                  <input type="text" id="login_vcode" placeholder="图片验证码" />
                  <p class="reg_errtxt" id="login_vcode_msg"></p>
                </div>
                <span id="login_vcodeRegion" class="reg_vcodeimg">
                  <span id="login_img_vcode">
                    <img
                      width="100"
                      height="50"
                      alt="点击更新新图"
                      src
                      style="cursor:pointer;"
                      class="v_m mr6"
                    />
                  </span>
                  <a id="btnlogin_changevcode" class="px12 normal">刷新</a>
                </span>
              </dd>
              <dd>
                <div class="bind_pro">
                  <a id="forget_password" href="#" class="fr">忘记密码</a>
                  <a href="javascript:;" data-login="loginWayChange" class="fl">短信验证码登录</a>
                </div>
              </dd>
              <dd>
                <p class="err_txt" id="login_errtxt"></p>
              </dd>
              <dt class="reg_btn">
                <a id="loginButton" class="btn_blue">登 录</a>
              </dt>
            </dl>
          </form>
          <div id="smsLoginBox" style="display:none;">
            <dl>
              <dd>
                <div class="reg_txt">
                  <input
                    type="text"
                    name="mobile"
                    maxlength="11"
                    id="smsLoginIpt"
                    placeholder="请输入手机号"
                  />
                  <p class="reg_errtxt"></p>
                </div>
              </dd>
              <dd>
                <div class="reg_txt reg_vcode">
                  <input type="text" id="smsImageIpt" placeholder="图片验证码" />
                  <p class="reg_errtxt"></p>
                </div>
                <span class="reg_vcodeimg" id="smsLoginImgvcode">
                  <span>
                    <img
                      width="120"
                      height="60"
                      alt="点击更新新图"
                      src="//service.mtime.com/ValidateCode.ashx?token=201909291840569155&amp;code=190929184056340761&amp;width=120&amp;height=60"
                      style="cursor:pointer"
                      class="v_m mr6"
                    />
                  </span>
                  <a class="px12 normal" data-login="smsImageGet">刷新</a>
                </span>
              </dd>
              <dd>
                <div class="reg_txt">
                  <input type="text" name="sms" id="smsIpt" placeholder="短信验证码" />
                  <p class="reg_errtxt"></p>
                  <a href="javascript:;" class="getsmscode" id="smsGet">获取验证码</a>
                </div>
              </dd>
              <dd>
                <div class="bind_pro">
                  <a href="javacript:;" class="fl">帐号密码登录</a>
                  <i class="fr" style="color:#6f6f6f;">未注册手机验证后自动登录</i>
                </div>
              </dd>
              <dd>
                <p class="err_txt"></p>
              </dd>
              <dt class="reg_btn">
                <a class="btn_blue" id="smsLoginButton">登 录</a>
              </dt>
            </dl>
          </div>
          <dl class="regin_log3 fix">
            <dd>
              <a href="#" class="weixin"></a>
              <a
                href="#"
                class="qq"
              ></a>
              <a
                href="#"
                class="sina"
              ></a>
            </dd>
          </dl>
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
  name: "login",
  components: {
    topbar,
    bottom
  }
};
</script>
<style scoped>
.login {
  background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwP/2wBDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAeAB4DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQr/xAAlEAADAAICAQMFAQEAAAAAAAABAgMREgAhEwQjQRQiMTJRcYH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDr/KCOKU3nVZOFYO1KqdGfaRXM5p13kg/jmhFkbaTBFL+wtLh2KrR9Kq27dA03GP8AM8BiuCTPBY0aYWbTfxemBkm05Kxt5NgwBK4xn+jNEVDFH3rQYQVlTwIMnwr6gsVyKn1PbYGM4yccgFFfC5fYo4dFqyMEAIRmLsQAqAMB3jOf94DUcs9EAwLF/DrMeMlWqs9RUzXDLTO3YHKHnZqM/e+I1AM50V9mdmTTSZG/uL8kAE5/HINaRBmuP2HjGrVVcL5Ed6My4oypqBqemYfw8omqlgrQ+yX5XZ6F2lFHbLTpiY3kVYq2D1/eQO1LB/daBC0VAqshUAGbtkFsrQIw6XKkE/PAlQKV8QGASqFUZXYKPThzRPG+Z4eeCT8Ej5HANUKaLKOUipdtWaWrq7jChy01LoCcgZcD5PAdiRJvtDS0xLZ6pTv0092oZI7l1TPRAGOBsfqAsiFDHzHCeSg90zAxtSS/rPvvrlE3VQx3ohtu2M/UZGVfbULEKWUZxk645BX786TNSpiPqLay8wiFbTCBtTM01/Pf/eB//9k=)
    transparent !important;
}
.regin_out {
    background: #fff;
    width: 1000px;
    margin: 90px auto 45px;
    border-radius: 6px;
    position: relative;
    padding-bottom: 30px;
    min-height: 569px;
}
dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.regin_out .regin_inner {
    padding: 30px 65px;
}
.regin_left {
    float: left;
    width: 380px;
}
.regin_out .regin_inner h5 {
    font-size: 30px;
    line-height: 1em;
    text-align: center;
    padding-bottom: 10px;
    font-weight: 400;
}
.reg_txt {
    position: relative;
    border: 1px solid #aaa;
    zoom: 1;
    height: 49px;
    width: 100%;
    margin-top: 23px;
    border-radius: 4px;
    vertical-align: baseline;
    display: inline-block;
    z-index: 1;
}
dd {
    display: block;
    margin-inline-start: 40px;
}
.reg_txt input {
    background: none;
    height: 21px;
    border: none;
    padding: 14px;
    line-height: 21px;
    font-size: 14px;
    width: 74%;
}
.reg_txt .reg_errtxt {
    width: 345px;
    position: absolute;
    left: -1px;
    top: 50px;
    display: none;
    color: red;
    line-height: 22px;
    padding: 0 15px;
    font-size: 12px;
}
.reg_txt input {
    background: none;
    height: 21px;
    border: none;
    padding: 14px;
    line-height: 21px;
    font-size: 14px;
    width: 311px;
}
.password_box {
    color: #949494;
    position: absolute;
    right: 10px;
    top: 11px;
    font-size: 12px;
}
.password_box i {
    background: #c5c5c5;
    overflow: hidden;
    display: inline-block;
    width: 14px;
    height: 4px;
    margin-right: 3px;
    margin-top: 3px;
}
.password_tog {
    background: url(https://service.mtime.com/ValidateCode.ashx?token=201909292015388466&code=190929201538325824&width=120&height=60) no-repeat 0 0;
    width: 25px;
    height: 17px;
    position: absolute;
    right: 75px;
    top: 50%;
    margin-top: -9px;
    cursor: pointer;
}
dd {
    display: block;
    margin-inline-start: 40px;
}
.reg_vcodeimg img {
    width: 100px;
    height: 50px;
    margin: 0 12px;
}
img {
    background: url(https://static1.mtime.cn/nodewww/2019051313312/images/autoimg.png) center no-repeat #f2f2f2;
    background-size: 50% auto;
    vertical-align: middle;
}
.reg_vcodeimg a {
    color: #0085e5;
}
.px12 {
    font-size: 12px;
}
.get_telcode {
    background: #f6f6f6;
    height: 34px;
    border: 1px solid #b6b6b6;
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 14p;
    line-height: 34px;
    padding: 0 15px;
    color: #333;
    border-radius: 3px;
}
.reg_selsex {
    position: relative;
    zoom: 1;
    font-size: 14px;
    padding-top: 25px;
}
.reg_selsex .checkend {
    color: #333;
}
.reg_selsex .reg_checkbox {
    background: url('../assets/base64.png') no-repeat -30px -231px;
    width: 20px;
    height: 17px;
    position: relative;
    zoom: 1;
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    margin-right: 5px;
}
.reg_selsex .ico_female, .reg_selsex .ico_male {
    background: url('../assets/base64.png') no-repeat -5px -210px;
    width: 16px;
    height: 16px;
    display: inline-block;
    position: relative;
    zoom: 1;
    overflow: hidden;
    vertical-align: middle;
    margin-left: 6px;
    opacity: .8;
    filter: alpha(opacity=80);
}
.reg_selsex .ico_male {
    background-position: -21px -210px;
}
.reg_selsex p {
    position: absolute;
    right: 0;
    top: 25px;
    color: red;
    font-size: 12px;
}
.bind_pro {
    padding-top: 20px;
    font-size: 14px;
}
.bind_pro span.on {
    background-position: -2px 0;
}
.bind_pro span {
    background: url('../assets/base64.png') no-repeat -2px -24px;
    width: 24px;
    height: 24px;
    display: inline-block;
    position: relative;
    zoom: 1;
    overflow: hidden;
    vertical-align: middle;
    margin-right: 6px;
}
.bind_pro a {
    color: #0085e5;
    line-height: 24px;
}
.reg_btn {
    text-align: center;
    padding-top: 35px;
}
.btn_blue, .btn_blue_o {
    background: #0081bc;
    width: 257px;
    height: 53px;
    display: inline-block;
    position: relative;
    zoom: 1;
    overflow: hidden;
    font-size: 20px;
    line-height: 53px;
    border-radius: 27px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
}
a {
    vertical-align: baseline;
    cursor: pointer;
}
.regin_right {
    float: right;
    width: 380px;
}
.regin_out .regin_line {
    background: #dedede;
    background: -webkit-gradient(linear,left top,left bottom,from(#fff),color-stop(10%,#dedede),color-stop(90%,#dedede),to(#fff));
    background: -webkit-linear-gradient(#fff,#dedede 10%,#dedede 90%,#fff);
    background: -o-linear-gradient(#fff 0,#dedede 10%,#dedede 90%,#fff 100%);
    background: linear-gradient(#fff,#dedede 10%,#dedede 90%,#fff);
    width: 1px;
    height: 482px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50px;
}
</style>