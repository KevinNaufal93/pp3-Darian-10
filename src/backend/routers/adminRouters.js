const express = require('express');
const { adminController } = require('../controllers');
const router = express.Router()

router.get("/", adminController.getTask);

module.exports = router