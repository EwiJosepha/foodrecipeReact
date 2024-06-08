const express = require("express")

const getAGlass = require("../controllers/get-one-glass")
const getOneGlass = express.Router()

getOneGlass.get("/glasses/", getAGlass)

module.exports = getOneGlass