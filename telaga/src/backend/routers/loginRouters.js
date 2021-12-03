const express = require('express');
const { userController } = require('../controllers');
const { auth } = require('../helper/auth');
const router = express.Router()

router.post("/", userController.loginUser);
router.get("/kl", auth, userController.keepLogin);

module.exports = router