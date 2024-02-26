var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// socket
// const { createServer } = require("node:http");
const { join } = require("node:path");
// const { Server } = require("socket.io");

const app = express();
// const server = createServer(app);
// const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

// io.on("connection", (socket) => {
//   console.log("a user connected");
// });

// const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
