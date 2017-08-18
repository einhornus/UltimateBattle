function collideMovingObjectWithBlock(obj, block) {
    obj.onCollideWithBlock();
    var objShape = obj.body;
    var blockShape = block.shape;


    if (objShape.getBottom() > blockShape.getTop()) {
        objShape.y = blockShape.getTop() - objShape.getHeight() / 2.0;
        obj.velocityY = 0;
        return;
    }


    if (objShape.getTop() < blockShape.getBottom()) {
        objShape.y = blockShape.getBottom() + objShape.getHeight() / 2.0;
        obj.velocityY = 0;
        return;
    }


    if (objShape.getLeft() < blockShape.getRight()) {
        objShape.x = blockShape.getRight() + objShape.getWidth() / 2.0;
        return;
    }

    if (objShape.getRight() > blockShape.getLeft()) {
        objShape.x = blockShape.getLeft() - objShape.getWidth() / 2.0;
    }
}


Lib.collideMovingObjectWithBlock = collideMovingObjectWithBlock;