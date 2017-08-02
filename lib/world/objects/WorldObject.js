function WorldObject(x, y) {
    this.x = x;
    this.y = y;
    this.type = 'WorldObject'
}

WorldObject.prototype.move = function (dx, dy) {
    this.x += dx;
    this.y += dy;
};


Lib.WorldObject = WorldObject;