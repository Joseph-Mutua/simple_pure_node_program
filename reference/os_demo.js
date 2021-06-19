const os = require("os");

//Platform
console.log(os.platform());

//CPU Architecture
console.log(os.arch());

//CPU Core info
console.log(os.cpus());

//Get amt of free memory
console.log(os.freemem());

//Get system total memory
console.log(os.totalmem());

//Uptime
console.log(os.uptime());
