const express = require('express');
const cors = require('cors');
const routes = require('../index.route');

const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on /api path
app.use('/api', routes);


module.exports = app;