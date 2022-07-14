const controller = require('./users.controller');
const express = require('express');
const router = express.Router();

router.get('/add', controller.adduser);
router.get('/edit', controller.edituser);
router.get('/', controller.getUsers);

module.exports = router;