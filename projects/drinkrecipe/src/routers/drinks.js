const express = require("express")
const drinks = require("../controllers/drinks")
const drinkRoute = express.Router()

drinkRoute.post("/drinks", drinks)

module.exports = drinkRoute