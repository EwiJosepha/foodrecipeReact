const express = require("express")
const getCategories = require("../controllers/getCategories")
const getcategoriesRoute = express.Router()

getcategoriesRoute.get("/categories", getCategories)

module.exports = getcategoriesRoute