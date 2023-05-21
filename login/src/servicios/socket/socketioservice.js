import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io("http://localhost:5174");
    this.socket.emit('my message', 'Hello there from Vue.');
    
    this.socket.on('my broadcast', (data) => {
      console.log("data");
    });
  }

  enviar(){
    this.socket.on("messages", function (data) {
        console.log(data);
        return data
      });
  }
  emitir(message){
    this.socket.emit("new-message",message)
  }
  
  disconnect() {
    if(this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();