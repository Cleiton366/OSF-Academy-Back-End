const express = require("express");

const router = express.Router();
const profileController = require("../controllers/ProfileController");

router.get("/profile/:token", async function(req, res) {
    const profileInfo = await profileController.getProfileInfo(req, res);
    res.render("../public/views/profile.ejs", {profileInfo});
});

module.exports = router;