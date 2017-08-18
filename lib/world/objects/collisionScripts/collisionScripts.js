function collide(one, another){
    if(Lib.collisionTest(one.body, another.body)) {
        if (one.isBlock && another.isMovingObject) {
            Lib.collideMovingObjectWithBlock(one, another);
        }

        if (one.isMovingObject && another.isBlock) {
            Lib.collideMovingObjectWithBlock(another, one);
        }
    }
}


Lib.collide = collide;