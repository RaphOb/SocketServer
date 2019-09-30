var express = require('express');
var app = express();
var server = app.listen(3001, () => {
    console.log('App listening on port 3001!');
});

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log("Connected on 3001");


socket.on('topicnext', function(data) {
    socket.broadcast.emit('topicnext', data);
    console.log(data)
})
socket.on('topicprev', function(data) {
    socket.broadcast.emit('topicprev', data);
    console.log(data)
})

socket.on('sessionvote', function(data) {
    socket.broadcast.emit('sessionvote', data);
    console.log(data)
})

socket.on('isVoted', function(data) {
    socket.broadcast.emit('isVoted', data);
    console.log(data)
})

socket.on('isNotVoted', function(data) {
    socket.broadcast.emit('isNotVoted', data);
    console.log(data)
})

}
