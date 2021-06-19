const url = require("url");

const myURL = new URL("http://mutuajose.com/hello.html?id=100&status=active");

//Make a Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

//Host (root Domain)
console.log(myURL.host);

//Pathname
console.log(myURL.pathname);

//Serialized Query
console.log(myURL.search);

//Params object
console.log(myURL.searchParams);

//Add params
myURL.searchParams.append("abc", "123");
console.log(myURL.searchParams);

//Loop through Params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
