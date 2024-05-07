const expres = require("express")
const ingredientsFn = require("../controllers/ingredients")
const ingredientsR = expres.Router()

ingredientsR.post("/ingredients", ingredientsFn)

module.exports= ingredientsR