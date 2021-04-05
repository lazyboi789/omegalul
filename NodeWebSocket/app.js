const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({server: server});

wss.on('connection', function connection(ws){
    console.log('New Client Connected');

    ws.on('message', function incoming(message){
        console.log('received: ' + message);
    });

    ws.send(JSON.stringify("HELLO"));
});

server.listen(3000, () => console.log('Listening on port : 3000'))