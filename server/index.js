import express from 'express';
import logger from 'morgan';
import path from 'path';

import { Server } from 'socket.io';
import { createServer } from 'node:http';

const port = process.env.PORT ?? 3000;

const app = express();
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {
        timeout: 1000
    }
});

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');
    
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
})

app.use(logger('dev'));

app.use(express.static(path.join(process.cwd(), 'cliente')));

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'cliente', 'index.html'));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
