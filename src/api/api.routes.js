'use strict';
const express = require('express');
const controller = require('../api/api.controller');

const router = express.Router();

router.post('/register', controller.register);
router.post('/login', controller.login);

// router.get('/user/:userId', controller.getUserById)


module.exports = router;