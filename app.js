// console.log("this is our app file");
require("./xyz.js");

// const calculateSum=require("./sum.js");
// const Object=require("./sum.js");

//destructuring..
// const {x,calculateSum}=require("./calculate/sum.js");

// const {calculateMultiply}=require("./calculate/multiply.js");

// handling the file calculate
const {calculateSum,calculateMultiply}=require("./EPISODE 4/CODE/calculate/index.js");    

var name = "namaste nodeJS";
var a=10;
var b=20;

calculateSum(a,b);
calculateMultiply(a,b);


// Object.calculateSum(a,b);
// console.log(Object.x);

// console.log(x);

//console.log(global);
// console.log(this);
// console.log(globalThis==global);


//after creating the file name calculate the app.js will be talking to calculate folder.