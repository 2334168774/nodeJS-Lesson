/**异步操作 不会阻塞程序的执行 */
/**1、营业厅排队办理业务，相当于应用程序执行的阻塞**/
setTimeout(function(){
    console.log("异步执行");
},3000);
console.log("main program");