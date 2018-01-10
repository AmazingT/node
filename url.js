/*
var http = require('http');
var url = require('url');
var util = require('util');

// 获取Get请求内容
http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

	// 解析URL参数
	var params = url.parse(req.url, true).query;

	res.write("网站名：" + params.name);
	res.write("\n");
	res.write("网站URL：" + params.url);
	//该方法会通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成。 每次响应都必须调用 response.end() 方法。
	res.end();
}).listen(3000);
*/

// 获取POST请求内容
var http = require('http');
var util = require('util');
var os = require('os');
var path = require('path');
var querystring = require('querystring');

var postHTML = `
	<html>
		<head>
			<meta charset="utf-8">
			<title>菜鸟教程 Node.js 实例</title>
		</head>
  		<body>
  			<form method="post">
			    网站名： <input name="name"><br>
			    网站 URL： <input name="url"><br>
			    <input type="submit">
		    </form>
        </body>
    </html>`;

http.createServer((req, res) => {
	// 定义了一个post变量，用于暂存请求体的信息
	var post = '';

	// 通过req的data事件监听函数，每当接收到请求体的数据，就累加到post变量中
	req.on('data', (chunk) => {
		post += chunk;
	});

	// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
	req.on('end', () => {
		// 解析参数
		post = querystring.parse(post);
		// 设置响应头部信息及编码
		res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});

		if (post.name && post.url) { // 输出提交的数据
			res.write("网站名：" + post.name);
			res.write("<br/>");
			res.write("网站URL：" + post.url);
		} else { // 输出表单
			res.write(postHTML);
			res.write(os.type());
			res.write("文件后缀名：" + path.extname('url.js'));
		}
		res.end();
	});
}).listen(8888);
















