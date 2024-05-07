const express = require("express")
const updateIngredients = require("../controllers/updateIngredients")
const updateIngredientsRoute = express.Router()

updateIngredientsRoute.put("/ingredients/:id", updateIngredients)

module.exports = updateIngredientsRoute