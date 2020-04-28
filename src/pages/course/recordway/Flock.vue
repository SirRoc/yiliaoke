<template>
    <div>
         <yd-navbar title="群内录制" :bgcolor="AppBarBgColor" :color="AppBarColor" :height="AppBarHeight">
			<router-link to="/record" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</router-link>
		</yd-navbar>
        <div class="way">
           <div class="r-between">
                <yd-icon name="play" style="color: #fd7275;"></yd-icon>
                <div class="way-tip">我是您本次专属的录课小助手，很高兴为您服务！</div>
            </div>
            <p>1.复制以下验证码，长按复制即可</p>
            <p class="way-code">2222</p>
            <p>2.长按二维码添加小助手为好友或搜索微信号：ZZNZZNZZN</p>
            <div class="way-qrcode">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588090526402&di=e6c0dfc3ec5fa7c015c0efdcee098e81&imgtype=0&src=http%3A%2F%2Fwww.fengyang.gov.cn%2Fgroup3%2FM00%2F00%2F50%2FCpYIol55bgSAAqEEAAVWpRb906A136.jpg" alt="">
            </div>
            <p>3.添加成功后，根据提示发送验证码将小助手拉入需要录制的群</p>
        </div>
        <div class="record-flow">
            <h3>录课使用流程</h3>
            <div class="flow">
                <div class="flow-step r-flex">
                    <span class="flow-step-num">1</span>
                    <div class="flow-content">
                        <p class="flow-content-active">添加小助手</p>
                        <p>添加小助手，发送验证码给小助手</p>
                    </div>
                </div>
                <div class="flow-step r-flex">
                    <span class="flow-step-num">2</span>
                    <div class="flow-content">
                        <p class="flow-content-active">拉小助手入群</p>
                        <p>将小助手拉入需要录课的群</p>
                    </div>
                </div>
                <div class="flow-step r-flex">
                    <span class="flow-step-num">3</span>
                    <div class="flow-content">
                        <p class="flow-content-active">设置讲师</p>
                        <p>群内放发送“@小助手 我是讲师“（讲师可设置多位）</p>
                    </div>
                </div>
                <div class="flow-step r-flex">
                    <span class="flow-step-num">4</span>
                    <div class="flow-content">
                        <p class="flow-content-active">开始录课</p>
                        <p>群内发送”@小助手 开始“即可开始录课</p>
                    </div>
                </div>
                <div class="flow-step r-flex">
                    <span class="flow-step-num">5</span>
                    <div class="flow-content">
                        <p class="flow-content-active">录课结束</p>
                        <p>群内发送：@小助手 结束”即可结束录课</p>
                    </div>
                </div>
                <p style="text-align: left;">提示：新录制的课程在直播间里面可以查看</p>
                <i class="icon-service"></i>
            </div>
        </div>
    </div>
</template>
<script>
import {AppBarHeight, AppBarBgColor, AppBarColor} from '@/config.js'
export default {
    data () {
        return {
            AppBarHeight,AppBarBgColor,AppBarColor,
        }
    },
    methods: {
        // 跳转录制方式
        jumpRecord (type) {
            let url = '';
            switch(type) {
                case 1: // 群
                    url = '/record/flock'
                break;
                case 2: // 网页
                    url = '/record/web'
                break;
            }
            this.$router.push({
                url: url
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.way {
    margin: .2rem .4rem;
    background: white;
    padding: 20px;
    .way-tip {
        width: 5rem;
        height: .5rem;
        line-height .5rem;
        background-color: #fd7275;
        border-radius: 27px 0px 29px 0px;
        font-family: PingFang-SC-Regular;
        font-size: .2rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #ffffff;
    }
    p {
        line-height: 1.2;
        margin:.4rem 0;
        font-size: .3rem;
        font-weight: normal;
        font-stretch: normal;
        color: #000000;
        text-align: left;
    }
    .way-code{
        margin: 0 auto;
        width: 2.8rem;
        height: .6rem;
        line-height .6rem;
        text-align: center;
        background-color: #efeff4;
    }
    .way-qrcode {
        width: 2rem;
        height: 2rem;
        text-align: center;
        margin: 0 auto;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
.record-flow {
    position: relative;
    margin-bottom: 1rem;
    h3 {
        font-size: .3rem;
        margin: 20px 0;
        font-weight bold;
    }
    .flow {
        margin: 0 .4rem;
        padding: 10px 20px;
        color: #868585;
        background: white;
        .flow-step {
            margin: 20px 0;
            text-align: left;
            .flow-step-num{
                width: .5rem;
                height: .5rem;
                line-height: .5rem;
                text-align: center;
                border: solid 1px #fd7275;
                border-radius: 50%;
                color: #fd7275;
            }
        }
        .flow-content {
            margin-left: 10px;
            color: #868585;
            .flow-content-active {
                padding-bottom: 2px;
                color: #fd7275;
            }
        }
    }
    .icon-service {
        position: absolute;
        right: .6rem;
        bottom: 10px;
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('../../../assets/img/service.png') center center no-repeat;
        background-size: 100%;
    }
}
</style>   
