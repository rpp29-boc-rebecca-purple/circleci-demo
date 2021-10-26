const http = require('http');
// Testing

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(8080, '0.0.0.0');
