const categories = require("../models/Categories");

async function getCategoryById(req, res) {
  const { id } = req.body;
  const result = await categories.getCategoryById(id);
  return res.json(result);
}

async function getCategoryByParentId(req, res) {
  const { id } = req.body;
  const result = await categories.getCategoryByParentId(id);
  return res.json(result);
}

async function getAllCategories(req, res) {
  const result = await categories.getAllCategories();
  return res.json(result);
}

module.exports = { getCategoryById, getCategoryByParentId, getAllCategories };
