QUnit.test( "World object", function( assert ) {
    object = new WorldObject(new Lib.Circle(3, 4, 5));
    assert.ok(object.body.x == 3, "get x");
    object.move(2, 6);
    assert.ok(object.body.x == 3+2 && object.body.y == 4+6, "move");
});

