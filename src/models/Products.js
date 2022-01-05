const fetch = require('node-fetch');
require("dotenv").config();

async function searchProductsById(id) {
    try {
        const response = await fetch(`https://osf-digital-backend-academy.herokuapp.com`+
        `/api/products/product_search?id=${id}&secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}

async function searchProductsByCategory(category) {
    try {
        const response = await fetch(`https://osf-digital-backend-academy.herokuapp.com`+
        `/api/products/product_search?primary_category_id=${category}&secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}

module.exports = { searchProductsById, searchProductsByCategory };
