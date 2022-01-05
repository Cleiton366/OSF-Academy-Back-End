const auth = require('../models/Auth');

    async function signUp(req, res) {
        const {name , email, password} = req.body;
        const result = await auth.signUp(name, email, password);
        return res.json(result);
    }

    async function signIn(req, res) {
        const {email, password} = req.body;
        const result = await auth.signIn(email, password);
        return res.json(result);
    }
    

module.exports = {signUp, signIn};