//creating a server
const http=require("node:http"); 


// 1.
// const server=http.createServer(function(req,res){
//           res.end("jay shree ram");
// });
// server.listen(1818);


// 2.
// const server=http.createServer(function(req,res){
//     if(req.url==="/getSecretData"){
//         res.end("There is no secret data");
//     }
//     res.end("jay shree ram");
// });
//     server.listen(1818);

// wrapping around the modules and using the ExpressJS
//ExpressJS is nthe nodejs application framework...
//ExpressJS is a type of framework which is made at the top of ther nodejs..

// 3.http server 
const port = 999;
const server = http.createServer(function (req, res) {
    if (req.url === "/getSecretData") {
        res.end("You are a human and no secret is there")
    }
    res.end("server Created")
})

server.listen(port, () => {
    console.log("Server running on port " + port)
}) 