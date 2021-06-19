const http = require("http");
const path = require("path");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     //Set Content-type

  //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(data);
  //     });
  //   }
  //   if (req.url === "/about") {
  //     //Set Content-type

  //     fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(data);
  //     });
  //   }

  //   if (req.url === "/api/users") {
  //     const users = [
  //       { name: "Bob Smith", age: 54 },
  //       { name: "Jackie Chan", age: 67 },
  //     ];

  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  //CREATE DYNAMIC ROUTES
  //Build filepath
  let filepath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filepath);
  res.end();

  //get extension of file
  let extname = path.extname(filepath);

  //Iitial content type
  let contentType = "text/html";

  //Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //Read File
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            if (err) throw err;
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentTypes });
      res.end(content, "utf8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
