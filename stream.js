// 从流中读取数据
/*
data: 当有数据可读时触发
end: 没有更多的数据可读时触发
error: 在接收和写入过程中发生错误时触发
finish: 所有数据已被写入到底层系统时触发
*/
/*
var fs = require("fs");
var data = 'xxx';

// 创建可读流
var readerStream = fs.createReadStream('file/input.txt');

// 设置编码为utf-8
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error

readerStream.on('data', (chunk) => {
	data += chunk;
});

readerStream.on('end', () => {
	console.log(data);
});

readerStream.on('error', (err) => {
	console.log(err.stack);
});

console.log("程序执行完毕");
*/

// 写入流
/*
var fs = require("fs");
var data = '贵州风向至合官网地址：fxzh.rhtps.com';

// 创建一个可以写入的流，写入到文件output.txt中
var writerStream = fs.createWriteStream('file/output.txt');

// 使用utf-8编码写入
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理事件 --> data, end, and error
writerStream.on('finish', () => {
	console.log("写入完成。");
});

writerStream.on('error', (err) => {
	console.log("err.stack");
});

console.log("程序执行完毕");
*/

// 管道流(一个输出流到输入流机制)
// 读取一个文件内容并将内容写入到另一个文件中。
/*
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('file/input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('file/output.txt');

// 管道读写操作
// 读取input.txt文件内容，并将其写入到output.txt文件中。
readerStream.pipe(writerStream);

console.log("程序执行完毕");
*/

// 链式流(通过连接输出流到另一个流并创建多个流操作链的机制)
// 通过管道和链式来压缩和解压文件

var fs = require("fs");
var zlib = require('zlib');

// 压缩input.txt文件为input.txt.gz
// fs.createReadStream('file/input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('file/input.txt.gz'));

// console.log("文件压缩完成。");

// 解压input.txt.gz文件为input.txt
fs.createReadStream('file/input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");


















