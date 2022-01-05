const express = require("express");
require("dotenv").config();

const authRouter = require("./routes/Auth");
const cartRouter = require("./routes/Cart");
const ordersRouter = require("./routes/Order");
const productsRouter = require("./routes/Products");
const wishlistRouter = require("./routes/Wishlist");
const categoriesRouter = require("./routes/Categories");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("./public/views"));

app.use(authRouter);
app.use(cartRouter);
app.use(categoriesRouter);
app.use(ordersRouter);
app.use(productsRouter);
app.use(wishlistRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is running on port 4000');
});

app.get("/", (req, res) => {
    res.render("../public/views/index.ejs");
});


