import express from "express";
import http from 'http';
import createChat from './views/chat.js';
import socketio from "socket.io";
import { userInfo } from "os";

const chat = createChat();
const app = express();
const server = http.createServer(app)
const sockets = socketio(server);

app.use(express.static('views'));

chat.addMessage({ messageUserId: 'user1', messageText: 'Mensagem Teste'});

sockets.on('connection', (socket) => {
   const userId = socket.id
   chat.addUser({ userId: userId });
   console.log('============================================')
   console.log("\n \n> Usuario se conectou: " + userId + '\n');
   console.log("> Usuarios online: ");
   for(var infoUser in chat.state.users) {
      console.log(infoUser);
   }

   sockets.emit('setup', {userId, chat}); 
   
   socket.on("disconnect", (reason) => {
      console.log('\n> Usuario desconectado: ' + userId +'\n')
      chat.removeUser({ userId });

      sockets.emit('userDisconnect', {userId, chat})
   });

   socket.on('sendMessage', (stats) => {
      console.log('\n\n> ENVIANDO MENSAGEM')
      if(stats.msg != '') {
         var messageContent = stats.msg
         sockets.emit('newMessage', { messageContent, userId }); 
      } else {
         console.log('\n> MENSAGEM VAZIA CANCELANDO ENVIO');
      }

   })
})

server.listen(4567, () => {

   console.log('\n> ABRINDO SERVIDOR...')
});

app.listen(3000)