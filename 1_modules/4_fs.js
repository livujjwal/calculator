const fs = require("fs");

// const f1 = fs.readFileSync("./f1.txt");
// console.log("data of f1", f1);
// fs.writeFileSync("./f2.txt",("write data of f2"))
// fs.appendFileSync("./f3.txt", "update data of f3");
// fs.unlinkSync("f2.txt");
// fs.writeFileSync("./f2.txt",("write data of f2"))

// fs.mkdirSync("myFolder")
const folderPath = 'C:\\Users\\hp\\OneDrive\\Desktop\\Node\\calculator\\myFolder'
let folder = fs.readdirSync(folderPath)
console.log(folder);
