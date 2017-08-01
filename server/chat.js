var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var log4js = require('log4js');

var port = 3000;
console.log("started");
server.listen(port);

io.on('connection', function (socket) {
    var name = 'U' + (socket.id).toString().substr(1, 4);
    socket.broadcast.emit('newUser', name);
    socket.emit('userName', name);
    console.log(name + ' connected to chat!');


    socket.on('message', function (msg) {
        console.log('-----------');
        console.log('User: ' + name + ' | Message: ' + msg);
        console.log('====> Sending message to other chatters...');
        io.sockets.emit('messageToClients', msg, name);
    });
});

var lib = require('..\\lib\\ultimateBattleLib.js');



wrd = new lib.Lib.World();
wrd.bark();







