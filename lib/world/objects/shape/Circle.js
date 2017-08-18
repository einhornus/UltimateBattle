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