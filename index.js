var express = require('express');
var app = express();

app.get('/', function(req, res){
	var header = {};
	header.host = req.headers.host;
	header.ip = req.ip;
	header.language = req.headers["accept-language"].split(',')[0];
	header.software = req.headers["user-agent"];

	// console.log(req.connection.remoteAddress);
	res.end(JSON.stringify(header, null, '\t'));
});

app.listen(8080, function(){
	console.log('Listening on port 8080');
})