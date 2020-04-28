<template>
	<section class="yd-flexview" style="    padding: 0 0 1rem;">
		<div class="info-bg">
			<img src="../assets/img/info-bg.png" >
			<div class="info-main">
				<img class="avatar" src="http://vue.ydui.org/img/3.jpg">
				<p >ID:123567 <br />昵称:一只小团团</p>
			</div>
		</div>
		<yd-cell-group style="margin-top: .4rem;">
			<yd-cell-item arrow type="link" href="person-wallet">
				<!-- <yd-icon slot="icon" name="order" size=".42rem"></yd-icon> -->
				<!-- <span slot="left" type="link" href="#"><router-link to="/person-wallet">个人钱包</router-link></span> -->
				<span slot="left" >个人钱包</span>
				<span slot="right">4396.00</span>
			</yd-cell-item>
	
			<yd-cell-item arrow>
				<!-- <img slot="icon" src="path/img/logo.png"> -->
				<span slot="left">我的收藏</span>
				<span slot="right"></span>
			</yd-cell-item>
			<yd-cell-item arrow>
				<span slot="left">收听记录</span>
				<span slot="right"></span>
			</yd-cell-item>
			<yd-cell-item arrow>
				<span slot="left">收听记录</span>
				<span slot="right"></span>
			</yd-cell-item>
			<!-- <yd-cell-item arrow>
				<span slot="left">使用教程</span>
				<span slot="right"></span>
			</yd-cell-item> -->
			<yd-cell-item arrow>
				<span slot="left">用户须知</span>
				<span slot="right"></span>
			</yd-cell-item>
			<yd-cell-item arrow>
				<span slot="left">联系客服</span>
				<span slot="right"></span>
			</yd-cell-item>
		</yd-cell-group>
		
		<yd-tabbar fixed active-color="#ff685d" >
		  <yd-tabbar-item title="首页" link="home" >
			<yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		  <yd-tabbar-item title="课程" link="course" >
			<yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		  <yd-tabbar-item title="订单" link="order">
			<yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		  <yd-tabbar-item title="我的" link="personal-info" active>
			<yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		</yd-tabbar>
		
	</section>
</template>

<script>
</script>

<style>
.info-bg{
	position: relative;
}
.info-bg>img{
	width: 100%;
}
.info-bg .info-main{
	position: absolute;
	top: .6rem;
	left: .6rem;
}
.info-main .avatar{
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 45px;
}
.info-main>p{
	display: inline-block;
	margin-top: .2rem;
	margin-left: .6rem;
	vertical-align: top;
	text-align: left;
	line-height: .56rem;
	font-size: .32rem;
	color: #FFF;
}
</style>
