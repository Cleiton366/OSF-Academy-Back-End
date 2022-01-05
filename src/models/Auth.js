const fetch = require('node-fetch');
require("dotenv").config();

async function signUp(name, email, password) {

  try {
    const response = await fetch(`${process.env.OSF_API_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "secretKey": process.env.API_KEY,
        "name": name,
        "email": email,
        "password": password,
      })
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }

}

async function signIn(email, password) {

  try {
    const response = await fetch(`${process.env.OSF_API_URL}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "secretKey": process.env.API_KEY,
        "email": email,
        "password": password,
      })
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }

}

module.exports = { signUp, signIn };
