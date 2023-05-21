const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const app = express();
app.use(cors()); // Configuración de CORS
const server = http.createServer(app);
const io = require('socket.io')(server, {
    rejectUnauthorized: false,
    cors: {
      origin: ["http://localhost:5173","http://localhost:5173/juego","http://localhost:3000","http://localhost:8080"],
      methods: ["GET", "POST"]
    }
  });

  app.get("/hello", function (req, res) {
    res.status(200).send("Hello World!");
  });
  
io.on('connection', (socket)=> {
    socket.emit("hello", "youtube tutorial");
    socket.on("play", index => {
        console.log("server received", index)
        socket.emit("play", index)
    })
    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
      });
})

server.listen(8080)