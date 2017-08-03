function WorldObject(shape) {
    this.body = shape;
}

WorldObject.prototype.move = function (dx, dy) {
    this.body.move(dx, dy);


};

Lib.WorldObject = WorldObject;