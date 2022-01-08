const products = require("../models/Products");

async function searchProductsById(req, res) {
    const { id } = req.params;
    const result = await products.searchProductsById(id);
    return res.json(result);
}

async function searchProductsByCategory(req, res) {
    const { category } = req.params;
    const result = await products.searchProductsByCategory(category);
    return res.json(result);
}

module.exports = { searchProductsById, searchProductsByCategory };
