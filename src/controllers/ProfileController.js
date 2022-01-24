/**
 * @type {Object} profile model
 */
const profile = require("../models/Profile");

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<Object>} returns an object with user information.
 */
async function getProfileInfo(req, res) {
    const { token } = req.params;
    const result  = await profile.getProfileInfo(token);
    return result;
}

module.exports = { getProfileInfo };
