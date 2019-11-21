const http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.setHeader("Content-Length",10);
    // res.setHeader("Content-Encoding","gzip");
    res.setHeader("Date",(new Date()),toLocaleString());
    res.setHeader("Set-Cookie","name=zhangsan");
    res.statusCode = 404;
    res.end("hw");
}).listen(8081);
console.log("server is listening 8081!");