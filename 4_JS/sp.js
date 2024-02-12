const fs = require("fs");
// const prime = require("./prime");

console.log("first line");
let data = fs.readFileSync("./f1.txt");
console.log("  " + data);
console.log("last line");
