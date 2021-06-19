const http = require("http");

//create server object
http
  .createServer((req, res) => {
    //Write Response
    res.write("Hello World!");
    res.end();
  })
  .listen(3000, () => {
    console.log("Server Running!!");
  });
