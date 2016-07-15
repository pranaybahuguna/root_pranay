var http = require('http');

http.createServer(function(request,response){
	response.writeHead(200);
	response.write("Nothing extraordinary....here is your !!!RESPONSE!!!");
	response.end();
}).listen(8012);

console.log("listening on 8012");
