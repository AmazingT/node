// 服务器端
var net = require('net');
var server = net.createServer((con) => {
	console.log('客户端已连接！');
	con.on('end', () => {
		console.log('客户端关闭连接!');
	});

	con.write('Hello World!\r\n');
	con.pipe(con);
});

server.listen(8080, () => {
	console.log('服务器端正在监听...');
});