const fetch = require('node-fetch');
const { Sentry } = require("../utils/sentry");
require("dotenv").config();

async function getWishlist(token) {
    try {
      const response = await fetch(`${process.env.OSF_API_URL}/wishlist?secretKey=${process.env.API_KEY}`, {
          method: "GET",
          headers: { "Content-Type": "application/json", 
          "Authorization": `Bearer ${token}` },
      });
      const data = await response.json();
      return data;
    }catch(err){
        console.log(err);
    }
}

async function addItemWishlist(productId, variantId, quantity, token) {
  try {
    const response = await fetch(`${process.env.OSF_API_URL}/wishlist/addItem`, {
        method: "POST",
        headers: { "Content-Type": "application/json", 
        "Authorization": `Bearer ${token}` },
        body: JSON.stringify({
            "secretKey": process.env.API_KEY,
            "productId": productId,
            "variantId": variantId,
            "quantity": quantity,
        })
    });
    const data = await response.json();
    return data;
  }catch(err) {
    Sentry.captureException(err);
  }
}

async function removeItemWishlist(productId, variantId, token) {
  try {
    await fetch(`${process.env.OSF_API_URL}/wishlist/removeItem`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`},
        body: JSON.stringify({
            "secretKey": process.env.API_KEY,
            "productId": productId,
            "variantId": variantId,
        })  
    });

    return {
      status: "Item removed from the wishlist"
    }
  }catch(err) {
    Sentry.captureException(err);
  }

}

async function changeQuantityItem(productId, variantId, quantity, token) {
  try {
    const response = await fetch(`${process.env.OSF_API_URL}/wishlist/changeItemQuantity`, {
        method: "POST",
        headers: { "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`},
        body: JSON.stringify({
            "secretKey": process.env.API_KEY,
            "productId": productId,
            "variantId": variantId,
            "quantity": quantity,
        })  
    })
    const data = await response.json();
    return data;
  }catch (err) {
    Sentry.captureException(err);
  }
}

module.exports = { getWishlist, addItemWishlist, removeItemWishlist, changeQuantityItem };
