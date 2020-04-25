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
					<div class="person-content voice">
						<i class="icon-voice"></i>
						<span> 4''</span>
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
				<li @touchstart="voice" @touchend="voiceend">
					<i class="icon-voice"></i>
				</li>
				<li>
					<i class="icon-a"></i>
				</li>
				<li>
					<i class="icon-file"></i>
				</li>
				<li @click="isMenu =!isMenu">
					<i class="icon-more " :class="{'active': isMenu}"></i>
				</li>
			</ul>
			<div class="menu-content" v-if="isMenu">
				<ul>
					<li>
						<div class="menu-handle">
							<i class="icon-photo"></i>
						</div>
					</li>
					<li>
						<div class="menu-handle">
							<i class="icon-voice"></i>
						</div>
					</li>
					<li>
						<div class="menu-handle">
							<i class="icon-video"></i>
						</div>
					</li>
					<li>
						<div class="menu-handle">
							<i class="icon-link"></i>
						</div>
					</li>
					<li>
						<div class="menu-handle">
							<i class="icon-time"></i>
						</div>
					</li>
				</ul>
			</div>
			<div class="text-input">
				<textarea ref="area" type="text" :rows="line" @input="textAreachange"></textarea>
				<button >发送</button>
			</div>
		</div>
		<voiceTip v-if="isVoice" @done="voiceDone"></voiceTip>
    </div>
</template>

<script> 
    import {AppBarHeight, AppBarBgColor, AppBarColor} from '@/config.js'
    import voiceTip from '@/components/voiceTip.vue'
	export default {
		components: {
			voiceTip
		},
		data() {
			return {
                AppBarHeight,AppBarBgColor,AppBarColor,
				value1: '',
				toggleContent: true,
				isVoice: false,
				isMenu: false, // 是否显示菜单
				line: 1, //当前多少行
			}
		},
		methods: {

			getCount(){
				
			},
			textAreachange (e) {
				let maxline = 4;
				let width = this.$refs.area.getBoundingClientRect().width - 20;
				let value = e.target.value;
				let numberline = Math.ceil(width / 18);
				let line = Math.ceil(value.length / numberline);
				if (line > maxline) {
					this.line = maxline;
				} else if (line > 0){
					this.line = line;
				}
				
			},
			// 取消
			cancelMenu () {
				this.isMenu = false;
			},
			toggleTip () {
				this.toggleContent = !this.toggleContent;
			},
			voice () {
				this.isVoice = true;
			},
			voiceend () {
				this.isVoice = false;
			},
			voiceDone () {
				console.log('录音完成了')
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
			padding: 14px 20px;
			font-size: .4rem;
			text-align left;
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
		.voice {
			min-height: 1rem;
			font-size: .4rem;
			.icon-voice {
				float:left;
				display: inline-block;
				width: 20px;
				height: 24px;
				
				background: url('../../assets/img/voice-active.png') center center no-repeat;
				background-size: 100%;
			}
			span {
				float:right;
			}
		}
	}
}
.handle {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	.handle-content {
		height: 1rem;
		line-height: 1rem;
		background-color: #ffffff; 
		li {
			display: flex;
			align-items center;
			justify-content center;
			width: 25%;
			text-align: center;
			i {
				display: inline-block;
				width: .8rem;
				height: .8rem;
				border: solid 1px #a4a4a4;
				border-radius 50%;
			}
			i.active {
				border: solid 1px #fe7477;
			}
			.icon-voice {
				background: url('../../assets/img/voice.png') center center no-repeat;
				background-size: 20px 30px;
			}
			.icon-voice.active {
				background: #fe7477 url('../../assets/img/voice-active.png') center center no-repeat;
				
				background-size: 20px 26px;
			}
			.icon-a {
				background: url('../../assets/img/a.png') center center no-repeat;
				background-size: 20px 24px;
			}
			.icon-a.active {
				background: #fe7477 url('../../assets/img/a-active.png') center center no-repeat;
				background-size: 20px 24px;
			}
			.icon-file {
				background: url('../../assets/img/file.png') 9px 8px no-repeat;
				background-size: 22px 22px;
			}
			.icon-file.active {
				background: #fe7477 url('../../assets/img/file-active.png') 9px 8px no-repeat;
				background-size: 22px 22px;
			}
			.icon-more {
				background: url('../../assets/img/more.png') center center no-repeat;
				background-size: 20px 6px;
			}
			.icon-more.active {
				background: #fe7477 url('../../assets/img/more-active.png') center center no-repeat;
				background-size: 20px 6px;
			}
		}
	}
	.menu-content {
		background: #e7e3e3;
		padding: 0 10px;
		ul {
			display: flex;
			justify-content flex-start;
			flex-wrap wrap;
			li {
				.menu-handle {
					margin: 10px;
					width: 1rem;
					height: 1rem;
					border-radius 10px;
					background: white;
					i {
						display: inline-block;
					}
					.icon-photo {
						width: 30px;
						height: 50px;
						background: url('../../assets/img/photo.png') center center no-repeat;
						background-size: 100%;
					}
					.icon-voice {
						width: 24px;
						height: 50px;
						background: url('../../assets/img/voice1.png') center center no-repeat;
						background-size: 100%;
					}
					.icon-video {
						width: 29px;
						height: 50px;
						background: url('../../assets/img/video.png') center center no-repeat;
						background-size: 100%;
					}
					.icon-link {
						width: 27px;
						height: 50px;
						background: url('../../assets/img/link.png') center center no-repeat;
						background-size: 100%;
					}
					.icon-time {
						width: 26px;
						height: 50px;
						background: url('../../assets/img/time.png') center center no-repeat;
						background-size: 100%;
					}
				}
			}
		}
	}
	.text-input {
		margin-top: -1px; /* 防止出现1px 漏 */
		background: #f5f5f5;
		padding: 0 20px;
		display: flex;
		justify-content space-between;
		textarea {
			padding: 0 10px;
			padding-top: 8px;
			min-height: .8rem;
			margin: 20px 0;
			width: 80%;
			font-size: 18px;
			border-radius 8px;
			word-break:break-all;
		}
		button {
			flex: none;
			height: .8rem;
			width: 1.5rem;
			margin: 20px 0;
			margin-left: 10px;
			border: 0;
			color: white;
			font-size: .4rem;
			border-radius 8px;
			background: #ff685d;
		}
	}
}
</style>
