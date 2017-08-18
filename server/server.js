var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var log4js = require('log4js');

var port = 3000;
console.log("started");
server.listen(port);
var lib = require('..\\lib\\ultimateBattleLib.js');
var Lib = lib.Lib;

var world = new Lib.World();
var obj = new Lib.Block(15, 10, 100, 2);
world.objects.push(obj);

var mov = new Lib.MovingObject(new Lib.Circle(10, 6, 1));
world.objects.push(mov);


io.on('connection', function (socket) {
    console.log(world);
    socket.emit('world', world);


    socket.emit('meh', function(a, b){
        return a+b;
    });


    /*
    socket.on('message', function (msg) {
        console.log('-----------');
        console.log('User: ' + name + ' | Message: ' + msg);
        console.log('====> Sending message to other chatters...');
    });
    */
});






