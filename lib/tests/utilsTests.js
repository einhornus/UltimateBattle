QUnit.test( "World object", function( assert ) {
    object = new WorldObject(5, 4);
    assert.ok(object.x == 5, "get x");
    object.move(2, 6);
    assert.ok(object.x == 5+2 && object.y == 4+6, "move");
});

