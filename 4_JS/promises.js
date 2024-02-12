const promise = new Promise((resolve, reject) => {
  let a = 5;
  let b = 5;
  setTimeout(() => {
    if (a === b) resolve("a=b");
    reject();
  }, 2000);
});
console.log(promise);
let p1 = promise;
console.log(p1);
p1.then((data) => console.log(data));
