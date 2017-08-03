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