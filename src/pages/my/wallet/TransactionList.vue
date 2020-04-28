<template>
	<div>
        <yd-navbar title="交易记录" :bgcolor="AppBarBgColor" :color="AppBarColor" :height="AppBarHeight">
			<router-link to="/person-wallet" slot="left">
				<yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
			</router-link>
		</yd-navbar>
		<ul class="transaction">
           <li>
               <div class="r-between top">
                   <div>多群直播</div>
                   <div>-52</div>
               </div>
               <div class="r-between bottom">
                   <div>2019-12-09 08:00:00</div>
                   <div>交易成功</div>
               </div>
           </li>
           <li>
               <div class="r-between top">
                   <div>多群直播</div>
                   <div style="color: #fd7275;">+52</div>
               </div>
               <div class="r-between bottom">
                   <div>2019-12-09 08:00:00</div>
                   <div>交易成功</div>
               </div>
           </li>
           <li>
               <div class="r-between top">
                   <div>多群直播</div>
                   <div>-52</div>
               </div>
               <div class="r-between bottom">
                   <div>2019-12-09 08:00:00</div>
                   <div>交易成功</div>
               </div>
           </li>
           <li>
               <div class="r-between top">
                   <div>多群直播</div>
                   <div>-52</div>
               </div>
               <div class="r-between bottom">
                   <div>2019-12-09 08:00:00</div>
                   <div>交易成功</div>
               </div>
           </li>
        </ul>
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
.transaction {
    li {
        margin-bottom: 10px;
        padding: .4rem .24rem;
        background: white;
        .top{
            font-size: .32rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: rgba(0, 0, 0, 1);
            margin-bottom: 10px;
        }
        .bottom {
            font-size: .24rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: rgba(107, 107, 107, 1);
        }
    }
}
</style>
