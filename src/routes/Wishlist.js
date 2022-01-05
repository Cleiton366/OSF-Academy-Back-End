const express = require("express");

const wishlistController = require("../controllers/WishlistController");
const router = express.Router();

//​Get Wishlist
router.get("/wishlist", async (req, res) => {
    const result = await wishlistController.getWishlist(req, res);
    res.send(result);
});
//​​Add Item to Wishlist
router.post("/wishlist/addItem", async (req, res) => {
    const result = await wishlistController.addItemWishlist(req, res);
    res.send(result);
});
//Remove Item From Wishlist
router.delete("/wishlist/removeItem", async (req, res) => {
    await wishlistController.removeItemWishlist(req, res);
});
//​Change Quantity of Item 
router.post("/wishlist/changeItemQuantity", async (req, res) => {
    await wishlistController.changeItemWishlist(req, res);
});

module.exports = router;