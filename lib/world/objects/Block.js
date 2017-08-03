function Block(x, y, width, height){
    body = new Lib.Rectangle(x, y, width, height);
    WorldObject.apply(this, body);
}

Block.prototype = Object.create(Lib.WorldObject.prototype);

Lib.Block = Block;