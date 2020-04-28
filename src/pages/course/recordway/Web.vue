<template>
    <div>
         <yd-navbar title="网页录制" :bgcolor="AppBarBgColor" :color="AppBarColor" :height="AppBarHeight">
			<router-link to="/record" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</router-link>
		</yd-navbar>
        <yd-cell-group>
			<yd-cell-item>
				<span slot="left">主题名称</span>
				<input v-model="title" slot="right" type="text" placeholder="不少于6个字，不超过25个字">
			</yd-cell-item>
			
		</yd-cell-group>
		<yd-cell-group title="主题简介">
			<yd-cell-item>
				<yd-textarea  v-model="content" slot="right" placeholder="请简要概述您的直播内容（不超过200个字）" maxlength="120"></yd-textarea>
			</yd-cell-item>
		</yd-cell-group>
		<yd-cell-group>
            <yd-cell-item>
				<span slot="left">收费类型</span>
				<span slot="right">
					<yd-radio-group v-model="type" color="#ff685d">
						<yd-radio val="1">免费</yd-radio>
						<yd-radio val="2">收费</yd-radio>
					</yd-radio-group>
				</span>
			</yd-cell-item>
		</yd-cell-group>
        <yd-button style="width: 80%;height: 40px;margin: .3rem auto;" size="large" shape="circle" bgcolor="#ff685d" color="#FFF" @click.native="webRecord">提交</yd-button>
    </div>
</template>
<script>
import {AppBarHeight, AppBarBgColor, AppBarColor} from '@/config.js'
export default {
    data () {
        return {
            AppBarHeight,AppBarBgColor,AppBarColor,
            type:1,
            title: '',
            content: ''
        }
    },
    methods: {
        // 网页录制
        webRecord () {
            this.$router.push({
                path: '/record/web/liveCourse'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
</style>   
