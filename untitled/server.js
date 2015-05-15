var express = require('express');
var app = express();
var file = require('./file.js');

app.get('/', function (req, res) {
    res.send("Bula Vinaka Saka!");
});

app.get('/:fileName', function(req, res) {
    var fileName = req.params.fileName;
    file.readFile(fileName)
        .then(function(data) {
            res.send(data);
        });
});

var server = app.listen(80, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});