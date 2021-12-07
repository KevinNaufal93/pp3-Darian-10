const express = require('express');
const { superAdminController } = require('../controllers');
const router = express.Router()

router.post("/", superAdminController.addOrder);

module.exports = router