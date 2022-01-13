const express = require("express");

const productsController = require("../controllers/ProductsController");
const router = express.Router();


router.get("/product/:id", async function (req, res) {
    const product =  await productsController.searchProductsById(req, res);
    res.render("../public/views/product.ejs", {product});
});

router.get("/products_on_category/:category", async function(req, res){
    const products = await productsController.searchProductsByCategory(req, res);
    res.render("../public/views/products_on_category.ejs", {products});
});

router.get("/search_result/:key_word", async function(req, res){
    const products = await productsController.searchProducts(req, res);
    res.render("../public/views/products_searched.ejs", {products});
});

router.get("/getProduct/:id", productsController.getProduct);

module.exports = router;