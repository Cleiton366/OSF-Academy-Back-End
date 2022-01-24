/**
 * @type {Object} wishlist model
 */
const wishlist = require("../models/Wishlist");

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<Object>} returns an object with wishlist information.
 */
async function getWishlist(req, res) {
  const { token } = req.params;
  const result = await wishlist.getWishlist(token);
  return result;
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with operation result.
 */
async function addItemWishlist(req, res) {
    const { productId, variantId, quantity } = req.body;
    const { token } = req.headers;
    const result = await wishlist.addItemWishlist(productId, variantId, quantity, token);
    return res.json(result);
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with operation result.
 */
async function removeItemWishlist(req, res) {
    const { productId, variantId } = req.body;
    const { token } = req.headers;
    const result = await wishlist.removeItemWishlist(productId, variantId, token);
    return res.json(result);
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with operation result.
 */
async function changeQuantityItem(req, res) {
    const {productId, variantId,quantity} = req.body;
    const { token } = req.headers;
    const result = await wishlist.changeQuantityItem(productId, variantId, quantity, token);
    return res.json(result); 
}

module.exports = {getWishlist, addItemWishlist, removeItemWishlist, changeQuantityItem};
