/**
 * @type {Object} categories model
 */
const categories = require("../models/Categories");

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with a certain category.
 */
async function getCategoryById(req, res) {
  const { id } = req.params;
  const result = await categories.getCategoryById(id);
  return res.json(result);
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with a certain category according to their parent's id.
 */
async function getCategoryByParentId(req, res) {
  const { id } = req.params;
  const result = await categories.getCategoryByParentId(id);
  return res.json(result);
}

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with all categories.
 */
async function getAllCategories(req, res) {
  const result = await categories.getAllCategories();
  return res.json(result);
}

module.exports = { getCategoryById, getCategoryByParentId, getAllCategories };
