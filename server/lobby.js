


var Lobby = function(){
    this.users = [];
    this.maps = [];


    this.addNewUser = new function(user){
        this.users.add(user)
    };

    this.handle = new function(){
        var random = randomInteger(0, this.maps.length - 1);
        randomMap = this.maps[random];
    };
};

var Map = function(numberOfPlayers){
    this.numberOfPlayers = numberOfPlayers;
};


var Game = function(){

};