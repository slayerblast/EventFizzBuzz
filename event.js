const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on("nombreReçu", function(eventArguments) {
    eventArguments = 30
    if((eventArguments % 3 == 0) && (eventArguments % 5 == 0))
    return console.log("fizzbuzz");
    
    else if(eventArguments % 3 == 0)
    return console.log("fizz");

    if(eventArguments % 5 == 0)
    return console.log("buzz");

    else return console.log(eventArguments);
});

emitter.emit("nombreReçu");