/*
var events = require('events')

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('连接成功');

	eventEmitter.emit('data_received')
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
	console.log('数据接收成功.');
});

eventEmitter.emit('connection');

console.log('程序执行完毕。');
*/

/*
var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('some_event', function() {
	console.log('some_event 事件触发');
});

setTimeout(function() {
	event.emit('some_event')
}, 1000)
*/

// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
// var events = require('events');

// var emitter = new events.EventEmitter();

// emitter.on('someEvent', function(arg1, arg2) {
// 	console.log('listener1', arg1, arg2);
// });

// emitter.on('someEvent', function(arg1, arg2) {
// 	console.log('listener2', arg1, arg2);
// })

// emitter.emit('someEvent', 'arg1参数', 'arg2参数');

console.log(__filename);




























