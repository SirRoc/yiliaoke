<template>
	<section class="yd-flexview">
		<yd-navbar title="拉群配置" fixed bgcolor="#ff685d" color="#FFF" height=".7rem">
			<a  @click="$router.go(-1)" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</a>
			<div slot="right">
				<yd-icon name="refresh" size=".4rem"></yd-icon>
			</div>
		</yd-navbar>
		<ul class="table-ul table-top">
			<li>小助手昵称</li>
			<li>分配群数</li>
			<li>待分配</li>
			<li>招募群数</li>
			<li>操作</li>
		</ul>
		<ul class="table-ul " v-for="item in robot_list">
			<li v-text="item.robotName"></li>
			<li v-text="item.allNum"></li>
			<li v-text="item.noAssignNum"></li>
			<li v-text="item.recruitmentNum"></li>
			<li @click="show_card = true"><yd-button slot="right" size="mini" bgcolor="#ff685d" color="#FFF" shape="circle" >查看</yd-button></li>
		</ul>
		<p class="tips">备注：点击“查看”添加小助手为好友，添加后拉群</p>
		
		<yd-tabbar fixed bgcolor="#f5f5f5" style="    display: block;">
			<div class="qun-msg">
				<div class="tt-line">
					<div class="text-df">预约群数</div>
					<div class="text-df">123</div>
					<yd-button slot="right" size="mini" bgcolor="#ff685d" color="#FFF" shape="circle">增加群</yd-button>
				</div>
				<hr />
				<div class="tt-line">
					<div class="text-df">已拉群数</div>
					<div class="text-df">123</div>
					<yd-button slot="right" size="mini" bgcolor="#ff685d" color="#FFF" shape="circle"><router-link to="/group-list">群设置</router-link></yd-button>
				</div>
			</div>
			<yd-button style="width: 80%;margin: .2rem auto;"  size="small"  shape="circle" bgcolor="#ff685d" color="#FFF">
				完成 </yd-button>
		</yd-tabbar  >
		<yd-popup v-model="show_card" position="right" width="100%">
			<yd-navbar title="小助手名片" fixed bgcolor="#ff685d" color="#FFF" height=".7rem">
				<a  @click="show_card = false" slot="left">
					<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
				</a>
			</yd-navbar>
			<div class="card">
				<h3>昵称：助手01</h3>
				<h3>微信号：123456789</h3>
				<img src="https://org.modao.cc/uploads4/images/3543/35431598/v2_psmt2h.jpg" >
				<div class="code">4396</div>
				<p>操作步骤：<br />
					1.长按二维码添加小助手为好友<br />
					2.在“验证申请”中填写验证码<br />
					3.添加成功后即可拉小助手进群<br />
				</p>
			</div>
		</yd-popup>
	</section>
</template>

<script>
export default {
	data() {
		return {
			// page:1,//1
			show_card:false,
			robot_list:[],//机器人列表信息
		}
	},
	created() {
		var up_data = {
			access_token: localStorage.getItem('token'),
			orderId: 2,
		}
		
		var re_data = this.common.apiPost(this,'api/order!queryRobotList.do', up_data)
		if(re_data.success == true){
			console.log(re_data)
			this.robot_list = re_data.content
		}else{
			this.$dialog.toast({
				mes: re_data.content,
				timeout: 1500
			});
		}
		
	},
	methods: {
	}
}
</script>

<style scoped>
.table-ul{
	background-color: #FFF;
	margin: 3px 0.2rem 0
}
.table-top{
	margin-top: 1rem;
	background-color: #ff685d;
	color: #FFF;
}
.table-ul li{
	float: left;
	text-align: center;
	width: 19%;
	height: .6rem;
	line-height: .6rem;
	position: relative;
}
.table-ul li:first-child{
	width: 24%;
}
.table-ul.table-top li:after{
	position: absolute;
	right: 0;
	top: .1rem;
	border-right: #E6E6E6 solid 2px;
	content: "";
	height: .4rem;
	line-height: .6rem;
}
p.tips{
	margin: .3rem ;
	text-align: left;	
}
.qun-msg{
	width:  calc(100% - .4rem);
	background-color: #FFF; 
	margin: 0.2rem;
	display: inline-block;
}
.qun-msg .tt-line{
	width: 100%;
    display: inline-block;
	padding: .1rem 0;
}
.qun-msg hr{
	background-color: #E6E6E6;
	width: 96%;
	margin: 0 auto;
	height: 1px;
	border: none;
}
.qun-msg .text-df{
    padding: .1rem .2rem;
	color: #666;
	float: left;
}
.qun-msg .tt-line button{
	float: right;
	margin-right: .2rem;
}
.card{
	border: #ff685d solid 1px;
	width: 80%;
	padding: .4rem 0;
	margin: 1.6rem auto 0;
	border-radius: 45px;
}
.card h3{
	font-size: .32rem;
	margin: .3rem 0;
}
.card img{
	width: 4rem;
	height: 4rem;
	margin: .3rem 0;
}
.card .code{
	padding: .2rem .4rem;
	font-size: .4rem;
	color: #FFF;
	background-color: #ff685d;
	border-radius: 15px;
	width: 3rem;
	margin: .4rem auto;
}
.card p{
	font-size: .24rem;
	line-height: .4rem;
	margin-bottom: .4rem;
}
</style>
