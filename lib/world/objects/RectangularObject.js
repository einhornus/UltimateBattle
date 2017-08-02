function RectangularObject(x, y, width, height){
    Lib.WorldObject.apply(this, arguments);
    this.width = width;
    this.height = height;
    this.type = 'RectangularObject';
    this.isRound = false;
}

RectangularObject.prototype = Object.create(Lib.WorldObject.prototype);


RectangularObject.prototype.getLeft = function () {
    return this.x - this.width / 2;
};

RectangularObject.prototype.getRight = function () {
    return this.x + this.width / 2;
};

RectangularObject.prototype.getBottom = function () {
    return this.y + this.height / 2;
};

RectangularObject.prototype.getTop = function () {
    return this.y - this.height / 2;
};

Lib.RectangularObject = RectangularObject;