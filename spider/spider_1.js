const https = require('https')
const url = require('url').parse('https://wenku.baidu.com/view/67f4f181b1717fd5360cba1aa8114431b90d8e7a.html')
const iconv = require('iconv-lite')
const cheerio = require('cheerio')
// const BufferHelper = require('bufferhelper')

// console.log(typeof url) // Object

https.get(url, (res) => {
	// const bufferHelper = new BufferHelper()
	const buf = []
	var bufLength = 0

	res.on('data', (chunk) => {
		// console.log(Buffer.isBuffer(chunk)) // true
		buf.push(chunk) // Buffer对象数组列表
		bufLength += chunk.length
		// buf = Buffer.from(chunk) // 默认utf8编码
		// bufferHelper.concat(chunk)
		// console.log(bufferHelper)
		// console.log(buf.toString())
		// console.log(buf) // Buffer数组
	})
	.on('end', () => {
		const chunkAll = Buffer.concat(buf, bufLength)
		const body = iconv.decode(chunkAll, 'gb2312')
		console.log(body)
		// console.log(iconv.decode(buf, 'GBK')) // 改为GBK编码
		// console.log(iconv.decode(buf, 'GBK'))
		// console.log(iconv.decode(bufferHelper.toBuffer(), 'GBK'))
	})
})
