// Define Api Entrances & Versions

module.exports = function(app) {
    app.use('/v1/humans', require('./api/humans'));
};