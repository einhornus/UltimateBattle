var lib = require('./ultimateBattleLib.js');
Lib = lib.Lib;

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



console.log(Lib.collisionTest(ball5, ball6));
