const express = require("express");
require("dotenv").config();

const authRouter = require("./routes/Auth");
const cartRouter = require("./routes/Cart");
const ordersRouter = require("./routes/Order");
const productsRouter = require("./routes/Products");
const wishlistRouter = require("./routes/Wishlist");
const categoriesRouter = require("./routes/Categories");
const indexRouter = require("./routes/index");
const profileRouter = require("./routes/Profile");

const app = express();
app.use(express.json());
app.use(express.static("public"));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(authRouter);
app.use(cartRouter);
app.use(categoriesRouter);
app.use(ordersRouter);
app.use(productsRouter);
app.use(wishlistRouter);
app.use(indexRouter);
app.use(profileRouter);

module.exports = app;
