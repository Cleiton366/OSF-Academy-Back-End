const cart = require("../models/Cart");

async function getCart(req, res) {
  const { token } = req.headers;
  const result = await cart.getCart(token);
  return res.json(result);
}

async function addItemCart(req, res) {
  const { productId, variantId, quantity } = req.body;
  const { token } = req.headers;
  const result = await cart.addItemCart(productId, variantId, quantity, token);
  return res.json(result);
}

async function removeItemCart(req, res) {
  const { productId, variantId } = req.body;
  const { token } = req.headers;
  const result = await cart.removeItemCart(productId, variantId, token);
  return res.json(result);
}

async function changeQuantityItem(req, res) {
    const {productId, variantId,quantity} = req.body;
    const { token } = req.headers;
    const result = await cart.changeQuantityItem(productId, variantId, quantity, token);
    return res.json(result);
}

module.exports = { getCart, addItemCart, removeItemCart, changeQuantityItem };
