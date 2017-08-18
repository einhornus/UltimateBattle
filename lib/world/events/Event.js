function Event(time){
    this.time = time;
}

Event.prototype.apply = function(world){
    throw {name:"Not implemented"};
};

Lib.Event = Event;
