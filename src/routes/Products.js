const express = require("express");

const productsController = require("../controllers/ProductsController");
const router = express.Router();

//get products list
router.get("/products/product_search_by_id", productsController.searchProductsById);

router.get("/products/product_search_by_category", productsController.searchProductsByCategory);

module.exports = router;