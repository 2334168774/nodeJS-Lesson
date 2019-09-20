var obj = {};
var message = ["Name","Email","QQ","Mobile"];
var i = 1;//定义一个索引
console.log(message[0] + ":");//提示用户输入
process.stdin.on("data",function(data){ 
    obj[message[i-1]] = data.toString("utf8");
    if(i == 4 ){
        console.log(obj);
        process.exit();
    }
    else{
        console.log(message[i++] + ":");
    }
})