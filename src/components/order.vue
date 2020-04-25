<template>
	<section class="yd-flexview" style="    padding: 0 0 1rem;">
		<yd-search v-model="value1" :on-submit="submitHandler"></yd-search>
		<div class="bg-round shadow">
			<div class="bg-left">
				<yd-icon name="ucenter" slot="icon" size="1rem"></yd-icon>
				<br /> 多群直播
			</div>
			<hr >
			<div class="bg-right">
				<h3 class="ellipsis-1">恐龙的灭亡</h3>
				<p class="p-dai">待付款</p>
				<hr />
				<div class="bg-right-m">
					<p>已拉群数：0 &nbsp;&nbsp;&nbsp;&nbsp; 总群数: 2 <br />主讲群： 三年二班 <br />
						主讲师： (⊙﹏⊙)<br />直播时间:2019-12-18<br />
					</p>
					<div class="bg-r-m-r">
						<h4>￥40.0</h4>
						<yd-button size="mini" bgcolor="#ff685d" color="#fff">立即支付</yd-button>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-round shadow">
			<div class="bg-left">
				<yd-icon name="verifycode" slot="icon" size="1rem"></yd-icon>
				<br /> 包月直播
			</div>
			<hr >
			<div class="bg-right">
				<h3 class="ellipsis-1">恐龙的灭亡</h3>
				<p class="p-dai">直播中</p>
				<hr />
				<div class="bg-right-m">
					<p>已拉群数：0 &nbsp;&nbsp;&nbsp;&nbsp; 总群数: 2 <br />
						主讲群： <select slot="right">
									<option value="">三年二班</option>
									<option value="1">三年二班</option>
									<option value="2">三年二班</option>
									<option value="3">三年二班</option>
								</select><br />
						主讲师： <select slot="right">
									<option value="">(⊙﹏⊙)</option>
									<option value="1">O(∩_∩)O哈哈~</option>
								</select><br />直播时间:2019-12-18-2019-12-28<br />
					</p>
					<div class="bg-r-m-r">
						<h4>￥40.0</h4>
						<router-link to="/set-group">
							<yd-button size="mini" bgcolor="#ff685d" color="#fff" >拉群设置</yd-button>				
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-round shadow">
			<div class="bg-left">
				<yd-icon name="ucenter" slot="icon" size="1rem"></yd-icon>
				<br /> <div><span>多群重播</span>  <yd-icon name="refresh" slot="icon" size=".3rem" style="margin: 0;"></yd-icon></div> 
			</div>
			<hr >
			<div class="bg-right">
				<h3 class="ellipsis-1">恐龙的灭亡</h3>
				<p class="p-dai" style="color: #000;">已完成</p>
				<hr />
				<div class="bg-right-m">
					<p>已拉群数：0 &nbsp;&nbsp;&nbsp;&nbsp; 总群数: 2 <br />主讲群： 三年二班 <br />
						主讲师： (⊙﹏⊙)<br />直播时间:2019-12-18<br />
					</p>
					<div class="bg-r-m-r">
						<h4 style="color: #000;">￥120.0</h4>
						<img src="../assets/img/img-complete.png" >
						<!-- <yd-button size="mini" bgcolor="#ff685d" color="#fff">立即支付</yd-button> -->
					</div>
				</div>
			</div>
		</div>
		<div class="bg-round shadow">
			<div class="bg-left">
				<yd-icon name="ucenter" slot="icon" size="1rem"></yd-icon>
				<br /> 多群直播
			</div>
			<hr >
			<div class="bg-right">
				<h3 class="ellipsis-1">恐龙的灭亡</h3>
				<p class="p-dai">待付款</p>
				<hr />
				<div class="bg-right-m">
					<p>已拉群数：0 &nbsp;&nbsp;&nbsp;&nbsp; 总群数: 2 <br />主讲群： 三年二班 <br />
						主讲师： (⊙﹏⊙)<br />直播时间:2019-12-18<br />
					</p>
					<div class="bg-r-m-r">
						<h4>￥40.0</h4>
						<yd-button size="mini" bgcolor="#ff685d" color="#fff">立即支付</yd-button>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-round shadow">
			<div class="bg-left">
				<yd-icon name="verifycode" slot="icon" size="1rem"></yd-icon>
				<br /> 包月直播
			</div>
			<hr >
			<div class="bg-right">
				<h3 class="ellipsis-1">恐龙的灭亡</h3>
				<p class="p-dai">直播中</p>
				<hr />
				<div class="bg-right-m">
					<p>已拉群数：0 &nbsp;&nbsp;&nbsp;&nbsp; 总群数: 2 <br />
						主讲群： <select slot="right">
									<option value="">三年二班</option>
									<option value="1">三年二班</option>
									<option value="2">三年二班</option>
									<option value="3">三年二班</option>
								</select><br />
						主讲师： <select slot="right">
									<option value="">(⊙﹏⊙)</option>
									<option value="1">O(∩_∩)O哈哈~</option>
								</select><br />直播时间:2019-12-18-2019-12-28<br />
					</p>
					<div class="bg-r-m-r">
						<h4>￥40.0</h4>
						<router-link to="/set-group">
							<yd-button size="mini" bgcolor="#ff685d" color="#fff" >拉群设置</yd-button>				
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-round shadow">
			<div class="bg-left">
				<yd-icon name="ucenter" slot="icon" size="1rem"></yd-icon>
				<br /> <div><span>多群重播</span>  <yd-icon name="refresh" slot="icon" size=".3rem" style="margin: 0;"></yd-icon></div> 
			</div>
			<hr >
			<div class="bg-right">
				<h3 class="ellipsis-1">恐龙的灭亡</h3>
				<p class="p-dai" style="color: #000;">已完成</p>
				<hr />
				<div class="bg-right-m">
					<p>已拉群数：0 &nbsp;&nbsp;&nbsp;&nbsp; 总群数: 2 <br />主讲群： 三年二班 <br />
						主讲师： (⊙﹏⊙)<br />直播时间:2019-12-18<br />
					</p>
					<div class="bg-r-m-r">
						<h4 style="color: #000;">￥120.0</h4>
						<img src="../assets/img/img-complete.png" >
						<!-- <yd-button size="mini" bgcolor="#ff685d" color="#fff">立即支付</yd-button> -->
					</div>
				</div>
			</div>
		</div>
		<yd-tabbar fixed active-color="#ff685d" >
		  <yd-tabbar-item title="首页" link="home" >
			<yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		  <yd-tabbar-item title="课程" link="course" >
			<yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		  <yd-tabbar-item title="订单" link="order" active>
			<yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		  <yd-tabbar-item title="我的" link="personal-info">
			<yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		</yd-tabbar>
		
	</section>
