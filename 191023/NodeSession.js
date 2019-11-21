const http = require("http");
const fs= require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    switch(urlObj.pathname){
        case '/':
            showLogin(res);
            break;
        case '/login':
            loginIn(req,res);
            break;
    }
}).listen(8081);
console.log("server is listening 8081");
function showLogin(res){
    var filePath = path.join(__dirname,"login.html");
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function loginIn(req,res){
    var str='';
    req.on("data",function(chunk){
        str+=chunk;
    })
    req.on("end",function(){
        var str = querystring.parse(str);//转换成对象的结构
        if(str.username == "zhangsan" && str.pwd == "123"){
            res.setHeader("Set-Cookie","username=zhangsan");
            res.end("login sucess");
        }
        else{
            res.end("login error");
        }
    })
    function showHome(req,res){
        req.headers
    }
}