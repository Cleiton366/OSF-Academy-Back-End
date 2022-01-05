const wishlist = require("../models/Wishlist");

async function getWishlist(req, res) {
  const { token } = req.headers;
  const result = await wishlist.getWishlist(token);
  return res.json(result);
}

async function addItemWishlist(req, res) {
    const { productId, variantId, quantity } = req.body;
    const { token } = req.headers;
    const result = await wishlist.addItemWishlist(productId, variantId, quantity, token);
    return res.json(result);
}

async function removeItemWishlist(req, res) {
    const { productId, variantId } = req.body;
    const { token } = req.headers;
    const result = await wishlist.removeItemWishlist(productId, variantId, token);
    return res.json(result);
}

async function changeQuantityItem(req, res) {
    const {productId, variantId,quantity} = req.body;
    const { token } = req.headers;
    const result = await wishlist.changeQuantityItem(productId, variantId, quantity, token);
    return res.json(result); 
}

module.exports = {getWishlist, addItemWishlist, removeItemWishlist, changeQuantityItem};