</template>

<script>
export default {
	data() {
		return {
			value1: ''
		}
	},
	methods: {
		submitHandler(value) {
			this.$dialog.toast({mes: `搜索：${value}`});
		}
	}
}
</script>

<style scoped>
.bg-round{
	margin: .25rem ;
	background: #FFF;
	height: 3rem;
	border-radius: 15px;
	display: flex;
	position: relative;
}
/* .bg-round:nth-child(odd){
	background: #E6E6E6;
} */
.bg-round .bg-left{
	align-items: center;
	/* display: flex; */
	margin-top: .7rem;
}
.bg-round .bg-left i{
	margin: .3rem;
	color: rgb(255, 104, 93);
}
.bg-round>hr{
	height: 72%;
	margin-top: 7%;
}
.bg-round .bg-right{
	margin: .3rem;
	text-align: left;
	font-size:.28rem;
	line-height: .4rem;
	margin-top: .46rem;
	width: 90%
}	
.bg-round .bg-right>h3{
	width: 3rem;
    text-align: center;
    font-size: .32rem;
    margin-left: .4rem;
}
.bg-round .bg-right p.p-dai{
	color: rgb(255, 104, 93);
	float: right;
}
.bg-round .bg-right .bg-right-m{
	margin-top: .12rem;
	display: flex;
	justify-content: space-around;
	position: relative;
}
.bg-round .bg-right .bg-right-m>p{
	width: 3.6rem;
	font-size: .24rem;
	position: absolute;
	left: 0;
}
.bg-round .bg-right .bg-right-m .bg-r-m-r{
	position: absolute;
	right: 0;
}
.bg-round .bg-right .bg-right-m .bg-r-m-r h4{
	color: rgb(255, 104, 93);
	font-size: .46rem;
	margin-top: .1rem;
}
.bg-round .bg-right .bg-right-m .bg-r-m-r button{
	margin: .2rem auto;
	float: right;
}
.bg-round .bg-right .bg-right-m .bg-r-m-r>img{
	position: absolute;
	width: 1.6rem;
	top: 0;
	opacity: .4;
}
.shadow {
    position: relative;
    box-shadow: 0px 1px 4px rgba(0,0,0,0.3),
                0px 0px 20px rgba(0,0,0,0.1) inset;
}
.shadow::before,
.shadow::after {
   content:"";
   position:absolute;
   z-index:-1;
}
.shadow::before,
.shadow::after {
   content:"";
   position:absolute;
   z-index:-1;
   bottom:15px;
   left:10px;
   width:50%;
   height:20%;
}
.shadow::before,
.shadow::after {
   content:"";
   position:absolute;
   z-index:-1;
   bottom:15px;
   left:10px;
   width:50%;
   height:20%;
   box-shadow:0 15px 10px rgba(0, 0, 0, 0.7);
   transform:rotate(-3deg);
}
.shadow::after{
   right:10px;
   left:auto;
   transform:rotate(3deg);
 }
.ellipsis-1 {
     overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-inline-box;
     -webkit-line-clamp: 1;
     -webkit-box-orient: vertical;
 }
</style>
