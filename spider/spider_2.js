const http = require('http')
const cheerio = require('cheerio')

const url = 'http://www.ziroom.com/'

getPageAsync().then((res) => {
	var slideListData = filterSlideList(res)
	printInfo(slideListData)
})

function getPageAsync() {
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
	    
	    var html = ''

	    res.on('data', (chunk) => {
	            html += chunk
	        })
	        .on('end', () => {
	            // var slideListData = filterSlideList(html)
	            resolve(html)
	            // 打印数据
	            // printInfo(slideListData)
	        })

		}).on('error', (e) => {
			reject(e.message)
		    // console.log(e.message)
		})
	})
}

function filterSlideList(html) {
	if (html) {
		const $ = cheerio.load(html)

		var slideList = $('#foucsSlideList')
		var li = slideList.find('li')
		var slideListData = []

		li.each(function() { // 不能使用箭头函数
			var pic = $(this)

			var pic_href = pic.find('a').attr('href')
			var pic_src = pic.find('a').children('img').attr('_src')
			var pic_message = pic.find('a').children('img').attr('alt')

			slideListData.push({
				pic_href,
				pic_src,
				pic_message
			})			
		})

		return slideListData
	} else {
		console.log('数据获取错误')
	}
}

function printInfo(slideListData) {
	var count = 0
	slideListData.forEach((item) => {
		var pic_src = item.pic_src
		var pic_href = item.pic_href
		var pic_message = item.pic_message

		console.log('第' + (++count) + '个轮播图')
		console.log(pic_message)
		console.log(pic_href)
		console.log(pic_src)
		console.log('\n')
	})
}