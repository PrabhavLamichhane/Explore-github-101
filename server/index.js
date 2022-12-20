const app = require('./config/express');

// later on from env
app.listen(3000, () => {
    console.info('Server started on port 3000');
})

module.exports = app;