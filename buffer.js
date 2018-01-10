/*
const buf = Buffer.from('runoob', 'ascii');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

buffer = Buffer.alloc(256);
len = buffer.write("www.runoob.com");

console.log("写入字节数：" + len); // 14
*/

/*
buf = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));
*/

// Buffer转换为JSON对象
/*
var buf = Buffer.from('www.runoob.com');
var json = buf.toJSON(buf);

console.log(json);
*/

// 缓冲区合并
/*
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log('buffer3内容:'+buffer3.toString());
*/

// 缓冲区比较
var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0) {
	console.log(buffer1 + ' 在 ' + buffer2 + '之前');
} else if (result == 0) {
	console.log(buffer1 + ' 与' + buffer2 + '相同');
} else {
	console.log(buffer1 + ' 在' + buffer2 + '之后');
}

























