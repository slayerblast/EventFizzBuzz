const EventEmitter = require('event');

class Fizzbuzz extends EventEmitter{
    log(payload){
        
        this.emit('nombreReçu',payload);
    }
}
module.exports = Logger;