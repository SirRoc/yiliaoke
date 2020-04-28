<template>
	<div>
        <yd-navbar title="bak" :bgcolor="AppBarBgColor" :color="AppBarColor" :height="AppBarHeight">
			<router-link to="/home" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</router-link>
		</yd-navbar>
		
    </div>
</template>

<script> 
    import {AppBarHeight, AppBarBgColor, AppBarColor} from '@/config.js'
	export default {
		data() {
			return {
                AppBarHeight,AppBarBgColor,AppBarColor,
			}
		},
		methods: {
		}
	}
</script>

<style lang="stylus" scoped>
</style>
