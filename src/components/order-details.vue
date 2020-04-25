<template>
	<section class="yd-flexview">
		<yd-navbar title="订单详情" fixed bgcolor="#ff685d" color="#FFF" height=".7rem">
			<a href="javascript:history.go(-1)" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</a>
		</yd-navbar>
		<yd-cell-group style="margin-top: 1rem;">
			<yd-cell-item>
				<span slot="left">主题名称</span>
				<span slot="right" v-text="order_msg.title"></span>
			</yd-cell-item>
			<yd-cell-item>
				<span slot="left">直播日期</span>
				<span slot="right" v-text="order_msg.timeRange">直播日期</span>
			</yd-cell-item>
			<yd-cell-item>
				<span slot="left">直播群数</span>
				<span slot="right">
					<yd-spinner max="75" min="2" v-model="group_num"></yd-spinner>
				</span>
			</yd-cell-item>
			<yd-cell-item>
				<span slot="left">费用合计</span>
				<span slot="right" style="color: red;">{{group_num}} X {{group_price}}=￥{{group_num*group_price}}</span>
			</yd-cell-item>
			<yd-cell-item>
				<span slot="left">
					<yd-icon slot="left" color="#ff685d" name="tencent-weibo" size=".42rem"></yd-icon>
				</span>
				<span slot="right">收费标准</span>
			</yd-cell-item>

		</yd-cell-group>
		<yd-cell-group title="支付方式">
			<yd-cell-item type="radio">
				<input slot="right" type="radio" value="true" v-model="pay_ways" />
				<span slot="left" style="width: 6rem;text-align: left;">
					余额支付 <span style="font-size: .18rem;color: #999;">可用余额{{balance}}元</span>
					<span @click="show_rag = true" class="recharge-btn">立即充值</span>
				</span>
			</yd-cell-item>
			<yd-cell-item type="radio">
				<input slot="right" type="radio" value="false" v-model="pay_ways" />
				<span slot="left">微信支付 <span style="font-size: .18rem;color: #999;">微信付款</span></span>
			</yd-cell-item>
			<!-- <yd-cell-item type="radio">
				<input slot="right" type="radio" value="3" v-model="pay_ways"/>
				<span slot="left">朋友代付 <span style="font-size: .18rem;color: #999;">邀请朋友付款</span></span>
			</yd-cell-item> -->
		</yd-cell-group>
		<div style="height: .8rem;"></div>
		<div class="bot-nav">
			<div slot="left">合计：￥ {{group_num*group_price}}</div>
			<div slot="right" @click="payFor">去支付<i></i></div>
		</div>
		</div>
		<yd-popup v-model="show_rag" position="right" width="100%">
			<yd-navbar title="充值中心" fixed bgcolor="#ff685d" color="#FFF" height=".7rem">
				<a @click="show_rag = false" slot="left">
					<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
				</a>
			</yd-navbar>
			<div class="yh-title">
				<img src="../assets/img/yh-m1.png" /> 优惠充值方案
			</div>
			<div class="yh-block">
				<yd-cell-group>

					<yd-cell-item type="radio" v-for="item in yh_msg">
						<span slot="left">{{item.name}}<span class="yhfa-msg">{{item.memo}}</span></span>
						<input slot="right" type="radio" value="1" v-model="yh_picked" />
					</yd-cell-item>
					<!-- <yd-cell-item type="radio">
						<span slot="left">优惠方案二<span class="yhfa-msg">充值1000元送300元</span></span>
						<input slot="right" type="radio" value="2" v-model="yh_picked" />
					</yd-cell-item> -->
				</yd-cell-group>
			</div>
			<div class="yh-title" style="margin-top: .6rem;">
				<img src="../assets/img/yh-m2.png" /> 自定义充值
			</div>
			<!-- <div class="yh-block">
				<yd-cell-group>
					<yd-cell-item type="radio">
						<span slot="left"><input class="price-input" type="number" placeholder="请输入充值金额" />元 </span>
						<input slot="right" type="radio" value="5" v-model="yh_picked" />
					</yd-cell-item>
				</yd-cell-group>
			</div> -->
			<yd-button style="width: 60%;margin: .8rem auto .4rem;" size="large" shape="circle" bgcolor="#ff685d" color="#FFF"
			 @click.native="wxPayFor">
				立即充值
			</yd-button>
			<p>备注：充值金额及赠送金额不可提现。</p>
		</yd-popup>
	</section>
</template>

