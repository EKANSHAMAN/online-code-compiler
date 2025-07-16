module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("code_change", (newCode) => {
      socket.broadcast.emit("code_update", newCode);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};
