<template>
	<div>
        <yd-navbar title="提现" :bgcolor="AppBarBgColor" :color="AppBarColor" :height="AppBarHeight">
			<router-link to="/person-wallet" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</router-link>
		</yd-navbar>
        <div class="withdrawal-content">
            <div class="withdrawal">
                <p class="title">提现到&emsp;<em style="color: #0ab70a;font-size: .28rem;">微信钱包</em></p>
                <p class="f-title">提现金额</p>
                <div class="input r-flex">
                    ￥<yd-input v-model="input" placeholder="请输入提现金额"></yd-input>
                </div>
                <p class="tipmoneny">可提现金额<em style="color: #fc6466;font-size: .28rem;">0</em>元，每天最高可提现5000元</p>
            </div>
            <p class="tip">
                注意：充值未满7天的不能提现；付费收款未满24小时的不能提现
            </p>
            <yd-button style="width: 80%;height: 40px;margin: 1rem auto;" size="large" shape="circle" bgcolor="#ff685d" color="#FFF" @click="recharge">立即充值</yd-button>
        </div>
    </div>
</template>

<script> 
    import {AppBarHeight, AppBarBgColor, AppBarColor} from '@/config.js'
	export default {
		components: {
		},
		data() {
			return {
                AppBarHeight,AppBarBgColor,AppBarColor,
                input: ''
			}
		},
		methods: {
            recharge () {

            }
		}
	}
</script>

<style lang="stylus" scoped>
.withdrawal-content {
    padding: .4rem;
    .withdrawal {
        box-shadow: 0px 4px 24px 0px rgba(26, 1, 1, 0.17);
        border-radius: 25px;
        overflow hidden;
        background-color: #ffffff;
        .title {
            padding: 0 .32rem;
	        // opacity: 0.3;
            line-height .6rem;
            text-align left;
            background-color: rgba(253, 104, 107, .3);
            color white;
        }
        .f-title {
            padding: 0 .32rem;
            margin: .4rem 0;
            font-size: .28rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            text-align left;
            color: rgba(160, 157, 157, 1);
        }
        .input {
            padding: .2rem .32rem;
            font-size: .38rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 1);
            border-bottom: 1px solid rgba(160, 157, 157, 1);
        }
        .tipmoneny {
            padding: .4rem .32rem;
            font-size: .28rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            text-align left;
            color: rgba(160, 157, 157, 1);
        }
    }
    .tip {
        margin-top: .24rem;
        font-size: .25rem;
        text-align: left;
        line-height: 1.2;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #bbbac0;
    }

}
</style>
