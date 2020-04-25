<template>
	<section class="yd-flexview">
		<yd-navbar title="我的群管理" fixed bgcolor="#ff685d" color="#FFF" height=".7rem">
			<a href="javascript:history.go(-1)" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</a>
		</yd-navbar>
		<yd-search placeholder="请输入需要搜索的群名称或邀请人" style="margin: .8rem 0.1rem 0.1rem;" v-model="search_val" :on-submit="submitHandler"></yd-search>
		<ul class="table-ul table-top">
			<li>群名称</li>
			<li>助手昵称</li>
			<li>成员数</li>
			<li>邀请人</li>
			<li>操作</li>
		</ul>
		<ul class="table-ul " :class="{'tab-sel':tab_sel == item.ordergroupid}" @click="tab_sel = item.ordergroupid" v-for="item in group_msg">
			<li>{{item.groupname}}</li>
			<li>{{item.robotName}}</li>
			<li>{{item.num}}</li>
			<li>{{item.joinname}}</li>
			<li>
				<yd-button slot="right" size="mini" bgcolor="#ff685d" color="#FFF" shape="circle">操作</yd-button>
			</li>
		</ul>
		<!-- 
		<ul class="table-ul " :class="{'tab-sel':tab_sel == 2}" @click="tab_sel = 2">
			<li>业务二群</li>
			<li>助手02</li>
			<li>100</li>
			<li>张三</li>
			<li>
				<yd-button slot="right" size="mini" bgcolor="#ff685d" color="#FFF" shape="circle">操作</yd-button>
			</li>
		</ul>
		<ul class="table-ul " :class="{'tab-sel':tab_sel == 3}" @click="tab_sel = 3">
			<li>业务三群</li>
			<li>助手03</li>
			<li>100</li>
			<li>张三</li>
			<li>
				<yd-button slot="right" size="mini" bgcolor="#ff685d" color="#FFF" shape="circle">操作</yd-button>
			</li>
		</ul> -->

		<yd-tabbar fixed bgcolor="#f5f5f5" style="    display: block;">
			<div class="qun-msg">
				<div class="tt-line">
					<div class="text-df">当前主讲群</div>
					<div class="text-df">业务一群</div>
					<div class="text-df">当前状态</div>
					<div class="text-df">
						<div class="lcs_wrap">
							<div class="lcs_switch  lcs_checkbox_switch " @click="zb_state = !zb_state" :class="{'lcs_on' : zb_state, 'lcs_off' : !zb_state}">
								<div class="lcs_cursor"></div>
								<div class="lcs_label lcs_label_on">开始</div>
								<div class="lcs_label lcs_label_off">暂停</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div class="tt-line">
					<div class="text-df">当前讲师</div>
					<div class="text-df">张三、陈岑、王妃妃</div>
					<div class="text-df">当前群数</div>
					<div class="text-df">3</div>
				</div>
				<hr />
				<div class="tt-line">
					<div class="text-df">群成员总数</div>
					<div class="text-df">4396</div>
				</div>
			</div>
		</yd-tabbar>
	</section>
</template>

<script>
export default {
	data() {
		return {
			zb_state: true, //主播状态
			search_val: '' ,//搜索值
			tab_sel:1,//主群
			
			group_msg:[],//拉群信息
		}
	},
	created() {
		var up_data = {
			access_token: localStorage.getItem('token'),
			orderId: 2,
			name:'',
		}
		
		var re_data = this.common.apiPost(this,'api/order!queryOrderGroupList.do', up_data)
		if(re_data.success == true){
			this.group_msg = re_data.content.data
			console.log(re_data)
			// this.robot_list = re_data.content
		}else{
			this.$dialog.toast({
				mes: re_data.content,
				timeout: 1500
			});
		}
		
	},
	methods: {
		submitHandler(value) {
			this.$dialog.toast({mes: `搜索：${value}`});
		}
	}
}
</script>
<style>	
.yd-search .yd-search-input .search-input{
	height: .5rem !important;
}
.yd-search-input>.cancel-text{
	height: 0.5rem;
    line-height: 0.52rem;
}
</style>
<style scoped>
.table-ul {
	background-color: #FFF;
	margin: 3px 0.2rem 0
}
.table-top {
	background-color: #ff685d;
	color: #FFF;
}

.table-ul.tab-sel {
	border: #ff685d solid 3px;
	border-radius: 15px;
	position: relative;
	overflow: hidden;
}

.table-ul.tab-sel:after {
	content: "主";
	position: absolute;
	top: -0.1rem;
	left: -0.24rem;
	width: 0.72rem;
	height: .4rem;
	line-height: .45rem;
	background-color: #ff685d;
	color: #FFF;
	transform: rotate(-45deg);
}

.table-ul li {
	float: left;
	text-align: center;
	width: 19%;
	height: .6rem;
	line-height: .6rem;
	position: relative;
}

.table-ul li:first-child {
	width: 24%;
}

.table-ul.table-top li:after {
	position: absolute;
	right: 0;
	top: .1rem;
	border-right: #E6E6E6 solid 2px;
	content: "";
	height: .4rem;
	line-height: .6rem;
}

p.tips {
	margin: .3rem;
	text-align: left;
}

.qun-msg {
	width: calc(100% - .4rem);
	background-color: #FFF;
	margin: 0.2rem;
	display: inline-block;
}

.qun-msg .tt-line {
	width: 100%;
	display: inline-block;
	padding: .1rem 0;
}

.qun-msg hr {
	background-color: #E6E6E6;
	width: 96%;
	margin: 0 auto;
	height: 1px;
	border: none;
}

.qun-msg .text-df {
	padding: .1rem .1rem;
	color: #666;
	float: left;
	min-width: 1.4rem;
	text-align: left;
}

.qun-msg .tt-line .text-df:nth-child(2) {
	color: #ff685d;
	width: 2.85rem;
}

.qun-msg .tt-line button {
	float: right;
	margin-right: .2rem;
}
.lcs_wrap {
    display: inline-block;
    direction: ltr;
    height: .34rem;
    vertical-align: middle;
}
.lcs_switch.lcs_on {
    background: #ff685d;
    box-shadow: 0 0 2px #ff685d inset;
}
.lcs_switch {
    display: inline-block;
    position: relative;
    width: 1rem;
    height: .34rem;
    border-radius: 30px;
    background: #ddd;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}
.lcs_switch.lcs_on .lcs_cursor {
    left: 0.68rem;
}
.lcs_cursor {
    display: inline-block;
    position: absolute;
    top: 2px;
	left: .06rem;
    width: .28rem;
    height: .28rem;
    border-radius: 100%;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.1);
    z-index: 10;
    -webkit-transition: all .2s linear;
    -ms-transition: all .2s linear;
    transition: all .2s linear;
}
.lcs_switch.lcs_on .lcs_label_on {
    left: 10px;
    opacity: 1;
}
.lcs_label.lcs_label_on {
    left: -70px;
    z-index: 6;
}
.lcs_label {
    font-family: trebuchet ms,Helvetica,sans-serif;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 0.24rem;
    color: #fff;
    font-weight: 700;
    position: absolute;
    width: .54rem;
    top: 3px;
    overflow: hidden;
    text-align: center;
    opacity: 0;
    -webkit-transition: all .2s ease-in-out .1s;
    -ms-transition: all .2s ease-in-out .1s;
    transition: all .2s ease-in-out .1s;
}
.lcs_label.lcs_label_off {
    right: -70px;
    z-index: 5;
}
.lcs_switch.lcs_off .lcs_label_off {
    right: 10px;
    opacity: 1;
}
</style>
