const controller = require('./tasks.controller');
const express = require('express');
const router = express.Router();

router.get('/add', controller.addtasks);
router.get('/edit', controller.edittasks);
router.get('/', controller.gettasks);

module.exports = router;