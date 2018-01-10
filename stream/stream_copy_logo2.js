var fs = require('fs')

var readStream = fs.createReadStream('1.mp4')
var writeStream = fs.createWriteStream('1-stream.mp4')

// 边读边写(读快写慢时)
readStream.on('data', function(chunk) {
	// 为false时，数据还在缓存区
	if (!writeStream.write(chunk)) {
		console.log('still cached')
		readStream.pause()
	} 
})

readStream.on('end', function() {
	writeStream.end()
})

// 保证将数据缓存写入到目标时继续读取
writeStream.on('drain', function() {
	console.log('data drains')

	readStream.resume()
})