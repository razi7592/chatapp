const socket = io();
const chatArea = document.getElementById('chatArea');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');

const username = localStorage.getItem('username');
if (!username) {
    window.location.href = 'index.html';
} else {
    socket.emit('login', username);
}

messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = messageInput.value;
    if (message) {
        socket.emit('chat message', message);
        messageInput.value = '';
    }
});

socket.on('chat message', function(msg) {
    addMessage(msg.sender, msg.message);
});

socket.on('user joined', function(username) {
    addMessage('System', `${username} has joined the chat`);
});

socket.on('user left', function(username) {
    addMessage('System', `${username} has left the chat`);
});

function addMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight;
}
