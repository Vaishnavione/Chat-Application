const express = require('express');
const http = require('http');
const app = express();
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('index');
});

const server = http.createServer(app);

const io = require("socket.io")(server);
io.on("connection", function(socket) {
    console.log(socket.id);

    socket.on("message", function(message) {
        console.log(message)
        socket.broadcast.emit( "message", message);
    });
});

server.listen(8090, () => {
    console.log("server is listening on port 8090");
});
