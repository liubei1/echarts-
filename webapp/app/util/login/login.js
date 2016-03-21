/*requirejs(['domReady'],function (domReady,$ , backstretch) {
	domReady(function(){
		// handle login and forget
		$('.login .forgetpwd').on('click', function (e) {
			$('.login').hide();
			$('.message').html('请输入您的注册邮箱！');
			$('.forget').show();
		});
		$('.forget .backlogin').on('click', function (e) {
			$('.forget').hide();
			$('.message').html('请输入用户名和密码登录！');
			$('.login').show();
		});

		/!*$(".banner-image").backstretch('login/images/bg2.jpg');*!/
		$(".banner-image").backstretch([
			"app/images/login/1.jpg"
			, "app/images/login/2.jpg"
			, "app/images/login/bj1.jpg"
			, "app/images/login/bj2.jpg"
		], {duration: 3000, fade: 750});
	}); // End document ready
});*/

(function($){
	$(document).ready(function(){
		$('.login .forgetpwd').on('click', function (e) {
			$('.login').hide();
			$('.message').html('请输入您的注册邮箱！');
			$('.forget').show();
		});
		$('.forget .backlogin').on('click', function (e) {
			$('.forget').hide();
			$('.message').html('请输入用户名和密码登录！');
			$('.login').show();
		});

		/*$(".banner-image").backstretch('login/images/bg2.jpg');*/
		$(".banner-image").backstretch([
			"app/images/login/1.jpg"
			, "app/images/login/2.jpg"
			, "app/images/login/bj1.jpg"
			, "app/images/login/bj2.jpg"
		], {duration: 1500, fade: 750});
	});
})(this.jQuery);