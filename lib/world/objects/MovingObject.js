function MovingObject(body){
    this.velocityX = 0;
    this.velocityY = 0;
    this.isMovingObject = true;
    WorldObject.call(this, body);
}

MovingObject.prototype = Object.create(Lib.WorldObject.prototype);

MovingObject.prototype.setVelocity = function(velX, velY){
    this.velocityX = velX;
    this.velocityY = velY;
};

MovingObject.prototype.tick = function(){
    this.move(this.velocityX, this.velocityY);
};

MovingObject.prototype.onCollisionWithBlock = function(){
    throw new {name:"Not implemented"};
};

Lib.MovingObject = MovingObject;