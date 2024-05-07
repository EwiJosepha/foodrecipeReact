const express = require("express")
const getGlasses = require("../controllers/getglasses")
const getGlassesRoute = express.Router()

getGlassesRoute.get("/glasses", getGlasses)

module.exports = getGlassesRoute