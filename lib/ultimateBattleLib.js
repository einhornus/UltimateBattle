var Lib = {}
var add = function(a, b){
	return a+b;
};

Lib.add = add;


function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.length = function(){
  return Math.sqrt(x*x + y*y);
};

function dist(a, b){
    return Math.sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y));
}

Lib.Point = Point;
Lib.dist = dist;
function Shape(x, y){
    this.x = x;
    this.y = y;
}

Shape.prototype.move = function(dx, dy){
    this.x += dx;
    this.y += dy;
};

Lib.Shape = Shape;
function Circle(x, y, rad){
    Lib.Shape.apply(this, arguments);
    this.rad = rad;
    this.isRound = true;
}


Circle.prototype = Object.create(Lib.Shape.prototype);

Circle.prototype.getLeft = function () {
    return this.x - this.rad;
};

Circle.prototype.getRight = function () {
    return this.x + this.rad;
};

Circle.prototype.getBottom = function () {
    return this.y + this.rad;
};

Circle.prototype.getTop = function () {
    return this.y - this.rad;
};

Lib.Circle = Circle;
function Rectangle(x, y, width, height){
    Lib.Shape.apply(this, arguments);
    this.isRound = false;
    this.width = width;
    this.height = height;
}


Rectangle.prototype = Object.create(Lib.Shape.prototype);

Rectangle.prototype.getLeft = function () {
    return this.x - this.width / 2;
};

Rectangle.prototype.getRight = function () {
    return this.x + this.width / 2;
};

Rectangle.prototype.getBottom = function () {
    return this.y + this.height / 2;
};

Rectangle.prototype.getTop = function () {
    return this.y - this.height / 2;
};

Lib.Rectangle = Rectangle;
function WorldObject(shape) {
    this.body = shape;
}

WorldObject.prototype.move = function (dx, dy) {
    this.body.move(dx, dy);


};

Lib.WorldObject = WorldObject;
function oneDimCollisionTest(x1, x2, y1, y2){
    if(Math.max(x1, x2) < Math.min(y1, y2)){
        return false;
    }

    if(Math.max(y1, y2) < Math.min(x1, x2)){
        return false;
    }

    return true;
}

function boxCollisionTest(a, b) {
    xDim = Lib.oneDimCollisionTest(a.getLeft(), a.getRight(), b.getLeft(), b.getRight());
    yDim = Lib.oneDimCollisionTest(a.getTop(), a.getBottom(), b.getTop(), b.getBottom());
    if(xDim && yDim){
        return true;
    }
    else{
        return false;
    }
}

function rectBallCollisionTest(rect, ball){
    var p1 = new Lib.Point(rect.getLeft(), rect.getTop());
    var p2 = new Lib.Point(rect.getLeft(), rect.getBottom());
    var p3 = new Lib.Point(rect.getRight(), rect.getTop());
    var p4 = new Lib.Point(rect.getRight(), rect.getBottom());

    var center = new Lib.Point(ball.x, ball.y);

    if(Lib.dist(p1, center) <= ball.rad){
        return true;
    }

    if(Lib.dist(p2, center) <= ball.rad){
        return true;
    }

    if(Lib.dist(p3, center) <= ball.rad){
        return true;
    }

    if(Lib.dist(p4, center) <= ball.rad){
        return true;
    }

    return false;
}


function ballBallCollisionTest(ball1, ball2){
    var center1 = new Lib.Point(ball1.x, ball1.y);
    var center2 = new Lib.Point(ball2.x, ball2.y);


    var d = Lib.dist(center1, center2);
    var rsumm = ball1.rad + ball2.rad;

    if(d <= rsumm){
        return true;
    }

    return false;
}

function collisionTest(a, b){
    if(!Lib.boxCollisionTest(a, b)){
        return false;
    }

    if(!a.isRound && b.isRound){
        return rectBallCollisionTest(a, b);
    }

    if(a.isRound && !b.isRound){
        return rectBallCollisionTest(b, a);
    }

    if(a.isRound && b.isRound){
        return ballBallCollisionTest(a, b);
    }

    return true;
}

Lib.boxCollisionTest = boxCollisionTest;
Lib.oneDimCollisionTest = oneDimCollisionTest;
Lib.collisionTest = collisionTest;
function Block(x, y, width, height){
    body = new Lib.Rectangle(x, y, width, height);
    WorldObject.apply(this, body);
}

Block.prototype = Object.create(Lib.WorldObject.prototype);

Lib.Block = Block;
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

function Event(time){
    this.time = time;
}

Lib.Event = Event;

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



try {module.exports.Lib = Lib;}catch(exc){console.log('module not defined')}
