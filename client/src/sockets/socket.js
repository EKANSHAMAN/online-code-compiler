import { io } from "socket.io-client";

const socket = io("https://online-code-compiler-cr6y.onrender.com", {
  transports: ["websocket"],
});

export default socket;
