function Shape(x, y){
    this.x = x;
    this.y = y;
}

Shape.prototype.move = function(dx, dy){
    this.x += dx;
    this.y += dy;
};

Lib.Shape = Shape;