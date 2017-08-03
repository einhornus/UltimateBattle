function World(time){
    this.time = time;
    this.objects = [];
}


World.prototype.tick = function(eventPool){
    events = [];
    oldTime = this.time;
    newTime = this.time+1;
    for(var i = 0; i<eventPool.objects.length; i++){
        if(eventPool.events[i].time == newTime){
            events.add(eventPool.events[i])
        }
    }
};



World.prototype.addObject = function(object){
    this.objects.add(objects);
};


Lib.World = World;
