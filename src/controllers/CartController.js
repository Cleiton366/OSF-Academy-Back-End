const cart = require("../models/Cart");

async function getCart(req, res) {}

async function addItemCart(req, res) {
    const result = await cart.addItemCart();
    return result;
}

async function removeItemCart(req, res) {}

async function changeQuantityItem(req, res) {}

module.exports = { getCart, addItemCart, removeItemCart, changeQuantityItem };
