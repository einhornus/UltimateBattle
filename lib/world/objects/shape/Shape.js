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