const express = require('express');
const repoCtrl = require('./repo.controller');

const router = express.Router();

router.route('/')
    /** GET /api/repos - Get list of all repos */
    .get(repoCtrl.list)

module.exports = router;