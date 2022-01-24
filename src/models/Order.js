/**
 * @package node-fetch
 */
const fetch = require("node-fetch");
/**
 * @package Sentry
 */
const { Sentry } = require("../utils/sentry");
require("dotenv").config();

/**
 *
 * @param {String} token user token
 * @returns {Promise<Object>} returns all orders from a user.
 */
async function getOrders(token) {
  try {
    const response = await fetch(
      `${process.env.OSF_API_URL}/orders?secretKey=${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    Sentry.captureException(err);
  }
}

/**
 *
 * @param {String} address user address
 * @param {String} paymentId payment id
 * @param {Object[]} items array of items to be ordered
 * @param {String} token user token
 * @returns {Promise<Object>} returns order information.
 */
async function createOrder(address, paymentId, items, token) {
  token = token.replace(/\"/g, "");
  try {
    const response = await fetch(`${process.env.OSF_API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        secretKey: process.env.API_KEY,
        address: address,
        paymentId: paymentId,
        items: items,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    Sentry.captureException(err);
  }
}

module.exports = { getOrders, createOrder };
