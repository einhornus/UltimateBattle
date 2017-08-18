function World(time){
    if(!time){
        time = 0;
    }
    this.time = time;
    this.gravity = 0.1;
    this.objects = [];
}

World.prototype.encode = function(){
    var res = {};
    res.time = time;
    res.gravity = gravity;
    res.objects = [];
    for(var i = 0; i<this.objects.length; i++){
        encoded = this.objects[i].encode();
        res.objects.push(encoded);
    }
    return res;
};

World.prototype.decode = function(en){
    var res = new World(en.time);
    res.time = time;
    res.gravity = en.gravity;
    for(var i = 0; i<e.objects.length; i++){
        res.objects.push(e.objects[i]);
    }
    return res;
};



World.prototype.tick = function(eventPool){
    var filteredEvents = eventPool.filterEvents(this.time);
    for(var i = 0; i<filteredEvents; i++){
        var event = filteredEvents[i];
        event.apply();
    }


    for(var i = 0; i<this.objects.length; i++) {
        var object = this.objects[i];

        if(object.isMovingObject){
            object.tick();
        }

        if(object.isMovingObject){
            object.velocityY += this.gravity;
        }
    }

    for(var i = 0; i<this.objects.length; i++){
        for(var j = i+1; j<this.objects.length; j++){
            Lib.collide(this.objects[i], this.objects[j]);
        }
    }

    this.time++;
};


World.prototype.textRender = function(width, height){
    matrix = [];
    for(var i = 0; i<height; i++){
        row = [];
        for(var j = 0; j<width; j++){
            row[j] = '.';
        }
        matrix[i] = row;
    }

    for(var i = 0; i<this.objects.length; i++){
        this.objects[i].render(matrix, width, height);
    }

    var str = "";
    for(var i = 0; i<height; i++){
        for(var j = 0; j<width; j++){
            var ch = matrix[i][j]
            str += ch;
        }
        str += "\n";
    }
    console.log(str);
};


World.prototype.addObject = function(object){
    this.objects.add(objects);
};


Lib.World = World;
Lib._World = _World;

