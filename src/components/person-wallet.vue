<template>
	<section class="yd-flexview" style="    padding: 0 0 1rem;">
		<yd-navbar title="个人钱包" fixed bgcolor="#ff685d" color="#FFF" height=".7rem">
			<a  @click="$router.go(-1)" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</a>
		</yd-navbar>
		<div class="wallet">
			<img src="../assets/img/wallet-bg.png" >
			<div class="wallet-main">
				<h3>4396.00</h3>
				<p>总金额(元)</p>
				<router-link :to="{ name: 'order_details', query: { show_rag: 1}}">
					<yd-button size="large" shape="circle" bgcolor="#fff" color="#ff685d">立即充值</yd-button>
				</router-link>
			</div>
		</div>
		<yd-cell-group>
			<yd-cell-item >
				<span slot="left">课程收入 <span style="color:#ff685d ; margin-left: 80%;">420元</span> </span>
				<span slot="right"  @click.native="withdrawal">
					<yd-button size="mini" shape="circle" bgcolor="#ff685d" color="#fff">立即体现</yd-button>
				</span>
			</yd-cell-item>
			<yd-cell-item arrow @click.native="transactionList">
				<span slot="left" >交易记录</span>
			</yd-cell-item>
			<yd-cell-item arrow>
				<span slot="left">发票管理</span>
			</yd-cell-item>
		</yd-cell-group>
	</section>
</template>

<script>
export default {
	data () {
		return {}
	},
	methods: {
		withdrawal () {
			this.$router.push({
				path: '/my/wallet/withdrwal'
			})
		},
		transactionList () {
			console.log('1111')
			this.$router.push({
				path: '/my/wallet/transactionList'
			})
		}
	}
}
</script>

<style>
.wallet{
	position: relative;
}
.wallet>img{
	width: 100%;
}
.wallet-main{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
.wallet-main>h3{
    margin-top: 2.4rem;
    font-size: 1rem;
    color: #fff;
    margin-bottom: .2rem;
}
.wallet-main>p{
	color: #fff;
	font-size: .2rem;
}
.wallet-main button{
	margin: 2rem auto;
	width: 3.2rem;
}
</style>
