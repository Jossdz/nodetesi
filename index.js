const express = require("express");
const bodyParser = require("body-parser");
const mainRouters = require("./routes");

const server = express();

const PORT = 3000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use("/", mainRouters);

server.get("*", (req, res) => {
  res.send("404, ke busca wey");
});

server.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});
