QUnit.test("one dim collisions", function( assert ) {
    assert.ok(Lib.oneDimCollisionTest(0, 7, 2, 4));
    assert.ok(Lib.oneDimCollisionTest(7, 0, 2, 4));
    assert.ok(Lib.oneDimCollisionTest(7, 0, 4, 2));
    assert.ok(Lib.oneDimCollisionTest(0, 7, 4, 2));

    assert.ok(Lib.oneDimCollisionTest(0, 5, 6, 3));
    assert.ok(Lib.oneDimCollisionTest(4, 7, 0, 4));
    assert.ok(Lib.oneDimCollisionTest(0, 1, 2, 1));

    assert.ok(!Lib.oneDimCollisionTest(0, 6, 7, 7));
    assert.ok(!Lib.oneDimCollisionTest(1, 0, -7, -5));
});


QUnit.test("box collisions", function( assert ) {
    var rectangle1 = new Lib.RectangularObject(0, 0, 6, 6);
    var rectangle2 = new Lib.RectangularObject(3, 3.5, 4, 1);
    var rectangle3 = new Lib.RectangularObject(6, 3, 4, 4);
    var rectangle4 = new Lib.RectangularObject(-1, -3, 2, 4);

    assert.ok(Lib.boxCollisionTest(rectangle1, rectangle1));

    assert.ok(Lib.boxCollisionTest(rectangle1, rectangle2));
    assert.ok(!Lib.boxCollisionTest(rectangle1, rectangle3));
    assert.ok(Lib.boxCollisionTest(rectangle1, rectangle4));
    assert.ok(Lib.boxCollisionTest(rectangle2, rectangle3));
    assert.ok(!Lib.boxCollisionTest(rectangle2, rectangle4));
    assert.ok(!Lib.boxCollisionTest(rectangle3, rectangle4));
});



QUnit.test("ultimate collisions", function( assert ) {
    var rectangle1 = new Lib.RectangularObject(0, 0, 6, 6);
    var rectangle2 = new Lib.RectangularObject(3, 3.5, 4, 1);
    var rectangle3 = new Lib.RectangularObject(6, 3, 4, 4);
    var rectangle4 = new Lib.RectangularObject(-1, -3, 2, 4);

    var ball1 = new Lib.CircularObject(3, -5, 2);
    var ball2 = new Lib.CircularObject(4, -4, 1.43);
    var ball3 = new Lib.CircularObject(4, -4, 1.41);
    var ball4 = new Lib.CircularObject(-4, 4, 2.5);

    var ball5 = new Lib.CircularObject(1, 1, 2);
    var ball6 = new Lib.CircularObject(4, 5, 3.2);
    var ball7 = new Lib.CircularObject(4, 5, 2.9);



    assert.ok(Lib.collisionTest(rectangle1, rectangle1));
    assert.ok(Lib.collisionTest(rectangle1, rectangle2));
    assert.ok(!Lib.collisionTest(rectangle1, rectangle3));
    assert.ok(Lib.collisionTest(rectangle1, rectangle4));
    assert.ok(Lib.collisionTest(rectangle2, rectangle3));
    assert.ok(!Lib.collisionTest(rectangle2, rectangle4));
    assert.ok(!Lib.collisionTest(rectangle3, rectangle4));


    assert.ok(Lib.collisionTest(rectangle1, ball1));
    assert.ok(Lib.collisionTest(ball2, rectangle1));
    assert.ok(!Lib.collisionTest(rectangle1, ball3));
    assert.ok(Lib.collisionTest(rectangle1, ball4));


    assert.ok(Lib.collisionTest(ball5, ball6));
    assert.ok(!Lib.collisionTest(ball5, ball7));
});


