/**
 * @type {Object} express
 */
const express = require("express");
/**
 * @type {Object} orderController
 */
const orderController = require("../controllers/OrderController");
/**
 * @type {Object} router
 */
const router = express.Router();

//​Get Orders​
router.get("/orders", orderController.getOrders);
//​Create Order
router.post("/orders/create", orderController.createOrder);

router.get("/checkout", orderController.checkOut);

router.get("/checkoutExecute/:amount/:items/:token", async function(req, res){
    const result = await orderController.checkOutExecute(req, res);
    if(result.error){
        res.send(result.error);
    }else res.redirect("/profile/"+result);
});

module.exports = router;