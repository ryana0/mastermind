const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs')

app.set('port', 3000)

app.use(express.static(__dirname))

server.listen(process.env.PORT || 3000, () => {
    console.log('go to http://localhost:3000/')
})