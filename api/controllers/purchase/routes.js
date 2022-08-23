const purchaseController = require('.');
const express = require('express')
const router = express.Router();


router.post('/order', purchaseController.createPurchase);
router.get('/orders', purchaseController.getPurchaseOrders);

module.exports = router;