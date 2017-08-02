var Lib = {}
var add = function(a, b){
	return a+b;
};

Lib.add = add;


function World(map){
    
}

World.prototype.bark = function(){
  console.log("bark bark");
  console.log(Lib.add(3, 5));
};


Lib.World = World;

try {module.exports.Lib = Lib;}catch(exc){console.log('module not defined')}
