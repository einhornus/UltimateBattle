function Block(x, y, width, height){
    RectangularObject.apply(this, arguments);
}

Block.prototype = Object.create(Lib.RectangularObject.prototype);

Lib.Block = Block;