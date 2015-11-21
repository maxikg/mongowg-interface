var express = require('express');

var sendCallback = function(res, err, data, next) {
    if (err) {
        next(err);
    } else {
        res.json(data);
    }
};

/**
 * Create a express router for all api methods.
 *
 * @param api An instance of {@link ApiClient}
 */
module.exports = function(api) {
    var router = express.Router();

    router.get('/regions', function(req, res, next) {
        api.getAll(function(err, data) {
            sendCallback(res, err, data, next);
        })
    });

    router.get('/regions/:world', function(req, res, next) {
        api.getAll(req.params['world'], function(err, data) {
            sendCallback(res, err, data, next);
        });
    });

    router.get('/regions/:world/:region_id', function(req, res, next) {
        api.get(req.params['world'], req.params['region_id'], function(err, data) {
            sendCallback(res, err, data, next);
        });
    });

    return router
};