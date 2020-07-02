const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter();

setImmediate(() => {
    myEmitter.emit('TEST.EVENT');
});


myEmitter.on('TEST.EVENT', () => {
    console.log('TEST.EVENT was fired');
});

myEmitter.on('TEST.EVENT', () => {
    console.log('TEST.EVENT was fired');
});

myEmitter.on('TEST.EVENT', () => {
    console.log('TEST.EVENT was fired');
});

//myEmitter.emit('TEST.EVENT');
