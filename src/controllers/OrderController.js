/**
 * @type {Object} order model
 */
const order = require("../models/Order");

/**
 * @type {Object} paypalServices
*/
const paypalServices = require("../services/PaypalServices");

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with all orders from a user.
 */
async function getOrders(req, res) {
  const { token } = req.headers;
  const result = await order.getOrders(token);
  return res.json(result);
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with all information of an order just created.
 */
async function createOrder(req, res) {
    const { address, paymentId, items } = req.body;
    const { token } = req.headers;
    const result = await order.createOrder(address, paymentId, items, token);
    return res.json(result);
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {res.redirect} will redirect the user to paypal to make the purchase.
 */
async function checkOut(req, res) {
  const { items, amount, token} = req.query;
  const itemsArr = JSON.parse(items);
  const result = await paypalServices.checkOut(itemsArr, amount, token);
  return res.redirect(result);
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<Object>} Paypal will return an object with a purchase information.
 */
async function checkOutExecute(req, res) {
  const { paymentId, PayerID } = req.query;
  const { amount, items, token } = req.params
  const result = await paypalServices.checkOutExecute(paymentId, PayerID, amount, items, token);
  return result;
}

module.exports = { getOrders, createOrder, checkOut, checkOutExecute };
