process.stdout.write("Hello World!" + "\n");

process.argv.forEach((val, index, array) => {
	console.log(index + ':' +val);
});

console.log("执行路径：" + process.execPath);

console.log("平台信息：" + process.platform);

console.log("当前目录：" + process.cwd());

console.log("当前版本：" + process.version);

console.log("当前内存使用情况：" + process.memoryUsage());