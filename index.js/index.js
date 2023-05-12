//creating http const for building our server
const http =require('http');

//using http create server with 2 arguments- req and res
http.createserver((req,res)=>{
    //writing thethe content type to be displayed
    res.writehead(200,{'Content-Type':'text/plain'});server
    //contend to be displayed on your backend server
    res.end('Hello ,World!Thisis my first server!!');

}).listen(8080);//listening port 8080

//running and testing  the 
console.log('server running at http://localhost:8080/');