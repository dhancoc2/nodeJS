var fs = require('fs');
var q = require('q');

exports.readFile = function(path) {
    var deferred = q.defer();
    fs.readFile(path, 'utf8', function(err, content) {
        if (err) return deferred.reject(err);
        deferred.resolve(content);
    });
    return deferred.promise;
}
