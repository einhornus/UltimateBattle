var lib = require('./ultimateBattleLib.js');


Lib = lib.Lib;

var world = new Lib.World();

var obj = new Lib.Block(15, 10, 100, 2);
world.objects.push(obj);

var mov = new Lib.MovingObject(new Lib.Circle(10, 6, 1));
world.objects.push(mov);

function renda(){
    console.log("Time = "+world.time);
    world.textRender(30, 10);
    world.tick(new Lib.EventPool());
    setTimeout(renda, 2000);
}

renda();

console.log(Lib.getMethods(obj));