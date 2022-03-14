const express = require("express")
const app = express()
const cors = require("cors")
// const router = require("./router.js")

app.use(express.json());
app.use(cors());
app.listen(process.env.PORT || 3000, () => console.log("Express now departing from port")) 

app.get("/", (req,res)=> {
    res.send("hello world")
})
const { Server } = require("socket.io");
const io = new Server(Server)
io.on('connection', (socket) => {
  console.log('a user connected');
});
module.exports = app;
