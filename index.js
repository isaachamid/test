const express = require('express');
const port = 3000;

const app = express();


const server = require('http').createServer(app);
require('./routes')(app);

// Start server
server.listen(port, function() {
    console.log('API server started on: ', port);
});

// Expose app
exports = module.exports = app;