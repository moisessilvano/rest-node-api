'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const authService = require('../services/auth-service');

router.get('/', controller.get);
router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/reflesh-token', authService.authorize, controller.refleshToken);

module.exports = router;