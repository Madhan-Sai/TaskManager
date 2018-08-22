var psList = require("ps-list");
var http = require('http');
var fs = require('fs');

(async() => {
    console.log(await psList());
})();
http.createServer(function(req, res) {
    fs.readFile('home.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);