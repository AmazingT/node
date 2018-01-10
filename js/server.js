var http = require("http");
var querystring = require("querystring");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		var params = url.parse(request.url, true).query;
		console.log("提交参数为：" + params);

		var value = querystring.parse(querystring)["username"];
		console.log("username:" + value);

		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;