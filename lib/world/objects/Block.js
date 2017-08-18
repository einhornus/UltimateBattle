function Block(x, y, width, height){
    var shape = new Lib.Rectangle(x, y, width, height);
    WorldObject.call(this, shape);
    this.isBlock = true;
}

Block.prototype = Object.create(Lib.WorldObject.prototype);

Block.prototype.render = function(matrix, width, height){
    this.body.render(matrix, width, height, 'B');
};

Lib.Block = Block;