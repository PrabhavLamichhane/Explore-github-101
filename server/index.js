const app = require('./config/express');

// later on from env
app.listen(8080, () => {
    console.info('Server started on port 8080');
})

module.exports = app;