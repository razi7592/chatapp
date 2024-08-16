const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

const users = {};

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('login', (username) => {
        users[socket.id] = username;
        io.emit('user joined', username);
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', {
            sender: users[socket.id],
            message: msg
        });
    });

    socket.on('disconnect', () => {
        io.emit('user left', users[socket.id]);
        delete users[socket.id];
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
