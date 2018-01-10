var http = require('http');

// 用于请求的选项
var options = {
	host: 'localhost',
	port: '8080',
	path: '/index.html'
};

// 处理响应的回调函数
var callback = (res) => {
	// 不断更新数据
	var body = '';
	res.on('data', (data) => {
		body += data;
	});

	res.on('end', () => {
		// 数据接收完成
		console.log(body);
	});
};

// 向服务端发送请求
var req = http.request(options, callback);
req.end();