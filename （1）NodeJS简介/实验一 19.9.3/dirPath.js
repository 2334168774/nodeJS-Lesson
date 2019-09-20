/**引入原生模块 */
const http = require("http");
const fs = require("fs");
const path = require("path");
/**创建一个服务器 */
var server = http.createServer(function(req,res){
    var htmlPath = path.join(__dirname,"/view/index.html");
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end("结束");
});
/**服务监听一个端口 */
server.listen(8081);
console.log("server is listening 8081");