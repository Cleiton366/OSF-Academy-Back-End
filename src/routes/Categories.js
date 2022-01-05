const express = require("express");

const categoriesController = require("../controllers/CategoriesController");
const router = express.Router();

//Get Category by ID
router.get("/categories", categoriesController.getCategoryById);

//Get Categories by Parent ID
router.get("/categories/parent/", categoriesController.getCategoryByParentId);

//​Get All Categories
router.get("/all_categories", categoriesController.getAllCategories);

module.exports = router;