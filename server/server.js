const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});
io.on('connection', (socket)=> {
    socket.on("play", index => {
        console.log("server received", index)
        socket.broadcast.emit("play", index)
    })
    socket.on("terminada",boolean=>{
        if(boolean){
            socket.broadcast.emit("ganador",false)
        }
        
    })
    socket.on('create or join', function(room, clientName) {
        
        var numClients = io.sockets.adapter.rooms[room]!=undefined ? Object.keys(io.sockets.adapter.rooms[room]).length:0;
        if(numClients === 0){
            id = socket.id
            console.log(id)
            socket.join(room);
            socket.emit('created', room);
        }else if (numClients===1) {
            io.sockets. in (room).emit('join', room, clientName);
            socket.join(room);
            socket.emit('joined', room, socket.id);
        }else{
            socket.emit("full", room);
            alert("Sala completa")
        }
    })
})

server.listen(3000)