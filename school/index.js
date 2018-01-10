// index.js作为入口文件
var cls = require('./class')

exports.add = function (classes) {
	classes.forEach(function(item, index) {
		var _class = item
		var teacherName = item.teacherName
		var students = item.students

		cls.add('Scott', ['白富美', '高富帅'])
	})
}