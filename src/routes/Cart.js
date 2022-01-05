const express = require("express");

const cartController = require("../controllers/CartController");
const router = express.Router();

//get cart
router.get("/cart", async (req, res) => {
    const result = await cartController.getCart(req, res);
    res.send(result);
});

//add item to cart
router.post("/cart/addItem", async (req, res) => {
    const result = await cartController.addItemCart(req, res);
    res.send(result);
});

//remove item from cart
router.delete("/cart/removeItem", async (req, res) => {
    await cartController.removeItemCart(req, res);
});

//change item quantity
router.post("/cart/changeItemQuantity", async (req, res) => {
    await cartController.changeQuantityItem(req, res);
});

module.exports = router;
