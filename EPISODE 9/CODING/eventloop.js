const fs = require("fs");
const a = 999;
setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("READ FILE CB")
})
setTimeout(() => console.log("set timeout"), 0);
function printA() {
    console.log("a=" + a);
}
printA();
console.log("Last line of program");