/**
 * Constructs a new api client.
 *
 * @param db The mongodb database
 * @constructor
 */
var ApiClient = function(db) {
    this.db = db;
};

/**
 * Returns all regions from one or all worlds.
 *
 * @param [world] The name of the world
 * @param cb The callback
 */
ApiClient.prototype.getAll = function(world, cb) {
    var filter;
    if (arguments.length == 1) {
        cb = world;
        filter = {};
    } else {
        filter = { world: world };
    }

    this.db.collection('regions').find(filter).toArray(cb);
};

/**
 * Returns one region from a specified world.
 *
 * @param world The name of the world
 * @param name The name of the region
 * @param cb The callback
 */
ApiClient.prototype.get = function(world, name, cb) {
    this.db.collection('regions').find({ world: world, name: name }).limit(1).toArray(function(err, data) {
        if (data.length == 0) {
            var error = new Error('No such data.');
            error.status = 404;
            cb(error, null);
        } else {
            cb(err, data ? data[0] : data);
        }
    })
};

module.exports = ApiClient;