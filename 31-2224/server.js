var http=require('http');
var fs=require('fs');

var handleRequest=function handelRequest(request,response){ 
     if(request.url==='/index.html'||request.url==='index'||request.url=='/'){ 
        response.writeHeader(200,{'Content-type':'text/html'});
        response.end(fs.readFileSyn());

     } 
     else{
        response.writeHeader(404,{'Content-type':'text/html'});
        response.end(fs.writeFileSyn());
     }

 var server=http.createServer(handleRequest);
 
 var port=8080;
 server.listen(port,function(){ 
  console.log("Server listening on: http://localhost:%s", PORT);

 });

}

