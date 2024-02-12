const fs = require("fs");

console.log("before");

const f1 = fs.readFile("./f1.txt", cb1);

function cb1(err, data) {
  if (err) console.log(err);
  console.log("f1 file data " + data);
}

const f2 = fs.readFile("./f2.txt", callback);
function callback(error, data) {
  if (error) console.log(error);
  console.log("f2 data" + data);
}

console.log("after");
