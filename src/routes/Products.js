const express = require("express");

const productsController = require("../controllers/ProductsController");
const router = express.Router();

//get product
router.get("/product/:id", async function (req, res) {
    const product =  await productsController.searchProductsById(req, res);
    res.render("../public/views/product.ejs", {product});
});

router.get("/products_on_category/:category", async function(req, res){
    const products = await productsController.searchProductsByCategory(req, res);
    res.render("../public/views/products_on_category.ejs", {products});
});

module.exports = router;