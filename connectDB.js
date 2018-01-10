var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port     : '3306',
  database : 'test'
});
 
connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

/*****************增****************/
/*
var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var data = ['风向至合', 'http://www.fxzh.com','2333','CN'];
//增
connection.query(addSql, data, (err, result) => {
	if (err) {
		console.log('[INSERT ERROR] -', err.message);
		return;
	}

	console.log('------------------插入结果------------------');
	console.log('INSERT ID:', result.insertId);
	console.log('INSERT ID：', result);
	console.log('-------------------------------------------');
});
*/

/*****************删****************/
/*
var delSql = 'DELETE FROM websites WHERE name = ?';
var delSqlParams = ['Facebook'];

connection.query(delSql, delSqlParams, (err, result) => {
	if (err) {
		console.log('DELETE ERROR -', err.message);
		return;
	}
	console.log('------------删除结果-----------');
	console.log('UPDATE affectedRows',result.affectedRows);
	console.log('------------------------------');
});
*/

/*****************查****************/
/*
var sql = 'SELECT * FROM websites';
// 查
connection.query(sql, (err, result) => {
	if (err) {
		console.log('[SELECT ERROR] -', err.message);
		return;
	}

	console.log('------------------查询结果---------------');
	console.log(result);

	// for (r of result) {
	// 	console.log(r.name);
	// }

	result.forEach((v, i) => {
		console.log(v.name);
	});
	console.log('----------------------------------------');
});
*/

/*****************改****************/
/*
var modSql = 'UPDATE websites SET name = ?,url = ? WHERE id = ?';
var modSqlParams = ['贵州风向至合传媒有限公司', 'http://fxzh.rhtps.com', 6];

connection.query(modSql, modSqlParams, (err, result) => {
	if (err) {
		console.log('[UPDATE ERROR] -', err.message);
		return;
	}
	console.log('--------------更新结果----------------');
	console.log(result);
	console.log('UPDATE affectedRows', result.affectedRows);
	console.log('------------------------------------');
});
*/

connection.end();



























