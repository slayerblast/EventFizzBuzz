const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on("messageReçu", function(eventArguments) {
    console.log(eventArguments);
});

emitter.emit("messageReçu","ceci est une string");