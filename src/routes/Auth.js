const express = require("express");

const authController = require("../controllers/AuthController");
const router = express.Router();

router.post("/auth/signup", authController.signUp);

router.post("/auth/signin", authController.signIn);

module.exports = router;