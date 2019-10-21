<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: "app",
  data:function(){
    return {
arr:[]
    }
  },
  mounted () {
    this.$router.push('./homeView');
    
   /* this.axios.get("http://localhost:8888/vuedata").then((res)=>{
     this.arr=res.data;
   })  */
  }
};
</script>

<style>
*{
  padding: 0;
  margin: 0 auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
      font: 12px/150% helvetica,"微软雅黑","microsoft yahei",verdana,lucida,arial,sans-serif,"黑体";
    color: #333;
}
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: #333;
}

body{
  height: 100vh;
  width: 100%;
}
ul li{
  list-style: none;
}
input,button,select,textarea{outline:none}
a:hover{
    color: #0088cc;
}
</style>
