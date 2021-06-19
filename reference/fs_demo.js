const fs = require("fs");
const path = require("path");

//Create a Folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created!!");
});

//Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hellow world!!",
  (err) => {
    if (err) throw err;
    console.log("File created and written to!!");
  }
);

//Add test to an already existing file
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  "I love nodejs!!",
  (err) => {
    if (err) throw err;
    console.log("File created and written to!!");
  }
);

//Read File
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Rename a File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed!");
  }
);
