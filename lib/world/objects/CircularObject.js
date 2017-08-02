function CircularObject(x, y, rad){
    Lib.WorldObject.apply(this, arguments);
    this.rad = rad;
    this.type = 'CircularObject'
    this.isRound = true;
}

CircularObject.prototype = Object.create(Lib.WorldObject.prototype);

CircularObject.prototype.getLeft = function () {
    return this.x - this.rad;
};

CircularObject.prototype.getRight = function () {
    return this.x + this.rad;
};

CircularObject.prototype.getBottom = function () {
    return this.y + this.rad;
};

CircularObject.prototype.getTop = function () {
    return this.y - this.rad;
};

Lib.CircularObject = CircularObject;