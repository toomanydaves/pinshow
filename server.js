var express = require('express');
var server = express();
var port = process.env.PORT || 3000;

server.set('port', port);

server.use(express.static(__dirname + '/static'));

server.listen(port, function () {
    console.log('Express server is running on port', port);
});
