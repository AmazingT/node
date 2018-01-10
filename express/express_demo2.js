var express = require('express');
var app = express();

// 主页输出‘Hello World'
app.get('/', (req, res) => {
	console.log("主页GET请求");
	res.send('Hello GET');
});

// POST请求
app.post('/', (req, res) => {
	console.log("主页POST请求");
	res.send('Hello POST');
});

// delete 页面响应
app.get('/delete', (req, res) => {
	console.log("/delete响应DELETE请求");
	res.send('删除页面');
});

// list页面GET请求
app.get('/list', (req, res) => {
	console.log("/list GET请求");
	res.send('用户列表页面');
});

// 对页面abcd,abxcd,ab123cd 等响应GET请求
app.get('/ab*cd', (req, res) => {
	console.log("/ab*cd GET请求");
	res.send('正则匹配');
});

var server = app.listen(8081, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log("应用实例，访问地址为 http://%s:%s", host, port);
});