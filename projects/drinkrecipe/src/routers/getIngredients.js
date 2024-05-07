const express = require("express")
const getIngredients = require("../controllers/getIngredients")
const getIngredientsRoute = express.Router()

getIngredientsRoute.get("/ingredients", getIngredients)

module.exports = getIngredientsRoute