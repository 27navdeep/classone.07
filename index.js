//creating http const for building our server
const http =require('http');
const calc =require('./sub');
//using http create server with 2 arguments- req and res
http.createServer((req,res)=>{
    //writing thethe content type to be displayed
    res.writeHead(200,{'Content-Type':'text/html'});
    //contend to be displayed on your backend server
    res.end('Hello ,World!Thisis my first server!!');
    res.write("sum: " + calc.sum());
    res.write("sub: " + calc.sub());
    res.write("mul: " + calc.mult());
    res.write("div: " + calc.div());

}).listen(8080);//listening port 8080

//running and testing  the 
console.log('server running at http://localhost:8080/');