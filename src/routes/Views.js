const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../public/views/index.html");
});

router.get("/signin", (req, res) => {
  res.render("../public/views/signin.html");
});

router.get("/signup", (req, res) => {
  res.render("../public/views/signup.html");
});

module.exports = router;
