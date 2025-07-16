import { io } from "socket.io-client";

const socket = io("https://online-code-compiler-cr6y.onrender.com", {
  transports: ['websocket'],  // Optional, for reliability
});

export default socket;
