const http = require("http");
const path = require("path");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //Set Contet-type
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
