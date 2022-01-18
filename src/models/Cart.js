const fetch = require('node-fetch');
const { Sentry } = require("../utils/sentry");
require("dotenv").config();

async function getCart(token) {
    token = token.replace(/\"/g, "");
    try {
        const response = await fetch(`${process.env.OSF_API_URL}/cart?secretKey=${process.env.API_KEY}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}` },
        });
        const data = await response.json();
        return data;
    }catch(err){
        Sentry.captureException(err);
    }
}

async function addItemCart(productId, variantId, quantity, token) {
    try {
        const response = await fetch(`${process.env.OSF_API_URL}/cart/addItem`, {
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

async function removeItemCart(productId, variantId, token) {
    try {
        await fetch(`${process.env.OSF_API_URL}/cart/removeItem`, {
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
            status: "Item removed from the cart"
        }
    }catch(err) {
        Sentry.captureException(err);
    }
}

async function changeQuantityItem(productId, variantId,quantity, token) {
    try {
        const response = await fetch(`${process.env.OSF_API_URL}/cart/changeItemQuantity`, {
            method: "POST",
            headers: { "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`},
            body: JSON.stringify({
                "secretKey": process.env.API_KEY,
                "productId": productId,
                "variantId": variantId,
                "quantity": quantity,
            })  
        });
        const data = await response.json();
        return data;
    }catch (err) {
        Sentry.captureException(err);
    }
}

module.exports = { getCart, addItemCart, removeItemCart, changeQuantityItem };
