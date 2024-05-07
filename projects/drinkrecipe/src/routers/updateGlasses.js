const express = require("express")
const updateGlasses = require("../controllers/updateGlasses")
const updateGlassesRoute = express.Router()

updateGlassesRoute.put("/glasses/:id", updateGlasses)

module.exports = updateGlassesRoute