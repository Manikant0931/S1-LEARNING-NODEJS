const fs = require("fs");
const crypto = require("crypto")

process.env.UV_THREADPOOL_SIZE = 8;

// ##What PBKDF2 does??
// Password-Based Key Derivation Function
// CPU intensive
// Purposefully slow (for security)
// Runs in libuv thread pool, not event loop


crypto.pbkdf2("Mani", "salt", 500000, 10, "sha512", (err, key) => {
    console.log("1st key generated below:")
})
crypto.pbkdf2("Mani", "salt", 500000, 10, "sha512", (err, key) => {
    console.log("2 nd key generated below:")
})
crypto.pbkdf2("Mani", "salt", 500000, 10, "sha512", (err, key) => {
    console.log("3 rd key generated below:")
})
crypto.pbkdf2("Mani", "salt", 500000, 10, "sha512", (err, key) => {
    console.log("4th key generated below:")
})
crypto.pbkdf2("Mani", "salt", 500000, 10, "sha512", (err, key) => {
    console.log("5th key generated below:")
})


//output might be the random...
// 2 nd key generated below:
// 4 nd key generated below:
// 3 nd key generated below:
// 1st key generated below:
// 5 nd key generated below:
// because the concept is the async!=ordered.