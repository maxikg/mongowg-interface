var bodyParser = require('body-parser');
var express = require('express');

var createNotFoundHandler = function() {
    return function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    };
};
var createErrorHandler = function(includeStacktrace) {
    return function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({error: { message: err.message, err: includeStacktrace ? err : {}}});
    };
};

module.exports = function(apiClient) {
    var app = express();

    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../public'));
    app.use('/api', require(__dirname + '/routing.js')(apiClient));
    app.use(createNotFoundHandler());
    app.use('/api', createErrorHandler(app.get('env') === 'development'));

    return app;
};