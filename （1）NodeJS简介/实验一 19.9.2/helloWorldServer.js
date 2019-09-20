const http = require("http");

/*实例化 */
var server = new http.Server();

/*sever监听客户端请求 */
server.on("request",function(req,res){
    /**
     * http协议,协议的结构 协议的请求响应过程
     * 
     */
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write("<h1>nihaoshijie!</h1>");
    /*响应结束*/
    res.end();
});

/**server监听端口 */
server.listen(8080);

console.log("hello world!");