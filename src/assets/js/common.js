//配置路径

const config = {
	http: 'http://sys.yiliaoke.net/',
	api: 'http://sys.yiliaoke.net/',
}

export default {
	getConfig() {
		return config;
	},
	setToken(){
		localStorage.setItem('token', 'av@eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxQDFAMkAxNTk5MTg0NDI2Mjk0In0.BXemS8oW_443roZHoJCN0-LdM2fbHQDouX0-W23beMxoA9bDX98zwdIZb_0APoAUjZbkkuc7hrX-FhZfwNbozQ');

	},
	
	//上传POST
	apiPost(_this,url, data) {
		// alert('apiPost')
		/* 处理参数为 key=value&key=value */
		// var params = new URLSearchParams()
		// for (var key in data) {
		// 	params.append(key, data[key])
		// }
		// var url = config.api + url
		// return new Promise((resolve, reject) => {
		// 	axios.post(url, params).then((response) => {
		// 		resolve(response.data)
		// 	}).catch((error) => {
		// 		// console.log('f', response)
		// 		// console.log(error.response.data);
		// 		showMessage(error.response.data.msg)
		// 		if(error.response.data.respCode == 401){
		// 			window.location.href="login.html"
		// 		}
		// 	})
		// })
		let api = config.api + url;
		let toData ;
		$.ajax({
			type: 'GET',
			url: api,
			data: data,
			// dataType: 'jsonp',  // 请求方式为jsonp
			async: false,
			beforeSend: function (xhr) {
				_this.$dialog.loading.open('很快加载好了');
				// console.log("loading")
			},
			success: function(re) {
				toData = JSON.parse(re)
				_this.$dialog.loading.close();
			},
			error: function(re) {
				console.log(re)
				console.log("错误")
				_this.$dialog.loading.close();
			}
		});
		return toData
	},
	wxLogin(_this) {
		// alert('wxLogin')
		// var back_url = 'http://sys.yiliaoke.net/ylk/dist/index.html#' + _this.$route.path
		// console.log(back_url)
		var appId = 'wx832e2e371abb785b';
		var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appId + "&redirect_uri=" + location.href.split(
			'#')[0] + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
		var code = getUrlParam("code");
		
		if (!code) {
			// window.location = back_url+"?code="+code;
			// alert(back_url)
			// localStorage.setItem("back_url", back_url);
			window.location = url;
		} else {
			// alert(code)
			// code_imp = code
			localStorage.setItem("code_imp", code);
		}
	}
	
}
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}