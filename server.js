const WebSocketServer = require('ws');
const express = require('express');
const http = require('http');
 
// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 8080 })
const server = http.createServer(express);
 
// Creating connection using websocket
wss.on("connection", (ws) => {
    console.log("new client connected");
    // sending message
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
    });
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});
console.log("The WebSocket server is running on port 8080");

server.listen(3000, function() {
    console.log(`Server is listening on 3000!`)
})