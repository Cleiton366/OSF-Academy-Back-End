/**
 * @type {Object} auth model
 */
const auth = require("../models/Auth");

/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with all user information.
 */
async function signUp(req, res) {
  const { name, email, password } = req.body;
  const result = await auth.signUp(name, email, password);
  return res.json(result);
}

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<json>} returns a json with all user information.
 */
async function signIn(req, res) {
  const { email, password } = req.body;
  const result = await auth.signIn(email, password);
  return res.json(result);
}

module.exports = { signUp, signIn };
