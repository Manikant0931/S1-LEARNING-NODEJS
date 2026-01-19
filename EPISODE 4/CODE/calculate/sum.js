//by default,modules protects the scope of variables and functions from leaking.
// console.log("this is our sum file");


// z="hello world"; //global variable


// var x="hello sum module";

function calculateSum(a,b){
    const sum=a+b;
    console.log("The sum is "+sum);
}

// module.exports=calculateSum;
//or
module.exports={calculateSum};


// module.exports={calculateSum,x};
// module.exports.calculateSum=calculateSum;

// module.exports={
//     x:x,
//     calculateSum:calculateSum
// }


// module.exports={x,calculateSum};
//or
// module.exports.x=x;
// module.exports.calculateSum=calculateSum;