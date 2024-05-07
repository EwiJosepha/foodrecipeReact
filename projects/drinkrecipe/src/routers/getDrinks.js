const express = require("express")
const getDrinks = require("../controllers/getDrinks")
const getDrinksRoute = express.Router()

getDrinksRoute.get("/drinks", getDrinks)

module.exports = getDrinksRoute