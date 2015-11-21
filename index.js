var MongoClient = require('mongodb').MongoClient;
var ApiClient = require(__dirname + '/src/api.js');
var application = require(__dirname + '/src/app.js');
var http = require('http');

var normalizePort = function(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    } else if (port >= 0) {
        return port;
    }
    return false;
};

MongoClient.connect('mongodb://localhost:27017/mongowg', function(err, db) {
    if (err) {
        throw err;
    }

    var apiClient = new ApiClient(db);
    var app = application(apiClient);
    var port = normalizePort(process.env['PORT'] || '3000');

    app.set('port', port);

    var server = http.createServer(app);

    server.on('listening', function() {
        var addr = server.address();
        console.log('Listening on ' + (typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port));
    });
    server.listen(port);
});
