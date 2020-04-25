<template>
  <div id="app">
    <!-- <Home msg="Welcome to Your Mand Mobile App !"/> -->
	<router-view/>
	
  </div>
</template>

<script>
// @ is an alias to /src
// import Home from "@/components/home.vue";

export default {
  name: "app",
  data () {
      return {
		  bot_bar : true,
	  }
	},
  // components: {
  //   Home
  // }

};
</script>

<style lang="stylus">
// @import url('./assets/common.styl');
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  width: 100%;
  top: 0;
  position: absolute;
}
.yd-alert .yd-confirm-bd {
    text-align: center;
    padding: .6rem .6rem 0 !important;
}
.yd-alert .yd-confirm-ft {
    margin-top: 0.42rem !important;
}
.yd-confirm-ft>a{
	line-height: .8rem;
}
.yd-confirm-hd {
    text-align: left;
    padding: .45rem 0.6rem 0.15rem !important;
	font-size: .32rem;
}
.yd-confirm .yd-confirm-bd {
    text-align: left;
    padding: 0 .6rem;
    font-size: 0.24rem;
    color: #888;
    line-height: .6rem;
    word-break: break-all;
}
.yd-datetime-content{
	height: 5.32rem !important;
}
.yd-datetime-item-content>span{
	height: .76rem !important;
	line-height: .76rem !important;
}
.yd-datetime-item{
	font-size: .32rem !important;
}
.yd-datetime-shade{
    background-size: 100% 228px !important;
}
.yd-cell-item:not(:last-child):after{
	height: 0 !important;
}
.yd-cell-title:after{
	height: 0 !important;
}
.yd-tabbar:after{
	height: 0 !important;
}
</style>
