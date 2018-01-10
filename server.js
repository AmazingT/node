const http = require('http')
const express = require('express')
const mysql = require('mysql')
const querystring = require('querystring')

const app = express()

const hostname = '127.0.0.1'
const port = 8080

// 连接MySQL数据库
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: 3306,
	database: 'test'
})

app.post('/login', (req, res) => {
	// res.writeHead(200, {
	// 	'Content-Type': 'text/plain;charset=utf-8'
	// })

	var query = ''

	req.on('data', (chunk) => {
		query += chunk
	})

	req.on('end', () => {
		var queryObj = querystring.parse(query)

		// 连接数据库查询
		var sql = 'SELECT * FROM User WHERE username = ?'
		var sqlParams = queryObj.username

		connection.query(sql, sqlParams, (err, result) => {
			if (err) {
				console.log('[SELECT ERROR] -', err.message)
				return
			}

			console.log('-------查询结果-------')
			console.log(result)

			if (queryObj.password == result[0].password) {
				// res.set('Content-Type', 'text/html')
				res.send(`恭喜您，登录成功。您的信息如下:\n用户名：${queryObj.username}\n性别：${queryObj.sex}\n爱好：${queryObj.checkbox}`)
			} else {
				res.send('用户名或密码错误')
			}

			// for (var user of result) {
			// 	//Use to quickly end the response without any data. If you need to respond with data, instead use methods such as res.send() and res.json().
			// 	if (queryObj.username == user.username && queryObj.password == user.password) {
			// 		// res.set('Content-Type', 'text/html')
			// 		res.send(`恭喜您，登录成功。您的信息如下:\n用户名：${queryObj.username}\n性别：${queryObj.sex}\n爱好：${queryObj.checkbox}`)
			// 	} else {
			// 		res.send('登录失败')
			// 	}
			// }
		})	
	})

}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})

// http.createServer((req, res) => {
// 	res.writeHead(200, {
// 		'Content-Type': 'text/plain;charset=utf-8'
// 	})
// 	if (req.url == '/login' && req.method.toLowerCase() == 'post') {
// 		var data = ''

// 		req.on('data', (chunk) => {
// 			data += chunk
// 		})

// 		req.on('end', () => {
// 			// console.log(data) 
// 			var str = data.toString()
// 			// console.log(str)
// 			var obj = querystring.parse(data)//'a=b&c=d'字符串转对象

// 			if (obj.username == 'zb' && obj.password == '123') {
// 				res.end(`恭喜您，登录成功。您的信息如下:\n用户名：${obj.username}\n性别：${obj.sex}\n爱好：${obj.checkbox}`)
// 			} else {
// 				res.end('登录失败')
// 			}

// 			// console.log(obj.username)
// 			// console.log(obj.password)
// 			// console.log(obj.sex)
// 			// console.log(obj.checkbox)
// 		})
// 	}

// 	// res.end('jsonpCallback(' + json + ')')
// }).listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`)
// })