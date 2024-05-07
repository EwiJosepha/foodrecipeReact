const express = require("express")
const signUp = require("../controllers/signup")
const signOut = express.Router()

signOut.post("/signout", signUp)

module.exports = signOut