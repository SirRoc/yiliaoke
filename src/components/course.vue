<template>
	<section class="yd-flexview" style="    padding: 0 0 1rem;">
		<yd-search v-model="value1" :on-submit="submitHandler"></yd-search>
		<div class="bg-round shadow">
			<div class="bg-left">
				<yd-icon name="video" slot="icon" size="1rem"></yd-icon>
			</div>
			<hr >
			<div class="bg-right">
				<h3>标题：地球的演变</h3>
				<p>讲师:qqq<br />来源:直播记录<br />时间:2019-12-18<br /></p>
			</div>
			<router-link :to="{ name: 'order_details'}">
				<div class="bg-last">
					<yd-icon name="tencent-weibo" color="#31a5ab" slot="icon" size=".8rem"></yd-icon>
					<p>群重播</p>				
				</div>
			</router-link>
			<yd-icon name="setting" slot="icon" size=".4rem" class="btn-set"></yd-icon>
		</div>
		<div class="bg-round shadow">
			<div class="bg-left">
				<yd-icon name="phone2" slot="icon" size="1rem"></yd-icon>
			</div>
			<hr >
			<div class="bg-right">
				<h3>标题：地球的演变</h3>
				<p>讲师:qqq<br />来源:网页录制<br />时间:2019-12-18<br /></p>
			</div>
			<div class="bg-last">
				<yd-icon name="tencent-weibo" color="#31a5ab" slot="icon" size=".8rem"></yd-icon>
				<p>群重播</p>
			</div>
			<yd-icon name="setting" slot="icon" size=".4rem" class="btn-set"></yd-icon>
		</div>
		<div class="bg-round shadow">
			<div class="bg-left">
				<yd-icon name="video" slot="icon" size="1rem"></yd-icon>
			</div>
			<hr >
			<div class="bg-right">
				<h3>标题：地球的演变</h3>
				<p>讲师:qqq<br />来源:直播记录<br />时间:2019-12-18<br /></p>
			</div>
			<div class="bg-last">
				<yd-icon name="tencent-weibo" color="#31a5ab" slot="icon" size=".8rem"></yd-icon>
				<p>群重播</p>
			</div>
			<yd-icon name="setting" slot="icon" size=".4rem" class="btn-set"></yd-icon>
		</div>
		<yd-tabbar fixed active-color="#ff685d" >
		  <yd-tabbar-item title="首页" link="home" >
			<yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		  <yd-tabbar-item title="课程" link="course" active>
			<yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		  <yd-tabbar-item title="订单" link="order">
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
	height: 2.5rem;
	border-radius: 15px;
	display: flex;
	position: relative;
}
/* .bg-round:nth-child(odd){
	background: #E6E6E6;
} */
.bg-round .bg-left{
	align-items: center;
	display: flex;
}
.bg-round .bg-left i{
	margin: .3rem;
	color: rgb(255, 104, 93);
}
.bg-round hr{
	height: 70%;
	margin-top: 6%;
}
.bg-round .bg-right{
	margin: .3rem 0 0 .3rem;
	text-align: left;
	font-size:.28rem;
	line-height: .4rem;
	margin-top: .46rem;
	width: 3.4rem
}	
.bg-round .bg-right h3{
	font-size:.32rem
}
.bg-round .bg-last{
	margin-top: .56rem;
}
.bg-round .btn-set{
	position: absolute;
	right: .2rem;
	bottom: .2rem;
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
</style>
