const express = require('express');
const port = 3000;

const app = express();


const server = require('http').createServer(app);
require('./routes')(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

// Start server
server.listen(port, function() {
    console.log('API server started on: ', port);
});

// Expose app
exports = module.exports = app;