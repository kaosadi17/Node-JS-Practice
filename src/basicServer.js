var http = require("http");

http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end("Hello Node");
}).listen(3000);

console.log("Server is listening to http://localhost:3000");
