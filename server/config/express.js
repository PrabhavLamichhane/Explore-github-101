const express = require('express');
const routes = require('../index.route');

const app = express();

// mount all routes on /api path
app.use('/api', routes);

module.exports = app;