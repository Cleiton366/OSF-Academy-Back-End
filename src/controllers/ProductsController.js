const products = require("../models/Products");

async function searchProductsById(req, res) {
    const { id } = req.body;
    const result = await products.searchProductsById(id);
    return res.json(result);
}

async function searchProductsByCategory(req, res) {
    const { category } = req.body;
    const result = await products.searchProductsByCategory(category);
    return res.json(result);
}

module.exports = { searchProductsById, searchProductsByCategory };
