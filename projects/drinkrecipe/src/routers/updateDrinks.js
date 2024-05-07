const express = require("express")
const updateDrinks = require("../controllers/updateDrinks")
const updateDrinksRoute = express.Router()

updateDrinksRoute.put("/drinks/:id", updateDrinks)

module.exports = updateDrinksRoute