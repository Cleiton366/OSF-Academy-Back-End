const fetch = require("node-fetch");
const { Sentry } = require("../utils/sentry");
require("dotenv").config();

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
