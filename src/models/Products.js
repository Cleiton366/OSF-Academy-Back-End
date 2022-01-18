const fetch = require('node-fetch');
const { Sentry } = require("../utils/sentry");
require("dotenv").config();

async function searchProductsById(id) {
    try {
        const response = await fetch(`${process.env.OSF_API_URL}/products/product_search?id=${id}&secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        Sentry.captureException(err);
    }
}

async function searchProductsByCategory(category) {
    try {
        const response = await fetch(`${process.env.OSF_API_URL}/products/product_search?primary_category_id=${category}&secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        Sentry.captureException(err);
    }
}

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
