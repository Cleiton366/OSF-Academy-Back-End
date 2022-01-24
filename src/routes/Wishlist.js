/**
 * @type {Object} express
 */
const express = require("express");
/**
 * @type {Object} wishlistController
 */
const wishlistController = require("../controllers/WishlistController");
/**
 * @type {Object} router
 */
const router = express.Router();

//​Get Wishlist
router.get("/wishlist/:token", async function(req, res) {
    const wishlist = await wishlistController.getWishlist(req, res);
    res.render("../public/views/wishlist.ejs", {wishlist});
});
//​​Add Item to Wishlist
router.post("/wishlist/addItem", wishlistController.addItemWishlist);
//Remove Item From Wishlist
router.delete("/wishlist/removeItem", wishlistController.removeItemWishlist);
//​Change Quantity of Item 
router.post("/wishlist/changeItemQuantity", wishlistController.changeQuantityItem);

module.exports = router;