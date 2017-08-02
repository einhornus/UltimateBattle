QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});



QUnit.test( "hello test 2", function( assert ) {
    assert.ok( 2 == "1", "Passed!" );
});



QUnit.test( "barker", function( assert ) {
    world = new Lib.World();
    world.bark();
    assert.ok(true, "Good");
});
