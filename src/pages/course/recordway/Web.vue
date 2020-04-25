<template>
    <div>
         <yd-navbar title="课程方式" :bgcolor="AppBarBgColor" :color="AppBarColor" :height="AppBarHeight">
			<router-link to="/record" slot="left">
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
</style>   
