const order = require("../models/Order");
const paypalServices = require("../services/PaypalServices");

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

async function checkOut(req, res) {
  const { items, amount, token} = req.query;
  const itemsArr = JSON.parse(items);
  const result = await paypalServices.checkOut(itemsArr, amount, token);
  return res.redirect(result);
}

async function checkOutExecute(req, res) {
  const { paymentId, PayerID } = req.query;
  const { amount, items, token } = req.params
  const result = await paypalServices.checkOutExecute(paymentId, PayerID, amount, items, token);
  return result;
}

module.exports = { getOrders, createOrder, checkOut, checkOutExecute };
