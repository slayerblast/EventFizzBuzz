const EventEmitter = require('events');
const emitter = new EventEmitter();
let tab = ["fizz","fizzbuzz"]
emitter.on("nombreReçu", function(eventArguments) {
    eventArguments = 19

    if((eventArguments % 3 == 0) && (eventArguments % 5 == 0))
    console.log("fizzbuzz");

    else if(eventArguments % 3 == 0)
    console.log("fizz");
    if(eventArguments % 5 == 0)
    console.log("buzz");
    else console.log(eventArguments);
});

emitter.emit("nombreReçu");