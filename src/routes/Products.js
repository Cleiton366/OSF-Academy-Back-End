const express = require("express");

const productsController = require("../controllers/ProductsController");
const router = express.Router();

//get products list
router.get("/products/:id", productsController.searchProductsById);

router.get("/products_on_category/:category", productsController.searchProductsByCategory);

module.exports = router;