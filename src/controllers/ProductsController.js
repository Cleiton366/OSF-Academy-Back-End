const products = require("../models/Products");

async function searchProductsById(req, res) {
    const { id } = req.params;
    const result = await products.searchProductsById(id);
    return result;
}

async function searchProductsByCategory(req, res) {
    const { category } = req.params;
    const result = await products.searchProductsByCategory(category);
    return result;
}

module.exports = { searchProductsById, searchProductsByCategory };
