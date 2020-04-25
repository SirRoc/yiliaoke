<template>
	<div>
        <yd-navbar title="课程直播间" :bgcolor="AppBarBgColor" :color="AppBarColor" :height="AppBarHeight">
			<router-link to="/home" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</router-link>
		</yd-navbar>
		<div class="notice">
			<p class="tip" @click="toggleTip">讲课须知
				<i v-if="toggleContent" class="showtip icon-topArrow"></i>
				<i v-else class="showtip icon-bottomArrow"></i>
			</p>
			<div class="content" v-if="toggleContent">
				1、点击底部操作栏，添加语音、图片、文字编辑内容<br/>
				2、支持邀请多位讲师讲课，扩充讲师团队<br/>
				3、支持批量修改讲师头像、昵称<br/>
				4、课程支持直播和录播，直播结束后可继续编辑内容<br/>
				5、以语音为主的课程推荐使用音频课程，合成语音后可编辑<br/>
			</div>
		</div>
		<div class="course">
			<div class="person">
				<img class="person-img" src="../../assets/img/person.png" alt="">
				<div class="r-ml20">
					<div class="person-title ">
						<p class="h3">Roc</p>
						<p >主讲人&nbsp;</p>
						<i class="icon-pen1"></i>
					</div>
					<div class="person-content">
						您好，有什么可以帮助您吗？有需要联系我。"
					</div>
					<div class="person-handle r-mt10">
						<ul class="r-flex">
							<li class="r-pr10">
								<i class="icon-pen"></i>
							</li>
							<li class="r-pr10">
								<i class="icon-add"></i>
							</li>
							<li class="r-pr10">
								<i class="icon-cut"></i>
							</li>
							<li class="r-pr10">
								<i class="icon-topArrow1"></i>
							</li>
							<li class="r-pr10">
								<i class="icon-bottomArrow1"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="person">
				<img class="person-img" src="../../assets/img/person.png" alt="">
				<div class="r-ml20">
					<div class="person-title ">
						<p class="h3">Roc</p>
						<p >主讲人&nbsp;</p>
						<i class="icon-pen1"></i>
					</div>
					<div class="person-content">
						您好，有什么可以帮助您吗？有需要联系我。"
					</div>
					<div class="person-handle r-mt10">
						<ul class="r-flex">
							<li class="r-pr10">
								<i class="icon-pen"></i>
							</li>
							<li class="r-pr10">
								<i class="icon-add"></i>
							</li>
							<li class="r-pr10">
								<i class="icon-cut"></i>
							</li>
							<li class="r-pr10">
								<i class="icon-topArrow1"></i>
							</li>
							<li class="r-pr10">
								<i class="icon-bottomArrow1"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="handle">
			<ul class="r-between handle-content">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>
		</div>
    </div>
</template>

<script> 
    import {AppBarHeight, AppBarBgColor, AppBarColor} from '@/config.js'
	export default {
		data() {
			return {
                AppBarHeight,AppBarBgColor,AppBarColor,
				value1: '',
				toggleContent: true,
			}
		},
		methods: {
			toggleTip () {
				this.toggleContent = !this.toggleContent;
			}
		}
	}
</script>

<style lang="stylus" scoped>
.notice {
	background: white;
	margin: 10px 20px;
	font-size: 0.26rem;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #5e5e5e;
	text-align left;
	line-height 1.5
	.tip {
		position relative;
		padding 10px 0;
		text-align center
		font-size: 0.28rem;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #000000;
		
		.showtip {
			position absolute;
			right 20px;
			top: 10px;

		}
	}
	.content {
		border-top 1px solid #d7d7d7;
		padding 20px 10px;
	}

}
.course {
	padding 0 20px;
	.person {
		margin-top: 0.2rem;
		display flex;
		justify-content flex-start
		.person-img {
			flex: none;
			width .8rem;
			height .8rem;
			border-radius 50%;
		}
		.person-title {
			display flex
			justify-content flex-start;
			align-items center;
			color #888686;
			.h3 {
				font-size: .3rem;
				padding-right: 10px;
			}
		}
		.person-content {
			position: relative;
			margin-top: 10px;
			max-width: 510px;
			padding: 14px 10px;
			border-radius 6px;
			line-height: 1.2;
			color: white;
			background-color: #3875ff;
		}
		.person-content::before {
			position absolute;
			left: -10px;
			top: 6px;
			content: '';
			width: 0;
			height: 0;
			border: 10px solid transparent;
			border-top-color #3875ff; 
		}
	}
}
.handle {
	.handle-content {
		height: 1rem;
		line-height: 1rem;
		background-color: #ffffff; 
		li {
			width: 25%;
			text-align: center;
		}
	}
}
</style>
