const express = require("express");

const orderController = require("../controllers/OrderController");
const router = express.Router();

//​Get Orders​
router.get("/orders", orderController.getOrders);
//​Create Order
router.post("/orders/create", orderController.createOrder);

router.get("/checkout", orderController.checkOut);

router.get("/checkoutExecute/:amount/:items/:token", orderController.checkOutExecute);

module.exports = router;