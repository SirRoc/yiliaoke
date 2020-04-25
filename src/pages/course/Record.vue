<template>
    <div>
         <yd-navbar title="课程方式" :bgcolor="AppBarBgColor" :color="AppBarColor" :height="AppBarHeight">
			<router-link to="/home" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</router-link>
		</yd-navbar>
        <div class="step1">
            <!-- <h3>课程方式</h3> -->
            <ul class="corser-way">
                <li class="r-flex" @click="jumpRecord(1)">
                    <i class="icon-wecaht"></i>
                    <div class="content">
                        <p>群内录制</p>
                        <p class="detail">添加微信录制小助手在微信群内进行录制，操作更便捷</p>
                    </div>
                    <i class="icon-right"></i>
                </li>
                <li  class="r-flex"  @click="jumpRecord(2)">
                    <i class="icon-video"></i>
                    <div class="content">
                        <p>网页录制</p>
                        <p class="detail">微信打开网页链接就可以进行录制，使用更便捷</p>
                    </div>
                    <i class="icon-right"></i>
                </li>
            </ul>
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
            let url = '/record';
            switch(type) {
                case 1: // 群
                    url += '/flock'
                break;
                case 2: // 网页
                    url += '/web'
                break;
            }
            this.$router.push({
                path: url
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.step1 {
    h3 {
        margin: 20px auto;
        font-size: .6rem;
    }
    .corser-way {
        li {
            margin-top: 10px;
            padding: 10px 20px;
            background: white;
            text-align: left;
            font-size: .3rem;
        }
        .icon-wecaht {
            flex: none;
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: #fc5f61 url('../../assets/img/wechat.png') center center no-repeat;
            background-size: 60%;
        }
        .icon-video {
            flex: none;
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: #32c5ea url('../../assets/img/video1.png') center center no-repeat;
            background-size: 60%;
        }
        .icon-right {
            position: relative;
            display: inline-block;
            width: 1rem;
            height: 1rem;
        }
        .icon-right::before {
            display: block;
            margin-top: .2rem;
            font-family: YDUI-INLAY;
            font-size: .6rem;
            color: #c9c9c9;
            content: "\E608";
        }
        .content {
            margin: 0 10px;
            .detail {
                margin-top: 6px;
                font-size: .25rem;
                line-height: 1.3;
            }
        }
    }
}
</style>   
