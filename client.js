// 客户端
var net = require('net');
var client = net.connect({port: 8080}, () => {
	console.log('连接到服务器');
});

client.on('data', (data) => {
	console.log(data.toString());
	client.end();
});

client.on('end', () => {
	console.log('客户端断开了与服务器的连接');
});