const controller = require('./users.controller');
const express = require('express');
const router = express.Router();

router.get('/:id', controller.getUsersById);
router.get('/', controller.getUsers);
router.post('/', controller.saveUsers);
router.put('/:id', controller.upadateUsers);
router.delete('/:id', controller.deleteUsers);

module.exports = router;