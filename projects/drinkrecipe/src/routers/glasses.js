const expres = require("express")
const glasses = require("../controllers/glasses")
const glassesRouter = expres.Router()

glassesRouter.post("/glasses/", glasses)

module.exports= glassesRouter