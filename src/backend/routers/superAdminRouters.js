const express = require('express');
const { superAdminController } = require('../controllers');
const router = express.Router()

router.post("/", superAdminController.addOrder);
router.post("/update", superAdminController.updateOrder);
router.post("/updateStatus", superAdminController.updateOrderStatus);
router.post("/so", superAdminController.searchOrder);

module.exports = router