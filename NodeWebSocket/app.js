const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketio = require("socket.io")(server, {
  cors: {
    orgin: "http://localhost:3000",
    method: ["GET", "POST"]
  }
});

socketio.on('connection', socket => {
  console.log('Client Connected');
  socket.emit('getSocketId', socket.id);

  socket.on('message', (msg) => {
    console.log('message event called');
    console.log(msg);
  });

  socket.on('getSocketId', () => {
    console.log('getSocketId event called');
    socket.emit('getSocketId', socket.id);
  })

  socket.on('getUsers', () => {
    console.log('getUsers event called');
  
    socket.emit('getUsers', socket.clients);
  })

  //each socketID will be paired with username
  //array[username] = connectionId

});

server.listen(3000, () => console.log('Listening on port : 3000'))
