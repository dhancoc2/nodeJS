var fs = require('fs');
var q = require('q');

function readFile(path) {
    var deferred = q.defer();
    fs.readFile(path, 'utf8', function(err, content) {
        if (err) return deferred.reject(err);
        deferred.resolve(content);
    });
    return deferred.promise;
}

var promise = readFile('./a.txt')
    .then(function(value) {
        console.log(value);
        return readFile('./b.txt');
    })
    .then(function(value) {
        console.log(value);
        return readFile('./c.txt');
    })
    .fail(function(err) {
        console.log(err);
        return err;
    });

promise.then(function(value) {
    console.log(value);
});