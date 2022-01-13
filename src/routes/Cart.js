const express = require("express");

const cartController = require("../controllers/CartController");
const router = express.Router();

//get cart
router.get("/cart/:token", async function(req, res) {
    const cart = await cartController.getCart(req, res);
    res.render("../public/views/cart.ejs", {cart});
});

//add item to cart
router.post("/cart/addItem", cartController.addItemCart);

//remove item from cart
router.delete("/cart/removeItem", cartController.removeItemCart);

//change item quantity
router.post("/cart/changeItemQuantity", cartController.changeQuantityItem);

module.exports = router;
