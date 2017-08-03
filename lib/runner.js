var lib = require('./ultimateBattleLib.js');
Lib = lib.Lib;

var rectangle1 = new Lib.Rectangle(0, 0, 6, 6);
var rectangle2 = new Lib.Rectangle(3, 3.5, 4, 1);
var rectangle3 = new Lib.Rectangle(6, 3, 4, 4);
var rectangle4 = new Lib.Rectangle(-1, -3, 2, 4);

var ball1 = new Lib.Circle(3, -5, 2);
var ball2 = new Lib.Circle(4, -4, 1.43);
var ball3 = new Lib.Circle(4, -4, 1.41);
var ball4 = new Lib.Circle(-4, 4, 2.5);

var ball5 = new Lib.Circle(1, 1, 2);
var ball6 = new Lib.Circle(4, 5, 3.2);
var ball7 = new Lib.Circle(4, 5, 2.9);


console.log(Lib.boxCollisionTest(rectangle1, rectangle2));

console.log(Lib.collisionTest(ball5, ball6));
