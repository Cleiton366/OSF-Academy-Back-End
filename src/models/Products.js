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
 * @param {String} id product Id
 * @returns {Promise<Object>} returns product information.
 */
async function searchProductsById(id) {
    try {
        const response = await fetch(`${process.env.OSF_API_URL}/products/product_search?id=${id}&secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        Sentry.captureException(err);
    }
}

/**
 * 
 * @param {String} category category Id
 * @returns {Promise<Object[]>} returns all products according to their category.
 */
async function searchProductsByCategory(category) {
    try {
        const response = await fetch(`${process.env.OSF_API_URL}/products/product_search?primary_category_id=${category}&secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        Sentry.captureException(err);
    }
}

/**
 * 
 * @param {String} key_word 
 * @returns {Promise<Object[]>} returns all products according to key_word.
 */
async function searchProducts(key_word) {
    try {
        const response = await fetch(`${process.env.OSF_API_URL}/products/product_search?${key_word}&secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        Sentry.captureException(err);
    }
}


module.exports = { searchProductsById, searchProductsByCategory, searchProducts };
