var Lib = {}
var add = function(a, b){
	return a+b;
};


function getMethods(obj) {
    var result = [];
    for (var id in obj) {
        try {
            if (typeof(obj[id]) == "function") {
                result.push(id + ": " + obj[id].toString());
            }
        } catch (err) {
            result.push(id + ": inaccessible");
        }
    }
    return result;
}

Lib.add = add;
Lib.getMethods = getMethods;



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

Shape.prototype.getCenter = function(){
    var left = this.getLeft();
    var right = this.getRight();
    var top = this.getTop();
    var bottom = this.getBottom();
    var x = (left + right)/2.0;
    var y = (top+bottom)/2.0;
    return {x:x, y:y}
};

Shape.prototype.getWidth = function(){
    return this.getRight() - this.getLeft();
};

Shape.prototype.getHeight = function(){
    return this.getBottom() - this.getTop();
};

Shape.prototype.render = function(matrix, width, height, character){
    for(var x = Math.round(this.getLeft()); x<=Math.round(this.getRight()); x++){
        for(var y = Math.round(this.getTop()); y<=Math.round(this.getBottom()); y++){
            if(x >= 0 && x<width){
                if(y >= 0 && y<height){
                    matrix[y][x] = character;
                }
            }
        }
    }
};


Lib.Shape = Shape;
function Circle(x, y, rad){
    Lib.Shape.call(this, x, y);
    this.rad = rad;
    this.isRound = true;
}

Circle.prototype = Object.create(Lib.Shape.prototype);


Circle.prototype.render = function(matrix, width, height, character){
    for(var x = Math.round(this.getLeft()); x<=Math.round(this.getRight()); x++){
        for(var y = Math.round(this.getTop()); y<=Math.round(this.getBottom()); y++){
            if(x >= 0 && x<width){
                if(y >= 0 && y<height){
                    var dist = Lib.dist(new Lib.Point(this.x, this.y), new Point(x, y));
                    if (dist <= this.rad) {
                        matrix[y][x] = character;
                    }
                }
            }
        }
    }
};

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

WorldObject.prototype.onCollideWithBlock = function(){
    throw new {name:"Not implemented"};
};

WorldObject.prototype.render = function(matrix, width, height){
    this.body.render(matrix, width, height, 'O');
};

WorldObject.prototype.getPic = function(){
    return 'default';
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
Lib.epsilon = 0.00001;
function Block(x, y, width, height){
    var shape = new Lib.Rectangle(x, y, width, height);
    WorldObject.call(this, shape);
    this.isBlock = true;
}

Block.prototype = Object.create(Lib.WorldObject.prototype);

Block.prototype.render = function(matrix, width, height){
    this.body.render(matrix, width, height, 'B');
};

Lib.Block = Block;
function MovingObject(body){
    this.velocityX = 0;
    this.velocityY = 0;
    this.isMovingObject = true;
    WorldObject.call(this, body);
}

MovingObject.prototype = Object.create(Lib.WorldObject.prototype);

MovingObject.prototype.setVelocity = function(velX, velY){
    this.velocityX = velX;
    this.velocityY = velY;
};

MovingObject.prototype.tick = function(){
    this.move(this.velocityX, this.velocityY);
};

MovingObject.prototype.onCollisionWithBlock = function(){
    throw new {name:"Not implemented"};
};

Lib.MovingObject = MovingObject;
function World(time){
    if(!time){
        time = 0;
    }
    this.time = time;
    this.gravity = 0.1;
    this.objects = [];
}


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

function Event(time){
    this.time = time;
}

Event.prototype.apply = function(world){
    throw {name:"Not implemented"};
};

Lib.Event = Event;

function EventPool(){
    this.events = [];
}

EventPool.prototype.addEvent = function(event){
  this.events.add(event);
};

EventPool.prototype.filterEvents = function(time){
    res = [];
    for(var i = 0; i<this.events.length; i++){
        if(this.events[i].time == time){
            res.add(this.events[i])
        }
    }
    return res;
};

Lib.EventPool = EventPool;



function collideMovingObjectWithBlock(obj, block) {
    obj.onCollideWithBlock();
    var objShape = obj.body;
    var blockShape = block.shape;


    if (objShape.getBottom() > blockShape.getTop()) {
        objShape.y = blockShape.getTop() - objShape.getHeight() / 2.0;
        obj.velocityY = 0;
        return;
    }


    if (objShape.getTop() < blockShape.getBottom()) {
        objShape.y = blockShape.getBottom() + objShape.getHeight() / 2.0;
        obj.velocityY = 0;
        return;
    }


    if (objShape.getLeft() < blockShape.getRight()) {
        objShape.x = blockShape.getRight() + objShape.getWidth() / 2.0;
        return;
    }

    if (objShape.getRight() > blockShape.getLeft()) {
        objShape.x = blockShape.getLeft() - objShape.getWidth() / 2.0;
    }
}


Lib.collideMovingObjectWithBlock = collideMovingObjectWithBlock;
function collide(one, another){
    if(Lib.collisionTest(one.body, another.body)) {
        if (one.isBlock && another.isMovingObject) {
            Lib.collideMovingObjectWithBlock(one, another);
        }

        if (one.isMovingObject && another.isBlock) {
            Lib.collideMovingObjectWithBlock(another, one);
        }
    }
}


Lib.collide = collide;
try {module.exports.Lib = Lib;}catch(exc){console.log('module not defined')}
