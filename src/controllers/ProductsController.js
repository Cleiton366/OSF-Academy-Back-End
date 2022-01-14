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

async function searchProducts(req, res) {
  const { key_word } = req.params;
  const result = await products.searchProducts(key_word);
  return result;
}

async function getProduct(req, res) {
  const { id } = req.params;
  const result = await products.searchProductsById(id);
  return res.json(result);
}

module.exports = {
  searchProductsById,
  searchProductsByCategory,
  searchProducts,
  getProduct,
};
