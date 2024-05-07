const express = require("express")
const getIngredients = require("../controllers/getIngredients")


const getOneIngredient = express.Router()

getOneIngredient.get("/ingredient/:id", getIngredients)

module.exports = getOneIngredient