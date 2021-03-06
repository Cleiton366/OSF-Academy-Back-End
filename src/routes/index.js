/**
 * @type {Object} express
 */
const express = require("express");
/**
 * @type {Object} router
 */
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../public/views/index.ejs");
});

router.get("/signin", (req, res) => {
  res.render("../public/views/signin.ejs");
});

router.get("/signup", (req, res) => {
  res.render("../public/views/signup.ejs");
});

module.exports = router;