<script>
	import wx from "weixin-js-sdk";
	export default {
		data() {
			return {
				show_rag: false, //充值页面
				group_price: 20, //直播群单价
				group_num: 2, //直播群数
				pay_ways: true, //支付方式-是否使用余额支付

				balance: 500, //余额
				yh_picked: 1, //优惠方案

				order_msg: '', //订单信息

				yh_msg: [], //优惠信息
			}
		},
		created() {			
			if(this.$route.query.show_rag != undefined){
				if(this.$route.query.show_rag == 1){
					this.show_rag = true
				}else{
					this.show_rag = false
				}
			}
			
			this.order_msg = JSON.parse(localStorage.getItem('order_msg'))
			console.log(this.order_msg)

			var up_data = {
				access_token: localStorage.getItem('token'),
			}

			var re_data = this.common.apiPost(this, 'api/finance!queryRechargePromotional.do', up_data)
			if (re_data.success == true) {
				this.yh_msg = re_data.content
				console.log(re_data)
				// this.robot_list = re_data.content
			} else {
				this.$dialog.toast({
					mes: re_data.content,
					timeout: 1500
				});
			}
		},
		methods: {
			wxPayFor() { //立即充值按钮
				var _this = this
				var up_data = {
					access_token: localStorage.getItem('token'),
					promotionalId: 2,
				}

				var re_data = this.common.apiPost(this, 'api/finance!recharge.do', up_data)
				if (re_data.success == true) {
					let data = JSON.parse(re_data.content)
					if (typeof WeixinJSBridge == "undefined") {
						if (document.addEventListener) {
							document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
						} else if (document.attachEvent) {
							document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
							document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
						}
					} else {
						_this.onBridgeReady(data);
						// _this.checkWxPay()
					}

					// this.robot_list = re_data.content
				} else {
					this.$dialog.toast({
						mes: re_data.content,
						timeout: 1500
					});
				}
			},
			onBridgeReady(pay_params) { //拉起微信支付
				var _this = this
				WeixinJSBridge.invoke(
					'getBrandWCPayRequest', {
						"appId": pay_params.appId, //公众号名称，由商户传入     
						"timeStamp": pay_params.timeStamps, //时间戳，自1970年以来的秒数     
						"nonceStr": pay_params.nonceStr, //随机串     
						"package": pay_params.packages,
						"signType": pay_params.signType, //微信签名方式：     
						"paySign": pay_params.paySign //微信签名 
					},
					function(res) {
						WeixinJSBridge.log(res.err_msg);
						if (res.err_msg == "get_brand_wcpay_request:ok") {
							alert("充值成功！")
							//  if(_this.sign_data.audit == 0){
							// _this.pop_sign_success = true
							//  }else if(_this.sign_data.audit == 1){
							// _this.pop_sign_wait = true
							//  }
							// 使用以上方式判断前端返回,微信团队郑重提示：
							//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
						}
					});
			},

			payFor() {
				// var up_data = {
				// 	access_token: localStorage.getItem('token'),
				// 	orderId: this.order_msg.id,
				// 	groupNum: this.group_num,
				// 	isUsedBalance: this.pay_ways,
				// 	isTemporary: false,
				// 	type: this.order_msg.bespeakType,
				// }
				// var re_data = this.common.apiPost(this,'order!payOrder.do', up_data);
				// if (re_data.success == true) {
				// 	alert(' 创建成功')


				// } else {
				// 	alert(re_data.content)

				// }
				// console.log(re_data)
				this.$router.push('/set-group')

			}
		},
	}
</script>

<style>
	.yd-cell {
		margin: 0.2rem 0.2rem;
	}

	.yd-cell-left {
		margin-right: .2rem;
	}

	.bot-nav {
		height: 0.8rem;
		position: fixed;
		bottom: 0px;
		background-color: rgb(255, 104, 93);
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
		padding: 0;
		margin: 0;
	}

	.bot-nav>div {
		font-size: .26rem;
		margin: 0 .26rem;
		color: #FFF;
	}

	.bot-nav>div i:after {
		margin-left: .05rem;
		margin-right: -.08rem;
		display: block;
		font-family: YDUI-INLAY;
		font-size: .28rem;
		content: "\E608";
		display: inline-block;
	}

	.recharge-btn {
		border: none;
		font-size: 0.1rem;
		border-radius: 0.02rem;
		white-space: nowrap;
		vertical-align: middle;
		padding: 0 .2rem;
		height: .44rem;
		line-height: .44rem;
		background-color: rgb(255, 104, 93);
		color: rgb(255, 255, 255);
		float: right;
		border-radius: 2rem;
	}

	.yh-block {
		width: 80%;
		margin: .2rem auto;
		/* border: #ff685d solid 1px; */
		box-shadow: 0px 3px 15.36px 0.64px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
	}

	.yh-block span.yhfa-msg {
		font-size: .18rem;
		color: #999;
		margin-left: 1rem;
	}

	.yh-title {
		margin: 1.6rem auto .4rem;
		text-align: left;
		width: 80%;
		font-size: .32rem;
	}

	.yh-title img {
		width: .7rem;
		vertical-align: middle;
		margin-right: .1rem;
	}

	.price-input {
		border: 0;
		border-bottom: solid 1px #999;
		margin-right: .2rem;
		padding-bottom: .1rem;
		width: 3rem;
	}
</style>
