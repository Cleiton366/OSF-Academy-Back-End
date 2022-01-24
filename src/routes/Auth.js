/**
 * @type {Object} express
 */
const express = require("express");
/**
 * @type {Object} authController
 */
const authController = require("../controllers/AuthController");
/**
 * @type {Object} router
 */
const router = express.Router();

router.post("/auth/signup", authController.signUp);

router.post("/auth/signin", authController.signIn);

module.exports = router;