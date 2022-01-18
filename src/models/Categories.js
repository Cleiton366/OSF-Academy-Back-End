const fetch = require('node-fetch');
const { Sentry } = require("../utils/sentry");
require("dotenv").config();

async function getCategoryById(id) {
    try {
        const response = await fetch(`${process.env.OSF_API_URL}/categories/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        Sentry.captureException(err);
    }
}

async function getCategoryByParentId(id) {
    try {
        const response = await fetch(`${process.env.OSF_API_URL}/categories/parent/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        Sentry.captureException(err);;
    }
}

async function getAllCategories() {
    try {
        const response = await fetch(`https://osf-digital-backend-academy.herokuapp.com`+
        `/api/categories?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}

module.exports = { getCategoryById, getCategoryByParentId, getAllCategories };
