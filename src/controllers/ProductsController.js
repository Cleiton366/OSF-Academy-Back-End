/**
 * @type {Object} products model
 */
const products = require("../models/Products");

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<Object[]>} returns an array containing all information of a product.
 */
async function searchProductsById(req, res) {
  const { id } = req.params;
  const result = await products.searchProductsById(id);
  return result;
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<Object[]>} returns an array containing all all products from a category.
 */
async function searchProductsByCategory(req, res) {
  const { category } = req.params;
  const result = await products.searchProductsByCategory(category);
  return result;
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<Object[]>} returns an array containing all all products according to a key word from the search.
 */
async function searchProducts(req, res) {
  const { key_word } = req.params;
  const result = await products.searchProducts(key_word);
  return result;
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json containg information of a product.
 */
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
