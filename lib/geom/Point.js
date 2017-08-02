function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.length = function(){
  return Math.sqrt(x*x + y*y);
};

function dist(a, b){
    return Math.sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y));
}

Lib.Point = Point;
Lib.dist = dist;