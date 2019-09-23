var express = require('express');
var app = express();
var room =  require('./room')
var part =  require('./participants')
var server = app.listen(3001, () => {
    console.log('App listening on port 3000!');
});

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log("avant on")
    console.log("Connected on 3001");


socket.on('topicnext', function(data) {
    socket.broadcast.emit('topicnext', data);
    console.log(data)
})
socket.on('topicprev', function(data) {
    socket.broadcast.emit('topicprev', data);
    console.log(data)
})

}