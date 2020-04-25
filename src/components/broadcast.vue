<template>
	<section class="yd-flexview">
		<yd-navbar title="多群直播订单" fixed bgcolor="#ff685d" color="#FFF" height=".7rem">
			<router-link to="/home" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</router-link>
		</yd-navbar>
		<yd-cell-group style="margin-top: 1rem;">
			<yd-cell-item>
				<span slot="left">主题名称</span>
				<input v-model="title" slot="right" type="text" placeholder="请输入您的主题名称2-15个字">
			</yd-cell-item>
			<!-- <yd-cell-item type="label" arrow>
				<span slot="left">主题类别</span>
				<select slot="right"  v-model="title">
					<option value="1">产品营销</option>
					<option value="2">医疗健康</option>
					<option value="3">育儿百科</option>
				</select>
			</yd-cell-item> -->
		</yd-cell-group>
		<yd-cell-group title="主题简介">
			<yd-cell-item>
				<yd-textarea  v-model="content" slot="right" placeholder="请输入您的主题简介2-120个字" maxlength="120"></yd-textarea>
			</yd-cell-item>
		</yd-cell-group>
		<yd-cell-group>
			<yd-cell-item>
				<span slot="left">订单类型</span>
				<yd-icon slot="left" name="question" size=".22rem" @click.native="openBdHelp"></yd-icon>
				<span slot="right">
					<yd-radio-group v-model="order_type" color="#ff685d">
						<yd-radio val="1">单次</yd-radio>
						<yd-radio val="2">多次</yd-radio>
						<yd-radio val="3">包月</yd-radio>
					</yd-radio-group>
				</span>
			</yd-cell-item>
			<yd-cell-item>
				<span slot="left">直播日期</span>
				<span slot="right">
					<yd-radio-group v-model="order_type_date" color="#ff685d" v-if="order_type == 1">
						<yd-radio val="今天"></yd-radio>
						<yd-radio val="明天"></yd-radio>
						<yd-radio val="后天"></yd-radio>
					</yd-radio-group>
					<div class="" v-if="order_type == 2" class="time-list">
						<div class="sel-time" v-for="item in time_list">{{item}}
							<yd-icon name="error" size=".3rem" color="#ff685d"></yd-icon>
						</div>
						<!-- <yd-datetime type="date" v-model="datetime4" slot="right"></yd-datetime> -->
						<datetimePicker v-on:getTimestamp="getTimestamp">选择时间</datetimePicker>
					</div>
					<div class="sel-time" v-if="order_type == 3">{{now_date}} - {{next_month}}</div>
				</span>
			</yd-cell-item>
			<yd-cell-item>
				<span slot="left">微信账号</span>
				<yd-icon slot="left" name="question" size=".22rem" @click.native="pop_wx_tips = true"></yd-icon>
				<input slot="right" v-model="wechatNo"  type="text" placeholder="请输入您的微信账号">
			</yd-cell-item>
			<yd-cell-item>
				<span slot="left">手机号</span>
				<yd-icon slot="left" name="question" size=".22rem" @click.native="pop_wx_tips = true"></yd-icon>
				<input slot="right" v-model="phone"  type="number" placeholder="请输入您的手机号">
			</yd-cell-item>
			<yd-cell-item>
				<span slot="left">群招呼语</span>
				<input slot="right" v-model="welcomes"  type="text" placeholder="请输入小助手进群后的招呼语2-20个字">
			</yd-cell-item>
			<yd-cell-item>
				<span slot="left">群昵称 &nbsp;&nbsp;&nbsp;</span>
				<input slot="right" v-model="nickName" type="text" placeholder="暂不支持特殊字符,下单后不可修改">
			</yd-cell-item>
		</yd-cell-group>
		<div style="height: .8rem;"></div>
		<yd-tabbar fixed bgcolor="#f5f5f5">
			<yd-button style="width: 80%;margin: .2rem auto;" size="small" shape="circle" bgcolor="#ff685d" color="#FFF" @click.native="creatOrder">
				<!-- <router-link to="/order-details"> -->
				下一步
			<!-- </router-link> -->
			</yd-button>
		</yd-tabbar>
		</div>

		<yd-popup v-model="pop_wx_tips" position="center" width="90%">
			<div class="pop-wx-tips" style="background-color:#fff;">
				<p>
					您的微信账号，不是您的微信昵称。请在微信中”我“的栏目中查看。
				</p>
				<br />
				<!-- <br /> -->
				<p>示例：</p>
				<div class="wx-exp">
					<img src="../assets/logo.png">
					<div class="wx-exp-msg">
						<h3>易聊客</h3>
						<p>微信号:wechat123456</p>
					</div>
				</div>
				<p style="text-align: center;">
					<yd-button style="width: 5rem;" size="small" shape="circle" bgcolor="#ff685d" color="#FFF" @click.native="pop_wx_tips = false">我知道了</yd-button>
				</p>
			</div>
		</yd-popup>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				pop_wx_tips: false,
				order_type: 1,
				order_type_date: '今天',
				now_date: '',
				next_month: '',

				time_list: [],

				nickName:'',//群昵称
				welcomes:'',//群招呼与
				phone:'',//手机号
				wechatNo:'',//微信号
				content:'',//描述 
				title:'',//主题
			}
		},
		created() {
			
			
			// if(localStorage.getItem('token') == null){
			// 	// this.common.setToken()
			// 	this.common.wxLogin()
			// 	console.log(sessionStorage.getItem("code_imp"))
			// }
			var date = new Date()
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var strDate = date.getDate();
			if (month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if (strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			this.now_date = year + '-' + month + '-' + strDate
			this.next_month = this.getNextMonth(this.now_date)

			

		},
		methods: {
			openBdHelp() {
				this.$dialog.confirm({
					title: '帮助',
					mes: '订单类型帮助！',
					opts: [{
						txt: '我知道了',
						color: true,
						callback: () => {
							this.$dialog.toast({
								mes: '你点了确定',
								timeout: 1000
							});
						}
					}]
				});
			},
			getTimestamp(stamp) {
				this.time_list.push(stamp)
				console.log(this.time_list)
			},
			getNextMonth(date) {
				var arr = date.split('-');
				var year = arr[0]; //获取当前日期的年份  
				var month = arr[1]; //获取当前日期的月份  
				var day = arr[2]; //获取当前日期的日  
				var days = new Date(year, month, 0);
				days = days.getDate(); //获取当前日期中的月的天数  
				var year2 = year;
				var month2 = parseInt(month) + 1;
				if (month2 == 13) {
					year2 = parseInt(year2) + 1;
					month2 = 1;
				}
				var day2 = day;
				var days2 = new Date(year2, month2, 0);
				days2 = days2.getDate();
				if (day2 > days2) {
					day2 = days2;
				}
				if (month2 < 10) {
					month2 = '0' + month2;
				}

				var t2 = year2 + '-' + month2 + '-' + day2;
				return t2;
			},
			creatOrder(){
				
				var _this = this
				var up_data = {
					access_token: localStorage.getItem('token'),
					title: this.title,
					content: this.content,
					wechatNo: this.wechatNo,
					welcomes: this.welcomes,
					type: this.order_type,
					phone: this.phone,
					times: '["2020-11-21"]',
					orderId: 2,
				}
				
				var re_data = this.common.apiPost(this,'api/order!createOrder.do', up_data)
				if(re_data.success == true){
					alert(' 创建成功')
					var content = JSON.stringify(re_data.content)
					localStorage.setItem('order_msg', content)
					this.$router.push('/order-details')

				}else{
					this.$dialog.toast({
						mes: re_data.content,
						timeout: 1500
					});
				}
				console.log(re_data.success)
				console.log(re_data)
			}
		},
		updated() {
			// var u = navigator.userAgent, app = navigator.appVersion
			// var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			$(document).ready(function() {
				$(".input").blur(function() {
					// if (isIOS) {
					blurAdjust()
					// alert("1231321233")
					// }


				});
			});
			// 解决苹果不回弹页面
			function blurAdjust(e) {
				setTimeout(() => {
					if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
						return
					}
					let result = 'pc';
					if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
						result = 'ios'
					} else if (/(Android)/i.test(navigator.userAgent)) { //判断Android
						result = 'android'
					}

					if (result = 'ios') {
						document.activeElement.scrollIntoViewIfNeeded(true);
					}
				}, 100)
			}

		},
	}
