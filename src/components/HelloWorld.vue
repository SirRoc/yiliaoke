<template>
	<div class=" mand">
	 	<h1><span>{{ msg }}</span></h1>
		<p style="margin-top: 20px;">
			正在登录...
		</p>
		<br />
	</div>
	 
</template>

<script>

	export default {
		name: "HelloWorld",
		components: {

		},
		data() {
			return {
				type: "month",
				open: false,
			}
		},
		// beforeRouteEnter(to, from, next) {
		// // 	console.log(this.$route.path)
		// // 	// if (!/micromessenger/i.test(navigator.userAgent)) {
		// // 	//     next()
		// // 	//     return
		// // 	// }
		// //     // next()
		// },
		created() {
			// alert(1)
			// 微信登录时打开 this.common.wxLogin(this)
			
			var search = location.search;
			console.log(this.parse(search).code)
			// alert(this.$route.query.code)
			if(this.parse(search).code != undefined){
				console.log(this.parse(search).code)
				
				var up_data = {
					code: this.parse(search).code,
				}
				
				var re_data = this.common.apiPost(this,'pub/wx!authorize.do', up_data)
				if(re_data.success == true){
					console.log(re_data)
					localStorage.setItem("user_token", re_data.content);
					window.location = localStorage.getItem('back_url')
				}else{
					this.$dialog.toast({
						mes: re_data.content,
						timeout: 1500
					});
				}
				
				// window.location = localStorage.getItem('back_url')
			}
			// console.log(this.$route.query.code)
		},
		props: {
			msg: String
		},
		methods: {
			greet() {
				Toast.info("I'm Batman!");
			},
			parse(search) { //获取链接中ID
				//从第二个字符开始截取   ，获取到第二个开始后面所有的字符
				var str = search.substring(1);
				var result = {};
				//分割字符串  -->产生字符串数组
				var strs = str.split("&");
				//遍历数组中的每一个元素
				strs.forEach(function(v) {
					//伪代码：v="age=18"
					var keyvalue = v.split("=");
					var name = keyvalue[0];
					var value = keyvalue[1];
					result[name] = value;
				})
				return result;
			},
		}
	};
</script>

<style scoped>
	.holder {
		display: block;
		width: 48px;
		height: 48px;
		background-color: #E6E6E6;
	}
	 
	.hello {
		text-align: center;
		padding: 20px;
		font-size: 32px;
		color: #666;
		line-height: 56px;
	}

	.hello h1 {
		color: #333;
		line-height: 1.15;
		font-size: 64px;
		margin-bottom: 32px;
	}

	.hello h1 span {
		position: relative;
	}

	.hello h1 span::after {
		content: "";
		position: absolute;
		z-index: -1;
		left: 0;
		bottom: 8px;
		width: 100%;
		height: 20px;
		background: #ecf6ff;
	}

</style>
