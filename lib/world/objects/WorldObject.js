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