const express = require("express");

const orderController = require("../controllers/OrderController");
const router = express.Router();

//​Get Orders​
router.get("/orders", async (req, res) => {
    const result = await orderController.getOrder(req, res);
    res.send(result);
});
//​Create Order
router.post("/orders/create", async (req, res) => {
    const result = await orderController.createOrder(req, res);
    res.send(result);
});


module.exports = router;