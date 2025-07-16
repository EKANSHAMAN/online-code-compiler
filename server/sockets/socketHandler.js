module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`✅ User connected: ${socket.id}`);

    // Listen for code changes and broadcast to all other clients
    socket.on("code_change", (newCode) => {
      socket.broadcast.emit("code_update", newCode);
    });

    // Handle disconnects
    socket.on("disconnect", () => {
      console.log(`❌ User disconnected: ${socket.id}`);
    });
  });
};
