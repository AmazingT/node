var express = require('express');
var app = express();
var fs = require('fs');

// node中间件，用于处理JSON,Raw,Text和URL编码的数据
var bodyParser = require('body-parser');
// node中间件，用于处理enctype="multipart/form-data"的表单数据
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp'}).array('image'));

app.get('/index.html', (req, res) => {
	res.sendFile(__dirname + "/" + "index.html");
});

app.post('/file_upload', (req, res) => {
	console.log(req.files[0]); // 上传文件的信息

	var des_file = __dirname + "/" + req.files[0].originalname;

	fs.readFile(req.files[0].path, (err, data) => {
		fs.writeFile(des_file, data, (err) => {
			if (err) {
				console.log(err);
			} else {
				response = {
					message: 'File upload successfully',
					filename: req.files[0].originalname
				};
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
});


var server = app.listen(8081, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log(host + ":" + port);
});
