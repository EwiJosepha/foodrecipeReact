const expres = require("express")
const categories = require("../controllers/categories")
const catRoute = expres.Router()

catRoute.post("/categories", categories)

module.exports = catRoute