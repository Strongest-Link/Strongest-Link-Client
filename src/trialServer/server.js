const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

const port = process.env.PORT || 8000;

httpServer.listen(port, () => {
  console.log(`Express just departed from port ${port}!`);
});

app.get("/", (req, res) => {
  res.send("server is up and running :)");
});
io.on("connection", (socket) => {
  console.log("User connected", socket.id); // runs when client first connects
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("startgame", (message) => {
    console.log(message, socket.id);
  });
});
