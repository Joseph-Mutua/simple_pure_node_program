// const person = require("./person");

// console.log(person);
// console.log(__dirname, __filename)

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener:", data));

logger.log("Shiet! This actually works LOL");
