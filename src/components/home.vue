<template>
	<section class="yd-flexview" style="    padding: 0.8rem 0.2rem 0.5rem;">
		<yd-navbar title="易聊客" fixed bgcolor="#ff685d" color="#FFF" height=".7rem">
			<!-- <router-link to="#" slot="left">
        <yd-navbar-back-icon>返回</yd-navbar-back-icon>
      </router-link> -->
		</yd-navbar>
		<yd-slider autoplay="3000">
			<yd-slider-item>
				<a >
					<img src="http://vue.ydui.org/img/1.jpg">
				</a>
			</yd-slider-item>
			<yd-slider-item>
				<a >
					<img src="http://vue.ydui.org/img/2.jpg">
				</a>
			</yd-slider-item>
			<yd-slider-item>
				<a >
					<img src="http://vue.ydui.org/img/3.jpg">
				</a>
			</yd-slider-item>
		</yd-slider>
		<div class="md-cg">
			<div class="cg-category">
				<router-link to="/broadcast">
					<div class="cg-category-title">
						<yd-icon name="home-outline" size=".6rem" color="#FF685D"></yd-icon>&nbsp;&nbsp;<span>多群直播</span> <i class="md-icon icon-font md-icon-arrow-right arrow-right md"></i>
					</div>
				</router-link>
			</div>
			<div class="cg-category">
				<router-link to="/record">
					<div class="cg-category-title">
						<yd-icon name="order" size=".6rem" color="#FF685D"></yd-icon>&nbsp;&nbsp;<span>课程录制</span> <i class="md-icon icon-font md-icon-arrow-right arrow-right md"></i>
					</div>
				</router-link>
			</div>
			<div class="cg-category">
				<router-link to="/broadcast">
					<div class="cg-category-title">
						<yd-icon name="setting" size=".6rem" color="#FF685D"></yd-icon>&nbsp;&nbsp;<span>工具箱</span> <i class="md-icon icon-font md-icon-arrow-right arrow-right md"></i>
					</div>
				</router-link>
			</div>
		</div>
		<p style="text-align: right;margin: .2rem;" @click="openAlert">使用规则</p>
		<yd-tabbar fixed active-color="#ff685d" >
		  <yd-tabbar-item title="首页" link="#" active>
			<yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
		  </yd-tabbar-item>
		  <yd-tabbar-item title="课程" link="course">
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
		name: "home",
		data() {
			return {
				picked: 'Lucy'
			}
		},
		props: {
			// msg: String
		},
		
		created() {
			// if(localStorage.getItem('token') == null){
				
				this.common.setToken()
				// this.common.wxLogin(this)
				console.log(sessionStorage.getItem("code_imp"))
			// }
			
			var up_data = {
				// access_token: JSON.parse(localStorage.getItem('user_token')).access_token,
				access_token: 'a2@eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxQDFAMkAxNTg0MTkwMTY2NjA0In0.VdsuY0_VG4tfk7Yo9OlWWDfLlENzp3qreSxk2UtRV6b6FbnAHd1oxpED8UmD4aFyeVc_1_RGiOBLSF1VxYraSg',
			}
			
			var re_data = this.common.apiPost(this,'api/finance!getFinanceAccount.do', up_data)
			if(re_data.success == true){
				console.log(re_data)
			}else{
				this.$dialog.toast({
					mes: re_data.content,
					timeout: 1500
				});
			}
			
		},
		methods: {
			openAlert() {
				this.$dialog.alert({mes: '详细规则！'});
			},
		}
	}
</script>

<style scoped>
	.md-cg {
		margin-top: 0.266666rem;
	}

	.md-cg .cg-category {
		float: left;
		width: 100%;
		position: relative;
		z-index: 3;
		height: 1.2rem;
		margin-bottom: 0.2rem;
		border-radius: 0.02rem;
		-webkit-transform: translate(0);
		transform: translate(0);
	}

	.md-cg .cg-category .cg-category-title {
		position: relative;
		z-index: 2;
		float: left;
		width: 100%;
		height: 1.2rem;
		padding: 0 0.32rem;
		line-height: 1.2rem;
		font-size: 0.44rem;
		font-family: DINAlternate-Bold;
		color: #111a34;
		box-sizing: border-box;
		box-shadow: 0 0.02rem 0.04rem rgba(0, 0, 0, .08);
		background: #f9fafb;
		overflow: hidden;
		text-align: left;
	}

	.md-cg .cg-category:first-of-type .cg-category-title:before {
		background: #5e83dd;
	}

	.md-cg .cg-category .cg-category-title:before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 0.04rem;
		height: 100%;
		border-radius: 0.02rem;
	}

	.md-cg .cg-category .cg-category-title span {
		font-size: 0.28rem;
		color: #666f83;
	}

	.md-cg .cg-category:nth-of-type(2) .cg-category-title:before {
		background: #83d23a;
	}

	.md-cg .cg-category:nth-of-type(3) .cg-category-title:before {
		background: #ff7a2e;
	}

</style>
