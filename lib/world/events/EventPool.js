function EventPool(){
    this.events = [];
}

EventPool.prototype.addEvent = function(event){
  this.events.add(event);
};

EventPool.prototype.filterEvents = function(time){
    res = [];
    for(var i = 0; i<this.objects.length; i++){
        if(this.events[i].time == time){
            res.add(this.events[i])
        }
    }
    return res;
};