const express = require("express")
const login = require("../controllers/login")

// const jwt = require("jsonwebtoken")
const authRouter = express.Router()

authRouter.post('/login', login)

module.exports = authRouter