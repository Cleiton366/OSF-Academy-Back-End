/**
 * @type {Object} cart model
 */
const cart = require("../models/Cart");

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<Object>} returns an object with cart information.
 */
async function getCart(req, res) {
  const { token } = req.params;
  const result = await cart.getCart(token);
  return result;
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with operation result.
 */
async function addItemCart(req, res) {
  const { productId, variantId, quantity } = req.body;
  const { token } = req.headers;
  const result = await cart.addItemCart(productId, variantId, quantity, token);
  return res.json(result);
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with operation result.
 */
async function removeItemCart(req, res) {
  const { productId, variantId } = req.body;
  const { token } = req.headers;
  const result = await cart.removeItemCart(productId, variantId, token);
  return res.json(result);
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with operation result.
 */
async function changeQuantityItem(req, res) {
  const { productId, variantId, quantity } = req.body;
  const { token } = req.headers;
  const result = await cart.changeQuantityItem(
    productId,
    variantId,
    quantity,
    token
  );
  return res.json(result);
}

module.exports = { getCart, addItemCart, removeItemCart, changeQuantityItem };
