/**
 * Created by Shanlu on 4/18/2015.
 * Description: The main file of code to start with
 */

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World, from dev branch\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
