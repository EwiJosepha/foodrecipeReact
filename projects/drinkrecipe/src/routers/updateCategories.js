const express = require("express")
const updateCategories = require("../controllers/updateCategorie")
const updateCategoriesRoute = express.Router()

updateCategoriesRoute.put("/categories/:id", updateCategories)

module.exports = updateCategoriesRoute