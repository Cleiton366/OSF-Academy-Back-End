const profile = require("../models/Profile");

async function getProfileInfo(req, res) {
    const { token } = req.params;
    const result  = await profile.getProfileInfo(token);
    return result;
}

module.exports = { getProfileInfo };
