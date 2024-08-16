**The Real-Time Chat Application is a project designed to enable users to log in, send messages,The application is deployed on an AWS EC2 instance, making it accessible via a web browser.**


------------------------------------------------------
**Create a new project folder**
mkdir chat-app
cd chat-app
------------------------------------------------------
**Initialize the Node.js project and install dependencies:**

npm init -y
npm install express socket.io
-----------------------------------------------------
**Create the following file structure:**
chat-app/
├── public/
│   ├── index.html
│   ├── chat.html
│   ├── login.js
│   └── chat.js
└── server.js
