const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const socketHandler = require("./sockets/socketHandler");

require('dotenv').config();
const port = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

socketHandler(io);

server.listen(port, () => {
  console.log(`🚀 Compiler backend running at http://localhost:${port}`);
});
