const express = require('express');
const repoRoutes = require('./src/repo/repo.route')

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);

// mount repo routes at /api/repos
router.use('/repos', repoRoutes)

module.exports = router;