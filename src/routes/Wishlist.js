const express = require("express");

const wishlistController = require("../controllers/WishlistController");
const router = express.Router();

//​Get Wishlist
router.get("/wishlist", wishlistController.getWishlist);
//​​Add Item to Wishlist
router.post("/wishlist/addItem", wishlistController.addItemWishlist);
//Remove Item From Wishlist
router.delete("/wishlist/removeItem", wishlistController.removeItemWishlist);
//​Change Quantity of Item 
router.post("/wishlist/changeItemQuantity", wishlistController.changeQuantityItem);

module.exports = router;