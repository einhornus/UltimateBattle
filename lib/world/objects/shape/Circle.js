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