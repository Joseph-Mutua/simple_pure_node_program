const path = require("path");

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//Create Path Object
console.log(path.parse(__filename));

//Concatenate paths
//E.g inside cureent directory, create link to folder called test with file called hello.html
console.log(path.join(__dirname, "test", "hello.html"));
