function oneDimCollisionTest(x1, x2, y1, y2){
    if(Math.max(x1, x2) < Math.min(y1, y2)){
        return false;
    }

    if(Math.max(y1, y2) < Math.min(x1, x2)){
        return false;
    }

    return true;
}

function boxCollisionTest(a, b) {
    xDim = Lib.oneDimCollisionTest(a.getLeft(), a.getRight(), b.getLeft(), b.getRight());
    yDim = Lib.oneDimCollisionTest(a.getTop(), a.getBottom(), b.getTop(), b.getBottom());
    if(xDim && yDim){
        return true;
    }
    else{
        return false;
    }
}

function rectBallCollisonTest(rect, ball){
    var p1 = new Lib.Point(rect.getLeft(), rect.getTop());
    var p2 = new Lib.Point(rect.getLeft(), rect.getBottom());
    var p3 = new Lib.Point(rect.getRight(), rect.getTop());
    var p4 = new Lib.Point(rect.getRight(), rect.getBottom());

    var center = new Lib.Point(ball.x, ball.y);

    if(Lib.dist(p1, center) <= ball.rad){
        return true;
    }

    if(Lib.dist(p2, center) <= ball.rad){
        return true;
    }

    if(Lib.dist(p3, center) <= ball.rad){
        return true;
    }

    if(Lib.dist(p4, center) <= ball.rad){
        return true;
    }

    return false;
}


function ballBallCollisonTest(ball1, ball2){
    var center1 = new Lib.Point(ball1.x, ball1.y);
    var center2 = new Lib.Point(ball2.x, ball2.y);


    var d = Lib.dist(center1, center2);
    var rsumm = ball1.rad + ball2.rad;

    if(d <= rsumm){
        return true;
    }

    return false;
}

function collisionTest(a, b){
    if(!Lib.boxCollisionTest(a, b)){
        return false;
    }

    if(!a.isRound && b.isRound){
        return rectBallCollisonTest(a, b);
    }

    if(a.isRound && !b.isRound){
        return rectBallCollisonTest(b, a);
    }

    if(a.isRound && b.isRound){
        return ballBallCollisonTest(a, b);
    }

    return true;
}

Lib.boxCollisionTest = boxCollisionTest;
Lib.oneDimCollisionTest = oneDimCollisionTest;
Lib.collisionTest = collisionTest;