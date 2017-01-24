// sign in

module.exports = {
	'POST /signin': async (ctx, next) => {
		var
			text = ctx.request.body.text || '',
			password = ctx.request.body.password || '';
		if (text === 'bevis' && password === '123456') {
			console.log('signin ok!');
			ctx.render('signin-ok.html', {
				title: '登录成功',
				name: 'Mr Bevis'
			});
		} else {
			console.log('signin failed!');
			ctx.render('signin-failed.html', {
				title: '登录失败'
			});
		}
	}
};
