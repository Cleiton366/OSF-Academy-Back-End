/**
 * @type {Object} express
 */
const express = require("express");
/**
 * @type {Object} router
 */
const router = express.Router();
/**
 * @type {Object} profileController
 */
const profileController = require("../controllers/ProfileController");

router.get("/profile/:token", async function(req, res) {
    const profileInfo = await profileController.getProfileInfo(req, res);
    res.render("../public/views/profile.ejs", {profileInfo});
});

module.exports = router;