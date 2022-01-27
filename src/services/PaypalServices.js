require("dotenv").config();
/**
 * @type {Object} paypal rest sdk
 */
const paypal = require("paypal-rest-sdk");
/**
 * @type {Object} node-fetch
 */
const fetch = require("node-fetch");

/**
 * 
 * @param {Object[]} items array of items to be ordered
 * @param {Number} amount total amount to be paid
 * @param {String} token user token
 * @returns {Promise<Object>} returns checkout information from PayPal API.
 */
async function checkOut(items, amount, token) {
  token = token.replace(/\"/g, "");
  paypal.configure({
    mode: "sandbox",
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_SECRET,
  });
  var itemsPaypal = [];
  for (var i = 0; i < items.length; i++) {
    itemsPaypal.push({
      name: items[i].productId,
      sku: items[i].productId,
      price: parseFloat(items[i].variant.price).toFixed(2),
      currency: "USD",
      quantity: items[i].quantity,
    });
  }

  var create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: process.env.API+`/checkoutExecute/${amount}/${encodeURIComponent(
        JSON.stringify(items))}/${token}`,
      cancel_url: process.env.API,
    },
    transactions: [
      {
        item_list: {
          items: itemsPaypal,
        },
        amount: {
          currency: "USD",
          total: parseFloat(amount).toFixed(2),
        },
        description: "This is the payment description.",
      },
    ],
  };

  return new Promise(function (resolve, reject) {
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        reject(error);
      } else {
        for (var i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel == "approval_url") {
            resolve(payment.links[i].href);
          }
        }
      }
    });
  });
}

/**
 * 
 * @param {String} paymentId 
 * @param {String} PayerID 
 * @param {Number} amount total amount to be paid
 * @param {Object[]} itemsArr array of items to be ordered
 * @param {String} token user token
 * @returns {Promise<Object>} returns order status from OSF API.
 */
async function checkOutExecute(paymentId, PayerID, amount, itemsArr, token) {
  const items = JSON.parse(itemsArr);
  var execute_payment_json = {
    payer_id: PayerID,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: amount,
        },
      },
    ],
  };

  const orderResult = await execute(paymentId, execute_payment_json);
  
  const response = await fetch(`${process.env.API}/orders/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({
      address: orderResult.payer.payer_info.shipping_address.line1+" "
      +orderResult.payer.payer_info.shipping_address.city+" "
      +orderResult.payer.payer_info.shipping_address.postal_code,
      paymentId: orderResult.id,
      items: items,
    }),
  });

  const data = await response.json();
  if(data.status == "created"){
    return token;
  }else return {
    status: data.error,
  }
}

/**
 * 
 * @param {String} paymentId 
 * @param {Object} execute_payment_json 
 * @returns {Promise<Object>} returns order status from PayPal API.
 */
async function execute(paymentId, execute_payment_json) {
  return new Promise(function (resolve, reject) {
    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      function (error, payment) {
        if (error) {
          reject(error);
        } else {
          const data = JSON.stringify(payment);
          resolve(JSON.parse(data));
        }
      }
    );
  });
}

module.exports = { checkOut, checkOutExecute };
