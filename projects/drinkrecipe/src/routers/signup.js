const express = require("express")
const signUp = require("../controllers/signup")
const signUpRoute = express.Router()

signUpRoute.post("/signup", signUp)

module.exports = signUpRoute
