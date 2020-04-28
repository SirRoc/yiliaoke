<template>
    <div>
         <yd-navbar title="群内录制" :bgcolor="AppBarBgColor" :color="AppBarColor" :height="AppBarHeight">
			<router-link to="/record" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</router-link>
		</yd-navbar>
        <div class="way">
           <div class="r-between"></div>
            <yd-icon name="play"></yd-icon>
        
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
    margin: 20px 0;
    background: white;
    padding: 20px;
}
</style>   
