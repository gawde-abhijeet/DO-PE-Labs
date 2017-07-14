// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Get into DevOps\n");
});

// listen on localhost:7001
server.listen(7001);
console.log("Server listening at http://127.0.0.1:7001/");
