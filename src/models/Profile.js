const fetch = require("node-fetch");
require("dotenv").config();

async function getProfileInfo(token) {
    token = token.replace(/\"/g, "");
    const cartCount = await getCartCount(token);
    const wishlistCount = await getWishlistCount(token);
    const orders = await getOrders(token);

    const profileInfo = {
        cartCount: cartCount,
        wishlistCount: wishlistCount,
        orders: orders,
    }

    return profileInfo;
}

async function getCartCount(token) {
  try {
    const response = await fetch(
      `${process.env.OSF_API_URL}/cart?secretKey=${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    if(!(data.error)){
      const cartCount = data.items.length;
      return cartCount;
    }else return 0;
  } catch (err) {
    console.log(err);
  }
}

async function getWishlistCount(token) {
    try {
        const response = await fetch(
          `${process.env.OSF_API_URL}/wishlist?secretKey=${process.env.API_KEY}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        if(!(data.error)){
          const wishlistCount = data.items.length;
          return wishlistCount;
        }else return 0;
      } catch (err) {
        console.log(err);
      }
}

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
        console.log(err);
      }
}

module.exports = { getProfileInfo };
