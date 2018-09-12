var psList = require("ps-list");
var http = require('http');
var fs = require('fs');

var dataContent = "<table>";

(async() => {
    var processList = await psList();
    processList.forEach(function(process) {
        if (process) {
            console.log('Pid: %s, Name: %s, command: %s', process.pid, process.name, process.cmd);
            dataContent += '<tr>\n\t<td>' + process.pid + '</td>\n\t<td>' + process.name + '</td>\n\t<td>' + process.cmd + '</td>\n</tr>\n';
        }
    });
    dataContent += "</table>";
})();


http.createServer(function(req, res) {
    fs.readFile('home.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.write(dataContent);
        res.end();
    });
}).listen(8090);