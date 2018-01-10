var http = require('http')
var fs = require('fs')
var request = require('request')

http
	.createServer(function(req, res) {
		// fs.readFile('stream_copy_logo.png', function(err, data) {
		// 	if (err) {
		// 		res.end('file not exist!')
		// 	} else {
		// 		res.writeHeader(200, {'Content-Type':'text/html'})
		// 		res.end(data)
		// 	}
		// })

		// fs.createReadStream('stream_copy_logo.png').pipe(res)
		request('https://tb1.bdstatic.com/tb/cms/ngmis/images/file_1515174233048.jpg').pipe(res)
	})
	.listen(8090)