module.exports = function(app) {
    app.use('/v1/humans', require('./api/humans'));
};