</script>

<style>
	.yd-cell {
		margin: 0.2rem 0.2rem;
		;
	}

	.yd-cell-left {
		margin-right: .2rem;
	}

	.yd-radio-text {
		vertical-align: text-top;
	}

	.pop-wx-tips {
		background: #FFF;
		padding: .4rem;
	}

	.pop-wx-tips p {
		font-size: .28rem;
		text-align: left;
		line-height: .42rem;
	}

	.wx-exp {
		text-align: left;
		margin-bottom: .4rem;
	}

	.wx-exp img {
		width: 1.4rem;
		display: inline-block;
		margin-left: 0;
	}

	.wx-exp .wx-exp-msg {
		display: inline-block;
		vertical-align: top;
		margin-top: .2rem;
		margin-left: .2rem;
	}

	.wx-exp .wx-exp-msg h3 {
		font-size: .32rem;
		font-weight: bold;
		margin-bottom: .2rem;
	}

	.time-list {
		width: 3.8rem;
		text-align: right;
	}

	.sel-time {
		padding: .1rem 0.2rem;
		background-color: #ff685d;
		color: #FFF;
		display: inline-block;
		margin: .1rem 0 0.1rem 0.15rem;
		border-radius: 10px;
		position: relative;
	}

	.time-list .sel-time .yd-icon-error {
		position: absolute;
		top: -0.2rem;
		right: -.2rem;
		margin: .1rem;
		border-radius: 90px;
		background-color: #FFF;
	}

	.datatime-picker-wrap {
		padding: .1rem .2rem;
		background-color: #fda626;
		text-align: center;
		display: block;
		width: 2rem;
		color: #FFF;
		border-radius: 45px;
		margin-top: .1rem;
		float: right;
	}
</style>
