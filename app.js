var iconv = require('iconv-lite')
var https = require('https')
var cheerio = require('cheerio')

var htmlData = []
var htmlDataLength = 0
var count = 0

const url = 'https://wenku.baidu.com/view/67f4f181b1717fd5360cba1aa8114431b90d8e7a.html'

https.get(url, (res) => {
	// console.log(`STATUS: ${res.statusCode}`)
	// console.log(`HEADERS: ${JSON.stringify(res.headers)}`)

	res.on('data', (chunk) => {
		// console.log(`BODY: ${chunk}`)
		htmlData.push(chunk)
		htmlDataLength += chunk.length
		count ++
	})

	res.on('end', () => {
		filterChapters(htmlData)
	})
}).on('error', (e) => {
	console.log(`ERROR: ${e.message}`)
})

function filterChapters(htmlData) {
	console.log(count)

	var bufferHtmlData = Buffer.concat(htmlData, htmlDataLength)
	var charset = ''
	var decodeHtmlData
	var htmlHeadTitle = ''
	var htmlHeadCharset = ''
	var htmlHeadContent = ''
	var index = 0

	var $ = cheerio.load(bufferHtmlData, {decodeEntities: false})

	$('meta', 'head').each((i, e) => {
		htmlHeadCharset = $(e).attr('charset')
		htmlHeadContent = $(e).attr('content')

		if (typeof(htmlHeadCharset) != 'undefined') {
			charset = htmlHeadCharset
		}

		if (typeof(htmlHeadContent) != 'undefined') {
			if (htmlHeadContent.match(/charset=/ig)) {
				index = htmlHeadContent.indexOf('=')
				charset = htmlHeadContent.substring(index + 1)
			}
		}
	})

	if (charset.match(/gb/ig)) {
		decodeHtmlData = iconv.decode(bufferHtmlData, 'gbk')
	} else {
		decodeHtmlData = iconv.decode(bufferHtmlData, 'utf8')
	}

	var $ = cheerio.load(decodeHtmlData, {decodeEntities: false})

	$('title', 'head').each((i, e) => {
		htmlHeadTitle = $(e).text()
		console.log(htmlHeadTitle)
	})

	console.log(htmlData.toString('utf8'))
}























