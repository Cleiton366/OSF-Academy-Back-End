const order = require("../models/Order");

async function getOrders(req, res) {
  const { token } = req.headers;
  const result = await order.getOrders(token);
  return res.json(result);
}

async function createOrder(req, res) {
    const { address, paymentId, items } = req.body;
    const { token } = req.headers;
    const result = await order.createOrder(address, paymentId, items, token);
    return res.json(result);
}

module.exports = { getOrders, createOrder };
