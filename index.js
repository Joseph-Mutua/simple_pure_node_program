const http = require("http");
const path = require("path");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //Set Content-type

    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (req.url === "/about") {
    //Set Content-type

    fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }



  
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
