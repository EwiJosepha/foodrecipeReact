const express = require("express")
const getOneDrink = require("../controllers/getDrinks")
const getoneDrink = express.Router()

getoneDrink.get("/drink/:id", getOneDrink)

module.exports = getoneDrink